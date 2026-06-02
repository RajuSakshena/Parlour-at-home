import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft } from "lucide-react";

import hairCutKids from "../images/Hair Cut Kids.jpg";
import babyHairCut from "../images/Baby Hair Cut.jpg";
import hairTrimming from "../images/Hair Trimming.jpg";
import normalHairCut from "../images/Normal Hair Cut.jpg";
import headMassage from "../images/Head Massage.jpg";

import lorealHairSpaS from "../images/Loreal Hair Spa - S.jpg";
import lorealHairSpaM from "../images/Loreal Hair Spa - M.jpg";
import lorealHairSpaL from "../images/Loreal Hair Spa - L.jpg";
import lorealDrySensitiveScalpAmpoule from "../images/Loreal Dry Sensitive Scalp Ampoule.jpg";
import lorealAntiDandruffAmpoule from "../images/Loreal Anti Dandruff Ampoule.jpg";

import lorealMajirelRootTouchUp from "../images/Loreal Majirel Root Touch Up.jpg";
import lorealInoaGlobalSmall from "../images/Loreal INOA Global - Small.jpg";
import lorealMajirelGlobalSmall from "../images/Loreal Majirel Global - Small.jpg";
import lorealInoaGlobalMedium from "../images/Loreal INOA Global - Medium.jpg";
import lorealMajirelGlobalMedium from "../images/Loreal Majirel Global - Medium.jpg";
import lorealInoaGlobalLarge from "../images/Loreal INOA Global - Large.jpg";
import lorealMajirelGlobalLarge from "../images/Loreal Majirel Global - Large.jpg";
import hennaColourApplication from "../images/Henna - Colour Application.jpg";

/* =========================
   NAV MENU
========================= */
const categories = ["Hair Cut", "Hair Treatment", "Hair Color"];

/* =========================
   TYPES
========================= */
type HairService = {
  title: string;
  duration: string;
  price: number;
  mrp: number;
  discount: string;
  image: string;
  includes: string[];
  info: string[];
};

/* =========================
   HAIR CUT DATA
========================= */
const hairCutServices: HairService[] = [
  {
    title: "Hair Cut Kids",
    duration: "20 minutes",
    price: 117,
    mrp: 195,
    discount: "40% Off",
    image: hairCutKids,
    includes: [],
    info: [],
  },
  {
    title: "Baby Hair Cut",
    duration: "20 minutes",
    price: 117,
    mrp: 195,
    discount: "40% Off",
    image: babyHairCut,
    includes: [],
    info: [],
  },
  {
    title: "Hair Trimming",
    duration: "30 minutes",
    price: 177,
    mrp: 295,
    discount: "40% Off",
    image: hairTrimming,
    includes: ["For trimming your damaged or uneven hair"],
    info: [],
  },
  {
    title: "Normal Hair Cut",
    duration: "15 minutes",
    price: 350,
    mrp: 500,
    discount: "30% Off",
    image: normalHairCut,
    includes: ["Straight, U shape, V Shape Cut"],
    info: [],
  },
  {
    title: "Head Massage",
    duration: "10 minutes",
    price: 100,
    mrp: 200,
    discount: "50% Off",
    image: headMassage,
    includes: ["Hair Oil to be provided by customer"],
    info: [],
  },
];

/* =========================
   HAIR TREATMENT DATA
========================= */
const spaInfoCommon = [
  "For best results add Ampoule separately",
  "Hair should be shampooed an hour before taking the spa and an hour after the spa with normal water only",
  "Shampoo or hair color is not recommended after hair spa",
  "Hair wash and blow dry is not a part of the service",
  "Any service related complaint should be reported within 24 hrs with pictures via email",
];

