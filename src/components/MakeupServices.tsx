import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import luxuryPartyMakeup from "../images/Luxury Party Makeup.jpg";
import hdPartyMakeUp from "../images/HD Party Make Up.jpg";
import luxuryEngagementMakeUp from "../images/Luxury Engagement Make Up.jpg";
import hdEngagementMakeUp from "../images/HD Engagement Make Up.jpg";
import airBrushEngagementMakeup from "../images/Air Brush Engagement Makeup.jpg";
import luxuryBridalMakeup from "../images/Luxury Bridal Makeup.jpg";
import hdBridalMakeUp from "../images/HD Bridal Make Up.jpg";
import airBrushBridalMakeUp from "../images/Air Brush Bridal Make Up.jpg";
import luxuryPartyGroupMakeUp from "../images/Luxury Party Group Make Up.jpg";
import hdPartyGroupMakeUp from "../images/HD Party Group Make Up.jpg";
import sareeDraping from "../images/Saree Draping.jpg";
import blowDry from "../images/Blow Dry.jpg";
import straightening from "../images/Straightening.jpg";
import hairCurl from "../images/Hair Curl.jpg";
import advanceHairDo from "../images/Advance Hair Do.jpg";
import basicGroupHairStyling from "../images/Basic Group Hair Styling.jpg";

/* =========================
   NAV MENU
========================= */
const categories = [
  "Party Makeup",
  "Engagement Makeup",
  "Bridal Makeup",
  "Group Deals",
  "Add Ons",
];

/* =========================
   TYPES
========================= */
type MakeupService = {
  title: string;
  price: number;
  mrp: number;
  discount: string;
  duration: string;
  image: string;
  includes: string[];
  info?: string[];
};

/* =========================
   DATA
========================= */
const partyMakeup: MakeupService[] = [
  {
    title: "Luxury Party Makeup",
    price: 2999,
    mrp: 5998,
    discount: "50% Off",
    duration: "90 minutes",
    image: luxuryPartyMakeup,
    includes: ["Advance Makeup", "Advance Hair Do", "Professional Makeup Artist"],
    info: [
      "Advance long lasting make up with good coverage",
      "Advance eye make up : Smokey/Cut crease/Glitter",
      "Advance Hair Do - Any hairstyle of your choice(Crimping/Messy bun/Braids , etc)",
      "Saree/Dupatta/Dress Draping is not included",
      "Brands included are PAC , Forever52 ,Kryolan,L'oreal , Faces canada , Nykaa , Make up Revolution",
      "Eyelashes & accessories available on chargeable basis",
    ],
  },
  {
    title: "HD Party Make Up",
    price: 3999,
    mrp: 6665,
    discount: "40% Off",
    duration: "100 minutes",
    image: hdPartyMakeUp,
    includes: ["Premium HD Party Make Up", "Advance Hair Do", "Professional Makeup Artist"],
    info: [
      "Flawless HD coverage Make Up that will last longer than your occasion",
      "Advance eye make up : Smokey/Cut crease/Glitter",
      "Advance Hair Do - Crimping/ Fancy Bun / Fancy Braid",
      "Saree/Dupatta/Dress Draping is complimentary",
      "Brands included are MAC HD , PAC , Forever52 , Kryolan",
      "Eyelashes & accessories available on chargeable basis",
    ],
  },
];

const engagementMakeup: MakeupService[] = [
  {
    title: "Luxury Engagement Make Up",
    price: 3999,
    mrp: 7998,
    discount: "50% Off",
    duration: "180 minutes",
    image: luxuryEngagementMakeUp,
    includes: [
      "Advance Makeup",
      "Advance Hair Do",
      "Dress/Saree Draping is not included",
      "Professional Makeup Artist",
    ],
    info: [
      "Advance Make up",
      "Advance eye make up : Smokey/Cut crease/Glitter",
      "Advance Hair Do - Crimping/ Fancy Bun / Fancy Braid",
      "Saree/Dupatta/Dress Draping is not included",
      "Brands included are PAC , Forever52 , Kryolan ,etc",
      "Eyelashes & accessories available on chargeable basis",
    ],
  },
  {
    title: "HD Engagement Make Up",
    price: 5099,
    mrp: 10198,
    discount: "50% Off",
    duration: "180 minutes",
    image: hdEngagementMakeUp,
    includes: [
      "Premium HD Engagement Make up",
      "Advance Hair Do",
      "Complimentary Dress/Saree Draping",
      "Professional Makeup Artist",
    ],
    info: [
      "Flawless HD coverage Make Up that will last longer than your occasion",
      "Eyelashes are included",
      "Advance eye make up : Smokey/Cut crease/Glitter",
      "Advance Hair Do - Crimping/ Fancy Bun / Fancy Braid",
      "Saree/Dupatta/Dress Draping is complimentary",
      "Brands included are MAC HD , PAC , Forever52 , Kryolan",
      "Accessories available on chargeable basis",
    ],
  },
  {
    title: "Air Brush Engagement Makeup",
    price: 6999,
    mrp: 13998,
    discount: "50% Off",
    duration: "180 minutes",
    image: airBrushEngagementMakeup,
    includes: [
      "Air Brush Engagement Make up",
      "Advance Hair Do",
      "Complimentary Dress/Saree Draping",
      "Professional Makeup Artist",
    ],
    info: [
      "Air Brush Make Up that will cover all the blemishes/pores and give flawless finish which will last longer than your occasion",
      "Eyelashes are included",
      "Advance eye make up : Smokey/Cut crease/Glitter",
      "Advance Hair Do - Crimping/ Fancy Bun / Fancy Braid",
      "Saree/Dupatta/Dress Draping is complimentary",
      "Brands included are Temptu ,MAC HD , PAC , Forever52 , Kryolan",
      "Accessories available on chargeable basis",
    ],
  },
];

