import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://saighon-catering.daydev.studio"),
  title: "Katering di Pekalongan | Katering Murah Pekalongan - Saighon Catering & Farm",
  description:
    "Saighon Catering & Farm menyediakan katering di Pekalongan dan katering murah Pekalongan untuk aqiqah sesuai syariah. Pilih kambing sehat langsung dari farm kami.",
  keywords: [
    "katering di pekalongan",
    "katering murah pekalongan",
    "katering aqiqah pekalongan",
    "aqiqah pekalongan",
    "saighon catering",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://saighon-catering.daydev.studio",
    siteName: "Saighon Catering & Farm",
    title: "Katering di Pekalongan | Katering Murah Pekalongan - Saighon Catering & Farm",
    description:
      "Katering di Pekalongan dan katering murah Pekalongan untuk aqiqah sesuai syariah. Hewan sehat, farm sendiri, dan layanan amanah.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="h-full scroll-smooth antialiased">
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
