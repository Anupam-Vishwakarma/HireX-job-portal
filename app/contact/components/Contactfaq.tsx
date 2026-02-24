"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronRight, Plus, Brain, Rocket, Shield, Users, Cog, MessageSquare } from "lucide-react";

const faqData = [
  {
    category: "General Platform",
    icon: <Brain className="w-4 h-4" />,
    questions: [
      { q: "What exactly is the HireX Ai Engine?", a: "HireX is an autonomous recruitment intelligence platform that uses proprietary LLMs to automate candidate sourcing, screening, and engagement." },
      { q: "How does the autonomous intelligence differ from standard ATS?", a: "Unlike static ATS filters, HireX understands context, intent, and soft skills through behavioral analysis rather than simple keyword matching." },
      { q: "Which industries do you specialize in?", a: "We excel in Technology, Finance, Healthcare, Manufacturing, and high-growth Retail sectors where scale is critical." },
      { q: "Is HireX a replacement for human recruiters?", a: "No. It is an 'Intelligence Co-pilot' designed to handle repetitive top-of-funnel tasks so recruiters can focus on high-value human interaction." },
      { q: "How long does the typical setup take?", a: "Standard deployments are live within 48 hours; custom API integrations for large enterprises typically take 7-14 business days." }
    ]
  },
  {
    category: "Enterprise Features",
    icon: <Shield className="w-4 h-4" />,
    questions: [
      { q: "Do you support Single Sign-On (SSO)?", a: "Yes, we support SAML 2.0, Okta, and Azure AD for secure, centralized enterprise access." },
      { q: "How is candidate data privacy handled?", a: "HireX is GDPR, SOC2 Type II, and CCPA compliant. All data is encrypted at rest and in transit with localized data residency options." },
      { q: "Can we customize the Ai's personality?", a: "Absolutely. We can tune the tone and communication style of the automated agents to match your employer brand's unique voice." },
      { q: "Is there an Audit Log for compliance?", a: "Yes, every action taken by the AI or team members is logged in a tamper-proof audit trail for regulatory compliance." },
      { q: "What is your system uptime guarantee?", a: "We maintain a 99.99% uptime SLA for enterprise partners, backed by global redundant infrastructure." }
    ]
  },
  {
    category: "Candidate Experience",
    icon: <Users className="w-4 h-4" />,
    questions: [
      { q: "How do candidates interact with the AI?", a: "Candidates engage via natural language chat, voice interfaces, or automated email/SMS workflows that feel personal and high-touch." },
      { q: "Does the AI provide feedback to rejected candidates?", a: "Yes. One of our core features is providing constructive, AI-generated feedback to every applicant to maintain your brand reputation." },
      { q: "Can candidates request to have their data deleted?", a: "Yes, we provide an automated 'Right to be Forgotten' portal where candidates can manage their data autonomously." },
      { q: "Is the interface mobile-friendly?", a: "The entire candidate journey is optimized for mobile-first engagement with zero app-download requirements." },
      { q: "How does the AI handle diverse accents or languages?", a: "Our engine is multilingual and trained on global datasets to ensure fair, unbiased assessment across 40+ languages." }
    ]
  },
  {
    category: "Integrations & API",
    icon: <Cog className="w-4 h-4" />,
    questions: [
      { q: "Which ATS platforms do you integrate with?", a: "We offer native integrations with Workday, Greenhouse, Lever, SAP SuccessFactors, and many others." },
      { q: "Is there a public API available?", a: "Yes, we provide a robust REST API for custom internal workflows and data synchronization." },
      { q: "Do you support Webhooks?", a: "Yes, real-time webhooks are available for all major system events like 'Candidate Hired' or 'Assessment Completed'." },
      { q: "How do you handle data synchronization?", a: "Data is synced in real-time or via scheduled batches, depending on your existing infrastructure's rate limits." },
      { q: "Can we use HireX with our internal Slack/Teams?", a: "Yes, we have deep integrations for internal team notifications and quick-action approvals." }
    ]
  },
  {
    category: "Pricing & ROI",
    icon: <Rocket className="w-4 h-4" />,
    questions: [
      { q: "How is HireX priced?", a: "Pricing is based on hiring volume or seats. We offer modular plans so you only pay for the features you actually use." },
      { q: "What is the average Time-to-Hire improvement?", a: "Our partners typically see a 65% reduction in time-to-hire within the first three months." },
      { q: "Do you offer a free trial?", a: "We provide a structured 14-day 'Pilot Protocol' for qualified enterprises to test the AI on live roles." },
      { q: "What is the Cost-per-Hire impact?", a: "By reducing reliance on external agencies, HireX typically lowers cost-per-hire by 40-50%." },
      { q: "Are there any hidden implementation fees?", a: "No. All implementation, training, and support costs are bundled into the annual license." }
    ]
  },
  {
    category: "Support & Strategy",
    icon: <MessageSquare className="w-4 h-4" />,
    questions: [
      { q: "What kind of support is provided?", a: "Every enterprise client is assigned a dedicated Ai Strategy Consultant and 24/7 technical support." },
      { q: "Do you help with change management?", a: "Yes, we provide comprehensive training sessions and documentation to ensure high internal adoption." },
      { q: "How often is the AI model updated?", a: "We deploy core model updates weekly, ensuring your recruitment logic stays ahead of market trends." },
      { q: "Can we request custom features?", a: "Our 'Partnership Module' allows enterprise clients to influence our product roadmap for specific needs." },
      { q: "Where are your support centers located?", a: "We have global support hubs in London, New York, and Gurugram to provide true follow-the-sun coverage." }
    ]
  }
];

