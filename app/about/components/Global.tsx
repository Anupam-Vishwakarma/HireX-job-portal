"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, Navigation2, Globe } from "lucide-react";

const locations = [
  { region: "INDIA (HQ)", city: "Gurugram", address: "5th Floor, Cyber Green Part-1, DLF Building No-2, Sector 25, Gurugram, 122002", phone: "+918700236923" },
  { region: "INDIA (BRANCH)", city: "Bengaluru", address: "21, Raheja Towers, Mahatma Gandhi Rd, Ashok Nagar, Bengaluru, 560001", phone: "+918700236923" },
  { region: "USA", city: "San Francisco", address: "128 Geary St, San Francisco California 94108, United States", phone: "+12128146245" },
  { region: "UK", city: "London", address: "2nd Floor, 23 Great Portland Street, London", phone: "+447888873245" },
  { region: "UAE", city: "Dubai", address: "Office-403, Al Mankhool, Dubai, United Arab Emirates", phone: "+971524009232" },
  { region: "SINGAPORE", city: "Singapore", address: "TripleOne Somerset, 111 Somerset Road, #04-01, 238164", phone: "+6568151432" },
  { region: "SOUTH AFRICA", city: "Cape Town", address: "3, Deneb House, 371 Browning Road, Cape Town, 7872", phone: "+278755063412" },
  { region: "GERMANY", city: "Berlin", address: "Grünberger Str. 54, 10245 Berlin, Germany", phone: "+493051588345" },
];

export default function Global() {
  return (
    <section className="w-full bg-[#020617] py-14 sm:py-20 px-4 sm:px-6">
      
      {/* HEADER */}
      <div className="flex items-start sm:items-center gap-4 mb-10 sm:mb-12 border-b border-white/5 pb-6 sm:pb-8 max-w-7xl mx-auto">
        <div className="p-2 sm:p-3 bg-blue-600/10 rounded-full border border-blue-500/20 shrink-0">
          <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />
        </div>

        <div>
          <h2 className="text-xs sm:text-sm font-black text-white uppercase tracking-[0.2em] sm:tracking-[0.3em]">
            Global Presence
          </h2>
          <p className="text-[9px] sm:text-[10px] text-slate-500 uppercase tracking-[0.15em] sm:tracking-wide">
            Operating across 8 primary tech hubs
          </p>
        </div>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {locations.map((loc, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="
              group 
              relative 
              p-5 sm:p-6 md:p-8 
              rounded-2xl sm:rounded-[28px] 
              bg-[#030712] 
              border border-white/5 
              hover:border-blue-500/30 
              transition-all duration-500
              shadow-lg
            "
          >
            {/* REGION */}
            <div className="flex justify-between items-start mb-4 sm:mb-6">
              <span className="px-2 sm:px-3 py-1 rounded-full bg-blue-600/10 border border-blue-500/20 text-[8px] sm:text-[9px] font-black text-blue-500 tracking-tight uppercase">
                {loc.region}
              </span>
              <MapPin className="w-4 h-4 text-slate-600 group-hover:text-blue-500 transition-colors" />
            </div>

            {/* CITY */}
            <h3 className="text-lg sm:text-xl font-black text-white mb-3 sm:mb-4 uppercase tracking-tight group-hover:text-blue-400 transition-colors">
              {loc.city}
            </h3>

            {/* ADDRESS */}
            <p className="text-[10px] sm:text-[11px] leading-relaxed text-slate-500 mb-4 sm:mb-6 uppercase font-medium tracking-wide break-words">
              {loc.address}
            </p>

            {/* CONTACT */}
            <div className="space-y-3 sm:space-y-4 pt-3 sm:pt-4 border-t border-white/5">
              <div className="flex items-center gap-2 sm:gap-3 text-blue-500">
                <Phone className="w-3 h-3 shrink-0" />
                <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.15em] sm:tracking-wide break-all">
                  {loc.phone}
                </span>
              </div>

              <button className="
                w-full 
                py-2.5 sm:py-3 
                rounded-xl sm:rounded-2xl 
                bg-white/5 
                border border-white/10 
                text-[9px] sm:text-[10px] 
                font-black 
                text-white 
                uppercase 
                tracking-[0.15em] sm:tracking-[0.2em] 
                group-hover:bg-blue-600 
                group-hover:border-blue-500 
                transition-all 
                flex items-center justify-center gap-2
              ">
                <Navigation2 className="w-3 h-3" />
                Get Directions
              </button>
            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
}
