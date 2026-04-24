"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AddActivity() {
  const router = useRouter();
  const [selectedType, setSelectedType] = useState('รดน้ำ');
  const [showToast, setShowToast] = useState(false);

  const activityTypes = [
    { label: 'รดน้ำ', icon: 'water_drop', color: 'text-sky-500', bg: 'bg-sky-50' },
    { label: 'ใส่ปุ๋ย', icon: 'compost', color: 'text-emerald-500', bg: 'bg-emerald-50' },
    { label: 'พ่นยา', icon: 'pest_control', color: 'text-rose-500', bg: 'bg-rose-50' },
    { label: 'เก็บเกี่ยว', icon: 'agriculture', color: 'text-amber-500', bg: 'bg-amber-50' },
    { label: 'ตัดแต่ง', icon: 'content_cut', color: 'text-violet-500', bg: 'bg-violet-50' },
    { label: 'อื่นๆ', icon: 'more_horiz', color: 'text-slate-500', bg: 'bg-slate-50' }
  ];

  const handleSave = () => {
    setShowToast(true);
    setTimeout(() => {
      router.push('/');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-[#f2f8f5] to-slate-100 pb-32 relative overflow-hidden font-kanit text-slate-800">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-emerald-500/5 to-transparent pointer-events-none"></div>
      <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none"></div>
      
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] animate-in slide-in-from-top-4 fade-in duration-500">
          <div className="bg-white/90 backdrop-blur-xl px-6 py-4 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex items-center gap-4 border border-white">
            <div className="size-10 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <span className="material-symbols-outlined text-white text-[20px]">done</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-800">บันทึกสำเร็จ</span>
              <span className="text-slate-500 text-xs uppercase tracking-widest font-black">บันทึกข้อมูลเรียบร้อย</span>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="sticky top-0 z-30 px-6 h-20 flex items-center justify-between backdrop-blur-xl bg-white/60 border-b border-white/40 shadow-sm">
        <div className="flex items-center gap-4">
          <button
            onClick={() => router.back()}
            className="size-10 rounded-xl bg-white shadow-sm border border-slate-200/60 hover:bg-slate-50 flex items-center justify-center transition-all text-slate-600 active:scale-90"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h1 className="text-xl font-black text-slate-800 tracking-tight">บันทึกงานสวน</h1>
        </div>
        <button 
          onClick={handleSave}
          className="bg-slate-900 text-white font-bold px-6 py-2.5 rounded-xl hover:bg-emerald-800 transition-all active:scale-95 shadow-lg shadow-slate-900/10"
        >
          บันทึก
        </button>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8 space-y-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Column 1: Activity Details */}
          <div className="space-y-8">
            <section className="space-y-4">
              <div className="flex items-center gap-3 px-1">
                <div className="size-8 bg-emerald-500 text-white rounded-xl shadow-lg shadow-emerald-500/20 flex items-center justify-center text-sm font-black">1</div>
                <h2 className="text-lg font-black text-slate-800 uppercase tracking-tight">ข้อมูลพื้นฐาน</h2>
              </div>
              <div className="bg-white/80 backdrop-blur-xl rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-600 uppercase tracking-widest ml-1">แปลงพื้นที่</label>
                  <div className="relative group">
                    <select className="w-full p-4 bg-slate-50/50 border border-slate-200/60 rounded-2xl font-bold text-slate-800 appearance-none focus:bg-white outline-none cursor-pointer shadow-sm transition-all">
                      <option>กรุณาเลือกแปลงปลูก</option>
                      <option>แปลง A1 - ทุเรียนหมอนทอง</option>
                      <option>แปลง A2 - มังคุดเกรดพรีเมียม</option>
                      <option>แปลง B1 - เงาะโรงเรียน</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-600 group-hover:text-emerald-500 transition-colors pointer-events-none">unfold_more</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-600 uppercase tracking-widest ml-1">วันที่ดำเนินการ</label>
                    <input type="date" className="w-full p-4 bg-slate-50/50 border border-slate-200/60 rounded-2xl font-bold text-slate-800 focus:bg-white outline-none shadow-sm transition-all cursor-pointer" defaultValue={new Date().toISOString().split('T')[0]} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-600 uppercase tracking-widest ml-1">เวลา</label>
                    <input type="time" className="w-full p-4 bg-slate-50/50 border border-slate-200/60 rounded-2xl font-bold text-slate-800 focus:bg-white outline-none shadow-sm transition-all cursor-pointer" defaultValue="08:00" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-600 uppercase tracking-widest ml-1">สรุปงาน (สั้นๆ)</label>
                  <input 
                    type="text" 
                    className="w-full p-4 bg-slate-50/50 border border-slate-200/60 rounded-2xl font-bold text-slate-800 focus:bg-white outline-none shadow-sm transition-all"
                    placeholder="เช่น รดน้ำรอบเช้า, ใส่ปุ๋ยบำรุงดอก..."
                  />
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <div className="flex items-center gap-3 px-1">
                <div className="size-8 bg-emerald-500 text-white rounded-xl shadow-lg shadow-emerald-500/20 flex items-center justify-center text-sm font-black">2</div>
                <h2 className="text-lg font-black text-slate-800 uppercase tracking-tight">ประเภทกิจกรรม</h2>
              </div>
              <div className="bg-white/80 backdrop-blur-xl rounded-[2rem] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white">
                <div className="grid grid-cols-3 gap-3">
                  {activityTypes.map((type) => (
                    <button
                      key={type.label}
                      onClick={() => setSelectedType(type.label)}
                      className={`group flex flex-col items-center gap-1 p-2 rounded-2xl transition-all duration-300 active:scale-95 cursor-pointer ${
                        selectedType === type.label
                          ? 'bg-emerald-50/80'
                          : 'hover:bg-slate-50/50'
                      }`}
                    >
                      <div className={`size-16 rounded-2xl flex items-center justify-center transition-all duration-300 border-2 ${
                        selectedType === type.label 
                          ? 'bg-slate-900 border-slate-900 text-white shadow-xl shadow-slate-900/20 scale-105' 
                          : `bg-white border-slate-100 shadow-sm ${type.color}`
                      }`}>
                        <span 
                          className="material-symbols-outlined !text-[28px]" 
                          style={{ fontVariationSettings: selectedType === type.label ? '"FILL" 1' : '"FILL" 0' }}
                        >
                          {type.icon}
                        </span>
                      </div>
                      <span className={`text-[12px] font-black tracking-tight transition-colors ${selectedType === type.label ? 'text-slate-900' : 'text-slate-500'}`}>{type.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Column 2: Documentation */}
          <div className="space-y-8">
            <section className="space-y-4">
              <div className="flex items-center gap-3 px-1">
                <div className="size-8 bg-emerald-500 text-white rounded-xl shadow-lg shadow-emerald-500/20 flex items-center justify-center text-sm font-black">3</div>
                <h2 className="text-lg font-black text-slate-800 uppercase tracking-tight">หลักฐานและบันทึก</h2>
              </div>
              <div className="bg-white/80 backdrop-blur-xl rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-600 uppercase tracking-widest ml-1">รูปภาพหน้างาน</label>
                  <div className="h-48 bg-white border-2 border-dashed border-slate-200 rounded-[1.5rem] flex flex-col items-center justify-center text-slate-600 hover:border-emerald-400 hover:bg-emerald-50 transition-all cursor-pointer group">
                    <span className="material-symbols-outlined text-[48px] group-hover:scale-110 transition-transform">add_a_photo</span>
                    <span className="text-xs font-black mt-2 uppercase tracking-widest">อัปโหลดหรือถ่ายภาพ</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-600 uppercase tracking-widest ml-1">รายละเอียดเพิ่มเติม</label>
                  <textarea 
                    className="w-full h-32 p-4 bg-slate-50/50 border border-slate-200/60 rounded-2xl font-bold text-slate-800 focus:bg-white outline-none shadow-sm transition-all resize-none"
                    placeholder="ระบุสูตรปุ๋ย, ปริมาณยา, หรือหมายเหตุอื่นๆ..."
                  ></textarea>
                </div>
              </div>
            </section>

            {/* Harvest Logic */}
            {selectedType === 'เก็บเกี่ยว' && (
              <section className="space-y-4 animate-in slide-in-from-right-4 duration-500">
                <div className="flex items-center gap-3 px-1">
                  <div className="size-8 bg-amber-500 text-white rounded-xl shadow-lg shadow-amber-500/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[18px]">scale</span>
                  </div>
                  <h2 className="text-lg font-black text-slate-800 uppercase tracking-tight">ข้อมูลผลผลิต</h2>
                </div>
                <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-[2rem] p-8 shadow-xl shadow-orange-500/20 grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-white/70 uppercase tracking-widest">น้ำหนัก (กก.)</label>
                    <input type="number" className="w-full p-4 bg-white/20 border border-white/20 rounded-2xl font-black text-white text-3xl outline-none placeholder:text-white/40" placeholder="0" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-white/70 uppercase tracking-widest">ราคา (บาท/กก.)</label>
                    <input type="number" className="w-full p-4 bg-white/20 border border-white/20 rounded-2xl font-black text-white text-3xl outline-none placeholder:text-white/40" placeholder="0" />
                  </div>
                  <div className="col-span-2 pt-4 border-t border-white/10 flex justify-between items-end">
                    <span className="text-xs font-black text-white/60 uppercase tracking-[0.2em]">รายได้โดยประมาณ</span>
                    <span className="text-4xl font-black text-white tracking-tighter leading-none">฿0.00</span>
                  </div>
                </div>
              </section>
            )}
          </div>
        </div>

        {/* Bottom Action */}
        <div className="pt-10 pb-12 flex flex-col items-center gap-4 relative z-10">
          <button
            onClick={handleSave}
            className="w-full max-w-xl py-6 rounded-[2rem] bg-slate-900 text-white font-black text-2xl shadow-2xl shadow-slate-900/30 hover:bg-emerald-800 transition-all active:scale-95 flex items-center justify-center gap-4 group cursor-pointer"
          >
            <span className="material-symbols-outlined text-3xl group-hover:rotate-12 transition-transform">verified</span>
            บันทึกงานเข้าสู่ระบบ
          </button>
          <p className="text-slate-600 text-xs font-black uppercase tracking-[0.3em]">Smart Orchard Manager v2.0</p>
        </div>
      </main>
    </div>
  );
}
