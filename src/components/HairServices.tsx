import { useState, useEffect, useRef } from "react";

const categories = ["Hair Cut", "Hair Treatment", "Hair Color"];

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

const hairCutImage =
  "https://images.unsplash.com/photo-1519415943484-9fa1873496d4";
const hairTreatmentImage =
  "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3";
const hairColorImage =
  "https://images.unsplash.com/photo-1600948836101-f9ffda59d250";

const hairCutServices: HairService[] = [
  {
    title: "Hair Cut Kids",
    duration: "20 minutes",
    price: 117,
    mrp: 195,
    discount: "40% Off",
    image: hairCutImage,
    includes: [],
    info: [],
  },
  {
    title: "Baby Hair Cut",
    duration: "20 minutes",
    price: 117,
    mrp: 195,
    discount: "40% Off",
    image: hairCutImage,
    includes: [],
    info: [],
  },
  {
    title: "Hair Trimming",
    duration: "30 minutes",
    price: 177,
    mrp: 295,
    discount: "40% Off",
    image: hairCutImage,
    includes: ["For trimming your damaged or uneven hair"],
    info: [],
  },
  {
    title: "Normal Hair Cut",
    duration: "15 minutes",
    price: 350,
    mrp: 500,
    discount: "30% Off",
    image: hairCutImage,
    includes: ["Straight, U shape, V Shape Cut"],
    info: [],
  },
  {
    title: "Head Massage",
    duration: "10 minutes",
    price: 100,
    mrp: 200,
    discount: "50% Off",
    image: hairCutImage,
    includes: ["Hair Oil to be provided by customer"],
    info: [],
  },
];

const spaInfoCommon = [
  "For best results add Ampoule seperately",
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
    image: hairTreatmentImage,
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
    image: hairTreatmentImage,
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
    image: hairTreatmentImage,
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
    image: hairTreatmentImage,
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
    image: hairTreatmentImage,
    includes: [
      "L'Oreal Paris Hair Spa Hydrating Concentrate",
      "Leaves your scalp & hair soft and supple",
      "Relieves itchiness",
    ],
    info: [],
  },
];

const hairColorServices: HairService[] = [
  {
    title: "L’Oréal Majirel Root Touch Up",
    duration: "30 minutes",
    price: 700,
    mrp: 1400,
    discount: "50% Off",
    image: hairColorImage,
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
    image: hairColorImage,
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
    title: "L’Oreal Majirel Global - Small",
    duration: "45 minutes",
    price: 1200,
    mrp: 2400,
    discount: "50% Off",
    image: hairColorImage,
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
    image: hairColorImage,
    includes: [
      "Hair size: Medium (Upto elbow)",
      "Shades: Black, Darkest Brown, Brown, Light Brown",
    ],
    info: ["Ammonia free hair color"],
  },
  {
    title: "L’Oreal Majirel Global - Medium",
    duration: "60 minutes",
    price: 1900,
    mrp: 3800,
    discount: "50% Off",
    image: hairColorImage,
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
    image: hairColorImage,
    includes: [
      "Hair Size: Large (Upto waist)",
      "Shades: Black, Darkest Brown, Brown, Light Brown",
    ],
    info: ["Ammonia free hair color"],
  },
  {
    title: "L’Oreal Majirel Global - Large",
    duration: "75 minutes",
    price: 2400,
    mrp: 4800,
    discount: "50% Off",
    image: hairColorImage,
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
    image: hairColorImage,
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

export default function HairServices() {
  const [selected, setSelected] = useState<HairService | null>(null);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

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
          Hair Cut
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