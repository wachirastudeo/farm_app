"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BottomNavBar } from '@/components/layout/BottomNavBar';

const TODAY = new Date();
const DAYS_TH = ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.'];

function getWeekDays() {
  const days = [];
  const start = new Date(TODAY);
  start.setDate(TODAY.getDate() - TODAY.getDay() + 1); // Monday
  for (let i = 0; i < 7; i++) {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    days.push(d);
  }
  return days;
}

function getMonthDays(year: number, month: number) {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const prevDays = new Date(year, month, 0).getDate();
  const cells = [];
  for (let i = firstDay - 1; i >= 0; i--) cells.push({ day: prevDays - i, current: false });
  for (let i = 1; i <= daysInMonth; i++) cells.push({ day: i, current: true });
  while (cells.length % 7 !== 0) cells.push({ day: cells.length - daysInMonth - firstDay + 2, current: false });
  return { cells, firstDay };
}

const TASK_EVENTS: Record<number, string[]> = { 1: ['sky'], 3: ['amber'], 6: ['emerald'], 13: ['sky', 'amber'], 20: ['emerald'], 24: ['sky'], 27: ['amber', 'emerald'] };

const INITIAL_TASKS = [
  { id: 1, title: 'รดน้ำทุเรียน แปลง A', time: '08:00 น.', detail: 'ระบบน้ำหยด', icon: 'water_drop', color: 'text-sky-500', bg: 'bg-sky-50', type: 'water', done: false },
  { id: 2, title: 'ใส่ปุ๋ยมะม่วง แปลง B', time: '10:30 น.', detail: 'สูตร 15-15-15', icon: 'compost', color: 'text-emerald-500', bg: 'bg-emerald-50', type: 'fertilizer', done: false },
  { id: 3, title: 'พ่นยากำจัดแมลง', time: '07:00 น.', detail: 'เสร็จสิ้น', icon: 'pest_control', color: 'text-rose-500', bg: 'bg-rose-50', type: 'spray', done: true },
  { id: 4, title: 'ตรวจสอบมังคุด แปลง C', time: '14:00 น.', detail: 'เช็คความสุก', icon: 'search', color: 'text-indigo-500', bg: 'bg-indigo-50', type: 'inspect', done: false },
];

const FILTERS = [
  { key: 'all', label: 'ทั้งหมด' },
  { key: 'water', label: 'รดน้ำ' },
  { key: 'fertilizer', label: 'ใส่ปุ๋ย' },
  { key: 'spray', label: 'พ่นยา' },
  { key: 'inspect', label: 'ตรวจสอบ' },
];

