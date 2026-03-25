import type { Metadata } from "next";
import Contact from "./components/Contact";
import Farm from "./components/Farm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Talam from "./components/Talam";
import catalog from "./data/catalog.json";

export const metadata: Metadata = {
  title: "Katering di Pekalongan & Katering Murah Pekalongan",
  description:
    "Layanan katering di Pekalongan dari Saighon Catering & Farm. Tersedia paket katering murah Pekalongan untuk aqiqah dengan proses sesuai syariah.",
  alternates: {
    canonical: "/",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://saighon-catering.daydev.studio/#localbusiness",
  name: catalog.brand.name,
  description:
    "Katering di Pekalongan dan katering murah Pekalongan untuk layanan aqiqah sesuai syariah.",
  url: "https://saighon-catering.daydev.studio",
  image: "https://saighon-catering.daydev.studio/images/logo.png",
  telephone: "+6285727153121",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pekalongan",
    addressRegion: "Jawa Tengah",
    addressCountry: "ID",
  },
  areaServed: {
    "@type": "City",
    name: "Pekalongan",
  },
  sameAs: [
    `https://wa.me/62${catalog.contact.whatsapp.replace(/^0/, "")}`,
  ],
};

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd),
        }}
      />
      <Header />
      <main className="flex-1">
        <Hero />
        <Farm />
        <Pricing />
        <Talam />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
