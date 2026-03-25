import { CheckCircle2, MapPin, Eye, ChefHat } from "lucide-react";
import catalog from "../data/catalog.json";

const featureIcons = [MapPin, CheckCircle2, Eye, ChefHat];

export default function Farm() {
  return (
    <section id="farm" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            🐑 Farm Kami
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            {catalog.farm.headline}
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            {catalog.farm.description}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {catalog.farm.features.map((feature, index) => {
            const Icon = featureIcons[index % featureIcons.length];
            return (
              <div
                key={feature.id}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              >
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-green-700" />
                </div>
                <h3 className="text-gray-900 font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Bottom banner */}
        <div className="mt-14 bg-gradient-to-r from-green-800 to-green-700 rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white font-bold text-2xl mb-2">Kunjungi Farm Kami</h3>
            <p className="text-green-200 text-base">
              Lihat langsung proses peternakan kami yang higienis dan sesuai standar syariah.
            </p>
          </div>
          <a
            href={`https://wa.me/62${catalog.brand.whatsapp.replace(/^0/, "")}?text=Halo%2C%20saya%20ingin%20kunjungi%20farm`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-white text-green-800 hover:bg-green-50 font-semibold px-6 py-3 rounded-full transition-colors"
          >
            Jadwalkan Kunjungan
          </a>
        </div>
      </div>
    </section>
  );
}
