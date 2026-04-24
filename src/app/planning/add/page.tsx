"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AddPlanning() {
  const router = useRouter();
  const [selectedType, setSelectedType] = useState('รดน้ำ');
  const [repeatMode, setRepeatMode] = useState('none');
  const [showToast, setShowToast] = useState(false);

  const activityTypes = [
    { label: 'รดน้ำ', icon: 'water_drop', color: 'text-sky-500' },
    { label: 'ใส่ปุ๋ย', icon: 'compost', color: 'text-emerald-500' },
    { label: 'พ่นยา', icon: 'pest_control', color: 'text-rose-500' },
    { label: 'เก็บเกี่ยว', icon: 'agriculture', color: 'text-amber-500' },
    { label: 'ตัดแต่ง', icon: 'content_cut', color: 'text-violet-500' },
    { label: 'อื่นๆ', icon: 'more_horiz', color: 'text-slate-500' }
  ];

  const repeatOptions = [
    { id: 'none', label: 'ไม่ทำซ้ำ' },
    { id: 'daily', label: 'ทุกวัน' },
    { id: 'alternate', label: 'วันเว้นวัน' },
    { id: '7days', label: 'ทุก 7 วัน' },
    { id: '10days', label: 'ทุก 10 วัน' },
    { id: '15days', label: 'ทุก 15 วัน' },
    { id: 'monthly', label: 'ทุก 1 เดือน' },
  ];

  const handleSave = () => {
    setShowToast(true);
    setTimeout(() => {
      router.push('/');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-[#f2f8f5] to-slate-100 pb-32 relative overflow-hidden font-kanit">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-emerald-500/5 to-transparent pointer-events-none"></div>
      <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[20%] left-[-10%] w-80 h-80 bg-teal-400/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] animate-in slide-in-from-top-4 fade-in duration-500">
          <div className="bg-white/90 backdrop-blur-xl px-6 py-4 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex items-center gap-4 border border-white">
            <div className="size-10 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <span className="material-symbols-outlined text-white text-[20px]">event_available</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-800">สร้างแผนงานแล้ว</span>
              <span className="text-slate-500 text-xs">แผนงานถูกเปิดใช้งานในระบบแล้ว</span>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="sticky top-0 z-30 px-6 h-20 flex items-center justify-between backdrop-blur-xl bg-white/60 border-b border-white/40 shadow-[0_4px_30px_rgba(0,0,0,0.03)]">
        <div className="flex items-center gap-4">
          <button
            onClick={() => router.back()}
            className="size-10 rounded-xl bg-white shadow-sm border border-slate-200/60 hover:bg-slate-50 flex items-center justify-center transition-all text-slate-600 cursor-pointer"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h1 className="text-xl font-black text-slate-800 tracking-tight">วางแผนงานสวน</h1>
        </div>
        <button
          onClick={handleSave}
          className="bg-slate-900 text-white font-bold px-6 py-2.5 rounded-xl hover:bg-emerald-800 transition-all active:scale-95 shadow-lg shadow-slate-900/10"
        >
          บันทึกแผน
        </button>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8 space-y-8 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

          {/* 1. Activity Type */}
          <section className="space-y-4 flex flex-col">
            <div className="flex items-center gap-3 px-1">
              <div className="size-8 bg-emerald-500 text-white rounded-xl shadow-lg shadow-emerald-500/20 flex items-center justify-center text-sm font-black">1</div>
              <h2 className="text-lg font-bold text-slate-800">ประเภทกิจกรรม</h2>
            </div>
            <div className="bg-white/80 backdrop-blur-xl rounded-[2rem] p-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white flex-grow">
              <div className="grid grid-cols-3 gap-3">
                {activityTypes.map((type) => (
                  <button
                    key={type.label}
                    onClick={() => setSelectedType(type.label)}
                    className={`group flex flex-col items-center gap-1 p-2 rounded-2xl transition-all duration-300 active:scale-95 ${selectedType === type.label
                      ? 'bg-emerald-50/80 ring-2 ring-emerald-500/10'
                      : 'hover:bg-slate-50/50'
                      }`}
                  >
                    <div className={`size-20 rounded-[1.5rem] flex items-center justify-center transition-all duration-300 border-2 ${selectedType === type.label
                      ? 'bg-emerald-500 border-emerald-200 text-white shadow-xl shadow-emerald-500/30 scale-105'
                      : `bg-white border-slate-100 shadow-sm ${type.color}`
                      }`}>
                      <span 
                        className="material-symbols-outlined !text-[36px]" 
                        style={{ fontVariationSettings: selectedType === type.label ? '"FILL" 1' : '"FILL" 0' }}
                      >
                        {type.icon}
                      </span>
                    </div>
                    <span className={`text-[14px] font-black tracking-tight transition-colors ${selectedType === type.label ? 'text-emerald-900' : 'text-slate-600 group-hover:text-slate-900'}`}>{type.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* 2. Recurring Settings */}
          <section className="space-y-4 flex flex-col">
            <div className="flex items-center gap-3 px-1">
              <div className="size-8 bg-emerald-500 text-white rounded-xl shadow-lg shadow-emerald-500/20 flex items-center justify-center text-sm font-black">2</div>
              <h2 className="text-lg font-bold text-slate-800">การตั้งค่าการทำซ้ำ</h2>
            </div>
            <div className="bg-white/80 backdrop-blur-xl rounded-[2rem] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white flex-grow flex flex-col justify-center">
              <div className="grid grid-cols-3 gap-3">
                {repeatOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setRepeatMode(opt.id)}
                    className={`flex items-center justify-center p-4 rounded-2xl transition-all duration-300 active:scale-95 ${repeatMode === opt.id
                      ? 'bg-slate-900 text-white shadow-xl shadow-slate-900/20 scale-105 font-black'
                      : 'bg-slate-50/50 hover:bg-white text-slate-600 border border-slate-200/60 font-bold'
                      }`}
                  >
                    <span className="text-[12px] text-center leading-tight">{opt.label}</span>
                  </button>
                ))}

                {repeatMode === 'custom' ? (
                  <div className="flex items-center gap-1 bg-emerald-50/50 border border-emerald-100 p-1.5 rounded-2xl shadow-inner animate-in fade-in zoom-in-95">
                    <input
                      type="number"
                      className="w-full bg-white rounded-xl py-1.5 font-bold text-center text-emerald-800 outline-none shadow-sm"
                      defaultValue="10"
                      autoFocus
                    />
                    <span className="text-[11px] font-bold text-emerald-700 pr-2">วัน</span>
                  </div>
                ) : (
                  <button
                    onClick={() => setRepeatMode('custom')}
                    className="flex items-center justify-center p-4 rounded-2xl bg-slate-50/50 hover:bg-white text-slate-600 border border-slate-200/60 font-bold transition-all duration-300 active:scale-95"
                  >
                    <span className="text-[12px]">กำหนดเอง</span>
                  </button>
                )}
              </div>
            </div>
          </section>

        </div>

        {/* 3. Planning Info */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 px-1">
            <div className="size-8 bg-emerald-500 text-white rounded-xl shadow-lg shadow-emerald-500/20 flex items-center justify-center text-sm font-black">3</div>
            <h2 className="text-lg font-bold text-slate-800">ข้อมูลแผนงาน</h2>
          </div>
          <div className="bg-white/80 backdrop-blur-xl rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-600 uppercase tracking-widest ml-1">หัวข้อ/ชื่องาน</label>
              <input
                type="text"
                className="w-full p-4 bg-slate-50/50 border border-slate-200/60 rounded-2xl font-bold text-slate-800 text-xl focus:bg-white outline-none shadow-sm transition-all"
                placeholder="เช่น ใส่ปุ๋ยรอบประจำเดือน..."
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-600 uppercase tracking-widest ml-1">แปลงที่ดำเนินการ</label>
                <div className="relative group">
                  <select className="w-full p-4 bg-slate-50/50 border border-slate-200/60 rounded-2xl font-bold text-slate-800 appearance-none focus:bg-white outline-none cursor-pointer shadow-sm transition-all">
                    <option>เลือกแปลงพื้นที่</option>
                    <option>แปลง A1 - ทุเรียน</option>
                    <option>แปลง A2 - มังคุด</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-600 group-hover:text-emerald-500 transition-colors pointer-events-none">unfold_more</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-600 uppercase tracking-widest ml-1">วันที่เริ่ม</label>
                  <input type="date" className="w-full p-4 bg-slate-50/50 border border-slate-200/60 rounded-2xl font-bold text-slate-800 focus:bg-white outline-none shadow-sm transition-all" defaultValue={new Date().toISOString().split('T')[0]} />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-600 uppercase tracking-widest ml-1">เวลา</label>
                  <input type="time" className="w-full p-4 bg-slate-50/50 border border-slate-200/60 rounded-2xl font-bold text-slate-800 focus:bg-white outline-none shadow-sm transition-all" defaultValue="08:00" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Details */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 px-1">
            <div className="size-8 bg-emerald-500 text-white rounded-xl shadow-lg shadow-emerald-500/20 flex items-center justify-center text-sm font-black">4</div>
            <h2 className="text-lg font-bold text-slate-800">รายละเอียดเพิ่มเติม</h2>
          </div>
          <div className="bg-white/80 backdrop-blur-xl rounded-[2rem] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white">
            <textarea
              className="w-full p-5 bg-white border border-slate-200 rounded-2xl font-bold text-slate-800 focus:bg-white outline-none min-h-[160px] resize-none placeholder:text-slate-500 text-lg leading-relaxed shadow-sm transition-all"
              placeholder="ระบุสูตรปุ๋ย, จำนวนคน, หรือหมายเหตุสำหรับคนงาน..."
            ></textarea>
          </div>
        </section>

        {/* Bottom Action */}
        <div className="pt-10 pb-12 flex justify-center relative z-10">
          <button
            onClick={handleSave}
            className="w-full max-w-xl py-6 rounded-[2rem] bg-slate-900 text-white font-black text-2xl shadow-2xl shadow-slate-900/20 hover:bg-emerald-800 transition-all active:scale-95 flex items-center justify-center gap-4 group cursor-pointer"
          >
            <span className="material-symbols-outlined text-3xl group-hover:rotate-12 transition-transform">task_alt</span>
            สร้างแผนงานสวน
          </button>
        </div>
      </main>
    </div>
  );
}
