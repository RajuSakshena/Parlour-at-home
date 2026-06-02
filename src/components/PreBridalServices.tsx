import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft } from "lucide-react";

/* =========================
   IMAGE IMPORTS (src/images/)
========================= */
import classicPreBridal from "../images/Classic Pre-bridal Grooming.jpg";
import luxuryPreBridal from "../images/Luxury Pre-bridal Grooming.jpg";
import magnificencePreBridal from "../images/Magnificence Pre-bridal Grooming.jpg";

/* =========================
   NAV MENU
========================= */
const categories = ["Pre-Bridal Packages"];

/* =========================
   TYPES
========================= */
type PreBridalService = {
  id: number;
  title: string;
  duration: string;
  price: number;
  mrp: number;
  discount: string;
  image: string;
  includes: string[];
  brands: string[];
};

/* =========================
   SERVICE DATA
========================= */
const preBridalServices: PreBridalService[] = [
  {
    id: 1,
    title: "Classic Pre-bridal Grooming",
    price: 5249,
    mrp: 8000,
    discount: "34% Off",
    duration: "330 minutes",
    image: classicPreBridal,
    includes: [
      "Sara Gold Facial",
      "Oxy Face Bleach",
      "Nature's Body Bleach",
      "Full Body Wax (Choco Honey)",
      "Bikini Wax (Rica Brazillian)",
      "Body Polishing (Calix)",
      "Sara Mani-Pedi",
      "Thread Work",
    ],
    brands: ["Sara", "Dabur", "Nature's Essence", "Honey Gold", "Rica", "Calix"],
  },
  {
    id: 2,
    title: "Luxury Pre-bridal Grooming",
    price: 6849,
    mrp: 8500,
    discount: "19% Off",
    duration: "420 minutes",
    image: luxuryPreBridal,
    includes: [
      "O3+ Bridal Facial",
      "Nature's Body Bleach",
      "Full Body Wax (Rica)",
      "Bikini Wax (Rica Peel-off)",
      "Body Polishing (Calix)",
      "O3+ Mani-Pedi",
      "Head Massage",
      "Thread Work",
    ],
    brands: ["O3+", "Dabur", "Nature's Essence", "Rica", "Calix"],
  },
  {
    id: 3,
    title: "Magnificence Pre-bridal Grooming",
    price: 7500,
    mrp: 9500,
    discount: "21% Off",
    duration: "570 minutes",
    image: magnificencePreBridal,
    includes: [
      "O3+ Bridal Facial",
      "Full Body Bleach (Nature's Body Bleach / Raaga De-tan)",
      "Full Body Wax (Rica Roll-on)",
      "Bikini Wax (Rica Peel-off)",
      "Full Face Wax (Rica Peel-off)",
      "Body Polishing (Calix)",
      "O3+ Mani-Pedi",
      "Hair Spa (Calix)",
      "Thread Work (Full Face)",
    ],
    brands: ["O3+", "Dabur", "Raaga", "Nature's Essence", "Rica", "Calix"],
  },
];

const allData: Record<string, PreBridalService[]> = {
  "Pre-Bridal Packages": preBridalServices,
};

/* =========================
   FLOATING BUTTONS STYLES
========================= */
const floatingStyles = `
  @keyframes shake {
    0%   { transform: rotate(0deg) scale(1); }
    10%  { transform: rotate(-12deg) scale(1.05); }
    20%  { transform: rotate(12deg) scale(1.05); }
    30%  { transform: rotate(-10deg) scale(1.05); }
    40%  { transform: rotate(10deg) scale(1.05); }
    50%  { transform: rotate(-6deg) scale(1.05); }
    60%  { transform: rotate(6deg) scale(1.05); }
    70%  { transform: rotate(-3deg) scale(1); }
    80%  { transform: rotate(3deg) scale(1); }
    100% { transform: rotate(0deg) scale(1); }
  }
  @keyframes pulse-ring {
    0%   { transform: scale(1); opacity: 0.6; }
    70%  { transform: scale(1.5); opacity: 0; }
    100% { transform: scale(1.5); opacity: 0; }
  }
  .float-btn {
    animation: shake 2.5s ease-in-out infinite;
  }
  .float-btn:nth-child(2) {
    animation-delay: 1.25s;
  }
  .pulse-ring {
    animation: pulse-ring 2s ease-out infinite;
  }
  .pulse-ring-2 {
    animation: pulse-ring 2s ease-out infinite;
    animation-delay: 1.25s;
  }
`;

