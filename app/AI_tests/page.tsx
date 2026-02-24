import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "./components/Hero";
import Engine from "./components/Engine";
import Security from "./components/Security";
import Categories from "./components/Categories";
import Dossier from "./components/Dossier";
import Enterprise from "./components/Enterprise";

export default function AISkillTests() {
  return (
    <div className="relative min-h-screen bg-[#020617] selection:bg-blue-500/30 overflow-x-hidden">
          <Navbar />
          <main className="relative z-10 flex flex-col items-center">
            <Hero />
            <Engine />
            <Security />
            <Categories />
            <Dossier />
            <Enterprise />
          </main>
        
          <Footer />
    </div>
  );
}