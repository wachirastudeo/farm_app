import React from 'react';
import Link from 'next/link';

export function MobileNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#E0E0DB] pb-safe z-50 md:hidden shadow-[0_-4px_24px_rgba(21,66,18,0.05)]">
      <div className="flex justify-around items-center h-16">
        <NavItem href="/" icon="📊" label="หน้าหลัก" active />
        <NavItem href="#" icon="📅" label="วางแผน" />
        <NavItem href="#" icon="✅" label="กิจกรรม" />
        <NavItem href="#" icon="👤" label="บัญชี" />
      </div>
    </nav>
  );
}

function NavItem({ href, icon, label, active = false }: { href: string, icon: string, label: string, active?: boolean }) {
  return (
    <Link href={href} className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${active ? 'text-nature-green' : 'text-earth-brown/60'}`}>
      <span className="text-xl">{icon}</span>
      <span className="text-[10px] font-semibold tracking-wider">{label}</span>
    </Link>
  );
}
