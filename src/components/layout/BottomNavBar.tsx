"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function BottomNavBar() {
  const pathname = usePathname();

  const navItems = [
    {
      name: 'หน้าแรก',
      icon: 'home',
      href: '/',
    },
    {
      name: 'วางแผนสวน',
      icon: 'potted_plant',
      href: '/planning',
    },
    {
      name: 'รายรับรายจ่าย',
      icon: 'payments',
      href: '/finance',
    },
    {
      name: 'บัญชี',
      icon: 'person',
      href: '/account',
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-2 py-3 pb-safe bg-white/95 backdrop-blur-lg border-t border-zinc-100 shadow-[0_-4px_20px_rgba(45,90,39,0.08)] z-50 rounded-t-2xl">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center justify-center px-4 py-1.5 transition-colors active:scale-90 duration-150 ${
              isActive
                ? 'text-orange-600 bg-orange-50 rounded-2xl'
                : 'text-zinc-400 hover:text-blue-500'
            }`}
          >
            <span
              className="material-symbols-outlined"
              style={isActive ? { fontVariationSettings: '"FILL" 1' } : {}}
            >
              {item.icon}
            </span>
            <span className="font-['Kanit'] text-[10px] font-semibold mt-1 whitespace-nowrap">
              {item.name}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
