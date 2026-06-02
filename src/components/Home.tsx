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
   Rendered once via memo
========================= */
const GlobalStyles = memo(function GlobalStyles() {
  return (
    <style>{`
      .animate-marquee {
        animation: marquee 14s linear infinite;
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
    `}</style>
  );
});

/* =========================
   HERO SECTION
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
              <div className="flex" aria-label="Rated 4.9 out of 5 stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                ))}
              </div>
              <span className="text-gray-600 text-[11px]">
                4.9/5 stars (2,500+ reviews)
              </span>
            </div>

            <p className="text-xs text-gray-600">
              Experience professional beauty treatments at home with certified beauticians.
              Serving Delhi, Noida, Gurugram, Ghaziabad, Faridabad and Greater Noida.
            </p>

            <div className="flex justify-center md:justify-start gap-2">
              <a
                href="tel:+919811923486"
                aria-label="Call Parlour at Doorstep on +91 9811923486"
                className="flex items-center gap-1 bg-pink-500 text-white px-4 py-2 rounded-full text-xs"
              >
                <Phone className="w-3 h-3" aria-hidden="true" />
                Call
              </a>

              <button
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                aria-label="Explore our home salon services"
                className="border border-pink-500 text-pink-500 px-4 py-2 rounded-full text-xs"
              >
                Explore
              </button>
            </div>
          </div>

          {/* IMAGE SCROLL */}
          <div className="w-full overflow-hidden" aria-hidden="true">
            <div ref={scrollRef} className="flex space-x-2 overflow-hidden">
              {[...heroImageMeta, ...heroImageMeta].map((item, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-28 h-36 rounded-lg overflow-hidden shadow"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover"
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                    fetchPriority={index === 0 ? "high" : "auto"}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* SERVICE STRIP */}
      <div
        className="bg-pink-100 py-2 mt-3 flex items-center overflow-hidden"
        aria-label="Home salon services available across Delhi NCR with 10% off"
      >
        <div className="pl-3 pr-4 font-semibold text-[10px] sm:text-xs text-pink-700 whitespace-nowrap flex-shrink-0">
          Service Available <span className="text-rose-600">(10% OFF)</span>
        </div>

        <div className="flex-1 overflow-hidden" aria-hidden="true">
          <div className="flex animate-marquee whitespace-nowrap font-semibold text-[10px] sm:text-xs">
            {[...cities, ...cities, ...cities].map((city, index) => (
              <span key={index} className={`mx-4 ${city.color}`}>
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
   SERVICES SECTION
========================= */
type ServiceItem = {
  title: string;
  route: string;
  icon: React.ElementType;
  image: string;
  alt: string;
  description: string;
};

const services: ServiceItem[] = [
  {
    title: "Facial",
    route: "/services/facial",
    icon: Sparkles,
    image: facialImg,
    alt: "Professional facial treatment at home — O3+, gold, and cleanup facials in Delhi NCR",
    description: "Rejuvenating facial treatments for glowing skin",
  },
  {
    title: "Makeup",
    route: "/services/makeup",
    icon: Heart,
    image: makeupImg,
    alt: "Professional bridal and party makeup at home by certified beautician in Delhi",
    description: "Professional makeup for every occasion",
  },
  {
    title: "Waxing",
    route: "/services/waxing",
    icon: Flower2,
    image: waxingImg,
    alt: "Rica and chocolate waxing service at home — arms, legs, full body waxing in Noida",
    description: "Smooth and pain-free waxing services",
  },
  {
    title: "Mani-Pedi",
    route: "/services/mani-pedi",
    icon: Hand,
    image: maniPediImg,
    alt: "Manicure and pedicure at home — gel nails, nail art, foot spa in Gurugram",
    description: "Complete nail care and beautification",
  },
  {
    title: "Hair Care",
    route: "/services/hair",
    icon: Scissors,
    image: hairCareImg,
    alt: "Hair care services at home — haircut, hair color, Loreal hair spa in Ghaziabad",
    description: "Hair styling, coloring, and treatments",
  },
  {
    title: "Body Massage",
    route: "/services/massage",
    icon: Gem,
    image: bodyMassageImg,
    alt: "Relaxing full body massage at home by certified therapist in Faridabad",
    description: "Relaxing full body massage therapy",
  },
  {
    title: "Pre Bridal",
    route: "/services/pre-bridal",
    icon: Gift,
    image: preBridalImg,
    alt: "Pre-bridal beauty packages at home — facial, waxing, threading, makeup in Delhi NCR",
    description: "Complete bridal beauty packages",
  },
  {
    title: "Packages",
    route: "/services/packages",
    icon: Package,
    image: packagesImg,
    alt: "Combo beauty packages at home — facial + waxing + mani-pedi bundles in Delhi NCR",
    description: "Customized beauty service bundles",
  },
];

function ServicesSection() {
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
              <Link
                key={index}
                to={service.route}
                aria-label={`View ${service.title} services — ${service.description}`}
                className="cursor-pointer bg-white rounded-lg md:rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition border group"
              >
                <div className="relative h-24 md:h-48">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-end p-2 md:p-3">
                    <Icon className="text-white w-4 h-4 md:w-8 md:h-8" aria-hidden="true" />
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
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* =========================
   OFFERS SECTION
========================= */
const offers = [
  {
    icon: Tag,
    title: "Special Offers",
    description: "Get up to 30% off on combo packages",
    image: "https://images.pexels.com/photos/3865675/pexels-photo-3865675.jpeg?auto=compress&cs=tinysrgb&w=400",
    badge: "30% OFF",
    alt: "Special discount offer on combo beauty packages at home in Delhi NCR",
  },
  {
    icon: Crown,
    title: "Premium VIP",
    description: "Join our exclusive program for discounts",
    image: "https://images.pexels.com/photos/3764540/pexels-photo-3764540.jpeg?auto=compress&cs=tinysrgb&w=400",
    badge: "VIP Access",
    alt: "VIP membership program for exclusive home salon discounts in Delhi",
  },
  {
    icon: Wallet,
    title: "Cashback",
    description: "Earn points on every service booking",
    image: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=400",
    badge: "Save More",
    alt: "Cashback and reward points on every home salon booking",
  },
  {
    icon: Gift,
    title: "Referral",
    description: "Refer friends and get huge discounts",
    image: "https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=400",
    badge: "Share & Earn",
    alt: "Refer a friend and earn discounts on home beauty services in Delhi NCR",
  },
];

function OffersSection() {
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
              <article
                key={index}
                className="group bg-white rounded-xl overflow-hidden shadow-sm border border-pink-100"
              >
                <div className="relative h-28">
                  <img
                    src={offer.image}
                    className="w-full h-full object-cover"
                    alt={offer.alt}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute top-2 right-2">
                    <span className="bg-pink-500 text-white text-[9px] font-bold px-2 py-[2px] rounded-full uppercase">
                      {offer.badge}
                    </span>
                  </div>
                </div>

                <div className="p-3">
                  <div className="flex items-center space-x-1 mb-1">
                    <Icon className="w-4 h-4 text-pink-500" aria-hidden="true" />
                    <h3 className="font-semibold text-sm text-gray-800">
                      {offer.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-xs mb-2">
                    {offer.description}
                  </p>
                  <button
                    aria-label={`Grab ${offer.title} offer`}
                    className="w-full bg-pink-500 text-white py-1.5 rounded-md font-semibold text-xs hover:bg-pink-600 transition"
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
   TESTIMONIALS SECTION
========================= */
type Testimonial = {
  name: string;
  rating: number;
  location: string;
  review: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Priya Sharma",
    rating: 5,
    location: "South Delhi",
    review:
      "I booked the O3+ facial service and the experience was amazing. The beautician arrived on time and followed proper hygiene protocols. The products used were branded and my skin felt fresh, smooth and glowing after the service. Definitely booking again.",
  },
  {
    name: "Ananya Verma",
    rating: 5,
    location: "Noida",
    review:
      "Booked waxing and threading service at home. The beautician was polite and very professional. The waxing was quick and almost painless. Everything from setup to cleanup was handled very neatly.",
  },
  {
    name: "Ritu Kapoor",
    rating: 5,
    location: "Gurgaon",
    review:
      "The mani-pedi service felt exactly like a premium salon experience. The beautician brought all equipment and maintained proper hygiene. My hands and feet feel extremely soft.",
  },
  {
    name: "Neha Singh",
    rating: 5,
    location: "Dwarka",
    review:
      "I tried the facial and cleanup combo service. The results were excellent and my skin looked visibly brighter. The entire process was very relaxing.",
  },
  {
    name: "Sneha Patel",
    rating: 5,
    location: "Ghaziabad",
    review:
      "Booked full body waxing service. The beautician used Rica wax and maintained hygiene throughout the service. The experience was comfortable and professional.",
  },
];

function TestimonialsSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section
      id="testimonials"
      aria-label="Customer reviews for Parlour at Doorstep"
      className="bg-white overflow-hidden"
    >
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
                <article
                  key={index}
                  className="flex-shrink-0 w-[80vw] sm:w-72 md:w-80 bg-pink-50 rounded-xl p-4 border border-pink-100 shadow-sm"
                  aria-label={`Review by ${testimonial.name} from ${testimonial.location}`}
                  itemScope
                  itemType="https://schema.org/Review"
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <div
                      className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white"
                      aria-hidden="true"
                    >
                      <User className="w-4 h-4" />
                    </div>
                    <div>
                      <h4
                        className="font-semibold text-gray-800 text-xs"
                        itemProp="author"
                      >
                        {testimonial.name}
                      </h4>
                      <p className="text-[10px] text-gray-500">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>

                  <div
                    className="flex mb-2"
                    aria-label={`${testimonial.rating} out of 5 stars`}
                    itemProp="reviewRating"
                    itemScope
                    itemType="https://schema.org/Rating"
                  >
                    <meta itemProp="ratingValue" content={String(testimonial.rating)} />
                    <meta itemProp="bestRating" content="5" />
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                    ))}
                  </div>

                  <p
                    className="text-gray-700 text-xs leading-relaxed"
                    itemProp="reviewBody"
                  >
                    {isExpanded ? testimonial.review : shortText}
                  </p>

                  <button
                    onClick={() => setExpandedIndex(isExpanded ? null : index)}
                    aria-expanded={isExpanded}
                    aria-label={isExpanded ? "Show less of this review" : "Read full review"}
                    className="text-pink-500 text-[11px] mt-1 font-semibold"
                  >
                    {isExpanded ? "Less" : "More"}
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
   KNOW MORE SECTION
========================= */
const benefits = [
  "Professional certified beauticians at your doorstep",
  "Premium quality products and equipment",
  "Flexible scheduling at your convenience",
  "Safe, hygienic, and contactless service",
  "Affordable pricing with no hidden charges",
  "Wide range of beauty treatments available",
];

function KnowMoreSection() {
  return (
    <section id="blogs" className="bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50">
      <div className="w-full h-6 bg-white" aria-hidden="true" />
      <div className="max-w-6xl mx-auto px-3">
        <div className="text-center mb-4">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-800">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
              Parlour at Doorstep?
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
                We bring professional beauty services right to your doorstep across Delhi,
                Noida, Gurugram, Ghaziabad, Faridabad and Greater Noida. Our certified
                beauticians use premium products and follow strict hygiene protocols to
                deliver a genuine salon-like experience at home.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                From quick facials to bridal makeup and relaxing spa sessions,
                we cover all your beauty needs with personalized care.
              </p>
            </div>

            <div>
              <img
                src="https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Certified beautician delivering professional home salon service in Delhi NCR"
                className="w-full h-40 md:h-48 object-cover rounded-xl shadow-sm"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-2 mb-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-[2px]" aria-hidden="true" />
                <span className="text-gray-700 text-xs md:text-sm">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              aria-label="Book a beauty appointment at home"
              className="inline-flex items-center space-x-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-5 py-2 rounded-full hover:shadow-md transition font-semibold text-sm"
            >
              <span>Book Appointment</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================
   FAQ SECTION
========================= */
type FAQItem = { question: string; answer: string };

const faqs: FAQItem[] = [
  {
    question: "Is salon at home safe and hygienic?",
    answer:
      "Yes, absolutely. All our beauticians follow strict hygiene protocols — they arrive with sanitized tools, use fresh disposable items for each client, and wear clean uniforms. We ensure a safe, contactless service experience right at your doorstep in Delhi, Noida, Gurugram, Ghaziabad, and Faridabad.",
  },
  {
    question: "Which products are used for home salon services?",
    answer:
      "We exclusively use premium, dermatologist-tested brands such as L'Oréal, O3+, Rica, Lotus, and VLCC. All products are 100% authentic and sourced directly from authorized distributors. No local or substandard products are used.",
  },
  {
    question: "Are the beauticians certified and trained?",
    answer:
      "Yes. Every beautician on our platform is professionally trained and certified. They undergo thorough background verification, practical skill assessments, and hygiene training before they are allowed to serve customers.",
  },
  {
    question: "Which areas in Delhi NCR are covered?",
    answer:
      "We currently provide home salon services across Delhi (South Delhi, Dwarka, Rohini, Lajpat Nagar and more), Noida, Greater Noida, Gurugram, Ghaziabad, and Faridabad. Coverage is expanding regularly — call us to check availability in your area.",
  },
  {
    question: "How can I book a home beauty service?",
    answer:
      "Booking is simple. You can call or WhatsApp us at +91 9811923486 to place your appointment. Choose your preferred service, date, and time slot, and a certified beautician will arrive at your home on schedule.",
  },
  {
    question: "What is the cancellation or rescheduling policy?",
    answer:
      "You can reschedule or cancel your appointment up to 2 hours before the scheduled time without any charges. For last-minute cancellations, a small convenience fee may apply. Contact us directly for assistance.",
  },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      aria-label="Frequently asked questions about home salon services"
      className="py-8 md:py-14 bg-white"
    >
      <div className="max-w-3xl mx-auto px-3">
        <div className="text-center mb-6 md:mb-10">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-800">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-sm md:text-base text-gray-600 mt-1">
            Everything you need to know about our home beauty services
          </p>
        </div>

        <dl className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-pink-100 rounded-xl overflow-hidden shadow-sm"
              >
                <dt>
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    className="w-full flex items-center justify-between gap-3 p-4 text-left bg-pink-50 hover:bg-pink-100 transition"
                  >
                    <span className="font-semibold text-gray-800 text-sm md:text-base">
                      {faq.question}
                    </span>
                    {isOpen
                      ? <ChevronUp className="w-4 h-4 text-pink-500 flex-shrink-0" aria-hidden="true" />
                      : <ChevronDown className="w-4 h-4 text-pink-500 flex-shrink-0" aria-hidden="true" />
                    }
                  </button>
                </dt>
                {isOpen && (
                  <dd
                    id={`faq-answer-${index}`}
                    className="px-4 py-3 text-gray-600 text-sm leading-relaxed bg-white"
                  >
                    {faq.answer}
                  </dd>
                )}
              </div>
            );
          })}
        </dl>

        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Still have questions?{" "}
            <a
              href="tel:+919811923486"
              aria-label="Call us for more information about home salon services"
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
   FLOATING BUTTONS
========================= */
function FloatingButtons() {
  return (
    <div
      className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4 items-center"
      aria-label="Quick contact options"
    >
      {/* WhatsApp */}
      <div className="relative flex items-center justify-center">
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60 pulse-ring" aria-hidden="true" />
        <a
          href="https://wa.me/919811923486"
          target="_blank"
          rel="noopener noreferrer"
          className="float-btn relative w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-xl shadow-green-300/50"
          aria-label="Chat with Parlour at Doorstep on WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-8 h-8" fill="none" aria-hidden="true">
            <circle cx="24" cy="24" r="24" fill="#25D366" />
            <path
              d="M34.5 13.4A14.7 14.7 0 0 0 24 9C16.3 9 10 15.3 10 23c0 2.5.7 4.9 1.9 7L10 39l9.3-2.4a14.8 14.8 0 0 0 14.7-3.7A14.8 14.8 0 0 0 38 23c0-3.9-1.5-7.6-3.5-9.6zm-10.5 20a12.3 12.3 0 0 1-6.3-1.7l-.5-.3-5 1.3 1.3-4.9-.3-.5A12.3 12.3 0 0 1 24 11.5c6.8 0 12.3 5.5 12.3 12.3S30.8 36.1 24 36.1zm6.7-9.2c-.4-.2-2.2-1.1-2.5-1.2-.3-.1-.6-.2-.8.2-.3.4-1 1.2-1.2 1.5-.2.3-.4.3-.8.1-.4-.2-1.6-.6-3-1.9-1.1-1-1.8-2.2-2.1-2.6-.2-.4 0-.6.2-.7.2-.2.4-.4.6-.7.2-.2.3-.4.4-.7.1-.3 0-.6-.1-.8-.1-.2-.8-2-1.1-2.7-.3-.7-.6-.6-.8-.6h-.7c-.3 0-.7.1-1 .4-.4.4-1.4 1.3-1.4 3.2s1.4 3.7 1.6 4c.2.2 2.8 4.3 6.8 6 .9.4 1.7.6 2.2.8.9.3 1.8.3 2.4.2.7-.1 2.2-.9 2.5-1.8.3-.9.3-1.6.2-1.8-.1-.2-.4-.3-.8-.5z"
              fill="white"
            />
          </svg>
        </a>
      </div>

      {/* Call */}
      <div className="relative flex items-center justify-center">
        <span className="absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-60 pulse-ring-2" aria-hidden="true" />
        <a
          href="tel:+919811923486"
          className="float-btn relative w-14 h-14 rounded-full bg-pink-600 flex items-center justify-center shadow-xl shadow-pink-300/50"
          aria-label="Call Parlour at Doorstep at +91 9811923486"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-7 h-7" fill="none" aria-hidden="true">
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
   HOME — DEFAULT EXPORT
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
    url: "https://www.parlouratdoorstep.in",
    description:
      "Professional home salon services across Delhi NCR — Facial, Waxing, Makeup, Hair Care, Mani-Pedi and more by certified beauticians.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.parlouratdoorstep.in/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: "Parlour at Doorstep",
    description:
      "Professional salon services at home in Delhi NCR — Facial, Waxing, Makeup, Hair Care, Mani-Pedi and more by certified beauticians.",
    url: "https://www.parlouratdoorstep.in",
    telephone: "+919811923486",
    image: "https://www.parlouratdoorstep.in/og-image.jpg",
    priceRange: "₹₹",
    openingHours: "Mo-Su 08:00-21:00",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "2500",
      bestRating: "5",
    },
    areaServed: [
      { "@type": "City", name: "Delhi" },
      { "@type": "City", name: "Noida" },
      { "@type": "City", name: "Greater Noida" },
      { "@type": "City", name: "Gurugram" },
      { "@type": "City", name: "Ghaziabad" },
      { "@type": "City", name: "Faridabad" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Home Beauty Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Facial at Home" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Waxing at Home" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Makeup at Home" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mani-Pedi at Home" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hair Care at Home" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Body Massage at Home" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pre-Bridal Package at Home" } },
      ],
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+919811923486",
      contactType: "customer service",
      availableLanguage: ["Hindi", "English"],
    },
  };

  return (
    <>
      <GlobalStyles />

      <Helmet>
        <title>Salon at Home | Professional Beauty Services in Delhi NCR — Parlour at Doorstep</title>
        <meta
          name="description"
          content="Book professional salon services at home in Delhi, Noida, Gurugram, Ghaziabad & Faridabad. Facial, Waxing, Makeup, Hair Care, Mani-Pedi & more by certified beauticians. 4.9★ rated. Call +91 9811923486."
        />
        <meta
          name="keywords"
          content="salon at home, parlour at doorstep, beauty services at home Delhi, home salon Noida, beautician at home Gurugram, facial at home, waxing at home, makeup at home, hair spa at home, mani pedi at home, pre bridal at home Delhi NCR"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Parlour at Doorstep" />
        <link rel="canonical" href="https://www.parlouratdoorstep.in/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.parlouratdoorstep.in/" />
        <meta property="og:site_name" content="Parlour at Doorstep" />
        <meta property="og:title" content="Salon at Home | Professional Beauty Services in Delhi NCR" />
        <meta
          property="og:description"
          content="Certified beauticians at your doorstep. Facial, Waxing, Makeup, Hair Care, Mani-Pedi & more. Serving Delhi, Noida, Gurugram, Ghaziabad & Faridabad. 4.9★ rated."
        />
        <meta property="og:image" content="https://www.parlouratdoorstep.in/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Salon at Home | Professional Beauty Services in Delhi NCR" />
        <meta
          name="twitter:description"
          content="Book professional beauty services at home. 4.9★ rated. Serving Delhi, Noida, Gurugram, Ghaziabad & Faridabad."
        />
        <meta name="twitter:image" content="https://www.parlouratdoorstep.in/og-image.jpg" />

        {/* Structured Data */}
        <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(businessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <HeroSection />
      <ServicesSection />
      <OffersSection />
      <TestimonialsSection />
      <KnowMoreSection />
      <FAQSection />
      <FloatingButtons />
    </>
  );
}
