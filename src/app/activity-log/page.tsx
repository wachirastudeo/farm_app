"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BottomNavBar } from '@/components/layout/BottomNavBar';

const ACTIVITY_TYPES = [
  { value: 'water', label: 'รดน้ำ', icon: 'water_drop', color: 'text-sky-500', bg: 'bg-sky-50' },
  { value: 'fertilizer', label: 'ใส่ปุ๋ย', icon: 'compost', color: 'text-emerald-500', bg: 'bg-emerald-50' },
  { value: 'spray', label: 'พ่นยา', icon: 'pest_control', color: 'text-rose-500', bg: 'bg-rose-50' },
  { value: 'prune', label: 'ตัดแต่ง', icon: 'content_cut', color: 'text-violet-500', bg: 'bg-violet-50' },
  { value: 'harvest', label: 'เก็บเกี่ยว', icon: 'agriculture', color: 'text-amber-500', bg: 'bg-amber-50' },
  { value: 'inspect', label: 'ตรวจสอบ', icon: 'search', color: 'text-indigo-500', bg: 'bg-indigo-50' },
  { value: 'soil', label: 'ปรับดิน', icon: 'landscape', color: 'text-orange-500', bg: 'bg-orange-50' },
  { value: 'other', label: 'อื่นๆ', icon: 'more_horiz', color: 'text-slate-500', bg: 'bg-slate-50' },
];

const PLOTS = [
  { value: 'A1', label: 'แปลง A1 — ทุเรียนหมอนทอง' },
  { value: 'A2', label: 'แปลง A2 — ทุเรียนก้านยาว' },
  { value: 'B1', label: 'แปลง B1 — มังคุด' },
  { value: 'B2', label: 'แปลง B2 — เงาะโรงเรียน' },
];

const MOCK_LOGS = [
  { id: 1, type: 'water', date: '2026-04-24', time: '07:30', plot: 'A1', desc: 'รดน้ำเช้าตามรอบปกติ', workers: 1, cost: 0 },
  { id: 2, type: 'fertilizer', date: '2026-04-23', time: '16:00', plot: 'B1', desc: 'ใส่ปุ๋ยคอกบำรุงต้น', workers: 2, cost: 500 },
  { id: 3, type: 'spray', date: '2026-04-22', time: '06:00', plot: 'A2', desc: 'พ่นยาฮอร์โมนขั้วเหนียว', workers: 1, cost: 350 },
  { id: 4, type: 'prune', date: '2026-04-20', time: '08:30', plot: 'B2', desc: 'ตัดแต่งกิ่งแขนง', workers: 3, cost: 900 },
];

