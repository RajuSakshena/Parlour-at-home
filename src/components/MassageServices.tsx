import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
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

const categories = ["Body Polish", "Massage"];

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

export default function MassageServices() {
  const navigate = useNavigate();
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const [selected, setSelected] = useState<Service | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (cat: string) => {
    sectionRefs.current[cat]?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-[#f6edff] min-h-screen">
      {/* TITLE SECTION WITH BACK BUTTON */}
      <div className="py-4 md:py-6 lg:py-8 text-center bg-white border-b relative">
        {/* Back Arrow Button */}
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

      {/* NAV BAR (Exact match to MakeupServices.tsx) */}
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

      {/* SECTIONS (Exact match to MakeupServices.tsx) */}
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
                      <button className="bg-purple-700 text-white px-3 md:px-4 py-1 md:py-1.5 rounded-xl text-xs md:text-sm font-bold active:scale-95 transition-transform">
                        ADD
                      </button>
                    </div>

                    <div className="flex items-center gap-2 mt-1">
                      <span className="font-black text-base md:text-lg lg:text-xl">₹{item.price}</span>
                      <span className="line-through text-xs text-gray-400">
                        ₹{item.mrp}
                      </span>
                      <span className="text-orange-600 text-xs font-bold">
                        {item.discount}
                      </span>
                    </div>

                    <p className="text-xs text-gray-400 mt-1">
                      ⏱ {item.duration}
                    </p>

                    <ul className="mt-2 md:mt-3 space-y-1">
                      {item.includes.map((i, k) => (
                        <li key={k} className="text-xs md:text-sm text-gray-500">
                          • {i}
                        </li>
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

      {/* DETAIL MODAL - Updated with outside click support */}
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
                <img
                  src={selected.image}
                  className="w-20 h-20 md:w-28 md:h-28 object-cover rounded-xl"
                  alt={selected.title}
                />

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

              {selected.info.length > 0 && (
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

              <button className="w-full mt-4 md:mt-6 bg-purple-700 text-white py-2 md:py-3 rounded-xl text-sm md:text-base font-bold shadow-lg shadow-purple-200">
                Book Now
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}