const bridalMakeup: MakeupService[] = [
  {
    title: "Luxury Bridal Makeup",
    price: 6999,
    mrp: 13998,
    discount: "50% Off",
    duration: "240 minutes",
    image: luxuryBridalMakeup,
    includes: [
      "Luxury Advance Bridal Make up",
      "Advance Hair Do",
      "Dress/Saree Draping",
      "Professional Makeup Artist",
    ],
    info: [
      "Advance Bridal Make up",
      "Eyelashes are included",
      "Advance eye make up : Smokey/Cut crease/Glitter",
      "Advance Hair Do - Crimping/ Fancy Bun / Fancy Braid",
      "Saree/Dupatta/Dress Draping is not included",
      "Brands included are PAC , Forever52 , Kryolan ,etc",
      "Accessories available on chargeable basis",
    ],
  },
  {
    title: "HD Bridal Make Up",
    price: 10499,
    mrp: 20998,
    discount: "50% Off",
    duration: "280 minutes",
    image: hdBridalMakeUp,
    includes: [
      "Premium HD Bridal Make up",
      "Advance Hair Do",
      "Dress/Saree Draping",
      "Professional Makeup Artist",
    ],
    info: [
      "Flawless HD coverage Make Up that will last longer than your occasion",
      "Eyelashes are included",
      "Advance Bridal eye make up : Smokey/Cut crease/Glitter",
      "Advance Bridal Hair Do - Crimping/ Fancy Bun / Fancy Braid",
      "Saree/Dupatta/Dress Draping is complimentary",
      "Brands included are MAC HD , PAC , Forever52 , Kryolan",
      "Accessories available on chargeable basis",
    ],
  },
  {
    title: "Air Brush Bridal Make Up",
    price: 15499,
    mrp: 30998,
    discount: "50% Off",
    duration: "360 minutes",
    image: airBrushBridalMakeUp,
    includes: [
      "Air Brush Bridal Make UP",
      "Advance Hair Do",
      "Dress/Saree Draping",
      "Professional Makeup Artist",
    ],
    info: [
      "Air Brush Make Up that will cover all the blemishes/pores and give flawless finish which will last longer than your occasion",
      "Eyelashes are included",
      "Advance Bridal eye make up : Smokey/Cut crease/Glitter",
      "Advance Bridal Hair Do - Crimping/ Fancy Bun / Fancy Braid",
      "Saree/Dupatta/Dress Draping is complimentary",
      "Brands included are Temptu ,MAC HD , PAC , Forever52 , Kryolan",
      "Accessories available on chargeable basis",
    ],
  },
];

const groupDeals: MakeupService[] = [
  {
    title: "Luxury Party Group Make Up",
    price: 8499,
    mrp: 16998,
    discount: "50% Off",
    duration: "360 minutes",
    image: luxuryPartyGroupMakeUp,
    includes: ["Advance Party Make Up", "Advance Hair do", "Package for group of 3"],
    info: [
      "Advance long lasting make up with good coverage",
      "Advance eye make up : Smokey/Cut crease/Glitter",
      "Advance Hair Do - Any hairstyle of your choice(Crimping/Messy bun/Braids , etc)",
      "Saree/Dupatta/Dress Draping is not included",
      "Brands included are PAC , Forever52 ,Kryolan,L'oreal , Faces canada , Nykaa , Make up Revolution",
      "Eyelashes & accessories available on chargeable basis",
    ],
  },
  {
    title: "HD Party Group Make Up",
    price: 11499,
    mrp: 22998,
    discount: "50% Off",
    duration: "360 minutes",
    image: hdPartyGroupMakeUp,
    includes: ["HD Party Make up", "Advance Hair do", "Package for group of 3"],
    info: [
      "Flawless HD coverage Make Up that will last longer than your occasion",
      "Advance eye make up : Smokey/Cut crease/Glitter",
      "Advance Hair Do - Crimping/ Fancy Bun / Fancy Braid",
      "Saree/Dupatta/Dress Draping is complimentary",
      "Brands included are MAC HD , PAC , Forever52 , Kryolan",
      "Eyelashes & accessories available on chargeable basis",
    ],
  },
];

