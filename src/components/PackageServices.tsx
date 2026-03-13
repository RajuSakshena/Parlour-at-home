import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function PackageServices() {
  const navigate = useNavigate();

  return (
    <section className="bg-[#f6edff] min-h-screen">
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
          Packages
        </h1>
        <p className="text-gray-500 text-xs md:text-sm mt-1 uppercase tracking-widest">
          Premium Salon Services
        </p>
      </div>

      {/* COMING SOON CONTENT (unchanged layout) */}
      <div className="max-w-4xl mx-auto px-3 md:px-6 lg:px-10 py-6 md:py-10 flex items-center justify-center">
        <div className="text-xl md:text-2xl lg:text-3xl font-semibold">
          Packages – Coming Soon
        </div>
      </div>
    </section>
  );
}