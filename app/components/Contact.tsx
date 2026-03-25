import { MessageCircle, Phone } from "lucide-react";
import catalog from "../data/catalog.json";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-green-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-green-700 text-green-200 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            📞 Kontak
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            {catalog.contact.headline}
          </h2>
          <p className="text-green-200 text-lg max-w-xl mx-auto">
            {catalog.contact.description}
          </p>
          {catalog.contact.location && (
            <p className="text-green-300 text-sm mt-2">{catalog.contact.location}</p>
          )}
        </div>

        {/* Contact Card */}
        <div className="max-w-lg mx-auto bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <MessageCircle className="w-10 h-10 text-green-700" />
          </div>
          <h3 className="text-white font-bold text-2xl mb-2">WhatsApp</h3>
          <p className="text-green-200 text-lg mb-6 font-mono tracking-wider">
            {catalog.contact.whatsappDisplay}
          </p>
          <a
            href={`https://wa.me/62${catalog.contact.whatsapp.replace(/^0/, "")}?text=Halo%2C%20saya%20ingin%20memesan%20paket%20aqiqah`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-green-800 hover:bg-green-50 font-bold text-base px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
          >
            <Phone className="w-5 h-5" />
            {catalog.contact.ctaText}
          </a>
        </div>
      </div>
    </section>
  );
}
