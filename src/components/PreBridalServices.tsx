"use client";
import { useState } from "react";

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
  const [selectedService, setSelectedService] = useState<any>(null);

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">

      {services.map((service) => (
        <div
          key={service.id}
          className="bg-white rounded-3xl shadow flex overflow-hidden"
        >
          <img
            src={service.image}
            alt={service.name}
            className="w-36 md:w-44 object-cover"
          />

          <div className="p-4 flex-1">
            <div className="flex justify-between items-start">
              <h3 className="font-semibold">{service.name}</h3>

              <button className="bg-purple-700 text-white px-4 py-1.5 rounded-xl text-xs font-bold">
                ADD
              </button>
            </div>

            <div className="flex items-center gap-2 mt-1">
              <span className="font-bold">{service.price}</span>
              <span className="line-through text-xs text-gray-400">
                {service.mrp}
              </span>
              <span className="text-orange-600 text-xs font-bold">
                {service.discount}
              </span>
            </div>

            <div className="text-xs text-gray-400 mt-1">
              {service.duration}
            </div>

            <ul className="mt-3 space-y-1 text-xs text-gray-500">
              {service.includes.slice(0, 3).map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>

            <button
              onClick={() => setSelectedService(service)}
              className="mt-3 text-purple-700 text-xs font-bold hover:underline"
            >
              View Details
            </button>
          </div>
        </div>
      ))}

      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-2xl max-w-md w-full mx-4 p-6 relative max-h-[80vh] overflow-y-auto">

            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 text-gray-500"
            >
              ✕
            </button>

            <div className="flex gap-4">
              <img
                src={selectedService.image}
                className="w-28 h-28 object-cover rounded-xl"
              />

              <div>
                <h3 className="font-bold text-lg">
                  {selectedService.name}
                </h3>

                <div className="flex items-center gap-2 mt-1">
                  <span className="font-bold">{selectedService.price}</span>
                  <span className="line-through text-xs text-gray-400">
                    {selectedService.mrp}
                  </span>
                  <span className="text-orange-600 text-xs font-bold">
                    {selectedService.discount}
                  </span>
                </div>

                <p className="text-xs text-gray-400 mt-1">
                  {selectedService.duration}
                </p>
              </div>
            </div>

            <h4 className="font-semibold mt-6 mb-2">What's Included</h4>

            <ul className="space-y-1 text-sm text-gray-600">
              {selectedService.includes.map((item: string, i: number) => (
                <li key={i}>✔ {item}</li>
              ))}
            </ul>

            <div className="bg-gray-50 p-4 rounded-xl mt-6 text-sm">
              <p className="font-semibold mb-2">Advantages</p>
              <p>Beautiful & Healthy Skin</p>
              <p>Clear & Brighter Face & Body</p>

              <p className="font-semibold mt-4 mb-2">Brands Used</p>
              <p>{selectedService.brands.join(", ")}</p>

              <p className="font-semibold mt-4">
                Adherence to WHO Guidelines
              </p>
              <p>Single-Use Equipments</p>
              <p>All Tools are Sanitized</p>
            </div>

            <button className="w-full mt-6 bg-purple-700 text-white py-3 rounded-xl font-bold shadow-lg shadow-purple-200">
              Book Now
            </button>

          </div>
        </div>
      )}
    </div>
  );
}