export default function ActivityLog() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-[#f2f8f5] to-slate-100 pb-32 relative overflow-hidden font-kanit">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-emerald-500/5 to-transparent pointer-events-none"></div>
      
      {/* Desktop Page Header */}
      <header className="sticky top-0 z-30 px-8 h-20 flex items-center justify-between backdrop-blur-xl bg-white/60 border-b border-white/40 shadow-sm">
        <div className="flex items-center gap-4">
          <button
            onClick={() => router.back()}
            className="size-10 rounded-xl bg-white shadow-sm border border-slate-200/60 hover:bg-slate-50 flex items-center justify-center transition-all text-slate-600 active:scale-90"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <div>
            <h1 className="text-xl font-black text-slate-800 tracking-tight leading-none">สมุดบันทึกสวน</h1>
            <p className="text-[10px] font-black text-slate-700 uppercase tracking-[0.2em] mt-1">ประวัติการดำเนินงาน</p>
          </div>
        </div>
        <Link
          href="/activity-log/add"
          className="bg-slate-900 text-white font-bold px-6 py-2.5 rounded-xl hover:bg-emerald-800 transition-all active:scale-95 shadow-lg shadow-slate-900/10 flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-[20px]">add</span>
          บันทึกใหม่
        </Link>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8 space-y-6 relative z-10">
        
        {/* Search & Filter Bar */}
        <div className="flex gap-3">
          <div className="relative flex-1 group">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-600 group-focus-within:text-emerald-500 transition-colors">search</span>
            <input 
              type="text" 
              placeholder="ค้นหาตามแปลง หรือประเภทงาน..." 
              className="w-full bg-white border border-slate-200 rounded-2xl py-3.5 pl-12 pr-4 text-sm font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 shadow-sm transition-all" 
            />
          </div>
          <button className="px-5 bg-white/80 backdrop-blur-xl border border-white rounded-2xl text-slate-600 hover:text-slate-900 flex items-center gap-2 text-sm font-black transition-all shadow-sm active:scale-95">
            <span className="material-symbols-outlined text-[20px]">filter_list</span>
            <span className="hidden sm:inline">ตัวกรอง</span>
          </button>
        </div>

        {/* Activities List */}
        <div className="space-y-4">
          {MOCK_LOGS.map(log => {
            const typeInfo = ACTIVITY_TYPES.find(t => t.value === log.type) || ACTIVITY_TYPES[ACTIVITY_TYPES.length - 1];
            return (
              <div 
                key={log.id} 
                className="bg-white/80 backdrop-blur-xl p-5 rounded-[2rem] border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-start gap-5 hover:scale-[1.01] transition-all cursor-pointer group"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 border-2 ${typeInfo.bg} ${typeInfo.color} border-white shadow-sm group-hover:shadow-md transition-all`}>
                  <span className="material-symbols-outlined text-[28px]">{typeInfo.icon}</span>
                </div>
                
                <div className="flex-1 min-w-0 pt-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-base font-black text-slate-800 truncate leading-none">
                      {typeInfo.label} — {log.plot}
                    </h3>
                    <div className="flex flex-col items-end shrink-0">
                      <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">{log.date}</span>
                      <span className="text-[10px] font-black text-emerald-600">{log.time}</span>
                    </div>
                  </div>
                  
                  <p className="text-sm font-black text-slate-600 mb-4 line-clamp-1">{log.desc}</p>
                  
                  <div className="flex items-center gap-2">
                    <div className="bg-slate-100 px-3 py-1.5 rounded-xl flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[14px] text-slate-500">group</span>
                      <span className="text-[11px] font-black text-slate-900 uppercase tracking-wider">{log.workers} คน</span>
                    </div>
                    {log.cost > 0 && (
                      <div className="bg-emerald-100 px-3 py-1.5 rounded-xl flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[14px] text-emerald-600">payments</span>
                        <span className="text-[11px] font-black text-emerald-700 uppercase tracking-wider">฿{log.cost}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="self-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="material-symbols-outlined text-slate-300">chevron_right</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State Suggestion */}
        <div className="pt-10 flex flex-col items-center text-center space-y-4">
          <div className="size-20 bg-slate-100 rounded-full flex items-center justify-center text-slate-300">
            <span className="material-symbols-outlined text-[40px]">history</span>
          </div>
          <div>
            <p className="text-sm font-black text-slate-600 uppercase tracking-[0.2em]">สิ้นสุดข้อมูลประวัติ</p>
            <p className="text-xs font-black text-slate-700 mt-1">ไม่มีข้อมูลประวัติเพิ่มเติมสำหรับเดือนนี้</p>
          </div>
        </div>
      </main>

      {/* FAB for Mobile */}
      <Link 
        href="/activity-log/add"
        className="fixed bottom-24 right-6 lg:hidden size-16 bg-slate-900 text-white rounded-[2rem] shadow-2xl shadow-slate-900/40 flex items-center justify-center active:scale-90 transition-all z-40 hover:bg-emerald-800"
      >
        <span className="material-symbols-outlined text-[32px]">add</span>
      </Link>

      <BottomNavBar />
    </div>
  );
}
