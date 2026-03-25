"use client";

import { useState } from "react";
import { Check, Phone } from "lucide-react";
import catalog from "../data/catalog.json";

export default function Pricing() {
  const [activeTab, setActiveTab] = useState<string>(catalog.pricing.categories[0].id);

  const activeCategory = catalog.pricing.categories.find((c) => c.id === activeTab)!;

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            🍽️ Paket Aqiqah
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            {catalog.pricing.headline}
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            {catalog.pricing.description}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-gray-100 rounded-full p-1.5 gap-1">
            {catalog.pricing.categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeTab === cat.id
                    ? "bg-green-700 text-white shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {activeCategory.packages.map((pkg) => (
            <div
              key={pkg.type}
              className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Package Header */}
              <div
                className={`p-6 ${pkg.type === "putra" ? "bg-green-700" : "bg-green-600"}`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-white font-bold text-xl">{pkg.label}</h3>
                    <p className="text-green-200 text-sm mt-1">{pkg.subtitle}</p>
                  </div>
                  <span className="text-3xl">{pkg.type === "putri" ? "👧" : "👦"}</span>
                </div>
              </div>

              {/* Pricing Options */}
              <div className="p-6 bg-white">
                <p className="text-gray-600 text-sm font-medium mb-4">Pilih Jumlah Porsi:</p>
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {pkg.options.map((opt) => (
                    <a
                      key={opt.pax}
                      href={`https://wa.me/62${catalog.contact.whatsapp.replace(/^0/, "")}?text=Halo%2C%20saya%20ingin%20memesan%20${encodeURIComponent(activeCategory.label + " - " + pkg.label + " " + opt.pax + " porsi")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-2 border-green-200 hover:border-green-500 hover:bg-green-50 rounded-xl p-3 text-center transition-all group cursor-pointer"
                    >
                      <p className="text-green-700 font-bold text-lg group-hover:text-green-800">{opt.pax}</p>
                      <p className="text-gray-400 text-xs">porsi</p>
                      <p className="text-green-600 text-xs font-semibold mt-1">Tanya Harga</p>
                    </a>
                  ))}
                </div>

                {/* Menu List */}
                <div>
                  <p className="text-gray-700 font-semibold text-sm mb-3">Menu Standar:</p>
                  <div className="grid grid-cols-2 gap-1.5">
                    {catalog.pricing.standardMenu.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-gray-600 text-sm">
                        <Check className="w-4 h-4 text-green-600 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order CTA */}
        <div className="text-center">
          <a
            href={`https://wa.me/62${catalog.contact.whatsapp.replace(/^0/, "")}?text=Halo%2C%20saya%20ingin%20konsultasi%20paket%20aqiqah`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-700 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
          >
            <Phone className="w-5 h-5" />
            Konsultasi Paket via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
