"use client";
import { motion } from "framer-motion";

const values = [
  {
    badge: "PEOPLE FIRST",
    title: "Human at the Core",
    desc: "Every model we deploy, every workflow we automate — it's built to amplify human potential, not replace it. We design AI that works for people.",
  },
  {
    badge: "NO NOISE",
    title: "Radical Clarity",
    desc: "We strip away noise. In a world drowning in complexity, we architect solutions that are elegant, explainable, and immediately useful.",
  },
  {
    badge: "SHIP FAST",
    title: "Bias for Action",
    desc: "We don't wait for perfect conditions. We prototype, iterate, and ship — turning ambition into working systems faster than anyone expects.",
  },
  {
    badge: "NEXT DECADE",
    title: "Frontier Thinking",
    desc: "We operate at the edge of what's possible — studying emerging architectures, challenging assumptions, and building for the next decade.",
  },
  {
    badge: "ACCOUNTABILITY",
    title: "Earned Trust",
    desc: "Trust isn't given — it's built through transparency, accountability, and consistently delivering on what we promise.",
  },
];

function ValueCard({ value, delay }: { value: typeof values[0]; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group relative bg-white rounded-3xl p-8 flex flex-col h-full shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
    >
      {/* Badge */}
      <div className="mb-6">
        <span className="bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase">
          {value.badge}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-black font-bold text-2xl mb-4 tracking-tight group-hover:text-blue-600 transition-colors">
        {value.title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed font-medium">
        {value.desc}
      </p>
      
      {/* Subtle Bottom Glow on Hover */}
      <div className="absolute inset-x-0 bottom-0 h-1 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-3xl" />
    </motion.div>
  );
}

export default function Values() {
  return (
    <section className="w-full bg-[#020617] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER - Optimized Font Size */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-white font-bold text-[clamp(40px,5vw,56px)]  tracking-tight leading-none mb-3">
            <span className="font-bold text-blue-500 shadow-blue-500/20">Our</span> Values
          </h2>
          <p className="text-[clamp(18px,2.5vw,24px)] font-medium text-gray-400">
            The core of our <span className="italic font-bold text-blue-500 shadow-blue-500/20">Culture</span>
          </p>
        </motion.div>

        {/* CARDS GRID - Tight Spacing */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {values.slice(0, 3).map((v, i) => (
            <ValueCard key={i} value={v} delay={i * 0.1} />
          ))}
        </div>

        {/* SECOND ROW - Centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:w-2/3 mx-auto mb-16">
          {values.slice(3, 5).map((v, i) => (
            <ValueCard key={i} value={v} delay={(i + 3) * 0.1} />
          ))}
        </div>

        {/* CTA BUTTON */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 text-white font-bold px-10 py-4 rounded-2xl text-sm transition-all hover:bg-blue-600 border border-transparent active:border-blue-500"
          >
            Browse opportunities at HireX
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}