/* =========================
   COMPONENT
========================= */
export default function PreBridalServices() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<PreBridalService | null>(null);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    window.scrollTo(0, 0);
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    return () => {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "auto";
      }
    };
  }, []);

  const scrollToSection = useCallback((cat: string) => {
    sectionRefs.current[cat]?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleBookNow = useCallback(() => {
    window.location.href = "tel:+919811923486";
  }, []);

  // JSON-LD Structured Data
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.parlouratdoorstep.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://www.parlouratdoorstep.com/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Pre-Bridal Grooming Packages at Home",
        "item": "https://www.parlouratdoorstep.com/services/pre-bridal"
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Pre-Bridal Grooming Packages",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Parlour at Doorstep",
      "telephone": "+919811923486",
      "url": "https://www.parlouratdoorstep.com",
      "areaServed": {
        "@type": "City",
        "name": "Delhi NCR"
      }
    },
    "areaServed": [
      "Delhi",
      "Noida",
      "Gurugram",
      "Ghaziabad",
      "Faridabad"
    ],
    "description": "Professional pre-bridal grooming packages at home including bridal facials, full body waxing, bleach, mani-pedi, hair spa, and more. Certified beauticians bring complete bridal preparation to your doorstep.",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "lowPrice": "5249",
      "highPrice": "7500",
      "offerCount": preBridalServices.length
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Pre-Bridal Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Classic Pre-bridal Grooming" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Luxury Pre-bridal Grooming" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Magnificence Pre-bridal Grooming" } }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is included in pre-bridal grooming packages?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our pre-bridal packages include bridal facial, full body waxing, bleach, body polishing, mani-pedi, hair spa, threading, and more. Packages vary from Classic to Magnificence with different service combinations."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a pre-bridal grooming session take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Depending on the package, duration ranges from 330 minutes (5.5 hours) for Classic to 570 minutes (9.5 hours) for Magnificence package."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide bridal makeup as well?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our pre-bridal packages focus on skincare, hair removal, and body grooming. For bridal makeup services, please contact us directly for custom arrangements."
        }
      },
      {
        "@type": "Question",
        "name": "Which brands do you use for pre-bridal services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We use premium brands like O3+, Sara, Rica, Calix, Nature's Essence, Dabur, and Honey Gold for various services to ensure high-quality results."
        }
      },
      {
        "@type": "Question",
        "name": "What safety measures do you follow?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We adhere to WHO guidelines: single-use equipment for all services, sanitized tools, and strict hygiene protocols to ensure your safety."
        }
      },
      {
        "@type": "Question",
        "name": "Which areas do you serve for pre-bridal grooming at home?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We serve Delhi NCR including Delhi, Noida, Gurugram, Ghaziabad, and Faridabad."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Pre-Bridal Grooming Packages at Home in Delhi NCR | Parlour at Doorstep</title>
        <meta name="description" content="Book luxury pre-bridal grooming packages at home in Delhi, Noida, Gurugram, Ghaziabad, Faridabad. Includes bridal facial, waxing, mani-pedi, hair spa & more. Certified beauticians." />
        <link rel="canonical" href="https://www.parlouratdoorstep.com/services/pre-bridal" />
        <meta property="og:title" content="Pre-Bridal Grooming Packages at Home in Delhi NCR | Parlour at Doorstep" />
        <meta property="og:description" content="Book luxury pre-bridal grooming packages at home in Delhi, Noida, Gurugram, Ghaziabad, Faridabad. Includes bridal facial, waxing, mani-pedi, hair spa & more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.parlouratdoorstep.com/services/pre-bridal" />
        <meta property="og:site_name" content="Parlour at Doorstep" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pre-Bridal Grooming Packages at Home in Delhi NCR | Parlour at Doorstep" />
        <meta name="twitter:description" content="Book luxury pre-bridal grooming packages at home in Delhi, Noida, Gurugram, Ghaziabad, Faridabad. Includes bridal facial, waxing, mani-pedi, hair spa & more." />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <section className="bg-[#f6edff] min-h-screen">
        {/* INJECT FLOATING BUTTON STYLES */}
        <style>{floatingStyles}</style>

        {/* HEADER WITH BACK BUTTON */}
        <div className="py-4 md:py-6 lg:py-8 text-center bg-white border-b relative">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors shadow-sm active:scale-95"
            aria-label="Go back"
          >
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </button>

          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
            Pre-Bridal
          </h1>
          <p className="text-xs md:text-sm text-gray-500 mt-1 uppercase tracking-widest">
            Premium Salon Services
          </p>
        </div>

        {/* NAV BAR */}
        <div className="sticky top-0 z-40 bg-[#f6edff] py-3 md:py-4 shadow-sm">
          <div className="flex justify-center">
            <div className="flex gap-3 overflow-x-auto px-2 md:px-4 no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => scrollToSection(cat)}
                  className="px-4 py-1.5 md:px-5 md:py-2 rounded-full bg-purple-200 text-purple-800 text-sm md:text-base font-semibold whitespace-nowrap hover:bg-purple-300 transition-colors active:scale-95"
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* SECTIONS */}
        <div className="max-w-7xl mx-auto px-3 md:px-6 lg:px-10 py-6 md:py-10 space-y-8 md:space-y-16">
          {categories.map((cat) => (
            <div key={cat} ref={(el) => (sectionRefs.current[cat] = el)}>
              <h2 className="text-lg md:text-xl lg:text-2xl font-black mb-4 md:mb-6 uppercase tracking-tight">
                {cat}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {allData[cat].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl md:rounded-2xl shadow-sm hover:shadow-lg flex flex-col md:flex-row md:items-stretch overflow-hidden transition-shadow"
                  >
                    {/* IMAGE */}
                    <div className="w-full h-48 md:w-36 lg:w-44 md:h-auto flex-shrink-0 overflow-hidden rounded-t-xl md:rounded-l-xl md:rounded-t-none bg-gray-100">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-contain object-center"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>

                    {/* CONTENT */}
                    <div className="p-4 md:p-5 flex-1 flex flex-col">
                      <h3 className="text-sm md:text-base font-bold text-gray-800 break-words">
                        {item.title}
                      </h3>

                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-2">
                        <span className="font-black text-base md:text-lg lg:text-xl">
                          ₹{item.price.toLocaleString("en-IN")}
                        </span>
                        <span className="line-through text-xs text-gray-400">
                          ₹{item.mrp.toLocaleString("en-IN")}
                        </span>
                        <span className="bg-orange-100 text-orange-700 text-xs font-bold px-1.5 py-0.5 rounded-full">
                          {item.discount}
                        </span>
                      </div>
                      <p className="text-xs text-gray-400 mt-1">⏱ {item.duration}</p>

                      <ul className="mt-3 md:mt-4 space-y-1 flex-1 text-xs md:text-sm text-gray-500">
                        {item.includes.slice(0, 3).map((i, k) => (
                          <li key={k} className="break-words">• {i}</li>
                        ))}
                        {item.includes.length > 3 && (
                          <li className="text-purple-600 text-xs">+{item.includes.length - 3} more</li>
                        )}
                      </ul>

                      <button
                        onClick={() => setSelected(item)}
                        className="mt-4 text-purple-700 text-xs md:text-sm font-bold hover:underline self-start active:scale-95 transition-transform"
                      >
                        VIEW DETAILS
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* =====================
            FLOATING BUTTONS
            (WhatsApp + Call)
        ===================== */}
        <div className="fixed right-3 sm:right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4 items-center">
          {/* WhatsApp Button */}
          <div className="relative flex items-center justify-center">
            <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60 pulse-ring" />
            <a
              href="https://wa.me/919811923486"
              target="_blank"
              rel="noopener noreferrer"
              className="float-btn relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-xl shadow-green-300/50 active:scale-95 transition-transform"
              aria-label="Chat on WhatsApp"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                className="w-7 h-7 sm:w-8 sm:h-8"
                fill="none"
              >
                <circle cx="24" cy="24" r="24" fill="#25D366" />
                <path
                  d="M34.5 13.4A14.7 14.7 0 0 0 24 9C16.3 9 10 15.3 10 23c0 2.5.7 4.9 1.9 7L10 39l9.3-2.4a14.8 14.8 0 0 0 14.7-3.7A14.8 14.8 0 0 0 38 23c0-3.9-1.5-7.6-3.5-9.6zm-10.5 20a12.3 12.3 0 0 1-6.3-1.7l-.5-.3-5 1.3 1.3-4.9-.3-.5A12.3 12.3 0 0 1 24 11.5c6.8 0 12.3 5.5 12.3 12.3S30.8 36.1 24 36.1zm6.7-9.2c-.4-.2-2.2-1.1-2.5-1.2-.3-.1-.6-.2-.8.2-.3.4-1 1.2-1.2 1.5-.2.3-.4.3-.8.1-.4-.2-1.6-.6-3-1.9-1.1-1-1.8-2.2-2.1-2.6-.2-.4 0-.6.2-.7.2-.2.4-.4.6-.7.2-.2.3-.4.4-.7.1-.3 0-.6-.1-.8-.1-.2-.8-2-1.1-2.7-.3-.7-.6-.6-.8-.6h-.7c-.3 0-.7.1-1 .4-.4.4-1.4 1.3-1.4 3.2s1.4 3.7 1.6 4c.2.2 2.8 4.3 6.8 6 .9.4 1.7.6 2.2.8.9.3 1.8.3 2.4.2.7-.1 2.2-.9 2.5-1.8.3-.9.3-1.6.2-1.8-.1-.2-.4-.3-.8-.5z"
                  fill="white"
                />
              </svg>
            </a>
          </div>

          {/* Call Button */}
          <div className="relative flex items-center justify-center">
            <span className="absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-60 pulse-ring-2" />
            <a
              href="tel:+919811923486"
              className="float-btn relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-purple-600 flex items-center justify-center shadow-xl shadow-purple-300/50 active:scale-95 transition-transform"
              aria-label="Call us"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                className="w-6 h-6 sm:w-7 sm:h-7"
                fill="none"
              >
                <circle cx="24" cy="24" r="24" fill="#7C3AED" />
                <path
                  d="M34.3 29.6l-3.5-1.5a1.5 1.5 0 0 0-1.7.4l-1.6 1.9a22.2 22.2 0 0 1-9.9-9.9l1.9-1.6a1.5 1.5 0 0 0 .4-1.7L18.4 13.7a1.5 1.5 0 0 0-1.7-.9l-3.3.8A1.5 1.5 0 0 0 12 15c0 12.2 9.8 22 22 22a1.5 1.5 0 0 0 1.4-1.1l.8-3.4a1.5 1.5 0 0 0-.9-1.9z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* DETAIL MODAL */}
        {selected && (
          <div
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <div
              className="bg-white max-w-[480px] w-full rounded-2xl overflow-hidden relative shadow-2xl flex flex-col max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 z-20 bg-gray-100 text-gray-800 w-8 h-8 rounded-full flex items-center justify-center font-bold active:scale-95 transition-transform"
                aria-label="Close modal"
              >
                ✕
              </button>
              <div className="overflow-y-auto p-4 md:p-6">
                <div className="flex gap-2 md:gap-4 mb-4 md:mb-6">
                  <div className="w-20 h-20 md:w-28 md:h-28 flex items-center justify-center bg-white rounded-xl">
                    <img
                      src={selected.image}
                      alt={selected.title}
                      className="max-w-full max-h-full object-contain rounded-xl"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h2 className="text-lg md:text-xl font-bold text-gray-900 leading-tight break-words">
                      {selected.title}
                    </h2>
                    <div className="mt-2 flex flex-wrap items-baseline gap-1 md:gap-2">
                      <span className="text-base md:text-lg font-bold text-purple-700">
                        ₹{selected.price.toLocaleString("en-IN")}
                      </span>
                      <span className="text-xs md:text-sm text-gray-400 line-through">
                        ₹{selected.mrp.toLocaleString("en-IN")}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Duration: {selected.duration}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 md:space-y-4">
                  {/* Includes */}
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1 md:mb-2 text-xs md:text-sm uppercase tracking-wide md:tracking-wider">
                      Includes:
                    </h4>
                    <ul className="grid grid-cols-1 gap-1 md:gap-2">
                      {selected.includes.map((i, idx) => (
                        <li
                          key={idx}
                          className="text-xs md:text-sm text-gray-600 flex gap-1 md:gap-2 break-words"
                        >
                          <span className="text-purple-500 flex-shrink-0">✔</span> {i}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Advantages + Brands */}
                  <div className="bg-gray-50 p-3 md:p-4 rounded-lg md:rounded-xl">
                    <h4 className="font-bold text-gray-800 mb-1 md:mb-2 text-xs md:text-sm uppercase tracking-wide md:tracking-wider">
                      Advantages:
                    </h4>
                    <ul className="space-y-1 md:space-y-1.5 mb-3">
                      {["Beautiful & Healthy Skin", "Clear & Brighter Face & Body"].map(
                        (a, idx) => (
                          <li
                            key={idx}
                            className="text-xs md:text-sm text-gray-900 flex gap-1 md:gap-2 items-start break-words"
                          >
                            <span className="mt-1 w-1 h-1 bg-gray-400 rounded-full flex-shrink-0" />{" "}
                            {a}
                          </li>
                        )
                      )}
                    </ul>

                    <h4 className="font-bold text-gray-800 mb-1 md:mb-2 text-xs md:text-sm uppercase tracking-wide md:tracking-wider">
                      Brands Used:
                    </h4>
                    <p className="text-xs md:text-sm text-gray-600 mb-3 break-words">
                      {selected.brands.join(", ")}
                    </p>

                    <h4 className="font-bold text-gray-800 mb-1 text-xs md:text-sm uppercase tracking-wide md:tracking-wider">
                      Adherence to WHO Guidelines:
                    </h4>
                    <ul className="space-y-1">
                      {["Single-Use Equipments", "All Tools are Sanitized"].map(
                        (g, idx) => (
                          <li
                            key={idx}
                            className="text-xs md:text-sm text-gray-900 flex gap-1 md:gap-2 items-start break-words"
                          >
                            <span className="mt-1 w-1 h-1 bg-gray-400 rounded-full flex-shrink-0" />{" "}
                            {g}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>

                {/* BOOK NOW → CALLS +91 9811923486 */}
                <button
                  onClick={handleBookNow}
                  className="w-full mt-4 md:mt-6 bg-purple-700 text-white py-2 md:py-3 rounded-xl text-sm md:text-base font-bold shadow-lg shadow-purple-200 active:scale-95 transition-transform"
                >
                  📞 Book Now
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
