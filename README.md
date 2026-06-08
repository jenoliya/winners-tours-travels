# Winner Tours — South India Travel & Booking Platform

A production-ready travel booking frontend for **Winner Tours**, a Coimbatore-based premium tour operator offering chauffeur-driven packages across Ooty, Munnar, Valparai, Kodaikanal, and Coimbatore. Built with React + TypeScript + Tailwind CSS, managed with pnpm.

---

## Table of Contents

- [Architecture Overview](#architecture-overview)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Project Structure](#project-structure)
- [Quick Start](#quick-start)
- [Available Scripts](#available-scripts)
- [Pages & Routes](#pages--routes)
- [Booking Flow](#booking-flow)
- [Component Breakdown](#component-breakdown)
- [Data & Mock API](#data--mock-api)
- [Image Strategy](#image-strategy)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)

---

## Architecture Overview

```
Browser
  │
  ▼
React SPA (Create React App)
  ├── React Router DOM v7     ──► Client-side routing (13 routes)
  ├── Tailwind CSS v3         ──► Utility-first styling + custom design tokens
  ├── Lucide React            ──► Icon system
  └── TypeScript              ──► Full type safety across all components

State Management
  ├── Local component state (useState)        ──► UI interactions
  ├── React Router location.state            ──► Booking flow data passing
  └── useBooking hook                         ──► Booking data aggregation

Data Layer
  └── src/data/index.ts       ──► Static mock data (packages, destinations,
                                   vehicles, testimonials, gallery, FAQs)
```

**No backend, no authentication, no payment gateway** — this is a fully static frontend.
All booking data is passed between pages via React Router's `location.state`.

---

## Tech Stack

| Layer            | Technology                              |
| ---------------- | --------------------------------------- |
| UI Framework     | React 19, TypeScript 4.9                |
| Routing          | React Router DOM 7                      |
| Styling          | Tailwind CSS 3 + custom design tokens   |
| Icons            | Lucide React                            |
| Package Manager  | pnpm 11                                 |
| Build Tool       | Create React App (react-scripts 5)      |
| Fonts            | Sora (display) + DM Sans (body) — CDN  |
| Images           | Unsplash CDN (direct hotlink, no API)   |

---

## Prerequisites

- Node.js >= 18
- pnpm >= 8

Install pnpm if you don't have it:

```bash
npm install -g pnpm
# or
corepack enable && corepack prepare pnpm@latest --activate
```

---

## Project Structure

```
.
├── src/
│   ├── assets/                        # Static assets
│   │
│   ├── components/
│   │   ├── common/
│   │   │   ├── FloatingActions.tsx    # Fixed WhatsApp + Call buttons
│   │   │   ├── PageHero.tsx           # Reusable page banner with overlay
│   │   │   ├── SectionHeader.tsx      # Eyebrow + title + subtitle pattern
│   │   │   └── StarRating.tsx         # Star rating display component
│   │   │
│   │   ├── layout/
│   │   │   ├── Navbar.tsx             # Sticky nav with mobile drawer
│   │   │   └── Footer.tsx             # 4-column footer with links
│   │   │
│   │   ├── package/
│   │   │   ├── PackageCard.tsx        # Vertical + horizontal card variants
│   │   │   └── VehicleCard.tsx        # Fleet vehicle card
│   │   │
│   │   ├── booking/
│   │   │   └── BookingSummary.tsx     # Sidebar summary with fare breakdown
│   │   │
│   │   └── gallery/
│   │       ├── DestinationCard.tsx    # Hover destination card with overlay
│   │       └── TestimonialCard.tsx    # Light + dark variant review card
│   │
│   ├── pages/
│   │   ├── Home.tsx                   # Hero, destinations, packages, fleet, gallery, CTA
│   │   ├── About.tsx                  # Story, stats, values, timeline, team
│   │   ├── Packages.tsx               # Filterable package listing
│   │   ├── PackageDetail.tsx          # Accordion itinerary + booking widget
│   │   ├── Destinations.tsx           # Alternating layout destination showcase
│   │   ├── Fleet.tsx                  # Vehicle grid + driver excellence
│   │   ├── Gallery.tsx                # Category-filtered bento grid
│   │   ├── Testimonials.tsx           # Review cards + rating summary
│   │   ├── Contact.tsx                # Contact cards, hours, map, FAQ
│   │   ├── Booking.tsx                # Traveller info form + vehicle selector
│   │   ├── Checkout.tsx               # Payment method selection + confirmation
│   │   ├── BookingSuccess.tsx         # Booking confirmed + next steps
│   │   └── NotFound.tsx               # 404 page
│   │
│   ├── routes/
│   │   └── AppRouter.tsx              # All routes with lazy loading + Suspense
│   │
│   ├── hooks/
│   │   └── useBooking.ts              # Booking state + service fee calculation
│   │
│   ├── types/
│   │   └── index.ts                   # TypeScript interfaces for all entities
│   │
│   ├── data/
│   │   └── index.ts                   # Mock data: packages, destinations,
│   │                                  #   vehicles, testimonials, gallery, FAQs
│   │
│   ├── utils/
│   │   └── index.ts                   # formatCurrency, formatDate, generateBookingId
│   │
│   └── constants/
│       └── index.ts                   # NAV_LINKS, COMPANY_INFO, SERVICE_FEE_RATE
│
├── public/                            # CRA public folder
├── package.json
├── pnpm-lock.yaml                     # Exact dependency versions (commit this)
├── pnpm-workspace.yaml                # pnpm config + allowBuilds
├── tailwind.config.js                 # Custom colors, fonts, spacing tokens
├── tsconfig.json
├── .npmrc                             # engine-strict=true (enforces pnpm)
└── .nvmrc                             # Node 18 pin
```

---

## Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/jenoliya/winner-tours.git
cd winner-tours

# 2. Install dependencies
pnpm install

# 3. Start the development server
pnpm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Available Scripts

```bash
pnpm start        # Start dev server with hot reload (port 3000)
pnpm build        # Production build → /build (optimised, code-split)
pnpm test         # Run test suite
```

---

## Pages & Routes

| Route                | Page              | Description                                              |
| -------------------- | ----------------- | -------------------------------------------------------- |
| `/`                  | Home              | Hero search, destinations, featured packages, fleet, gallery, CTA |
| `/about`             | About             | Company story, team, milestones, values                  |
| `/packages`          | Packages          | All packages with search + duration + destination filter |
| `/packages/:slug`    | Package Detail    | Full itinerary accordion, inclusions, booking widget     |
| `/destinations`      | Destinations      | All 6 destinations with highlights and alternating layout |
| `/fleet`             | Fleet             | 5 vehicle types with features and pricing                |
| `/gallery`           | Gallery           | Photo grid with category filter (Landscapes, Wildlife, Spiritual, Culture) |
| `/testimonials`      | Testimonials      | Customer reviews with rating summary                     |
| `/contact`           | Contact           | Contact cards, office hours, map, FAQ accordion          |
| `/booking`           | Traveller Info    | Guest details form + vehicle selection                   |
| `/checkout`          | Checkout          | Payment method selection + order confirmation            |
| `/booking-success`   | Booking Success   | Confirmation with booking ID and next steps              |
| `*`                  | 404               | Not found page                                           |

---

## Booking Flow

```
Package Detail  ──► /booking  ──► /checkout  ──► /booking-success
     │               │               │                │
  Select pkg      Fill guest       Choose           Booking ID
  + date          details +        payment          generated
  + guests        vehicle          method           locally
                     │
                  location.state passes
                  BookingDetails through
                  each step
```

Data is passed between steps using React Router's `location.state` — no global state manager needed. A `generateBookingId()` util creates a unique `WT-XXXXXXXX` reference on confirmation.

**Service fee** is calculated as 8% of the base package price, added at the booking step.

---

## Component Breakdown

### PackageCard

Two variants controlled by the `horizontal` prop:

```tsx
// Vertical card (3-column grid on Packages page)
<PackageCard pkg={pkg} />

// Horizontal card (2-column grid on Home page)
<PackageCard pkg={pkg} horizontal />
```

### PageHero

Reusable full-width banner used on every non-home page:

```tsx
<PageHero
  title="Our Fleet"
  subtitle="Premium vehicles for every journey."
  image="https://images.unsplash.com/photo-XXXXXXX?w=1600&q=80"
  height="h-80 md:h-96"   // optional, default: "h-80 md:h-96"
/>
```

### TestimonialCard

Supports light (white glass) and dark (translucent blue) variants:

```tsx
<TestimonialCard testimonial={t} variant="light" />   // used on Testimonials page
<TestimonialCard testimonial={t} variant="dark" />    // was used on Home page dark section
```

---

## Data & Mock API

All data lives in `src/data/index.ts`. No backend calls are made.

### Packages (6 total)

| Slug                    | Destination              | Duration      | Price     |
| ----------------------- | ------------------------ | ------------- | --------- |
| `nilgiris-escape`       | Ooty & Coonoor           | 3D / 2N       | ₹12,499   |
| `munnar-mist`           | Munnar & Thekkady        | 4D / 3N       | ₹15,999   |
| `valparai-wilderness`   | Valparai & Pollachi      | 2D / 1N       | ₹7,999    |
| `kodaikanal-adventure`  | Kodaikanal               | 3D / 2N       | ₹11,499   |
| `coimbatore-city-tour`  | Coimbatore               | 1 Day         | ₹2,999    |
| `south-india-grand-tour`| Ooty, Munnar & Thekkady  | 7D / 6N       | ₹34,999   |

### Destinations (6 total)

Ooty · Munnar · Valparai · Coimbatore · Coonoor · Kodaikanal

### Vehicles (5 total)

Innova Crysta · Premium Sedan · Luxury SUV · Tempo Traveller · Luxury Mini Bus

---

## Image Strategy

All images are served directly from the **Unsplash CDN** — no API key required.

```
https://images.unsplash.com/photo-{PHOTO_ID}?w=800&q=80
```

**Recommended sizes by usage:**

| Usage                    | Width  | Quality |
| ------------------------ | ------ | ------- |
| Full-width hero / banner | `1920` | `85`    |
| Page hero                | `1600` | `80`    |
| Package / section card   | `800`  | `80`    |
| Thumbnail                | `400`  | `75`    |

**To replace any image:**
1. Find a photo on [unsplash.com](https://unsplash.com)
2. Copy the photo ID from the URL: `unsplash.com/photos/some-title-{PHOTO_ID}`
3. Replace the ID in `src/data/index.ts` or the relevant page file

---

## Environment Variables

This project has no required environment variables — it is fully static with no backend calls.

If you extend it with a real backend or Unsplash API:

| Variable                  | Description                        | Default  |
| ------------------------- | ---------------------------------- | -------- |
| `REACT_APP_API_BASE_URL`  | Backend API base URL               | —        |
| `REACT_APP_UNSPLASH_KEY`  | Unsplash API access key (optional) | —        |

Add these to a `.env` file at the project root (never commit `.env`).

---

## Deployment

```bash
# Build for production
pnpm build

# The /build folder is a fully static site.
# Deploy to any static host:

# Netlify (drag and drop /build folder, or connect GitHub repo)
# Vercel   → vercel deploy
# GitHub Pages → deploy /build contents to gh-pages branch
```

**Netlify one-click config** — add a `netlify.toml` at the root:

```toml
[build]
  command   = "pnpm build"
  publish   = "build"

[[redirects]]
  from   = "/*"
  to     = "/index.html"
  status = 200
```

The `[[redirects]]` rule is required for React Router client-side routing to work on direct URL access.

---

## License

© 2024 Winner Tours and Travels, Coimbatore. All rights reserved.