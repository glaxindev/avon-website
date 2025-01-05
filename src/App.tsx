import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Snowfall from "./components/Snowfall";
import { ReactLenis } from "lenis/react";

function App() {
  return (
    <ReactLenis root>
      <div className="min-h-screen bg-[#0A0A0A]">
        <Snowfall />
        <Navbar />
        <main>
          <Hero />
          <Features />
          <FAQ />
        </main>
        <Footer />
      </div>
    </ReactLenis>
  );
}

export default App;
