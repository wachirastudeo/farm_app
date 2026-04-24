import React from 'react';
import { BottomNavBar } from '@/components/layout/BottomNavBar';
import Image from 'next/image';

export default function Account() {
  return (
    <>
      {/* TopAppBar */}
      <header className="bg-white/90 backdrop-blur-md text-[#154212] font-inter antialiased tracking-tight sticky top-0 z-50 border-b border-[#e2e3e0] shadow-sm flex justify-between items-center h-16 px-6 w-full">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[#2d5a27]">park</span>
          <span className="text-xl font-bold text-[#2d5a27] font-kanit">Orchard</span>
        </div>
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            alt="User profile photo" 
            className="w-8 h-8 rounded-full border-2 border-[#2d5a27] object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3k-c7ev-IgGTEpwrDHDnc4-w2sNivB4vq1AKAp-DOJi7WjfG9WM-_ZitTG98-vM_JFBLe2KpSsy--mLNDwNEm9UgvM29PfPj9JgBVg11CMZqWlCXUM7zkOJBmizMtV3pW1fsEX0xrRd_Ga-Hqdw58hOG3sTSo6hbgY8n6Me1pvSmtPAdSzn9asGj0oGRz8cgOGE9iUSMFz8oL6zCKISfZP0Z-7qLIlwYiDr555ATkSGIsXqM3fxclvJPv6_K6JiqSQsMdoocUZmes"
          />
        </div>
      </header>

      <main className="p-6 max-w-4xl mx-auto space-y-8 pt-6 pb-32">
        {/* Profile Header */}
        <section className="bg-white rounded-xl shadow-[0_4px_24px_rgba(45,90,39,0.08)] p-4 flex flex-col md:flex-row items-center gap-4 border border-[#e2e3e0]">
          <div className="w-24 h-24 shrink-0 rounded-full overflow-hidden border-4 border-[#f9f9f6] shadow-sm">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              alt="Profile Picture" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1sHgllGLcL_P7ymPh2x3X7sdSxEln5FJCqwpDxf5PKAg-TiJveJE5MotDCFlu70pB-LNtQfq5QKzhSd6t-1n0oAuyI-txPbc4QW-_mxwGpYUv_2QzLAlODqpGPqJP_98fFviFa9YUZJjGOC9NYM8CgAZ1lFvKWcGEgcyNq-jSS7h2j-MCtO30Twc1_DK9UFbyzXnhZb1f5Y_SFwLOrgZO3VwqIWvUjjCYrXivZcg7-xlgp2qRIHx7Sm6afWX3Dd_-08Lv6fkMBeXd"
            />
          </div>
          <div className="text-center md:text-left flex-1">
            <h1 className="text-2xl font-semibold font-kanit text-[#1a1c1b]">นายสมชาย รักเกษตร</h1>
            <p className="text-base font-kanit text-[#42493e] flex items-center justify-center md:justify-start gap-1 mt-1">
              <span className="material-symbols-outlined text-[18px]">location_on</span>
              สวนร่มเย็น จ.จันทบุรี
            </p>
            <div className="mt-2 flex gap-2 justify-center md:justify-start">
              <span className="bg-[#ffdeac] text-[#281900] text-xs font-semibold font-kanit px-3 py-1 rounded-full shadow-sm">พรีเมียม</span>
              <span className="bg-[#bcf0ae] text-[#002201] text-xs font-semibold font-kanit px-3 py-1 rounded-full shadow-sm">สมาชิก 5 ปี</span>
            </div>
          </div>
          <button className="bg-[#154212] text-white text-sm font-medium font-kanit px-4 py-2 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-1 shadow-md">
            <span className="material-symbols-outlined text-[20px]">edit</span>
            แก้ไขโปรไฟล์
          </button>
        </section>

        {/* Plots Section (Bento Grid) */}
        <section>
          <div className="flex justify-between items-end mb-4">
            <div>
              <h2 className="text-2xl font-semibold font-kanit text-[#1a1c1b]">จัดการแปลงปลูก</h2>
              <p className="text-base font-kanit text-[#42493e]">ข้อมูลและสถานะของแต่ละแปลง</p>
            </div>
            <button className="text-[#154212] text-sm font-medium font-kanit flex items-center gap-1 hover:opacity-80 transition-opacity">
              <span className="material-symbols-outlined text-[20px]">add_circle</span>
              เพิ่มแปลง
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Durian Plot */}
            <div className="bg-white rounded-xl border border-[#e2e3e0] shadow-[0_4px_16px_rgba(45,90,39,0.06)] overflow-hidden flex flex-col hover:-translate-y-1 transition-transform duration-300">
              <div className="h-32 bg-cover bg-center relative" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAglv7sUFesFNBwXeGIWv_zpZraYjClgxK0s97RuXCSWif8frjN0zTSWagaAqilpjDY_zO4s48XKNKbCVEEeIUdNS_NCFOE_S_BUyNKz6ErdzQbPM9Cw7KYcWwCxKDbXWqtuZThYpLRR7TxW8Loc-w0y7LeNvV3Lgml_quB68nqEYR8oLkfyjJcJkMo7VCA8ahFwb0ogfaDS0q-IKgzYw1OOl1_pUGGsLTRSTBnLtbqHd9vdZ8P77MWS3URIPCFkNMGem0_WYuGzSdd')"}}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-2 left-4 flex items-center gap-2">
                  <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold font-kanit px-2 py-1 rounded-md border border-white/30">ทุเรียนหมอนทอง</span>
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-[20px] font-semibold font-kanit text-[#1a1c1b]">แปลงทุเรียน A</h3>
                    <span className="bg-[#bcf0ae] text-[#002201] text-xs font-semibold font-kanit px-2 py-1 rounded-full shadow-sm">ปกติ</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div className="bg-[#f4f4f1] p-2 rounded-lg flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#6c4a00] text-[20px]">grass</span>
                      <div>
                        <p className="text-[10px] font-semibold font-kanit text-[#42493e] uppercase">จำนวนต้น</p>
                        <p className="text-base font-medium font-kanit text-[#1a1c1b]">120 ต้น</p>
                      </div>
                    </div>
                    <div className="bg-[#f4f4f1] p-2 rounded-lg flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#77574d] text-[20px]">calendar_month</span>
                      <div>
                        <p className="text-[10px] font-semibold font-kanit text-[#42493e] uppercase">อายุพืช</p>
                        <p className="text-base font-medium font-kanit text-[#1a1c1b]">5 ปี</p>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="w-full border-2 border-[#c2c9bb] text-[#1a1c1b] text-sm font-medium font-kanit py-2 rounded-lg hover:bg-[#f4f4f1] transition-colors flex justify-center items-center gap-1">
                  รายละเอียด <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Mangosteen Plot */}
            <div className="bg-white rounded-xl border border-[#e2e3e0] shadow-[0_4px_16px_rgba(45,90,39,0.06)] overflow-hidden flex flex-col hover:-translate-y-1 transition-transform duration-300">
              <div className="h-32 bg-cover bg-center relative" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC2eHTWn37uOSt7MAXRwoW5luImaI2JQIvKGAMdB2dIvIggvxsOHBb99lbTXT5A0vNO_Tz1KkNJukBWy-4HKZFr17VARmTtDZMxs7NidHPXHjwjLMHh8C-diDCg-u4RAYpeKYGdAIoCwLV1N5A-hGi1ZARkdf8gS_flowwFlbsTLGqqccSQPBCC07TlyxDEV6aGhSvQUqiSTJJka6FOyRXNCAlBX13Y2DahFThnHYSWDF9-036vzJVZ6QVlhwJQEWF8mSBAGqTgXnRi')"}}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-2 left-4 flex items-center gap-2">
                  <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold font-kanit px-2 py-1 rounded-md border border-white/30">มังคุด</span>
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-[20px] font-semibold font-kanit text-[#1a1c1b]">แปลงมังคุด B</h3>
                    <span className="bg-[#ffdeac] text-[#281900] text-xs font-semibold font-kanit px-2 py-1 rounded-full shadow-sm">ให้น้ำ</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div className="bg-[#f4f4f1] p-2 rounded-lg flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#6c4a00] text-[20px]">grass</span>
                      <div>
                        <p className="text-[10px] font-semibold font-kanit text-[#42493e] uppercase">จำนวนต้น</p>
                        <p className="text-base font-medium font-kanit text-[#1a1c1b]">80 ต้น</p>
                      </div>
                    </div>
                    <div className="bg-[#f4f4f1] p-2 rounded-lg flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#77574d] text-[20px]">calendar_month</span>
                      <div>
                        <p className="text-[10px] font-semibold font-kanit text-[#42493e] uppercase">อายุพืช</p>
                        <p className="text-base font-medium font-kanit text-[#1a1c1b]">3 ปี</p>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="w-full border-2 border-[#c2c9bb] text-[#1a1c1b] text-sm font-medium font-kanit py-2 rounded-lg hover:bg-[#f4f4f1] transition-colors flex justify-center items-center gap-1">
                  รายละเอียด <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Mixed Plot */}
            <div className="bg-white rounded-xl border border-[#e2e3e0] shadow-[0_4px_16px_rgba(45,90,39,0.06)] overflow-hidden flex flex-col hover:-translate-y-1 transition-transform duration-300 md:col-span-2">
              <div className="flex flex-col md:flex-row h-full">
                <div className="h-32 md:h-auto md:w-1/3 bg-cover bg-center relative" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB_tF7FYY2D1wjUrF8fTEr9LidvKAZlZyqi4AefyaUkxQvPZdqcXfikgLfNRXFS_DZJiIG-UZKRF6ciuhPs2yCN4vpnFLiBKBhsiIvEsqI3XrkxXieBptR8S53bVvL8Svx1csUzoc_2oNl9Ydsr8U0tgBzcxY9AM66toCiZobEG4q6uoEQTr-R0Br-ghO7gTJS-JQSq3DGDfBsrj_Lwgc8iAgvxfd_dst2FK4VAQOdrth0XmEQkNkbwd6XV1RqboA_ENMqA79qy-Xo-')"}}>
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/60 to-transparent"></div>
                  <div className="absolute bottom-2 left-4 flex items-center gap-2">
                    <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold font-kanit px-2 py-1 rounded-md border border-white/30">สวนผสม</span>
                  </div>
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-[20px] font-semibold font-kanit text-[#1a1c1b]">แปลงผสม C (กล้วย, เงาะ)</h3>
                      <span className="bg-[#ffdad6] text-[#93000a] text-xs font-semibold font-kanit px-2 py-1 rounded-full shadow-sm">ต้องดูแล</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      <div className="bg-[#f4f4f1] p-2 rounded-lg flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#6c4a00] text-[20px]">grass</span>
                        <div>
                          <p className="text-[10px] font-semibold font-kanit text-[#42493e] uppercase">จำนวนต้น</p>
                          <p className="text-base font-medium font-kanit text-[#1a1c1b]">200 ต้น</p>
                        </div>
                      </div>
                      <div className="bg-[#f4f4f1] p-2 rounded-lg flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#77574d] text-[20px]">calendar_month</span>
                        <div>
                          <p className="text-[10px] font-semibold font-kanit text-[#42493e] uppercase">อายุพืช</p>
                          <p className="text-base font-medium font-kanit text-[#1a1c1b]">1-2 ปี</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="w-full md:w-auto self-end border-2 border-[#c2c9bb] text-[#1a1c1b] text-sm font-medium font-kanit px-4 py-2 rounded-lg hover:bg-[#f4f4f1] transition-colors flex justify-center items-center gap-1">
                    รายละเอียด <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Settings & Actions */}
        <section className="space-y-2 mt-8">
          <div className="bg-white rounded-xl border border-[#e2e3e0] shadow-sm overflow-hidden divide-y divide-[#e2e3e0]">
            <a className="flex items-center p-4 hover:bg-[#f4f4f1] transition-colors" href="#">
              <span className="material-symbols-outlined text-[#77574d] text-[24px] mr-4">settings</span>
              <span className="text-base font-kanit text-[#1a1c1b] flex-1">ตั้งค่าระบบ</span>
              <span className="material-symbols-outlined text-[#72796e] text-[20px]">chevron_right</span>
            </a>
            <a className="flex items-center p-4 hover:bg-[#f4f4f1] transition-colors" href="#">
              <span className="material-symbols-outlined text-[#77574d] text-[24px] mr-4">help_center</span>
              <span className="text-base font-kanit text-[#1a1c1b] flex-1">ศูนย์ช่วยเหลือ</span>
              <span className="material-symbols-outlined text-[#72796e] text-[20px]">chevron_right</span>
            </a>
          </div>
          <button className="w-full bg-[#ffdad6]/50 text-[#93000a] text-sm font-medium font-kanit py-4 rounded-xl hover:bg-[#ffdad6] transition-colors flex justify-center items-center gap-2 border border-[#ba1a1a]/20 mt-4">
            <span className="material-symbols-outlined text-[20px]">logout</span>
            ออกจากระบบ
          </button>
        </section>
      </main>

      <BottomNavBar />
    </>
  );
}
