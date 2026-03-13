import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

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
  const navigate = useNavigate();
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
          Hair Cut
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {allData[cat].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl md:rounded-2xl shadow-sm hover:shadow-lg flex overflow-hidden transition-shadow"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-cover"
                  />

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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-xl md:rounded-2xl max-w-[480px] w-full mx-4 relative max-h-[80vh]">
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