"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import catalog from "../data/catalog.json";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-green-900 shadow-lg"
          : "bg-green-900/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0">
              {/* Kambing/Domba placeholder SVG */}
              <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="19" fill="#166534" />
                {/* Body */}
                <ellipse cx="20" cy="23" rx="9" ry="6" fill="white" />
                {/* Head */}
                <ellipse cx="27" cy="17" rx="5" ry="4" fill="white" />
                {/* Ear */}
                <ellipse cx="30" cy="14" rx="2" ry="3" fill="white" transform="rotate(20 30 14)" />
                {/* Eye */}
                <circle cx="29" cy="16" r="1" fill="#166534" />
                {/* Legs */}
                <rect x="13" y="28" width="2.5" height="5" rx="1" fill="white" />
                <rect x="17" y="29" width="2.5" height="4" rx="1" fill="white" />
                <rect x="22" y="29" width="2.5" height="4" rx="1" fill="white" />
                <rect x="26" y="28" width="2.5" height="5" rx="1" fill="white" />
                {/* Wool texture dots */}
                <circle cx="18" cy="22" r="1" fill="#d1fae5" />
                <circle cx="21" cy="20" r="1" fill="#d1fae5" />
                <circle cx="15" cy="21" r="1" fill="#d1fae5" />
              </svg>
            </div>
            <div className="hidden sm:block">
              <p className="text-white font-bold text-sm leading-tight">{catalog.brand.name}</p>
              <p className="text-green-200 text-xs">{catalog.brand.tagline}</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {catalog.navigation.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-green-100 hover:text-white hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA + Mobile Menu Toggle */}
          <div className="flex items-center gap-2">
            <a
              href={`https://wa.me/62${catalog.brand.whatsapp.replace(/^0/, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 bg-white text-green-800 hover:bg-green-50 font-semibold text-sm px-4 py-2 rounded-full transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden lg:inline">Pesan Sekarang</span>
            </a>
            <button
              className="md:hidden text-white p-2 rounded-md hover:bg-green-700 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-green-900 border-t border-green-700 px-4 pb-4">
          <nav className="flex flex-col gap-1 pt-2">
            {catalog.navigation.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-green-100 hover:text-white hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium text-left transition-colors"
              >
                {item.label}
              </button>
            ))}
            <a
              href={`https://wa.me/62${catalog.brand.whatsapp.replace(/^0/, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-green-800 font-semibold text-sm px-4 py-2 rounded-full mt-2 justify-center transition-colors hover:bg-green-50"
            >
              <Phone className="w-4 h-4" />
              Pesan Sekarang
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
