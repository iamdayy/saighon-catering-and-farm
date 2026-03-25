import { Phone, Star } from "lucide-react";
import catalog from "../data/catalog.json";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-green-700 flex items-center overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-green-600/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-green-600/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-green-600/40 border border-green-400/30 rounded-full px-4 py-2 mb-6">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="text-green-100 text-sm font-medium">{catalog.brand.tagline}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
              {catalog.brand.name.split(" & ").map((part, i) => (
                <span key={i}>
                  {i > 0 && (
                    <>
                      {" & "}
                      <span className="text-yellow-400">{part}</span>
                    </>
                  )}
                  {i === 0 && part}
                </span>
              ))}
            </h1>

            {/* Sub-headline */}
            <p className="text-green-100 text-lg sm:text-xl lg:text-2xl font-medium mb-8">
              {catalog.brand.subHeadline}
            </p>

            <p className="text-green-200 text-base sm:text-lg mb-10 max-w-lg mx-auto lg:mx-0">
              Kami hadir untuk memberikan layanan aqiqah terbaik, mulai dari pemilihan hewan di farm
              hingga sajian kuliner lezat yang halal dan berkah.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={`https://wa.me/62${catalog.contact.whatsapp.replace(/^0/, "")}?text=Halo%2C%20saya%20ingin%20memesan%20paket%20aqiqah`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-white text-green-800 hover:bg-green-50 font-bold text-base px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5" />
                {catalog.contact.ctaText}
              </a>
            <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/60 text-white hover:bg-white/10 font-semibold text-base px-8 py-4 rounded-full transition-all duration-200"
              >
                Lihat Paket
              </a>
            </div>
          </div>

          {/* Illustration / Logo Area */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main circle */}
              <div className="w-64 h-64 sm:w-80 sm:h-80 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center">
                <div className="w-48 h-48 sm:w-64 sm:h-64 bg-white/15 rounded-full flex items-center justify-center">
                  {/* Large Kambing Image */}
                  <img
                    src="/images/kambing.png"
                    alt="Large Kambing"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -left-4 bg-yellow-400 text-yellow-900 rounded-xl px-3 py-2 shadow-lg text-xs font-bold">
                ✓ Sesuai Syariah
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white text-green-800 rounded-xl px-3 py-2 shadow-lg text-xs font-bold">
                📦 Paket Lengkap
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-white/20 pt-10">
          {[
            { value: "100%", label: "Halal & Syariah" },
            { value: "Amanah", label: "Terpercaya" },
            { value: "Fresh", label: "Langsung dari Farm" },
            { value: "Lengkap", label: "Paket Tersedia" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-white font-extrabold text-2xl sm:text-3xl">{stat.value}</p>
              <p className="text-green-200 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
