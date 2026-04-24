"use client";

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BottomNavBar } from '@/components/layout/BottomNavBar';

export default function ActivitySummary() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-[#f2f8f5] to-slate-100 pb-32 relative overflow-hidden font-kanit text-slate-800">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-emerald-500/5 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-[10%] right-[-10%] w-96 h-96 bg-emerald-400/5 rounded-full blur-3xl pointer-events-none"></div>

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
            <h1 className="text-xl font-black text-slate-800 tracking-tight leading-none">สรุปกิจกรรมสวน</h1>
            <p className="text-[10px] font-black text-slate-700 uppercase tracking-[0.2em] mt-1">ไทม์ไลน์และสถิติ</p>
          </div>
        </div>
        <Link
          href="/activity-log/add"
          className="bg-slate-900 text-white font-bold px-6 py-2.5 rounded-xl hover:bg-emerald-800 transition-all active:scale-95 shadow-lg shadow-slate-900/10 flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-[20px]">add</span>
          <span className="hidden sm:inline">เพิ่มกิจกรรม</span>
        </Link>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8 relative z-10">
        
        {/* Search & View Toggle */}
        <div className="flex flex-col md:flex-row gap-4 mb-10 items-stretch">
          <div className="relative flex-grow group">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-700 group-focus-within:text-emerald-500 transition-colors">search</span>
            <input
              className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-emerald-500/20 text-sm font-bold text-slate-800 placeholder:text-slate-400 shadow-sm transition-all outline-none"
              placeholder="ค้นหาตามชื่อกิจกรรม หรือแปลงปลูก..."
              type="text"
            />
          </div>
          <div className="flex bg-white/80 backdrop-blur-xl rounded-2xl p-1.5 border border-white shadow-sm">
            <button className="px-6 py-2.5 rounded-xl bg-slate-900 text-white font-black text-xs uppercase tracking-widest shadow-lg shadow-slate-900/20 flex items-center gap-2 transition-all">
              <span className="material-symbols-outlined text-[18px]">view_list</span> รายการ
            </button>
            <button className="px-6 py-2.5 rounded-xl text-slate-600 font-black text-xs uppercase tracking-widest hover:text-slate-900 transition-all flex items-center gap-2 border border-slate-100 ml-1">
              <span className="material-symbols-outlined text-[18px]">calendar_month</span> ปฏิทิน
            </button>
          </div>
        </div>

        {/* Filter Chips */}
        <div className="flex overflow-x-auto gap-2 pb-4 mb-8 no-scrollbar">
          {['ทั้งหมด', 'งานสวน', 'เก็บเกี่ยว', 'ปุ๋ย/ยา', 'ตรวจสอบ'].map((label, i) => (
            <button 
              key={label}
              className={`whitespace-nowrap px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest transition-all ${
                i === 0 
                  ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20' 
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-emerald-50 hover:text-emerald-600'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Timeline + Stats grid on desktop */}
        <div className="lg:grid lg:grid-cols-3 lg:gap-10">
          
          {/* Timeline - main content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="relative pl-8 md:pl-0">
              {/* Timeline Line */}
              <div className="absolute left-3 md:left-[108px] top-4 bottom-4 w-1 bg-gradient-to-b from-emerald-500/20 via-slate-200 to-transparent rounded-full"></div>

              <div className="space-y-8">
                {/* Event 1 */}
                <div className="flex flex-col md:flex-row gap-4 md:gap-8 group">
                  <div className="md:w-[92px] shrink-0 text-left md:text-right pt-2">
                    <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest block">08:30 น.</span>
                    <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest block">วันนี้</span>
                  </div>
                  <div className="hidden md:flex shrink-0 size-8 rounded-full bg-white border-4 border-sky-500 items-center justify-center z-10 relative mt-1 shadow-lg shadow-sky-500/20">
                    <div className="size-2 bg-sky-500 rounded-full animate-pulse"></div>
                  </div>
                  <div className="flex-grow bg-white/80 backdrop-blur-xl rounded-[2rem] border border-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:scale-[1.02] transition-all relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-2 h-full bg-sky-500/20"></div>
                    <div className="flex justify-between items-start">
                      <div className="flex gap-4">
                        <div className="md:hidden size-10 rounded-2xl bg-sky-50 text-sky-500 flex items-center justify-center border border-sky-100">
                          <span className="material-symbols-outlined text-[20px]">water_drop</span>
                        </div>
                        <div>
                          <h3 className="font-black text-xl text-slate-800 tracking-tight leading-none mb-2">รดน้ำทุเรียนแปลง A</h3>
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200">โซนเหนือ</span>
                            <span className="text-[10px] font-black text-sky-600 uppercase tracking-widest bg-sky-100 px-2 py-0.5 rounded-md border border-sky-200">ระบบน้ำหยด</span>
                          </div>
                        </div>
                      </div>
                      <div className="size-10 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/20 active:scale-90 transition-transform">
                        <span className="material-symbols-outlined text-[20px]">done</span>
                      </div>
                    </div>
                    <div className="flex gap-3 mt-6 border-t border-slate-100 pt-4">
                      <div className="flex items-center gap-1.5 text-[10px] font-black text-slate-600 uppercase tracking-widest">
                        <span className="material-symbols-outlined text-[14px] text-slate-500">timer</span> 45 นาที
                      </div>
                      <div className="flex items-center gap-1.5 text-[10px] font-black text-slate-600 uppercase tracking-widest">
                        <span className="material-symbols-outlined text-[14px] text-slate-500">person</span> สมชาย
                      </div>
                    </div>
                  </div>
                </div>

                {/* Event 2 */}
                <div className="flex flex-col md:flex-row gap-4 md:gap-8 group transition-all">
                  <div className="md:w-[92px] shrink-0 text-left md:text-right pt-2">
                    <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest block">10:15 น.</span>
                  </div>
                  <div className="hidden md:flex shrink-0 size-8 rounded-full bg-white border-4 border-rose-500 items-center justify-center z-10 relative mt-1 shadow-lg shadow-rose-500/20">
                    <div className="size-2 bg-rose-500 rounded-full"></div>
                  </div>
                  <div className="flex-grow bg-white/80 backdrop-blur-xl rounded-[2rem] border border-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:scale-[1.02] transition-all relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-2 h-full bg-rose-500/20"></div>
                    <div className="flex justify-between items-start">
                      <div className="flex gap-4">
                        <div className="md:hidden size-10 rounded-2xl bg-rose-50 text-rose-500 flex items-center justify-center border border-rose-100">
                          <span className="material-symbols-outlined text-[20px]">pest_control</span>
                        </div>
                        <div>
                          <h3 className="font-black text-xl text-slate-800 tracking-tight leading-none mb-2">พ่นยาฆ่าแมลง มะม่วง</h3>
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200">แปลง B</span>
                            <span className="text-[10px] font-black text-rose-600 uppercase tracking-widest bg-rose-100 px-2 py-0.5 rounded-md border border-rose-200">สูตรชีวภาพ</span>
                          </div>
                        </div>
                      </div>
                      <div className="size-10 bg-slate-200 text-slate-600 rounded-full flex items-center justify-center">
                        <span className="material-symbols-outlined text-[20px]">radio_button_unchecked</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Desktop Summary Stats */}
          <div className="hidden lg:block space-y-6">
            <div className="bg-white/80 backdrop-blur-xl rounded-[2rem] border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 sticky top-28 space-y-8">
              <div>
                <h3 className="text-xs font-black text-slate-600 uppercase tracking-[0.2em] mb-6">สรุปวันนี้</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-emerald-500/5 rounded-2xl border border-emerald-500/10">
                    <div className="size-12 rounded-2xl bg-emerald-500 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20 shrink-0">
                      <span className="material-symbols-outlined text-[24px]">task_alt</span>
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">เสร็จสิ้นแล้ว</p>
                      <p className="text-2xl font-black text-emerald-900 leading-none mt-0.5">1 / 3 <span className="text-sm font-medium">งาน</span></p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-sky-500/5 rounded-2xl border border-sky-500/10">
                    <div className="size-12 rounded-2xl bg-sky-500 flex items-center justify-center text-white shadow-lg shadow-sky-500/20 shrink-0">
                      <span className="material-symbols-outlined text-[24px]">schedule</span>
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-sky-600 uppercase tracking-widest">เวลาทำงาน</p>
                      <p className="text-2xl font-black text-sky-900 leading-none mt-0.5">5.75 <span className="text-sm font-medium">ชั่วโมง</span></p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-200">
                <h4 className="text-[10px] font-black text-slate-600 uppercase tracking-[0.2em] mb-4">พื้นที่เป้าหมาย</h4>
                <div className="space-y-3">
                  {['แปลง A - ทุเรียน', 'แปลง B - มะม่วง', 'แปลง C - มังคุด'].map((p) => (
                    <div key={p} className="flex items-center gap-3">
                      <span className="size-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
                      <span className="text-xs font-black text-slate-800 uppercase tracking-widest">{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile FAB */}
        <Link 
          href="/activity-log/add"
          className="fixed bottom-24 right-6 lg:hidden size-16 bg-slate-900 text-white rounded-[2rem] shadow-2xl shadow-slate-900/40 flex items-center justify-center active:scale-90 transition-all z-40 hover:bg-emerald-800"
        >
          <span className="material-symbols-outlined text-[32px]">add</span>
        </Link>
      </main>

      <BottomNavBar />
    </div>
  );
}
