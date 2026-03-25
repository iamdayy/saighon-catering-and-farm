# Saighon Catering & Farm — Landing Page

Landing page responsif untuk bisnis **Saighon Catering & Farm** dibangun menggunakan [Next.js](https://nextjs.org), [Tailwind CSS](https://tailwindcss.com), dan [Lucide React](https://lucide.dev).

## Fitur

- 🐑 **Hero Section** — Branding utama dengan tagline, CTA WhatsApp, dan ilustrasi
- 🌿 **Farm Section** — Keunggulan farm & peternakan kambing
- 🍽️ **Paket Aqiqah** — Tabel harga bertab (Nasi Kebuli / Nasi Putih) untuk Aqiqah Putri & Putra
- 🛒 **Paket Talam** — Daftar harga per talam (quick order)
- 📞 **Kontak** — Tombol WhatsApp langsung
- 📱 **Responsif** — Mobile-first design

## Memulai

Jalankan development server:

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser untuk melihat hasilnya.

## Teknologi

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Font**: System font stack (sans-serif)
- **Data**: JSON catalog di `app/data/catalog.json`

## Struktur Komponen

```
app/
├── data/
│   └── catalog.json        # Data katalog (brand, harga, paket)
├── components/
│   ├── Header.tsx           # Sticky navigation dengan mobile menu
│   ├── Hero.tsx             # Hero section
│   ├── Farm.tsx             # Keunggulan farm
│   ├── Pricing.tsx          # Paket Aqiqah (tabbed pricing)
│   ├── Talam.tsx            # Paket Talam (quick order)
│   ├── Contact.tsx          # Section kontak WhatsApp
│   └── Footer.tsx           # Footer
├── globals.css
├── layout.tsx
└── page.tsx
```

## Deploy

Deploy menggunakan [Vercel Platform](https://vercel.com/new):

```bash
npm run build
```

