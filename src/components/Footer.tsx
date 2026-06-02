// Header.tsx
import { Menu, X, Sparkles, Phone, Mail, MapPin } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close mobile menu when window is resized above md breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      {/* Added relative positioning to nav for proper mobile menu positioning */}
      <nav className="relative container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Sparkles className="w-6 h-6 text-pink-500" />
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
              Parlour at Doorstep
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">

            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-pink-500 transition-colors font-medium"
            >
              Home
            </button>

            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-pink-500 transition-colors font-medium"
            >
              Services
            </button>

            <button
              onClick={() => scrollToSection("blogs")}
              className="text-gray-700 hover:text-pink-500 transition-colors font-medium"
            >
              Blogs
            </button>

            {/* 🔥 Location Keyword (SEO Boost) - hidden on md, visible on lg+ */}
            <div className="hidden lg:flex items-center space-x-1 text-gray-600 text-sm whitespace-nowrap">
              <MapPin className="w-4 h-4 text-pink-500 flex-shrink-0" />
              <span>Rohini | Delhi | Noida | Gurugram</span>
            </div>

            {/* Phone - with whitespace-nowrap to prevent breaking */}
            <a
              href="tel:+919811923486"
              className="flex items-center space-x-2 text-gray-700 hover:text-pink-500 transition-colors font-medium whitespace-nowrap"
            >
              <Phone className="w-4 h-4 flex-shrink-0" />
              <span>+91 98119 23486</span>
            </a>

            {/* Email - icon always visible, text visible only on lg+ */}
            <a
              href="mailto:parlouratdoorsteps@gmail.com"
              className="flex items-center space-x-2 text-gray-700 hover:text-pink-500 transition-colors font-medium"
            >
              <Mail className="w-4 h-4 flex-shrink-0" />
              <span className="hidden lg:inline whitespace-nowrap">
                parlouratdoorsteps@gmail.com
              </span>
            </a>

            {/* Book Now */}
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 font-medium whitespace-nowrap"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu - improved spacing, non-breaking phone, and better overflow handling */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 py-6 px-4 space-y-5 shadow-xl rounded-b-2xl z-50 max-h-[80vh] overflow-y-auto">
            
            <button
              onClick={() => scrollToSection("home")}
              className="w-full py-2.5 text-center text-gray-700 font-medium hover:text-pink-500 transition-colors rounded-lg"
            >
              Home
            </button>

            <button
              onClick={() => scrollToSection("services")}
              className="w-full py-2.5 text-center text-gray-700 font-medium hover:text-pink-500 transition-colors rounded-lg"
            >
              Services
            </button>

            <button
              onClick={() => scrollToSection("blogs")}
              className="w-full py-2.5 text-center text-gray-700 font-medium hover:text-pink-500 transition-colors rounded-lg"
            >
              Blogs
            </button>

            {/* 🔥 Location SEO - mobile version with improved readability */}
            <div className="flex items-center justify-center space-x-2 text-gray-600 text-sm py-2 flex-wrap">
              <MapPin className="w-4 h-4 text-pink-500 flex-shrink-0" />
              <span className="text-center">Rohini, Delhi, Noida, Gurugram</span>
            </div>

            {/* Phone - with whitespace-nowrap to keep on single line */}
            <a
              href="tel:+919811923486"
              className="w-full py-2.5 flex justify-center items-center space-x-2 text-gray-700 font-medium hover:text-pink-500 transition-colors whitespace-nowrap"
            >
              <Phone className="w-4 h-4 flex-shrink-0" />
              <span>+91 98119 23486</span>
            </a>

            {/* Email - with word break for very small screens */}
            <a
              href="mailto:parlouratdoorsteps@gmail.com"
              className="w-full py-2.5 flex justify-center items-center space-x-2 text-gray-700 font-medium hover:text-pink-500 transition-colors break-all text-center"
            >
              <Mail className="w-4 h-4 flex-shrink-0" />
              <span className="break-words">parlouratdoorsteps@gmail.com</span>
            </a>

            {/* Book Now - improved touch target */}
            <button
              onClick={() => scrollToSection("contact")}
              className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-3.5 rounded-xl font-medium hover:shadow-lg transition-all duration-300 mt-2"
            >
              Book Now
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
