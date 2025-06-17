import { useEffect } from "react";
import { Moon, Sun } from "lucide-react";

export default function DarkModeToggle({ isDarkMode, setIsDarkMode }) {
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className="flex items-center gap-2 cursor-pointer"
      onClick={toggleDarkMode}
    >
      {/* Moon and Sun icons */}
      <div className="relative w-6 h-6">
        <Moon
          className={`absolute w-6 h-6 transition-opacity duration-300 ${
            isDarkMode ? "opacity-0" : "opacity-100"
          }`}
        />
        <Sun
          className={`absolute w-6 h-6 transition-opacity duration-300 ${
            isDarkMode ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      {/* Toggle switch */}
      <div className="relative w-10 h-6 bg-gray-400 dark:bg-gray-600 rounded-full transition-colors duration-300">
        <div
          className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
            isDarkMode ? "translate-x-4" : "translate-x-0"
          }`}
        />
      </div>
    </div>
  );
}
