"use client";

import { useState, ChangeEvent, FormEvent, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";

const inputBase = `
  w-full bg-white text-black placeholder:text-grey-400
  px-4 py-3.5 text-sm font-medium
  border border-grey-200 rounded-xl
  transition-all duration-300 outline-none
  focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10
  box-border
`;

const Label = ({ children }: { children: React.ReactNode }) => (
  <label className="text-[16px] font-bold text-white tracking-[0.1em]  block mb-2">
    {children}
  </label>
);

const countryCodes = [
  { code: "+1",   label: "US" },
  { code: "+1",   label: "CA" },
  { code: "+7",   label: "RU" },
  { code: "+20",  label: "EG" },
  { code: "+27",  label: "ZA" },
  { code: "+30",  label: "GR" },
  { code: "+31",  label: "NL" },
  { code: "+32",  label: "BE" },
  { code: "+33",  label: "FR" },
  { code: "+34",  label: "ES" },
  { code: "+36",  label: "HU" },
  { code: "+39",  label: "IT" },
  { code: "+40",  label: "RO" },
  { code: "+41",  label: "CH" },
  { code: "+44",  label: "GB" },
  { code: "+45",  label: "DK" },
  { code: "+46",  label: "SE" },
  { code: "+47",  label: "NO" },
  { code: "+48",  label: "PL" },
  { code: "+49",  label: "DE" },
  { code: "+51",  label: "PE" },
  { code: "+52",  label: "MX" },
  { code: "+54",  label: "AR" },
  { code: "+55",  label: "BR" },
  { code: "+56",  label: "CL" },
  { code: "+57",  label: "CO" },
  { code: "+60",  label: "MY" },
  { code: "+61",  label: "AU" },
  { code: "+62",  label: "ID" },
  { code: "+63",  label: "PH" },
  { code: "+64",  label: "NZ" },
  { code: "+65",  label: "SG" },
  { code: "+66",  label: "TH" },
  { code: "+81",  label: "JP" },
  { code: "+82",  label: "KR" },
  { code: "+84",  label: "VN" },
  { code: "+86",  label: "CN" },
  { code: "+90",  label: "TR" },
  { code: "+91",  label: "IN" },
  { code: "+92",  label: "PK" },
  { code: "+94",  label: "LK" },
  { code: "+95",  label: "MM" },
  { code: "+98",  label: "IR" },
  { code: "+212", label: "MA" },
  { code: "+213", label: "DZ" },
  { code: "+216", label: "TN" },
  { code: "+218", label: "LY" },
  { code: "+234", label: "NG" },
  { code: "+254", label: "KE" },
  { code: "+255", label: "TZ" },
  { code: "+256", label: "UG" },
  { code: "+260", label: "ZM" },
  { code: "+263", label: "ZW" },
  { code: "+351", label: "PT" },
  { code: "+352", label: "LU" },
  { code: "+353", label: "IE" },
  { code: "+354", label: "IS" },
  { code: "+358", label: "FI" },
  { code: "+380", label: "UA" },
  { code: "+381", label: "RS" },
  { code: "+385", label: "HR" },
  { code: "+386", label: "SI" },
  { code: "+420", label: "CZ" },
  { code: "+421", label: "SK" },
  { code: "+43",  label: "AT" },
  { code: "+502", label: "GT" },
  { code: "+503", label: "SV" },
  { code: "+504", label: "HN" },
  { code: "+505", label: "NI" },
  { code: "+506", label: "CR" },
  { code: "+507", label: "PA" },
  { code: "+593", label: "EC" },
  { code: "+595", label: "PY" },
  { code: "+598", label: "UY" },
  { code: "+60",  label: "MY" },
  { code: "+880", label: "BD" },
  { code: "+960", label: "MV" },
  { code: "+966", label: "SA" },
  { code: "+967", label: "YE" },
  { code: "+968", label: "OM" },
  { code: "+971", label: "AE" },
  { code: "+972", label: "IL" },
  { code: "+973", label: "BH" },
  { code: "+974", label: "QA" },
  { code: "+975", label: "BT" },
  { code: "+976", label: "MN" },
  { code: "+977", label: "NP" },
];

type FormState = {
  fullName: string;
  email: string;
  countryCode: string;
  phone: string;
  inquiryType: string;
  locality: string;
  city: string;
  state: string;
  feedback: string;
};

const initial: FormState = {
  fullName: "",
  email: "",
  countryCode: "+91",
  phone: "",
  inquiryType: "",
  locality: "",
  city: "",
  state: "",
  feedback: "",
};

function validate(form: FormState) {
  const errs: Partial<Record<keyof FormState, string>> = {};
  if (!form.fullName.trim()) errs.fullName = "Name is required";
  if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) errs.email = "Valid email required";
  if (!form.phone.match(/^\d{10}$/)) errs.phone = "Enter 10-digit number";
  if (!form.inquiryType) errs.inquiryType = "Select a category";
  if (!form.city.trim()) errs.city = "City is required";
  if (!form.state.trim()) errs.state = "State is required";
  if (form.feedback.trim().length < 10) errs.feedback = "Message too short (min 10 chars)";
  return errs;
}