const hairTreatmentServices: HairService[] = [
  {
    title: "Loreal Hair Spa - S",
    duration: "40 minutes",
    price: 649,
    mrp: 1298,
    discount: "50% Off",
    image: lorealHairSpaS,
    includes: [
      "Hair Size: Small Length (above shoulder)",
      "Product Used: Loreal",
      "Ampoule is not included, kindly add separately",
    ],
    info: spaInfoCommon,
  },
  {
    title: "Loreal Hair Spa - M",
    duration: "40 minutes",
    price: 849,
    mrp: 1698,
    discount: "50% Off",
    image: lorealHairSpaM,
    includes: [
      "Hair Size: Medium Length (upto elbow)",
      "Product Used: Loreal",
      "Ampoule is not included, kindly add separately",
    ],
    info: spaInfoCommon,
  },
  {
    title: "Loreal Hair Spa - L",
    duration: "45 minutes",
    price: 1199,
    mrp: 2398,
    discount: "50% Off",
    image: lorealHairSpaL,
    includes: [
      "Hair Size: Large (upto waist)",
      "Product Used: Loreal",
      "Ampoule is not included, kindly add separately",
    ],
    info: spaInfoCommon,
  },
  {
    title: "L'oreal Dry & Sensitive Scalp Ampoule",
    duration: "0 minutes",
    price: 120,
    mrp: 120,
    discount: "0% Off",
    image: lorealDrySensitiveScalpAmpoule,
    includes: [
      "L'Oreal Paris Hair Spa Hydrating Concentrate",
      "Leaves your scalp & hair soft and supple",
      "Frizz free hair",
    ],
    info: [],
  },
  {
    title: "L'oreal Anti Dandruff Ampoule",
    duration: "0 minutes",
    price: 120,
    mrp: 120,
    discount: "0% Off",
    image: lorealAntiDandruffAmpoule,
    includes: [
      "L'Oreal Paris Hair Spa Hydrating Concentrate",
      "Leaves your scalp & hair soft and supple",
      "Relieves itchiness",
    ],
    info: [],
  },
];

/* =========================
   HAIR COLOR DATA
========================= */
const hairColorServices: HairService[] = [
  {
    title: "L'Oréal Majirel Root Touch Up",
    duration: "30 minutes",
    price: 700,
    mrp: 1400,
    discount: "50% Off",
    image: lorealMajirelRootTouchUp,
    includes: [
      "L'oreal Majirel hair color",
      "Shades: Black, Darkest Brown, Brown, Light Brown",
    ],
    info: [
      "Max upto 2 inches of coverage is included in root touch up",
      "Hair should be washed and dry before taking hair color service",
      "Hair wash & Blow dry are not a part of the service",
      "Hair spa is not recommended along with hair color service",
    ],
  },
  {
    title: "Loreal INOA Global - Small",
    duration: "45 minutes",
    price: 1349,
    mrp: 2698,
    discount: "50% Off",
    image: lorealInoaGlobalSmall,
    includes: [
      "Hair size: Small (Above shoulder)",
      "Basic shades: Black, Darkest Brown, Brown, Light Brown",
    ],
    info: [
      "Ammonia free hair colour",
      "Hair wash & Blow dry are not a part of the service",
      "Hair spa is not recommended along with hair color service",
    ],
  },
  {
    title: "L'Oreal Majirel Global - Small",
    duration: "45 minutes",
    price: 1200,
    mrp: 2400,
    discount: "50% Off",
    image: lorealMajirelGlobalSmall,
    includes: [
      "Hair size: Small (Above shoulder)",
      "Shades: Black, Darkest Brown, Brown, Light Brown",
    ],
    info: [],
  },
  {
    title: "Loreal INOA Global - Medium",
    duration: "60 minutes",
    price: 2100,
    mrp: 4200,
    discount: "50% Off",
    image: lorealInoaGlobalMedium,
    includes: [
      "Hair size: Medium (Upto elbow)",
      "Shades: Black, Darkest Brown, Brown, Light Brown",
    ],
    info: ["Ammonia free hair color"],
  },
  {
    title: "L'Oreal Majirel Global - Medium",
    duration: "60 minutes",
    price: 1900,
    mrp: 3800,
    discount: "50% Off",
    image: lorealMajirelGlobalMedium,
    includes: [
      "Hair size: Medium (Upto elbow)",
      "Shades: Black, Darkest Brown, Brown, Light Brown",
    ],
    info: [],
  },
  {
    title: "Loreal INOA Global - Large",
    duration: "75 minutes",
    price: 2599,
    mrp: 5198,
    discount: "50% Off",
    image: lorealInoaGlobalLarge,
    includes: [
      "Hair Size: Large (Upto waist)",
      "Shades: Black, Darkest Brown, Brown, Light Brown",
    ],
    info: ["Ammonia free hair color"],
  },
  {
    title: "L'Oreal Majirel Global - Large",
    duration: "75 minutes",
    price: 2400,
    mrp: 4800,
    discount: "50% Off",
    image: lorealMajirelGlobalLarge,
    includes: [
      "Hair size: Large (Upto waist)",
      "Shades: Black, Darkest Brown, Brown, Light Brown",
    ],
    info: [],
  },
  {
    title: "Henna / Colour Application",
    duration: "30 minutes",
    price: 350,
    mrp: 700,
    discount: "50% Off",
    image: hennaColourApplication,
    includes: ["Henna / Colour to be provided by the customer"],
    info: [
      "Hair should be washed and dry before taking service",
      "Hair wash & Blow dry are not a part of the service",
      "Hair spa is not recommended along with this service",
    ],
  },
];

