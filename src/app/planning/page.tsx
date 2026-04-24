import React from 'react';
import { BottomNavBar } from '@/components/layout/BottomNavBar';

export default function Planning() {
  return (
    <>
      {/* Top App Bar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-zinc-100 shadow-sm flex justify-between items-center px-6 h-16">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-emerald-600">eco</span>
          <h1 className="text-xl font-bold text-emerald-700 tracking-tight font-kanit">OrchardPro</h1>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-emerald-50 transition-all active:scale-95 duration-200">
            <span className="material-symbols-outlined text-emerald-600">calendar_month</span>
          </button>
          <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center overflow-hidden">
            <span className="material-symbols-outlined text-emerald-700">account_circle</span>
          </div>
        </div>
      </header>

      <main className="pt-20 px-6 max-w-2xl mx-auto pb-32">
        {/* Title & Switch */}
        <div className="flex justify-between items-end mb-6">
          <div>
            <h2 className="text-3xl font-bold font-kanit text-[#2d5a27]">วางแผนสวน</h2>
            <p className="text-sm text-slate-500 font-kanit mt-1">จัดการกิจกรรมประจำวันของคุณ</p>
          </div>
        </div>

        {/* Date Picker Horizontal */}
        <div className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 no-scrollbar">
          <div className="flex flex-col items-center justify-center min-w-[64px] h-20 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <span className="text-xs font-kanit text-slate-500">จ.</span>
            <span className="text-2xl font-semibold font-kanit">12</span>
          </div>
          <div className="flex flex-col items-center justify-center min-w-[64px] h-20 rounded-2xl bg-[#2d5a27] text-white shadow-lg ring-2 ring-[#2d5a27]/20">
            <span className="text-xs font-kanit">อ.</span>
            <span className="text-2xl font-semibold font-kanit">13</span>
          </div>
          <div className="flex flex-col items-center justify-center min-w-[64px] h-20 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <span className="text-xs font-kanit text-slate-500">พ.</span>
            <span className="text-2xl font-semibold font-kanit">14</span>
          </div>
          <div className="flex flex-col items-center justify-center min-w-[64px] h-20 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <span className="text-xs font-kanit text-slate-500">พฤ.</span>
            <span className="text-2xl font-semibold font-kanit">15</span>
          </div>
          <div className="flex flex-col items-center justify-center min-w-[64px] h-20 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <span className="text-xs font-kanit text-slate-500">ศ.</span>
            <span className="text-2xl font-semibold font-kanit">16</span>
          </div>
        </div>

        {/* Filter Chips */}
        <div className="flex gap-2 mb-6 overflow-x-auto no-scrollbar">
          <span className="px-4 py-2 rounded-full bg-[#ffdeac] text-[#281900] font-kanit text-sm font-medium whitespace-nowrap shadow-sm">ทั้งหมด</span>
          <span className="px-4 py-2 rounded-full border border-slate-300 text-slate-600 font-kanit text-sm font-medium whitespace-nowrap hover:bg-slate-50 transition-colors">รดน้ำ</span>
          <span className="px-4 py-2 rounded-full border border-slate-300 text-slate-600 font-kanit text-sm font-medium whitespace-nowrap hover:bg-slate-50 transition-colors">ใส่ปุ๋ย</span>
          <span className="px-4 py-2 rounded-full border border-slate-300 text-slate-600 font-kanit text-sm font-medium whitespace-nowrap hover:bg-slate-50 transition-colors">พ่นยา</span>
        </div>

        {/* Task List View */}
        <div className="space-y-4">
          {/* Task Card 1 */}
          <div className="bg-white rounded-2xl p-4 border border-[#E0E0DB] shadow-[0_4px_12px_rgba(45,90,39,0.08)] flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-blue-600">water_drop</span>
            </div>
            <div className="flex-1">
              <h4 className="font-kanit font-semibold text-slate-800">รดน้ำทุเรียน แปลง A</h4>
              <p className="text-sm font-kanit text-slate-500">08:00 น. • โซนน้ำหยด</p>
            </div>
            <button className="w-10 h-10 rounded-full border-2 border-emerald-600 flex items-center justify-center text-emerald-600 shrink-0">
              <span className="material-symbols-outlined text-lg" style={{fontVariationSettings: '"FILL" 1'}}>check</span>
            </button>
          </div>

          {/* Task Card 2 */}
          <div className="bg-white rounded-2xl p-4 border border-[#E0E0DB] shadow-[0_4px_12px_rgba(45,90,39,0.08)] flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-orange-600">compost</span>
            </div>
            <div className="flex-1">
              <h4 className="font-kanit font-semibold text-slate-800">ใส่ปุ๋ยมะม่วง แปลง B</h4>
              <p className="text-sm font-kanit text-slate-500">10:30 น. • สูตร 15-15-15</p>
            </div>
            <button className="w-10 h-10 rounded-full border-2 border-slate-300 flex items-center justify-center text-slate-300 shrink-0">
            </button>
          </div>

          {/* Task Card 3 */}
          <div className="bg-white rounded-2xl p-4 border border-[#E0E0DB] shadow-[0_4px_12px_rgba(45,90,39,0.08)] flex items-center gap-4 opacity-70">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-emerald-600">pest_control</span>
            </div>
            <div className="flex-1">
              <h4 className="font-kanit font-semibold text-slate-800 line-through">พ่นยากำจัดแมลง</h4>
              <p className="text-sm font-kanit text-slate-500">เสร็จสิ้นแล้วเมื่อ 07:00 น.</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white shrink-0">
              <span className="material-symbols-outlined text-lg" style={{fontVariationSettings: '"FILL" 1'}}>done_all</span>
            </div>
          </div>
        </div>

        {/* Monthly Preview (Mini) */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold font-kanit mb-4 text-slate-800">ปฏิทินงานเดือนนี้</h3>
          <div className="bg-white rounded-3xl p-6 border border-[#E0E0DB] shadow-sm overflow-hidden">
            <div className="grid grid-cols-7 gap-y-4 text-center">
              <div className="text-xs text-slate-500 font-kanit">อา.</div>
              <div className="text-xs text-slate-500 font-kanit">จ.</div>
              <div className="text-xs text-slate-500 font-kanit">อ.</div>
              <div className="text-xs text-slate-500 font-kanit">พ.</div>
              <div className="text-xs text-slate-500 font-kanit">พฤ.</div>
              <div className="text-xs text-slate-500 font-kanit">ศ.</div>
              <div className="text-xs text-slate-500 font-kanit">ส.</div>

              {/* Dummy Dates */}
              <div className="py-2 text-slate-300">28</div>
              <div className="py-2 text-slate-300">29</div>
              <div className="py-2 text-slate-300">30</div>
              <div className="py-2 relative font-medium">1<span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-500"></span></div>
              <div className="py-2 relative font-medium">2</div>
              <div className="py-2 relative font-medium">3<span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-orange-500"></span></div>
              <div className="py-2 relative font-medium">4</div>
              <div className="py-2 relative font-medium">5</div>
              <div className="py-2 relative font-medium">6<span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-emerald-500"></span></div>
              <div className="py-2 relative font-medium">7</div>
              <div className="py-2 relative font-medium">8</div>
              <div className="py-2 relative font-medium">9</div>
              <div className="py-2 relative font-medium">10</div>
              <div className="py-2 relative font-medium">11</div>
              <div className="py-2 relative font-medium">12</div>
              <div className="py-2 relative font-bold bg-emerald-50 rounded-xl text-emerald-800">13
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-0.5">
                  <span className="w-1 h-1 rounded-full bg-blue-500"></span>
                  <span className="w-1 h-1 rounded-full bg-orange-500"></span>
                </span>
              </div>
              <div className="py-2 relative font-medium">14</div>
              <div className="py-2 relative font-medium">15</div>
            </div>
          </div>
        </div>
      </main>

      {/* FAB */}
      <button className="fixed bottom-24 right-6 w-14 h-14 bg-emerald-600 text-white rounded-2xl shadow-xl flex items-center justify-center active:scale-90 transition-transform z-40">
        <span className="material-symbols-outlined text-3xl">add</span>
      </button>

      <BottomNavBar />
    </>
  );
}
