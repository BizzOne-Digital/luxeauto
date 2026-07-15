# Luxe Auto Accessories

Premium automotive accessories marketing site — Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, MongoDB/Mongoose, and Resend.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (or the next available port) to view the site.

## Environment

Copy `.env.local.example` to `.env.local` and fill in:

- `MONGODB_URI` — MongoDB connection string for product/content data
- `RESEND_API_KEY` — Resend API key for contact/quote form emails
- `CONTACT_EMAIL_TO` — inbox that receives form submissions

## Project Structure

- `app/` — routes (App Router)
- `components/layout/` — Navbar, Footer
- `components/sections/` — page-specific section components, grouped by page
- `components/ui/` — reusable primitives (Button, Card, Section, Badge, Heading, ProductCard, AnimatedCounter)
- `lib/` — utilities, database connection, Mongoose models, site constants
- `public/logos/` — brand logo assets

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run lint` — ESLint
- `npm run format` — Prettier (writes)
