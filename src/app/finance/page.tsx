import React from 'react';
import { BottomNavBar } from '@/components/layout/BottomNavBar';

export default function Finance() {
  return (
    <>
      {/* Top AppBar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-zinc-100 shadow-sm flex justify-between items-center px-6 h-16">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-emerald-600">eco</span>
          <span className="text-xl font-bold text-emerald-700 tracking-tight font-kanit">OrchardPro</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-[#eeeeeb] flex items-center justify-center overflow-hidden border border-[#c2c9bb]">
            <span className="material-symbols-outlined text-zinc-500">account_circle</span>
          </div>
        </div>
      </header>

      <main className="pt-20 pb-32 px-6 max-w-2xl mx-auto">
        {/* Header Section */}
        <div className="mb-6">
          <h1 className="text-3xl font-semibold font-kanit text-[#1a1c1b] mb-2">สรุปบัญชีรายรับ-รายจ่าย</h1>
          <p className="text-sm font-medium font-kanit text-[#42493e]">ติดตามสถานะการเงินของสวนคุณในเดือนนี้</p>
        </div>

        {/* Period & Filter Section */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <div className="flex items-center bg-[#eeeeeb] rounded-xl px-4 py-2 flex-1">
            <span className="material-symbols-outlined text-[#42493e] mr-2">calendar_month</span>
            <span className="text-sm font-medium font-kanit">ตุลาคม 2566</span>
            <span className="material-symbols-outlined ml-auto text-[#42493e]">expand_more</span>
          </div>
          <button className="bg-[#eeeeeb] p-2.5 rounded-xl border border-[#c2c9bb] active:scale-95 transition-transform">
            <span className="material-symbols-outlined text-[#42493e]">tune</span>
          </button>
        </div>

        {/* Summary Bento Grid */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {/* Net Balance Card */}
          <div className="col-span-2 p-6 rounded-2xl bg-[#154212] text-white shadow-lg relative overflow-hidden">
            <div className="relative z-10">
              <p className="text-sm font-medium font-kanit opacity-90 mb-1">ยอดคงเหลือสุทธิ</p>
              <h2 className="text-3xl font-semibold font-kanit">฿45,200.00</h2>
              <div className="mt-4 flex items-center gap-2 text-[#bcf0ae] text-xs font-semibold font-kanit">
                <span className="material-symbols-outlined text-[16px]">trending_up</span>
                <span>เพิ่มขึ้น 12% จากเดือนที่แล้ว</span>
              </div>
            </div>
            {/* Abstract Design Element */}
            <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-[#2d5a27] rounded-full opacity-20 blur-2xl"></div>
          </div>

          {/* Income Card */}
          <div className="p-4 rounded-2xl bg-white border border-[#c2c9bb] shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-emerald-600">arrow_downward</span>
              </div>
              <p className="text-xs font-semibold font-kanit text-[#42493e]">รายรับทั้งหมด</p>
              <p className="text-2xl font-semibold font-kanit text-emerald-700">฿68,000</p>
            </div>
          </div>

          {/* Expense Card */}
          <div className="p-4 rounded-2xl bg-white border border-[#c2c9bb] shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-orange-600">arrow_upward</span>
              </div>
              <p className="text-xs font-semibold font-kanit text-[#42493e]">รายจ่ายทั้งหมด</p>
              <p className="text-2xl font-semibold font-kanit text-orange-700">฿22,800</p>
            </div>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="flex gap-2 mb-4 border-b border-[#c2c9bb]/30 pb-0.5 overflow-x-auto custom-scrollbar">
          <button className="px-6 py-2 border-b-2 border-[#154212] text-[#154212] font-semibold text-sm font-kanit whitespace-nowrap">ทั้งหมด</button>
          <button className="px-6 py-2 text-[#42493e] font-medium text-sm font-kanit whitespace-nowrap">รายรับ</button>
          <button className="px-6 py-2 text-[#42493e] font-medium text-sm font-kanit whitespace-nowrap">รายจ่าย</button>
        </div>

        {/* Transaction List */}
        <div className="space-y-4">
          <h3 className="text-xs font-semibold font-kanit text-[#42493e] uppercase tracking-wider">วันนี้</h3>
          
          {/* Item 1: Income */}
          <div className="flex items-center p-4 bg-white rounded-2xl border border-zinc-100 shadow-sm active:bg-zinc-50 transition-colors">
            <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 mr-4">
              <span className="material-symbols-outlined">payments</span>
            </div>
            <div className="flex-1">
              <h4 className="text-base font-semibold font-kanit text-[#1a1c1b]">ขายทุเรียนหมอนทอง</h4>
              <p className="text-xs font-kanit text-[#42493e]">ขายส่งพรีเมียม • 14:30 น.</p>
            </div>
            <div className="text-right">
              <p className="text-base font-bold font-kanit text-emerald-600">+฿42,000</p>
              <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold font-kanit">โอนเงิน</span>
            </div>
          </div>

          {/* Item 2: Expense */}
          <div className="flex items-center p-4 bg-white rounded-2xl border border-zinc-100 shadow-sm active:bg-zinc-50 transition-colors">
            <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 mr-4">
              <span className="material-symbols-outlined">potted_plant</span>
            </div>
            <div className="flex-1">
              <h4 className="text-base font-semibold font-kanit text-[#1a1c1b]">ซื้อปุ๋ยอินทรีย์ สูตร 1</h4>
              <p className="text-xs font-kanit text-[#42493e]">วัสดุการเกษตร • 09:15 น.</p>
            </div>
            <div className="text-right">
              <p className="text-base font-bold font-kanit text-orange-600">-฿8,500</p>
              <span className="text-[10px] bg-zinc-100 text-zinc-600 px-2 py-0.5 rounded-full font-bold font-kanit">เงินสด</span>
            </div>
          </div>

          <h3 className="text-xs font-semibold font-kanit text-[#42493e] uppercase tracking-wider mt-8">22 ตุลาคม 2566</h3>
          
          {/* Item 3: Expense */}
          <div className="flex items-center p-4 bg-white rounded-2xl border border-zinc-100 shadow-sm active:bg-zinc-50 transition-colors">
            <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 mr-4">
              <span className="material-symbols-outlined">local_shipping</span>
            </div>
            <div className="flex-1">
              <h4 className="text-base font-semibold font-kanit text-[#1a1c1b]">ค่าขนส่งผลผลิต</h4>
              <p className="text-xs font-kanit text-[#42493e]">โลจิสติกส์ • 16:45 น.</p>
            </div>
            <div className="text-right">
              <p className="text-base font-bold font-kanit text-orange-600">-฿2,400</p>
              <span className="text-[10px] bg-zinc-100 text-zinc-600 px-2 py-0.5 rounded-full font-bold font-kanit">โอนเงิน</span>
            </div>
          </div>

          {/* Item 4: Income */}
          <div className="flex items-center p-4 bg-white rounded-2xl border border-zinc-100 shadow-sm active:bg-zinc-50 transition-colors">
            <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 mr-4">
              <span className="material-symbols-outlined">energy_savings_leaf</span>
            </div>
            <div className="flex-1">
              <h4 className="text-base font-semibold font-kanit text-[#1a1c1b]">ขายมังคุดคัด</h4>
              <p className="text-xs font-kanit text-[#42493e]">ตลาดท้องถิ่น • 11:20 น.</p>
            </div>
            <div className="text-right">
              <p className="text-base font-bold font-kanit text-emerald-600">+฿5,600</p>
              <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold font-kanit">เงินสด</span>
            </div>
          </div>
        </div>
      </main>

      {/* Floating Action Button */}
      <button className="fixed bottom-24 right-6 w-14 h-14 bg-emerald-600 text-white rounded-2xl shadow-xl flex items-center justify-center active:scale-90 transition-transform z-40">
        <span className="material-symbols-outlined text-3xl">add</span>
      </button>

      <BottomNavBar />
    </>
  );
}
