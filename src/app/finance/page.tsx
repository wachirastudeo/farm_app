"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { BottomNavBar } from '@/components/layout/BottomNavBar';

const MONTHS_TH = ['มกราคม','กุมภาพันธ์','มีนาคม','เมษายน','พฤษภาคม','มิถุนายน','กรกฎาคม','สิงหาคม','กันยายน','ตุลาคม','พฤศจิกายน','ธันวาคม'];
const SHORT_M = ['ม.ค.','ก.พ.','มี.ค.','เม.ย.','พ.ค.','มิ.ย.','ก.ค.','ส.ค.','ก.ย.','ต.ค.','พ.ย.','ธ.ค.'];

type Txn = {
  id: number; title: string; category: string; time: string;
  amount: number; method: string; icon: string;
  iconBg: string; iconColor: string; day: number; month: number; year: number;
  billPreview?: string;
};

const NOW = new Date();
const Y = NOW.getFullYear(), M = NOW.getMonth();

const SEED: Txn[] = [
  { id: 1, title: 'ขายทุเรียนหมอนทอง', category: 'ขายส่งพรีเมียม', time: '14:30', amount: 42000, method: 'โอนเงิน', icon: 'payments', iconBg: 'bg-emerald-100/50', iconColor: 'text-emerald-600', day: NOW.getDate(), month: M, year: Y },
  { id: 2, title: 'ซื้อปุ๋ยอินทรีย์ สูตร 1', category: 'วัสดุการเกษตร', time: '09:15', amount: -8500, method: 'เงินสด', icon: 'potted_plant', iconBg: 'bg-amber-100/50', iconColor: 'text-amber-600', day: NOW.getDate(), month: M, year: Y },
  { id: 3, title: 'ค่าขนส่งผลผลิต', category: 'โลจิสติกส์', time: '16:45', amount: -2400, method: 'โอนเงิน', icon: 'local_shipping', iconBg: 'bg-zinc-100', iconColor: 'text-zinc-600', day: 22, month: M, year: Y },
  { id: 4, title: 'ขายมังคุดคัด', category: 'ขายปลีก', time: '11:20', amount: 5600, method: 'เงินสด', icon: 'payments', iconBg: 'bg-emerald-100/50', iconColor: 'text-emerald-600', day: 22, month: M, year: Y },
  { id: 5, title: 'ค่าแรงงานรายวัน', category: 'แรงงาน', time: '17:00', amount: -3200, method: 'เงินสด', icon: 'engineering', iconBg: 'bg-sky-100/50', iconColor: 'text-sky-600', day: 21, month: M, year: Y },
  { id: 6, title: 'ขายเงาะโรงเรียน', category: 'ขายปลีก', time: '10:00', amount: 8400, method: 'โอนเงิน', icon: 'payments', iconBg: 'bg-emerald-100/50', iconColor: 'text-emerald-600', day: 21, month: M, year: Y },
  { id: 7, title: 'ขายลำไย (ก.ย.)', category: 'ขายส่งพรีเมียม', time: '13:00', amount: 15000, method: 'โอนเงิน', icon: 'payments', iconBg: 'bg-emerald-100/50', iconColor: 'text-emerald-600', day: 15, month: M-1 < 0 ? 11 : M-1, year: Y },
  { id: 8, title: 'ค่ายาฆ่าแมลง (ก.ย.)', category: 'วัสดุการเกษตร', time: '08:00', amount: -4200, method: 'เงินสด', icon: 'potted_plant', iconBg: 'bg-amber-100/50', iconColor: 'text-amber-600', day: 10, month: M-1 < 0 ? 11 : M-1, year: Y },
];

const CATEGORIES = [
  { key: 'income', label: 'รายรับ', icon: 'payments', color: 'text-emerald-600' },
  { key: 'material', label: 'วัสดุการเกษตร', icon: 'potted_plant', color: 'text-amber-600' },
  { key: 'labor', label: 'แรงงาน', icon: 'engineering', color: 'text-sky-600' },
  { key: 'logistics', label: 'โลจิสติกส์', icon: 'local_shipping', color: 'text-violet-600' },
  { key: 'other', label: 'อื่นๆ', icon: 'more_horiz', color: 'text-zinc-600' },
];

