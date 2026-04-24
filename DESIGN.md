# Design System: Smart Orchard Manager (Modernized)
**Version:** 2.0 (Glassmorphic Refresh)

## 1. Visual Theme & Atmosphere
The brand identity has evolved into **"Glassmorphic Precision."** It blends high-tech agricultural monitoring with a premium, tactile aesthetic. The UI feels "airy" yet grounded, using transparency and depth to create a modern management environment.

* **Style:** High-end Glassmorphism (Backdrop Blurs, White Borders, Soft Shadows).
* **Atmosphere:** Fresh, Professional, Responsive, and Premium.

## 2. Core Theme Tokens (The "Unified Theme")
All pages MUST strictly follow these color and spacing tokens to ensure a unified theme.

* **Primary Action:** `Slate 900` (#0f172a)
* **Success/Action Hover:** `Emerald 800` (#065f46)
* **Background Gradient:** `Slate 50` -> `#f2f8f5` -> `Slate 100`
* **Card Surface:** `White/80` with `backdrop-blur-xl`
* **Accents:**
  - **Water:** `Sky 500`
  - **Fertilizer:** `Emerald 500`
  - **Pest Control:** `Rose 500`
  - **Harvest:** `Amber 500`

## 3. Typography Rules
* **Primary Font:** **Kanit** (Essential for Thai readability and modern premium feel).
* **Headlines:** `font-black text-slate-800 tracking-tight`.
* **Body/Inputs:** `font-bold text-slate-700`.
* **Metadata/Labels:** `font-black text-slate-400 uppercase tracking-widest text-xs`.

## 4. Component Standards
* **Containers (Standard Card):**
  - Radius: `rounded-[2rem]` (32px).
  - Background: `bg-white/80 backdrop-blur-xl`.
  - Border: `border border-white`.
  - Shadow: `shadow-[0_8px_30px_rgb(0,0,0,0.04)]`.
* **Primary Buttons (Header/Save):**
  - Header: `px-6 py-2.5 rounded-xl bg-slate-900 text-white font-bold hover:bg-emerald-800`.
  - Bottom Action: `py-6 rounded-[2rem] bg-slate-900 text-white font-black text-2xl hover:bg-emerald-800`.
* **Step Indicators:**
  - `size-8 bg-emerald-500 text-white rounded-xl shadow-lg shadow-emerald-500/20 flex items-center justify-center text-sm font-black`.
* **Form Inputs:**
  - `p-4 bg-slate-50/50 border border-slate-200/60 rounded-2xl focus:bg-white transition-all shadow-sm`.

## 5. Interaction Model
* **Hand Cursor:** Mandatory for all interactable elements (Buttons, Links, Selects, Labels).
* **Active Feedback:** `active:scale-95` on all primary actions.
* **Hover:** Subtle color transitions or scale increases (105% for icon tiles).
* **Dynamic Feedback:** Status badges must change color based on completion (Red -> Green).
