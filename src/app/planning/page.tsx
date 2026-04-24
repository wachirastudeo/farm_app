"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BottomNavBar } from '@/components/layout/BottomNavBar';

const TODAY = new Date();
const DAYS_TH = ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.'];

// Generate 7 days starting from Mon of this week
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

// Calendar days for current month
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

const TASK_EVENTS: Record<number, string[]> = { 1: ['blue'], 3: ['orange'], 6: ['emerald'], 13: ['blue', 'orange'], 20: ['emerald'], 24: ['blue'], 27: ['orange', 'emerald'] };

const INITIAL_TASKS = [
  { id: 1, title: 'รดน้ำทุเรียน แปลง A', time: '08:00 น.', detail: 'โซนน้ำหยด', icon: 'water_drop', iconColor: 'text-sky-600', iconBg: 'bg-sky-50', type: 'water', done: false },
  { id: 2, title: 'ใส่ปุ๋ยมะม่วง แปลง B', time: '10:30 น.', detail: 'สูตร 15-15-15', icon: 'compost', iconColor: 'text-orange-600', iconBg: 'bg-orange-50', type: 'fertilizer', done: false },
  { id: 3, title: 'พ่นยากำจัดแมลง', time: '07:00 น.', detail: 'เสร็จสิ้นแล้ว', icon: 'pest_control', iconColor: 'text-emerald-600', iconBg: 'bg-emerald-50', type: 'spray', done: true },
  { id: 4, title: 'ตรวจสอบมังคุด แปลง C', time: '14:00 น.', detail: 'ประเมินความสุก', icon: 'search', iconColor: 'text-violet-600', iconBg: 'bg-violet-50', type: 'inspect', done: false },
];

const FILTERS = [
  { key: 'all', label: 'ทั้งหมด' },
  { key: 'water', label: 'รดน้ำ' },
  { key: 'fertilizer', label: 'ใส่ปุ๋ย' },
  { key: 'spray', label: 'พ่นยา' },
  { key: 'inspect', label: 'ตรวจสอบ' },
];

type NewTask = { title: string; time: string; detail: string; type: string };

const TYPE_OPTIONS = [
  { key: 'water', label: 'รดน้ำ', icon: 'water_drop', iconColor: 'text-sky-600', iconBg: 'bg-sky-50' },
  { key: 'fertilizer', label: 'ใส่ปุ๋ย', icon: 'compost', iconColor: 'text-orange-600', iconBg: 'bg-orange-50' },
  { key: 'spray', label: 'พ่นยา', icon: 'pest_control', iconColor: 'text-emerald-600', iconBg: 'bg-emerald-50' },
  { key: 'inspect', label: 'ตรวจสอบ', icon: 'search', iconColor: 'text-violet-600', iconBg: 'bg-violet-50' },
  { key: 'harvest', label: 'เก็บเกี่ยว', icon: 'agriculture', iconColor: 'text-amber-600', iconBg: 'bg-amber-50' },
  { key: 'other', label: 'อื่นๆ', icon: 'more_horiz', iconColor: 'text-zinc-600', iconBg: 'bg-zinc-100' },
];

