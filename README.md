# TRIINDIA – Hotel Website Design

A modern, elegant hotel booking website inspired by the Sunrise Hotel design concept. Built with **React**, **TypeScript**, **Tailwind CSS**, **shadcn/ui**, and **Framer Motion**.

![TRIINDIA Hotels](https://img.shields.io/badge/TRIINDIA-Hotels-black?style=for-the-badge)

## Features

- **Responsive Design** – Looks great on desktop, tablet, and mobile
- **Smooth Animations** – Framer Motion scroll-triggered animations and transitions
- **shadcn/ui Components** – Button, Card, Badge, Sheet, Select, Input, Tabs, Dialog, Separator
- **Interactive Hotel Cards** – Hover image popup preview, like button, category filtering
- **Hero Video Background** – Full-screen video with glassmorphism search bar
- **Sticky Navigation** – Header with backdrop blur and scroll-aware styling
- **Mobile Sheet Drawer** – Slide-in navigation for mobile devices

## Tech Stack

- [Vite](https://vitejs.dev/) – Build tool
- [React 19](https://react.dev/) – UI library
- [TypeScript](https://www.typescriptlang.org/) – Type safety
- [Tailwind CSS v4](https://tailwindcss.com/) – Utility-first CSS
- [shadcn/ui](https://ui.shadcn.com/) – UI components
- [Framer Motion](https://www.framer.com/motion/) – Animations
- [Lucide React](https://lucide.dev/) – Icons

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
sunrise-hotel/
├── public/
│   ├── images/           # Hotel images
│   ├── hero.mp4          # Hero background video
│   └── triindia-logo.jpeg # Brand logo
├── src/
│   ├── components/
│   │   ├── ui/           # shadcn/ui components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── TrustSection.tsx
│   │   ├── RoomsSection.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## Hotel Listings

| Hotel | Location | Price/Night | Rating |
|-------|----------|-------------|--------|
| Ashram View Hotel | Rishikesh, India | ₹3,500 | 4.8 |
| J Residency Hotel | Delhi, India | ₹4,200 | 4.9 |
| Preet Palace | Amritsar, India | ₹2,800 | 4.7 |
| Samrat Residency | Jaipur, India | ₹3,900 | 4.8 |

## License

© 2026 TRIINDIA Hotels. All rights reserved.
