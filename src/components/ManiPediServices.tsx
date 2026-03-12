import { useRef, useEffect, useState } from "react";

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
      image: "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3",
      includes: ["Nail trimming & shaping for hands and feet", "Cuticle care", "Exotic scrub exfoliation", "Moisturizing cream massage", "Pack for tan removal"],
      info: ["Remove old polish before service", "Inform if you have any nail conditions or allergies", "Avoid water contact for 1 hour post service", "Any complaint report within 24 hrs with pictures via email"]
    },
    {
      title: "Aroma Magic Brightening Mani-Pedi",
      price: 799, mrp: 1598, discount: "50% Off", duration: "90 min",
      image: "https://images.unsplash.com/photo-1607779097040-26e80aa4576b",
      includes: ["Nail care", "Cuticle treatment", "Brightening scrub", "Aroma massage", "Brightening pack"],
      info: ["Remove old polish before service", "Inform if you have any nail conditions or allergies", "Avoid water contact for 1 hour post service", "Any complaint report within 24 hrs with pictures via email"]
    },
    {
      title: "Sara Mani-Pedi",
      price: 899, mrp: 1798, discount: "50% Off", duration: "75 min",
      image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9",
      includes: ["Nail shaping", "Cuticle cleaning", "Sara scrub", "Sara cream massage", "Sara pack"],
      info: ["Remove old polish before service", "Inform if you have any nail conditions or allergies", "Avoid water contact for 1 hour post service", "Any complaint report within 24 hrs with pictures via email"]
    },
    {
      title: "O3+ Bubblegum Mani Pedi",
      price: 1149, mrp: 2298, discount: "50% Off", duration: "90 min",
      image: "https://images.unsplash.com/photo-1596178060671-7a80dc8059ea",
      includes: ["Nail trim & shape", "Cuticle care", "Bubblegum scrub", "Bubblegum massage", "O3+ pack"],
      info: ["Remove old polish before service", "Inform if you have any nail conditions or allergies", "Avoid water contact for 1 hour post service", "Any complaint report within 24 hrs with pictures via email"]
    },
  ],
  "Pedicure": [
    {
      title: "Aroma Magic Brightening Pedicure",
      price: 499, mrp: 998, discount: "50% Off", duration: "40 min",
      image: "https://images.unsplash.com/photo-1556228578-567ba26b1b3c",
      includes: ["Foot soak", "Nail trim & shape", "Cuticle care", "Brightening scrub", "Aroma massage", "Brightening pack"],
      info: ["Remove old polish before service", "Inform if you have any foot conditions or allergies", "Avoid tight shoes post service", "Any complaint report within 24 hrs with pictures via email"]
    },
    {
      title: "Exotic Pedicure",
      price: 549, mrp: 1098, discount: "50% Off", duration: "45 min",
      image: "https://images.unsplash.com/photo-1556228578-567ba26b1b3c",
      includes: ["Foot soak", "Nail care", "Cuticle treatment", "Exotic scrub", "Moisturizing massage", "Tan removal pack"],
      info: ["Remove old polish before service", "Inform if you have any foot conditions or allergies", "Avoid tight shoes post service", "Any complaint report within 24 hrs with pictures via email"]
    },
    {
      title: "Sara Pedicure",
      price: 599, mrp: 1198, discount: "50% Off", duration: "45 min",
      image: "https://images.unsplash.com/photo-1556228578-567ba26b1b3c",
      includes: ["Foot soak", "Nail shaping", "Cuticle cleaning", "Sara scrub", "Sara cream massage", "Sara pack"],
      info: ["Remove old polish before service", "Inform if you have any foot conditions or allergies", "Avoid tight shoes post service", "Any complaint report within 24 hrs with pictures via email"]
    },
    {
      title: "O3+ Bubblegum Pedicure",
      price: 749, mrp: 1498, discount: "50% Off", duration: "60 min",
      image: "https://images.unsplash.com/photo-1556228578-567ba26b1b3c",
      includes: ["Foot soak", "Nail trim", "Cuticle care", "Bubblegum scrub", "Bubblegum massage", "O3+ pack"],
      info: ["Remove old polish before service", "Inform if you have any foot conditions or allergies", "Avoid tight shoes post service", "Any complaint report within 24 hrs with pictures via email"]
    },
  ],
  "Manicure": [
    {
      title: "Aroma Magic Brightening Manicure",
      price: 399, mrp: 798, discount: "50% Off", duration: "35 min",
      image: "https://images.unsplash.com/photo-1607779097040-26e80aa4576b",
      includes: ["Hand soak", "Nail trim & shape", "Cuticle care", "Brightening scrub", "Aroma massage", "Brightening pack"],
      info: ["Remove old polish before service", "Inform if you have any hand conditions or allergies", "Avoid water for 1 hr post service", "Any complaint report within 24 hrs with pictures via email"]
    },
    {
      title: "Exotic Manicure",
      price: 449, mrp: 898, discount: "50% Off", duration: "45 min",
      image: "https://images.unsplash.com/photo-1607779097040-26e80aa4576b",
      includes: ["Hand soak", "Nail care", "Cuticle treatment", "Exotic scrub", "Moisturizing massage", "Tan removal pack"],
      info: ["Remove old polish before service", "Inform if you have any hand conditions or allergies", "Avoid water for 1 hr post service", "Any complaint report within 24 hrs with pictures via email"]
    },
    {
      title: "Sara Manicure",
      price: 499, mrp: 998, discount: "50% Off", duration: "30 min",
      image: "https://images.unsplash.com/photo-1607779097040-26e80aa4576b",
      includes: ["Hand soak", "Nail shaping", "Cuticle cleaning", "Sara scrub", "Sara cream massage", "Sara pack"],
      info: ["Remove old polish before service", "Inform if you have any hand conditions or allergies", "Avoid water for 1 hr post service", "Any complaint report within 24 hrs with pictures via email"]
    },
    {
      title: "O3+ Bubblegum Manicure",
      price: 649, mrp: 1298, discount: "50% Off", duration: "45 min",
      image: "https://images.unsplash.com/photo-1607779097040-26e80aa4576b",
      includes: ["Hand soak", "Nail trim", "Cuticle care", "Bubblegum scrub", "Bubblegum massage", "O3+ pack"],
      info: ["Remove old polish before service", "Inform if you have any hand conditions or allergies", "Avoid water for 1 hr post service", "Any complaint report within 24 hrs with pictures via email"]
    },
  ],
};

export default function ManipediServices() {
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
      {/* TITLE SECTION (Exact match to MakeupServices.tsx) */}
      <div className="py-8 text-center bg-white border-b">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
          Mani - Pedi
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
              {allManiPediData[cat]?.map((item, idx) => (
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