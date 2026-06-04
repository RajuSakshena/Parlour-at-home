import React, { useEffect, useRef, useState, memo } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
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
  ChevronDown,
  ChevronUp,
  Shield,
  Clock,
  Users,
  Award,
  Zap,
  ThumbsUp,
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

/* =========================
   GLOBAL ANIMATION STYLES
========================= */
const GlobalStyles = memo(function GlobalStyles() {
  return (
    <style>{`
      .animate-marquee {
        animation: marquee 14s linear infinite;
        will-change: transform;
        transform: translateZ(0);
      }
      @media (max-width: 768px) {
        .animate-marquee {
          animation-duration: 8s;
        }
      }
      @keyframes marquee {
        0%   { transform: translateX(0); }
        100% { transform: translateX(-33.33%); }
      }
      .animate-scroll {
        animation: scroll-cards 18s linear infinite;
      }
      @keyframes scroll-cards {
        0%   { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .pulse-ring {
        animation: pulse-green 2s ease-out infinite;
      }
      .pulse-ring-2 {
        animation: pulse-pink 2s ease-out infinite;
      }
      @keyframes pulse-green {
        0%   { transform: scale(1); opacity: 0.6; }
        100% { transform: scale(1.8); opacity: 0; }
      }
      @keyframes pulse-pink {
        0%   { transform: scale(1); opacity: 0.6; }
        100% { transform: scale(1.8); opacity: 0; }
      }
      .float-btn {
        transition: transform 0.15s ease;
      }
      .float-btn:hover {
        transform: scale(1.1);
      }
      .faq-transition {
        transition: all 0.3s ease;
      }
    `}</style>
  );
});

/* =========================
   HERO SECTION (Improved)
========================= */
const heroImageMeta = [
  {
    src: beautyTools,
    alt: "Professional beauty products and tools used for home salon services in Delhi NCR",
    priority: true,
  },
  {
    src: facialHome,
    alt: "Indian beauty technician performing facial treatment at client's home living room in Delhi",
    priority: false,
  },
  {
    src: makeupHome,
    alt: "Certified beautician applying professional makeup at client's home in Noida",
    priority: false,
  },
  {
    src: waxingHome,
    alt: "Beauty technician performing waxing service at client's home bedroom in Gurugram",
    priority: false,
  },
  {
    src: maniPediHome,
    alt: "Beautician providing manicure and pedicure service at client's home in Ghaziabad",
    priority: false,
  },
  {
    src: threadingHome,
    alt: "Beauty technician doing threading and small waxing at client's home in Faridabad",
    priority: false,
  },
];

const cities = [
  { name: "Delhi",         color: "text-pink-600"   },
  { name: "Noida",         color: "text-purple-600" },
  { name: "Greater Noida", color: "text-rose-600"   },
  { name: "Gurugram",      color: "text-indigo-600" },
  { name: "Ghaziabad",     color: "text-orange-600" },
  { name: "Faridabad",     color: "text-red-600"    },
];

function HeroSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    let scrollAmount = 0;
    const scroll = () => {
      scrollAmount += 0.5;
      if (scrollAmount >= scrollContainer.scrollWidth / 2) scrollAmount = 0;
      scrollContainer.scrollLeft = scrollAmount;
    };
    const intervalId = setInterval(scroll, 30);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section
      id="home"
      aria-label="Parlour at Doorstep — professional beauty services at your doorstep"
      className="pt-4 bg-gradient-to-br from-pink-50 via-rose-50 to-peach-50 overflow-x-hidden"
    >
      <div className="w-full px-4 max-w-7xl mx-auto">
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-6 items-center">
          {/* LEFT TEXT */}
          <div className="space-y-5 text-center md:text-left max-w-full">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-800">
              Salon at Home in{" "}
              <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                Delhi NCR
              </span>
            </h1>
            <div className="flex flex-col items-center md:items-start space-y-1">
              <div className="flex" aria-label="Rated 4.9 out of 5 stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                ))}
              </div>
              <span className="text-gray-600 text-sm">
                4.9/5 stars (2,500+ reviews) • 5000+ happy customers
              </span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Experience professional beauty treatments at home with certified female beauticians.
              Serving Delhi, Noida, Gurugram, Ghaziabad, Faridabad and Greater Noida.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a
                href="tel:+919811923486"
                aria-label="Call Parlour at Doorstep on +91 9811923486"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-pink-500 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                Call Now
              </a>
              <button
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                aria-label="Explore our home salon services"
                className="w-full sm:w-auto border border-pink-500 text-pink-500 px-6 py-3 rounded-full text-sm font-semibold bg-white hover:bg-pink-50 transition"
              >
                Explore Services
              </button>
            </div>
            {/* Trust badges */}
            <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-2">
              <span className="inline-flex items-center gap-1 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-gray-700 shadow-sm">
                <Users className="w-3 h-3 text-pink-500" /> Female Beauticians
              </span>
              <span className="inline-flex items-center gap-1 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-gray-700 shadow-sm">
                <Shield className="w-3 h-3 text-green-500" /> Sanitized Tools
              </span>
              <span className="inline-flex items-center gap-1 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-gray-700 shadow-sm">
                <Clock className="w-3 h-3 text-blue-500" /> Same Day Booking
              </span>
            </div>
          </div>

          {/* IMAGE SCROLL - improved sizes */}
          <div className="w-full overflow-hidden" aria-hidden="true">
            <div ref={scrollRef} className="flex space-x-3 overflow-hidden">
              {[...heroImageMeta, ...heroImageMeta].map((item, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-24 h-32 md:w-32 md:h-40 lg:w-40 lg:h-52 rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hidden md:block"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover"
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                    fetchPriority={index === 0 ? "high" : "auto"}
                    width={160}
                    height={208}
                  />
                </div>
              ))}
              {/* Mobile smaller version */}
              {[...heroImageMeta, ...heroImageMeta].map((item, index) => (
                <div
                  key={`mobile-${index}`}
                  className="flex-shrink-0 w-20 h-28 rounded-xl overflow-hidden shadow-md md:hidden"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width={80}
                    height={112}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* SERVICE STRIP */}
      <div
        className="bg-pink-100 py-2 mt-4 flex items-center overflow-hidden"
        aria-label="Home salon services available across Delhi NCR with 10% off"
      >
        <div className="pl-3 pr-2 font-semibold text-xs sm:text-sm text-pink-700 whitespace-nowrap flex-shrink-0">
          Service Available <span className="text-rose-600">(10% OFF)</span>
        </div>
        <div className="flex-1 overflow-hidden" aria-hidden="true">
          <div className="flex animate-marquee whitespace-nowrap font-semibold text-xs sm:text-sm">
            {[...cities, ...cities, ...cities].map((city, index) => (
              <span key={index} className={`mx-2 ${city.color}`}>
                {city.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================
   SERVICES SECTION (Premium Urban Company Inspired Design)
   - EXACTLY 4 cards per row on ALL screen sizes
   - No price badges
   - Keep all routes, images, icons, functionality
   - Mobile optimized (80-100px image height, compact padding)
   - Desktop premium (220px image height, larger typography)
========================= */
type ServiceItem = {
  title: string;
  route: string;
  icon: React.ElementType;
  image: string;
  alt: string;
  description: string;
  price?: string;
};

const services: ServiceItem[] = [
  {
    title: "Facial",
    route: "/services/facial",
    icon: Sparkles,
    image: facialImg,
    alt: "Professional facial treatment at home — O3+, gold, and cleanup facials in Delhi NCR",
    description: "Rejuvenating facial treatments for glowing skin",
    price: "₹799",
  },
  {
    title: "Makeup",
    route: "/services/makeup",
    icon: Heart,
    image: makeupImg,
    alt: "Professional bridal and party makeup at home by certified beautician in Delhi",
    description: "Professional makeup for every occasion",
    price: "₹1499",
  },
  {
    title: "Waxing",
    route: "/services/waxing",
    icon: Flower2,
    image: waxingImg,
    alt: "Rica and chocolate waxing service at home — arms, legs, full body waxing in Noida",
    description: "Smooth and pain-free waxing services",
    price: "₹399",
  },
  {
    title: "Mani-Pedi",
    route: "/services/mani-pedi",
    icon: Hand,
    image: maniPediImg,
    alt: "Manicure and pedicure at home — gel nails, nail art, foot spa in Gurugram",
    description: "Complete nail care and beautification",
    price: "₹599",
  },
  {
    title: "Hair Care",
    route: "/services/hair",
    icon: Scissors,
    image: hairCareImg,
    alt: "Hair care services at home — haircut, hair color, Loreal hair spa in Ghaziabad",
    description: "Hair styling, coloring, and treatments",
    price: "₹699",
  },
  {
    title: "Body Massage",
    route: "/services/massage",
    icon: Gem,
    image: bodyMassageImg,
    alt: "Relaxing full body massage at home by certified therapist in Faridabad",
    description: "Relaxing full body massage therapy",
    price: "₹999",
  },
  {
    title: "Pre Bridal",
    route: "/services/pre-bridal",
    icon: Gift,
    image: preBridalImg,
    alt: "Pre-bridal beauty packages at home — facial, waxing, threading, makeup in Delhi NCR",
    description: "Complete bridal beauty packages",
    price: "₹4999",
  },
  {
    title: "Packages",
    route: "/services/packages",
    icon: Package,
    image: packagesImg,
    alt: "Combo beauty packages at home — facial + waxing + mani-pedi bundles in Delhi NCR",
    description: "Customized beauty service bundles",
    price: "₹1999",
  },
];

function ServicesSection() {
  return (
    <section id="services" className="py-10 md:py-20 bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8 md:mb-14">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-800">
            Our Home Salon <span className="text-pink-500">Services</span>
          </h2>
          <p className="text-gray-600 mt-2 text-base md:text-lg max-w-2xl mx-auto">
            Professional beauty treatments at your doorstep
          </p>
        </div>

        {/* EXACTLY 4 columns on all screen sizes - no responsive column changes */}
        <div className="grid grid-cols-4 gap-2 md:gap-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={index}
                to={service.route}
                aria-label={`View ${service.title} services — ${service.description}`}
                className="group relative bg-white rounded-[24px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
              >
                {/* Gradient border effect on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-400 to-rose-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-10"></div>
                
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <div className="h-24 md:h-56 lg:h-60 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                      decoding="async"
                      width={400}
                      height={300}
                    />
                  </div>
                  {/* Pink overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-600/30 via-pink-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>

                {/* Card Content */}
                <div className="p-2 md:p-5">
                  {/* Icon + Title */}
                  <div className="flex items-center gap-1.5 md:gap-2 mb-1 md:mb-2">
                    <Icon className="w-3.5 h-3.5 md:w-5 md:h-5 text-pink-500" aria-hidden="true" />
                    <h3 className="text-xs md:text-xl font-extrabold text-gray-800 tracking-tight">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description - line-clamp-2 for mobile/desktop consistent */}
                  <p className="text-[10px] md:text-sm text-gray-600 leading-relaxed line-clamp-2">
                    {service.description}
                  </p>

                  {/* Professional Service Badge */}
                  <div className="my-2 md:my-3">
                    <span className="inline-flex items-center px-1.5 py-0.5 md:px-3 md:py-1 bg-pink-50 text-pink-700 rounded-full text-[8px] md:text-xs font-semibold tracking-wide">
                      Professional Service
                    </span>
                  </div>

                  {/* CTA Button - Full width, gradient, with ArrowRight */}
                  <div className="mt-1 md:mt-2">
                    <div className="w-full bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl px-2 py-1.5 md:px-4 md:py-2.5 transition-all duration-300 hover:scale-105 active:scale-95 shadow-md hover:shadow-pink-200">
                      <div className="flex items-center justify-between text-white">
                        <span className="text-[10px] md:text-sm font-bold tracking-wide">Book Now</span>
                        <ArrowRight className="w-3 h-3 md:w-4 md:h-4" aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* =========================
   OFFERS SECTION (Glassmorphism)
========================= */
const offers = [
  {
    icon: Tag,
    title: "Special Offers",
    description: "Get up to 30% off on combo packages",
    image: "https://images.pexels.com/photos/3865675/pexels-photo-3865675.jpeg?auto=compress&cs=tinysrgb&w=600",
    badge: "30% OFF",
    alt: "Special discount offer on combo beauty packages at home in Delhi NCR",
  },
  {
    icon: Crown,
    title: "Premium VIP",
    description: "Join our exclusive program for discounts",
    image: "https://images.pexels.com/photos/3764540/pexels-photo-3764540.jpeg?auto=compress&cs=tinysrgb&w=600",
    badge: "VIP Access",
    alt: "VIP membership program for exclusive home salon discounts in Delhi",
  },
  {
    icon: Wallet,
    title: "Cashback",
    description: "Earn points on every service booking",
    image: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=600",
    badge: "Save More",
    alt: "Cashback and reward points on every home salon booking",
  },
  {
    icon: Gift,
    title: "Referral",
    description: "Refer friends and get huge discounts",
    image: "https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=600",
    badge: "Share & Earn",
    alt: "Refer a friend and earn discounts on home beauty services in Delhi NCR",
  },
];

function OffersSection() {
  return (
    <section className="py-10 md:py-16 bg-gradient-to-br from-pink-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-800">
            Exclusive{" "}
            <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
              Offers
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {offers.map((offer, index) => {
            const Icon = offer.icon;
            return (
              <article
                key={index}
                className="group backdrop-blur-md bg-white/70 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-white/50"
              >
                <div className="relative h-32">
                  <img
                    src={offer.image}
                    className="w-full h-full object-cover"
                    alt={offer.alt}
                    loading="lazy"
                    decoding="async"
                    width={400}
                    height={160}
                  />
                  <div className="absolute top-3 right-3">
                    <span className="bg-gradient-to-r from-pink-500 to-rose-500 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-md">
                      {offer.badge}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="w-5 h-5 text-pink-500" aria-hidden="true" />
                    <h3 className="font-bold text-gray-800 text-base">
                      {offer.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-xs mb-3 leading-relaxed">
                    {offer.description}
                  </p>
                  <button
                    aria-label={`Grab ${offer.title} offer`}
                    className="w-full bg-pink-500 text-white py-2 rounded-xl font-semibold text-xs hover:bg-pink-600 transition shadow-md"
                  >
                    Grab Offer
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* =========================
   TESTIMONIALS SECTION (Google-style)
========================= */
type Testimonial = {
  name: string;
  rating: number;
  location: string;
  review: string;
  date: string;
  verified: boolean;
};

const testimonials: Testimonial[] = [
  {
    name: "Priya Sharma",
    rating: 5,
    location: "South Delhi",
    review: "I booked the O3+ facial service and the experience was amazing. The beautician arrived on time and followed proper hygiene protocols. The products used were branded and my skin felt fresh, smooth and glowing after the service. Definitely booking again.",
    date: "2025-02-15",
    verified: true,
  },
  {
    name: "Ananya Verma",
    rating: 5,
    location: "Noida",
    review: "Booked waxing and threading service at home. The beautician was polite and very professional. The waxing was quick and almost painless. Everything from setup to cleanup was handled very neatly.",
    date: "2025-02-10",
    verified: true,
  },
  {
    name: "Ritu Kapoor",
    rating: 5,
    location: "Gurgaon",
    review: "The mani-pedi service felt exactly like a premium salon experience. The beautician brought all equipment and maintained proper hygiene. My hands and feet feel extremely soft.",
    date: "2025-02-05",
    verified: true,
  },
  {
    name: "Neha Singh",
    rating: 5,
    location: "Dwarka",
    review: "I tried the facial and cleanup combo service. The results were excellent and my skin looked visibly brighter. The entire process was very relaxing.",
    date: "2025-01-28",
    verified: true,
  },
  {
    name: "Sneha Patel",
    rating: 5,
    location: "Ghaziabad",
    review: "Booked full body waxing service. The beautician used Rica wax and maintained hygiene throughout the service. The experience was comfortable and professional.",
    date: "2025-01-20",
    verified: true,
  },
];

function TestimonialsSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section
      id="testimonials"
      aria-label="Customer reviews for Parlour at Doorstep"
      className="bg-white py-12 md:py-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-800">
            What Customers Say
          </h2>
          <p className="text-gray-500 mt-2">Trusted by 5000+ women across Delhi NCR</p>
        </div>

        <div className="overflow-hidden">
          <div className="flex space-x-5 animate-scroll hover:[animation-play-state:paused]">
            {[...testimonials, ...testimonials].map((testimonial, index) => {
              const isExpanded = expandedIndex === index;
              const shortText =
                testimonial.review.length > 100
                  ? testimonial.review.substring(0, 100) + "..."
                  : testimonial.review;

              return (
                <article
                  key={index}
                  className="flex-shrink-0 w-[85vw] sm:w-80 md:w-96 bg-white rounded-2xl p-5 border border-gray-100 shadow-lg hover:shadow-xl transition"
                  aria-label={`Review by ${testimonial.name} from ${testimonial.location}`}
                  itemScope
                  itemType="https://schema.org/Review"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center text-white shadow-md">
                        <User className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 text-sm" itemProp="author">
                          {testimonial.name}
                        </h4>
                        <div className="flex items-center gap-1 mt-0.5">
                          <span className="text-[10px] text-gray-500">{testimonial.location}</span>
                          {testimonial.verified && (
                            <span className="inline-flex items-center gap-0.5 bg-green-100 text-green-700 text-[9px] px-1.5 py-0.5 rounded-full">
                              <CheckCircle className="w-2.5 h-2.5" /> Verified
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex" aria-label={`${testimonial.rating} out of 5 stars`}>
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="text-[10px] text-gray-400 mt-1 block">
                        {new Date(testimonial.date).toLocaleDateString("en-IN")}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-700 text-sm leading-relaxed mt-3" itemProp="reviewBody">
                    {isExpanded ? testimonial.review : shortText}
                  </p>

                  <button
                    onClick={() => setExpandedIndex(isExpanded ? null : index)}
                    aria-expanded={isExpanded}
                    className="text-pink-500 text-xs mt-2 font-semibold hover:underline"
                  >
                    {isExpanded ? "Read less" : "Read more"}
                  </button>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================
   WHY CHOOSE US (Grid cards)
========================= */
const whyChooseUs = [
  {
    icon: Users,
    title: "Certified Beauticians",
    description: "Professionally trained, background-verified female experts",
  },
  {
    icon: Gift,
    title: "Premium Products",
    description: "L'Oréal, O3+, Rica, VLCC – 100% authentic",
  },
  {
    icon: Clock,
    title: "Same Day Booking",
    description: "Book before noon for evening appointment",
  },
  {
    icon: Wallet,
    title: "Affordable Pricing",
    description: "No hidden charges, upfront pricing",
  },
  {
    icon: Shield,
    title: "Hygiene First",
    description: "Sanitized tools, disposable sheets, gloves & masks",
  },
  {
    icon: Award,
    title: "5000+ Happy Customers",
    description: "4.9 rating from verified customers",
  },
];

function WhyChooseUsSection() {
  return (
    <section className="bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-800">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
              Parlour at Doorstep?
            </span>
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Luxury salon experience at home – convenient, safe, and premium
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUs.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-pink-50 group hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-pink-500 transition-colors">
                  <Icon className="w-6 h-6 text-pink-600 group-hover:text-white transition" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* =========================
   FAQ SECTION (Improved)
========================= */
type FAQItem = { question: string; answer: string };

const faqs: FAQItem[] = [
  {
    question: "Is salon at home safe and hygienic?",
    answer: "Yes, absolutely. All our beauticians follow strict hygiene protocols — they arrive with sanitized tools, use fresh disposable items for each client, and wear clean uniforms. We ensure a safe, contactless service experience right at your doorstep in Delhi, Noida, Gurugram, Ghaziabad, and Faridabad.",
  },
  {
    question: "Which products are used for home salon services?",
    answer: "We exclusively use premium, dermatologist-tested brands such as L'Oréal, O3+, Rica, Lotus, and VLCC. All products are 100% authentic and sourced directly from authorized distributors.",
  },
  {
    question: "Are the beauticians certified and trained?",
    answer: "Yes. Every beautician on our platform is professionally trained and certified. They undergo background verification, skill assessments, and hygiene training.",
  },
  {
    question: "Which areas in Delhi NCR are covered?",
    answer: "We cover Delhi (South Delhi, Dwarka, Rohini, Lajpat Nagar, etc.), Noida, Greater Noida, Gurugram, Ghaziabad, and Faridabad.",
  },
  {
    question: "How can I book a home beauty service?",
    answer: "Call or WhatsApp us at +91 9811923486 to book your appointment. Choose your preferred service, date, and time slot.",
  },
  {
    question: "What is the cancellation or rescheduling policy?",
    answer: "You can reschedule or cancel up to 2 hours before the scheduled time without charges. Last-minute cancellations may incur a small fee.",
  },
  {
    question: "Do you offer same-day booking?",
    answer: "Yes, same-day booking is available for most services. Call before 12 PM for an evening appointment.",
  },
  {
    question: "Are the beauticians female?",
    answer: "Yes, we send only certified female beauticians for all services to ensure safety and comfort.",
  },
  {
    question: "What is included in bridal makeup at home?",
    answer: "HD foundation, eye makeup, contouring, blush, lip color, setting spray, and a trial session. Premium brands like MAC, Huda Beauty.",
  },
  {
    question: "Do you provide hair spa at home?",
    answer: "Yes, hair spa includes deep conditioning, scalp massage, steam, and final wash using Loreal Professional products.",
  },
  {
    question: "How long does waxing take?",
    answer: "Half legs+arms ~30 min, full body ~1.5 hours. Rica/chocolate wax for less pain.",
  },
  {
    question: "What is your refund policy?",
    answer: "If unsatisfied, contact within 24 hours. We offer corrective service or partial/full refund based on issue.",
  },
  {
    question: "Do you offer threading at home?",
    answer: "Yes, threading for eyebrows, upper lips, chin starting at ₹99, often combined with facial/waxing packages.",
  },
  {
    question: "What payment methods are accepted?",
    answer: "Cash, UPI (Google Pay, PhonePe, Paytm), credit/debit cards, bank transfer.",
  },
  {
    question: "Can I book for a group?",
    answer: "Yes, group bookings for bridal parties or kitty parties. Two beauticians can be sent simultaneously.",
  },
  {
    question: "How do you maintain hygiene for waxing?",
    answer: "Disposable spatulas, fresh wax for each client, gloves, single-use strips and sheets.",
  },
  {
    question: "What are your business hours?",
    answer: "7 days a week, 8:00 AM to 9:00 PM. Early/late slots may have a convenience fee.",
  },
  {
    question: "Are there hidden charges?",
    answer: "No. Price quoted includes all taxes and travel within standard zones.",
  },
  {
    question: "Do you provide pre-bridal packages?",
    answer: "Yes, pre-bridal package includes 3 sessions of facial, waxing, threading, mani-pedi, and hair spa.",
  },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      aria-label="Frequently asked questions"
      className="py-12 md:py-20 bg-white"
    >
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-800">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-gray-600 mt-2">Everything you need to know</p>
        </div>

        <dl className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
              >
                <dt>
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-3 p-5 text-left bg-white hover:bg-pink-50 transition-all duration-200"
                  >
                    <span className="font-semibold text-gray-800 text-base">
                      {faq.question}
                    </span>
                    {isOpen
                      ? <ChevronUp className="w-5 h-5 text-pink-500 flex-shrink-0" />
                      : <ChevronDown className="w-5 h-5 text-pink-500 flex-shrink-0" />
                    }
                  </button>
                </dt>
                {isOpen && (
                  <dd
                    className="px-5 pb-5 text-gray-600 text-sm leading-relaxed bg-white border-t border-gray-100"
                  >
                    {faq.answer}
                  </dd>
                )}
              </div>
            );
          })}
        </dl>

        <div className="text-center mt-8">
          <p className="text-gray-600">
            Still have questions?{" "}
            <a
              href="tel:+919811923486"
              className="text-pink-600 font-semibold hover:underline"
            >
              Call us at +91 9811923486
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

/* =========================
   LOCATION SEO SECTION (Collapsible)
========================= */
function LocationSEOSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const fullContent = (
    <div className="prose prose-pink prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Salon at Home Services in Delhi NCR – Your Ultimate Beauty Destination</h2>
      <p className="text-gray-700 leading-relaxed">
        Looking for a <strong>salon at home in Delhi</strong> or <strong>beautician at home near me</strong>? Parlour at Doorstep brings the finest beauty services directly to your doorstep. With <strong>10+ years of experience</strong>, <strong>5000+ happy customers</strong>, and a team of <strong>certified female beauticians</strong>, we redefine convenience and luxury. Our services span across Delhi, Noida, Greater Noida, Gurugram, Ghaziabad, and Faridabad – all at affordable prices with premium branded products.
      </p>
      <h3 className="text-2xl font-bold mt-8 mb-4">Why Choose Parlour at Doorstep?</h3>
      <p className="text-gray-700">
        Unlike traditional salons, we eliminate travel time and waiting. Our experts arrive at your home with sanitized equipment, fresh disposables, and branded products like L'Oréal, O3+, Rica, and VLCC. Whether you need a quick <Link to="/services/facial" className="text-pink-600 font-semibold">facial at home</Link>, a complete <Link to="/services/waxing" className="text-pink-600 font-semibold">waxing at home</Link>, or a professional <Link to="/services/makeup" className="text-pink-600 font-semibold">makeup artist at home</Link>, we ensure 100% satisfaction.
      </p>
      <h3 className="text-2xl font-bold mt-8 mb-4">Professional Beautician at Home</h3>
      <p className="text-gray-700">
        Our platform connects you with vetted, experienced beauticians. <strong>Same day booking</strong> available. All beauticians are female.
      </p>
      <h4 className="text-xl font-semibold mt-6 mb-3">Facial at Home Services</h4>
      <p className="text-gray-700">
        <strong>Facial at home Delhi</strong> – O3+, gold, fruit, wine facials starting ₹799.
      </p>
      <h4 className="text-xl font-semibold mt-6 mb-3">Waxing at Home</h4>
      <p className="text-gray-700">
        Rica chocolate wax, full body, half body – painless and hygienic.
      </p>
      <h4 className="text-xl font-semibold mt-6 mb-3">Makeup Artist at Home</h4>
      <p className="text-gray-700">
        Bridal, party, airbrush makeup using MAC, Huda Beauty.
      </p>
      <h4 className="text-xl font-semibold mt-6 mb-3">Hair Care & Hair Spa at Home</h4>
      <p className="text-gray-700">
        Hair spa, haircut, coloring with Loreal Professional.
      </p>
      <h4 className="text-xl font-semibold mt-6 mb-3">Manicure Pedicure at Home</h4>
      <p className="text-gray-700">
        Gel nails, French manicure, foot spa.
      </p>
      <h4 className="text-xl font-semibold mt-6 mb-3">Hygiene & Safety</h4>
      <p className="text-gray-700">
        Sanitized tools, disposable strips, gloves, masks – strict protocols.
      </p>
      <h3 className="text-2xl font-bold mt-8 mb-4">Areas We Serve – Complete Delhi NCR</h3>
      <p className="text-gray-700">
        <strong>Salon at home Delhi:</strong> South Delhi (Lajpat Nagar, GK, Saket, Malviya Nagar, Hauz Khas), West Delhi (Rajouri Garden, Janakpuri, Tilak Nagar), North Delhi (Rohini, Pitampura), East Delhi (Laxmi Nagar, Preet Vihar), Dwarka, Vasant Kunj.
        <br />
        <strong>Salon at home Noida:</strong> Sector 18, 50, 62, Noida Extension.
        <br />
        <strong>Salon at home Greater Noida:</strong> Alpha, Beta, Gamma sectors, Knowledge Park.
        <br />
        <strong>Salon at home Gurugram:</strong> DLF Phase 1-5, Golf Course Road, Sohna Road, Sector 45, 57.
        <br />
        <strong>Salon at home Ghaziabad:</strong> Indirapuram, Vaishali, Vasundhara, Raj Nagar Extension.
        <br />
        <strong>Salon at home Faridabad:</strong> Sector 15, 16, 17, 21C, Greater Faridabad.
      </p>
      <h3 className="text-2xl font-bold mt-8 mb-4">Trusted by 5000+ Women</h3>
      <p className="text-gray-700">
        4.9 stars, 2500+ reviews. Known for punctuality, polite staff, and outstanding results.
      </p>
      <h3 className="text-2xl font-bold mt-8 mb-4">Book Your Appointment</h3>
      <p className="text-gray-700">
        Call <a href="tel:+919811923486" className="text-pink-600 font-bold">+91 9811923486</a> or WhatsApp for instant confirmation.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link to="/services/facial" className="text-pink-600 underline">Facial at Home</Link>
        <Link to="/services/waxing" className="text-pink-600 underline">Waxing at Home</Link>
        <Link to="/services/makeup" className="text-pink-600 underline">Makeup at Home</Link>
        <Link to="/services/hair" className="text-pink-600 underline">Hair Spa at Home</Link>
        <Link to="/services/mani-pedi" className="text-pink-600 underline">Mani-Pedi at Home</Link>
        <Link to="/services/pre-bridal" className="text-pink-600 underline">Pre Bridal Package</Link>
      </div>
    </div>
  );

  const shortContent = fullContent.props.children.slice(0, 3); // approximate first 250 words

  return (
    <section className="bg-gradient-to-br from-pink-50 to-white py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="prose prose-pink prose-lg max-w-none">
          {isExpanded ? fullContent : (
            <>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Salon at Home Services in Delhi NCR</h2>
              <p className="text-gray-700 leading-relaxed">
                Looking for a <strong>salon at home in Delhi</strong> or <strong>beautician at home near me</strong>? Parlour at Doorstep brings the finest beauty services directly to your doorstep. With <strong>10+ years of experience</strong>, <strong>5000+ happy customers</strong>, and a team of <strong>certified female beauticians</strong>, we redefine convenience and luxury. Our services span across Delhi, Noida, Greater Noida, Gurugram, Ghaziabad, and Faridabad – all at affordable prices with premium branded products.
              </p>
              <p className="text-gray-700">
                Unlike traditional salons, we eliminate travel time and waiting. Our experts arrive at your home with sanitized equipment, fresh disposables, and branded products like L'Oréal, O3+, Rica, and VLCC. Whether you need a quick <Link to="/services/facial" className="text-pink-600 font-semibold">facial at home</Link>, a complete <Link to="/services/waxing" className="text-pink-600 font-semibold">waxing at home</Link>, or a professional <Link to="/services/makeup" className="text-pink-600 font-semibold">makeup artist at home</Link>, we ensure 100% satisfaction.
              </p>
              <p className="text-gray-700">
                Our platform connects you with vetted, experienced beauticians. <strong>Same day booking</strong> available. All beauticians are female... <button onClick={() => setIsExpanded(true)} className="text-pink-600 font-semibold hover:underline">Read full coverage for Delhi NCR →</button>
              </p>
            </>
          )}
          {isExpanded && (
            <button onClick={() => setIsExpanded(false)} className="mt-6 text-pink-600 font-semibold hover:underline">
              Show less
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

/* =========================
   FLOATING BUTTONS (Improved positioning)
========================= */
function FloatingButtons() {
  return (
    <div
      className="fixed right-4 bottom-24 md:bottom-auto md:top-1/2 md:-translate-y-1/2 z-50 flex flex-col gap-3 items-center"
      aria-label="Quick contact options"
    >
      <div className="relative flex items-center justify-center">
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60 pulse-ring" />
        <a
          href="https://wa.me/919811923486"
          target="_blank"
          rel="noopener noreferrer"
          className="float-btn relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-xl shadow-green-300/50"
          aria-label="Chat on WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-6 h-6 md:w-8 md:h-8" fill="none">
            <circle cx="24" cy="24" r="24" fill="#25D366" />
            <path
              d="M34.5 13.4A14.7 14.7 0 0 0 24 9C16.3 9 10 15.3 10 23c0 2.5.7 4.9 1.9 7L10 39l9.3-2.4a14.8 14.8 0 0 0 14.7-3.7A14.8 14.8 0 0 0 38 23c0-3.9-1.5-7.6-3.5-9.6zm-10.5 20a12.3 12.3 0 0 1-6.3-1.7l-.5-.3-5 1.3 1.3-4.9-.3-.5A12.3 12.3 0 0 1 24 11.5c6.8 0 12.3 5.5 12.3 12.3S30.8 36.1 24 36.1zm6.7-9.2c-.4-.2-2.2-1.1-2.5-1.2-.3-.1-.6-.2-.8.2-.3.4-1 1.2-1.2 1.5-.2.3-.4.3-.8.1-.4-.2-1.6-.6-3-1.9-1.1-1-1.8-2.2-2.1-2.6-.2-.4 0-.6.2-.7.2-.2.4-.4.6-.7.2-.2.3-.4.4-.7.1-.3 0-.6-.1-.8-.1-.2-.8-2-1.1-2.7-.3-.7-.6-.6-.8-.6h-.7c-.3 0-.7.1-1 .4-.4.4-1.4 1.3-1.4 3.2s1.4 3.7 1.6 4c.2.2 2.8 4.3 6.8 6 .9.4 1.7.6 2.2.8.9.3 1.8.3 2.4.2.7-.1 2.2-.9 2.5-1.8.3-.9.3-1.6.2-1.8-.1-.2-.4-.3-.8-.5z"
              fill="white"
            />
          </svg>
        </a>
      </div>
      <div className="relative flex items-center justify-center">
        <span className="absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-60 pulse-ring-2" />
        <a
          href="tel:+919811923486"
          className="float-btn relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-pink-600 flex items-center justify-center shadow-xl shadow-pink-300/50"
          aria-label="Call now"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-6 h-6 md:w-7 md:h-7" fill="none">
            <circle cx="24" cy="24" r="24" fill="#db2777" />
            <path
              d="M34.3 29.6l-3.5-1.5a1.5 1.5 0 0 0-1.7.4l-1.6 1.9a22.2 22.2 0 0 1-9.9-9.9l1.9-1.6a1.5 1.5 0 0 0 .4-1.7L18.4 13.7a1.5 1.5 0 0 0-1.7-.9l-3.3.8A1.5 1.5 0 0 0 12 15c0 12.2 9.8 22 22 22a1.5 1.5 0 0 0 1.4-1.1l.8-3.4a1.5 1.5 0 0 0-.9-1.9z"
              fill="white"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

/* =========================
   HOME — EXPORT (with schemas)
========================= */
export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Parlour at Doorstep",
    url: "https://www.parlouratdoorstep.com",
    description: "Professional home salon services across Delhi NCR — Facial, Waxing, Makeup, Hair Care, Mani-Pedi and more by certified beauticians.",
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Parlour at Doorstep",
    url: "https://www.parlouratdoorstep.com",
    sameAs: ["https://www.instagram.com/parlouratdoorstep"],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+919811923486",
      contactType: "customer service",
      areaServed: "IN-DL",
    },
  };

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: "Parlour at Doorstep",
    description: "Professional salon services at home in Delhi NCR",
    url: "https://www.parlouratdoorstep.com",
    telephone: "+919811923486",
    priceRange: "₹₹",
    openingHours: "Mo-Su 08:00-21:00",
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "2500" },
    address: { "@type": "PostalAddress", addressLocality: "Delhi", addressCountry: "IN" },
    areaServed: ["Delhi", "Noida", "Greater Noida", "Gurugram", "Ghaziabad", "Faridabad"],
  };

  return (
    <>
      <GlobalStyles />
      <Helmet>
        <html lang="en" />
        <title>Salon at Home Delhi NCR | Professional Beautician at Home | 4.9 Rated</title>
        <meta name="description" content="Best salon at home in Delhi, Noida, Gurugram, Ghaziabad, Faridabad. Facial, waxing, makeup, hair spa by certified female beauticians. 5000+ happy customers. Same day booking!" />
        <meta name="keywords" content="salon at home Delhi, beautician at home Delhi, facial at home Delhi, waxing at home Delhi, makeup artist at home Delhi, salon at home Noida, salon at home Gurugram, salon at home Ghaziabad, salon at home Faridabad, salon at home Greater Noida" />
        <link rel="canonical" href="https://www.parlouratdoorstep.com/" />
        <link rel="preload" as="image" href={beautyTools} fetchPriority="high" />
        <meta property="og:title" content="Salon at Home Delhi NCR – Premium Beauty at Doorstep" />
        <meta property="og:description" content="Certified beauticians bring facial, waxing, makeup, hair spa to your home. 4.9 stars. Same-day booking." />
        <meta property="og:image" content="https://www.parlouratdoorstep.com/og-image.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(businessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <HeroSection />
      <ServicesSection />
      <OffersSection />
      <TestimonialsSection />
      <WhyChooseUsSection />
      <FAQSection />
      <LocationSEOSection />
      <FloatingButtons />
    </>
  );
}
