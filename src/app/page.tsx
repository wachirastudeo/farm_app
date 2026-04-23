import React from 'react';

export default function Home() {
  return (
    <>
      <header className="flex items-center justify-between px-6 py-3 bg-white/80 backdrop-blur-md sticky top-0 z-10 shadow-sm">
        <div>
          <h1 className="text-xl font-bold text-slate-800 tracking-tight">หน้าแรก</h1>
          <p className="text-sm text-slate-500 font-medium mt-0.5">สวัสดีตอนเช้า, สมชาย</p>
        </div>
        <div className="size-10 rounded-full bg-slate-100 overflow-hidden border-2 border-emerald-500 shadow-sm">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="User Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuClGTGqrgkOWcQbNUV5Ph47FPZ0jczyuChHb6i2pP6jhLifdxteY36dNl2lcCC8LVnC6-U_pdncI3h5iBdvwiGcSPiC93Kfr5sRiT1lcBm7YsyVzoK8loUByOjFxHON5PRVw61avc_ij_ORT7sj3qhd-oY_UOPMw98qrWbKef_zhzspvyg1bVM7BLtQmto24qc_HsqqmNMOZ4NK0TU-O6bz5v7nLCWrdPegAuUX9cJjYsD3A6waOZlNyumZZHG7oapJa9AucEB3Qg2y" />
        </div>
      </header>
      
      <main className="flex flex-col gap-8 px-6 mt-4">
        <section className="bg-gradient-to-br from-sky-400 to-blue-500 rounded-2xl p-6 shadow-ambient-lg text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full mix-blend-overlay opacity-20 blur-2xl transform translate-x-12 -translate-y-12"></div>
          <div className="relative z-10 flex justify-between items-start mb-6">
            <div className="flex flex-col">
              <span className="text-sm font-medium text-sky-50 mb-1">สภาพอากาศปัจจุบัน</span>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold tracking-tight">32°C</span>
              </div>
              <div className="flex items-center gap-1.5 text-base text-sky-50 mt-2 font-medium">
                <span className="material-symbols-outlined text-[20px]">humidity_percentage</span>
                <span>ความชื้น 65%</span>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <span className="material-symbols-outlined text-[56px] text-yellow-300 drop-shadow-md" style={{fontVariationSettings: '"FILL" 1'}}>light_mode</span>
              <span className="text-sm font-medium mt-1">แดดจัด</span>
            </div>
          </div>
          <div className="border-t border-white/20 pt-5 flex justify-between relative z-10 px-2">
            <div className="flex flex-col items-center gap-1.5">
              <span className="text-sm text-sky-100 font-medium">พรุ่งนี้</span>
              <span className="material-symbols-outlined text-[28px] text-white" style={{fontVariationSettings: '"FILL" 1'}}>partly_cloudy_day</span>
              <span className="text-lg font-semibold">31°</span>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <span className="text-sm text-sky-100 font-medium">พฤหัส</span>
              <span className="material-symbols-outlined text-[28px] text-white" style={{fontVariationSettings: '"FILL" 1'}}>rainy</span>
              <span className="text-lg font-semibold">28°</span>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <span className="text-sm text-sky-100 font-medium">ศุกร์</span>
              <span className="material-symbols-outlined text-[28px] text-white" style={{fontVariationSettings: '"FILL" 1'}}>cloud</span>
              <span className="text-lg font-semibold">30°</span>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-4 tracking-tight">เมนูด่วน</h2>
          <div className="grid grid-cols-2 gap-4">
            <button className="bg-white rounded-2xl p-4 flex flex-col items-center justify-center gap-3 shadow-ambient border border-slate-100 hover:border-emerald-200 hover:shadow-md transition-all h-32 group">
              <div className="size-14 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[32px]">assignment</span>
              </div>
              <span className="text-base font-semibold text-slate-700">วางแผนงานสวน</span>
            </button>
            <button className="bg-white rounded-2xl p-4 flex flex-col items-center justify-center gap-3 shadow-ambient border border-slate-100 hover:border-orange-200 hover:shadow-md transition-all h-32 group">
              <div className="size-14 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[32px]">add_circle</span>
              </div>
              <span className="text-base font-semibold text-slate-700">บันทึกงาน</span>
            </button>
            <button className="bg-white rounded-2xl p-4 flex flex-col items-center justify-center gap-3 shadow-ambient border border-slate-100 hover:border-amber-200 hover:shadow-md transition-all h-32 group">
              <div className="size-14 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[32px]">agriculture</span>
              </div>
              <span className="text-base font-semibold text-slate-700">บันทึกเก็บเกี่ยว</span>
            </button>
            <button className="bg-white rounded-2xl p-4 flex flex-col items-center justify-center gap-3 shadow-ambient border border-slate-100 hover:border-sky-200 hover:shadow-md transition-all h-32 group">
              <div className="size-14 rounded-full bg-sky-50 flex items-center justify-center text-sky-600 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[32px]">shopping_cart</span>
              </div>
              <span className="text-base font-semibold text-slate-700">ซื้อของ</span>
            </button>
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-slate-800 tracking-tight">งานเร่งด่วนวันนี้</h2>
            <button className="text-base text-emerald-600 font-semibold flex items-center hover:text-emerald-700 transition-colors">
              ดูทั้งหมด <span className="material-symbols-outlined text-[20px]">chevron_right</span>
            </button>
          </div>
          <div className="flex flex-col gap-4">
            <div className="bg-white rounded-2xl p-5 flex items-center gap-4 shadow-ambient border border-slate-100">
              <div className="size-12 rounded-full bg-sky-50 flex items-center justify-center text-sky-500 shrink-0">
                <span className="material-symbols-outlined text-[28px]" style={{fontVariationSettings: '"FILL" 1'}}>water_drop</span>
              </div>
              <div className="flex-1 flex flex-col">
                <span className="text-base font-bold text-slate-800">รดน้ำทุเรียน แปลง A</span>
                <span className="text-sm font-medium text-slate-500 mt-0.5">ก่อน 10:00 น. • ปริมาณ 50L/ต้น</span>
              </div>
              <button className="size-10 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-400 hover:bg-emerald-500 hover:border-emerald-500 hover:text-white transition-all shrink-0">
                <span className="material-symbols-outlined text-[24px]">check</span>
              </button>
            </div>
            
            <div className="bg-white rounded-2xl p-5 flex items-center gap-4 shadow-ambient border border-orange-100 relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-500"></div>
              <div className="size-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 shrink-0">
                <span className="material-symbols-outlined text-[28px]" style={{fontVariationSettings: '"FILL" 1'}}>pest_control</span>
              </div>
              <div className="flex-1 flex flex-col">
                <span className="text-base font-bold text-slate-800">ตรวจสอบแมลง แปลง B</span>
                <span className="text-sm font-medium text-orange-600 mt-0.5">พบเพลี้ยระบาดเมื่อวาน</span>
              </div>
              <button className="size-10 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-400 hover:bg-emerald-500 hover:border-emerald-500 hover:text-white transition-all shrink-0">
                <span className="material-symbols-outlined text-[24px]">check</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-slate-100 px-2 pb-[env(safe-area-inset-bottom,24px)] pt-2 shadow-[0_-8px_30px_rgba(0,0,0,0.04)] z-50">
        <div className="flex justify-between items-center h-16 max-w-md mx-auto">
          <a className="flex flex-1 flex-col items-center justify-center gap-1.5 text-emerald-600" href="#">
            <span className="material-symbols-outlined text-[26px]" style={{fontVariationSettings: '"FILL" 1'}}>home</span>
            <span className="text-[11px] sm:text-xs font-semibold whitespace-nowrap">หน้าแรก</span>
          </a>
          <a className="flex flex-1 flex-col items-center justify-center gap-1.5 text-slate-400 hover:text-emerald-600 transition-colors" href="#">
            <span className="material-symbols-outlined text-[26px]">map</span>
            <span className="text-[11px] sm:text-xs font-medium whitespace-nowrap">กิจกรรม</span>
          </a>
          <a className="flex flex-1 flex-col items-center justify-center gap-1.5 text-slate-400 hover:text-emerald-600 transition-colors" href="#">
            <span className="material-symbols-outlined text-[26px]">account_balance_wallet</span>
            <span className="text-[11px] sm:text-xs font-medium whitespace-nowrap">รายรับรายจ่าย</span>
          </a>
          <a className="flex flex-1 flex-col items-center justify-center gap-1.5 text-slate-400 hover:text-emerald-600 transition-colors" href="#">
            <span className="material-symbols-outlined text-[26px]">person</span>
            <span className="text-[11px] sm:text-xs font-medium whitespace-nowrap">บัญชี</span>
          </a>
        </div>
      </nav>
    </>
  );
}
