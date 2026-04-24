"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BottomNavBar } from '@/components/layout/BottomNavBar';

const ACTIVITY_TYPES = [
  { value: 'water', label: 'รดน้ำ', icon: 'water_drop', color: 'text-sky-600', bg: 'bg-sky-50', checkedBg: 'bg-sky-100 border-sky-500 text-sky-700' },
  { value: 'fertilizer', label: 'ใส่ปุ๋ย', icon: 'compost', color: 'text-emerald-600', bg: 'bg-emerald-50', checkedBg: 'bg-emerald-100 border-emerald-500 text-emerald-700' },
  { value: 'spray', label: 'พ่นยา', icon: 'pest_control', color: 'text-red-600', bg: 'bg-red-50', checkedBg: 'bg-red-100 border-red-500 text-red-700' },
  { value: 'prune', label: 'ตัดแต่ง', icon: 'content_cut', color: 'text-amber-600', bg: 'bg-amber-50', checkedBg: 'bg-amber-100 border-amber-500 text-amber-700' },
  { value: 'harvest', label: 'เก็บเกี่ยว', icon: 'agriculture', color: 'text-orange-600', bg: 'bg-orange-50', checkedBg: 'bg-orange-100 border-orange-500 text-orange-700' },
  { value: 'inspect', label: 'ตรวจสอบ', icon: 'search', color: 'text-violet-600', bg: 'bg-violet-50', checkedBg: 'bg-violet-100 border-violet-500 text-violet-700' },
  { value: 'soil', label: 'ปรับดิน', icon: 'landscape', color: 'text-stone-600', bg: 'bg-stone-50', checkedBg: 'bg-stone-100 border-stone-500 text-stone-700' },
  { value: 'other', label: 'อื่นๆ', icon: 'more_horiz', color: 'text-zinc-600', bg: 'bg-zinc-100', checkedBg: 'bg-zinc-200 border-zinc-500 text-zinc-700' },
];

const PLOTS = [
  { value: 'A1', label: 'แปลง A1 — ทุเรียนหมอนทอง' },
  { value: 'A2', label: 'แปลง A2 — ทุเรียนก้านยาว' },
  { value: 'B1', label: 'แปลง B1 — มังคุด' },
  { value: 'B2', label: 'แปลง B2 — เงาะโรงเรียน' },
  { value: 'C1', label: 'แปลง C1 — มะม่วงน้ำดอกไม้' },
];

const MOCK_LOGS = [
  { id: 1, type: 'water', date: '2026-04-24', time: '07:30', plot: 'A1', desc: 'รดน้ำเช้าตามรอบปกติ', workers: 1, cost: 0 },
  { id: 2, type: 'fertilizer', date: '2026-04-23', time: '16:00', plot: 'B1', desc: 'ใส่ปุ๋ยคอกบำรุงต้น', workers: 2, cost: 500 },
  { id: 3, type: 'spray', date: '2026-04-22', time: '06:00', plot: 'A2', desc: 'พ่นยาฮอร์โมนขั้วเหนียว', workers: 1, cost: 350 },
  { id: 4, type: 'prune', date: '2026-04-20', time: '08:30', plot: 'C1', desc: 'ตัดแต่งกิ่งแขนง', workers: 3, cost: 900 },
];

