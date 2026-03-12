import { useRef, useEffect, useState } from "react";

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

const bodyImage =
  "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&auto=format&fit=crop";

const bodyPolishServices: Service[] = [
  {
    title: "Back Scrub",
    duration: "20 minutes",
    price: 349,
    mrp: 436,
    discount: "20% Off",
    image: bodyImage,
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
    image: bodyImage,
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
    image: bodyImage,
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
    image: bodyImage,
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
    image: bodyImage,
    includes: ["Extreme Relaxing Massage", "Relieves Stress"],
    info: ["Face is not covered"],
  },
  {
    title: "Rejuvenating Massage",
    duration: "90 minutes",
    price: 1199,
    mrp: 2398,
    discount: "50% Off",
    image: bodyImage,
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
    image: bodyImage,
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
    image: bodyImage,
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
    image: bodyImage,
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
    image: bodyImage,
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
      {/* TITLE SECTION (Exact match to MakeupServices.tsx) */}
      <div className="py-8 text-center bg-white border-b">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
          Massage Services
        </h1>
        <p className="text-gray-500 text-sm mt-1 uppercase tracking-widest">
          Premium Salon Services
        </p>
      </div>

      {/* NAV BAR (Exact match to MakeupServices.tsx) */}
      <div className="sticky top-0 z-40 bg-[#f6edff] py-4 border-b">
        <div className="flex justify-center">
          <div className="flex gap-3 overflow-x-auto px-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => scrollToSection(cat)}
                className="px-5 py-2 rounded-full bg-purple-200 text-purple-800 font-semibold whitespace-nowrap hover:bg-purple-300"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* SECTIONS (Exact match to MakeupServices.tsx) */}
      <div className="max-w-7xl mx-auto px-4 py-10 space-y-16">
        {categories.map((cat) => (
          <div key={cat} ref={(el) => (sectionRefs.current[cat] = el)}>
            <h2 className="text-xl font-black mb-6">{cat}</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {allData[cat].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl shadow flex overflow-hidden"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-36 md:w-44 object-cover"
                  />

                  <div className="p-4 flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold">{item.title}</h3>
                      <button className="bg-purple-700 text-white px-4 py-1.5 rounded-xl text-xs font-bold">
                        ADD
                      </button>
                    </div>

                    <div className="flex items-center gap-2 mt-1">
                      <span className="font-black">₹{item.price}</span>
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

                    <ul className="mt-3 space-y-1">
                      {item.includes.map((i, k) => (
                        <li key={k} className="text-xs text-gray-500">
                          • {i}
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() => setSelected(item)}
                      className="mt-3 text-purple-700 text-xs font-bold hover:underline"
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-2xl max-w-md w-full mx-4 relative max-h-[80vh]">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 z-20 bg-gray-100 text-gray-800 w-8 h-8 rounded-full flex items-center justify-center font-bold"
            >
              ✕
            </button>

            <div className="overflow-y-auto p-6">
              <div className="flex gap-4 mb-6">
                <img
                  src={selected.image}
                  className="w-28 h-28 object-cover rounded-xl"
                  alt={selected.title}
                />

                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    {selected.title}
                  </h2>

                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-lg font-bold text-purple-700">
                      ₹{selected.price}
                    </span>
                    <span className="text-gray-400 line-through text-sm">
                      ₹{selected.mrp}
                    </span>
                  </div>

                  <p className="text-xs text-gray-500 mt-1">
                    Duration: {selected.duration}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-gray-800 mb-2 text-sm uppercase tracking-wider">
                  Includes:
                </h4>

                <ul className="space-y-2">
                  {selected.includes.map((i, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex gap-2">
                      <span className="text-purple-500">✔</span> {i}
                    </li>
                  ))}
                </ul>
              </div>

              {selected.info.length > 0 && (
                <div className="bg-gray-50 p-4 rounded-xl mt-4">
                  <h4 className="font-bold text-gray-800 mb-2 text-sm uppercase tracking-wider">
                    Information:
                  </h4>

                  <ul className="space-y-1.5">
                    {selected.info.map((i, idx) => (
                      <li key={idx} className="text-xs text-gray-900 flex gap-2 items-start">
                        <span className="mt-1 w-1 h-1 bg-gray-400 rounded-full" />
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <button className="w-full mt-6 bg-purple-700 text-white py-3 rounded-xl font-bold shadow-lg shadow-purple-200">
                Book Now
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}