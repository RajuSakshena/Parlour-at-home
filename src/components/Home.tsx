import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Star,
  Phone,
  Sparkles,
  Package,
  Scissors,
  Heart,
  Hand,
  Flower2,
  Gem,
  Gift,
  Tag,
  Crown,
  Wallet,
  User,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

import facialImg from "../images/Facial Treatment.jpg";
import makeupImg from "../images/Professional Makeup.jpg";
import waxingImg from "../images/Waxing Services.jpg";
import maniPediImg from "../images/Mani-Pedi.jpg";
import hairCareImg from "../images/Hair Care.jpg";
import bodyMassageImg from "../images/Body Massage.jpg";
import preBridalImg from "../images/Pre-Bridal.jpg";
import packagesImg from "../images/Packages.jpg";
import beautyTools from "../images/Beauty products & tools display.jpg";
import facialHome from "../images/Indian beauty technician doing facial at client’s home living room.jpg";
import makeupHome from "../images/Indian beauty technician doing makeup at client’s home.jpg";
import waxingHome from "../images/Indian beauty technician doing waxing at client’s home bedroom.jpg";
import maniPediHome from "../images/Indian beauty technician doing mani-pedi at client’s home.jpg";
import threadingHome from "../images/Indian beauty technician doing threading & small waxing at client’s home.jpg";

function HeroSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;

    const scroll = () => {
      scrollAmount += 0.5;

      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }

      scrollContainer.scrollLeft = scrollAmount;
    };

    const intervalId = setInterval(scroll, 30);
    return () => clearInterval(intervalId);
  }, []);

  const beautyImages = [
    beautyTools,
    facialHome,
    makeupHome,
    waxingHome,
    maniPediHome,
    threadingHome,
  ];

  const cities = [
    { name: "Delhi", color: "text-pink-600" },
    { name: "Noida", color: "text-purple-600" },
    { name: "Greater Noida", color: "text-rose-600" },
    { name: "Gurugram", color: "text-indigo-600" },
    { name: "Ghaziabad", color: "text-orange-600" },
    { name: "Faridabad", color: "text-red-600" },
  ];

  return (
    <section
      id="home"
      className="pt-4 bg-gradient-to-br from-pink-50 via-rose-50 to-peach-50 overflow-x-hidden"
    >
      <div className="w-full px-3">
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-4 items-center">
          {/* LEFT TEXT */}
          <div className="space-y-3 text-center md:text-left max-w-full">
            <h1 className="text-xl md:text-5xl font-bold text-gray-800">
              Salon at Home for{" "}
              <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                Women
              </span>
            </h1>

            <div className="flex flex-col items-center md:items-start space-y-1">
              <div className="flex">
                {[1,2,3,4,5].map((star)=>(
                  <Star key={star} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400"/>
                ))}
              </div>

              <span className="text-gray-600 text-[11px]">
                4.9/5 stars (2,500+ reviews)
              </span>
            </div>

            <p className="text-xs text-gray-600">
              Experience professional beauty treatments at home with certified beauticians.
            </p>

            <div className="flex justify-center md:justify-start gap-2">
              <a
                href="tel:+919811923486"
                className="flex items-center gap-1 bg-pink-500 text-white px-4 py-2 rounded-full text-xs"
              >
                <Phone className="w-3 h-3"/>
                Call
              </a>

              <button
                onClick={()=>document.getElementById("services")?.scrollIntoView({behavior:"smooth"})}
                className="border border-pink-500 text-pink-500 px-4 py-2 rounded-full text-xs"
              >
                Explore
              </button>
            </div>
          </div>

          {/* IMAGE SCROLL */}
          <div className="w-full overflow-hidden">
            <div
              ref={scrollRef}
              className="flex space-x-2 overflow-hidden"
            >
              {[...beautyImages,...beautyImages].map((img,index)=>(
                <div
                  key={index}
                  className="flex-shrink-0 w-28 h-36 rounded-lg overflow-hidden shadow"
                >
                  <img
                    src={img}
                    alt="Beauty service"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* SERVICE STRIP */}
      <div className="bg-pink-100 py-2 mt-3 flex items-center overflow-hidden">
        {/* SERVICE TEXT AUTO WIDTH */}
        <div className="pl-3 pr-4 font-semibold text-[10px] sm:text-xs text-pink-700 whitespace-nowrap flex-shrink-0">
          Service Available <span className="text-rose-600">(10% OFF)</span>
        </div>

        {/* CITIES TAKE REMAINING SPACE */}
        <div className="flex-1 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap font-semibold text-[10px] sm:text-xs">
            {[...cities,...cities,...cities].map((city,index)=>(
              <span key={index} className={`mx-4 ${city.color}`}>
                {city.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>
        {`
        .animate-marquee {
          animation: marquee 14s linear infinite;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        `}
      </style>
    </section>
  );
}

function ServicesSection() {
  const navigate = useNavigate();

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

function OffersSection() {
  const offers = [
    {
      icon: Tag,
      title: "Special Offers",
      description: "Get up to 30% off on combo packages",
      image:
        "https://images.pexels.com/photos/3865675/pexels-photo-3865675.jpeg?auto=compress&cs=tinysrgb&w=400",
      badge: "30% OFF",
    },
    {
      icon: Crown,
      title: "Premium VIP",
      description: "Join our exclusive program for discounts",
      image:
        "https://images.pexels.com/photos/3764540/pexels-photo-3764540.jpeg?auto=compress&cs=tinysrgb&w=400",
      badge: "VIP Access",
    },
    {
      icon: Wallet,
      title: "Cashback",
      description: "Earn points on every service booking",
      image:
        "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=400",
      badge: "Save More",
    },
    {
      icon: Gift,
      title: "Referral",
      description: "Refer friends and get huge discounts",
      image:
        "https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=400",
      badge: "Share & Earn",
    },
  ];

  return (
    <section className="py-6 md:py-10 bg-gradient-to-br from-pink-50 to-orange-50">
      <div className="max-w-6xl mx-auto px-3">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
            Exclusive{" "}
            <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
              Offers
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {offers.map((offer, index) => {
            const Icon = offer.icon;

            return (
              <div
                key={index}
                className="group bg-white rounded-xl overflow-hidden shadow-sm border border-pink-100"
              >
                <div className="relative h-28">
                  <img
                    src={offer.image}
                    className="w-full h-full object-cover"
                    alt={offer.title}
                  />

                  <div className="absolute top-2 right-2">
                    <span className="bg-pink-500 text-white text-[9px] font-bold px-2 py-[2px] rounded-full uppercase">
                      {offer.badge}
                    </span>
                  </div>
                </div>

                <div className="p-3">
                  <div className="flex items-center space-x-1 mb-1">
                    <Icon className="w-4 h-4 text-pink-500" />
                    <h3 className="font-semibold text-sm text-gray-800">
                      {offer.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 text-xs mb-2">
                    {offer.description}
                  </p>

                  <button className="w-full bg-pink-500 text-white py-1.5 rounded-md font-semibold text-xs hover:bg-pink-600 transition">
                    Grab Offer
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const testimonials = [
    {
      name: "Priya Sharma",
      rating: 5,
      location: "South Delhi",
      review:
        "I booked the O3+ facial service and the experience was amazing. The beautician arrived on time and followed proper hygiene protocols. The products used were branded and my skin felt fresh, smooth and glowing after the service. Definitely booking again."
    },
    {
      name: "Ananya Verma",
      rating: 5,
      location: "Noida",
      review:
        "Booked waxing and threading service at home. The beautician was polite and very professional. The waxing was quick and almost painless. Everything from setup to cleanup was handled very neatly."
    },
    {
      name: "Ritu Kapoor",
      rating: 5,
      location: "Gurgaon",
      review:
        "The mani-pedi service felt exactly like a premium salon experience. The beautician brought all equipment and maintained proper hygiene. My hands and feet feel extremely soft."
    },
    {
      name: "Neha Singh",
      rating: 5,
      location: "Dwarka",
      review:
        "I tried the facial and cleanup combo service. The results were excellent and my skin looked visibly brighter. The entire process was very relaxing."
    },
    {
      name: "Sneha Patel",
      rating: 5,
      location: "Ghaziabad",
      review:
        "Booked full body waxing service. The beautician used Rica wax and maintained hygiene throughout the service. The experience was comfortable and professional."
    }
  ];

  return (
    <section id="testimonials" className="bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-3">
        <div className="text-center mb-3">
          <h2 className="text-xl md:text-3xl font-bold text-gray-800">
            What Customers Say
          </h2>
        </div>

        <div className="overflow-hidden">
          <div className="flex space-x-3 animate-scroll hover:[animation-play-state:paused]">
            {[...testimonials, ...testimonials].map((testimonial, index) => {
              const isExpanded = expandedIndex === index;

              const shortText =
                testimonial.review.length > 90
                  ? testimonial.review.substring(0, 90) + "..."
                  : testimonial.review;

              return (
                <div
                  key={index}
                  className="flex-shrink-0 w-[80vw] sm:w-72 md:w-80 bg-pink-50 rounded-xl p-4 border border-pink-100 shadow-sm"
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white">
                      <User className="w-4 h-4" />
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 text-xs">
                        {testimonial.name}
                      </h4>

                      <p className="text-[10px] text-gray-500">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>

                  <div className="flex mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3 h-3 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  <p className="text-gray-700 text-xs leading-relaxed">
                    {isExpanded ? testimonial.review : shortText}
                  </p>

                  <button
                    onClick={() => setExpandedIndex(isExpanded ? null : index)}
                    className="text-pink-500 text-[11px] mt-1 font-semibold"
                  >
                    {isExpanded ? "Less" : "More"}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>
        {`
        .animate-scroll {
          animation: scroll 18s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        `}
      </style>
    </section>
  );
}

function KnowMoreSection() {
  const benefits = [
    "Professional certified beauticians at your doorstep",
    "Premium quality products and equipment",
    "Flexible scheduling at your convenience",
    "Safe, hygienic, and contactless service",
    "Affordable pricing with no hidden charges",
    "Wide range of beauty treatments available",
  ];

  return (
    <section id="blogs" className="bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50">
      {/* White Separator Strip */}
      <div className="w-full h-6 bg-white"></div>
      <div className="max-w-6xl mx-auto px-3">
        <div className="text-center mb-4">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-800">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
              Parlour at Home?
            </span>
          </h2>

          <p className="text-sm md:text-base text-gray-600 max-w-xl mx-auto mt-1">
            Experience the luxury of a premium salon without leaving your home
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-4 md:p-6 border border-pink-100">
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                Salon Quality, Home Comfort
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed mb-2">
                We bring professional beauty services right to your doorstep.
                Our certified beauticians use premium products and follow
                hygiene protocols to deliver a salon-like experience at home.
              </p>

              <p className="text-gray-600 text-sm leading-relaxed">
                From quick facials to bridal makeup and relaxing spa sessions,
                we cover all your beauty needs with personalized care.
              </p>
            </div>

            <div>
              <img
                src="https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Professional beauty service"
                className="w-full h-40 md:h-48 object-cover rounded-xl shadow-sm"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-2 mb-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-[2px]" />
                <span className="text-gray-700 text-xs md:text-sm">
                  {benefit}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center space-x-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-5 py-2 rounded-full hover:shadow-md transition font-semibold text-sm"
            >
              <span>Book Appointment</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      

      {/* HeroSection */}
      <HeroSection />

      {/* ServicesSection */}
      <ServicesSection />

      {/* OffersSection */}
      <OffersSection />

      {/* TestimonialsSection */}
      <TestimonialsSection />

      {/* KnowMoreSection */}
      <KnowMoreSection />

      
    </>
  );
}