const addOns: MakeupService[] = [
  {
    title: "Saree Draping",
    price: 350,
    mrp: 389,
    discount: "10% Off",
    duration: "15 minutes",
    image: sareeDraping,
    includes: ["Saree draping / Dress Draping"],
    info: ["Only available with booking of make up services"],
  },
  {
    title: "Blow Dry",
    price: 499,
    mrp: 998,
    discount: "50% Off",
    duration: "30 minutes",
    image: blowDry,
    includes: ["For Any Length", "Only available with booking of make up services"],
    info: ["Hair wash is not included", "Hair should be washed before appointment time"],
  },
  {
    title: "Straightening",
    price: 499,
    mrp: 998,
    discount: "50% Off",
    duration: "35 minutes",
    image: straightening,
    includes: ["For Any Length", "Only available with booking of make up services"],
    info: [
      "Hair wash & Blow dry is not included",
      "Hair should be washed and dry before appointment time",
    ],
  },
  {
    title: "Hair Curl",
    price: 499,
    mrp: 998,
    discount: "50% Off",
    duration: "35 minutes",
    image: hairCurl,
    includes: ["For Any Length", "Only available with booking of make up services"],
    info: [
      "Hair wash & Blow dry is not included",
      "Hair should be washed and dry before appointment time",
    ],
  },
  {
    title: "Advance Hair Do",
    price: 990,
    mrp: 1500,
    discount: "34% Off",
    duration: "65 minutes",
    image: advanceHairDo,
    includes: ["For Any length", "Only available with booking of make up services"],
    info: [
      "Hair wash & Blow dry is not included",
      "Hair should be washed and dry before appointment time",
      "Advance Hair Do - Any hair style of your choice including crimping/messy bun,braiding",
      "Accessories available on chargeable basis",
    ],
  },
  {
    title: "Basic Group Hair Styling",
    price: 1999,
    mrp: 3998,
    discount: "50% Off",
    duration: "180 minutes",
    image: basicGroupHairStyling,
    includes: ["Hair styling for group of 4", "Only available with booking of make up services"],
    info: [
      "Hair wash & Blow dry is not included",
      "Hair should be washed and dry before appointment time",
      "Basic Hair Do - Ironing/Curling/Basic bun",
    ],
  },
];

