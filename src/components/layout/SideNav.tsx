"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function SideNav() {
  const pathname = usePathname();

  const allItems = [
    { name: 'หน้าแรก', icon: 'home', href: '/' },
    { name: 'วางแผนสวน', icon: 'potted_plant', href: '/planning' },
    { name: 'สมุดบันทึกสวน', icon: 'edit_note', href: '/activity-log' },
    { name: 'รายรับรายจ่าย', icon: 'payments', href: '/finance' },
    { name: 'บันทึกเก็บเกี่ยว', icon: 'agriculture', href: '/harvest' },
    { name: 'คลังความรู้', icon: 'menu_book', href: '/knowledge' },
  ];

  return (
    <aside className="hidden lg:flex flex-col w-64 min-h-screen bg-white border-r border-zinc-100 shadow-sm fixed left-0 top-0 z-40 pt-0">
      {/* Logo */}
      <div className="flex items-center gap-3 px-6 h-16 border-b border-zinc-100">
        <span className="material-symbols-outlined text-emerald-600 text-[28px]">eco</span>
        <span className="text-xl font-bold text-emerald-700 tracking-tight">OrchardPro</span>
      </div>

      {/* Nav Items */}
      <nav className="flex flex-col gap-1 p-4 flex-1">
        {allItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-150 group ${
                isActive
                  ? 'bg-emerald-50 text-emerald-700'
                  : 'text-zinc-500 hover:bg-zinc-50 hover:text-zinc-800'
              }`}
            >
              <span
                className="material-symbols-outlined text-[22px] shrink-0"
                style={isActive ? { fontVariationSettings: '"FILL" 1' } : {}}
              >
                {item.icon}
              </span>
              <span className="text-sm font-semibold">{item.name}</span>
              {isActive && (
                <span className="ml-auto w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* User Footer / Account Link */}
      <div className="border-t border-zinc-100 p-4">
        <Link href="/account" className={`flex items-center gap-3 px-2 py-2 rounded-xl transition-all duration-150 hover:bg-zinc-50 ${pathname === '/account' ? 'bg-emerald-50 ring-1 ring-emerald-100' : ''}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="User"
            className="w-8 h-8 rounded-full border-2 border-emerald-500 object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuClGTGqrgkOWcQbNUV5Ph47FPZ0jczyuChHb6i2pP6jhLifdxteY36dNl2lcCC8LVnC6-U_pdncI3h5iBdvwiGcSPiC93Kfr5sRiT1lcBm7YsyVzoK8loUByOjFxHON5PRVw61avc_ij_ORT7sj3qhd-oY_UOPMw98qrWbKef_zhzspvyg1bVM7BLtQmto24qc_HsqqmNMOZ4NK0TU-O6bz5v7nLCWrdPegAuUX9cJjYsD3A6waOZlNyumZZHG7oapJa9AucEB3Qg2y"
          />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-zinc-800 truncate">สมชาย รักเกษตร</p>
            <p className="text-xs text-zinc-400 truncate">สวนร่มเย็น จ.จันทบุรี</p>
          </div>
          <span className={`material-symbols-outlined text-[18px] ${pathname === '/account' ? 'text-emerald-600' : 'text-zinc-400'}`}>
            {pathname === '/account' ? 'check_circle' : 'settings'}
          </span>
        </Link>
      </div>
    </aside>
  );
}