const allData: Record<string, HairService[]> = {
  "Hair Cut": hairCutServices,
  "Hair Treatment": hairTreatmentServices,
  "Hair Color": hairColorServices,
};

// Compute total offer count for structured data
const totalOfferCount =
  hairCutServices.length +
  hairTreatmentServices.length +
  hairColorServices.length;

// Compute min and max price for structured data
const allPrices = [
  ...hairCutServices.map((s) => s.price),
  ...hairTreatmentServices.map((s) => s.price),
  ...hairColorServices.map((s) => s.price),
];
const minPrice = Math.min(...allPrices);
const maxPrice = Math.max(...allPrices);

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
export default function HairServices() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<HairService | null>(null);
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
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.parlouratdoorstep.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://www.parlouratdoorstep.com/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Hair Services at Home",
        item: "https://www.parlouratdoorstep.com/services/hair",
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Hair Services",
    provider: {
      "@type": "LocalBusiness",
      name: "Parlour at Doorstep",
      telephone: "+919811923486",
      url: "https://www.parlouratdoorstep.com",
      areaServed: {
        "@type": "City",
        name: "Delhi NCR",
      },
    },
    areaServed: ["Delhi", "Noida", "Gurugram", "Ghaziabad", "Faridabad"],
    description:
      "Professional hair services at home including Hair Cut, Hair Spa, and Hair Color. Certified beauticians bring salon-quality treatments to your doorstep in Delhi NCR.",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      lowPrice: minPrice,
      highPrice: maxPrice,
      offerCount: totalOfferCount,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Hair Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hair Cut" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hair Treatment" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hair Color" } },
      ],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What types of hair services do you offer at home?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer professional Hair Cut, Hair Spa treatments (L'Oreal), and Hair Color services including global color, root touch-up, and henna application. All services are provided by certified beauticians.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide hair spa treatments at home?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we offer L'Oreal Hair Spa treatments in three sizes: Small, Medium, and Large. We also have specialized ampoules for dry/sensitive scalp and anti-dandruff.",
        },
      },
      {
        "@type": "Question",
        name: "What hair color brands do you use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We use premium L'Oreal products including Majirel and INOA (ammonia-free) hair colors. Basic shades include Black, Darkest Brown, Brown, and Light Brown.",
        },
      },
      {
        "@type": "Question",
        name: "What is the price range for hair services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `Our hair services start from ₹${minPrice} for head massage and go up to ₹${maxPrice} for premium hair color services. Most services are available at 30-50% discount.`,
        },
      },
      {
        "@type": "Question",
        name: "Which areas do you serve?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We serve Delhi NCR including Delhi, Noida, Gurugram, Ghaziabad, and Faridabad.",
        },
      },
      {
        "@type": "Question",
        name: "How do I book a hair service?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can book by clicking the 'Book Now' button or calling us directly at +91 9811923486. You can also reach us on WhatsApp using the floating button on the right.",
        },
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Hair Services at Home in Delhi NCR | Parlour at Doorstep</title>
        <meta
          name="description"
          content="Book professional hair services at home in Delhi, Noida, Gurugram, Ghaziabad and Faridabad. Haircuts, hair spa, hair color by certified beauticians."
        />
        <link rel="canonical" href="https://www.parlouratdoorstep.com/services/hair" />
        <meta property="og:title" content="Hair Services at Home in Delhi NCR | Parlour at Doorstep" />
        <meta
          property="og:description"
          content="Book professional hair services at home in Delhi, Noida, Gurugram, Ghaziabad and Faridabad. Haircuts, hair spa, hair color by certified beauticians."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.parlouratdoorstep.com/services/hair" />
        <meta property="og:site_name" content="Parlour at Doorstep" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hair Services at Home in Delhi NCR | Parlour at Doorstep" />
        <meta
          name="twitter:description"
          content="Book professional hair services at home in Delhi, Noida, Gurugram, Ghaziabad and Faridabad. Haircuts, hair spa, hair color by certified beauticians."
        />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <section className="bg-[#f6edff] min-h-screen">
        {/* INJECT FLOATING BUTTON STYLES */}
        <style>{floatingStyles}</style>

        {/* HEADER WITH BACK BUTTON */}
        <div className="py-4 text-center bg-white border-b relative">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors shadow-sm active:scale-95"
            aria-label="Go back"
          >
            <ArrowLeft className="w-4 h-4 text-gray-700" />
          </button>

          <h1 className="text-xl font-extrabold text-gray-900 tracking-tight">
            Hair
          </h1>
          <p className="text-xs text-gray-500 mt-0.5 uppercase tracking-widest">
            Premium Salon Services
          </p>
        </div>

        {/* NAV BAR */}
        <div className="sticky top-0 z-40 bg-[#f6edff] py-2 shadow-sm">
          <div className="flex justify-center">
            <div className="flex gap-2 overflow-x-auto px-2 no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => scrollToSection(cat)}
                  className="px-3 py-1 rounded-full bg-purple-200 text-purple-800 text-xs font-semibold whitespace-nowrap hover:bg-purple-300 transition-colors active:scale-95"
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* SECTIONS - Fixed 3 columns grid, compact cards */}
        <div className="max-w-7xl mx-auto px-3 py-6 space-y-10">
          {categories.map((cat) => (
            <div key={cat} ref={(el) => (sectionRefs.current[cat] = el)}>
              <h2 className="text-base font-black mb-3 uppercase tracking-tight">
                {cat}
              </h2>

              <div className="grid grid-cols-3 gap-3">
                {allData[cat].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-lg shadow-sm hover:shadow-md flex flex-col overflow-hidden transition-shadow"
                  >
                    {/* IMAGE - fixed height, object-cover */}
                    <div className="h-32 w-full overflow-hidden bg-gray-100">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover object-center"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>

                    {/* CONTENT - compact padding and text-xs */}
                    <div className="p-2 flex-1 flex flex-col">
                      <h3 className="text-xs font-bold text-gray-800 break-words leading-tight">
                        {item.title}
                      </h3>

                      <div className="flex flex-wrap items-center gap-x-1 gap-y-0.5 mt-1">
                        <span className="font-bold text-sm">₹{item.price}</span>
                        <span className="line-through text-[10px] text-gray-400">
                          ₹{item.mrp}
                        </span>
                        <span className="bg-orange-100 text-orange-700 text-[9px] font-bold px-1 py-0.5 rounded-full">
                          {item.discount}
                        </span>
                      </div>
                      <p className="text-[10px] text-gray-400 mt-0.5">⏱ {item.duration}</p>

                      <ul className="mt-2 space-y-0.5 flex-1 text-[10px] text-gray-500">
                        {item.includes.slice(0, 2).map((i, k) => (
                          <li key={k} className="break-words">• {i}</li>
                        ))}
                        {item.includes.length > 2 && (
                          <li className="text-purple-600 text-[9px]">
                            +{item.includes.length - 2} more
                          </li>
                        )}
                      </ul>

                      <button
                        onClick={() => setSelected(item)}
                        className="mt-2 text-purple-700 text-[10px] font-bold hover:underline self-start active:scale-95 transition-transform"
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
        <div className="fixed right-3 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3 items-center">
          {/* WhatsApp Button */}
          <div className="relative flex items-center justify-center">
            <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60 pulse-ring" />
            <a
              href="https://wa.me/919811923486"
              target="_blank"
              rel="noopener noreferrer"
              className="float-btn relative w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center shadow-xl shadow-green-300/50 active:scale-95 transition-transform"
              aria-label="Chat on WhatsApp"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                className="w-5 h-5"
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
              className="float-btn relative w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center shadow-xl shadow-purple-300/50 active:scale-95 transition-transform"
              aria-label="Call us"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                className="w-5 h-5"
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

        {/* DETAIL MODAL - compact version */}
        {selected && (
          <div
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-3"
            onClick={() => setSelected(null)}
          >
            <div
              className="bg-white max-w-[400px] w-full rounded-xl overflow-hidden relative shadow-2xl flex flex-col max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-2 right-2 z-20 bg-gray-100 text-gray-800 w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs active:scale-95 transition-transform"
                aria-label="Close modal"
              >
                ✕
              </button>
              <div className="overflow-y-auto p-3">
                <div className="flex gap-2 mb-3">
                  <div className="w-16 h-16 flex items-center justify-center bg-white rounded-lg">
                    <img
                      src={selected.image}
                      alt={selected.title}
                      className="max-w-full max-h-full object-contain rounded-lg"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-gray-900 leading-tight break-words">
                      {selected.title}
                    </h2>
                    <div className="mt-1 flex flex-wrap items-baseline gap-1">
                      <span className="text-sm font-bold text-purple-700">
                        ₹{selected.price}
                      </span>
                      <span className="text-xs text-gray-400 line-through">
                        ₹{selected.mrp}
                      </span>
                    </div>
                    <p className="text-[10px] text-gray-500 mt-0.5">
                      Duration: {selected.duration}
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1 text-[10px] uppercase tracking-wide">
                      Includes:
                    </h4>
                    <ul className="grid grid-cols-1 gap-1">
                      {selected.includes.map((i, idx) => (
                        <li
                          key={idx}
                          className="text-xs text-gray-600 flex gap-1 break-words"
                        >
                          <span className="text-purple-500 flex-shrink-0">✔</span> {i}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {selected.info.length > 0 && (
                    <div className="bg-gray-50 p-2 rounded-lg">
                      <h4 className="font-bold text-gray-800 mb-1 text-[10px] uppercase tracking-wide">
                        Information:
                      </h4>
                      <ul className="space-y-1">
                        {selected.info.map((i, idx) => (
                          <li
                            key={idx}
                            className="text-xs text-gray-900 flex gap-1 items-start break-words"
                          >
                            <span className="mt-1 w-1 h-1 bg-gray-400 rounded-full flex-shrink-0" />{" "}
                            {i}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* BOOK NOW */}
                <button
                  onClick={handleBookNow}
                  className="w-full mt-3 bg-purple-700 text-white py-1.5 rounded-lg text-xs font-bold shadow-lg shadow-purple-200 active:scale-95 transition-transform"
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
