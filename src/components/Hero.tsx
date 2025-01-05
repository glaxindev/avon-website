import { useEffect, useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import webConfig from "../../webConfig";

const Hero = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createParticle = () => {
      if (!particlesRef.current) return;

      const particle = document.createElement("div");
      particle.className = "absolute w-2 h-2 bg-[#8B5DFF] rounded-full";

      const x = Math.random() * particlesRef.current.offsetWidth;
      const y = Math.random() * particlesRef.current.offsetHeight;

      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      particle.style.opacity = "0";

      particlesRef.current.appendChild(particle);

      requestAnimationFrame(() => {
        particle.style.transition = "all 3s ease-out";
        particle.style.transform = `translate(${
          Math.random() * 100 - 50
        }px, ${-100}px)`;
        particle.style.opacity = "0.5";
      });

      setTimeout(() => particle.remove(), 3000);
    };

    const interval = setInterval(createParticle, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home">
      <div className="relative min-h-screen flex items-center justify-center bg-[#0A0A0A] overflow-hidden">
        <div ref={particlesRef} className="absolute inset-0" />
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-[#6A42C2]/20 bg-black/40 backdrop-blur-sm hover:border-[#8B5DFF] transition-colors">
            <Sparkles className="w-4 h-4 text-[#8B5DFF]" />
            <span className="text-[#8B5DFF] text-sm font-medium block sm:hidden">
              We Reached 11K Servers!
            </span>
            <span className="text-[#8B5DFF] text-sm font-medium hidden sm:block">
              Together we achieved 11K servers and counting!
            </span>
          </div>
          <h1 className="font-inter text-5xl md:text-6xl font-bold text-white mb-6">
            Unleash the perfect vibe
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Bring seamless music streaming to your Discord server with
            high-quality audio and easy-to-use commands.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={webConfig.botInvite}
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-[#8B5DFF] to-[#6A42C2] hover:scale-105 transition-transform text-white font-medium flex items-center gap-2"
            >
              Add To Discord
              <ArrowRight size={20} />
            </a>
            <a
              href={webConfig.discordServer}
              className="px-8 py-3 rounded-lg border-2 border-white hover:scale-105 transition-transform text-white font-medium"
            >
              Support Server
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
