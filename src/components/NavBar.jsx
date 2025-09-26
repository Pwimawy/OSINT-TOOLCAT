import { useEffect, useState } from "react";
import LogoBlack from "../assets/logoblack.png";
import ScrollDownIndicator from "./ScrollDown";
import DecryptedText from "./DecryptedText";

export default function Navbar({ setScrolledState }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
      if (setScrolledState) setScrolledState(isScrolled);

      const sections = ["home", "ctf", "about"];
      let current = "home";

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = id;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setScrolledState]);

  const linkClass = (id) => `
    relative inline-block transition-colors duration-300
    hover:text-blue-500
    after:content-[''] after:absolute after:left-0 after:-bottom-1 
    after:h-[2px] after:w-full after:bg-blue-500
    after:transition-transform after:duration-300
    ${
      activeSection === id
        ? "after:scale-x-100 text-blue-400"
        : "after:scale-x-0"
    }
  `;

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out shadow-md
        ${scrolled ? "h-16" : "h-screen"} bg-gray-900 text-white`}
    >
      <div
        className={`transition-all duration-500 ease-in-out h-full px-6
          ${
            scrolled
              ? "grid grid-cols-2 items-center px-8"
              : "flex flex-col items-center justify-center gap-4 text-center"
          }`}
      >
        {/* Logo + Tagline */}
        <div
          className={`transition-all duration-500 flex flex-col ${
            scrolled ? "justify-self-start items-start" : "items-center"
          }`}
        >
          <img
            src={LogoBlack}
            alt="Logo"
            className={`transition-all duration-500 ${
              scrolled ? "h-12 w-auto" : "w-[280px] h-auto"
            }`}
            style={{ objectFit: "contain" }}
          />
          {!scrolled && (
            <div style={{ marginTop: "2rem" }}>
              <DecryptedText
                text={`A CURATED COLLECTION OF TOOLS TO ASSIST WITH
OPEN-SOURCE INTELLIGENCE INVESTIGATIONS`}
                animateOn="view"
                maxIterations={20}
                revealDirection="center"
                className="text-2xl text-gray-300 font-bold vt323-regular"
                parentClassName="max-w-md opacity-100 transition-opacity duration-2000"
              />
            </div>
          )}
          {!scrolled && <ScrollDownIndicator />}
        </div>

        {/* Nav Links (only show when scrolled) */}
        {scrolled && (
          <div className="flex gap-8 text-xl font-medium justify-self-end pr-8">
            <a href="#home" className={linkClass("home")}>
              Home
            </a>
            <a href="#ctf" className={linkClass("ctf")}>
              CTF
            </a>
            <a href="#about" className={linkClass("about")}>
              About
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
