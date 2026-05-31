import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

/* =========================
   FLOATING BUTTONS STYLES
========================= */
const floatingStyles = `
  @keyframes shake {
    0%   { transform: rotate(0deg) scale(1); }
    10%  { transform: rotate(-12deg) scale(1.05); }
    20%  { transform: rotate(12deg) scale(1.05); }
    30%  { transform: rotate(-10deg) scale(1.05); }
    40%  { transform: rotate(10deg) scale(1.05); }
    50%  { transform: rotate(-6deg) scale(1.05); }
    60%  { transform: rotate(6deg) scale(1.05); }
    70%  { transform: rotate(-3deg) scale(1); }
    80%  { transform: rotate(3deg) scale(1); }
    100% { transform: rotate(0deg) scale(1); }
  }
  @keyframes pulse-ring {
    0%   { transform: scale(1); opacity: 0.6; }
    70%  { transform: scale(1.5); opacity: 0; }
    100% { transform: scale(1.5); opacity: 0; }
  }
  .float-btn {
    animation: shake 2.5s ease-in-out infinite;
  }
  .float-btn:nth-child(2) {
    animation-delay: 1.25s;
  }
  .pulse-ring {
    animation: pulse-ring 2s ease-out infinite;
  }
  .pulse-ring-2 {
    animation: pulse-ring 2s ease-out infinite;
    animation-delay: 1.25s;
  }
`;

/* =========================
   COMPONENT
========================= */
export default function PackageServices() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    return () => {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "auto";
      }
    };
  }, []);

  return (
    <section className="bg-[#f6edff] min-h-screen">
      {/* INJECT FLOATING BUTTON STYLES */}
      <style>{floatingStyles}</style>

      {/* HEADER WITH BACK BUTTON */}
      <div className="py-4 md:py-6 lg:py-8 text-center bg-white border-b relative">
        <button
          onClick={() => navigate(-1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors shadow-sm"
        >
          <ArrowLeft className="w-5 h-5 text-gray-700" />
        </button>

        <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
          Packages
        </h1>
        <p className="text-xs md:text-sm text-gray-500 mt-1 uppercase tracking-widest">
          Premium Salon Services
        </p>
      </div>

      {/* COMING SOON CONTENT */}
      <div className="max-w-4xl mx-auto px-3 md:px-6 lg:px-10 py-20 md:py-32 flex items-center justify-center">
        <div className="text-center">
          <p className="text-4xl md:text-5xl mb-4">💅</p>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-gray-800 uppercase tracking-tight">
            Packages – Coming Soon
          </h2>
          <p className="text-sm md:text-base text-gray-400 mt-3">
            We're working on something special. Check back soon!
          </p>
        </div>
      </div>

      {/* =====================
          FLOATING BUTTONS
          (WhatsApp + Call)
      ===================== */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4 items-center">
        {/* WhatsApp Button */}
        <div className="relative flex items-center justify-center">
          <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60 pulse-ring" />
          <a
            href="https://wa.me/919811923486"
            target="_blank"
            rel="noopener noreferrer"
            className="float-btn relative w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-xl shadow-green-300/50"
            aria-label="Chat on WhatsApp"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              className="w-8 h-8"
              fill="none"
            >
              <circle cx="24" cy="24" r="24" fill="#25D366" />
              <path
                d="M34.5 13.4A14.7 14.7 0 0 0 24 9C16.3 9 10 15.3 10 23c0 2.5.7 4.9 1.9 7L10 39l9.3-2.4a14.8 14.8 0 0 0 14.7-3.7A14.8 14.8 0 0 0 38 23c0-3.9-1.5-7.6-3.5-9.6zm-10.5 20a12.3 12.3 0 0 1-6.3-1.7l-.5-.3-5 1.3 1.3-4.9-.3-.5A12.3 12.3 0 0 1 24 11.5c6.8 0 12.3 5.5 12.3 12.3S30.8 36.1 24 36.1zm6.7-9.2c-.4-.2-2.2-1.1-2.5-1.2-.3-.1-.6-.2-.8.2-.3.4-1 1.2-1.2 1.5-.2.3-.4.3-.8.1-.4-.2-1.6-.6-3-1.9-1.1-1-1.8-2.2-2.1-2.6-.2-.4 0-.6.2-.7.2-.2.4-.4.6-.7.2-.2.3-.4.4-.7.1-.3 0-.6-.1-.8-.1-.2-.8-2-1.1-2.7-.3-.7-.6-.6-.8-.6h-.7c-.3 0-.7.1-1 .4-.4.4-1.4 1.3-1.4 3.2s1.4 3.7 1.6 4c.2.2 2.8 4.3 6.8 6 .9.4 1.7.6 2.2.8.9.3 1.8.3 2.4.2.7-.1 2.2-.9 2.5-1.8.3-.9.3-1.6.2-1.8-.1-.2-.4-.3-.8-.5z"
                fill="white"
              />
            </svg>
          </a>
        </div>

        {/* Call Button */}
        <div className="relative flex items-center justify-center">
          <span className="absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-60 pulse-ring-2" />
          <a
            href="tel:+919811923486"
            className="float-btn relative w-14 h-14 rounded-full bg-purple-600 flex items-center justify-center shadow-xl shadow-purple-300/50"
            aria-label="Call us"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              className="w-7 h-7"
              fill="none"
            >
              <circle cx="24" cy="24" r="24" fill="#7C3AED" />
              <path
                d="M34.3 29.6l-3.5-1.5a1.5 1.5 0 0 0-1.7.4l-1.6 1.9a22.2 22.2 0 0 1-9.9-9.9l1.9-1.6a1.5 1.5 0 0 0 .4-1.7L18.4 13.7a1.5 1.5 0 0 0-1.7-.9l-3.3.8A1.5 1.5 0 0 0 12 15c0 12.2 9.8 22 22 22a1.5 1.5 0 0 0 1.4-1.1l.8-3.4a1.5 1.5 0 0 0-.9-1.9z"
                fill="white"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
