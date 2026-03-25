import { ShoppingBag, Phone } from "lucide-react";
import catalog from "../data/catalog.json";

const packageEmojis: Record<number, string> = {
  1: "🍚",
  2: "🍗",
  3: "🍗",
  4: "🥩",
};

export default function Talam() {
  return (
    <section id="talam" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            🛒 Quick Order
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            {catalog.talam.headline}
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            {catalog.talam.description}
          </p>
        </div>

        {/* Talam Packages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {catalog.talam.packages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col"
            >
              <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mb-4 text-3xl">
                {packageEmojis[pkg.id] || "🍱"}
              </div>
              <h3 className="text-gray-900 font-bold text-base mb-2 flex-1">{pkg.label}</h3>
              <div className="mt-4">
                <p className="text-green-700 font-extrabold text-2xl">{pkg.priceFormatted}</p>
                <p className="text-gray-400 text-xs mt-0.5">per talam</p>
              </div>
              <a
                href={`https://wa.me/62${catalog.contact.whatsapp.replace(/^0/, "")}?text=Halo%2C%20saya%20ingin%20memesan%20${encodeURIComponent(pkg.label)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-2 bg-green-700 hover:bg-green-600 text-white font-semibold text-sm px-4 py-2.5 rounded-xl transition-colors"
              >
                <ShoppingBag className="w-4 h-4" />
                Pesan
              </a>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <h3 className="text-gray-900 font-bold text-xl mb-1">Butuh Jumlah Banyak?</h3>
            <p className="text-gray-500 text-sm">
              Hubungi kami untuk harga spesial pemesanan dalam jumlah besar.
            </p>
          </div>
          <a
            href={`https://wa.me/62${catalog.contact.whatsapp.replace(/^0/, "")}?text=Halo%2C%20saya%20ingin%20memesan%20paket%20talam%20dalam%20jumlah%20besar`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-green-700 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full transition-colors"
          >
            <Phone className="w-4 h-4" />
            Hubungi Kami
          </a>
        </div>
      </div>
    </section>
  );
}
