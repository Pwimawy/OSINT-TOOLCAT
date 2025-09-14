import { useEffect, useState } from "react";
import LogoBlack from "../assets/logoblack.png";

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
      ${scrolled ? "h-16" : "h-screen"}
bg-gray-900 text-white`}
    >
      <div
        className={`transition-all duration-500 ease-in-out h-full px-6
        ${
          scrolled
            ? "grid grid-cols-2 items-center px-8"
            : "flex flex-col items-center justify-center gap-8"
        }`}
      >
        <div
          className={`transition-all duration-500 ${
            scrolled ? "justify-self-start" : ""
          }`}
        >
          <img
            src={LogoBlack}
            alt="Logo"
            className={`transition-all duration-500 ${
              scrolled ? "h-12" : "w-[280px]"
            }`}
            style={{ objectFit: "contain" }}
          />
        </div>

        <div
          className={`flex gap-8 text-xl font-medium transition-all duration-500
    ${scrolled ? "justify-self-end pr-8" : "flex-col text-3xl"}`}
        >
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
      </div>
    </div>
  );
}
