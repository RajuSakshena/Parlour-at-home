import { useRef, useEffect, useState } from "react";

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
   SECTION IMAGES
========================= */
const PARTY_IMG =
  "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=600";
const ENGAGEMENT_IMG =
  "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=600";
const BRIDAL_IMG =
  "https://images.unsplash.com/photo-1595475038784-bbe439ff41e6?q=80&w=600";
const GROUP_IMG =
  "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?q=80&w=600";
const ADDON_IMG =
  "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=600";

/* =========================
   DATA
========================= */
const partyMakeup: MakeupService[] = [
{
title:"Luxury Party Makeup",
price:2999,
mrp:5998,
discount:"50% Off",
duration:"90 minutes",
image:PARTY_IMG,
includes:["Advance Makeup","Advance Hair Do","Professional Makeup Artist"],
info:[
"Advance long lasting make up with good coverage",
"Advance eye make up : Smokey/Cut crease/Glitter",
"Advance Hair Do - Any hairstyle of your choice(Crimping/Messy bun/Braids , etc)",
"Saree/Dupatta/Dress Draping is not included",
"Brands included are PAC , Forever52 ,Kryolan,L'oreal , Faces canada , Nykaa , Make up Revolution",
"Eyelashes & accessories available on chargeable basis"
]
},
{
title:"HD Party Make Up",
price:3999,
mrp:6665,
discount:"40% Off",
duration:"100 minutes",
image:PARTY_IMG,
includes:["Premium HD Party Make Up","Advance Hair Do","Professional Makeup Artist"],
info:[
"Flawless HD coverage Make Up that will last longer than your occasion",
"Advance eye make up : Smokey/Cut crease/Glitter",
"Advance Hair Do - Crimping/ Fancy Bun / Fancy Braid",
"Saree/Dupatta/Dress Draping is complimentary",
"Brands included are MAC HD , PAC , Forever52 , Kryolan",
"Eyelashes & accessories available on chargeable basis"
]
}
];
const engagementMakeup: MakeupService[] = [
{
title:"Luxury Engagement Make Up",
price:3999,
mrp:7998,
discount:"50% Off",
duration:"180 minutes",
image:ENGAGEMENT_IMG,
includes:["Advance Makeup","Advance Hair Do","Dress/Saree Draping is not included","Professional Makeup Artist"],
info:[
"Advance Make up",
"Advance eye make up : Smokey/Cut crease/Glitter",
"Advance Hair Do - Crimping/ Fancy Bun / Fancy Braid",
"Saree/Dupatta/Dress Draping is not included",
"Brands included are PAC , Forever52 , Kryolan ,etc",
"Eyelashes & accessories available on chargeable basis"
]
},
{
title:"HD Engagement Make Up",
price:5099,
mrp:10198,
discount:"50% Off",
duration:"180 minutes",
image:ENGAGEMENT_IMG,
includes:["Premium HD Engagement Make up","Advance Hair Do","Complimentary Dress/Saree Draping","Professional Makeup Artist"],
info:[
"Flawless HD coverage Make Up that will last longer than your occasion",
"Eyelashes are included",
"Advance eye make up : Smokey/Cut crease/Glitter",
"Advance Hair Do - Crimping/ Fancy Bun / Fancy Braid",
"Saree/Dupatta/Dress Draping is complimentary",
"Brands included are MAC HD , PAC , Forever52 , Kryolan",
"Accessories available on chargeable basis"
]
},
{
title:"Air Brush Engagement Makeup",
price:6999,
mrp:13998,
discount:"50% Off",
duration:"180 minutes",
image:ENGAGEMENT_IMG,
includes:["Air Brush Engagement Make up","Advance Hair Do","Complimentary Dress/Saree Draping","Professional Makeup Artist"],
info:[
"Air Brush Make Up that will cover all the blemishes/pores and give flawless finish which will last longer than your occasion",
"Eyelashes are included",
"Advance eye make up : Smokey/Cut crease/Glitter",
"Advance Hair Do - Crimping/ Fancy Bun / Fancy Braid",
"Saree/Dupatta/Dress Draping is complimentary",
"Brands included are Temptu ,MAC HD , PAC , Forever52 , Kryolan",
"Accessories available on chargeable basis"
]
}
];
const bridalMakeup: MakeupService[] = [
{
title:"Luxury Bridal Makeup",
price:6999,
mrp:13998,
discount:"50% Off",
duration:"240 minutes",
image:BRIDAL_IMG,
includes:["Luxury Advance Bridal Make up","Advance Hair Do","Dress/Saree Draping","Professional Makeup Artist"],
info:[
"Advance Bridal Make up",
"Eyelashes are included",
"Advance eye make up : Smokey/Cut crease/Glitter",
"Advance Hair Do - Crimping/ Fancy Bun / Fancy Braid",
"Saree/Dupatta/Dress Draping is not included",
"Brands included are PAC , Forever52 , Kryolan ,etc",
"Accessories available on chargeable basis"
]
},
{
title:"HD Bridal Make Up",
price:10499,
mrp:20998,
discount:"50% Off",
duration:"280 minutes",
image:BRIDAL_IMG,
includes:["Premium HD Bridal Make up","Advance Hair Do","Dress/Saree Draping","Professional Makeup Artist"],
info:[
"Flawless HD coverage Make Up that will last longer than your occasion",
"Eyelashes are included",
"Advance Bridal eye make up : Smokey/Cut crease/Glitter",
"Advance Bridal Hair Do - Crimping/ Fancy Bun / Fancy Braid",
"Saree/Dupatta/Dress Draping is complimentary",
"Brands included are MAC HD , PAC , Forever52 , Kryolan",
"Accessories available on chargeable basis"
]
},
{
title:"Air Brush Bridal Make Up",
price:15499,
mrp:30998,
discount:"50% Off",
duration:"360 minutes",
image:BRIDAL_IMG,
includes:["Air Brush Bridal Make UP","Advance Hair Do","Dress/Saree Draping","Professional Makeup Artist"],
info:[
"Air Brush Make Up that will cover all the blemishes/pores and give flawless finish which will last longer than your occasion",
"Eyelashes are included",
"Advance Bridal eye make up : Smokey/Cut crease/Glitter",
"Advance Bridal Hair Do - Crimping/ Fancy Bun / Fancy Braid",
"Saree/Dupatta/Dress Draping is complimentary",
"Brands included are Temptu ,MAC HD , PAC , Forever52 , Kryolan",
"Accessories available on chargeable basis"
]
}
];
const groupDeals: MakeupService[] = [
{
title:"Luxury Party Group Make Up",
price:8499,
mrp:16998,
discount:"50% Off",
duration:"360 minutes",
image:GROUP_IMG,
includes:["Advance Party Make Up","Advance Hair do","Package for group of 3"],
info:[
"Advance long lasting make up with good coverage",
"Advance eye make up : Smokey/Cut crease/Glitter",
"Advance Hair Do - Any hairstyle of your choice(Crimping/Messy bun/Braids , etc)",
"Saree/Dupatta/Dress Draping is not included",
"Brands included are PAC , Forever52 ,Kryolan,L'oreal , Faces canada , Nykaa , Make up Revolution",
"Eyelashes & accessories available on chargeable basis"
]
},
{
title:"HD Party Group Make Up",
price:11499,
mrp:22998,
discount:"50% Off",
duration:"360 minutes",
image:GROUP_IMG,
includes:["HD Party Make up","Advance Hair do","Package for group of 3"],
info:[
"Flawless HD coverage Make Up that will last longer than your occasion",
"Advance eye make up : Smokey/Cut crease/Glitter",
"Advance Hair Do - Crimping/ Fancy Bun / Fancy Braid",
"Saree/Dupatta/Dress Draping is complimentary",
"Brands included are MAC HD , PAC , Forever52 , Kryolan",
"Eyelashes & accessories available on chargeable basis"
]
}
];
const addOns: MakeupService[] = [
{
title:"Saree Draping",
price:350,
mrp:389,
discount:"10% Off",
duration:"15 minutes",
image:ADDON_IMG,
includes:["Saree draping / Dress Draping"],
info:["Only available with booking of make up services"]
},
{
title:"Blow Dry",
price:499,
mrp:998,
discount:"50% Off",
duration:"30 minutes",
image:ADDON_IMG,
includes:["For Any Length","Only available with booking of make up services"],
info:["Hair wash is not included","Hair should be washed before appointment time"]
},
{
title:"Straightening",
price:499,
mrp:998,
discount:"50% Off",
duration:"35 minutes",
image:ADDON_IMG,
includes:["For Any Length","Only available with booking of make up services"],
info:["Hair wash & Blow dry is not included","Hair should be washed and dry before appointment time"]
},
{
title:"Hair Curl",
price:499,
mrp:998,
discount:"50% Off",
duration:"35 minutes",
image:ADDON_IMG,
includes:["For Any Length","Only available with booking of make up services"],
info:["Hair wash & Blow dry is not included","Hair should be washed and dry before appointment time"]
},
{
title:"Advance Hair Do",
price:990,
mrp:1500,
discount:"34% Off",
duration:"65 minutes",
image:ADDON_IMG,
includes:["For Any length","Only available with booking of make up services"],
info:[
"Hair wash & Blow dry is not included",
"Hair should be washed and dry before appointment time",
"Advance Hair Do - Any hair style of your choice including crimping/messy bun,braiding",
"Accessories available on chargeable basis"
]
},
{
title:"Basic Group Hair Styling",
price:1999,
mrp:3998,
discount:"50% Off",
duration:"180 minutes",
image:ADDON_IMG,
includes:["Hair styling for group of 4","Only available with booking of make up services"],
info:[
"Hair wash & Blow dry is not included",
"Hair should be washed and dry before appointment time",
"Basic Hair Do - Ironing/Curling/Basic bun"
]
}
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
   COMPONENT
========================= */
export default function MakeupServices() {
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const [selected, setSelected] = useState<MakeupService | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (cat: string) => {
    sectionRefs.current[cat]?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-[#f6edff] min-h-screen">
      {/* TITLE SECTION (Same as WaxingServices) */}
      <div className="py-8 text-center bg-white border-b">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
          Makeup
        </h1>
        <p className="text-gray-500 text-sm mt-1 uppercase tracking-widest">
          Premium Salon Services
        </p>
      </div>

      {/* NAV BAR */}
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

      {/* SECTIONS */}
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

              {selected.info && (
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