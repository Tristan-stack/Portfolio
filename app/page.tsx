"use client";
import Header from "@/app/components/header/page";
import AboutSection from "@/app/components/about/page";
import OverlayAnimation from "@/app/components/ui/OverlayAnimation";
import useScrollDirection from "@/app/hooks/useScrollDirection"; 
import TextPressure from "@/app/components/ui/TextPressure";
import ProjectsSection from "./components/projects/page";
import Footer from "./components/footer/page";
import useInViewHero from "@/app/hooks/useInViewHero";

export default function Home() {
  const scrollDirection = useScrollDirection();
const isHeroVisible = useInViewHero();

  return (
    <>
      <OverlayAnimation />

      {/* Header avec transition smooth */}
      <div
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 ${
        !isHeroVisible && scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <Header />
    </div>


      {/* Section d’accueil */}
      <section id="hero" className="w-full min-h-screen bg-white pt-24 flex flex-col justify-between">
        <div className="flex-1 flex flex-col items-center justify-center px-8 relative">
          <div className="absolute right-24 top-12 text-xs tracking-widest text-gray-700">
            [2025]
          </div>
          <TextPressure
            text="Full Stack"
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="#000000"
            strokeColor="#ff0000"
            minFontSize={36}
          />
          <div className="flex items-center mt-2 justify-start w-full">
            <span className="custom-font text-[12vw] text-black leading-none">
              Developper
            </span>
            <span className="ml-4 w-6 h-6 rounded bg-blue-800 inline-block custom-font text-[2vw] align-bottom" />
          </div>
        </div>

        <div className="flex justify-between items-end px-8 py-12 text-xs text-black w-full">
          <span>[CURRENTLY IN STRASBOURG]</span>
          <div className="text-right">
            <div>Tristan Gerber</div>
            <div>
              building website that just{" "}
              <a href="#" className="text-blue-600 underline">
                fits
              </a>
              .
            </div>
          </div>
        </div>
      </section>

      <AboutSection />
      <ProjectsSection />
      <Footer />
    </>
  );
}
