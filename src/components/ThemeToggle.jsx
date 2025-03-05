import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark"; 
    } else {
      return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light"); 
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="cursor-pointer flex justify-center items-center flex-col w-full mt-4"
    >
      {isDark ? (
        <FaMoon className="text-blue-200 text-2xl m-1" />
      ) : (
        <FaSun className="text-yellow-400 text-2xl m-1" />
      )}
      {"Switch Theme"}
    </button>
  );
}