export default function Planning() {
  const router = useRouter();
  const weekDays = getWeekDays();
  const [selectedDay, setSelectedDay] = useState(TODAY.getDate());
  const [selectedCalDay, setSelectedCalDay] = useState(TODAY.getDate());
  const [filter, setFilter] = useState('all');
  const [tasks, setTasks] = useState(INITIAL_TASKS);

  const { cells } = getMonthDays(TODAY.getFullYear(), TODAY.getMonth());
  const filteredTasks = tasks
    .filter(t => filter === 'all' || t.type === filter)
    .sort((a, b) => (a.done === b.done ? 0 : a.done ? 1 : -1));
  const doneCount = tasks.filter(t => t.done).length;

  const toggleTask = (id: number) => setTasks(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t));
  const deleteTask = (id: number) => setTasks(prev => prev.filter(t => t.id !== id));
  
  const [editingTask, setEditingTask] = useState<any>(null);
  const [showEditModal, setShowEditModal] = useState(false);

  const handleEditSave = (e: React.FormEvent) => {
    e.preventDefault();
    setTasks(prev => prev.map(t => t.id === editingTask.id ? editingTask : t));
    setShowEditModal(false);
  };

  const CalendarGrid = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-black text-slate-800 uppercase tracking-[0.2em]">
          {TODAY.toLocaleDateString('th-TH', { month: 'long', year: 'numeric' })}
        </h3>
        <div className="flex gap-2">
          <button className="size-9 rounded-xl bg-white shadow-sm flex items-center justify-center text-slate-600 hover:text-emerald-500 transition-all border border-slate-200 active:scale-90">
            <span className="material-symbols-outlined text-[20px]">chevron_left</span>
          </button>
          <button className="size-9 rounded-xl bg-white shadow-sm flex items-center justify-center text-slate-600 hover:text-emerald-500 transition-all border border-slate-200 active:scale-90">
            <span className="material-symbols-outlined text-[20px]">chevron_right</span>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-y-2 text-center">
        {DAYS_TH.map(d => (
          <div key={d} className="text-[11px] font-black text-slate-300 uppercase tracking-[0.2em] pb-3">{d}</div>
        ))}
        {cells.map((cell, i) => {
          const dots = cell.current ? (TASK_EVENTS[cell.day] || []) : [];
          const isToday = cell.current && cell.day === TODAY.getDate();
          const isSelected = cell.current && cell.day === selectedCalDay;
          return (
            <button
              key={i}
              onClick={() => cell.current && setSelectedCalDay(cell.day)}
              disabled={!cell.current}
              className={`relative py-3 text-sm rounded-2xl transition-all font-black ${
                !cell.current ? 'text-slate-200' :
                isSelected ? 'bg-slate-900 text-white shadow-xl shadow-slate-900/20' :
                isToday ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' :
                'text-slate-600 hover:bg-slate-50'
              }`}
            >
              {cell.day}
              {dots.length > 0 && (
                <span className={`absolute bottom-1.5 left-1/2 -translate-x-1/2 flex gap-0.5 ${isSelected ? 'hidden' : ''}`}>
                  {dots.map((c, j) => (
                    <span key={j} className={`w-1 h-1 rounded-full bg-${c}-500`} />
                  ))}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-[#f2f8f5] to-slate-100 pb-32 relative overflow-hidden font-kanit text-slate-800">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-emerald-500/5 to-transparent pointer-events-none"></div>

      {/* Header */}
      <header className="sticky top-0 z-30 px-6 h-20 flex items-center justify-between backdrop-blur-xl bg-white/60 border-b border-white/40 shadow-sm">
        <div className="flex items-center gap-4">
          <button
            onClick={() => router.back()}
            className="size-10 rounded-xl bg-white shadow-sm border border-slate-200/60 hover:bg-slate-50 flex items-center justify-center transition-all text-slate-600 active:scale-90"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <div>
            <h1 className="text-xl font-black text-slate-800 tracking-tight leading-none">วางแผนงานสวน</h1>
            <div className={`flex items-center justify-center min-w-[60px] h-6 px-2.5 rounded-lg border transition-all duration-500 mt-1 ${
              doneCount === tasks.length
                ? 'bg-emerald-500 text-white border-emerald-400 shadow-sm shadow-emerald-500/20'
                : 'bg-rose-500 text-white border-rose-400 shadow-sm shadow-rose-500/20'
            }`}>
              <span className="text-[10px] font-black tracking-widest uppercase">
                {doneCount} / {tasks.length} สำเร็จ
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/activity-summary" className="size-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-emerald-500 transition-all shadow-sm">
            <span className="material-symbols-outlined">analytics</span>
          </Link>
          <Link 
            href="/planning/add"
            className="bg-slate-900 text-white font-bold px-5 py-2.5 rounded-xl hover:bg-emerald-800 transition-all active:scale-95 shadow-lg shadow-slate-900/10 flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[20px]">add</span>
            <span className="hidden sm:inline">เพิ่มแผนงาน</span>
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8 relative z-10">
        
        <div className="lg:grid lg:grid-cols-3 lg:gap-10">
          
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Week Strip */}
            <section className="space-y-4">
              <div className="flex items-center justify-between px-1">
                <h3 className="text-xs font-black text-slate-600 uppercase tracking-[0.2em]">เลือกวันที่</h3>
              </div>
              <div className="flex gap-3 overflow-x-auto pb-4 -mx-6 px-6 lg:mx-0 lg:px-0 no-scrollbar">
                {weekDays.map((d) => {
                  const isSelected = d.getDate() === selectedDay;
                  const isToday = d.getDate() === TODAY.getDate();
                  return (
                    <button 
                      key={d.getDate()} 
                      onClick={() => setSelectedDay(d.getDate())}
                      className={`flex flex-col items-center justify-center min-w-[64px] h-20 rounded-[1.5rem] transition-all active:scale-95 border ${
                        isSelected
                          ? 'bg-slate-900 border-slate-900 text-white shadow-xl shadow-slate-900/20'
                          : isToday
                          ? 'bg-emerald-50 border-emerald-200 text-emerald-700'
                          : 'bg-white border-slate-100 text-slate-600 hover:border-emerald-200 shadow-sm'
                      }`}
                    >
                      <span className="text-[9px] font-black uppercase tracking-widest text-slate-500 mb-1">{DAYS_TH[d.getDay()]}</span>
                      <span className="text-xl font-black tracking-tight">{d.getDate()}</span>
                      {isToday && !isSelected && <span className="size-1 rounded-full bg-emerald-500 mt-1 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />}
                    </button>
                  );
                })}
              </div>
            </section>

            {/* Filters */}
            <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
              {FILTERS.map(f => (
                <button 
                  key={f.key} 
                  onClick={() => setFilter(f.key)}
                  className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all active:scale-95 ${
                    filter === f.key
                      ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20'
                      : 'bg-white border border-slate-200 text-slate-600 hover:border-emerald-500 hover:text-emerald-500'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            {/* Task List */}
            <section className="space-y-4">
              <div className="flex items-center justify-between px-1">
                <h3 className="text-xs font-black text-slate-600 uppercase tracking-[0.2em]">งานที่กำลังดำเนินการ</h3>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">พบ {filteredTasks.length} แผนงาน</span>
              </div>

              <div className="space-y-4">
                {filteredTasks.map(task => (
                  <div 
                    key={task.id} 
                    className={`rounded-[1.75rem] p-5 flex items-center gap-4 transition-all duration-300 border group ${
                      task.done
                        ? 'border-emerald-200 bg-emerald-50/50'
                        : 'border-slate-100 bg-white shadow-md hover:border-emerald-200'
                    }`}
                  >
                    <div className="flex-1 min-w-0 flex items-center gap-5">
                      <div className={`size-12 rounded-2xl flex items-center justify-center shrink-0 shadow-lg ${task.bg} shadow-${task.color.split('-')[1]}-500/10`}>
                        <span
                          className={`material-symbols-outlined text-[24px] ${task.color}`}
                          style={{fontVariationSettings: '"FILL" 1'}}
                        >
                          {task.icon}
                        </span>
                      </div>

                      <div className="flex-1 min-w-0 flex flex-col">
                        <span className={`text-base font-black tracking-tight truncate text-slate-800`}>
                          {task.title}
                        </span>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className={`text-xs font-bold truncate ${task.done ? 'text-emerald-600' : 'text-slate-600'}`}>
                            {task.done ? '✓ เสร็จสิ้นแล้ว' : `${task.time} • ${task.detail}`}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setEditingTask(task);
                          setShowEditModal(true);
                        }}
                        className="size-9 rounded-xl flex items-center justify-center text-slate-600 hover:text-emerald-500 hover:bg-emerald-50 transition-all"
                      >
                        <span className="material-symbols-outlined text-[18px]">edit</span>
                      </button>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          deleteTask(task.id);
                        }}
                        className="size-9 rounded-xl flex items-center justify-center text-slate-600 hover:text-rose-500 hover:bg-rose-50 transition-all"
                      >
                        <span className="material-symbols-outlined text-[18px]">delete</span>
                      </button>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleTask(task.id);
                        }}
                        className={`size-9 rounded-xl flex items-center justify-center transition-all ${
                          task.done 
                            ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20' 
                            : 'bg-white border border-slate-200 text-slate-300 hover:border-emerald-500 hover:text-emerald-500'
                        }`}
                      >
                        <span className="material-symbols-outlined text-[18px] font-black">{task.done ? 'done_all' : 'done'}</span>
                      </button>
                    </div>
                  </div>
                ))}

                {filteredTasks.length === 0 && (
                  <div className="py-20 text-center flex flex-col items-center">
                    <div className="size-16 bg-slate-50 rounded-full flex items-center justify-center text-slate-200 mb-4">
                      <span className="material-symbols-outlined text-[32px]">event_busy</span>
                    </div>
                    <p className="text-xs font-black text-slate-600 uppercase tracking-widest">ไม่มีแผนงานในหมวดหมู่นี้</p>
                  </div>
                )}
              </div>
            </section>
          </div>

          {/* Right Column: Calendar */}
          <div className="hidden lg:block space-y-6">
            <section className="bg-white/80 backdrop-blur-xl rounded-[2rem] border border-white p-6 sticky top-28 space-y-6">
              {/* Daily Stats - Moved to Top */}
              <div className="space-y-4">
                <div className="flex items-center justify-between px-1">
                  <h4 className="text-xs font-black text-slate-600 uppercase tracking-[0.2em]">สถิติรายวัน</h4>
                  <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">วันนี้</span>
                </div>
                
                <div className="bg-emerald-500/5 rounded-[2rem] p-5 border border-emerald-500/10 flex flex-col gap-3 relative overflow-hidden group">
                  <div className="absolute -right-4 -bottom-4 text-emerald-500/10 group-hover:scale-110 transition-transform duration-700">
                    <span className="material-symbols-outlined text-[100px]" style={{fontVariationSettings: '"FILL" 1'}}>task_alt</span>
                  </div>
                  <div className="flex items-center justify-between relative z-20">
                    <div className="flex items-center gap-2 text-emerald-600/80">
                      <span className="material-symbols-outlined text-[18px]">verified</span>
                      <span className="text-[10px] font-black uppercase tracking-[0.2em]">ความคืบหน้า</span>
                    </div>
                    <div className="flex items-center gap-3 text-[9px] font-black uppercase tracking-widest">
                      <span className="text-slate-600">ทั้งหมด <span className="text-slate-900">{tasks.length}</span></span>
                      <span className="text-emerald-600">เสร็จ <span className="text-emerald-700">{doneCount}</span></span>
                      <span className="text-rose-500">เหลือ <span className="text-rose-600">{tasks.length - doneCount}</span></span>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <p className="text-3xl font-black text-emerald-900 tracking-tighter leading-none">
                      {doneCount} / {tasks.length}
                      <span className="text-xs font-bold text-emerald-600/50 uppercase tracking-widest ml-2">งาน</span>
                    </p>
                    <div className="mt-3 h-2 w-full bg-emerald-200/30 rounded-full overflow-hidden shadow-inner">
                      <div 
                        className="h-full bg-emerald-500 transition-all duration-1000" 
                        style={{ width: `${(doneCount / tasks.length) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-50">
                <CalendarGrid />
              </div>
            </section>
          </div>
        </div>
      </main>

      <BottomNavBar />

      {/* Edit Modal */}
      {showEditModal && editingTask && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setShowEditModal(false)} />
          <div className="relative w-full max-w-md bg-white rounded-[2.5rem] shadow-2xl overflow-hidden p-8 animate-in fade-in zoom-in duration-300">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-black text-slate-800">แก้ไขแผนงาน</h3>
              <button onClick={() => setShowEditModal(false)} className="size-10 rounded-xl hover:bg-slate-50 flex items-center justify-center text-slate-400">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <form onSubmit={handleEditSave} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-600 uppercase tracking-widest ml-1">หัวข้อ</label>
                <input 
                  type="text" 
                  value={editingTask.title}
                  onChange={e => setEditingTask({...editingTask, title: e.target.value})}
                  className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl font-bold text-slate-800 focus:bg-white outline-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-600 uppercase tracking-widest ml-1">เวลา</label>
                  <input 
                    type="text" 
                    value={editingTask.time}
                    onChange={e => setEditingTask({...editingTask, time: e.target.value})}
                    className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl font-bold text-slate-800 focus:bg-white outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-600 uppercase tracking-widest ml-1">รายละเอียด</label>
                  <input 
                    type="text" 
                    value={editingTask.detail}
                    onChange={e => setEditingTask({...editingTask, detail: e.target.value})}
                    className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl font-bold text-slate-800 focus:bg-white outline-none"
                  />
                </div>
              </div>

              <div className="pt-4 flex gap-3">
                <button 
                  type="button"
                  onClick={() => {
                    deleteTask(editingTask.id);
                    setShowEditModal(false);
                  }}
                  className="flex-1 py-4 rounded-2xl border-2 border-rose-100 text-rose-500 font-black text-sm uppercase tracking-widest hover:bg-rose-50 transition-all active:scale-95"
                >
                  ลบออก
                </button>
                <button 
                  type="submit"
                  className="flex-[2] py-4 rounded-2xl bg-emerald-500 text-white font-black text-sm uppercase tracking-widest shadow-lg shadow-emerald-500/20 hover:bg-emerald-600 transition-all active:scale-95"
                >
                  บันทึกการแก้ไข
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
