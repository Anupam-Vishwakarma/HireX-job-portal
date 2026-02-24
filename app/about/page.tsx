"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutHero from "./components/AboutHero";
import IntroText from "./components/IntroText";
import MissionVision from "./components/MissionVision";
import HowItWorks from "./components/HowItWorks";
import Global from "./components/trustedby";
import SuccessStories from "./components/SuccessStories";
import MissionHeader from "./components/MissionHeader";
import Values from "./components/Values";
import Resources from "./components/Resources";
import StatsSection from "./components/StatsSection";
import TeamSection from "./components/TeamSection";
import ServiceSection from "./components/Service"; 
import TriStormSection from "./components/TriStorm"; 
import BusinessCTA from "./components/BusinessCTA";
import FreelancerCTA from "./components/FreelancerCTA";
import QuickLinks from "./components/QuickLinks";
import GlobalSection from "./components/Global"; 
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-[#020617] selection:bg-blue-500/30 overflow-x-hidden">
      <Navbar />

      <main className="relative z-10 flex flex-col items-center">

        <AboutHero />
        <IntroText />
        <MissionVision />
        <HowItWorks />
        <Global />
        <ServiceSection />
        <SuccessStories />

        <Values />
        <Resources />
        <TriStormSection />
        <FreelancerCTA />
        <BusinessCTA /> 
        <QuickLinks />
        <TeamSection />
    

      </main>

      <Footer />
    </div>
  );
}