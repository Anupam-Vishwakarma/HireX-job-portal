"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const WORDS = ["Smarter", "Faster", "At Scale", "With Ai"];

/* ── Star field canvas: Fixed to remove trails ── */
function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const STAR_COUNT = 180;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    type Star = { x: number; y: number; z: number };
    const stars: Star[] = Array.from({ length: STAR_COUNT }, () => ({
      x: (Math.random() - 0.5) * 2,
      y: (Math.random() - 0.5) * 2,
      z: Math.random(),
    }));

    const SPEED = 0.0006;

    const draw = () => {
      const W = canvas.width;
      const H = canvas.height;
      const cx = W / 2;
      const cy = H / 2;

      // Clear rect every frame for clean stars (no trails)
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = "#020617"; 
      ctx.fillRect(0, 0, W, H);

      for (const s of stars) {
        s.z -= SPEED;
        if (s.z <= 0) {
          s.x = (Math.random() - 0.5) * 2;
          s.y = (Math.random() - 0.5) * 2;
          s.z = 1;
        }

        const sx = (s.x / s.z) * cx + cx;
        const sy = (s.y / s.z) * cy + cy;
        const size = Math.max(0.4, (1 - s.z) * 2.8);
        const alpha = Math.min(1, (1 - s.z) * 1.4);

        // Draw only the star dot
        ctx.beginPath();
        ctx.arc(sx, sy, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(210, 228, 255, ${alpha})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.85 }}
    />
  );
}

export default function ContactHero() {
  const [wordIdx, setWordIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setWordIdx((p) => (p + 1) % WORDS.length), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <section 
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 
                 /* Fixed: Increased padding-top to clear fixed navbars across devices */
                 pt-[120px] sm:pt-[160px] pb-20 
                 overflow-hidden bg-[#020617]"
                 >
      <StarField />

      {/* Glow - Responsive sizing */}
      <motion.div
        className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-[900px] h-[50vh] max-h-[560px] rounded-full bg-blue-700/10 blur-[100px] sm:blur-[140px] pointer-events-none"
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-7xl w-full flex flex-col items-center text-center gap-4 sm:gap-8">
        
        {/* Protocol tag */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-600/10 border border-blue-600/20 rounded-full backdrop-blur-sm"
        >
          <motion.div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-blue-500" animate={{ opacity: [1, 0.3, 1] }} transition={{ repeat: Infinity, duration: 2 }} />
          <span className="text-[8px] sm:text-[10px] font-bold tracking-[0.3em] text-blue-400 uppercase">
            Get In Touch · Protocol 04
          </span>
        </motion.div>

        {/* Headline - Improved Responsive Sizing */}
        <div className="flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[10vw] sm:text-6xl md:text-8xl lg:text-8xl font-black text-white tracking-tighter leading-[0.9] "
          >
            Connect With
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="text-[10vw] sm:text-6xl md:text-8xl lg:text-8xl font-black text-blue-500 tracking-tighter leading-[0.9]  mt-1 sm:mt-2"
          >
            The Hirex Team
          </motion.h1>
        </div>

        {/* Word Ticker */}
        <div className="flex items-center gap-2 sm:gap-4 mt-2">
          <span className="text-slate-500 text-xs sm:text-lg font-medium">Hire</span>
          <div className="relative h-8 sm:h-12 flex items-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={wordIdx}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                className="text-xs sm:text-lg font-bold text-blue-300 px-2 sm:px-4 py-1 sm:py-2 bg-blue-600/15 rounded-lg border border-blue-600/20 backdrop-blur-md"
              >
                {WORDS[wordIdx]}
              </motion.span>
            </AnimatePresence>
          </div>
          <span className="text-slate-500 text-xs sm:text-lg font-medium">With Us</span>
        </div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-slate-400 text-xs sm:text-base md:text-lg font-medium max-w-2xl px-4 leading-relaxed"
        >
          Partner with Career Lab Consulting to transform your hiring infrastructure through
          autonomous Ai intelligence. We respond within 4 hours.
        </motion.p>

        {/* CTAs - Stack on mobile, Row on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full justify-center px-6"
          >
            <a 
              href="#contact-form" 
              className="w-full sm:w-auto min-w-[220px] group inline-flex justify-center items-center gap-2 px-8 py-4 bg-blue-600 text-white text-sm font-bold rounded-xl hover:bg-blue-500 transition-all shadow-[0_4px_20px_rgba(37,99,235,0.3)] hover:shadow-[0_8px_30px_rgba(37,99,235,0.5)]"
            >
              Initialize Contact
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
            
            <a 
              href="tel:+918700236923" 
              className="w-full sm:w-auto min-w-[220px] inline-flex justify-center items-center gap-2 px-8 py-4 bg-white/[0.04] text-white/80 text-sm font-bold rounded-xl border border-white/[0.08] hover:bg-white/[0.1] hover:text-white transition-all backdrop-blur-sm"
            >
              <span className="text-blue-400">📞</span>
              Call Us Directly
            </a>
          </motion.div>
      </div>
    </section>
  );
}