import { Menu, X, Sparkles, Phone, Mail } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Sparkles className="w-6 h-6 text-pink-500" />
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
              Parlour at Home
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">

            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-pink-500 transition-colors font-medium"
            >
              Home
            </button>

            <button
              onClick={() => scrollToSection('blogs')}
              className="text-gray-700 hover:text-pink-500 transition-colors font-medium"
            >
              Blogs
            </button>

            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-pink-500 transition-colors font-medium"
            >
              Menu
            </button>

            {/* Phone */}
            <a
              href="tel:+919811923486"
              className="flex items-center space-x-2 text-gray-700 hover:text-pink-500 transition-colors font-medium"
            >
              <Phone className="w-4 h-4" />
              <span>+91 9811923486</span>
            </a>

            {/* Email */}
            <a
              href="mailto:parlourathomess@gmail.com"
              className="flex items-center space-x-2 text-gray-700 hover:text-pink-500 transition-colors font-medium"
            >
              <Mail className="w-4 h-4" />
              <span>parlourathomess@gmail.com</span>
            </a>

            {/* Book Now */}
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 font-medium"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 p-2"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-4 space-y-4 shadow-xl flex flex-col items-center">

            <button
              onClick={() => scrollToSection('home')}
              className="w-full py-2 text-center text-gray-700 font-medium"
            >
              Home
            </button>

            <button
              onClick={() => scrollToSection('blogs')}
              className="w-full py-2 text-center text-gray-700 font-medium"
            >
              Blogs
            </button>

            <button
              onClick={() => scrollToSection('services')}
              className="w-full py-2 text-center text-gray-700 font-medium"
            >
              Menu
            </button>

            {/* Phone */}
            <a
              href="tel:+919811923486"
              className="w-full py-2 flex justify-center items-center space-x-2 text-gray-700 font-medium"
            >
              <Phone className="w-4 h-4" />
              <span>+91 9811923486</span>
            </a>

            {/* Email */}
            <a
              href="mailto:parlourathomess@gmail.com"
              className="w-full py-2 flex justify-center items-center space-x-2 text-gray-700 font-medium"
            >
              <Mail className="w-4 h-4" />
              <span>parlourathomess@gmail.com</span>
            </a>

            {/* Book Now */}
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-3 rounded-xl font-medium"
            >
              Book Now
            </button>

          </div>
        )}
      </nav>
    </header>
  );
}