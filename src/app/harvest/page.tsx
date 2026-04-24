import React from 'react';
import Link from 'next/link';
import { BottomNavBar } from '@/components/layout/BottomNavBar';

export default function HarvestLog() {
  return (
    <>
      <main className="max-w-2xl mx-auto px-6 py-8 pb-32">
        <div className="mb-6 flex items-center gap-2">
          <Link href="/planning" className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#eeeeeb] transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
          <h1 className="text-[24px] font-semibold font-kanit text-[#1a1c1b]">บันทึกการเก็บเกี่ยว</h1>
        </div>

        <div className="hidden md:block mb-6">
          <p className="text-base font-kanit text-[#42493e]">บันทึกข้อมูลผลผลิตที่เก็บเกี่ยวได้ในวันนี้</p>
        </div>

        <form className="space-y-6">
          {/* Plot Information */}
          <div className="bg-[#ffffff] rounded-2xl shadow-[0_4px_24px_rgba(45,90,39,0.04)] border border-[#eeeeeb] overflow-hidden">
            <div className="p-6 border-b border-[#eeeeeb] bg-[#f4f4f1]/50">
              <h2 className="text-[20px] font-semibold font-kanit text-[#1a1c1b] flex items-center gap-2">
                <span className="material-symbols-outlined text-[#154212]">location_on</span>
                ข้อมูลแปลง
              </h2>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium font-kanit text-[#42493e] mb-2" htmlFor="plot">เลือกแปลงที่เก็บเกี่ยว *</label>
                <div className="relative">
                  <select 
                    className="w-full h-12 px-4 appearance-none rounded-lg border border-[#c2c9bb] bg-[#ffffff] focus:ring-2 focus:ring-[#154212] focus:border-[#154212] transition-colors text-base font-kanit text-[#1a1c1b]" 
                    id="plot"
                  >
                    <option value="">-- กรุณาเลือกแปลง --</option>
                    <option value="1">แปลง A1 (โซนเหนือ)</option>
                    <option value="2">แปลง B2 (โซนตะวันออก)</option>
                    <option value="3">แปลง C3 (ริมน้ำ)</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#42493e]">
                    <span className="material-symbols-outlined">expand_more</span>
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium font-kanit text-[#42493e] mb-3">ชนิดผลไม้ *</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <label className="relative cursor-pointer">
                    <input className="peer sr-only" name="crop_type" type="radio" value="durian" defaultChecked />
                    <div className="h-12 flex items-center justify-center rounded-lg border border-[#c2c9bb] bg-[#ffffff] peer-checked:bg-[#ffdeac] peer-checked:border-[#4f3500] peer-checked:text-[#281900] transition-colors text-base font-kanit text-[#1a1c1b] hover:bg-[#f4f4f1]">
                      ทุเรียน
                    </div>
                  </label>
                  <label className="relative cursor-pointer">
                    <input className="peer sr-only" name="crop_type" type="radio" value="mangosteen" />
                    <div className="h-12 flex items-center justify-center rounded-lg border border-[#c2c9bb] bg-[#ffffff] peer-checked:bg-[#ffdeac] peer-checked:border-[#4f3500] peer-checked:text-[#281900] transition-colors text-base font-kanit text-[#1a1c1b] hover:bg-[#f4f4f1]">
                      มังคุด
                    </div>
                  </label>
                  <label className="relative cursor-pointer">
                    <input className="peer sr-only" name="crop_type" type="radio" value="rambutan" />
                    <div className="h-12 flex items-center justify-center rounded-lg border border-[#c2c9bb] bg-[#ffffff] peer-checked:bg-[#ffdeac] peer-checked:border-[#4f3500] peer-checked:text-[#281900] transition-colors text-base font-kanit text-[#1a1c1b] hover:bg-[#f4f4f1]">
                      เงาะ
                    </div>
                  </label>
                  <label className="relative cursor-pointer">
                    <input className="peer sr-only" name="crop_type" type="radio" value="longkong" />
                    <div className="h-12 flex items-center justify-center rounded-lg border border-[#c2c9bb] bg-[#ffffff] peer-checked:bg-[#ffdeac] peer-checked:border-[#4f3500] peer-checked:text-[#281900] transition-colors text-base font-kanit text-[#1a1c1b] hover:bg-[#f4f4f1]">
                      ลองกอง
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Quantity and Grade */}
          <div className="bg-[#ffffff] rounded-2xl shadow-[0_4px_24px_rgba(45,90,39,0.04)] border border-[#eeeeeb] overflow-hidden">
            <div className="p-6 border-b border-[#eeeeeb] bg-[#f4f4f1]/50">
              <h2 className="text-[20px] font-semibold font-kanit text-[#1a1c1b] flex items-center gap-2">
                <span className="material-symbols-outlined text-[#154212]">scale</span>
                ปริมาณผลผลิต
              </h2>
            </div>
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium font-kanit text-[#42493e] mb-2" htmlFor="quantity">จำนวน (เข่ง/ลัง) *</label>
                  <div className="relative">
                    <input 
                      className="w-full h-12 px-4 rounded-lg border border-[#c2c9bb] bg-[#ffffff] focus:ring-2 focus:ring-[#154212] focus:border-[#154212] transition-colors text-base font-kanit text-[#1a1c1b]" 
                      id="quantity" 
                      placeholder="0" 
                      type="number"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#42493e] text-base font-kanit">หน่วย</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium font-kanit text-[#42493e] mb-2" htmlFor="weight">น้ำหนักรวม (กก.) *</label>
                  <div className="relative">
                    <input 
                      className="w-full h-12 px-4 rounded-lg border border-[#c2c9bb] bg-[#ffffff] focus:ring-2 focus:ring-[#154212] focus:border-[#154212] transition-colors text-base font-kanit text-[#1a1c1b]" 
                      id="weight" 
                      placeholder="0.0" 
                      step="0.1" 
                      type="number"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#42493e] text-base font-kanit">กก.</span>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium font-kanit text-[#42493e] mb-3">เกรดผลผลิต *</label>
                <div className="grid grid-cols-3 gap-3">
                  <label className="relative cursor-pointer">
                    <input className="peer sr-only" name="grade" type="radio" value="A" defaultChecked />
                    <div className="h-12 flex items-center justify-center rounded-lg border border-[#c2c9bb] bg-[#ffffff] peer-checked:bg-[#2d5a27] peer-checked:border-[#154212] peer-checked:text-[#9dd090] transition-colors text-base font-kanit text-[#1a1c1b] hover:bg-[#f4f4f1]">
                      เกรด A
                    </div>
                  </label>
                  <label className="relative cursor-pointer">
                    <input className="peer sr-only" name="grade" type="radio" value="B" />
                    <div className="h-12 flex items-center justify-center rounded-lg border border-[#c2c9bb] bg-[#ffffff] peer-checked:bg-[#2d5a27] peer-checked:border-[#154212] peer-checked:text-[#9dd090] transition-colors text-base font-kanit text-[#1a1c1b] hover:bg-[#f4f4f1]">
                      เกรด B
                    </div>
                  </label>
                  <label className="relative cursor-pointer">
                    <input className="peer sr-only" name="grade" type="radio" value="mixed" />
                    <div className="h-12 flex items-center justify-center rounded-lg border border-[#c2c9bb] bg-[#ffffff] peer-checked:bg-[#e2e3e0] peer-checked:border-[#72796e] peer-checked:text-[#1a1c1b] transition-colors text-base font-kanit text-[#1a1c1b] hover:bg-[#f4f4f1]">
                      คละเกรด
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className="bg-[#ffffff] rounded-2xl shadow-[0_4px_24px_rgba(45,90,39,0.04)] border border-[#eeeeeb] overflow-hidden">
            <div className="p-6 border-b border-[#eeeeeb] bg-[#f4f4f1]/50">
              <h2 className="text-[20px] font-semibold font-kanit text-[#1a1c1b] flex items-center gap-2">
                <span className="material-symbols-outlined text-[#154212]">add_a_photo</span>
                รูปภาพผลผลิต
              </h2>
            </div>
            <div className="p-6">
              <div className="border-2 border-dashed border-[#c2c9bb] rounded-xl p-8 flex flex-col items-center justify-center text-center hover:bg-[#f4f4f1] transition-colors cursor-pointer bg-[#f9f9f6]">
                <span className="material-symbols-outlined text-[48px] text-[#72796e] mb-4">cloud_upload</span>
                <p className="text-sm font-medium font-kanit text-[#1a1c1b] mb-1">แตะเพื่ออัปโหลดรูปภาพ</p>
                <p className="text-base font-kanit text-[#42493e] text-sm">หรือลากไฟล์มาวางที่นี่</p>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button className="w-full h-[56px] bg-[#FF7A00] hover:bg-[#E66E00] active:scale-[0.98] transition-all rounded-xl text-[18px] font-semibold font-kanit text-white flex items-center justify-center gap-2 shadow-sm" type="button">
              <span className="material-symbols-outlined icon-fill text-[24px]" style={{ fontVariationSettings: '"FILL" 1' }}>save</span>
              บันทึกข้อมูลเก็บเกี่ยว
            </button>
          </div>
        </form>
      </main>

      <BottomNavBar />
    </>
  );
}
