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
  },
  {
    name: "Kavita Mehra",
    rating: 5,
    location: "Lajpat Nagar",
    review:
      "I booked bridal makeup for my engagement. The makeup artist understood my requirements perfectly and created a beautiful natural look."
  },
  {
    name: "Pooja Gupta",
    rating: 5,
    location: "Faridabad",
    review:
      "Hair spa service was very relaxing and effective. My hair feels softer and healthier after the treatment."
  },
  {
    name: "Simran Kaur",
    rating: 5,
    location: "Rohini",
    review:
      "Booked the pre-bridal grooming package and it included facial, waxing and mani-pedi. All services were done professionally."
  },
  {
    name: "Megha Agarwal",
    rating: 5,
    location: "Karol Bagh",
    review:
      "Threading and facial both were done very neatly. The beautician was friendly and professional."
  },
  {
    name: "Aisha Khan",
    rating: 5,
    location: "Saket",
    review:
      "Body massage service was extremely relaxing. Perfect after a long working week."
  }
];

export default function TestimonialsSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="testimonials" className="py-12 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">

        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            What Customers Say
          </h2>
        </div>

        <div className="overflow-hidden">

          <div className="flex space-x-4 animate-scroll hover:[animation-play-state:paused]">

            {[...testimonials, ...testimonials].map((testimonial, index) => {

              const isExpanded = expandedIndex === index;
              const shortText =
                testimonial.review.length > 110
                  ? testimonial.review.substring(0, 110) + "..."
                  : testimonial.review;

              return (
                <div
                  key={index}
                  className="flex-shrink-0 w-[85vw] md:w-96 bg-pink-50 rounded-2xl p-6 border border-pink-100 shadow-sm"
                >

                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center text-white">
                      <User className="w-5 h-5" />
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-800 text-sm">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs text-gray-500">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>

                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <p className="text-gray-700 text-sm leading-relaxed">
                    {isExpanded ? testimonial.review : shortText}
                  </p>

                  <button
                    onClick={() => setExpandedIndex(isExpanded ? null : index)}
                    className="text-pink-500 text-xs mt-2 font-semibold"
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
          animation: scroll 35s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(-25%);
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