/* =========================
   MERGED DATA
========================= */
const allData: Record<string, MakeupService[]> = {
  "Party Makeup": partyMakeup,
  "Engagement Makeup": engagementMakeup,
  "Bridal Makeup": bridalMakeup,
  "Group Deals": groupDeals,
  "Add Ons": addOns,
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
export default function MakeupServices() {
  const navigate = useNavigate();
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const [selected, setSelected] = useState<MakeupService | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (cat: string) => {
    sectionRefs.current[cat]?.scrollIntoView({ behavior: "smooth" });
  };

  const handleBookNow = () => {
    window.location.href = "tel:+919811923486";
  };

  return (
    <section className="bg-[#f6edff] min-h-screen">
      {/* INJECT FLOATING BUTTON STYLES */}
      <style>{floatingStyles}</style>

      {/* TITLE SECTION WITH BACK BUTTON */}
      <div className="py-4 md:py-6 lg:py-8 text-center bg-white border-b relative">
        <button
          onClick={() => navigate(-1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors shadow-sm"
        >
          <ArrowLeft className="w-5 h-5 text-gray-700" />
        </button>

        <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
          Makeup
        </h1>
        <p className="text-xs md:text-sm text-gray-500 mt-1 uppercase tracking-widest">
          Premium Salon Services
        </p>
      </div>

      {/* NAV BAR */}
      <div className="sticky top-0 z-40 bg-[#f6edff] py-3 md:py-4 border-b">
        <div className="flex justify-center">
          <div className="flex gap-3 overflow-x-auto px-2 md:px-4 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => scrollToSection(cat)}
                className="px-4 py-1.5 md:px-5 md:py-2 rounded-full bg-purple-200 text-purple-800 text-sm md:text-base font-semibold whitespace-nowrap hover:bg-purple-300"
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
            <h2 className="text-lg md:text-xl lg:text-2xl font-black mb-4 md:mb-6">{cat}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {allData[cat].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl md:rounded-2xl shadow-sm hover:shadow-lg flex flex-col md:flex-row md:items-stretch overflow-hidden transition-shadow"
                >
                  <div className="w-full h-48 md:w-36 lg:w-44 md:h-auto flex-shrink-0 overflow-hidden rounded-t-xl md:rounded-l-xl md:rounded-t-none">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>

                  <div className="p-3 md:p-4 flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="text-sm md:text-base font-bold text-gray-800">{item.title}</h3>
                      <button
                        onClick={handleBookNow}
                        className="bg-purple-700 text-white px-3 md:px-4 py-1 md:py-1.5 rounded-xl text-xs md:text-sm font-bold active:scale-95 transition-transform"
                      >
                        ADD
                      </button>
                    </div>

                    <div className="flex items-center gap-2 mt-1">
                      <span className="font-black text-base md:text-lg lg:text-xl">₹{item.price}</span>
                      <span className="line-through text-xs text-gray-400">₹{item.mrp}</span>
                      <span className="text-orange-600 text-xs font-bold">{item.discount}</span>
                    </div>

                    <p className="text-xs text-gray-400 mt-1">⏱ {item.duration}</p>

                    <ul className="mt-2 md:mt-3 space-y-1">
                      {item.includes.map((i, k) => (
                        <li key={k} className="text-xs md:text-sm text-gray-500">• {i}</li>
                      ))}
                    </ul>

                    <button
                      onClick={() => setSelected(item)}
                      className="mt-2 md:mt-3 text-purple-700 text-xs md:text-sm font-bold hover:underline"
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
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4 items-center">
        {/* WhatsApp Button */}
        <div className="relative flex items-center justify-center">
          <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60 pulse-ring" />
          <a
            href="https://wa.me/919811923486"
            target="_blank"
            rel="noopener noreferrer"
            className="float-btn relative w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-xl shadow-green-300/50"
            aria-label="Chat on WhatsApp"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-8 h-8" fill="none">
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
            className="float-btn relative w-14 h-14 rounded-full bg-purple-600 flex items-center justify-center shadow-xl shadow-purple-300/50"
            aria-label="Call us"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-7 h-7" fill="none">
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-xl md:rounded-2xl max-w-[480px] w-full mx-4 relative max-h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 z-20 bg-gray-100 text-gray-800 w-8 h-8 rounded-full flex items-center justify-center font-bold"
            >
              ✕
            </button>

            <div className="overflow-y-auto p-4 md:p-6">
              <div className="flex gap-2 md:gap-4 mb-4 md:mb-6">
                <div className="w-20 h-20 md:w-28 md:h-28 bg-gray-100 flex items-center justify-center rounded-xl flex-shrink-0">
                  <img
                    src={selected.image}
                    className="max-w-full max-h-full object-contain"
                    alt={selected.title}
                  />
                </div>

                <div>
                  <h2 className="text-lg md:text-xl font-bold text-gray-900 leading-tight">
                    {selected.title}
                  </h2>
                  <div className="mt-2 flex items-baseline gap-1 md:gap-2">
                    <span className="text-base md:text-lg font-bold text-purple-700">
                      ₹{selected.price}
                    </span>
                    <span className="text-xs md:text-sm text-gray-400 line-through">
                      ₹{selected.mrp}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Duration: {selected.duration}</p>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-gray-800 mb-1 md:mb-2 text-xs md:text-sm uppercase tracking-wide md:tracking-wider">
                  Includes:
                </h4>
                <ul className="space-y-1 md:space-y-2">
                  {selected.includes.map((i, idx) => (
                    <li key={idx} className="text-xs md:text-sm text-gray-600 flex gap-1 md:gap-2">
                      <span className="text-purple-500">✔</span> {i}
                    </li>
                  ))}
                </ul>
              </div>

              {selected.info && (
                <div className="bg-gray-50 p-3 md:p-4 rounded-lg md:rounded-xl mt-3 md:mt-4">
                  <h4 className="font-bold text-gray-800 mb-1 md:mb-2 text-xs md:text-sm uppercase tracking-wide md:tracking-wider">
                    Information:
                  </h4>
                  <ul className="space-y-1 md:space-y-1.5">
                    {selected.info.map((i, idx) => (
                      <li key={idx} className="text-xs md:text-sm text-gray-900 flex gap-1 md:gap-2 items-start">
                        <span className="mt-1 w-1 h-1 bg-gray-400 rounded-full flex-shrink-0" />
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

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
  );
}