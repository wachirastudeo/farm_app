# Design System: Smart Orchard Manager
**Project ID:** projects/12798067312682401683

## 1. Visual Theme & Atmosphere
The brand personality is rooted in the intersection of organic growth and precision technology. It feels professional, reliable, and optimistic, evoking the feeling of a well-maintained orchard at sunrise. Designed for modern farm managers and field operators, it ensures clarity and efficiency under varying environmental conditions. 

The aesthetic blends **Minimalism** and **Tactile Modernism**, prioritizing heavy whitespace and card-based architecture to make complex agricultural data digestible. It's clean and "fresh," avoiding the cluttered industrial look common in legacy agricultural software in favor of a lifestyle-adjacent, high-end SaaS feel. 

To ensure outdoor readability, it uses a high-contrast light mode, with off-white surfaces to reduce glare in direct sunlight.

## 2. Color Palette & Roles
The palette is derived from the natural environment of an orchard.

* **Nature Green / Primary** (`#154212`): The primary brand anchor, representing vitality and health. Used for primary actions and maximum impact.
* **Nature Green Container** (`#2d5a27`): A softer green used for prominent containers and emphasized secondary elements.
* **Sunlight Yellow / Tertiary Container** (`#ffb51e`): Acts as a high-visibility accent for active states, alerts, warnings, and highlighting critical data.
* **Earth Brown / Secondary** (`#77574d`): Provides grounded stability. Used for secondary actions, outlines, and text.
* **Off-White Surface** (`#f9f9f6`): The default background surface, designed to reduce glare in direct sunlight while maintaining outdoor readability.
* **Deep Ink / On-Surface** (`#1a1c1b`): High-contrast text color used for maximum legibility against light backgrounds.
* **Error Red** (`#ba1a1a`): Used strictly for destructive actions or critical system errors.

## 3. Typography Rules
The system utilizes **Inter** across all typographic layers for its exceptional tall x-height and legibility on mobile screens, critical for field use.

* **Headlines** (e.g., `32px`/`24px` at `600` weight): Use a tighter line-height (`1.2` - `1.3`) and heavier weights to create strong visual hierarchy.
* **Body Text** (`16px`/`18px` at `400` weight): Set with generous leading (`1.5` - `1.6`) to prevent eye fatigue during long management sessions.
* **Labels & Metadata** (`12px`/`14px` at `500`/`600` weight): Utilize increased letter spacing (`0.02em` - `0.05em`) and medium weights to maintain clarity even at small sizes on ruggedized handheld devices.

## 4. Component Stylings
The shape language mirrors organic curves found in nature (fruits, leaves, rolling hills) using a **Large Radius** approach, making the UI feel approachable.

* **Buttons:** Standard buttons use an 8px (`0.5rem`) radius. Primary buttons are solid Nature Green with white text. Secondary buttons use a thick Earth Brown outline. All touch targets are a minimum of 48x48px for gloved hands. Specialized buttons or full-width mobile sheets use a "pill" style (`2rem+`).
* **Cards/Containers:** The core structure of the system. Cards use a 16px (`1rem`) radius, a soft 1px border (`#E0E0DB`), and a Level 1 shadow. They include a header area for icons and titles to allow quick scanning.
* **Chips:** Used for categorizing crops or status (e.g., "Ready for Harvest"). Chips use Sunlight Yellow for active states and soft Earth Brown for neutral states.
* **Inputs/Forms:** Large, rounded fields (`8px` radius) with Earth Brown labels. Focus states feature a 2px Nature Green border and a soft glow.
* **Icons:** Line-art style with a consistent 2px stroke weight and rounded terminals. Features farming-specific metaphors (e.g., stylized apple for "Yield").

## 5. Layout Principles & Elevation
Follows a **fluid grid** model optimized for mobile-first consumption.

* **Spacing:** A base 8px rhythm ensures consistency. Mobile views use a single-column layout with 24px side margins for a "breathable" feel that prevents accidental taps. Tablet/desktop views expand into a multi-column system (up to 12 columns) where card tiles reflow gracefully.
* **Elevation & Shadows:** Uses **Ambient Shadows** to create depth without visual noise (large blur radius, low opacity 8-12%, slight Nature Green tint).
  * **Level 0 (Base):** Off-white background surface.
  * **Level 1 (Cards):** Soft, diffused shadows lifting data containers.
  * **Level 2 (Modals):** Higher elevation with pronounced shadows for temporary states.
  * **Level 3 (FABs):** Highest elevation for primary actions, keeping them accessible for thumb navigation.
* **Mobile Navigation:** A mandatory bottom navigation bar uses high-contrast icons to keep primary management functions (Dashboard, Map, Tasks, Weather) within thumb's reach.
