"use client";
import { motion } from "framer-motion";

const links = [
  { label: "Work With Us", href: "#" },
  { label: "Join the Network", href: "#" },
  { label: "Our Community", href: "#" },
  { label: "Get Support", href: "#" },
];

export default function QuickLinks() {
  return (
    <footer className="
      w-full
      bg-[#01040a]
      px-6 sm:px-10 lg:px-16
      py-14 sm:py-16 lg:py-20
      border-t border-white/[0.05]
    ">
      <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mb-10"
        >
          <p className="
            text-blue-500
            font-bold
            uppercase
            tracking-[0.2em]
            text-xl sm:text-2xl lg:text-4xl
          ">
            Explore HireX
          </p>
        </motion.div>

        {/* DIVIDER */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-10" />

        {/* LINKS */}
        <div className="
          flex flex-col sm:flex-row
          items-center
          justify-center sm:justify-between
          gap-8 sm:gap-6
          text-center
        ">
          {links.map((link, idx) => (
            <motion.a
              key={link.label}
              href={link.href}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="
                group relative
                text-gray-400
                font-semibold
                text-[clamp(18px,2.5vw,32px)]
                tracking-tight
                transition-colors duration-300
                hover:text-white
              "
            >
              {link.label}
              {/* Underline grow effect */}
              <span className="
                absolute -bottom-1 left-0 w-0 h-px
                bg-blue-500
                group-hover:w-full
                transition-all duration-300
              " />
            </motion.a>
          ))}
        </div>

        {/* BOTTOM LINE */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mt-10" />

      </div>
    </footer>
  );
}