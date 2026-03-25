import catalog from "../data/catalog.json";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-green-700 rounded-full flex items-center justify-center">
              {/* Kambing/Domba Image */}
              <img
                src="/images/logo.png"
                alt="Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <p className="text-white font-bold text-sm">{catalog.brand.name}</p>
              <p className="text-gray-400 text-xs">{catalog.brand.tagline}</p>
            </div>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-1">
            {catalog.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-gray-500 text-xs">
            © {year} {catalog.brand.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
