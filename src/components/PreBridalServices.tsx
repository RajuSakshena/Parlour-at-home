"use client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const services = [
  {
    id: 1,
    name: "Classic Pre-bridal Grooming",
    price: "₹ 5,249.00",
    mrp: "₹ 8,000.00",
    discount: "34% Off",
    duration: "330 mins",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
    includes: [
      "Sara Gold Facial",
      "Oxy Face Bleach",
      "Nature’s Body Bleach",
      "Full Body Wax (Choco Honey)",
      "Bikini Wax (Rica Brazillian)",
      "Body Polishing (Calix)",
      "Sara Mani-Pedi",
      "Thread Work",
    ],
    brands: ["Sara", "Dabur", "Nature’s Essence", "Honey Gold", "Rica", "Calix"],
  },
  {
    id: 2,
    name: "Luxury Pre-bridal Grooming",
    price: "₹ 6,849.00",
    mrp: "₹ 8,500.00",
    discount: "19% Off",
    duration: "420 mins",
    image: "https://images.unsplash.com/photo-1487412912498-0447578fcca8",
    includes: [
      "O3+ Bridal Facial",
      "Nature’s Body Bleach",
      "Full Body Wax (Rica)",
      "Bikini Wax (Rica Peel-off)",
      "Body Polishing (Calix)",
      "O3+ Mani-Pedi",
      "Head Massage",
      "Thread Work",
    ],
    brands: ["O3+", "Dabur", "Nature’s Essence", "Rica", "Calix"],
  },
  {
    id: 3,
    name: "Magnificence Pre-bridal Grooming",
    price: "₹ 7,500.00",
    mrp: "₹ 9,500.00",
    discount: "21% Off",
    duration: "570 mins",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552",
    includes: [
      "O3+ Bridal Facial",
      "Full Body Bleach (Nature’s Body Bleach / Raaga De-tan)",
      "Full Body Wax (Rica Roll-on)",
      "Bikini Wax (Rica Peel-off)",
      "Full Face Wax (Rica Peel-off)",
      "Body Polishing (Calix)",
      "O3+ Mani-Pedi",
      "Hair Spa (Calix)",
      "Thread Work (Full Face)",
    ],
    brands: ["O3+", "Dabur", "Raaga", "Nature’s Essence", "Rica", "Calix"],
  },
];

export default function PreBridalServices() {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState<any>(null);

  return (
    <>
      {/* HEADER WITH BACK BUTTON */}
      <div className="py-4 md:py-6 lg:py-8 text-center bg-white border-b relative">
        {/* Back Arrow Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-9 md:h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors shadow-sm"
        >
          <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 text-gray-700" />
        </button>

        <h1 className="text-xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
          Pre-Bridal
        </h1>
        <p className="text-gray-500 text-xs md:text-sm mt-1 uppercase tracking-widest">
          Premium Salon Services
        </p>
      </div>

      {/* ORIGINAL CONTENT - UNCHANGED */}
      <div className="max-w-6xl mx-auto px-3 md:px-6 lg:px-10 py-6 md:py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-xl md:rounded-2xl shadow-sm hover:shadow-lg flex flex-col md:flex-row overflow-hidden"
          >
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-32 md:w-36 md:h-48 lg:w-44 lg:h-56 object-cover"
            />

            <div className="p-3 md:p-4 lg:p-6 flex-1">
              <div className="flex justify-between items-start">
                <h3 className="font-semibold text-sm md:text-base lg:text-lg">{service.name}</h3>

                <button className="bg-purple-700 text-white px-3 md:px-4 py-1.5 md:py-2 rounded-xl text-xs md:text-sm font-bold">
                  ADD
                </button>
              </div>

              <div className="flex items-center gap-2 mt-1">
                <span className="font-bold text-sm md:text-base">{service.price}</span>
                <span className="line-through text-xs md:text-sm text-gray-400">
                  {service.mrp}
                </span>
                <span className="text-orange-600 text-xs md:text-sm font-bold">
                  {service.discount}
                </span>
              </div>

              <div className="text-xs md:text-sm text-gray-400 mt-1">
                {service.duration}
              </div>

              <ul className="mt-3 space-y-1 text-xs md:text-sm text-gray-500">
                {service.includes.slice(0, 3).map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>

              <button
                onClick={() => setSelectedService(service)}
                className="mt-3 text-purple-700 text-xs md:text-sm font-bold hover:underline"
              >
                View Details
              </button>
            </div>
          </div>
        ))}

        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="bg-white rounded-xl md:rounded-2xl max-w-md w-full mx-4 p-4 md:p-6 relative max-h-[80vh] overflow-y-auto">
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 text-gray-500 text-lg"
              >
                ✕
              </button>

              <div className="flex flex-col md:flex-row gap-3 md:gap-4">
                <img
                  src={selectedService.image}
                  className="w-20 h-20 md:w-28 md:h-28 object-cover rounded-xl"
                />

                <div>
                  <h3 className="font-bold text-base md:text-lg">
                    {selectedService.name}
                  </h3>

                  <div className="flex items-center gap-2 mt-1">
                    <span className="font-bold text-sm md:text-base">{selectedService.price}</span>
                    <span className="line-through text-xs md:text-sm text-gray-400">
                      {selectedService.mrp}
                    </span>
                    <span className="text-orange-600 text-xs md:text-sm font-bold">
                      {selectedService.discount}
                    </span>
                  </div>

                  <p className="text-xs md:text-sm text-gray-400 mt-1">
                    {selectedService.duration}
                  </p>
                </div>
              </div>

              <h4 className="font-semibold mt-6 mb-2 text-sm md:text-base">What's Included</h4>

              <ul className="space-y-1 text-xs md:text-sm text-gray-600">
                {selectedService.includes.map((item: string, i: number) => (
                  <li key={i}>✔ {item}</li>
                ))}
              </ul>

              <div className="bg-gray-50 p-3 md:p-4 rounded-xl mt-6 text-xs md:text-sm">
                <p className="font-semibold mb-2">Advantages</p>
                <p className="text-gray-600">Beautiful & Healthy Skin</p>
                <p className="text-gray-600">Clear & Brighter Face & Body</p>

                <p className="font-semibold mt-4 mb-2">Brands Used</p>
                <p className="text-gray-600">{selectedService.brands.join(", ")}</p>

                <p className="font-semibold mt-4 text-xs md:text-sm">
                  Adherence to WHO Guidelines
                </p>
                <p className="text-gray-600">Single-Use Equipments</p>
                <p className="text-gray-600">All Tools are Sanitized</p>
              </div>

              <button className="w-full mt-6 bg-purple-700 text-white py-2 md:py-3 rounded-xl font-bold shadow-lg shadow-purple-200 text-sm md:text-base px-4 md:px-6">
                Book Now
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}