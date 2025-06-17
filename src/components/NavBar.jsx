import { useEffect, useState } from "react";
import LogoWhite from "../assets/logowhite.png";
import NavWhite from "../assets/navwhite.png";
import LogoBlack from "../assets/logoblack.png";
import NavBlack from "../assets/navblack.png";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logoSrc = scrolled
    ? isDarkMode
      ? NavBlack
      : NavWhite
    : isDarkMode
    ? LogoBlack
    : LogoWhite;

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out shadow-md ${
        scrolled ? "h-16" : "h-[100vh]"
      } ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}
    >
      <div
        className={`transition-all duration-500 ease-in-out h-full px-6 ${
          scrolled
            ? "grid grid-cols-3 items-center"
            : "flex flex-col items-center justify-center gap-4"
        }`}
      >
        {/* Logo */}
        <div
          className={`transition-all duration-500 ease-in-out ${
            scrolled ? "justify-self-start" : ""
          }`}
        >
          <img
            src={logoSrc}
            alt="Logo"
            className={`transition-all duration-500 ease-in-out ${
              scrolled ? "h-16" : "w-[300px]"
            }`}
            style={{ objectFit: "contain" }}
          />
        </div>

        {/* Search Bar */}
        <div
          className={`transition-all duration-500 w-full flex justify-center ${
            scrolled ? "items-center" : ""
          }`}
        >
          <input
            type="text"
            placeholder="Search..."
            className={`w-2/3 max-w-md px-4 py-2 border rounded-full focus:outline-none transition ${
              isDarkMode
                ? "border-white bg-gray-800 text-white focus:ring-blue-400"
                : "border-black bg-white text-black focus:ring-blue-500"
            }`}
          />
        </div>

        {/* Links + Dark Mode Toggle */}
        <div
          className={`transition-all duration-500 text-lg flex flex-col sm:flex-row gap-2 sm:gap-4 items-end ${
            scrolled ? "justify-self-end" : ""
          }`}
        >
          <div className="flex gap-4">
            <a href="#ctf" className="hover:text-blue-600 transition">
              CTF
            </a>
            <a href="#about" className="hover:text-blue-600 transition">
              About
            </a>
          </div>

          {/* Dark Mode Toggle */}
          <DarkModeToggle
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
          />
        </div>
      </div>
    </div>
  );
}
