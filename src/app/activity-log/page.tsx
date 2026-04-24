import React from 'react';
import Link from 'next/link';
import { BottomNavBar } from '@/components/layout/BottomNavBar';
import Image from 'next/image';

export default function ActivityLog() {
  return (
    <>
      <main className="max-w-2xl mx-auto px-6 py-8 pb-32">
        <div className="mb-6 flex items-center gap-2">
          <Link href="/planning" className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#eeeeeb] transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
          <h1 className="text-[24px] font-semibold font-kanit text-[#1a1c1b]">บันทึกกิจกรรม</h1>
        </div>

        <form className="space-y-6">
          {/* Activity Type */}
          <div className="bg-[#ffffff] p-6 rounded-2xl shadow-[0_4px_24px_rgba(45,90,39,0.04)] border border-[#eeeeeb] flex flex-col gap-4">
            <h2 className="text-sm font-medium font-kanit text-[#42493e]">หัวข้อกิจกรรม</h2>
            <div className="grid grid-cols-4 gap-2">
              <label className="cursor-pointer group flex flex-col items-center gap-1">
                <input className="peer sr-only" name="activity_type" type="radio" value="water" defaultChecked />
                <div className="w-full aspect-square rounded-xl flex items-center justify-center border border-[#c2c9bb] bg-[#ffffff] peer-checked:border-[#154212] peer-checked:bg-[#2d5a27]/20 peer-checked:text-[#154212] text-[#42493e] transition-all group-hover:bg-[#f4f4f1]">
                  <span className="material-symbols-outlined text-[32px]">water_drop</span>
                </div>
                <span className="text-xs font-semibold font-kanit text-[#1a1c1b] peer-checked:text-[#154212] text-center">รดน้ำ</span>
              </label>

              <label className="cursor-pointer group flex flex-col items-center gap-1">
                <input className="peer sr-only" name="activity_type" type="radio" value="fertilizer" />
                <div className="w-full aspect-square rounded-xl flex items-center justify-center border border-[#c2c9bb] bg-[#ffffff] peer-checked:border-[#154212] peer-checked:bg-[#2d5a27]/20 peer-checked:text-[#154212] text-[#42493e] transition-all group-hover:bg-[#f4f4f1]">
                  <span className="material-symbols-outlined text-[32px]">compost</span>
                </div>
                <span className="text-xs font-semibold font-kanit text-[#1a1c1b] peer-checked:text-[#154212] text-center">ใส่ปุ๋ย</span>
              </label>

              <label className="cursor-pointer group flex flex-col items-center gap-1">
                <input className="peer sr-only" name="activity_type" type="radio" value="spray" />
                <div className="w-full aspect-square rounded-xl flex items-center justify-center border border-[#c2c9bb] bg-[#ffffff] peer-checked:border-[#154212] peer-checked:bg-[#2d5a27]/20 peer-checked:text-[#154212] text-[#42493e] transition-all group-hover:bg-[#f4f4f1]">
                  <span className="material-symbols-outlined text-[32px]">pest_control</span>
                </div>
                <span className="text-xs font-semibold font-kanit text-[#1a1c1b] peer-checked:text-[#154212] text-center">พ่นยา</span>
              </label>

              <label className="cursor-pointer group flex flex-col items-center gap-1">
                <input className="peer sr-only" name="activity_type" type="radio" value="other" />
                <div className="w-full aspect-square rounded-xl flex items-center justify-center border border-[#c2c9bb] bg-[#ffffff] peer-checked:border-[#154212] peer-checked:bg-[#2d5a27]/20 peer-checked:text-[#154212] text-[#42493e] transition-all group-hover:bg-[#f4f4f1]">
                  <span className="material-symbols-outlined text-[32px]">more_horiz</span>
                </div>
                <span className="text-xs font-semibold font-kanit text-[#1a1c1b] peer-checked:text-[#154212] text-center">อื่นๆ</span>
              </label>
            </div>
            
            {/* Custom Input */}
            <div className="hidden" id="other-activity-input">
              <label className="text-sm font-medium font-kanit text-[#42493e] sr-only" htmlFor="custom-activity">ระบุกิจกรรมอื่นๆ</label>
              <input 
                className="w-full bg-[#ffffff] border border-[#c2c9bb] text-[#1a1c1b] text-base font-kanit rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#154212] focus:border-transparent transition-shadow mt-2" 
                id="custom-activity" 
                placeholder="ระบุกิจกรรมที่ทำ..." 
                type="text"
              />
            </div>
          </div>

          {/* Details */}
          <div className="bg-[#ffffff] p-6 rounded-2xl shadow-[0_4px_24px_rgba(45,90,39,0.04)] border border-[#eeeeeb] flex flex-col gap-4">
            <h2 className="text-lg font-normal font-kanit text-[#1a1c1b] mb-2">รายละเอียด</h2>
            
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium font-kanit text-[#42493e]" htmlFor="plot-select">แปลงที่ทำกิจกรรม</label>
              <div className="relative">
                <select 
                  className="w-full appearance-none bg-[#ffffff] border border-[#c2c9bb] text-[#1a1c1b] text-base font-kanit rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#154212] focus:border-transparent transition-shadow" 
                  id="plot-select"
                >
                  <option value="A1">แปลง A1 - ทุเรียนหมอนทอง</option>
                  <option value="A2">แปลง A2 - ทุเรียนก้านยาว</option>
                  <option value="B1">แปลง B1 - มังคุด</option>
                  <option value="B2">แปลง B2 - เงาะโรงเรียน</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#42493e]">
                  <span className="material-symbols-outlined">expand_more</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium font-kanit text-[#42493e]" htmlFor="activity-date">วันที่</label>
                <input 
                  className="w-full bg-[#ffffff] border border-[#c2c9bb] text-[#1a1c1b] text-base font-kanit rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#154212] focus:border-transparent transition-shadow" 
                  id="activity-date" 
                  type="date"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium font-kanit text-[#42493e]" htmlFor="activity-time">เวลา</label>
                <input 
                  className="w-full bg-[#ffffff] border border-[#c2c9bb] text-[#1a1c1b] text-base font-kanit rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#154212] focus:border-transparent transition-shadow" 
                  id="activity-time" 
                  type="time"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1 mt-2">
              <label className="text-sm font-medium font-kanit text-[#42493e]" htmlFor="activity-notes">บันทึกเพิ่มเติม</label>
              <textarea 
                className="w-full bg-[#ffffff] border border-[#c2c9bb] text-[#1a1c1b] text-base font-kanit rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#154212] focus:border-transparent transition-shadow resize-none" 
                id="activity-notes" 
                placeholder="ระบุรายละเอียดเพิ่มเติม เช่น ปริมาณปุ๋ย สภาพอากาศ..." 
                rows={3}
              ></textarea>
            </div>
          </div>

          {/* Upload Image */}
          <div className="bg-[#ffffff] p-6 rounded-2xl shadow-[0_4px_24px_rgba(45,90,39,0.04)] border border-[#eeeeeb] flex flex-col gap-4">
            <h2 className="text-lg font-normal font-kanit text-[#1a1c1b] flex items-center gap-2">
              <span className="material-symbols-outlined text-[#72796e]">photo_camera</span>
              รูปภาพหลักฐานการทำงาน
            </h2>
            <div className="border-2 border-dashed border-[#c2c9bb] rounded-2xl p-8 flex flex-col items-center justify-center gap-4 hover:bg-[#f4f4f1] transition-colors cursor-pointer text-center">
              <div className="w-16 h-16 rounded-full bg-[#eeeeeb] flex items-center justify-center text-[#154212]">
                <span className="material-symbols-outlined text-3xl">add_photo_alternate</span>
              </div>
              <div>
                <p className="text-base font-medium font-kanit text-[#1a1c1b]">แตะเพื่อถ่ายรูป หรือ เลือกจากแกลเลอรี</p>
                <p className="text-xs font-semibold font-kanit text-[#42493e] mt-1">รองรับ JPG, PNG สูงสุด 5MB</p>
              </div>
            </div>
            
            {/* Mock Selected Image */}
            <div className="grid grid-cols-3 gap-2 mt-2">
              <div className="relative aspect-square rounded-lg overflow-hidden border border-[#eeeeeb]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  alt="กิจกรรมรดน้ำ" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDT7FNr-CktXeDUhzYhYyifQIFr0TIP4FMPaKsFRmKyUvOUbgO4Kxm9szmVCoixlipKmqurjyAwSXiMZHFdDDu5Nx_RR13uQ1fgOfQJLloJRq5BLpfvjSqotqrJ6RAVvQ5agHCQqHA_pjbSa57Tt1w_hxHSQ7MOAJtrtuAgIEYkbjTSV0RoOIWCyWF0au11x9_rpOn0QsWab95E-25ZlG-Y2uxjPIaILkwCh_R5TSk52goAsRTYPTL-QhejWyo6r73I--GHH1Fs8fBG"
                />
                <button aria-label="ลบรูปภาพ" className="absolute top-1 right-1 w-6 h-6 bg-white/80 rounded-full flex items-center justify-center text-[#ba1a1a] backdrop-blur-sm shadow-sm" type="button">
                  <span className="material-symbols-outlined text-sm">close</span>
                </button>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button className="w-full bg-[#154212] hover:bg-[#3b6934] text-white text-lg font-semibold font-kanit py-4 rounded-xl shadow-[0_8px_16px_rgba(21,66,18,0.2)] transition-all active:scale-[0.98] flex items-center justify-center gap-2" type="button">
              <span className="material-symbols-outlined filled">check_circle</span>
              บันทึกข้อมูล
            </button>
          </div>
        </form>
      </main>

      <BottomNavBar />
    </>
  );
}
