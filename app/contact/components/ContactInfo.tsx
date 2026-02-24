"use client";

import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const hubDetails = [
  {
    icon: <MapPin className="w-5 h-5" />,
    label: "OFFICE ADDRESS",
    value: "DLF Cyber City, 5th Floor, Cyber Green-2, Sec-25, Gurugram, India",
    link: "https://www.google.com/maps/search/?api=1&query=DLF+Cyber+City+Gurugram+Career+Lab+Consulting",
  },
  {
    icon: <Phone className="w-5 h-5" />,
    label: "PHONE NUMBER",
    value: "+91 870023 6923",
    link: "tel:+918700236923",
  },
  {
    icon: <Mail className="w-5 h-5" />,
    label: "EMAIL ADDRESS",
    value: "info@careerlabconsulting.com",
    link: "mailto:info@careerlabconsulting.com",
  },
];

export default function ContactInfo() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative px-6 py-12 sm:py-20 bg-[#020617]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="flex items-center gap-3 mb-4"
          >
            <div className="h-[1px] w-12 bg-blue-600" />
            <span className="text-[10px] font-black tracking-[0.4em] text-blue-500 uppercase">
              Find Us
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tighter"
          >
            Our <span className="text-blue-500">Contact Hub</span>
          </motion.h2>
        </div>

        {/* Main Interface Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* LEFT: Info Terminal */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="lg:col-span-4 flex flex-col gap-4"
          >
            {hubDetails.map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 10 }}
                className="group relative p-6 rounded-2xl bg-[#050a18] border border-white/[0.05] hover:border-blue-500/40 hover:bg-white/[0.04] transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-blue-600/10 text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-sm">
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-[9px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-1">{item.label}</p>
                    <p className="text-sm font-semibold text-white leading-relaxed break-words">{item.value}</p>
                  </div>
                </div>
              </motion.a>
            ))}

            {/* Support Status Card - Matching the dashboard energy */}
            <div className="mt-auto p-6 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 text-white overflow-hidden relative shadow-[0_10px_30px_rgba(37,99,235,0.2)]">
               <div className="relative z-10">
                 <p className="text-[10px] font-black uppercase tracking-widest opacity-80 mb-2">Network Status</p>
                 <p className="text-lg font-bold mb-4 tracking-tight uppercase">Systems Fully Operational</p>
                 <div className="flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                   <span className="text-xs font-medium">Global Support Live</span>
                 </div>
               </div>
               <div className="absolute -right-4 -bottom-4 opacity-10 uppercase font-black text-6xl italic select-none">Live</div>
            </div>
          </motion.div>

          {/* RIGHT: Map Terminal */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="lg:col-span-8 relative group min-h-[450px] lg:min-h-full rounded-3xl overflow-hidden border border-white bg-white shadow-2xl"
          >
            {/* The Integrated Google Map with provided source */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.315570535306!2d77.0863!3d28.4879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d193ba7800001%3A0xc3f60f89025e9854!2sCareer%20Lab%20Consulting%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1708600000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ 
                border: 0, 
                position: "absolute",
                inset: 0
              }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
            
            {/* Map Overlay HUD */}
            <div className="absolute top-6 right-6">
              <div className="bg-white/10 backdrop-blur-xl px-5 py-2.5 rounded-full border border-white/10 flex items-center gap-3 shadow-2xl">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-[10px] font-black text-black tracking-[0.2em] uppercase">
                   HQ: 28.4879° N, 77.0863° E
                </span>
              </div>
            </div>

            {/* Bottom Floating Action Bar */}
            <div className="absolute bottom-6 left-6 right-6">
              <motion.a
                href="https://www.google.com/maps/dir//Career+Lab+Consulting+Pvt+Ltd,+DLF+Cyber+City,+Gurugram"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-slate-950 px-8 py-4 rounded-xl font-black text-[11px] uppercase tracking-[0.2em] hover:bg-blue-500 hover:text-white transition-all shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
              >
                Navigate To Office <ArrowRight className="w-4 h-4" />
              </motion.a>
            </div>

            {/* Subtle Vignette for Map blending */}
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_120px_rgba(2,6,23,0.4)] border border-white/10 rounded-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}