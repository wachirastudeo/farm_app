"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BottomNavBar } from '@/components/layout/BottomNavBar';

export default function Home() {
  const router = useRouter();

  // Task completion state
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'รดน้ำทุเรียน แปลง A',
      subtitle: 'ก่อน 10:00 น. • 50L/ต้น',
      icon: 'water_drop',
      iconColor: 'text-sky-500',
      iconBg: 'bg-sky-50',
      done: false,
      urgent: true,
    },
    {
      id: 2,
      title: 'ตรวจสอบแมลง แปลง B',
      subtitle: 'พบเพลี้ยระบาดเมื่อวาน',
      icon: 'pest_control',
      iconColor: 'text-orange-500',
      iconBg: 'bg-orange-50',
      done: false,
      urgent: true,
    },
    {
      id: 3,
      title: 'เก็บเกี่ยวผลผลิต',
      subtitle: 'แปลง C',
      icon: 'agriculture',
      iconColor: 'text-emerald-500',
      iconBg: 'bg-emerald-50',
      done: false,
      urgent: false,
    },
    {
      id: 4,
      title: 'ซื้อปุ๋ยคอก',
      subtitle: 'ร้านวัสดุการเกษตร',
      icon: 'shopping_cart',
      iconColor: 'text-indigo-500',
      iconBg: 'bg-indigo-50',
      done: false,
      urgent: false,
    },
    {
      id: 5,
      title: 'ตัดหญ้า',
      subtitle: 'รอบสวน A',
      icon: 'content_cut',
      iconColor: 'text-emerald-500',
      iconBg: 'bg-emerald-50',
      done: true,
      urgent: false,
    },
    {
      id: 6,
      title: 'ซ่อมระบบน้ำ',
      subtitle: 'ท่อรั่วโซนหลัง',
      icon: 'plumbing',
      iconColor: 'text-slate-500',
      iconBg: 'bg-slate-100',
      done: true,
      urgent: false,
    },
  ]);

  const toggleTask = (id: number) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  };

  const deleteTask = (id: number) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const doneCount = tasks.filter((t) => t.done).length;

  // Temperature logic 
  const temp = 32;
  const tempColor = temp >= 33 ? 'text-red-500' : temp >= 30 ? 'text-orange-500' : temp >= 25 ? 'text-emerald-500' : 'text-blue-500';
  const weatherBg = temp >= 33 ? 'bg-red-50/80' : temp >= 30 ? 'bg-orange-50/80' : temp >= 25 ? 'bg-emerald-50/80' : 'bg-blue-50/80';

  return (
    <div className="min-h-screen bg-slate-50 font-kanit">
      
      {/* Mobile Header */}
      <header className="lg:hidden flex items-center justify-between px-5 py-4 bg-white sticky top-0 z-50 shadow-sm border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-full bg-slate-900 flex items-center justify-center text-white">
            <span className="material-symbols-outlined text-[20px]">park</span>
          </div>
          <div>
            <h1 className="text-lg font-bold text-slate-900 leading-tight tracking-tight">สวัสดี สมชาย</h1>
            <p className="text-xs text-slate-500 font-medium mt-0.5">สวนร่มเย็น จ.จันทบุรี</p>
          </div>
        </div>
        <Link href="/account" className="active:scale-95 transition-transform">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="User Profile" className="size-10 rounded-full border-2 border-slate-100 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuClGTGqrgkOWcQbNUV5Ph47FPZ0jczyuChHb6i2pP6jhLifdxteY36dNl2lcCC8LVnC6-U_pdncI3h5iBdvwiGcSPiC93Kfr5sRiT1lcBm7YsyVzoK8loUByOjFxHON5PRVw61avc_ij_ORT7sj3qhd-oY_UOPMw98qrWbKef_zhzspvyg1bVM7BLtQmto24qc_HsqqmNMOZ4NK0TU-O6bz5v7nLCWrdPegAuUX9cJjYsD3A6waOZlNyumZZHG7oapJa9AucEB3Qg2y" />
        </Link>
      </header>

      {/* Desktop Header */}
      <header className="hidden lg:flex items-center justify-between px-8 py-5 bg-white sticky top-0 z-50 border-b border-slate-200 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="size-10 rounded-full bg-slate-900 flex items-center justify-center text-white shadow-sm">
            <span className="material-symbols-outlined text-[20px]">park</span>
          </div>
          <div>
            <h1 className="text-xl font-extrabold text-slate-900 tracking-tight">สวัสดีตอนเช้า, สมชาย 🌿</h1>
            <p className="text-xs text-slate-500 font-medium mt-0.5">ระบบจัดการสวนอัจฉริยะ • สวนร่มเย็น จ.จันทบุรี</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link 
            href="/activity-log/add"
            className="hidden lg:flex items-center gap-2 px-4 py-2 bg-[#154212] text-white rounded-xl text-sm font-bold hover:bg-[#2d5a27] transition-all active:scale-95 shadow-sm"
          >
            <span className="material-symbols-outlined text-[20px]">add</span>
            บันทึกงานสวน
          </Link>
          <Link href="/account" className="hover:scale-105 transition-transform">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="User Profile" className="size-10 rounded-full border-2 border-slate-200 object-cover shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuClGTGqrgkOWcQbNUV5Ph47FPZ0jczyuChHb6i2pP6jhLifdxteY36dNl2lcCC8LVnC6-U_pdncI3h5iBdvwiGcSPiC93Kfr5sRiT1lcBm7YsyVzoK8loUByOjFxHON5PRVw61avc_ij_ORT7sj3qhd-oY_UOPMw98qrWbKef_zhzspvyg1bVM7BLtQmto24qc_HsqqmNMOZ4NK0TU-O6bz5v7nLCWrdPegAuUX9cJjYsD3A6waOZlNyumZZHG7oapJa9AucEB3Qg2y" />
          </Link>
        </div>
      </header>

      <main className="flex flex-col gap-5 px-5 lg:px-8 mt-5 lg:mt-6 pb-28 max-w-[1200px] mx-auto">
        
        {/* TOP ROW: Weather and Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          
          {/* Weather Widget */}
          <section className={`rounded-[1.5rem] p-4 shadow-sm border border-slate-100 transition-colors flex items-center justify-between gap-4 ${weatherBg} h-full`}>
             <div className="flex items-center gap-3 lg:gap-4">
                <div className={`flex items-center justify-center size-12 lg:size-14 rounded-xl lg:rounded-2xl bg-white shadow-sm shrink-0`}>
                  <span className={`material-symbols-outlined text-[28px] lg:text-[32px] ${tempColor}`} style={{fontVariationSettings: '"FILL" 1'}}>light_mode</span>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-baseline gap-1 lg:gap-2">
                    <span className={`text-3xl lg:text-4xl font-black tracking-tight ${tempColor}`}>{temp}°<span className="text-xl lg:text-2xl ml-0.5">C</span></span>
                    <span className="text-xs lg:text-sm font-bold text-slate-500 uppercase ml-1">แดดจัด</span>
                  </div>
                  <div className="flex items-center gap-2 lg:gap-3 text-[10px] lg:text-xs font-semibold text-slate-500 mt-0.5">
                    <span className="flex items-center gap-0.5"><span className="material-symbols-outlined text-[12px] lg:text-[14px]">humidity_percentage</span> 65%</span>
                    <span className="flex items-center gap-0.5"><span className="material-symbols-outlined text-[12px] lg:text-[14px]">air</span> 12 km/h</span>
                  </div>
                </div>
             </div>

             {/* Forecast inline */}
             <div className="flex flex-col justify-center gap-1.5 border-l border-slate-200/60 pl-4 lg:pl-5 shrink-0">
                <div className="flex items-center justify-between gap-2 lg:gap-3">
                   <span className="text-[10px] lg:text-xs font-bold text-slate-400 w-4">พ.</span>
                   <span className="material-symbols-outlined text-[14px] lg:text-[16px] text-sky-500" style={{fontVariationSettings: '"FILL" 1'}}>partly_cloudy_day</span>
                   <span className="text-xs lg:text-sm font-bold text-slate-700">31°</span>
                </div>
                <div className="flex items-center justify-between gap-2 lg:gap-3">
                   <span className="text-[10px] lg:text-xs font-bold text-slate-400 w-4">พฤ.</span>
                   <span className="material-symbols-outlined text-[14px] lg:text-[16px] text-slate-400" style={{fontVariationSettings: '"FILL" 1'}}>cloud</span>
                   <span className="text-xs lg:text-sm font-bold text-slate-700">30°</span>
                </div>
             </div>
          </section>

          {/* Compact Stats Grid */}
          <section className="grid grid-cols-2 gap-3 h-full">
            <Link href="/harvest" className="bg-emerald-500 rounded-[1.5rem] p-4 flex flex-col justify-center gap-2 lg:gap-3 active:scale-[0.98] transition-transform relative overflow-hidden shadow-sm min-h-[112px]">
              <div className="absolute -right-2 -bottom-2 text-emerald-400 opacity-40">
                <span className="material-symbols-outlined text-[64px] lg:text-[80px]" style={{fontVariationSettings: '"FILL" 1'}}>agriculture</span>
              </div>
              <div className="relative z-10 flex items-center gap-1 text-emerald-50">
                <span className="material-symbols-outlined text-[14px] lg:text-[16px]">trending_up</span>
                <span className="text-[10px] lg:text-xs font-bold uppercase tracking-wider">ผลผลิตเดือนนี้</span>
              </div>
              <div className="relative z-10">
                <p className="text-2xl lg:text-3xl font-black text-white tracking-tight leading-none">2,400 <span className="text-[10px] lg:text-xs font-bold text-emerald-100 uppercase">กก.</span></p>
              </div>
            </Link>
            <Link href="/finance" className="bg-slate-900 rounded-[1.5rem] p-4 flex flex-col justify-center gap-2 lg:gap-3 active:scale-[0.98] transition-transform relative overflow-hidden shadow-sm min-h-[112px]">
              <div className="absolute -right-2 -bottom-2 text-slate-800 opacity-50">
                <span className="material-symbols-outlined text-[64px] lg:text-[80px]" style={{fontVariationSettings: '"FILL" 1'}}>payments</span>
              </div>
              <div className="relative z-10 flex items-center gap-1 text-slate-300">
                <span className="material-symbols-outlined text-[14px] lg:text-[16px]">account_balance_wallet</span>
                <span className="text-[10px] lg:text-xs font-bold uppercase tracking-wider">รายได้เดือนนี้</span>
              </div>
              <div className="relative z-10">
                <p className="text-2xl lg:text-3xl font-black text-white tracking-tight leading-none">฿45.2<span className="text-sm font-bold text-slate-400">k</span></p>
              </div>
            </Link>
          </section>

        </div>

        {/* BOTTOM ROW: Menu & Tasks */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          
          {/* Urgent Tasks (Left on Desktop, Wider) */}
          <section className="bg-white rounded-3xl shadow-sm border border-slate-100 flex flex-col lg:col-span-8 order-1">
            <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between bg-white rounded-t-3xl">
              <h2 className="text-lg font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
                งานวันนี้
                <span className="text-[11px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">{doneCount}/{tasks.length}</span>
              </h2>
              <Link href="/planning" className="text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-colors">จัดการงาน</Link>
            </div>
            
            {/* Tasks Container (No inner scroll) */}
            <div className="p-4">
              <div className="flex flex-col gap-3">
                {tasks
                  .slice()
                  .sort((a, b) => (a.done === b.done ? 0 : a.done ? 1 : -1))
                  .map((task) => (
                  <div 
                    key={task.id} 
                    onClick={() => toggleTask(task.id)}
                    className={`rounded-2xl p-3 lg:p-4 flex items-center gap-3 lg:gap-4 transition-all duration-300 border group cursor-pointer active:scale-[0.99] ${
                      task.done
                        ? 'border-slate-100 bg-slate-50'
                        : task.urgent
                        ? 'border-orange-100 bg-orange-50/50 shadow-sm'
                        : 'border-slate-100 bg-white shadow-sm hover:border-emerald-200'
                    }`}
                  >
                    {/* Task Content */}
                    <div className="flex-1 min-w-0 flex items-center gap-3 lg:gap-4">
                      {/* Urgent indicator */}
                      {task.urgent && !task.done && (
                        <div className="w-1.5 h-10 rounded-full bg-orange-500 shrink-0"></div>
                      )}

                      <div className={`size-10 lg:size-12 rounded-xl flex items-center justify-center shrink-0 ${task.done ? 'bg-slate-200' : task.iconBg}`}>
                        <span
                          className={`material-symbols-outlined text-[20px] lg:text-[24px] ${task.done ? 'text-slate-500' : task.iconColor}`}
                          style={{fontVariationSettings: '"FILL" 1'}}
                        >
                          {task.icon}
                        </span>
                      </div>

                      <div className="flex-1 min-w-0 flex flex-col">
                        <span className={`text-sm md:text-base font-bold truncate ${task.done ? 'line-through text-slate-400' : 'text-slate-800'}`}>
                          {task.title}
                        </span>
                        <span className={`text-xs font-medium mt-0.5 truncate ${task.done ? 'text-slate-400' : task.urgent ? 'text-orange-600' : 'text-slate-500'}`}>
                          {task.done ? '✓ เสร็จสิ้นแล้ว' : task.subtitle}
                        </span>
                      </div>
                    </div>

                    {/* Check indicator (Back to end) */}
                    <div
                      className={`size-8 lg:size-10 rounded-full border-2 flex items-center justify-center transition-all shrink-0 ${
                        task.done
                          ? 'bg-emerald-500 border-emerald-500 text-white shadow-sm'
                          : 'border-slate-200 bg-white group-hover:border-emerald-500'
                      }`}
                    >
                      {task.done && (
                        <span className="material-symbols-outlined text-[18px] lg:text-[22px]" style={{fontVariationSettings: '"FILL" 1'}}>
                          check
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Quick Menu (Right on Desktop, Narrower) */}
          <section className="lg:col-span-4 order-2 self-start lg:sticky lg:top-6">
            <div className="grid grid-cols-4 lg:grid-cols-2 gap-3 lg:gap-4">
              <Link 
                href="/planning/add"
                className="bg-white rounded-[1.5rem] p-3 shadow-sm border border-slate-100 flex flex-col items-center justify-center gap-2 lg:gap-3 group active:scale-95 transition-transform hover:border-emerald-200 lg:py-6"
              >
                <div className="size-12 lg:size-14 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
                  <span className="material-symbols-outlined text-[24px] lg:text-[28px]">assignment</span>
                </div>
                <span className="text-[11px] lg:text-sm font-bold text-slate-700">วางแผนงาน</span>
              </Link>
              <Link 
                href="/activity-log/add"
                className="bg-white rounded-[1.5rem] p-3 shadow-sm border border-slate-100 flex flex-col items-center justify-center gap-2 lg:gap-3 group active:scale-95 transition-transform hover:border-emerald-200 lg:py-6"
              >
                <div className="size-12 lg:size-14 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
                  <span className="material-symbols-outlined text-[24px] lg:text-[28px]">edit_note</span>
                </div>
                <span className="text-[11px] lg:text-sm font-bold text-slate-700">บันทึก</span>
              </Link>
              <Link href="/harvest" className="bg-white rounded-[1.5rem] p-3 shadow-sm border border-slate-100 flex flex-col items-center justify-center gap-2 lg:gap-3 group active:scale-95 transition-transform hover:border-amber-200 lg:py-6">
                <div className="size-12 lg:size-14 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300">
                  <span className="material-symbols-outlined text-[24px] lg:text-[28px]">agriculture</span>
                </div>
                <span className="text-[11px] lg:text-sm font-bold text-slate-700">เก็บเกี่ยว</span>
              </Link>
              <Link href="/finance" className="bg-white rounded-[1.5rem] p-3 shadow-sm border border-slate-100 flex flex-col items-center justify-center gap-2 lg:gap-3 group active:scale-95 transition-transform hover:border-rose-200 lg:py-6">
                <div className="size-12 lg:size-14 bg-rose-50 rounded-xl flex items-center justify-center text-rose-600 group-hover:bg-rose-500 group-hover:text-white transition-colors duration-300">
                  <span className="material-symbols-outlined text-[24px] lg:text-[28px]">shopping_cart</span>
                </div>
                <span className="text-[11px] lg:text-sm font-bold text-slate-700">การเงิน</span>
              </Link>
            </div>
          </section>

        </div>

      </main>

      <style jsx global>{`
        /* Custom Scrollbar for Tasks List */
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #cbd5e1;
          border-radius: 20px;
        }
      `}</style>

      <BottomNavBar />
    </div>
  );
}
