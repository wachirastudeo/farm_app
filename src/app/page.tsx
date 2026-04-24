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
  const tempBg = 'bg-white/95';
  const tempBorder = temp > 33 ? 'border-rose-200' : temp > 28 ? 'border-orange-200' : 'border-sky-200';
  const tempText = temp > 33 ? 'text-rose-600' : temp > 28 ? 'text-orange-600' : 'text-sky-600';
  const tempIconBg = temp > 33 ? 'bg-rose-50' : temp > 28 ? 'bg-orange-50' : 'bg-sky-50';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-[#f2f8f5] to-slate-100 font-kanit relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-emerald-500/5 to-transparent pointer-events-none"></div>
      <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Mobile Header */}
      <header className="lg:hidden flex items-center justify-between px-5 py-4 bg-white/60 backdrop-blur-xl sticky top-0 z-50 border-b border-white/40 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-xl bg-slate-900 flex items-center justify-center text-white shadow-lg shadow-slate-900/10">
            <span className="material-symbols-outlined text-[20px]">park</span>
          </div>
          <div>
            <h1 className="text-lg font-black text-slate-900 leading-tight tracking-tight">สวัสดี สมชาย</h1>
            <p className="text-xs text-slate-700 font-bold mt-0.5 uppercase tracking-wider">สวนร่มเย็น จ.จันทบุรี</p>
          </div>
        </div>
        <Link href="/account" className="active:scale-95 transition-transform">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="User Profile" className="size-10 rounded-full border-2 border-white shadow-md object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuClGTGqrgkOWcQbNUV5Ph47FPZ0jczyuChHb6i2pP6jhLifdxteY36dNl2lcCC8LVnC6-U_pdncI3h5iBdvwiGcSPiC93Kfr5sRiT1lcBm7YsyVzoK8loUByOjFxHON5PRVw61avc_ij_ORT7sj3qhd-oY_UOPMw98qrWbKef_zhzspvyg1bVM7BLtQmto24qc_HsqqmNMOZ4NK0TU-O6bz5v7nLCWrdPegAuUX9cJjYsD3A6waOZlNyumZZHG7oapJa9AucEB3Qg2y" />
        </Link>
      </header>

      {/* Desktop Header */}
      <header className="hidden lg:flex items-center justify-between px-8 py-5 bg-white/60 backdrop-blur-xl sticky top-0 z-50 border-b border-white/40 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="size-12 rounded-2xl bg-slate-900 flex items-center justify-center text-white shadow-xl shadow-slate-900/20">
            <span className="material-symbols-outlined text-[24px]">park</span>
          </div>
          <div>
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">สวัสดีตอนเช้า, สมชาย 🌿</h1>
            <p className="text-sm text-slate-700 font-black mt-0.5 uppercase tracking-widest">ระบบจัดการสวนอัจฉริยะ • จันทบุรี</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/activity-log/add"
            className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-2xl text-sm font-black hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/40 transition-all active:scale-95 shadow-xl shadow-slate-900/20"
          >
            <span className="material-symbols-outlined text-[20px]">add</span>
            บันทึกงานสวน
          </Link>
          <Link href="/account" className="hover:scale-105 transition-transform">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="User Profile" className="size-12 rounded-full border-4 border-white object-cover shadow-xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuClGTGqrgkOWcQbNUV5Ph47FPZ0jczyuChHb6i2pP6jhLifdxteY36dNl2lcCC8LVnC6-U_pdncI3h5iBdvwiGcSPiC93Kfr5sRiT1lcBm7YsyVzoK8loUByOjFxHON5PRVw61avc_ij_ORT7sj3qhd-oY_UOPMw98qrWbKef_zhzspvyg1bVM7BLtQmto24qc_HsqqmNMOZ4NK0TU-O6bz5v7nLCWrdPegAuUX9cJjYsD3A6waOZlNyumZZHG7oapJa9AucEB3Qg2y" />
          </Link>
        </div>
      </header>

      <main className="flex flex-col gap-6 px-5 lg:px-8 mt-6 pb-28 max-w-[1280px] mx-auto relative z-10">

        {/* TOP ROW: Bento Command Center */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
          {/* Weather Command (High Contrast Clean) */}
          <section className={`${tempBg} rounded-[2.5rem] p-5 shadow-xl border ${tempBorder} flex items-center justify-between group h-full lg:col-span-2 relative overflow-hidden transition-all duration-500 hover:shadow-2xl`}>
            <div className="relative z-10 flex items-center gap-5">
              <div className={`size-20 rounded-3xl ${tempIconBg} flex items-center justify-center`}>
                <span className={`material-symbols-outlined text-[42px] ${tempText}`} style={{fontVariationSettings: '"FILL" 1'}}>wb_sunny</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline gap-1">
                  <span className={`text-5xl font-black tracking-tighter ${tempText}`}>{temp}°</span>
                  <span className={`text-xl font-bold text-slate-400`}>C</span>
                </div>
                <span className="text-[10px] font-black text-slate-800 uppercase tracking-[0.3em]">ท้องฟ้าแจ่มใส</span>
              </div>
            </div>
            
            <div className="relative z-10 hidden sm:flex items-center gap-8 pr-4 border-l border-slate-100 pl-6">
              {[
                { day: 'พ.', t: '31°', i: 'partly_cloudy_day' },
                { day: 'พฤ.', t: '30°', i: 'cloud' }
              ].map((w, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <span className="text-[9px] font-black text-slate-400 uppercase mb-2">{w.day}</span>
                  <span className={`material-symbols-outlined text-[24px] ${tempText} opacity-40`} style={{fontVariationSettings: '"FILL" 1'}}>{w.i}</span>
                  <span className="text-sm font-black text-slate-900 mt-1">{w.t}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Finance Command (Amber/Gold) */}
          <Link href="/finance" className="bg-amber-500 rounded-[2.5rem] p-5 shadow-xl border border-amber-400 flex flex-col items-center justify-center relative overflow-hidden group active:scale-[0.98] transition-all hover:-translate-y-1 h-full lg:col-span-1 text-white">
            <span className="text-[10px] font-black text-white uppercase tracking-[0.3em] mb-2">การเงิน</span>
            <div className="flex items-baseline gap-1">
              <span className="text-5xl font-black text-white tracking-tighter leading-none">9,300</span>
              <span className="text-lg font-bold text-white">฿</span>
            </div>
          </Link>

          {/* Harvest Command (Emerald Green) */}
          <Link href="/harvest" className="bg-emerald-500 rounded-[2.5rem] p-5 shadow-xl border border-emerald-400 flex flex-col items-center justify-center relative overflow-hidden group active:scale-[0.98] transition-all hover:-translate-y-1 h-full lg:col-span-1 text-white">
            <span className="text-[10px] font-black text-white uppercase tracking-[0.3em] mb-2">ผลผลิต</span>
            <div className="flex items-baseline gap-1">
              <span className="text-5xl font-black tracking-tighter leading-none">2,400</span>
              <span className="text-lg font-bold text-white">กก.</span>
            </div>
          </Link>

          {/* Progress Command (Dark/Tasks) */}
          <div className="bg-slate-900 rounded-[2.5rem] p-5 shadow-xl border border-slate-800 flex flex-col items-center justify-center relative overflow-hidden group h-full lg:col-span-1 text-white">
            <span className="text-[10px] font-black text-white uppercase tracking-[0.3em] mb-2">งานวันนี้</span>
            <div className="flex items-baseline gap-1">
              <span className="text-5xl font-black text-white tracking-tighter leading-none">{doneCount}</span>
              <span className="text-2xl font-bold text-white">/</span>
              <span className="text-3xl font-black text-white tracking-tighter leading-none">{tasks.length}</span>
            </div>
          </div>
        </div>

        {/* BOTTOM ROW: Menu & Tasks */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* Urgent Tasks (Left on Desktop, Wider) */}
          <section className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] shadow-xl border border-white flex flex-col lg:col-span-8 order-1 overflow-hidden">
            <div className="px-8 py-6 border-b border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <h2 className="text-2xl font-black text-slate-800 tracking-tight">งานวันนี้</h2>
                <div className={`flex items-center justify-center min-w-[70px] h-[40px] px-4 rounded-2xl border transition-all duration-500 shadow-lg ${doneCount === tasks.length
                    ? 'bg-emerald-500 text-white border-emerald-400 shadow-emerald-500/20'
                    : 'bg-rose-500 text-white border-rose-400 shadow-rose-500/20'
                  }`}>
                  <span className="text-xl font-black tracking-tighter leading-none">{doneCount}</span>
                  <span className="text-xs font-bold mx-1">/</span>
                  <span className="text-sm font-black tracking-tighter leading-none">{tasks.length}</span>
                </div>
              </div>
              <Link href="/planning" className="text-xs font-black text-emerald-600 hover:text-emerald-700 transition-colors uppercase tracking-widest bg-emerald-50 px-4 py-2 rounded-xl border border-emerald-100">จัดการงาน</Link>
            </div>

            <div className="p-6">
              <div className="flex flex-col gap-4">
                {tasks
                  .slice()
                  .sort((a, b) => (a.done === b.done ? 0 : a.done ? 1 : -1))
                  .map((task) => (
                    <div
                      key={task.id}
                      className={`rounded-[1.75rem] p-5 flex items-center gap-4 transition-all duration-300 border group ${task.done
                          ? 'border-emerald-200 bg-emerald-50/50'
                          : task.urgent
                            ? 'border-rose-100 bg-rose-50/30 shadow-md'
                            : 'border-slate-100 bg-white shadow-md hover:border-emerald-200'
                        }`}
                    >
                      <div className="flex-1 min-w-0 flex items-center gap-4">
                        <div className={`size-12 rounded-2xl flex items-center justify-center shrink-0 shadow-lg ${task.iconBg} shadow-${task.iconColor.split('-')[1]}-500/10`}>
                          <span
                            className={`material-symbols-outlined text-[24px] ${task.iconColor}`}
                            style={{ fontVariationSettings: '"FILL" 1' }}
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
                              {task.done ? '✓ เสร็จสิ้นแล้ว' : `${task.time} • ${task.desc}`}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => router.push('/planning')}
                          className="size-9 rounded-xl flex items-center justify-center text-slate-600 hover:text-emerald-500 hover:bg-emerald-50 transition-all"
                        >
                          <span className="material-symbols-outlined text-[18px]">edit</span>
                        </button>
                        <button
                          onClick={() => toggleTask(task.id)}
                          className={`size-9 rounded-xl flex items-center justify-center transition-all ${task.done
                              ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20'
                              : 'bg-white border border-slate-200 text-slate-400 hover:border-emerald-500 hover:text-emerald-500'
                            }`}
                        >
                          <span className="material-symbols-outlined text-[18px] font-black">{task.done ? 'done_all' : 'done'}</span>
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </section>

          {/* Quick Menu (Right on Desktop, Narrower) */}
          <section className="lg:col-span-4 order-2 self-start lg:sticky lg:top-24">
            <div className="grid grid-cols-2 gap-4">
              {[
                { 
                  href: '/planning/add', 
                  icon: 'assignment', 
                  label: 'วางแผนงาน', 
                  bg: 'bg-emerald-50', 
                  text: 'text-emerald-600', 
                  hoverBg: 'group-hover:bg-emerald-500', 
                  shadow: 'shadow-emerald-500/10' 
                },
                { 
                  href: '/activity-log/add', 
                  icon: 'edit_note', 
                  label: 'บันทึกงาน', 
                  bg: 'bg-sky-50', 
                  text: 'text-sky-600', 
                  hoverBg: 'group-hover:bg-sky-500', 
                  shadow: 'shadow-sky-500/10' 
                },
                { 
                  href: '/harvest', 
                  icon: 'agriculture', 
                  label: 'เก็บเกี่ยว', 
                  bg: 'bg-amber-50', 
                  text: 'text-amber-600', 
                  hoverBg: 'group-hover:bg-amber-500', 
                  shadow: 'shadow-amber-500/10' 
                },
                { 
                  href: '/finance', 
                  icon: 'shopping_cart', 
                  label: 'การเงิน', 
                  bg: 'bg-rose-50', 
                  text: 'text-rose-600', 
                  hoverBg: 'group-hover:bg-rose-500', 
                  shadow: 'shadow-rose-500/10' 
                },
              ].map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="bg-white/80 backdrop-blur-xl rounded-[2rem] p-6 shadow-xl border border-white flex flex-col items-center justify-center gap-4 group active:scale-95 transition-all hover:-translate-y-1"
                >
                  <div className={`size-16 ${item.bg} rounded-[1.25rem] flex items-center justify-center ${item.text} ${item.hoverBg} group-hover:text-white transition-all duration-300 shadow-lg ${item.shadow}`}>
                    <span className="material-symbols-outlined text-[32px] font-bold">{item.icon}</span>
                  </div>
                  <span className="text-sm font-black text-slate-800 uppercase tracking-widest">{item.label}</span>
                </Link>
              ))}
            </div>

            {/* Promo or Help Card */}
            <div className="mt-6 bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2rem] p-8 relative overflow-hidden shadow-2xl group cursor-pointer">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-emerald-500/40 transition-all duration-700"></div>
              <h3 className="text-white font-black text-xl mb-2 relative z-10">ผู้ช่วย AI อัจฉริยะ</h3>
              <p className="text-slate-600 text-sm font-black mb-4 relative z-10">ต้องการความช่วยเหลือในการวางแผนงานหรือไม่?</p>
              <button className="bg-white text-slate-900 px-6 py-2.5 rounded-xl font-black text-sm hover:bg-emerald-400 transition-all active:scale-95 relative z-10">
                คุยกับ AI
              </button>
            </div>
          </section>

        </div>

      </main>

      <BottomNavBar />

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
    </div>
  );
}
