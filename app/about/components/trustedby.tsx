"use client";
import { motion } from "framer-motion";

const brands = [
  { name: "Google", imgSrc: "https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg" },
  { name: "Microsoft", imgSrc: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
  { name: "Apple", imgSrc: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
  { name: "Netflix", imgSrc: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
  { name: "PayPal", imgSrc: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" },
  { name: "P&G", imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Procter_%26_Gamble_logo.svg/1280px-Procter_%26_Gamble_logo.svg.png" },
];

export default function GlobalBrands() {
  const tripled = [...brands, ...brands, ...brands];

  return (
    <section className="relative w-full bg-[#020617] py-12 overflow-hidden">
      {/* ── BACKGROUND BRIGHTNESS (Ambient Glow) ── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-500/10 blur-[120px] pointer-events-none" />

      {/* ── HEADER ── */}
      <div className="relative z-10 px-6 mb-20 text-center">
        <h2
          className="
            font-bold
            text-4xl sm:text-4xl md:text-6xl
            tracking-tight
          "
          style={{ fontFamily: "https://fonts.google.com/specimen/Google+Sans?query=google" }} 
        >
          <span className="text-white">Trust</span>
          <span className="text-[#3b82f6]">ed</span>
        </h2>
        <p className="mt-6 text-gray-400 font-bold tracking-[0.3em] text-[12px] sm:text-[14px] uppercase">
          by the world's most innovative businesses
        </p>
      </div>

      {/* ── MARQUEE ── */}
      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex items-center"
          style={{ gap: "60px" }}
          animate={{ x: ["0%", "-33.333%"] }}
          transition={{ duration: 35, ease: "linear", repeat: Infinity }}
        >
          {tripled.map((brand, idx) => (
            <div
              key={idx}
              className="
                flex-shrink-0 
                flex items-center justify-center
                bg-white/[0.07] /* Increased brightness for default highlight */
                border border-white/20 /* Sharper borders */
                rounded-2xl
                px-10 py-6
                shadow-[0_0_25px_rgba(59,130,246,0.1)] /* Subtle blue glow by default */
                transition-all duration-300
              "
              style={{ minWidth: "200px", height: "90px" }}
            >
              <img
                src={brand.imgSrc}
                alt={brand.name}
                className={`
                  h-full w-auto object-contain
                  ${(brand.name === 'Meta' || brand.name === 'Apple' || brand.name === 'Amazon') ? 'brightness-0 invert' : 'brightness-125'}
                  contrast-150
                `}
                style={{ maxHeight: "45px" }}
              />
            </div>
          ))}
        </motion.div>

        {/* Edge fade gradients */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-[#020617] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-[#020617] to-transparent z-10" />
      </div>
    </section>
  );
}