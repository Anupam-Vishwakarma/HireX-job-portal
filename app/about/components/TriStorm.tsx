"use client";
import { motion } from "framer-motion";

const impactStats = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M3 20h18" />
        <path d="M7 16v-4" />
        <path d="M11 16V8" />
        <path d="M15 16V4" />
        <path d="M19 16V10" />
      </svg>
    ),
    title: "Economic Opportunity",
    desc: "By launching targeted programs and partnerships that empower underrepresented groups, HireX is boosting economic opportunities for businesses.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <circle cx="12" cy="11" r="3" />
        <path d="M9 17c0-1.5 1.5-3 3-3s3 1.5 3 3" />
      </svg>
    ),
    title: "Freelancer Well-being",
    desc: "By advocating for AI specialists and establishing support mechanisms during times of crisis, HireX is helping to foster a more sustainable workforce.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    ),
    title: "Nonprofit Impact",
    desc: "By donating funds and empowering nonprofits to leverage AI talent, HireX is seeking to augment positive impact across global initiatives.",
  },
];

export default function SocialImpact() {
  return (
    <section className="w-full bg-[#020617] px-6 py-12 sm:py-12 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* HEADER - Styled to match Values section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-white font-bold text-[clamp(36px,6vw,60px)] tracking-tight leading-none">
            Our Social Impact
          </h2>
          <div className="h-1 w-84 bg-blue-600 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {impactStats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative bg-white rounded-[2.5rem] p-10 flex flex-col items-center text-center shadow-sm transition-all duration-300 hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)]"
            >
              {/* Icon Container */}
              <div className="mb-8 flex items-center justify-center w-20 h-20 rounded-[1.5rem] bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
                {stat.icon}
              </div>

              {/* Title */}
              <h3 className="text-black font-bold text-2xl mb-4 tracking-tight">
                {stat.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed font-medium">
                {stat.desc}
              </p>

              {/* Decorative Element */}
              <div className="absolute top-6 right-6 w-12 h-12 bg-blue-50/50 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        {/* CTA - White Clickable Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 text-white font-bold px-12 py-4 rounded-2xl text-sm transition-all hover:bg-blue-600 active:scale-95"
          >
            Learn more
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}