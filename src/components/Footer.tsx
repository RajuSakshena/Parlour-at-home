// Footer.tsx
import {
  Phone,
  Mail,
  Sparkles,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      id="contact"
      className="bg-gradient-to-br from-gray-900 to-gray-800 text-white"
    >
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Sparkles className="w-6 h-6 text-pink-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                Parlour at Doorstep
              </span>
            </div>
            <p className="text-gray-300 mb-4">
              Book professional salon services at home with expert beauticians.
              We provide safe, hygienic and affordable beauty services at your
              doorstep.
            </p>

            {/* SEO Location Text */}
            <p className="text-gray-400 text-sm">
              Serving in Rohini, Delhi, Noida, Gurugram and nearby areas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { id: "home", label: "Home" },
                { id: "services", label: "Services" },
                { id: "testimonials", label: "Testimonials" },
                { id: "blogs", label: "About Us" }, // Ensure element with id="blogs" exists or change to "about"
              ].map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-300 hover:text-pink-400 transition-colors cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <address className="not-italic">
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-pink-400" aria-hidden="true" />
                  <a
                    href="tel:+919811923486"
                    className="text-gray-300 hover:text-pink-400 transition-colors"
                    aria-label="Call us at +91 98119-23486"
                  >
                    +91 98119-23486
                  </a>
                </li>

                <li className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-pink-400" aria-hidden="true" />
                  <a
                    href="mailto:info@parlouratdoorstep.com"
                    className="text-gray-300 hover:text-pink-400 transition-colors"
                    aria-label="Email us at info@parlouratdoorstep.com"
                  >
                    info@parlouratdoorstep.com
                  </a>
                </li>

                <li className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-pink-400 mt-1" aria-hidden="true" />
                  <span className="text-gray-300">
                    Rohini, Delhi, Noida, Gurugram
                  </span>
                </li>

                <li className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-pink-400 mt-1" aria-hidden="true" />
                  <span className="text-gray-300">
                    Mon - Sun: 9:00 AM - 9:00 PM
                  </span>
                </li>
              </ul>
            </address>
          </div>

          {/* Locations + Social */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Locations</h3>

            {/* Location Keywords */}
            <ul className="space-y-2 text-gray-300 mb-4">
              <li>Salon at Home in Rohini</li>
              <li>Salon at Home in Delhi</li>
              <li>Salon at Home in Noida</li>
              <li>Salon at Home in Gurugram</li>
            </ul>

            <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-pink-500 transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" aria-hidden="true" />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-pink-500 transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5" aria-hidden="true" />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-pink-500 transition-colors"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-8 text-center">
         <p className="text-gray-400 text-sm">
  © 2021 Parlour at Doorstep. All rights reserved. | Salon at home services in Rohini, Delhi, Noida & Gurugram
</p>
        </div>
      </div>
    </footer>
  );
}