const CAT_ICONS: Record<string, { icon: string; bg: string; color: string }> = {
  income: { icon: 'payments', bg: 'bg-emerald-50', color: 'text-emerald-600' },
  material: { icon: 'potted_plant', bg: 'bg-amber-50', color: 'text-amber-600' },
  labor: { icon: 'engineering', bg: 'bg-sky-50', color: 'text-sky-600' },
  logistics: { icon: 'local_shipping', bg: 'bg-zinc-100', color: 'text-zinc-600' },
  other: { icon: 'receipt_long', bg: 'bg-violet-50', color: 'text-violet-600' },
};

const getSmartIcon = (title: string, amount: number) => {
  const t = title.toLowerCase();
  const isInc = amount > 0;
  
  if (t.includes('ขาย') || t.includes('รับเงิน')) return { icon: 'payments', bg: 'bg-emerald-100/50', color: 'text-emerald-600' };
  if (t.includes('ปุ๋ย') || t.includes('ยา') || t.includes('ต้น') || t.includes('พันธุ์')) return { icon: 'potted_plant', bg: 'bg-amber-100/50', color: 'text-amber-600' };
  if (t.includes('จ้าง') || t.includes('แรงงาน') || t.includes('คน')) return { icon: 'engineering', bg: 'bg-sky-100/50', color: 'text-sky-600' };
  if (t.includes('ส่ง') || t.includes('รถ') || t.includes('มัน')) return { icon: 'local_shipping', bg: 'bg-zinc-100', color: 'text-zinc-600' };
  if (t.includes('น้ำ') || t.includes('ไฟ')) return { icon: 'water_drop', bg: 'bg-blue-100/50', color: 'text-blue-600' };
  
  return isInc 
    ? { icon: 'add_circle', bg: 'bg-emerald-50', color: 'text-emerald-600' }
    : { icon: 'remove_circle', bg: 'bg-orange-50', color: 'text-orange-600' };
};

// Generate dropdown options: 12 months back + current
const MONTH_OPTIONS = Array.from({ length: 13 }, (_, i) => {
  const d = new Date(Y, M - 12 + i, 1);
  return { month: d.getMonth(), year: d.getFullYear(), label: `${MONTHS_TH[d.getMonth()]} ${d.getFullYear() + 543}` };
});

const SUGGESTIONS_INCOME = [
  'ขายทุเรียนหมอนทอง', 'ขายทุเรียนก้านยาว', 'ขายมังคุดคัด', 'ขายมังคุดตกไซส์',
  'ขายเงาะโรงเรียน', 'ขายลำไย', 'ขายมะม่วงน้ำดอกไม้',
  'ขายสะตอ', 'ขายมะพร้าว', 'ขายกล้วยไม้', 'ขายผักสวน',
  'รับจ้างตัดแต่งสวน', 'รับจ้างพ่นยา', 'รับเงินสนับสนุน',
];
const SUGGESTIONS_EXPENSE = [
  'ปุ๋ยอินทรีย์', 'ปุ๋ยเคมี', 'ปุ๋ยสูตร 15-15-15', 'ปุ๋ยยูเรีย', 'ปุ๋ยทางใบ',
  'ยาฆ่าแมลง', 'ยากำจัดวัชพืช', 'ยากำจัดแมลง',
  'ค่าแรงงานรายวัน', 'ค่าแรงงานตัดแต่ง',
  'ค่าขนส่งผลผลิต', 'ค่าน้ำมันรถ', 'ค่าไฟฟ้า',
  'ซื้ออุปกรณ์การเกษตร', 'ซ่อมเครื่องพ่นยา', 'ซ่อมรถไถนา',
  'ค่าเมล็ดพันธุ์', 'ค่ากิ่งตอน', 'ค่าถุงห่อผลไม้',
];