export default function ContactForm() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === "phone") {
      const digits = value.replace(/\D/g, "").slice(0, 10);
      setForm(p => ({ ...p, phone: digits }));
    } else {
      setForm(p => ({ ...p, [name]: value }));
    }
    if (errors[name as keyof FormState]) {
      setErrors(p => ({ ...p, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        const msg = encodeURIComponent(
          `New HireX Inquiry\n\n` +
          `Name: ${form.fullName}\n` +
          `Email: ${form.email}\n` +
          `Phone: ${form.countryCode} ${form.phone}\n` +
          `Category: ${form.inquiryType}\n` +
          `Location: ${[form.locality, form.city, form.state].filter(Boolean).join(", ")}\n\n` +
          `Message:\n${form.feedback}`
        );
        window.open(`https://wa.me/918700236923?text=${msg}`, "_blank");
        setSubmitted(true);
      } else {
        alert("Transmission failed. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => { setForm(initial); setErrors({}); setSubmitted(false); };

  return (
    <section ref={ref} className="relative w-full px-6 sm:px-10 lg:px-16 py-16 sm:py-24 overflow-hidden bg-[#020617]">

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent pointer-events-none" />
      <div className="absolute -top-40 left-1/4 w-96 h-96 rounded-full bg-blue-600/[0.06] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-10 lg:mb-12"
        >
          <h2 className="text-[clamp(32px,7vw,60px)] font-black text-white  tracking-0 leading-none">
            Ready to <br /><span className="text-blue-500">Connect ?</span>
          </h2>
        </motion.div>

        {/* MAIN LAYOUT — equal height columns */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 lg:items-stretch">

          {/* ── LEFT ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-[38%] flex flex-col gap-5"
          >
            {/* Image — fills remaining space */}
            <div className="relative group rounded-2xl overflow-hidden border border-white/[0.07] hover:border-blue-500/30 transition-colors duration-500 flex-1 min-h-[220px] sm:min-h-[280px]">
              <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-blue-500/60 rounded-tl-2xl z-20 pointer-events-none" />
              <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-blue-500/60 rounded-tr-2xl z-20 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-blue-500/60 rounded-bl-2xl z-20 pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-blue-500/60 rounded-br-2xl z-20 pointer-events-none" />
              <Image
                src="/contact/feedback.png"
                alt="Contact HireX"
                fill
                sizes="(max-width:1024px) 100vw, 38vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2 rounded-xl px-4 py-2.5"
                style={{ background:"rgba(2,6,23,0.8)", backdropFilter:"blur(12px)", border:"1px solid rgba(59,130,246,0.2)" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                <span className="text-[10px] font-bold text-green-400 uppercase tracking-widest whitespace-nowrap">Team Online · Avg 4hr Response</span>
              </div>
            </div>

            {/* Stat tiles */}
            <div className="grid grid-cols-2 gap-4 flex-shrink-0">
              {[
                { label: "Response Time", val: "< 4 Hours" },
                { label: "Satisfaction",  val: "98.4%" },
                { label: "Active Clients", val: "500+" },
                { label: "Countries",      val: "12+" },
              ].map((item) => (
                <div key={item.label}
                  className="rounded-xl border border-white bg-white px-4 py-4 ">
                  <p className="text-black font-black text-xl leading-none mb-1">{item.val}</p>
                  <p className="text-black text-[10px] font-bold tracking-widest">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT — Form (stretches to match left height) ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="w-full lg:w-[62%] flex flex-col"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="relative flex-1 bg-[#050a18] border border-white/[0.08] rounded-3xl p-10 sm:p-14 flex flex-col items-center justify-center text-center shadow-2xl overflow-hidden"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                    className="w-20 h-20 rounded-full bg-blue-600/20 border border-blue-500 flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(37,99,235,0.3)]"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2.5" className="w-9 h-9">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.div>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-2">Transmission Complete</h3>
                  <p className="text-slate-500 text-sm mb-2">Your inquiry has been logged. Check your email for confirmation.</p>
                  <p className="text-slate-600 text-xs mb-10">A WhatsApp notification has also been dispatched.</p>
                  <button onClick={handleReset}
                    className="px-10 py-3.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-black tracking-widest uppercase rounded-xl transition-colors shadow-lg shadow-blue-600/30">
                    OK · Submit Another
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="relative flex-1 bg-[#050a18] border border-white/[0.08] rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden flex flex-col"
                >
                  <form onSubmit={handleSubmit} className="flex flex-col flex-1 gap-5" noValidate>

                    {/* Row 1: Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <Label>Full Name</Label>
                        <input required name="fullName" value={form.fullName}
                          placeholder="Your full name" className={inputBase} onChange={handleChange} />
                        {errors.fullName && <p className="text-red-400 text-[10px] mt-1.5">{errors.fullName}</p>}
                      </div>
                      <div>
                        <Label>Email Address</Label>
                        <input required name="email" type="email" value={form.email}
                          placeholder="you@company.com" className={inputBase} onChange={handleChange} />
                        {errors.email && <p className="text-red-400 text-[10px] mt-1.5">{errors.email}</p>}
                      </div>
                    </div>

                    {/* Row 2: Phone */}
                    <div>
                      <Label>Contact Number</Label>
                      <div className="flex gap-2">
                        {/* Country code — narrow */}
                        <select
                          name="countryCode" value={form.countryCode} onChange={handleChange}
                          className="
                            flex-shrink-0 w-[90px] sm:w-[100px]
                            bg-white text-black text-sm font-medium
                            px-2 py-3.5 border border-white/ rounded-xl
                            appearance-none cursor-pointer outline-none
                            focus:border-white   focus:bg-white
                            transition-all duration-300
                          "
                          style={{ backgroundImage: "none" }}
                        >
                          {countryCodes.map((c, i) => (
                            <option key={`${c.code}-${c.label}-${i}`} value={c.code} className="bg-white text-black">
                              {c.label} {c.code}
                            </option>
                          ))}
                        </select>
                        {/* Phone number — wide */}
                        <div className="flex-1">
                          <input required name="phone" type="tel" value={form.phone}
                            placeholder="10-digit mobile number"
                            maxLength={10} inputMode="numeric"
                            className={inputBase} onChange={handleChange} />
                        </div>
                      </div>
                      {errors.phone && <p className="text-red-400 text-[10px] mt-1.5">{errors.phone}</p>}
                    </div>

                    {/* Row 3: Inquiry Type */}
                    <div>
                      <Label>Inquiry Type</Label>
                      <div className="relative">
                        <select required name="inquiryType" value={form.inquiryType}
                          className={`${inputBase} appearance-none cursor-pointer pr-10`} onChange={handleChange}>
                          <option value="" className="bg-white text-black">Select Classification</option>
                          <option value="Enterprise Partnerships" className="bg-white text-black">Enterprise Partnerships</option>
                          <option value="Candidate Ecosystem" className="bg-white text-black">Candidate Ecosystem</option>
                          <option value="Consulting & Advisory" className="bg-white text-black">Consulting & Advisory</option>
                          <option value="Gov & Compliance" className="bg-white text-black">Gov & Compliance</option>
                          <option value="General Inquiry" className="bg-white text-black">General Inquiry</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-500 pointer-events-none text-xs">▼</div>
                      </div>
                      {errors.inquiryType && <p className="text-red-400 text-[10px] mt-1.5">{errors.inquiryType}</p>}
                    </div>

                    {/* Row 4: Address */}
                    <div>
                      <Label>Location</Label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <input name="locality" value={form.locality}
                          placeholder="Locality / Area" className={inputBase} onChange={handleChange} />
                        <div>
                          <input required name="city" value={form.city}
                            placeholder="City *" className={inputBase} onChange={handleChange} />
                          {errors.city && <p className="text-red-400 text-[10px] mt-1">{errors.city}</p>}
                        </div>
                        <div>
                          <input required name="state" value={form.state}
                            placeholder="State *" className={inputBase} onChange={handleChange} />
                          {errors.state && <p className="text-red-400 text-[10px] mt-1">{errors.state}</p>}
                        </div>
                      </div>
                    </div>

                    {/* Row 5: Message */}
                    <div className="flex-1 flex flex-col">
                      <Label>Message</Label>
                      <textarea required name="feedback" value={form.feedback}
                        rows={4} placeholder="Describe your requirements in detail..."
                        className={`${inputBase} resize-none flex-1 min-h-[100px]`} onChange={handleChange} />
                      {errors.feedback && <p className="text-red-400 text-[10px] mt-1.5">{errors.feedback}</p>}
                    </div>

                    {/* Submit */}
                    <div className="mt-auto">
                      <motion.button type="submit" disabled={loading}
                        whileHover={{ scale: 1.01, boxShadow: "0 0 40px rgba(37,99,235,0.35)" }}
                        whileTap={{ scale: 0.98 }}
                        className="relative w-full overflow-hidden bg-blue-600 hover:bg-blue-500 disabled:opacity-60 text-white font-black text-xs tracking-[0.3em]  py-5 rounded-xl transition-all shadow-[0_10px_30px_rgba(37,99,235,0.25)]"
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "200%" }}
                          transition={{ duration: 0.6 }}
                        />
                        <span className="relative z-10 flex items-center justify-center gap-3">
                          {loading ? (
                            <>
                              <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
                              </svg>
                              Transmitting...
                            </>
                          ) : "Submit →"}
                        </span>
                      </motion.button>
                    </div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
}