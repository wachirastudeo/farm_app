import React from 'react';
import { BottomNavBar } from '@/components/layout/BottomNavBar';

export default function Knowledge() {
  return (
    <>
      {/* Desktop Page Header */}
      <header className="hidden lg:flex items-center justify-between px-8 py-6 border-b border-zinc-100 bg-white/80 backdrop-blur-md sticky top-0 z-10">
        <div>
          <h1 className="text-2xl font-bold text-emerald-700 tracking-tight">คลังความรู้</h1>
          <p className="text-sm text-slate-500 font-medium mt-0.5">บทความและข้อมูลสำหรับชาวสวนมืออาชีพ</p>
        </div>
        <button className="active:scale-95 transition-all hover:opacity-75">
          <span className="material-symbols-outlined text-zinc-500 text-[28px]">notifications</span>
        </button>
      </header>

      {/* Mobile TopAppBar */}
      <header className="lg:hidden fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-zinc-100 shadow-sm">
        <div className="flex items-center justify-between w-full px-6 h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#2d5a27]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Profile"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAABf_vd7BmMFqJRqk8fLj2LDt5YLqHgyk29VsFD80gYkYSrjQN_gRw4r8mPyNAM0FDsztCV08J7GNEAQ30sCXA2mmiysTpfw2dnzlx_UDnL32wXLc7QlzZYXCiQ48_LOB5-tSIvJxHthMumwltnpbeYSjPaVZxs1XIxi-Lm_bV7_C1naWpkK8Jre9HRS7t0_Yo7SnDtG51Ctondu_dZyLXD7Jr1WvekjvZEUMG4g3TRs_TD_1qQHhV2h2MtU_r9FI2BN5RBHA_h0pH"
              />
            </div>
          </div>
          <h1 className="text-[24px] font-semibold font-kanit text-emerald-700 tracking-tight">คลังความรู้</h1>
          <button className="active:scale-95 transition-all hover:opacity-75">
            <span className="material-symbols-outlined text-zinc-500">notifications</span>
          </button>
        </div>
      </header>

      <main className="lg:px-8 lg:py-6 lg:max-w-7xl lg:mx-auto pt-20 px-6 max-w-4xl mx-auto pb-32">
        {/* Search Bar */}
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <span className="material-symbols-outlined text-[#72796e]">search</span>
          </div>
          <input className="w-full bg-[#eeeeeb] border-none rounded-2xl py-4 pl-12 pr-4 text-base font-kanit focus:ring-2 focus:ring-[#2d5a27] transition-all" placeholder="ค้นหาบทความ..." type="text"/>
        </div>

        {/* Category Filters */}
        <div className="mb-6 overflow-x-auto no-scrollbar flex gap-3 pb-2">
          <button className="whitespace-nowrap px-6 py-2.5 rounded-full bg-[#2d5a27] text-[#9dd090] text-sm font-medium font-kanit shadow-sm">ทั้งหมด</button>
          <button className="whitespace-nowrap px-6 py-2.5 rounded-full bg-white border border-[#c2c9bb] text-[#42493e] text-sm font-medium font-kanit hover:bg-[#eeeeeb] transition-colors">การดูแลพืช</button>
          <button className="whitespace-nowrap px-6 py-2.5 rounded-full bg-white border border-[#c2c9bb] text-[#42493e] text-sm font-medium font-kanit hover:bg-[#eeeeeb] transition-colors">ปุ๋ยและยา</button>
          <button className="whitespace-nowrap px-6 py-2.5 rounded-full bg-white border border-[#c2c9bb] text-[#42493e] text-sm font-medium font-kanit hover:bg-[#eeeeeb] transition-colors">ข่าวสาร</button>
          <button className="whitespace-nowrap px-6 py-2.5 rounded-full bg-white border border-[#c2c9bb] text-[#42493e] text-sm font-medium font-kanit hover:bg-[#eeeeeb] transition-colors">เทคโนโลยี</button>
        </div>

        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Featured Article */}
            <section>
              <div className="relative w-full h-64 lg:h-72 rounded-3xl overflow-hidden shadow-lg group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Featured Article"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAd4wfhiRfYszksdtn5H_bsbPlEOYZimgd-4eGhKGYqZYf3f93l4v8w-OvnGdKWJucXemjg-gDoZdCRJAmTuVWw4TURKw3GHnqqOIgN754Tf0j0EOQBbRIBiqIS54h066Wfmm0shA8COfIaOOHp9Dpo0pw82cS8tLGfdnSDG0hw7WhlH8geR_hvP1bs-AWhUU4jOIWMMWXn8AmBGZU1x5UPtXiyQHhuJQ1PQt6zqiUN2KlOg58exiftJCVOpNDvmXWi1snVEDoIPkzn"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 p-6">
                  <span className="bg-[#6c4a00] text-[#ffb51e] px-3 py-1 rounded-full text-xs font-semibold font-kanit mb-3 inline-block">บทความแนะนำ</span>
                  <h2 className="text-white text-[22px] font-semibold font-kanit leading-tight mb-2">เทคนิคการบริหารจัดการน้ำในสวนทุเรียนช่วงฤดูแล้ง</h2>
                  <p className="text-zinc-300 text-base font-kanit line-clamp-1">เรียนรู้วิธีการจัดทำระบบให้น้ำอย่างมีประสิทธิภาพเพื่อผลผลิตที่มีคุณภาพสูง</p>
                </div>
              </div>
            </section>

            {/* Article List */}
            <section className="space-y-4">
              <h3 className="text-[20px] font-semibold font-kanit text-[#1a1c1b]">บทความล่าสุด</h3>

              {/* Article Card 1 */}
              <div className="flex gap-4 p-4 rounded-3xl bg-white border border-[#e2e3e0] shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt="Thumbnail" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAllyvPN0QERhLYxBkrDSSTfWMJVmMIEQ0cduvG5dt9dupjR0lCysa8IGdIlNnJTAUPjZlu-lKEzv6SIeeMBsHoAFKfEybJKiQpxAYikW9aNbSmzDZwtr3es-KJuxyWN2Is1HRBGLKGGxiVPubHL1JrTBZhvCUySyyhoIOGbMsTj_Cy9NTGkpWXHM8bzQQXE31x1eSwGRi9_wxYkcGzTftY_j4zfU2HYOJXrsB6T5feJLuMXz7Q-9WNK1J9ocp7UHYEsZ6g8VpIu3bB" />
                </div>
                <div className="flex flex-col justify-between py-1">
                  <div>
                    <span className="text-[#4f3500] text-xs font-semibold font-kanit mb-1 block">ปุ๋ยและยา</span>
                    <h4 className="text-lg font-semibold font-kanit text-[#1a1c1b] line-clamp-2 leading-snug">5 สูตรปุ๋ยหมักชีวภาพที่ช่วยบำรุงหน้าดินอย่างยั่งยืน</h4>
                  </div>
                  <div className="flex items-center gap-4 text-zinc-400 text-xs font-semibold font-kanit">
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">schedule</span> 2 ชม. ที่แล้ว</span>
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">visibility</span> 1.2k</span>
                  </div>
                </div>
              </div>

              {/* Article Card 2 */}
              <div className="flex gap-4 p-4 rounded-3xl bg-white border border-[#e2e3e0] shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt="Thumbnail" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRiLfpEwyhnzDIpTIIkM3EkS6bY5-YgUPwxu8fKqgSXNjQgPPNv2V-q_W6wWlg9YQp_a71m_wRDFUyBRQ-X9zeLNvXpO7_0eHy00Z00alKP3MKVhOHLRl04QD8bgkyJNaThnAxCJ6aYj5So-Ed15uDw52qmTeMYEY2QSsTx_1QqEhYTg42ZqOS_5UPPoCMF3eN0BbHSOD8GyRUE-D5J9HDZ56rd6owaFE4b6ML-QN9kGFQAImWrDD4XJV9epW2id0N0uMbbyq8bPX7" />
                </div>
                <div className="flex flex-col justify-between py-1">
                  <div>
                    <span className="text-[#4f3500] text-xs font-semibold font-kanit mb-1 block">การดูแลพืช</span>
                    <h4 className="text-lg font-semibold font-kanit text-[#1a1c1b] line-clamp-2 leading-snug">วิธีการป้องกันและกำจัดเพลี้ยไฟในสวนมังคุดอย่างได้ผล</h4>
                  </div>
                  <div className="flex items-center gap-4 text-zinc-400 text-xs font-semibold font-kanit">
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">schedule</span> เมื่อวานนี้</span>
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">visibility</span> 850</span>
                  </div>
                </div>
              </div>

              {/* Article Card 3 */}
              <div className="flex gap-4 p-4 rounded-3xl bg-white border border-[#e2e3e0] shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt="Thumbnail" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnRHg95C2NWwhW29gnhqHpO5tzu6QmDruRpjeYOM8GPM4NWRZSD1NfeWzcvdSuqygbi_sDww2CiGgypiTbjx1_zcqScITNhP_5TvkoCLgUQQi61SaB5pm3Risa1qwhm7cybl1qrUtD3JSuUwSdOtZTF11c_DbQln52-3f7jv8olTYbxDUm25lQfMxGckSYmLboGCveISYDHMmvnNQZG3q5mTcer1mVn7AFnYCcoXT2yxhF1MRu_8thHCjxYVpcDVkYwf0dPaG798Up" />
                </div>
                <div className="flex flex-col justify-between py-1">
                  <div>
                    <span className="text-[#4f3500] text-xs font-semibold font-kanit mb-1 block">ข่าวสาร</span>
                    <h4 className="text-lg font-semibold font-kanit text-[#1a1c1b] line-clamp-2 leading-snug">เทรนด์ตลาดผลไม้ส่งออกปี 2567 ที่ชาวสวนควรรู้</h4>
                  </div>
                  <div className="flex items-center gap-4 text-zinc-400 text-xs font-semibold font-kanit">
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">schedule</span> 2 วันที่แล้ว</span>
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">visibility</span> 2.4k</span>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Sidebar - Desktop */}
          <div className="hidden lg:block space-y-6">
            {/* Recommended Topics */}
            <section>
              <h3 className="text-lg font-semibold font-kanit text-[#1a1c1b] mb-4">หัวข้อที่คุณอาจสนใจ</h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-[#bcf0ae] text-[#23501e] p-5 rounded-[1.5rem] flex items-center gap-4 cursor-pointer hover:brightness-95 transition-all">
                  <span className="material-symbols-outlined text-4xl shrink-0">eco</span>
                  <p className="text-sm font-bold font-kanit">เกษตรอินทรีย์แบบมืออาชีพ</p>
                </div>
                <div className="bg-[#fed3c7] text-[#795950] p-5 rounded-[1.5rem] flex items-center gap-4 cursor-pointer hover:brightness-95 transition-all">
                  <span className="material-symbols-outlined text-4xl shrink-0">monitoring</span>
                  <p className="text-sm font-bold font-kanit">การวิเคราะห์ต้นทุนและกำไร</p>
                </div>
                <div className="bg-[#dbeafe] text-[#1e40af] p-5 rounded-[1.5rem] flex items-center gap-4 cursor-pointer hover:brightness-95 transition-all">
                  <span className="material-symbols-outlined text-4xl shrink-0">water_drop</span>
                  <p className="text-sm font-bold font-kanit">ระบบชลประทานสมัยใหม่</p>
                </div>
                <div className="bg-[#fef9c3] text-[#854d0e] p-5 rounded-[1.5rem] flex items-center gap-4 cursor-pointer hover:brightness-95 transition-all">
                  <span className="material-symbols-outlined text-4xl shrink-0">sunny</span>
                  <p className="text-sm font-bold font-kanit">พยากรณ์อากาศเพื่อการเกษตร</p>
                </div>
              </div>
            </section>

            {/* Trending */}
            <section className="bg-white rounded-2xl border border-[#e2e3e0] shadow-sm p-5">
              <h3 className="text-base font-semibold font-kanit text-[#1a1c1b] mb-3">กำลังนิยม 🔥</h3>
              <div className="space-y-3">
                {['วิธีปลูกทุเรียนในพื้นที่จำกัด', 'เทคนิคตัดแต่งกิ่งมังคุด', 'โรคระบาดที่ต้องระวังในฤดูฝน', 'เพิ่มผลผลิตด้วยปุ๋ยชีวภาพ'].map((t, i) => (
                  <div key={t} className="flex items-start gap-3 cursor-pointer hover:bg-zinc-50 -mx-2 px-2 py-1 rounded-lg transition-colors">
                    <span className="text-lg font-black text-zinc-200 w-5 shrink-0">{i + 1}</span>
                    <p className="text-sm font-kanit text-[#1a1c1b] leading-snug">{t}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Recommended Topics - Mobile */}
        <section className="mt-12 mb-8 lg:hidden">
          <h3 className="text-[24px] font-semibold font-kanit text-[#1a1c1b] mb-6">หัวข้อที่คุณอาจสนใจ</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#bcf0ae] text-[#23501e] p-6 rounded-[2rem] flex flex-col justify-between min-h-[160px]">
              <span className="material-symbols-outlined text-4xl">eco</span>
              <p className="text-sm font-bold font-kanit">เกษตรอินทรีย์แบบมืออาชีพ</p>
            </div>
            <div className="bg-[#fed3c7] text-[#795950] p-6 rounded-[2rem] flex flex-col justify-between min-h-[160px]">
              <span className="material-symbols-outlined text-4xl">monitoring</span>
              <p className="text-sm font-bold font-kanit">การวิเคราะห์ต้นทุนและกำไร</p>
            </div>
          </div>
        </section>
      </main>

      <BottomNavBar />
    </>
  );
}