export default function Planning() {
  const router = useRouter();
  const weekDays = getWeekDays();
  const [selectedDay, setSelectedDay] = useState(TODAY.getDate());
  const [selectedCalDay, setSelectedCalDay] = useState(TODAY.getDate());
  const [filter, setFilter] = useState('all');
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  const [showModal, setShowModal] = useState(false);
  const [newTask, setNewTask] = useState<NewTask>({ title: '', time: '', detail: '', type: 'water' });
  const [nextId, setNextId] = useState(10);

  const { cells } = getMonthDays(TODAY.getFullYear(), TODAY.getMonth());

  const filteredTasks = tasks.filter(t => filter === 'all' || t.type === filter);
  const doneCount = tasks.filter(t => t.done).length;

  const toggleTask = (id: number) => setTasks(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t));

  const addTask = () => {
    if (!newTask.title.trim()) return;
    const opt = TYPE_OPTIONS.find(o => o.key === newTask.type)!;
    setTasks(prev => [...prev, {
      id: nextId, title: newTask.title, time: newTask.time || '09:00 น.',
      detail: newTask.detail, icon: opt.icon, iconColor: opt.iconColor,
      iconBg: opt.iconBg, type: newTask.type, done: false,
    }]);
    setNextId(n => n + 1);
    setNewTask({ title: '', time: '', detail: '', type: 'water' });
    setShowModal(false);
  };

  const CalendarGrid = () => (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-semibold font-kanit text-slate-800">
          {TODAY.toLocaleDateString('th-TH', { month: 'long', year: 'numeric' })}
        </h3>
        <div className="flex gap-1">
          <button className="p-1 rounded-lg hover:bg-slate-100 transition-colors text-slate-500">
            <span className="material-symbols-outlined text-[18px]">chevron_left</span>
          </button>
          <button className="p-1 rounded-lg hover:bg-slate-100 transition-colors text-slate-500">
            <span className="material-symbols-outlined text-[18px]">chevron_right</span>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-y-1 text-center">
        {DAYS_TH.map(d => (
          <div key={d} className="text-[10px] font-semibold text-slate-400 font-kanit pb-1">{d}</div>
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
              className={`relative py-1.5 text-sm rounded-xl transition-all font-kanit ${
                !cell.current ? 'text-slate-200 cursor-default' :
                isSelected ? 'bg-[#2d5a27] text-white font-bold shadow-sm' :
                isToday ? 'bg-emerald-50 text-emerald-700 font-bold' :
                'text-slate-700 hover:bg-slate-100'
              }`}
            >
              {cell.day}
              {dots.length > 0 && (
                <span className={`absolute bottom-0.5 left-1/2 -translate-x-1/2 flex gap-0.5 ${isSelected ? 'opacity-0' : ''}`}>
                  {dots.map((c, j) => (
                    <span key={j} className={`w-1 h-1 rounded-full bg-${c}-500`} />
                  ))}
                </span>
              )}
            </button>
          );
        })}
      </div>
      <div className="mt-3 pt-3 border-t border-zinc-100 flex gap-4 flex-wrap">
        {[['blue', 'รดน้ำ'], ['orange', 'ใส่ปุ๋ย'], ['emerald', 'เก็บเกี่ยว']].map(([c, l]) => (
          <div key={c} className="flex items-center gap-1.5 text-xs text-slate-500 font-kanit">
            <span className={`w-2 h-2 rounded-full bg-${c}-500`} />
            {l}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      {/* Add Task Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-end lg:items-center justify-center bg-black/40 backdrop-blur-sm" onClick={() => setShowModal(false)}>
          <div className="bg-white w-full lg:max-w-md rounded-t-3xl lg:rounded-3xl p-6 shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-xl font-bold font-kanit text-[#1a1c1b]">เพิ่มงานใหม่</h2>
              <button onClick={() => setShowModal(false)} className="p-2 rounded-xl hover:bg-zinc-100 transition-colors">
                <span className="material-symbols-outlined text-zinc-500">close</span>
              </button>
            </div>
            <div className="space-y-4">
              {/* Type */}
              <div className="grid grid-cols-3 gap-2">
                {TYPE_OPTIONS.map(opt => (
                  <label key={opt.key} className="cursor-pointer">
                    <input type="radio" name="new-type" className="sr-only peer" value={opt.key}
                      checked={newTask.type === opt.key} onChange={() => setNewTask(t => ({ ...t, type: opt.key }))} />
                    <div className={`flex items-center gap-2 p-2.5 rounded-xl border text-xs font-semibold font-kanit transition-all peer-checked:border-[#154212] peer-checked:bg-emerald-50 peer-checked:text-[#154212] border-zinc-200 text-zinc-600 hover:bg-zinc-50`}>
                      <span className={`material-symbols-outlined text-[18px] ${newTask.type === opt.key ? 'text-[#154212]' : opt.iconColor}`}>{opt.icon}</span>
                      {opt.label}
                    </div>
                  </label>
                ))}
              </div>
              {/* Title */}
              <input className="w-full border border-zinc-200 rounded-xl px-4 py-3 text-base font-kanit focus:ring-2 focus:ring-[#154212] focus:outline-none"
                placeholder="ชื่องาน *" value={newTask.title} onChange={e => setNewTask(t => ({ ...t, title: e.target.value }))} />
              {/* Time */}
              <input className="w-full border border-zinc-200 rounded-xl px-4 py-3 text-base font-kanit focus:ring-2 focus:ring-[#154212] focus:outline-none"
                type="time" value={newTask.time} onChange={e => setNewTask(t => ({ ...t, time: e.target.value }))} />
              {/* Detail */}
              <input className="w-full border border-zinc-200 rounded-xl px-4 py-3 text-base font-kanit focus:ring-2 focus:ring-[#154212] focus:outline-none"
                placeholder="รายละเอียด (เช่น แปลง A, สูตรปุ๋ย)" value={newTask.detail} onChange={e => setNewTask(t => ({ ...t, detail: e.target.value }))} />
              <button onClick={addTask} disabled={!newTask.title.trim()}
                className="w-full bg-[#154212] disabled:opacity-50 hover:bg-[#2d5a27] text-white py-4 rounded-2xl font-semibold font-kanit text-base flex items-center justify-center gap-2 transition-all active:scale-[0.98]">
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: '"FILL" 1' }}>add_circle</span>
                เพิ่มงาน
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Header */}
      <header className="hidden lg:flex items-center justify-between px-8 py-6 border-b border-zinc-100 bg-white/80 backdrop-blur-md sticky top-0 z-10">
        <div>
          <h1 className="text-2xl font-bold text-[#2d5a27] tracking-tight">วางแผนสวน</h1>
          <p className="text-sm text-slate-500 font-medium mt-0.5">
            งานเสร็จแล้ว {doneCount}/{tasks.length} งาน
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/activity-summary" className="p-2 rounded-xl hover:bg-emerald-50 transition-all border border-zinc-100 text-emerald-600">
            <span className="material-symbols-outlined">summarize</span>
          </Link>
          <button id="desktop-add-task" onClick={() => setShowModal(true)}
            className="px-4 py-2 bg-emerald-600 text-white text-sm font-semibold rounded-xl hover:bg-emerald-700 transition-colors flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">add</span>
            เพิ่มงาน
          </button>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-zinc-100 shadow-sm flex justify-between items-center px-6 h-16">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-emerald-600">eco</span>
          <h1 className="text-xl font-bold text-emerald-700 tracking-tight font-kanit">OrchardPro</h1>
        </div>
        <button id="mobile-add-task" onClick={() => setShowModal(true)}
          className="flex items-center gap-1 px-3 py-1.5 bg-emerald-600 text-white text-sm font-semibold rounded-xl hover:bg-emerald-700 transition-colors active:scale-95">
          <span className="material-symbols-outlined text-[16px]">add</span>
          เพิ่มงาน
        </button>
      </header>

      <main className="lg:px-8 lg:py-6 lg:max-w-7xl lg:mx-auto pt-20 px-6 max-w-2xl mx-auto pb-32">
        <div className="lg:hidden flex justify-between items-end mb-6">
          <div>
            <h2 className="text-3xl font-bold font-kanit text-[#2d5a27]">วางแผนสวน</h2>
            <p className="text-sm text-slate-500 font-kanit mt-1">เสร็จแล้ว {doneCount}/{tasks.length} งาน</p>
          </div>
        </div>

        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          {/* Left: Date strip + filters + tasks */}
          <div className="lg:col-span-2 space-y-6">

            {/* Day Picker */}
            <div>
              <h3 className="text-sm font-semibold text-slate-500 mb-3 hidden lg:block uppercase tracking-wider">เลือกวัน</h3>
              <div className="flex gap-3 overflow-x-auto pb-3 -mx-6 px-6 lg:mx-0 lg:px-0 no-scrollbar">
                {weekDays.map((d) => {
                  const isSelected = d.getDate() === selectedDay;
                  const isToday = d.getDate() === TODAY.getDate();
                  return (
                    <button key={d.getDate()} onClick={() => setSelectedDay(d.getDate())}
                      className={`flex flex-col items-center justify-center min-w-[64px] h-20 rounded-2xl transition-all active:scale-95 ${
                        isSelected
                          ? 'bg-[#2d5a27] text-white shadow-lg ring-2 ring-[#2d5a27]/20'
                          : isToday
                          ? 'bg-emerald-50 border-2 border-emerald-300 text-emerald-700'
                          : 'bg-white border border-slate-200 shadow-sm text-slate-700 hover:border-emerald-300'
                      }`}
                    >
                      <span className="text-xs font-kanit opacity-80">{DAYS_TH[d.getDay()]}</span>
                      <span className="text-2xl font-bold font-kanit">{d.getDate()}</span>
                      {isToday && !isSelected && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-0.5" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Filter Chips */}
            <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
              {FILTERS.map(f => (
                <button key={f.key} onClick={() => setFilter(f.key)}
                  className={`px-4 py-2 rounded-full text-sm font-medium font-kanit whitespace-nowrap transition-all active:scale-95 ${
                    filter === f.key
                      ? 'bg-[#ffdeac] text-[#281900] shadow-sm'
                      : 'border border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}>
                  {f.label}
                </button>
              ))}
            </div>

            {/* Task List */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold text-slate-700 font-kanit">
                  รายการงาน
                  <span className="ml-2 text-xs font-medium text-slate-400">
                    {filteredTasks.length} งาน
                  </span>
                </h3>
                <Link href="/activity-summary" className="text-xs text-emerald-600 font-semibold font-kanit flex items-center hover:text-emerald-700 transition-colors">
                  ดูสรุป <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                </Link>
              </div>

              {filteredTasks.length === 0 && (
                <div className="text-center py-12 text-slate-400">
                  <span className="material-symbols-outlined text-5xl">check_circle</span>
                  <p className="mt-2 font-kanit text-sm">ไม่มีงานในหมวดนี้</p>
                </div>
              )}

              {filteredTasks.map(task => (
                <div key={task.id}
                  className={`bg-white rounded-2xl p-4 border shadow-sm flex items-center gap-4 transition-all ${
                    task.done ? 'border-slate-100 opacity-60' : 'border-[#E0E0DB] shadow-[0_4px_12px_rgba(45,90,39,0.08)]'
                  }`}>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${task.iconBg}`}>
                    <span className={`material-symbols-outlined ${task.iconColor}`}
                      style={{ fontVariationSettings: task.done ? '"FILL" 1' : '"FILL" 0' }}>
                      {task.icon}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className={`font-kanit font-semibold text-slate-800 ${task.done ? 'line-through text-slate-400' : ''}`}>
                      {task.title}
                    </h4>
                    <p className="text-sm font-kanit text-slate-500 truncate">
                      {task.done ? '✓ เสร็จสิ้น' : `${task.time} • ${task.detail}`}
                    </p>
                  </div>
                  <button
                    id={`task-toggle-${task.id}`}
                    onClick={() => toggleTask(task.id)}
                    aria-label={task.done ? 'ยกเลิก' : 'เสร็จแล้ว'}
                    className={`w-10 h-10 rounded-full border-2 flex items-center justify-center shrink-0 transition-all active:scale-90 ${
                      task.done
                        ? 'bg-emerald-600 border-emerald-600 text-white'
                        : 'border-slate-300 text-slate-300 hover:border-emerald-600 hover:text-emerald-600 hover:bg-emerald-50'
                    }`}>
                    <span className="material-symbols-outlined text-[18px]"
                      style={{ fontVariationSettings: task.done ? '"FILL" 1' : '"FILL" 0' }}>
                      {task.done ? 'check_circle' : 'check'}
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Calendar (desktop) */}
          <div className="hidden lg:block">
            <div className="bg-white rounded-3xl p-6 border border-[#E0E0DB] shadow-sm sticky top-[88px]">
              <CalendarGrid />
              <div className="mt-4 pt-4 border-t border-zinc-100">
                <p className="text-xs font-semibold font-kanit text-slate-500 mb-2">
                  วันที่ {selectedCalDay} — {tasks.filter(t => !t.done).length} งานรอดำเนินการ
                </p>
                <button onClick={() => setShowModal(true)}
                  className="w-full py-2.5 rounded-xl border-2 border-dashed border-emerald-300 text-emerald-600 text-sm font-semibold font-kanit hover:bg-emerald-50 transition-colors flex items-center justify-center gap-1">
                  <span className="material-symbols-outlined text-[18px]">add</span>
                  เพิ่มงานวันนี้
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Calendar */}
        <div className="mt-8 lg:hidden">
          <h3 className="text-2xl font-semibold font-kanit mb-4 text-slate-800">ปฏิทินงานเดือนนี้</h3>
          <div className="bg-white rounded-3xl p-6 border border-[#E0E0DB] shadow-sm">
            <CalendarGrid />
          </div>
        </div>
      </main>

      {/* FAB */}
      <button id="fab-add-task" onClick={() => setShowModal(true)}
        className="fixed bottom-24 right-6 lg:bottom-8 lg:right-8 w-14 h-14 bg-emerald-600 text-white rounded-2xl shadow-xl flex items-center justify-center active:scale-90 transition-transform z-40 hover:bg-emerald-700">
        <span className="material-symbols-outlined text-3xl">add</span>
      </button>

      <BottomNavBar />
    </>
  );
}
