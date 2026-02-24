"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const steps = [
  {
    num: "01",
    title: "Submit Inquiry",
    desc: "Fill the contact form with your specific needs. Our AI routes it to the right department instantly.",
    image: "/contact/engage1.png",
    reverse: false,
  },
  {
    num: "02",
    title: "Expert Review",
    desc: "A HireX consultant reviews your submission within 4 hours and prepares a tailored brief.",
    image: "/contact/engage2.png",
    reverse: true,
  },
  {
    num: "03",
    title: "Strategy Call",
    desc: "A discovery session to align on hiring goals, team structure, and your AI roadmap.",
    image: "/contact/engage3.png",
    reverse: false,
  },
  {
    num: "04",
    title: "Go Live",
    desc: "Your custom HireX pipeline is deployed and handed over with full ongoing support.",
    image: "/contact/engage4.png",
    reverse: true,
  },
];

// Zigzag SVG connector between steps
function ZigzagConnector({ reverse }: { reverse: boolean }) {
  return (
    <div className="hidden lg:flex justify-center items-center h-20 w-full relative -my-2 z-10">
      <svg
        viewBox="0 0 400 80"
        className="w-full max-w-2xl h-20"
        fill="none"
        preserveAspectRatio="none"
      >
        <defs>
          <marker id={`arrow-${reverse}`} markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill="rgba(59,130,246,0.7)" />
          </marker>
          <linearGradient id={`zg-${reverse}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(59,130,246,0)" />
            <stop offset="30%" stopColor="rgba(59,130,246,0.6)" />
            <stop offset="70%" stopColor="rgba(59,130,246,0.6)" />
            <stop offset="100%" stopColor="rgba(59,130,246,0)" />
          </linearGradient>
        </defs>
        {reverse ? (
          /* Right to Left zag */
          <path
            d="M 360,10 C 300,10 280,40 200,40 C 120,40 100,70 40,70"
            stroke={`url(#zg-${reverse})`}
            strokeWidth="1.5"
            strokeDasharray="6 4"
            markerEnd={`url(#arrow-${reverse})`}
          />
        ) : (
          /* Left to Right zig */
          <path
            d="M 40,10 C 100,10 120,40 200,40 C 280,40 300,70 360,70"
            stroke={`url(#zg-${reverse})`}
            strokeWidth="1.5"
            strokeDasharray="6 4"
            markerEnd={`url(#arrow-${reverse})`}
          />
        )}
      </svg>
    </div>
  );
}

export default function EngagementProcess() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative px-6 sm:px-10 lg:px-16 py-20 sm:py-22 bg-[#020617] overflow-hidden">

      {/* Top/bottom lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      {/* Subtle vertical grid lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-blue-500/[0.04] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-blue-500/[0.04] pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto relative z-10">

        {/* ── HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-[clamp(28px,8vw,96px)] font-black text-white  tracking-tight leading-none">
            Engagement <br className="xs:hidden" /><span className="text-blue-500">Process</span>
          </h2>
        </motion.div>

        {/* ── STEPS ── */}
        <div className="flex flex-col">
          {steps.map((step, i) => (
            <div key={step.num}>

              {/* STEP CARD */}
              <motion.div
                initial={{ opacity: 0, x: step.reverse ? 40 : -40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`
                  flex flex-col
                  lg:flex-row
                  ${step.reverse ? "lg:flex-row-reverse" : ""}
                  items-center gap-8 lg:gap-14
                `}
              >
                {/* IMAGE SIDE */}
                <div className="w-full lg:w-1/2">
                  <div className="group relative rounded-2xl overflow-hidden border border-white/[0.07] hover:border-blue-500/40 transition-colors duration-500 aspect-[16/10]">
                    {/* Corner brackets */}
                    <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-blue-500/60 rounded-tl-2xl z-20" />
                    <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-blue-500/60 rounded-tr-2xl z-20" />
                    <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-blue-500/60 rounded-bl-2xl z-20" />
                    <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-blue-500/60 rounded-br-2xl z-20" />

                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      sizes="(max-width:1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-${step.reverse ? "l" : "r"} from-[#020617]/50 via-transparent to-transparent`} />

                    {/* Step number badge on image */}
                    <div className="absolute bottom-4 left-4 z-20">
    
                    </div>
                  </div>
                </div>

                {/* TEXT  */}
                <div className={`w-full lg:w-1/2 ${step.reverse ? "lg:text-right" : "lg:text-left"} text-center lg:text-left`}>
                  {/* Step label */}
                  <div className={`flex items-center gap-3 mb-5 ${step.reverse ? "lg:justify-end" : "lg:justify-start"} justify-center`}>
                    <div className="w-10 h-10 rounded-full bg-[#0f1f3d] border-2 border-blue-600 flex items-center justify-center shadow-[0_0_16px_rgba(37,99,235,0.4)] flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                    </div>
                    <span className="text-blue-500 font-black text-xs tracking-widest ">
                      Step {step.num}
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl lg:text-[clamp(28px,3.5vw,44px)] font-black text-white  tracking-tight leading-tight mb-5">
                    {step.title}
                  </h3>

                  {/* Divider */}
                  <div className={`h-px w-14 bg-blue-500/40 mb-5 ${step.reverse ? "lg:ml-auto" : ""} mx-auto lg:mx-0`} />

                  <p className="text-white/500 font-light leading-relaxed text-base sm:text-lg mx-auto lg:mx-0">
                    {step.desc}
                  </p>
                </div>
              </motion.div>

              {/* ZIGZAG CONNECTOR — between steps, not after last */}
              {i < steps.length - 1 && (
                <ZigzagConnector reverse={step.reverse} />
              )}

              {/* Mobile vertical connector */}
              {i < steps.length - 1 && (
                <div className="lg:hidden flex flex-col items-center my-6">
                  <div className="w-px h-8 bg-gradient-to-b from-blue-500/50 to-blue-500/10" />
                  <svg viewBox="0 0 12 8" className="w-3 h-2 fill-blue-500/60">
                    <path d="M6 8L0 0h12z" />
                  </svg>
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}