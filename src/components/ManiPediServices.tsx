import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import exoticManicurePedicure from "../images/Exotic Manicure-Pedicure.jpg";
import aromaMagicBrighteningManiPedi from "../images/Aroma Magic Brightening Mani-Pedi.jpg";
import saraManiPedi from "../images/Sara Mani-Pedi.jpg";
import o3BubblegumManiPedi from "../images/O3+ Bubblegum Mani Pedi.jpg";
import aromaMagicBrighteningPedicure from "../images/Aroma Magic Brightening Pedicure.jpg";
import exoticPedicure from "../images/Exotic Pedicure.jpg";
import saraPedicure from "../images/Sara Pedicure.jpg";
import o3BubblegumPedicure from "../images/O3+ Bubblegum Pedicure.jpg";
import aromaMagicBrighteningManicure from "../images/Aroma Magic Brightening Manicure.jpg";
import exoticManicure from "../images/Exotic Manicure.jpg";
import saraManicure from "../images/Sara Manicure.jpg";
import o3BubblegumManicure from "../images/O3+ Bubblegum Manicure.jpg";

const categories = [
  "Mani-Pedi",
  "Pedicure",
  "Manicure",
];

type ManiPediService = {
  title: string;
  duration: string;
  price: number;
  mrp: number;
  discount: string;
  image: string;
  includes: string[];
  info: string[];
};

