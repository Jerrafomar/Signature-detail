# Signature Detail

A modern, premium website for **Signature Detail** — luxury detailing for
exotic cars and private aircraft, based in Montreal.

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **lucide-react** icons

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
app/
  layout.tsx          Root layout — fonts, metadata, Navbar/Footer
  template.tsx         Page-transition wrapper (Framer Motion)
  page.tsx              Home
  about/page.tsx         About
  services/page.tsx    Services
  gallery/page.tsx      Gallery
  contact/page.tsx      Contact
  globals.css            Design tokens & base styles
  opengraph-image.tsx   Open Graph share image (generated)
  sitemap.ts / robots.ts SEO
components/
  Navbar.tsx, Footer.tsx
  Hero.tsx, WhyChoose.tsx, ServicesPreview.tsx, Pricing.tsx,
  AircraftSection.tsx, ContactCTA.tsx
  ServiceCard.tsx, GalleryGrid.tsx, ContactForm.tsx
  PageHero.tsx, AnimatedSection.tsx, GoldSeam.tsx, Monogram.tsx
lib/
  data.ts   Services, gallery, pricing & core values content
```

## Design System

| Token       | Value      |
| ----------- | ---------- |
| Obsidian (bg) | `#0A0A0A` |
| Charcoal (surface) | `#1C1C1C` |
| Ivory (text) | `#F5F4F1` |
| Silver (muted) | `#C0C0C0` |
| Gold (accent) | `#C8A96A` |

- **Display type:** Cormorant Garamond (headlines, italics for emphasis)
- **Body type:** Inter (uppercase tracked labels, body copy)
- **Signature motif:** the "gold seam" — a coachline-inspired divider with a
  rotated diamond marker, echoing pinstriping and badge details on the
  vehicles the brand cares for.

## Notes

- Contact form submission is simulated client-side. Wire `ContactForm.tsx`'s
  `handleSubmit` up to your email service, CRM, or API route of choice.
- Gallery images are your own photos, stored in `public/images/gallery/` and
  referenced in `lib/data.ts` (organized by brand: BMW X6 M, Porsche 911 GT3,
  Lamborghini Urus). Hero and section backgrounds still use Unsplash
  placeholders — swap those in the relevant page/component `image` props
  when you have more photography.
- Phone number is set to (514) 706-9774 in `Footer.tsx`,
  `ContactCTA.tsx`, and `app/contact/page.tsx`. Update social links in
  `Footer.tsx` as needed.
- Domain used in `sitemap.ts` / `robots.ts` is a placeholder
  (`signaturedetail.ca`) — update to your real domain.
