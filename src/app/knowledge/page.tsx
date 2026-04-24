"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { BottomNavBar } from '@/components/layout/BottomNavBar';

export default function Knowledge() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-[#f2f8f5] to-slate-100 pb-32 relative overflow-hidden font-kanit text-slate-800">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-emerald-500/5 to-transparent pointer-events-none"></div>

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
            <h1 className="text-xl font-black text-slate-800 tracking-tight leading-none">คลังความรู้</h1>
            <p className="text-[10px] font-black text-slate-600 uppercase tracking-[0.2em] mt-1">ห้องสมุดชาวสวน</p>
          </div>
        </div>
        <button className="size-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-emerald-500 transition-all shadow-sm active:scale-90">
          <span className="material-symbols-outlined">notifications</span>
        </button>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8 relative z-10">
        
        {/* Search Bar */}
        <div className="relative mb-8 group">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-600 group-focus-within:text-emerald-500 transition-colors">search</span>
          <input 
            className="w-full bg-white border border-slate-200 rounded-2xl py-4 pl-12 pr-4 text-sm font-bold text-slate-800 placeholder:text-slate-500 shadow-sm focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all" 
            placeholder="ค้นหาบทความ, เทคนิคการเกษตร..." 
            type="text"
          />
        </div>

        {/* Category Filters */}
        <div className="mb-10 overflow-x-auto no-scrollbar flex gap-2 pb-2">
          {['ทั้งหมด', 'การดูแลพืช', 'ปุ๋ยและยา', 'ข่าวสาร', 'เทคโนโลยี'].map((label, i) => (
            <button 
              key={label}
              className={`whitespace-nowrap px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest transition-all ${
                i === 0 
                  ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20' 
                  : 'bg-white border border-slate-200 text-slate-600 hover:text-emerald-600 hover:bg-emerald-50'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="lg:grid lg:grid-cols-3 lg:gap-10">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* Featured Article */}
            <section className="relative group cursor-pointer overflow-hidden rounded-[2.5rem] shadow-2xl shadow-emerald-900/10 active:scale-[0.98] transition-all">
              <div className="aspect-[16/9] md:aspect-[21/9]">
                <img
                  alt="Featured Article"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAd4wfhiRfYszksdtn5H_bsbPlEOYZimgd-4eGhKGYqZYf3f93l4v8w-OvnGdKWJucXemjg-gDoZdCRJAmTuVWw4TURKw3GHnqqOIgN754Tf0j0EOQBbRIBiqIS54h066Wfmm0shA8COfIaOOHp9Dpo0pw82cS8tLGfdnSDG0hw7WhlH8geR_hvP1bs-AWhUU4jOIWMMWXn8AmBGZU1x5UPtXiyQHhuJQ1PQt6zqiUN2KlOg58exiftJCVOpNDvmXWi1snVEDoIPkzn"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 w-full p-8">
                <span className="bg-emerald-500 text-white px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest mb-4 inline-block shadow-lg shadow-emerald-500/20">บทความแนะนำ</span>
                <h2 className="text-white text-2xl md:text-3xl font-black leading-tight tracking-tight mb-3">เทคนิคการบริหารจัดการน้ำในสวนทุเรียนช่วงฤดูแล้ง</h2>
                <p className="text-slate-200 text-sm font-medium line-clamp-2 max-w-xl">เรียนรู้วิธีการจัดทำระบบให้น้ำอย่างมีประสิทธิภาพเพื่อผลผลิตที่มีคุณภาพสูงในสภาพอากาศที่แปรปรวน</p>
              </div>
            </section>

            {/* Article List */}
            <section className="space-y-6">
              <div className="flex items-center justify-between px-1">
                <h3 className="text-xs font-black text-slate-600 uppercase tracking-[0.2em]">บทความล่าสุด</h3>
                <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">ล่าสุดก่อน</span>
              </div>

              <div className="space-y-4">
                {[
                  { title: '5 สูตรปุ๋ยหมักชีวภาพที่ช่วยบำรุงหน้าดินอย่างยั่งยืน', category: 'ปุ๋ยและยา', time: '2 ชม. ที่แล้ว', view: '1.2k', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAllyvPN0QERhLYxBkrDSSTfWMJVmMIEQ0cduvG5dt9dupjR0lCysa8IGdIlNnJTAUPjZlu-lKEzv6SIeeMBsHoAFKfEybJKiQpxAYikW9aNbSmzDZwtr3es-KJuxyWN2Is1HRBGLKGGxiVPubHL1JrTBZhvCUySyyhoIOGbMsTj_Cy9NTGkpWXHM8bzQQXE31x1eSwGRi9_wxYkcGzTftY_j4zfU2HYOJXrsB6T5feJLuMXz7Q-9WNK1J9ocp7UHYEsZ6g8VpIu3bB' },
                  { title: 'วิธีการป้องกันและกำจัดเพลี้ยไฟในสวนมังคุดอย่างได้ผล', category: 'การดูแลพืช', time: 'เมื่อวานนี้', view: '850', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRiLfpEwyhnzDIpTIIkM3EkS6bY5-YgUPwxu8fKqgSXNjQgPPNv2V-q_W6wWlg9YQp_a71m_wRDFUyBRQ-X9zeLNvXpO7_0eHy00Z00alKP3MKVhOHLRl04QD8bgkyJNaThnAxCJ6aYj5So-Ed15uDw52qmTeMYEY2QSsTx_1QqEhYTg42ZqOS_5UPPoCMF3eN0BbHSOD8GyRUE-D5J9HDZ56rd6owaFE4b6ML-QN9kGFQAImWrDD4XJV9epW2id0N0uMbbyq8bPX7' },
                  { title: 'เทรนด์ตลาดผลไม้ส่งออกปี 2567 ที่ชาวสวนควรรู้', category: 'ข่าวสาร', time: '2 วันที่แล้ว', view: '2.4k', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnRHg95C2NWwhW29gnhqHpO5tzu6QmDruRpjeYOM8GPM4NWRZSD1NfeWzcvdSuqygbi_sDww2CiGgypiTbjx1_zcqScITNhP_5TvkoCLgUQQi61SaB5pm3Risa1qwhm7cybl1qrUtD3JSuUwSdOtZTF11c_DbQln52-3f7jv8olTYbxDUm25lQfMxGckSYmLboGCveISYDHMmvnNQZG3q5mTcer1mVn7AFnYCcoXT2yxhF1MRu_8thHCjxYVpcDVkYwf0dPaG798Up' }
                ].map((post, idx) => (
                  <div 
                    key={idx} 
                    className="flex gap-5 p-5 rounded-[2rem] bg-white/80 backdrop-blur-xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:scale-[1.01] transition-all cursor-pointer group"
                  >
                    <div className="size-24 rounded-2xl overflow-hidden shrink-0 border border-slate-100 group-hover:shadow-md transition-all">
                      <img alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform" src={post.img} />
                    </div>
                    <div className="flex flex-col justify-between py-1 flex-1 min-w-0">
                      <div>
                        <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest mb-1 block">{post.category}</span>
                        <h4 className="text-base font-black text-slate-800 line-clamp-2 leading-tight tracking-tight group-hover:text-emerald-700 transition-colors">{post.title}</h4>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1.5 text-[10px] font-black text-slate-500 uppercase tracking-widest"><span className="material-symbols-outlined text-[14px]">schedule</span> {post.time}</span>
                        <span className="flex items-center gap-1.5 text-[10px] font-black text-slate-500 uppercase tracking-widest"><span className="material-symbols-outlined text-[14px]">visibility</span> {post.view}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Sidebar - Desktop */}
          <div className="hidden lg:block space-y-10">
            <section>
              <h3 className="text-xs font-black text-slate-600 uppercase tracking-[0.2em] mb-6 px-1">หัวข้อที่น่าสนใจ</h3>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { label: 'เกษตรอินทรีย์', icon: 'eco', bg: 'bg-emerald-500', text: 'text-white' },
                  { label: 'วิเคราะห์กำไร', icon: 'monitoring', bg: 'bg-amber-500', text: 'text-white' },
                  { label: 'ระบบน้ำสมัยใหม่', icon: 'water_drop', bg: 'bg-sky-500', text: 'text-white' },
                  { label: 'พยากรณ์อากาศ', icon: 'sunny', bg: 'bg-indigo-500', text: 'text-white' }
                ].map((item) => (
                  <div 
                    key={item.label}
                    className={`${item.bg} ${item.text} p-6 rounded-[2rem] flex items-center gap-4 cursor-pointer hover:scale-105 transition-all shadow-lg active:scale-95`}
                  >
                    <span className="material-symbols-outlined text-4xl shrink-0">{item.icon}</span>
                    <p className="text-xs font-black uppercase tracking-widest">{item.label}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Trending */}
            <section className="bg-white border border-slate-100 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8">
              <h3 className="text-[10px] font-black text-slate-600 uppercase tracking-[0.2em] mb-6">Trending 🔥</h3>
              <div className="space-y-5">
                {[
                  'วิธีปลูกทุเรียนในพื้นที่จำกัด', 
                  'เทคนิคตัดแต่งกิ่งมังคุด', 
                  'โรคระบาดที่ต้องระวังในฤดูฝน', 
                  'เพิ่มผลผลิตด้วยปุ๋ยชีวภาพ'
                ].map((t, i) => (
                  <div key={t} className="flex items-start gap-4 cursor-pointer group">
                    <span className="text-lg font-black text-slate-300 group-hover:text-emerald-500 transition-colors w-5 shrink-0">{i + 1}</span>
                    <p className="text-xs font-black text-slate-600 uppercase tracking-widest leading-relaxed group-hover:text-slate-900 transition-colors">{t}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Mobile Recommended Topics */}
        <section className="mt-12 mb-8 lg:hidden">
          <h3 className="text-xs font-black text-slate-600 uppercase tracking-[0.2em] mb-6">หัวข้อแนะนำ</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-emerald-500 text-white p-6 rounded-[2rem] flex flex-col justify-between min-h-[160px] shadow-lg shadow-emerald-500/20">
              <span className="material-symbols-outlined text-4xl">eco</span>
              <p className="text-xs font-black uppercase tracking-widest">เกษตรอินทรีย์</p>
            </div>
            <div className="bg-amber-500 text-white p-6 rounded-[2rem] flex flex-col justify-between min-h-[160px] shadow-lg shadow-amber-500/20">
              <span className="material-symbols-outlined text-4xl">monitoring</span>
              <p className="text-xs font-black uppercase tracking-widest">วิเคราะห์กำไร</p>
            </div>
          </div>
        </section>
      </main>

      <BottomNavBar />
    </div>
  );
}
