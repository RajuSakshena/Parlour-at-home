import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

/* =========================
   IMAGE IMPORTS (src/images/)
========================= */
import backScrub from "../images/Back Scrub.jpg";
import fullBodyScrub from "../images/Full Body Scrub.jpg";
import backPolish from "../images/Back Polish.jpg";
import fullBodyPolish from "../images/Full Body Polish.jpg";
import fullBodyMassage from "../images/Full Body Massage.jpg";
import rejuvenatingMassage from "../images/Rejuvenating Massage.jpg";
import healthyHeadMassage from "../images/Healthy Head Massage.jpg";
import shoulderBackMassage from "../images/Shoulder & Back Massage.jpg";
import footMassage from "../images/Foot Massage.jpg";
import armsMassage from "../images/Arms Massage.jpg";

/* =========================
   NAV MENU
========================= */
const categories = ["Body Polish", "Massage"];

/* =========================
   TYPES
========================= */
type Service = {
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
   BODY POLISH DATA
========================= */
const bodyPolishServices: Service[] = [
  {
    title: "Back Scrub",
    duration: "20 minutes",
    price: 349,
    mrp: 436,
    discount: "20% Off",
    image: backScrub,
    includes: [
      "Removes dead skin cells & reduces tanning",
      "Leaves skin smooth & supple",
      "Unclogs pores & helps absorb moisture better",
    ],
    info: [],
  },
  {
    title: "Full Body Scrub",
    duration: "45 minutes",
    price: 599,
    mrp: 1198,
    discount: "50% Off",
    image: fullBodyScrub,
    includes: [
      "Removes dead skin cells & reduces tanning",
      "Leaves skin smooth & supple",
      "Unclogs pores & helps absorb moisture better",
    ],
    info: ["Face scrub and body massage is not included"],
  },
  {
    title: "Back Polish",
    duration: "25 minutes",
    price: 399,
    mrp: 499,
    discount: "20% Off",
    image: backPolish,
    includes: [
      "4 Steps Back Polishing",
      "Promotes regeneration of new cells",
      "Promotes blood circulation",
      "Eliminates superficial signs of sun damage",
    ],
    info: [
      "Four steps include Oil massage, scrub, pack & moisturiser",
      "Face is not included",
      "For all skin types",
    ],
  },
  {
    title: "Full Body Polish",
    duration: "75 minutes",
    price: 1099,
    mrp: 2198,
    discount: "50% Off",
    image: fullBodyPolish,
    includes: [
      "4 Steps Body Polishing",
      "Promotes regeneration of new cells",
      "Promotes blood circulation",
      "Eliminates superficial signs of sun damage",
    ],
    info: [
      "Four steps include Oil massage, Body scrub, body pack & moisturiser",
      "Quick shower recommended after pack application",
      "Face is not included",
      "For all skin types",
    ],
  },
];

/* =========================
   MASSAGE DATA
========================= */
const massageServices: Service[] = [
  {
    title: "Full Body Massage",
    duration: "60 minutes",
    price: 899,
    mrp: 1798,
    discount: "50% Off",
    image: fullBodyMassage,
    includes: ["Extreme Relaxing Massage", "Relieves Stress"],
    info: ["Face is not covered"],
  },
  {
    title: "Rejuvenating Massage",
    duration: "90 minutes",
    price: 1199,
    mrp: 2398,
    discount: "50% Off",
    image: rejuvenatingMassage,
    includes: [
      "Full Body Massage",
      "Full Body Scrub",
      "Rejuvenates & hydrates skin",
    ],
    info: [
      "60 min Full body massage",
      "30 min Full body scrub",
      "Face & head massage is not included",
    ],
  },
  {
    title: "Healthy Head Massage",
    duration: "20 minutes",
    price: 299,
    mrp: 374,
    discount: "20% Off",
    image: healthyHeadMassage,
    includes: [
      "Stress buster",
      "Improves scalp health",
      "Promotes hair growth",
    ],
    info: [],
  },
  {
    title: "Shoulder & Back Massage",
    duration: "20 minutes",
    price: 349,
    mrp: 436,
    discount: "20% Off",
    image: shoulderBackMassage,
    includes: [
      "Reduces tightness",
      "Improves blood circulation",
      "Reduces pain",
    ],
    info: [
      "Massage decreases muscle tension",
      "Helps reduce pain & improve flexibility",
      "Therapeutic massage helps back pain",
    ],
  },
  {
    title: "Foot Massage",
    duration: "20 minutes",
    price: 349,
    mrp: 436,
    discount: "20% Off",
    image: footMassage,
    includes: [
      "Promotes better sleep",
      "Improves blood circulation",
      "Helps in relaxation",
    ],
    info: [
      "Regular foot massage keeps feet healthy",
      "Stimulates muscles & reduces stiffness",
      "Reduces ankle & heel pain",
    ],
  },
  {
    title: "Arms Massage",
    duration: "20 minutes",
    price: 349,
    mrp: 436,
    discount: "20% Off",
    image: armsMassage,
    includes: [
      "Improves blood circulation",
      "Relieves pain",
      "Removes energy blockages",
    ],
    info: [],
  },
];

const allData: Record<string, Service[]> = {
  "Body Polish": bodyPolishServices,
  Massage: massageServices,
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
export default function MassageServices() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<Service | null>(null);
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

      {/* HEADER WITH BACK BUTTON */}
      <div className="py-4 md:py-6 lg:py-8 text-center bg-white border-b relative">
        <button
          onClick={() => navigate(-1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors shadow-sm"
        >
          <ArrowLeft className="w-5 h-5 text-gray-700" />
        </button>

        <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
          Massage Services
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
                className="px-4 py-1.5 md:px-5 md:py-2 rounded-full bg-purple-200 text-purple-800 text-sm md:text-base font-semibold whitespace-nowrap hover:bg-purple-300 transition-colors"
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

            <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {allData[cat].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl md:rounded-2xl shadow-sm hover:shadow-lg flex flex-col md:flex-row md:items-stretch overflow-hidden transition-shadow"
                >
                  {/* IMAGE */}
                  <div className="w-full h-48 md:w-36 lg:w-44 md:h-auto flex-shrink-0 overflow-hidden rounded-t-xl md:rounded-l-xl md:rounded-t-none">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain object-center"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="p-4 md:p-5 flex-1 flex flex-col">
                    <h3 className="text-sm md:text-base font-bold text-gray-800">
                      {item.title}
                    </h3>

                    <div className="flex items-center gap-2 mt-2">
                      <span className="font-black text-base md:text-lg lg:text-xl">
                        ₹{item.price}
                      </span>
                      <span className="line-through text-xs text-gray-400">
                        ₹{item.mrp}
                      </span>
                      <span className="text-orange-600 text-xs font-bold">
                        {item.discount}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">⏱ {item.duration}</p>

                    <ul className="mt-3 md:mt-4 space-y-1 flex-1 text-xs md:text-sm text-gray-500">
                      {item.includes.map((i, k) => (
                        <li key={k}>• {i}</li>
                      ))}
                    </ul>

                    <button
                      onClick={() => setSelected(item)}
                      className="mt-4 text-purple-700 text-xs md:text-sm font-bold hover:underline self-start"
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              className="w-8 h-8"
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
            className="float-btn relative w-14 h-14 rounded-full bg-purple-600 flex items-center justify-center shadow-xl shadow-purple-300/50"
            aria-label="Call us"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              className="w-7 h-7"
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
              className="absolute top-4 right-4 z-20 bg-gray-100 text-gray-800 w-8 h-8 rounded-full flex items-center justify-center font-bold"
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
                  <p className="text-xs text-gray-500 mt-1">
                    Duration: {selected.duration}
                  </p>
                </div>
              </div>
              <div className="space-y-3 md:space-y-4">
                <div>
                  <h4 className="font-bold text-gray-800 mb-1 md:mb-2 text-xs md:text-sm uppercase tracking-wide md:tracking-wider">
                    Includes:
                  </h4>
                  <ul className="grid grid-cols-1 gap-1 md:gap-2">
                    {selected.includes.map((i, idx) => (
                      <li
                        key={idx}
                        className="text-xs md:text-sm text-gray-600 flex gap-1 md:gap-2"
                      >
                        <span className="text-purple-500">✔</span> {i}
                      </li>
                    ))}
                  </ul>
                </div>
                {selected.info.length > 0 && (
                  <div className="bg-gray-50 p-3 md:p-4 rounded-lg md:rounded-xl">
                    <h4 className="font-bold text-gray-800 mb-1 md:mb-2 text-xs md:text-sm uppercase tracking-wide md:tracking-wider">
                      Information:
                    </h4>
                    <ul className="space-y-1 md:space-y-1.5">
                      {selected.info.map((i, idx) => (
                        <li
                          key={idx}
                          className="text-xs md:text-sm text-gray-900 flex gap-1 md:gap-2 items-start"
                        >
                          <span className="mt-1 w-1 h-1 bg-gray-400 rounded-full flex-shrink-0" />{" "}
                          {i}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
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
  );
}
