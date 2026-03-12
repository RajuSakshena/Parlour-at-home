import { Star, Phone } from "lucide-react";
import { useEffect, useRef } from "react";

export default function HeroSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;

    const scroll = () => {
      scrollAmount += 1;

      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }

      scrollContainer.scrollLeft = scrollAmount;
    };

    const intervalId = setInterval(scroll, 30);
    return () => clearInterval(intervalId);
  }, []);

  const beautyImages = [
    "https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3764540/pexels-photo-3764540.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3865675/pexels-photo-3865675.jpeg?auto=compress&cs=tinysrgb&w=600",
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
      className="pt-8 bg-gradient-to-br from-pink-50 via-rose-50 to-peach-50 overflow-hidden"
    >
      <div className="container mx-auto px-4 pb-6">

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT SIDE */}
          <div className="space-y-6 text-center md:text-left">

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              Salon at Home for{" "}
              <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                Women
              </span>
            </h1>

            <div className="flex flex-col items-center md:items-start space-y-2">

              <div className="flex">
                {[1,2,3,4,5].map((star)=>(
                  <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400"/>
                ))}
              </div>

              <span className="text-gray-600 font-medium text-sm md:text-base">
                4.9/5 stars (2,500+ reviews)
              </span>

            </div>

            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-lg mx-auto md:mx-0">
              Experience professional beauty treatments in the comfort of your home.
              Our certified beauticians bring premium salon services right to your doorstep.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">

              <a
                href="tel:+919811923486"
                className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all font-semibold"
              >
                <Phone className="w-5 h-5"/>
                <span>Call Now</span>
              </a>

              <button
                onClick={()=>document.getElementById("services")?.scrollIntoView({behavior:"smooth"})}
                className="inline-flex items-center justify-center space-x-2 border-2 border-pink-500 text-pink-500 px-8 py-4 rounded-full hover:bg-pink-50 transition-all font-semibold"
              >
                <span>Explore Services</span>
              </button>

            </div>

          </div>

          {/* RIGHT SIDE IMAGE SCROLL */}
          <div className="relative mt-8 md:mt-0">

            <div
              ref={scrollRef}
              className="flex overflow-x-hidden space-x-4 pb-4"
              style={{scrollBehavior:"auto"}}
            >

              {[...beautyImages,...beautyImages].map((img,index)=>(
                <div
                  key={index}
                  className="flex-shrink-0 w-48 md:w-64 h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg border-4 border-white"
                >
                  <img src={img} alt="Beauty service" className="w-full h-full object-cover"/>
                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

      {/* SERVICE STRIP */}
      <div className="bg-pink-100 py-3 flex items-center overflow-hidden">

        <div className="flex-shrink-0 pl-4 pr-8 font-semibold whitespace-nowrap text-lg text-pink-700">
          Service Available{" "}
          <span className="text-rose-600 font-bold">(10% OFF)</span>
        </div>

        <div className="overflow-hidden flex-1">
          <div className="flex animate-marquee whitespace-nowrap font-semibold text-base md:text-lg">

            {[...cities,...cities,...cities].map((city,index)=>(
              <span key={index} className={`mx-8 ${city.color}`}>
                {city.name}
              </span>
            ))}

          </div>
        </div>

      </div>

      <style>
        {`
        .animate-marquee {
          animation: marquee 12s linear infinite;
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