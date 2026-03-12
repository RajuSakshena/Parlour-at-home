import { Star, Phone } from "lucide-react";
import { useEffect, useRef } from "react";

export default function HeroSection() {

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
    "https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg",
    "https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg",
    "https://images.pexels.com/photos/3764540/pexels-photo-3764540.jpeg",
    "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg",
    "https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg",
    "https://images.pexels.com/photos/3865675/pexels-photo-3865675.jpeg",
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

        {/* MOBILE: column reverse */}
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

        <div className="pl-3 pr-4 font-semibold text-sm text-pink-700 whitespace-nowrap">
          Service Available <span className="text-rose-600">(10% OFF)</span>
        </div>

        <div className="overflow-hidden flex-1">

          <div className="flex animate-marquee whitespace-nowrap text-xs font-semibold">

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