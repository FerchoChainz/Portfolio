# DESIGN SYSTEM & ANTI-SLOP SPECIFICATION

## 1. Identity & Core Principle
- **Subject**: Lázaro Estrada — Software Engineer & Full-Stack Developer (Guadalajara, MX).
- **Core Principle**: Craft and architectural rigor over hype. The portfolio is an engineering monograph, not a generic AI template.
- **Hero Integrity**: The Hero section (`src/sections/Hero.jsx`) is the anchor and visual benchmark. It must NOT be modified. All subsequent sections must harmonize with its palette, typography, and restraint.

---

## 2. Color Tokens (Eclipse & Cabernet Palette)
- **Background Deep**: `#000000` / `#141517` (Eclipse Dark)
- **Surface / Card**: `#1A1B1D` (Eclipse Slate)
- **Surface Elevated**: `#202226`
- **Primary Text**: `#F5EFEB` (Oyster Silk / Warm White)
- **Secondary Text**: `#9A8B80` (Muted Warm Grey)
- **Accent Primary**: `#C5B2A4` (Oyster Beige)
- **Accent Wine**: `#3E1A1C` (Cabernet Velvet)
- **Border Default**: `#837062` at 15–25% opacity
- **Subtle Scanline/Grain**: `bg-[radial-gradient(#ffffff_1px,transparent_1px)]` at 3.5% opacity

---

## 3. Typography Hierarchy
1. **Monospace / Typewriter (`font-typewriter`, `font-mono`)**:
   - Status indicators, terminal tags, code blocks, metrics, timestamps.
2. **Editorial Serif (`font-serif`)**:
   - Selective italicized accents on major headings (Playfair Display) for sophistication.
3. **Body & Interface (`font-sans` / Inter)**:
   - Clean, highly legible, calibrated line-height (`leading-relaxed`) for technical prose.

---

## 4. Anti-Slop Hard Gates & Seniority Rules
- **No Buzzword Salad**: Ban phrases like *"10x Delivery"*, *"Cognitive Velocity"*, *"AI-Augmented Pipeline"*, *"Revolutionary"*, *"Seamless"*.
- **No Fake Placeholders**: Ban fake countdown timers (*"Something big is coming"*, *"System deployment in progress"*). Every project card must showcase real code, real architecture, and verifiable GitHub links.
- **No Redundancy**: Do not duplicate the career timeline in both About and Experience. Each section has a singular, clear purpose.
- **Real Engineering Depth**: Detail the *problem*, *architectural decisions*, *tech stack*, and *measurable outcome* for every featured work.
- **Purposeful Motion**: Micro-interactions provide tactile feedback; no gratuitous bouncing, full-page neon glows, or endless spinning animations.
