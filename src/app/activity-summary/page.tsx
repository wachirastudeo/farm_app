import React from 'react';
import Link from 'next/link';
import { BottomNavBar } from '@/components/layout/BottomNavBar';

export default function ActivitySummary() {
  return (
    <>
      {/* TopAppBar */}
      <header className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-zinc-100 shadow-sm">
        <div className="flex justify-between items-center px-4 h-16 w-full max-w-7xl mx-auto">
          <Link href="/planning" className="text-[#2d5a27] p-2 hover:bg-[#bcf0ae]/30 transition-colors rounded-full flex items-center justify-center">
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
          <h1 className="font-kanit font-bold text-[20px] text-[#154212]">สรุปกิจกรรมสวน</h1>
          <button className="text-[#2d5a27] p-2 hover:bg-[#bcf0ae]/30 transition-colors rounded-full flex items-center justify-center">
            <span className="material-symbols-outlined">add</span>
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-6 pb-32">
        {/* Search & View Toggle */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-grow">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#72796e]">search</span>
            <input 
              className="w-full pl-10 pr-4 py-3 bg-[#eeeeeb] rounded-full border-none focus:ring-2 focus:ring-[#154212] text-base font-kanit text-[#1a1c1b] placeholder:text-[#72796e]" 
              placeholder="ค้นหากิจกรรม..." 
              type="text"
            />
          </div>
          <div className="flex bg-[#eeeeeb] rounded-full p-1 self-start sm:self-auto">
            <button className="px-4 py-2 rounded-full bg-[#154212] text-white font-medium text-sm font-kanit shadow-sm flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">view_list</span> รายการ
            </button>
            <button className="px-4 py-2 rounded-full text-[#42493e] font-medium text-sm font-kanit hover:bg-[#e8e8e5] transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">calendar_month</span> ปฏิทิน
            </button>
          </div>
        </div>

        {/* Filter Chips */}
        <div className="flex overflow-x-auto gap-2 pb-2 mb-6 no-scrollbar">
          <button className="whitespace-nowrap px-4 py-2 rounded-full bg-[#ffba38] text-[#281900] font-medium text-sm font-kanit">ทั้งหมด</button>
          <button className="whitespace-nowrap px-4 py-2 rounded-full border border-[#c2c9bb] text-[#42493e] hover:bg-[#e8e8e5] font-medium text-sm font-kanit transition-colors">งานสวน</button>
          <button className="whitespace-nowrap px-4 py-2 rounded-full border border-[#c2c9bb] text-[#42493e] hover:bg-[#e8e8e5] font-medium text-sm font-kanit transition-colors">เก็บเกี่ยว</button>
          <button className="whitespace-nowrap px-4 py-2 rounded-full border border-[#c2c9bb] text-[#42493e] hover:bg-[#e8e8e5] font-medium text-sm font-kanit transition-colors">ปุ๋ย/ยา</button>
        </div>

        {/* Timeline / Event Cards */}
        <div className="relative">
          {/* Timeline Line (Desktop/Tablet) */}
          <div className="hidden md:block absolute left-[88px] top-4 bottom-4 w-px bg-[#c2c9bb]"></div>
          
          <div className="space-y-4">
            {/* Event 1 */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 group">
              <div className="md:w-[72px] flex-shrink-0 text-left md:text-right pt-2 font-semibold text-xs font-kanit text-[#72796e]">
                08:30
              </div>
              <div className="hidden md:flex flex-shrink-0 w-8 h-8 rounded-full bg-[#E3F2FD] border-2 border-[#f9f9f6] items-center justify-center z-10 relative mt-1 shadow-sm">
                <span className="material-symbols-outlined text-[#1976D2] text-[16px]">water_drop</span>
              </div>
              <div className="flex-grow bg-[#ffffff] rounded-xl border border-[#c2c9bb] p-4 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#1976D2]"></div>
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2">
                    <div className="md:hidden w-8 h-8 rounded-full bg-[#E3F2FD] flex items-center justify-center">
                      <span className="material-symbols-outlined text-[#1976D2] text-[18px]">water_drop</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[20px] font-kanit text-[#1a1c1b]">รดน้ำทุเรียนแปลง A</h3>
                      <p className="text-base font-kanit text-[#72796e]">โซนเหนือ • ระบบน้ำหยด</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-[#154212] text-[24px]">check_circle</span>
                </div>
                <div className="flex gap-2 mt-4">
                  <span className="inline-flex items-center px-2 py-1 rounded-md bg-[#eeeeeb] text-[#42493e] font-semibold text-xs font-kanit gap-1">
                    <span className="material-symbols-outlined text-[14px]">timer</span> 45 นาที
                  </span>
                  <span className="inline-flex items-center px-2 py-1 rounded-md bg-[#eeeeeb] text-[#42493e] font-semibold text-xs font-kanit gap-1">
                    <span className="material-symbols-outlined text-[14px]">person</span> สมชาย
                  </span>
                </div>
              </div>
            </div>

            {/* Event 2 */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 group">
              <div className="md:w-[72px] flex-shrink-0 text-left md:text-right pt-2 font-semibold text-xs font-kanit text-[#72796e]">
                10:15
              </div>
              <div className="hidden md:flex flex-shrink-0 w-8 h-8 rounded-full bg-[#FFEBEE] border-2 border-[#f9f9f6] items-center justify-center z-10 relative mt-1 shadow-sm">
                <span className="material-symbols-outlined text-[#D32F2F] text-[16px]">bug_report</span>
              </div>
              <div className="flex-grow bg-[#ffffff] rounded-xl border border-[#c2c9bb] p-4 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#D32F2F]"></div>
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2">
                    <div className="md:hidden w-8 h-8 rounded-full bg-[#FFEBEE] flex items-center justify-center">
                      <span className="material-symbols-outlined text-[#D32F2F] text-[18px]">bug_report</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[20px] font-kanit text-[#1a1c1b]">พ่นยาฆ่าแมลง มะม่วง</h3>
                      <p className="text-base font-kanit text-[#72796e]">แปลง B • สูตรชีวภาพ</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-[#c2c9bb] text-[24px]">radio_button_unchecked</span>
                </div>
                <div className="flex gap-2 mt-4">
                  <span className="inline-flex items-center px-2 py-1 rounded-md bg-[#eeeeeb] text-[#42493e] font-semibold text-xs font-kanit gap-1">
                    <span className="material-symbols-outlined text-[14px]">timer</span> 2 ชั่วโมง
                  </span>
                  <span className="inline-flex items-center px-2 py-1 rounded-md bg-[#eeeeeb] text-[#42493e] font-semibold text-xs font-kanit gap-1">
                    <span className="material-symbols-outlined text-[14px]">warning</span> ใส่ชุดป้องกัน
                  </span>
                </div>
              </div>
            </div>

            {/* Event 3 */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 group">
              <div className="md:w-[72px] flex-shrink-0 text-left md:text-right pt-2 font-semibold text-xs font-kanit text-[#72796e]">
                13:45
              </div>
              <div className="hidden md:flex flex-shrink-0 w-8 h-8 rounded-full bg-[#bcf0ae] border-2 border-[#f9f9f6] items-center justify-center z-10 relative mt-1 shadow-sm">
                <span className="material-symbols-outlined text-[#002201] text-[16px]">eco</span>
              </div>
              <div className="flex-grow bg-[#ffffff] rounded-xl border border-[#c2c9bb] p-4 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#154212]"></div>
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2">
                    <div className="md:hidden w-8 h-8 rounded-full bg-[#bcf0ae] flex items-center justify-center">
                      <span className="material-symbols-outlined text-[#002201] text-[18px]">eco</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[20px] font-kanit text-[#1a1c1b]">ใส่ปุ๋ยคอก มังคุด</h3>
                      <p className="text-base font-kanit text-[#72796e]">แปลง C • ต้นละ 5 กก.</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-[#c2c9bb] text-[24px]">radio_button_unchecked</span>
                </div>
                <div className="flex gap-2 mt-4">
                  <span className="inline-flex items-center px-2 py-1 rounded-md bg-[#eeeeeb] text-[#42493e] font-semibold text-xs font-kanit gap-1">
                    <span className="material-symbols-outlined text-[14px]">timer</span> 3 ชั่วโมง
                  </span>
                  <span className="inline-flex items-center px-2 py-1 rounded-md bg-[#eeeeeb] text-[#42493e] font-semibold text-xs font-kanit gap-1">
                    <span className="material-symbols-outlined text-[14px]">local_shipping</span> รถไถเล็ก
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAB */}
        <button className="fixed bottom-24 right-6 md:bottom-8 md:right-8 w-14 h-14 bg-[#154212] text-white rounded-2xl shadow-lg flex items-center justify-center hover:bg-[#2d5a27] transition-colors z-40">
          <span className="material-symbols-outlined text-[28px]">add</span>
        </button>
      </main>

      <BottomNavBar />
    </>
  );
}
