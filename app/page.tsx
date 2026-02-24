import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* This div creates the top blue glow from Image 2 */}
      <div className="bg-glow" />
      
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-6">
        <Hero />
        {/* You can add your StatsSection and GlobalNodes here later */}
      </div>

      <Footer />
    </main>
  );
}