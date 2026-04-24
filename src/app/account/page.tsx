"use client";

import React from 'react';
import { BottomNavBar } from '@/components/layout/BottomNavBar';
import { useRouter } from 'next/navigation';

export default function Account() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-[#f2f8f5] to-slate-100 pb-32 relative overflow-hidden font-kanit">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-emerald-500/5 to-transparent pointer-events-none"></div>
      <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[20%] left-[-10%] w-80 h-80 bg-teal-400/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Header */}
      <header className="sticky top-0 z-50 px-6 h-20 flex items-center justify-between backdrop-blur-xl bg-white/60 border-b border-white/40 shadow-[0_4px_30px_rgba(0,0,0,0.03)]">
        <div className="flex items-center gap-3">
          <div className="size-10 bg-gradient-to-br from-emerald-600 to-teal-800 rounded-xl flex items-center justify-center text-white shadow-lg">
            <span className="material-symbols-outlined text-[20px]">park</span>
          </div>
          <span className="text-xl font-black text-slate-800 tracking-tight">Smart Orchard</span>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          alt="User profile" 
          className="w-10 h-10 rounded-full ring-2 ring-emerald-500 ring-offset-2 object-cover" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3k-c7ev-IgGTEpwrDHDnc4-w2sNivB4vq1AKAp-DOJi7WjfG9WM-_ZitTG98-vM_JFBLe2KpSsy--mLNDwNEm9UgvM29PfPj9JgBVg11CMZqWlCXUM7zkOJBmizMtV3pW1fsEX0xrRd_Ga-Hqdw58hOG3sTSo6hbgY8n6Me1pvSmtPAdSzn9asGj0oGRz8cgOGE9iUSMFz8oL6zCKISfZP0Z-7qLIlwYiDr555ATkSGIsXqM3fxclvJPv6_K6JiqSQsMdoocUZmes"
        />
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8 space-y-10 relative z-10">
        {/* Profile Header Card */}
        <section className="relative overflow-hidden bg-white/80 backdrop-blur-xl rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 group transition-all duration-500 hover:shadow-xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-emerald-300/10 to-teal-300/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          
          <div className="relative w-32 h-32 shrink-0 rounded-full overflow-hidden ring-4 ring-white shadow-2xl group-hover:scale-105 transition-transform duration-700">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              alt="Profile Picture" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1sHgllGLcL_P7ymPh2x3X7sdSxEln5FJCqwpDxf5PKAg-TiJveJE5MotDCFlu70pB-LNtQfq5QKzhSd6t-1n0oAuyI-txPbc4QW-_mxwGpYUv_2QzLAlODqpGPqJP_98fFviFa9YUZJjGOC9NYM8CgAZ1lFvKWcGEgcyNq-jSS7h2j-MCtO30Twc1_DK9UFbyzXnhZb1f5Y_SFwLOrgZO3VwqIWvUjjCYrXivZcg7-xlgp2qRIHx7Sm6afWX3Dd_-08Lv6fkMBeXd"
            />
          </div>
          
          <div className="text-center md:text-left flex-1 relative z-10">
            <div className="flex flex-col md:flex-row md:items-center gap-3">
              <h1 className="text-4xl font-black text-slate-800 tracking-tight">นายสมชาย รักเกษตร</h1>
              <div className="flex gap-2 justify-center md:justify-start">
                <span className="bg-gradient-to-r from-amber-400 to-amber-600 text-white text-[10px] font-black px-3 py-1 rounded-lg shadow-lg flex items-center gap-1 uppercase tracking-wider">
                  <span className="material-symbols-outlined text-[12px]">verified</span>
                  Premium
                </span>
              </div>
            </div>
            <p className="text-base font-bold text-slate-500 flex items-center justify-center md:justify-start gap-2 mt-3">
              <span className="material-symbols-outlined text-[20px] text-emerald-500">location_on</span>
              สวนร่มเย็น จ.จันทบุรี
            </p>
            <div className="mt-5 flex items-center gap-6 justify-center md:justify-start">
              <div className="flex flex-col">
                <span className="text-xs font-black text-slate-400 uppercase tracking-widest">สมาชิก</span>
                <span className="text-xl font-black text-slate-800">5 ปี 8 เดือน</span>
              </div>
              <div className="w-[1px] h-8 bg-slate-200"></div>
              <div className="flex flex-col">
                <span className="text-xs font-black text-slate-400 uppercase tracking-widest">ระดับแปลง</span>
                <span className="text-xl font-black text-emerald-600">A+ Expert</span>
              </div>
            </div>
          </div>
          
          <button className="relative z-10 bg-slate-900 text-white font-bold px-8 py-4 rounded-[1.5rem] hover:bg-emerald-800 hover:-translate-y-1 transition-all flex items-center gap-2 cursor-pointer">
            <span className="material-symbols-outlined">edit</span>
            แก้ไขข้อมูล
          </button>
        </section>

        {/* Plots Grid */}
        <section className="space-y-6">
          <div className="flex justify-between items-end px-2">
            <div>
              <h2 className="text-2xl font-black text-slate-800 tracking-tight">แปลงปลูกของฉัน</h2>
              <p className="text-sm font-bold text-slate-500 mt-1">บริหารจัดการและติดตามความคืบหน้า</p>
            </div>
            <button className="size-12 rounded-2xl bg-white shadow-md border border-slate-200/60 hover:bg-emerald-50 text-emerald-600 flex items-center justify-center transition-all group active:scale-95 cursor-pointer">
              <span className="material-symbols-outlined font-black group-hover:rotate-90 transition-transform">add</span>
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Plot 1 */}
            <div className="group bg-white/80 backdrop-blur-xl rounded-[2.5rem] border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden flex flex-col hover:-translate-y-2 hover:shadow-xl transition-all duration-500">
              <div className="h-48 bg-slate-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-1000" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAglv7sUFesFNBwXeGIWv_zpZraYjClgxK0s97RuXCSWif8frjN0zTSWagaAqilpjDY_zO4s48XKNKbCVEEeIUdNS_NCFOE_S_BUyNKz6ErdzQbPM9Cw7KYcWwCxKDbXWqtuZThYpLRR7TxW8Loc-w0y7LeNvV3Lgml_quB68nqEYR8oLkfyjJcJkMo7VCA8ahFwb0ogfaDS0q-IKgzYw1OOl1_pUGGsLTRSTBnLtbqHd9vdZ8P77MWS3URIPCFkNMGem0_WYuGzSdd')"}}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-emerald-500 text-white text-[10px] font-black px-3 py-1 rounded-lg uppercase tracking-widest">ปกติ</span>
                </div>
                <div className="absolute bottom-4 left-5 flex items-center gap-2">
                  <span className="text-white font-black tracking-wide">ทุเรียนหมอนทอง</span>
                </div>
              </div>
              <div className="p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-black text-slate-800 mb-5">แปลงทุเรียน A1</h3>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-slate-50/50 p-4 rounded-2xl border border-slate-100">
                      <span className="text-[10px] font-black text-slate-400 uppercase block mb-1">จำนวนต้น</span>
                      <span className="text-xl font-black text-slate-800">120 <span className="text-sm font-normal">ต้น</span></span>
                    </div>
                    <div className="bg-slate-50/50 p-4 rounded-2xl border border-slate-100">
                      <span className="text-[10px] font-black text-slate-400 uppercase block mb-1">อายุพืช</span>
                      <span className="text-xl font-black text-slate-800">5 <span className="text-sm font-normal">ปี</span></span>
                    </div>
                  </div>
                </div>
                <button className="w-full py-4 bg-slate-50 rounded-2xl text-slate-600 font-bold flex items-center justify-center gap-2 hover:bg-emerald-600 hover:text-white transition-all duration-300 group/btn cursor-pointer">
                  ดูรายงานเชิงลึก
                  <span className="material-symbols-outlined text-xl group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Plot 2 */}
            <div className="group bg-white/80 backdrop-blur-xl rounded-[2.5rem] border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden flex flex-col hover:-translate-y-2 hover:shadow-xl transition-all duration-500">
              <div className="h-48 bg-slate-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-1000" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC2eHTWn37uOSt7MAXRwoW5luImaI2JQIvKGAMdB2dIvIggvxsOHBb99lbTXT5A0vNO_Tz1KkNJukBWy-4HKZFr17VARmTtDZMxs7NidHPXHjwjLMHh8C-diDCg-u4RAYpeKYGdAIoCwLV1N5A-hGi1ZARkdf8gS_flowwFlbsTLGqqccSQPBCC07TlyxDEV6aGhSvQUqiSTJJka6FOyRXNCAlBX13Y2DahFThnHYSWDF9-036vzJVZ6QVlhwJQEWF8mSBAGqTgXnRi')"}}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-sky-500 text-white text-[10px] font-black px-3 py-1 rounded-lg uppercase tracking-widest">ให้น้ำ</span>
                </div>
                <div className="absolute bottom-4 left-5 flex items-center gap-2">
                  <span className="text-white font-black tracking-wide">มังคุดเกรดพรีเมียม</span>
                </div>
              </div>
              <div className="p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-black text-slate-800 mb-5">แปลงมังคุด B2</h3>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-slate-50/50 p-4 rounded-2xl border border-slate-100">
                      <span className="text-[10px] font-black text-slate-400 uppercase block mb-1">จำนวนต้น</span>
                      <span className="text-xl font-black text-slate-800">80 <span className="text-sm font-normal">ต้น</span></span>
                    </div>
                    <div className="bg-slate-50/50 p-4 rounded-2xl border border-slate-100">
                      <span className="text-[10px] font-black text-slate-400 uppercase block mb-1">อายุพืช</span>
                      <span className="text-xl font-black text-slate-800">3 <span className="text-sm font-normal">ปี</span></span>
                    </div>
                  </div>
                </div>
                <button className="w-full py-4 bg-slate-50 rounded-2xl text-slate-600 font-bold flex items-center justify-center gap-2 hover:bg-emerald-600 hover:text-white transition-all duration-300 group/btn cursor-pointer">
                  ดูรายงานเชิงลึก
                  <span className="material-symbols-outlined text-xl group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Add Plot Empty State Card */}
            <button className="group bg-slate-100/50 hover:bg-white rounded-[2.5rem] border-4 border-dashed border-slate-200 hover:border-emerald-400/50 flex flex-col items-center justify-center p-8 transition-all duration-500 min-h-[400px] cursor-pointer">
              <div className="size-20 bg-white shadow-xl rounded-[2rem] flex items-center justify-center text-slate-300 group-hover:text-emerald-500 group-hover:scale-110 transition-all duration-500 mb-6">
                <span className="material-symbols-outlined text-[40px]">add_location_alt</span>
              </div>
              <span className="text-2xl font-black text-slate-400 group-hover:text-slate-800 transition-colors">เพิ่มแปลงใหม่</span>
            </button>
          </div>
        </section>

        {/* Menu & Settings */}
        <section className="space-y-6">
          <h2 className="text-2xl font-black text-slate-800 tracking-tight px-2">การตั้งค่าส่วนตัว</h2>
          <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white overflow-hidden p-3 space-y-2">
            {[
              { icon: 'settings', label: 'ตั้งค่าระบบและบัญชี', color: 'bg-slate-100 text-slate-600' },
              { icon: 'share_location', label: 'จัดการสิทธิ์การเข้าถึงแปลง', color: 'bg-emerald-50 text-emerald-600' },
              { icon: 'help_center', label: 'ศูนย์ช่วยเหลือและซัพพอร์ต', color: 'bg-teal-50 text-teal-600' },
              { icon: 'verified_user', label: 'ความเป็นส่วนตัวและความปลอดภัย', color: 'bg-sky-50 text-sky-600' },
            ].map((item, idx) => (
              <button key={idx} className="w-full flex items-center p-5 rounded-[1.5rem] hover:bg-slate-50 transition-all group cursor-pointer">
                <div className={`size-12 rounded-2xl ${item.color} flex items-center justify-center mr-5 group-hover:scale-110 transition-transform`}>
                  <span className="material-symbols-outlined text-[24px]">{item.icon}</span>
                </div>
                <span className="text-lg font-bold text-slate-700 flex-1 text-left">{item.label}</span>
                <span className="material-symbols-outlined text-slate-300 group-hover:translate-x-1 transition-transform">chevron_right</span>
              </button>
            ))}
          </div>
          
          <button className="w-full py-5 rounded-[2rem] bg-rose-50 text-rose-600 font-black text-xl hover:bg-rose-600 hover:text-white transition-all duration-300 shadow-xl shadow-rose-900/5 mt-6 flex items-center justify-center gap-3 active:scale-[0.98] cursor-pointer">
            <span className="material-symbols-outlined text-2xl">logout</span>
            ออกจากระบบ
          </button>
        </section>
      </main>

      <BottomNavBar />
    </div>
  );
}
