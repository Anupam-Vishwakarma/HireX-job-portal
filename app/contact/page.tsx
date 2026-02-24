import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";
import ContactCategories from "./components/ContactCategories";
import TrustStats from "./components/Truststats";
import EngagementProcess from "./components/Engagementprocess";
import ContactFaq from "./components/Contactfaq";
import ContactHero from "./components/Contacthero";

export const metadata: Metadata = {
  title: "Contact Us | Career Lab Consulting",
  description: "Connect with the HireX team. Partner with us to transform your hiring infrastructure through autonomous Ai intelligence.",
  openGraph: {
    title: "Contact Career Lab Consulting",
    description: "Partner with Career Lab Consulting to transform hiring through Ai intelligence.",
    url: "https://www.careerlabconsulting.com/contact",
    siteName: "Career Lab Consulting",
    locale: "en_IN",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="relative min-h-screen bg-[#020617] flex flex-col items-center overflow-x-hidden">
        {/* Global ambient background */}
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(37,99,235,0.07)_0%,transparent_50%)] pointer-events-none z-0" />
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(37,99,235,0.05)_0%,transparent_50%)] pointer-events-none z-0" />

        <div className="relative z-10 w-full">

          {/* ─── HERO ──────────────────────────────────────────── */}
          <ContactHero />

          {/* ─── TRUST STATS BAR ──────────────────────────────── */}
          <TrustStats />

          {/* ─── INQUIRY CATEGORIES ───────────────────────────── */}
          <ContactCategories />

          {/* ─── ENGAGEMENT PROCESS ───────────────────────────── */}
          <EngagementProcess />

          {/* ─── CONTACT FORM (full width, centered) ──────────── */}
          <ContactForm />

          {/* ─── ADDRESS + MAP (side by side, full width) ─────── */}
          <ContactInfo />

          {/* ─── FAQ ──────────────────────────────────────────── */}
          <ContactFaq />

        </div>
      </main>

      <Footer />
    </>
  );
}