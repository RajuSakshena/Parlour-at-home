import { Star, User } from "lucide-react";
import { useState } from "react";

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

export default function TestimonialsSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

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