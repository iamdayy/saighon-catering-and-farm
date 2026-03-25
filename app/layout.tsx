import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saighon Catering & Farm — Aqiqah Murah Kualitas Wahh",
  description:
    "Layanan Aqiqah Amanah Sesuai Syariah. Pilih kambing langsung dari farm, hewan sehat & terawat, harga terjangkau.",
  keywords: ["aqiqah", "catering", "farm", "kambing", "syariah", "saighon"],
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