const allManiPediData: Record<string, ManiPediService[]> = {
  "Mani-Pedi": [
    {
      title: "Exotic Manicure-Pedicure",
      price: 699, mrp: 1398, discount: "50% Off", duration: "75 min",
      image: exoticManicurePedicure,
      includes: ["Nail trimming & shaping for hands and feet", "Cuticle care", "Exotic scrub exfoliation", "Moisturizing cream massage", "Pack for tan removal"],
      info: ["Remove old polish before service", "Inform if you have any nail conditions or allergies", "Avoid water contact for 1 hour post service", "Any complaint report within 24 hrs with pictures via email"]
    },
    {
      title: "Aroma Magic Brightening Mani-Pedi",
      price: 799, mrp: 1598, discount: "50% Off", duration: "90 min",
      image: aromaMagicBrighteningManiPedi,
      includes: ["Nail care", "Cuticle treatment", "Brightening scrub", "Aroma massage", "Brightening pack"],
      info: ["Remove old polish before service", "Inform if you have any nail conditions or allergies", "Avoid water contact for 1 hour post service", "Any complaint report within 24 hrs with pictures via email"]
    },
    {
      title: "Sara Mani-Pedi",
      price: 899, mrp: 1798, discount: "50% Off", duration: "75 min",
      image: saraManiPedi,
      includes: ["Nail shaping", "Cuticle cleaning", "Sara scrub", "Sara cream massage", "Sara pack"],
      info: ["Remove old polish before service", "Inform if you have any nail conditions or allergies", "Avoid water contact for 1 hour post service", "Any complaint report within 24 hrs with pictures via email"]
    },
    {
      title: "O3+ Bubblegum Mani Pedi",
      price: 1149, mrp: 2298, discount: "50% Off", duration: "90 min",
      image: o3BubblegumManiPedi,
      includes: ["Nail trim & shape", "Cuticle care", "Bubblegum scrub", "Bubblegum massage", "O3+ pack"],
      info: ["Remove old polish before service", "Inform if you have any nail conditions or allergies", "Avoid water contact for 1 hour post service", "Any complaint report within 24 hrs with pictures via email"]
    },
  ],
  "Pedicure": [
    {
      title: "Aroma Magic Brightening Pedicure",
      price: 499, mrp: 998, discount: "50% Off", duration: "40 min",
      image: aromaMagicBrighteningPedicure,
      includes: ["Foot soak", "Nail trim & shape", "Cuticle care", "Brightening scrub", "Aroma massage", "Brightening pack"],
      info: ["Remove old polish before service", "Inform if you have any foot conditions or allergies", "Avoid tight shoes post service", "Any complaint report within 24 hrs with pictures via email"]
    },
    {
      title: "Exotic Pedicure",
      price: 549, mrp: 1098, discount: "50% Off", duration: "45 min",
      image: exoticPedicure,
      includes: ["Foot soak", "Nail care", "Cuticle treatment", "Exotic scrub", "Moisturizing massage", "Tan removal pack"],
      info: ["Remove old polish before service", "Inform if you have any foot conditions or allergies", "Avoid tight shoes post service", "Any complaint report within 24 hrs with pictures via email"]
    },
    {
      title: "Sara Pedicure",
      price: 599, mrp: 1198, discount: "50% Off", duration: "45 min",
      image: saraPedicure,
      includes: ["Foot soak", "Nail shaping", "Cuticle cleaning", "Sara scrub", "Sara cream massage", "Sara pack"],
      info: ["Remove old polish before service", "Inform if you have any foot conditions or allergies", "Avoid tight shoes post service", "Any complaint report within 24 hrs with pictures via email"]
    },
    {
      title: "O3+ Bubblegum Pedicure",
      price: 749, mrp: 1498, discount: "50% Off", duration: "60 min",
      image: o3BubblegumPedicure,
      includes: ["Foot soak", "Nail trim", "Cuticle care", "Bubblegum scrub", "Bubblegum massage", "O3+ pack"],
      info: ["Remove old polish before service", "Inform if you have any foot conditions or allergies", "Avoid tight shoes post service", "Any complaint report within 24 hrs with pictures via email"]
    },
  ],
  "Manicure": [
    {
      title: "Aroma Magic Brightening Manicure",
      price: 399, mrp: 798, discount: "50% Off", duration: "35 min",
      image: aromaMagicBrighteningManicure,
      includes: ["Hand soak", "Nail trim & shape", "Cuticle care", "Brightening scrub", "Aroma massage", "Brightening pack"],
      info: ["Remove old polish before service", "Inform if you have any hand conditions or allergies", "Avoid water for 1 hr post service", "Any complaint report within 24 hrs with pictures via email"]
    },
    {
      title: "Exotic Manicure",
      price: 449, mrp: 898, discount: "50% Off", duration: "45 min",
      image: exoticManicure,
      includes: ["Hand soak", "Nail care", "Cuticle treatment", "Exotic scrub", "Moisturizing massage", "Tan removal pack"],
      info: ["Remove old polish before service", "Inform if you have any hand conditions or allergies", "Avoid water for 1 hr post service", "Any complaint report within 24 hrs with pictures via email"]
    },
    {
      title: "Sara Manicure",
      price: 499, mrp: 998, discount: "50% Off", duration: "30 min",
      image: saraManicure,
      includes: ["Hand soak", "Nail shaping", "Cuticle cleaning", "Sara scrub", "Sara cream massage", "Sara pack"],
      info: ["Remove old polish before service", "Inform if you have any hand conditions or allergies", "Avoid water for 1 hr post service", "Any complaint report within 24 hrs with pictures via email"]
    },
    {
      title: "O3+ Bubblegum Manicure",
      price: 649, mrp: 1298, discount: "50% Off", duration: "45 min",
      image: o3BubblegumManicure,
      includes: ["Hand soak", "Nail trim", "Cuticle care", "Bubblegum scrub", "Bubblegum massage", "O3+ pack"],
      info: ["Remove old polish before service", "Inform if you have any hand conditions or allergies", "Avoid water for 1 hr post service", "Any complaint report within 24 hrs with pictures via email"]
    },
  ],
};

export default function ManipediServices() {
  const navigate = useNavigate();
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const [selected, setSelected] = useState<ManiPediService | null>(null);

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
          Mani - Pedi
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
              {allManiPediData[cat]?.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl md:rounded-2xl shadow-sm hover:shadow-lg flex items-stretch overflow-hidden transition-shadow"
                >
                  {/* Updated professional image container */}
                  <div className="w-28 md:w-36 lg:w-44 h-full flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-center rounded-l-xl md:rounded-l-2xl"
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

      {/* MODAL (Exact match to MakeupServices.tsx) */}
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