export default function Finance() {
  const [tab, setTab] = useState<'all' | 'income' | 'expense'>('all');
  const [txns, setTxns] = useState(SEED);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ title: '', detail: '', amount: '', type: 'income' as 'income'|'expense', billPreview: '' });
  const [editingId, setEditingId] = useState<number | null>(null);
  const [viewMonth, setViewMonth] = useState(M);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [viewYear, setViewYear] = useState(Y);

  React.useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [showModal]);

  const handleMonthChange = (val: string) => {
    const [m, y] = val.split('-').map(Number);
    setViewMonth(m); setViewYear(y);
  };
  const monthVal = `${viewMonth}-${viewYear}`;

  // Filter by month, then tab
  const monthTxns = txns.filter(t => t.month === viewMonth && t.year === viewYear);
  const filtered = monthTxns
    .filter(t => tab === 'all' ? true : tab === 'income' ? t.amount > 0 : t.amount < 0);

  const totalIncome = txns.filter(t => t.amount > 0).reduce((s, t) => s + t.amount, 0);
  const totalExpense = txns.filter(t => t.amount < 0).reduce((s, t) => s + Math.abs(t.amount), 0);
  const balance = totalIncome - totalExpense;

  const dateLabel = (t: Txn) => {
    const isToday = t.day === NOW.getDate() && t.month === M && t.year === Y;
    return isToday ? 'วันนี้' : `${t.day} ${SHORT_M[t.month]} ${t.year + 543}`;
  };
  const grouped = filtered.reduce<Record<string, Txn[]>>((acc, t) => {
    const k = dateLabel(t); (acc[k] ??= []).push(t); return acc;
  }, {});

  const saveTxn = () => {
    if (!form.title || !form.amount) return;
    const isIncome = form.type === 'income';
    const amt = isIncome ? Math.abs(+form.amount) : -Math.abs(+form.amount);
    const smart = getSmartIcon(form.title, amt);
    
    if (editingId) {
      setTxns(prev => prev.map(t => t.id === editingId ? {
        ...t,
        title: form.title,
        category: form.detail || (isIncome ? 'รายรับ' : 'รายจ่าย'),
        amount: amt,
        method: form.billPreview ? 'สลิป/บิล' : 'ไม่ระบุ',
        icon: smart.icon,
        iconBg: smart.bg,
        iconColor: smart.color,
        billPreview: form.billPreview
      } : t));
    } else {
      setTxns(prev => [{
        id: Date.now(), title: form.title, category: form.detail || (isIncome ? 'รายรับ' : 'รายจ่าย'),
        time: new Date().toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' }),
        amount: amt, method: form.billPreview ? 'สลิป/บิล' : 'ไม่ระบุ',
        icon: smart.icon,
        iconBg: smart.bg,
        iconColor: smart.color,
        day: NOW.getDate(), month: viewMonth, year: viewYear,
        billPreview: form.billPreview
      }, ...prev]);
    }
    closeModal();
  };

  const openEditModal = (t: Txn) => {
    setEditingId(t.id);
    setForm({
      title: t.title,
      detail: t.category === 'รายรับ' || t.category === 'รายจ่าย' ? '' : t.category,
      amount: Math.abs(t.amount).toString(),
      type: t.amount > 0 ? 'income' : 'expense',
      billPreview: t.billPreview || ''
    });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingId(null);
    setForm({ title: '', detail: '', amount: '', type: 'income', billPreview: '' });
  };

  const handleBillUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => setForm(f => ({ ...f, billPreview: ev.target?.result as string }));
    reader.readAsDataURL(file);
  };

  const deleteTxn = (id: number) => setTxns(prev => prev.filter(t => t.id !== id));

  const fmt = (n: number) => n.toLocaleString('th-TH');

  const TABS: { key: 'all' | 'income' | 'expense'; label: string }[] = [
    { key: 'all', label: 'ทั้งหมด' },
    { key: 'income', label: 'รายรับ' },
    { key: 'expense', label: 'รายจ่าย' },
  ];

  const chartData = [
    { label: 'มิ.ย.', income: 82, expense: 35 },
    { label: 'ก.ค.', income: 65, expense: 42 },
    { label: 'ส.ค.', income: 91, expense: 28 },
    { label: 'ก.ย.', income: 74, expense: 55 },
    { label: 'ต.ค.', income: Math.round(totalIncome / 680), expense: Math.round(totalExpense / 680) },
  ];

  const expCat = [
    { label: 'วัสดุการเกษตร', amt: txns.filter(t => t.category === 'วัสดุการเกษตร').reduce((s, t) => s + Math.abs(t.amount), 0) },
    { label: 'แรงงาน', amt: txns.filter(t => t.category === 'แรงงาน').reduce((s, t) => s + Math.abs(t.amount), 0) },
    { label: 'โลจิสติกส์', amt: txns.filter(t => t.category === 'โลจิสติกส์').reduce((s, t) => s + Math.abs(t.amount), 0) },
  ];
  const expTotal = expCat.reduce((s, c) => s + c.amt, 0) || 1;
  const catColors = ['bg-amber-400', 'bg-sky-400', 'bg-violet-400'];

  return (
    <>
      {/* Add/Edit Transaction Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[200] flex items-end lg:items-center justify-center bg-black/40 backdrop-blur-sm" onClick={closeModal}>
          <div className="bg-white w-full lg:max-w-md rounded-t-3xl lg:rounded-3xl p-6 shadow-2xl max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-xl font-bold font-kanit text-[#1a1c1b]">{editingId ? 'แก้ไขรายการ' : 'บันทึกรายการใหม่'}</h2>
              <button onClick={closeModal} className="p-2 rounded-xl hover:bg-zinc-100"><span className="material-symbols-outlined text-zinc-500">close</span></button>
            </div>
            <div className="space-y-5">
              {/* Income / Expense Toggle */}
              <div className="grid grid-cols-2 gap-2 p-1 bg-[#eeeeeb] rounded-2xl">
                <button type="button" onClick={() => setForm(f => ({ ...f, type: 'income' }))}
                  className={`py-3 rounded-xl text-sm font-bold font-kanit flex items-center justify-center gap-2 transition-all ${form.type === 'income' ? 'bg-emerald-600 text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-700'}`}>
                  <span className="material-symbols-outlined text-[20px]">arrow_downward</span>รายรับ
                </button>
                <button type="button" onClick={() => setForm(f => ({ ...f, type: 'expense' }))}
                  className={`py-3 rounded-xl text-sm font-bold font-kanit flex items-center justify-center gap-2 transition-all ${form.type === 'expense' ? 'bg-orange-600 text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-700'}`}>
                  <span className="material-symbols-outlined text-[20px]">arrow_upward</span>รายจ่าย
                </button>
              </div>

              {/* Title with Autocomplete */}
              <div className="relative">
                <label className="block text-sm font-semibold font-kanit text-[#42493e] mb-1.5">หัวข้อรายการ *</label>
                <input
                  className="w-full border border-zinc-200 rounded-xl px-4 py-3.5 text-lg font-semibold font-kanit focus:ring-2 focus:ring-[#154212] focus:outline-none placeholder:text-zinc-300 placeholder:font-normal"
                  placeholder={form.type === 'income' ? 'เช่น ขายทุเรียนหมอนทอง' : 'เช่น ซื้อปุ๋ยอินทรีย์'}
                  value={form.title}
                  onChange={e => { setForm(f => ({ ...f, title: e.target.value })); setShowSuggestions(true); }}
                  onFocus={() => setShowSuggestions(true)}
                  onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                  autoComplete="off"
                />
                {/* Suggestions Dropdown */}
                {showSuggestions && form.title.length >= 1 && (() => {
                  const base = form.type === 'income' ? SUGGESTIONS_INCOME : SUGGESTIONS_EXPENSE;
                  const pastTitles = txns.map(t => t.title);
                  const all = [...new Set([...base, ...pastTitles])];
                  const matches = all.filter(s => s.toLowerCase().includes(form.title.toLowerCase()) && s !== form.title).slice(0, 5);
                  if (matches.length === 0) return null;
                  return (
                    <div className="absolute left-0 right-0 top-full mt-1 bg-white border border-zinc-200 rounded-xl shadow-lg z-10 overflow-hidden">
                      {matches.map((s, i) => (
                        <button key={i} type="button"
                          onMouseDown={() => { setForm(f => ({ ...f, title: s })); setShowSuggestions(false); }}
                          className="w-full text-left px-4 py-2.5 text-sm font-kanit text-[#1a1c1b] hover:bg-emerald-50 transition-colors flex items-center gap-2">
                          <span className="material-symbols-outlined text-[16px] text-zinc-400">search</span>
                          {s}
                        </button>
                      ))}
                    </div>
                  );
                })()}
              </div>

              {/* Detail */}
              <div>
                <label className="block text-sm font-semibold font-kanit text-[#42493e] mb-1.5">รายละเอียด</label>
                <textarea className="w-full border border-zinc-200 rounded-xl px-4 py-3 text-base font-kanit focus:ring-2 focus:ring-[#154212] focus:outline-none resize-none placeholder:text-zinc-300" rows={2} placeholder="รายละเอียดเพิ่มเติม เช่น ขายให้ลูกค้าประจำ, สูตรปุ๋ย 15-15-15" value={form.detail} onChange={e => setForm(f => ({ ...f, detail: e.target.value }))} />
              </div>

              {/* Amount */}
              <div>
                <label className="block text-sm font-semibold font-kanit text-[#42493e] mb-1.5">จำนวนเงิน *</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg font-semibold font-kanit text-zinc-400">฿</span>
                  <input 
                    className="w-full border border-zinc-200 rounded-xl pl-10 pr-4 py-3.5 text-2xl font-bold font-kanit focus:ring-2 focus:ring-[#154212] focus:outline-none placeholder:text-zinc-300 placeholder:font-normal placeholder:text-base" 
                    placeholder="0" 
                    type="text" 
                    inputMode="decimal"
                    value={form.amount} 
                    onChange={e => {
                      const val = e.target.value;
                      if (val === '' || /^\d*\.?\d*$/.test(val)) {
                        setForm(f => ({ ...f, amount: val }));
                      }
                    }} 
                  />
                </div>
              </div>

              {/* Bill / Slip Upload */}
              <div>
                <label className="block text-sm font-semibold font-kanit text-[#42493e] mb-1.5">แนบสลิป / บิลเงินสด</label>
                {form.billPreview ? (
                  <div className="relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={form.billPreview} alt="สลิป/บิล" className="w-full max-h-48 object-contain rounded-xl border border-zinc-200 bg-zinc-50" />
                    <button type="button" onClick={() => setForm(f => ({ ...f, billPreview: '' }))} className="absolute top-2 right-2 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-red-500 shadow-sm hover:bg-red-50 transition-colors">
                      <span className="material-symbols-outlined text-[18px]">close</span>
                    </button>
                  </div>
                ) : (
                  <label className="border-2 border-dashed border-zinc-300 rounded-xl p-5 flex flex-col items-center gap-2 cursor-pointer hover:bg-zinc-50 hover:border-emerald-400 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-[#eeeeeb] flex items-center justify-center">
                      <span className="material-symbols-outlined text-2xl text-[#42493e]">add_a_photo</span>
                    </div>
                    <span className="text-sm font-kanit text-zinc-500">แตะเพื่อถ่ายรูปสลิป หรือเลือกรูป</span>
                    <span className="text-[11px] font-kanit text-zinc-400">JPG, PNG — ไม่เกิน 5MB</span>
                    <input type="file" accept="image/*" className="hidden" onChange={handleBillUpload} />
                  </label>
                )}
              </div>

              {/* Submit */}
              <button onClick={saveTxn} disabled={!form.title || !form.amount}
                className={`w-full py-4 rounded-2xl font-bold font-kanit flex items-center justify-center gap-2 transition-all active:scale-[0.98] disabled:opacity-50 shadow-lg shadow-slate-900/10 bg-slate-900 hover:bg-emerald-800 text-white`}>
                <span className="material-symbols-outlined text-[20px]">{editingId ? 'save' : 'add_circle'}</span>
                {editingId ? 'บันทึกการแก้ไข' : (form.type === 'income' ? 'บันทึกรายรับ' : 'บันทึกรายจ่าย')}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Header */}
      <header className="hidden lg:flex items-center justify-between px-8 py-6 border-b border-zinc-100 bg-white sticky top-0 z-30">
        <div>
          <h1 className="text-2xl font-bold text-[#1a1c1b] tracking-tight">สรุปบัญชีรายรับ-รายจ่าย</h1>
          <p className="text-sm text-slate-700 font-black mt-0.5">ยอดคงเหลือ ฿{fmt(balance)}</p>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={() => setShowModal(true)} className="px-4 py-2 bg-slate-900 text-white text-sm font-bold rounded-xl hover:bg-emerald-800 transition-all active:scale-95 shadow-lg shadow-slate-900/10 flex items-center gap-2 cursor-pointer">
            <span className="material-symbols-outlined text-[18px]">add</span>บันทึกรายการ
          </button>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 w-full z-[100] bg-white border-b border-zinc-100 shadow-sm flex justify-between items-center px-6 h-16">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-emerald-600">eco</span>
          <span className="text-xl font-bold text-emerald-700 tracking-tight font-kanit">OrchardPro</span>
        </div>
        <Link href="/account" className="w-10 h-10 rounded-full bg-[#eeeeeb] flex items-center justify-center border border-[#c2c9bb]">
          <span className="material-symbols-outlined text-zinc-500">account_circle</span>
        </Link>
      </header>

      <main className="lg:px-8 lg:py-6 lg:max-w-7xl lg:mx-auto pt-20 pb-32 px-6 max-w-2xl mx-auto overflow-x-hidden">
        <div className="lg:hidden mb-4">
          <h1 className="text-3xl font-semibold font-kanit text-[#1a1c1b] mb-3">สรุปบัญชีรายรับ-รายจ่าย</h1>
        </div>

        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Summary Cards */}
            <div className="grid grid-cols-2 gap-4">
              {/* Balance Card */}
              <div className="col-span-2 p-6 md:p-8 rounded-[24px] bg-gradient-to-br from-[#154212] via-[#1a4a16] to-[#0c2e0a] text-white shadow-[0_8px_30px_rgba(21,66,18,0.2)] relative overflow-hidden group">
                {/* Decorative Elements */}
                <div className="absolute -right-10 -top-10 w-48 h-48 bg-emerald-400/20 rounded-full blur-3xl group-hover:bg-emerald-400/30 transition-all duration-700"></div>
                <div className="absolute -left-10 -bottom-10 w-48 h-48 bg-emerald-600/30 rounded-full blur-3xl"></div>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>
                
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2 bg-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-md border border-white/10 shadow-sm">
                      <span className="material-symbols-outlined text-[16px] text-emerald-300">account_balance_wallet</span>
                      <span className="text-xs font-medium font-kanit text-emerald-50">ยอดคงเหลือสุทธิ</span>
                    </div>
                    <button className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors border border-white/5">
                      <span className="material-symbols-outlined text-[18px] text-emerald-100">more_horiz</span>
                    </button>
                  </div>
                  
                  <div>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-emerald-300 text-2xl md:text-3xl font-semibold font-kanit">฿</span>
                      <h2 className="text-4xl md:text-5xl font-bold font-kanit tracking-tight text-white drop-shadow-sm truncate" title={fmt(balance)}>{fmt(balance)}</h2>
                    </div>
                    <div className="mt-4 flex items-center gap-2 text-emerald-100/80 text-xs font-medium font-kanit">
                      <span className={`flex items-center justify-center w-5 h-5 rounded-full ${balance >= 0 ? 'bg-emerald-500/20 text-emerald-300' : 'bg-red-500/20 text-red-300'}`}>
                        <span className="material-symbols-outlined text-[12px]">{balance >= 0 ? 'trending_up' : 'trending_down'}</span>
                      </span>
                      <span>สรุปยอดทั้งหมดในระบบ</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Income Card */}
              <div className="p-5 rounded-[24px] bg-white border border-zinc-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between min-h-[130px] group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-emerald-50/80 to-transparent rounded-bl-[64px] opacity-50 group-hover:scale-110 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100/60 flex items-center justify-center mb-3 shadow-inner border border-emerald-100/50">
                    <span className="material-symbols-outlined text-emerald-600 text-[20px]">arrow_downward</span>
                  </div>
                  <p className="text-[11px] font-semibold font-kanit text-zinc-500 mb-1 uppercase tracking-wider">รายรับทั้งหมด</p>
                </div>
                <div className="relative z-10 flex items-baseline gap-1 mt-1">
                  <span className="text-emerald-600 font-bold font-kanit text-sm">฿</span>
                  <p className="text-xl sm:text-2xl font-bold font-kanit text-zinc-800 truncate" title={fmt(totalIncome)}>{fmt(totalIncome)}</p>
                </div>
              </div>

              {/* Expense Card */}
              <div className="p-5 rounded-[24px] bg-white border border-zinc-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between min-h-[130px] group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-50/80 to-transparent rounded-bl-[64px] opacity-50 group-hover:scale-110 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100/60 flex items-center justify-center mb-3 shadow-inner border border-orange-100/50">
                    <span className="material-symbols-outlined text-orange-600 text-[20px]">arrow_upward</span>
                  </div>
                  <p className="text-[11px] font-semibold font-kanit text-zinc-500 mb-1 uppercase tracking-wider">รายจ่ายทั้งหมด</p>
                </div>
                <div className="relative z-10 flex items-baseline gap-1 mt-1">
                  <span className="text-orange-600 font-bold font-kanit text-sm">฿</span>
                  <p className="text-xl sm:text-2xl font-bold font-kanit text-zinc-800 truncate" title={fmt(totalExpense)}>{fmt(totalExpense)}</p>
                </div>
              </div>
            </div>

            {/* Tabs and Month Picker */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-2">
              {/* Segmented Control Tabs */}
              <div className="inline-flex p-1 bg-zinc-100/80 backdrop-blur-sm rounded-2xl w-full sm:w-auto">
                {TABS.map(t => {
                  const isActive = tab === t.key;
                  return (
                    <button
                      key={t.key}
                      onClick={() => setTab(t.key)}
                      className={`flex-1 sm:flex-none px-6 py-2.5 text-sm font-semibold font-kanit rounded-[14px] transition-all duration-200 whitespace-nowrap ${
                        isActive 
                          ? 'bg-white text-emerald-700 shadow-sm' 
                          : 'text-zinc-500 hover:text-zinc-800'
                      }`}
                    >
                      {t.label}
                    </button>
                  );
                })}
              </div>
              
              {/* Month Dropdown - Refined */}
              <div className="relative min-w-[180px]">
                <select 
                  value={monthVal} 
                  onChange={e => handleMonthChange(e.target.value)}
                  className="w-full appearance-none bg-white border border-zinc-200 rounded-2xl pl-10 pr-10 py-3 text-sm font-semibold font-kanit text-[#1a1c1b] cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all shadow-sm hover:border-zinc-300"
                >
                  {MONTH_OPTIONS.map(o => (
                    <option key={`${o.month}-${o.year}`} value={`${o.month}-${o.year}`}>{o.label}</option>
                  ))}
                </select>
                <div className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none flex items-center">
                  <span className="material-symbols-outlined text-[20px] text-emerald-600">calendar_month</span>
                </div>
                <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none flex items-center">
                  <span className="material-symbols-outlined text-[18px] text-zinc-400">unfold_more</span>
                </div>
              </div>
            </div>



            {/* Transaction List */}
            <div className="space-y-4">
              {Object.keys(grouped).length === 0 && (
                <div className="text-center py-12 text-slate-600">
                  <span className="material-symbols-outlined text-5xl">receipt_long</span>
                  <p className="mt-2 font-kanit text-sm font-black">ไม่มีรายการ</p>
                </div>
              )}
              {Object.entries(grouped).map(([date, items]) => (
                <div key={date}>
                  <h3 className="text-xs font-semibold font-kanit text-[#42493e] uppercase tracking-wider mb-3">{date}</h3>
                  <div className="space-y-3">
                    {items.map(txn => (
                      <div key={txn.id} onClick={() => openEditModal(txn)} className="flex items-center p-4 bg-white rounded-2xl border border-zinc-100 shadow-sm hover:bg-zinc-50 transition-colors group cursor-pointer">
                        <div className={`w-12 h-12 rounded-2xl shadow-sm border border-white flex items-center justify-center mr-4 shrink-0 ${txn.iconBg}`}>
                          <span className={`material-symbols-outlined text-[24px] ${txn.iconColor}`}>{txn.icon}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-base font-semibold font-kanit text-[#1a1c1b] truncate">{txn.title}</h4>
                          <p className="text-xs font-kanit text-[#42493e]">{txn.time} น.</p>
                        </div>
                        <div className="text-right flex items-center gap-2">
                          <div className="flex flex-col items-end gap-1">
                            <p className={`text-base font-bold font-kanit whitespace-nowrap ${txn.amount > 0 ? 'text-emerald-600' : 'text-orange-600'}`}>
                              {txn.amount > 0 ? '+' : ''}฿{fmt(Math.abs(txn.amount))}
                            </p>
                            <div className="flex items-center gap-1.5">
                              <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold font-kanit ${txn.amount > 0 ? 'bg-emerald-100 text-emerald-800' : 'bg-zinc-100 text-zinc-600'}`}>{txn.method}</span>
                              {txn.billPreview && (
                                <span className="material-symbols-outlined text-[14px] text-emerald-600 bg-emerald-50 p-0.5 rounded shadow-sm" title="มีแนบสลิป/บิล">receipt_long</span>
                              )}
                            </div>
                          </div>
                          <button onClick={(e) => { e.stopPropagation(); deleteTxn(txn.id); }} className="opacity-0 group-hover:opacity-100 p-1.5 rounded-lg hover:bg-red-50 text-red-400 hover:text-red-600 transition-all" aria-label="ลบรายการ">
                            <span className="material-symbols-outlined text-[18px]">delete</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Chart Panel (desktop) */}
          <div className="hidden lg:block">
            <div className="bg-white rounded-[24px] border border-zinc-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] p-6 sticky top-[88px] overflow-hidden relative">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-50/50 rounded-full blur-3xl -z-10 pointer-events-none"></div>
              
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-lg font-bold font-kanit text-zinc-800">ภาพรวมการเงิน</h3>
                  <p className="text-xs font-kanit text-zinc-500 mt-0.5">สถิติย้อนหลัง 5 เดือน</p>
                </div>
                <div className="w-10 h-10 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-400 shadow-inner">
                  <span className="material-symbols-outlined text-[20px]">bar_chart</span>
                </div>
              </div>

              <div className="space-y-4">
                {chartData.map(m => (
                  <div key={m.label} className="group">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-semibold font-kanit text-zinc-500 group-hover:text-emerald-700 transition-colors">{m.label}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 space-y-1.5">
                        <div className="h-2.5 rounded-full bg-zinc-100/80 overflow-hidden relative">
                          <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full transition-all duration-700 ease-out" style={{ width: `${Math.min(m.income, 100)}%` }}></div>
                        </div>
                        <div className="h-2.5 rounded-full bg-zinc-100/80 overflow-hidden relative">
                          <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-orange-400 to-orange-500 rounded-full transition-all duration-700 ease-out" style={{ width: `${Math.min(m.expense, 100)}%` }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex gap-4 mt-7 pt-5 border-t border-zinc-100/80">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-500 shadow-sm"></span> 
                  <span className="text-xs font-semibold font-kanit text-zinc-600">รายรับ</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 shadow-sm"></span> 
                  <span className="text-xs font-semibold font-kanit text-zinc-600">รายจ่าย</span>
                </div>
              </div>

              <div className="mt-6">
                <button onClick={() => setShowModal(true)} className="w-full py-3.5 rounded-xl bg-slate-900 text-white text-sm font-bold font-kanit hover:bg-emerald-800 transition-all shadow-lg shadow-slate-900/10 flex items-center justify-center gap-2 group cursor-pointer">
                  <span className="material-symbols-outlined text-[20px] group-hover:scale-110 transition-transform">add_circle</span>
                  บันทึกรายการใหม่
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* FAB */}
      <button onClick={() => setShowModal(true)} className="fixed bottom-24 right-6 lg:bottom-8 lg:right-8 w-14 h-14 bg-slate-900 text-white rounded-2xl shadow-2xl shadow-slate-900/30 flex items-center justify-center active:scale-90 transition-transform z-40 hover:bg-emerald-800 cursor-pointer">
        <span className="material-symbols-outlined text-3xl font-black">add</span>
      </button>

      <BottomNavBar />
    </>
  );
}
