import { Sparkles, Package, Scissors, Heart, Hand, Flower2, Gem, Gift } from "lucide-react";
import { useNavigate } from "react-router-dom";

import facialImg from "../images/Facial Treatment.jpg";
import makeupImg from "../images/Professional Makeup.jpg";
import waxingImg from "../images/Waxing Services.jpg";
import maniPediImg from "../images/Mani-Pedi.jpg";
import hairCareImg from "../images/Hair Care.jpg";
import bodyMassageImg from "../images/Body Massage.jpg";
import preBridalImg from "../images/Pre-Bridal.jpg";
import packagesImg from "../images/Packages.jpg";

const services = [
  {
    title: "Facial",
    route: "/services/facial",
    icon: Sparkles,
    image: facialImg,
    description: "Rejuvenating facial treatments for glowing skin",
  },
  {
    title: "Makeup",
    route: "/services/makeup",
    icon: Heart,
    image: makeupImg,
    description: "Professional makeup for every occasion",
  },
  {
    title: "Waxing",
    route: "/services/waxing",
    icon: Flower2,
    image: waxingImg,
    description: "Smooth and pain-free waxing services",
  },
  {
    title: "Mani-Pedi",
    route: "/services/mani-pedi",
    icon: Hand,
    image: maniPediImg,
    description: "Complete nail care and beautification",
  },
  {
    title: "Hair Care",
    route: "/services/hair",
    icon: Scissors,
    image: hairCareImg,
    description: "Hair styling, coloring, and treatments",
  },
  {
    title: "Body Massage",
    route: "/services/massage",
    icon: Gem,
    image: bodyMassageImg,
    description: "Relaxing full body massage therapy",
  },
  {
    title: "Pre Bridal",
    route: "/services/pre-bridal",
    icon: Gift,
    image: preBridalImg,
    description: "Complete bridal beauty packages",
  },
  {
    title: "Packages",
    route: "/services/packages",
    icon: Package,
    image: packagesImg,
    description: "Customized beauty service bundles",
  },
];

export default function ServicesSection() {
  const navigate = useNavigate();

  return (
    <section id="services" className="pt-4 pb-10 md:pt-10 md:pb-20 bg-white">

      <div className="w-full px-3">

        <div className="text-center mb-6 md:mb-14">

          <h2 className="text-2xl md:text-5xl font-bold text-gray-800">
            Our Home Salon <span className="text-pink-500">Services</span>
          </h2>

          <p className="text-gray-600 mt-2 text-xs md:text-lg">
            Professional beauty treatments at your doorstep
          </p>

        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                onClick={() => navigate(service.route)}
                className="cursor-pointer bg-white rounded-lg md:rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition border group"
              >

                <div className="relative h-24 md:h-48">

                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/30 flex items-end p-2 md:p-3">
                    <Icon className="text-white w-4 h-4 md:w-8 md:h-8" />
                  </div>

                </div>

                <div className="p-2 md:p-5">

                  <h3 className="text-sm md:text-xl font-bold text-gray-800">
                    {service.title}
                  </h3>

                  <p className="hidden md:block text-sm text-gray-600 mt-1">
                    {service.description}
                  </p>

                  <span className="inline-block mt-1 md:mt-2 text-pink-500 text-[11px] md:text-sm font-bold">
                    Book →
                  </span>

                </div>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}