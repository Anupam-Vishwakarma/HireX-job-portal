"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/** * Optimized Social Icons with responsive sizing props
 */
const BrandIcons = {
  Facebook: ({ size = "20" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#1877F2">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  ),
  Instagram: ({ size = "20" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <defs>
        <radialGradient id="ig-grad" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(20.40001 21.60001 -23.04001 21.76001 3 22)">
          <stop offset="0" stopColor="#fed373" />
          <stop offset=".25" stopColor="#f15245" />
          <stop offset=".5" stopColor="#d92e7f" />
          <stop offset=".75" stopColor="#9b36b7" />
          <stop offset="1" stopColor="#515ecf" />
        </radialGradient>
      </defs>
      <path fill="url(#ig-grad)" d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.014 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126s1.337 1.079 2.126 1.384c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.014 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384s1.079-1.337 1.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126s-1.337-1.079-2.126-1.384c-.765-.296-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.58.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.27.07 1.646.07 4.85s-.015 3.58-.07 4.85c-.055 1.17-.248 1.805-.413 2.227-.217.562-.477.96-.896 1.382-.419.419-.819.679-1.381.896-.422.164-1.056.36-2.227.413-1.27.057-1.647.072-4.85.072s-3.58-.015-4.85-.072c-1.17-.055-1.805-.248-2.227-.413-.562-.217-.96-.477-1.382-.896-.419-.419-.679-.819-.896-1.381-.164-.422-.36-1.056-.413-2.227-.054-1.27-.072-1.646-.072-4.85s.016-3.58.072-4.85c.055-1.17.248-1.805.413-2.227.217-.562.477-.96.896-1.382.419-.419.819-.679 1.381-.896.422-.164 1.056-.36 2.227-.413 1.27-.056 1.647-.071 4.85-.071zM12 5.837a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
    </svg>
  ),
  Linkedin: ({ size = "20" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#0A66C2">
      <path d="M22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454c.98 0 1.775-.773 1.775-1.729V1.729C24 .774 23.205 0 22.225 0zM7.12 20.452H3.558V8.995H7.12v11.457zM5.341 7.433a2.064 2.064 0 110-4.128 2.064 2.064 0 010 4.128zM20.451 20.452h-3.553v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.359V8.995h3.413v1.561h.046c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.291z" />
    </svg>
  ),
  X: ({ size = "18" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="black">
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
  ),
  Youtube: ({ size = "22" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#FF0000">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  ),
};

const team = [
  {
    name: "Neeraj Kataria",
    role: "FOUNDER & CEO",
    img: "/team/member1.png",
    msg: "Our mission is to architect a future where human ingenuity is not replaced, but vastly amplified by agentic intelligence. We are dedicated to creating a seamless harmony in global workflows, ensuring technology serves as a bridge to untapped potential rather than a barrier to progress.",
    socials: { fb: "https://www.facebook.com/careerlabconsultingofficial", ig: "https://www.instagram.com/careerlabconsultingofficial", li: "https://www.linkedin.com/company/careelabconsultingofficial/posts/?feedView=all", x: "https://x.com/CareerLabConsul", yt: "https://www.youtube.com/@careerlabconsulting4691" },
  },
  {
    name: "Mamata",
    role: "CHIEF AI OFFICER",
    img: "/team/member2.png",
    msg: "In the rapidly evolving landscape of automation, we aren't just building complex models; we are engineering intuitive, human-centric solutions. By bridging the gap between raw data and actionable intelligence, we empower organizations to lead with clarity and purpose.",
    socials: { fb: "https://www.facebook.com/careerlabconsultingofficial", ig: "https://www.instagram.com/careerlabconsultingofficial", li: "https://www.linkedin.com/company/careelabconsultingofficial/posts/?feedView=all", x: "https://x.com/CareerLabConsul", yt: "https://www.youtube.com/@careerlabconsulting4691" },
  },
];

export default function TeamSection() {
  return (
    <section className="w-full bg-[#020617] px-4 sm:px-10 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-12 text-left">
          <h2 className="font-black text-white text-[clamp(28px,5vw,48px)]">
            Our <span className="text-blue-600">Leadership</span> Team
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[32px] sm:rounded-[45px] p-5 sm:p-10 lg:p-12 flex flex-col h-full shadow-2xl transition-all"
            >
              {/* HEADER: Fix for 320px cutting */}
              <div className="flex flex-row items-center gap-4 sm:gap-10 mb-8">
                {/* Profile Photo: Scales down aggressively for 320px */}
                <div className="relative w-16 h-16 xs:w-24 sm:w-32 sm:h-32 shrink-0">
                  <div className="absolute inset-0 rounded-full border-[3px] sm:border-[5px] border-blue-600/10 scale-110" />
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover rounded-full border-2 border-white shadow-sm z-10"
                  />
                </div>
                
                {/* Info: Use break-words and responsive text to prevent overlap */}
                <div className="flex flex-col justify-center min-w-0 flex-1">
                  <h3 className="text-gray-900 font-black text-lg xs:text-xl sm:text-3xl tracking-tight leading-tight break-words">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-extrabold text-[9px] xs:text-[11px] sm:text-[13px] tracking-[0.15em] uppercase mt-1 mb-3">
                    {member.role}
                  </p>
                  
                  {/* Social Icons: Sized for mobile viewports */}
                  <div className="flex flex-wrap items-center gap-3 xs:gap-4 sm:gap-5">
                    <a href={member.socials.fb} className="hover:scale-110 transition-transform"><BrandIcons.Facebook size="16" /></a>
                    <a href={member.socials.ig} className="hover:scale-110 transition-transform"><BrandIcons.Instagram size="16" /></a>
                    <a href={member.socials.li} className="hover:scale-110 transition-transform"><BrandIcons.Linkedin size="16" /></a>
                    <a href={member.socials.x} className="hover:scale-110 transition-transform"><BrandIcons.X size="14" /></a>
                    <a href={member.socials.yt} className="hover:scale-110 transition-transform"><BrandIcons.Youtube size="18" /></a>
                  </div>
                </div>
              </div>

              {/* MESSAGE: Professional styling */}
              <div className="mt-auto">
                <p className="text-gray-700 text-[15px] sm:text-[19px] leading-relaxed italic font-bold border-l-4 border-blue-600/20 pl-4">
                  &ldquo;{member.msg}&rdquo;
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}