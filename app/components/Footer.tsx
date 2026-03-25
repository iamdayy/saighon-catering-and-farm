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
              <svg viewBox="0 0 40 40" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="20" cy="23" rx="9" ry="6" fill="white" />
                <ellipse cx="27" cy="17" rx="5" ry="4" fill="white" />
                <ellipse cx="30" cy="14" rx="2" ry="3" fill="white" transform="rotate(20 30 14)" />
                <circle cx="29" cy="16" r="1" fill="#166534" />
              </svg>
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