export default function ActivityLog() {
  const router = useRouter();
  const [showForm, setShowForm] = useState(false);
  const [activityType, setActivityType] = useState('water');
  const [saved, setSaved] = useState(false);
  const [saving, setSaving] = useState(false);

  const selected = ACTIVITY_TYPES.find((a) => a.value === activityType)!;

  const handleSave = () => {
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      setSaved(true);
      setTimeout(() => {
        setSaved(false);
        setShowForm(false);
      }, 1200);
    }, 900);
  };

  if (!showForm) {
    return (
      <>
        {/* Desktop Page Header */}
        <header className="hidden lg:flex items-center justify-between px-8 py-6 border-b border-zinc-100 bg-white/80 backdrop-blur-md sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <div>
              <h1 className="text-2xl font-bold text-[#1a1c1b] tracking-tight">สมุดบันทึกสวน</h1>
              <p className="text-sm text-slate-500 font-medium mt-0.5">ประวัติการทำงานในสวนทั้งหมด</p>
            </div>
          </div>
          <button
            onClick={() => setShowForm(true)}
            className="px-5 py-2.5 text-sm font-semibold rounded-xl transition-all flex items-center gap-2 bg-[#154212] text-white hover:bg-[#2d5a27] shadow-sm"
          >
            <span className="material-symbols-outlined text-[18px]">add</span>
            บันทึกกิจกรรมใหม่
          </button>
        </header>

        {/* Mobile TopAppBar */}
        <header className="lg:hidden flex items-center justify-between px-4 py-3 bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-zinc-100 shadow-sm h-16">
          <div className="w-10" />
          <h1 className="text-[20px] font-semibold font-kanit text-[#1a1c1b]">สมุดบันทึกสวน</h1>
          <div className="w-10" />
        </header>

        <main className="lg:px-8 lg:py-6 lg:max-w-5xl lg:mx-auto px-4 py-6 max-w-2xl mx-auto pb-36">
          <div className="space-y-6">
            {/* Filter / Search Bar */}
            <div className="flex gap-2">
              <div className="relative flex-1">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400">search</span>
                <input type="text" placeholder="ค้นหากิจกรรม, แปลง..." className="w-full bg-white border border-zinc-200 rounded-xl py-2.5 pl-10 pr-4 text-sm font-kanit focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              </div>
              <button className="px-4 py-2.5 bg-white border border-zinc-200 rounded-xl text-zinc-600 flex items-center gap-2 text-sm font-kanit hover:bg-zinc-50">
                <span className="material-symbols-outlined text-[18px]">filter_list</span>
                ตัวกรอง
              </button>
            </div>

            {/* Activities List */}
            <div className="space-y-3">
              {MOCK_LOGS.map(log => {
                const typeInfo = ACTIVITY_TYPES.find(t => t.value === log.type) || ACTIVITY_TYPES[0];
                return (
                  <div key={log.id} className="bg-white p-4 rounded-2xl border border-zinc-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] flex items-start gap-4 hover:shadow-md transition-shadow cursor-pointer">
                    <div className={`w-12 h-12 rounded-[16px] flex items-center justify-center shrink-0 ${typeInfo.bg} ${typeInfo.color}`}>
                      <span className="material-symbols-outlined text-[24px]">{typeInfo.icon}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-0.5">
                        <h3 className="text-sm font-bold font-kanit text-zinc-800 truncate">{typeInfo.label} — {PLOTS.find(p => p.value === log.plot)?.label.split(' — ')[0] || log.plot}</h3>
                        <span className="text-xs font-kanit text-zinc-400 shrink-0">{log.date}</span>
                      </div>
                      <p className="text-xs font-kanit text-zinc-500 mb-2.5 truncate">{log.desc}</p>
                      <div className="flex items-center gap-3">
                        <span className="text-[11px] font-semibold font-kanit text-zinc-600 bg-zinc-100 px-2.5 py-0.5 rounded-md flex items-center gap-1">
                          <span className="material-symbols-outlined text-[14px]">schedule</span> {log.time}
                        </span>
                        <span className="text-[11px] font-semibold font-kanit text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md flex items-center gap-1">
                          <span className="material-symbols-outlined text-[14px]">payments</span> ฿{log.cost}
                        </span>
                        <span className="text-[11px] font-semibold font-kanit text-orange-700 bg-orange-50 px-2.5 py-0.5 rounded-md flex items-center gap-1">
                          <span className="material-symbols-outlined text-[14px]">group</span> {log.workers} คน
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </main>

        {/* FAB for Mobile */}
        <button 
          onClick={() => setShowForm(true)} 
          className="fixed bottom-24 right-6 lg:hidden w-14 h-14 bg-[#154212] text-white rounded-[20px] shadow-[0_8px_20px_rgba(21,66,18,0.3)] flex items-center justify-center active:scale-90 transition-transform z-40 hover:bg-[#2d5a27]"
        >
          <span className="material-symbols-outlined text-[28px]">add</span>
        </button>

        <BottomNavBar />
      </>
    );
  }

  return (
    <>
      {/* Desktop Page Header */}
      <header className="hidden lg:flex items-center justify-between px-8 py-6 border-b border-zinc-100 bg-white/80 backdrop-blur-md sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <button onClick={() => setShowForm(false)} className="p-2 rounded-xl hover:bg-zinc-100 transition-colors text-zinc-500">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <div>
            <h1 className="text-2xl font-bold text-[#1a1c1b] tracking-tight">บันทึกกิจกรรมใหม่</h1>
            <p className="text-sm text-slate-500 font-medium mt-0.5">บันทึกงานที่ทำในสวนวันนี้</p>
          </div>
        </div>
        <button
          id="desktop-save-btn"
          onClick={handleSave}
          disabled={saving || saved}
          className={`px-5 py-2.5 text-sm font-semibold rounded-xl transition-all flex items-center gap-2 ${
            saved
              ? 'bg-emerald-100 text-emerald-700 border border-emerald-200'
              : 'bg-[#154212] text-white hover:bg-[#2d5a27] shadow-sm'
          }`}
        >
          <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: '"FILL" 1' }}>
            {saved ? 'check_circle' : 'save'}
          </span>
          {saved ? 'บันทึกแล้ว!' : saving ? 'กำลังบันทึก...' : 'บันทึกข้อมูล'}
        </button>
      </header>

      {/* Mobile TopAppBar */}
      <header className="lg:hidden flex items-center justify-between px-4 py-3 bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-zinc-100 shadow-sm h-16">
        <button onClick={() => setShowForm(false)} className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#eeeeeb] transition-colors">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="text-[20px] font-semibold font-kanit text-[#1a1c1b]">บันทึกกิจกรรมใหม่</h1>
        <div className="w-10" />
      </header>

      <main className="lg:px-8 lg:py-6 lg:max-w-5xl lg:mx-auto px-6 py-6 max-w-2xl mx-auto pb-36">

        {/* Success toast */}
        {saved && (
          <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-emerald-600 text-white px-6 py-3 rounded-2xl shadow-xl flex items-center gap-2 text-sm font-semibold animate-bounce">
            <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span>
            บันทึกสำเร็จ! กำลังพาไปหน้าสรุป...
          </div>
        )}

        <form className="lg:grid lg:grid-cols-2 lg:gap-8 space-y-6 lg:space-y-0" onSubmit={(e) => e.preventDefault()}>

          {/* ===== LEFT COLUMN ===== */}
          <div className="space-y-6">

            {/* Activity Type Selector */}
            <section className="bg-white rounded-2xl shadow-sm border border-[#eeeeeb] overflow-hidden">
              <div className="px-6 py-4 bg-[#f9f9f6] border-b border-[#eeeeeb] flex items-center gap-2">
                <span className={`material-symbols-outlined ${selected.color}`} style={{ fontVariationSettings: '"FILL" 1' }}>
                  {selected.icon}
                </span>
                <h2 className="text-base font-semibold font-kanit text-[#1a1c1b]">ประเภทกิจกรรม</h2>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-4 gap-3">
                  {ACTIVITY_TYPES.map((a) => (
                    <label key={a.value} className="cursor-pointer flex flex-col items-center gap-1.5">
                      <input
                        className="sr-only peer"
                        name="activity_type"
                        type="radio"
                        value={a.value}
                        checked={activityType === a.value}
                        onChange={() => setActivityType(a.value)}
                      />
                      <div className={`w-full aspect-square rounded-xl flex items-center justify-center border transition-all peer-checked:scale-95 ${
                        activityType === a.value
                          ? `${a.checkedBg} border-2`
                          : `border-[#c2c9bb] ${a.bg} ${a.color} hover:brightness-95`
                      }`}>
                        <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: activityType === a.value ? '"FILL" 1' : '"FILL" 0' }}>
                          {a.icon}
                        </span>
                      </div>
                      <span className={`text-[11px] font-semibold font-kanit text-center ${activityType === a.value ? 'text-[#154212]' : 'text-[#42493e]'}`}>
                        {a.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </section>

            {/* Plot & Date/Time */}
            <section className="bg-white rounded-2xl shadow-sm border border-[#eeeeeb] overflow-hidden">
              <div className="px-6 py-4 bg-[#f9f9f6] border-b border-[#eeeeeb] flex items-center gap-2">
                <span className="material-symbols-outlined text-[#154212]">location_on</span>
                <h2 className="text-base font-semibold font-kanit text-[#1a1c1b]">สถานที่และเวลา</h2>
              </div>
              <div className="p-5 space-y-4">
                <div>
                  <label className="block text-sm font-medium font-kanit text-[#42493e] mb-1.5" htmlFor="plot-select">แปลงที่ทำกิจกรรม *</label>
                  <div className="relative">
                    <select
                      className="w-full appearance-none bg-white border border-[#c2c9bb] text-[#1a1c1b] text-base font-kanit rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#154212] transition-shadow"
                      id="plot-select"
                    >
                      {PLOTS.map((p) => (
                        <option key={p.value} value={p.value}>{p.label}</option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#42493e]">
                      <span className="material-symbols-outlined">expand_more</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium font-kanit text-[#42493e] mb-1.5" htmlFor="activity-date">วันที่ *</label>
                    <input
                      className="w-full bg-white border border-[#c2c9bb] text-[#1a1c1b] text-base font-kanit rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#154212] transition-shadow"
                      defaultValue={new Date().toISOString().split('T')[0]}
                      id="activity-date"
                      type="date"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium font-kanit text-[#42493e] mb-1.5" htmlFor="activity-time">เวลา</label>
                    <input
                      className="w-full bg-white border border-[#c2c9bb] text-[#1a1c1b] text-base font-kanit rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#154212] transition-shadow"
                      defaultValue={`${new Date().getHours().toString().padStart(2,'0')}:${new Date().getMinutes().toString().padStart(2,'0')}`}
                      id="activity-time"
                      type="time"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* ===== RIGHT COLUMN ===== */}
          <div className="space-y-6">

            {/* Notes */}
            <section className="bg-white rounded-2xl shadow-sm border border-[#eeeeeb] overflow-hidden">
              <div className="px-6 py-4 bg-[#f9f9f6] border-b border-[#eeeeeb] flex items-center gap-2">
                <span className="material-symbols-outlined text-[#154212]">notes</span>
                <h2 className="text-base font-semibold font-kanit text-[#1a1c1b]">รายละเอียดเพิ่มเติม</h2>
              </div>
              <div className="p-5 space-y-4">
                <div>
                  <label className="block text-sm font-medium font-kanit text-[#42493e] mb-1.5" htmlFor="activity-notes">บันทึกการทำงาน</label>
                  <textarea
                    className="w-full bg-white border border-[#c2c9bb] text-[#1a1c1b] text-base font-kanit rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#154212] transition-shadow resize-none"
                    id="activity-notes"
                    placeholder={`ระบุรายละเอียดเพิ่มเติม เช่น ปริมาณ${activityType === 'water' ? 'น้ำ' : activityType === 'fertilizer' ? 'ปุ๋ย' : activityType === 'spray' ? 'ยา' : ''} สภาพอากาศ ปัญหาที่พบ...`}
                    rows={4}
                  />
                </div>

                {/* Workers */}
                <div>
                  <label className="block text-sm font-medium font-kanit text-[#42493e] mb-1.5" htmlFor="workers">จำนวนแรงงาน (คน)</label>
                  <div className="flex items-center gap-3">
                    <input
                      className="w-full bg-white border border-[#c2c9bb] text-[#1a1c1b] text-base font-kanit rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#154212] transition-shadow"
                      defaultValue={1}
                      id="workers"
                      min={1}
                      max={50}
                      type="number"
                    />
                    <span className="text-sm font-kanit text-[#42493e] shrink-0">คน</span>
                  </div>
                </div>

                {/* Cost */}
                <div>
                  <label className="block text-sm font-medium font-kanit text-[#42493e] mb-1.5" htmlFor="cost">ค่าใช้จ่าย (บาท)</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#42493e] font-kanit">฿</span>
                    <input
                      className="w-full bg-white border border-[#c2c9bb] text-[#1a1c1b] text-base font-kanit rounded-xl pl-8 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#154212] transition-shadow"
                      id="cost"
                      min={0}
                      placeholder="0"
                      step={50}
                      type="number"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Upload Image */}
            <section className="bg-white rounded-2xl shadow-sm border border-[#eeeeeb] overflow-hidden">
              <div className="px-6 py-4 bg-[#f9f9f6] border-b border-[#eeeeeb] flex items-center gap-2">
                <span className="material-symbols-outlined text-[#154212]">add_a_photo</span>
                <h2 className="text-base font-semibold font-kanit text-[#1a1c1b]">รูปภาพหลักฐาน</h2>
              </div>
              <div className="p-5">
                <div className="border-2 border-dashed border-[#c2c9bb] rounded-xl p-6 flex flex-col items-center justify-center gap-3 hover:bg-[#f4f4f1] transition-colors cursor-pointer text-center">
                  <div className="w-14 h-14 rounded-full bg-[#eeeeeb] flex items-center justify-center text-[#154212]">
                    <span className="material-symbols-outlined text-3xl">add_photo_alternate</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold font-kanit text-[#1a1c1b]">แตะเพื่อถ่ายรูป หรือเลือกจากแกลเลอรี</p>
                    <p className="text-xs font-kanit text-[#72796e] mt-0.5">JPG, PNG — ไม่เกิน 5MB</p>
                  </div>
                </div>

                {/* Sample uploaded image */}
                <div className="grid grid-cols-3 gap-2 mt-3">
                  <div className="relative aspect-square rounded-lg overflow-hidden border border-[#eeeeeb]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      alt="กิจกรรมรดน้ำ"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDT7FNr-CktXeDUhzYhYyifQIFr0TIP4FMPaKsFRmKyUvOUbgO4Kxm9szmVCoixlipKmqurjyAwSXiMZHFdDDu5Nx_RR13uQ1fgOfQJLloJRq5BLpfvjSqotqrJ6RAVvQ5agHCQqHA_pjbSa57Tt1w_hxHSQ7MOAJtrtuAgIEYkbjTSV0RoOIWCyWF0au11x9_rpOn0QsWab95E-25ZlG-Y2uxjPIaILkwCh_R5TSk52goAsRTYPTL-QhejWyo6r73I--GHH1Fs8fBG"
                    />
                    <button
                      aria-label="ลบรูปภาพ"
                      className="absolute top-1 right-1 w-6 h-6 bg-white/80 rounded-full flex items-center justify-center text-red-600 backdrop-blur-sm shadow-sm hover:bg-red-50 transition-colors"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[14px]">close</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Submit — desktop */}
            <div className="hidden lg:block">
              <button
                id="desktop-form-save-btn"
                onClick={handleSave}
                disabled={saving || saved}
                type="button"
                className={`w-full py-4 rounded-2xl text-lg font-semibold font-kanit flex items-center justify-center gap-2 transition-all shadow-sm ${
                  saved
                    ? 'bg-emerald-100 text-emerald-700'
                    : 'bg-[#154212] hover:bg-[#2d5a27] text-white active:scale-[0.98]'
                }`}
              >
                <span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: '"FILL" 1' }}>
                  {saved ? 'check_circle' : 'save'}
                </span>
                {saved ? 'บันทึกสำเร็จ! 🎉' : saving ? 'กำลังบันทึก...' : 'บันทึกข้อมูลกิจกรรม'}
              </button>
            </div>
          </div>
        </form>
      </main>

      {/* Mobile Submit Button */}
      <div className="lg:hidden fixed bottom-20 left-0 right-0 px-6 z-40">
        <button
          id="mobile-save-btn"
          onClick={handleSave}
          disabled={saving || saved}
          type="button"
          className={`w-full py-4 rounded-2xl text-lg font-semibold font-kanit flex items-center justify-center gap-2 transition-all shadow-lg ${
            saved
              ? 'bg-emerald-100 text-emerald-700'
              : 'bg-[#154212] hover:bg-[#2d5a27] text-white active:scale-[0.98]'
          }`}
        >
          <span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: '"FILL" 1' }}>
            {saved ? 'check_circle' : 'save'}
          </span>
          {saved ? 'บันทึกสำเร็จ! 🎉' : saving ? 'กำลังบันทึก...' : 'บันทึกข้อมูลกิจกรรม'}
        </button>
      </div>

      <BottomNavBar />
    </>
  );
}
