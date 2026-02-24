"use client";

import { motion, useInView, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { base: 500, suffix: "+", label: "Enterprises Served", sub: "Across 12 industries", fluctuate: 3 },
  { base: 94, suffix: "%", label: "Placement Rate", sub: "Within 30 days", fluctuate: 0.4, decimals: 1 },
  { base: 3.2, suffix: "x", label: "Faster Hiring", sub: "Vs traditional methods", fluctuate: 0.05, decimals: 1 },
  { base: 10, suffix: "M+", label: "Profiles Analysed", sub: "By our AI engine", fluctuate: 0.2, decimals: 1 },
];

function LiveCounter({
  base, suffix, fluctuate, decimals = 0, inView,
}: { base: number; suffix: string; fluctuate: number; decimals?: number; inView: boolean }) {
  const [display, setDisplay] = useState("0");
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    if (!inView || hasStarted.current) return;
    hasStarted.current = true;

    // Initial count-up animation
    const node = { val: 0 };
    const controls = animate(node.val, base, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate(v) {
        setDisplay(v.toFixed(decimals));
      },
      onComplete() {
        setDisplay(base.toFixed(decimals));
        // Start live fluctuation after count-up
        intervalRef.current = setInterval(() => {
          const delta = (Math.random() - 0.3) * fluctuate;
          const next = Math.max(base - fluctuate, base + delta);
          setDisplay(next.toFixed(decimals));
        }, 2200);
      },
    });

    return () => {
      controls.stop();
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [inView, base, fluctuate, decimals]);

  return (
    <span className="tabular-nums">
      {display}{suffix}
    </span>
  );
}

export default function TrustStats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative px-6 sm:px-10 lg:px-16 py-20 sm:py-20 overflow-hidden bg-[#020617]"
    >
      {/* Top/bottom lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto">

        {/* ── HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >

          <h2 className="
            text-white font-black  tracking-[0.01em]
            text-5xl sm:text-6xl lg:text-7xl xl:text-6xl
            leading-none mb-2
          ">
            Numbers
          </h2>
          <p className="text-white/50 font-light text-lg sm:text-xl lg:text-2xl tracking-tight">
            that define{" "}
            <span className="italic text-blue-400 font-medium">our impact</span>
          </p>
        </motion.div>

        {/* ── STAT CARDS ── */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex flex-col items-center text-center p-8 sm:p-10
                         bg-white/[0.02] border border-white/[0.05] rounded-3xl
                         backdrop-blur-md hover:border-blue-500/40 transition-all duration-500
                         overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-600/[0.06] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

              {/* Live pulse dot */}
              <div className="absolute top-4 right-4 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[9px] text-green-400/70 font-mono uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">live</span>
              </div>

              {/* Live counter value */}
              <motion.span
                className="relative z-10 text-5xl sm:text-6xl font-black text-blue-500 tracking-tighter leading-none mb-4"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{ delay: 0.3 + i * 0.1, type: "spring", stiffness: 100, damping: 15 }}
              >
                <LiveCounter
                  base={s.base}
                  suffix={s.suffix}
                  fluctuate={s.fluctuate}
                  decimals={s.decimals}
                  inView={inView}
                />
              </motion.span>

              <h3 className="relative z-10 text-sm sm:text-base font-bold text-white tracking-widest mb-1.5 uppercase">
                {s.label}
              </h3>
              <p className="relative z-10 text-[11px] font-medium text-slate-500 uppercase tracking-widest">
                {s.sub}
              </p>

              {/* Animated bottom border */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-blue-500 group-hover:w-[60%] transition-all duration-700 ease-in-out shadow-[0_0_15px_rgba(59,130,246,0.8)]" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}