export default function ContactFaq() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  
  // Track which category is expanded (Accordion style)
  const [activeCategory, setActiveCategory] = useState<number | null>(0);
  // Track which specific question is open (OpenIndex is now null by default to stop auto-opening)
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const toggleCategory = (idx: number) => {
    setActiveCategory(activeCategory === idx ? null : idx);
    setOpenQuestion(null); // Reset questions when switching categories
  };

  const toggleQuestion = (qId: string) => {
    setOpenQuestion(openQuestion === qId ? null : qId);
  };

  return (
    <section ref={ref} className="relative px-4 sm:px-6 md:px-10 py-20 sm:py-32 bg-[#020617] overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 items-start">
          
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="lg:sticky lg:top-24 h-fit"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-blue-600" />
              <span className="text-[10px] font-black tracking-[0.4em] text-blue-500 uppercase">Knowledge Base</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-tight mb-6">
              Frequently<br />
              <span className="text-blue-500">Asked </span>
            </h2>
            <p className="hidden lg:block text-slate-500 text-sm max-w-xs font-medium leading-relaxed">
              Explore our comprehensive database of common inquiries regarding the HireX autonomous intelligence platform.
            </p>
          </motion.div>

          {/* Combined Category & Question Logic */}
          <div className="flex flex-col gap-4">
            {faqData.map((cat, catIdx) => (
              <div key={catIdx} className="flex flex-col gap-3">
                {/* Category Trigger */}
                <button
                  onClick={() => toggleCategory(catIdx)}
                  className={`flex items-center justify-between p-5 rounded-xl transition-all duration-300 border ${
                    activeCategory === catIdx 
                    ? "bg-blue-600/10 border-blue-500/50 text-white" 
                    : "bg-white/[0.02] border-white/[0.05] text-slate-400 hover:text-slate-200 hover:bg-white/5"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={activeCategory === catIdx ? "text-blue-500" : "text-slate-600"}>
                      {cat.icon}
                    </span>
                    <span className="text-sm font-bold uppercase tracking-widest">{cat.category}</span>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${activeCategory === catIdx ? "rotate-90 text-blue-500" : "text-slate-600"}`} />
                </button>

                {/* Questions for the Active Category (Mobile Nested / Desktop Content) */}
                <AnimatePresence>
                  {activeCategory === catIdx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden flex flex-col gap-3 pl-2 sm:pl-6 mb-4"
                    >
                      {cat.questions.map((item, qIdx) => {
                        const questionId = `${catIdx}-${qIdx}`;
                        const isOpen = openQuestion === questionId;
                        
                        return (
                          <div
                            key={qIdx}
                            className={`group rounded-2xl border transition-all duration-500 ${
                              isOpen 
                              ? "bg-[#070c1a] border-blue-500/30 shadow-xl shadow-blue-900/10" 
                              : "bg-[#050a18]/30 border-white/[0.04] hover:border-white/10"
                            }`}
                          >
                            <button
                              onClick={() => toggleQuestion(questionId)}
                              className="w-full flex items-center justify-between gap-4 px-5 py-5 text-left"
                            >
                              <span className={`text-sm md:text-base font-bold tracking-tight transition-colors duration-300 ${isOpen ? "text-white" : "text-slate-300 group-hover:text-white"}`}>
                                {item.q}
                              </span>
                              <div className={`shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-500 ${
                                isOpen ? "bg-blue-600 border-blue-600 rotate-45 text-white" : "border-white/10 text-slate-500 group-hover:border-white/30 group-hover:text-white"
                              }`}>
                                <Plus className="w-3.5 h-3.5" />
                              </div>
                            </button>

                            <AnimatePresence>
                              {isOpen && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3, ease: "easeOut" }}
                                >
                                  <div className="px-5 pb-6">
                                    <div className="h-px bg-gradient-to-r from-blue-500/30 to-transparent mb-4" />
                                    <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-medium">
                                      {item.a}
                                    </p>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}