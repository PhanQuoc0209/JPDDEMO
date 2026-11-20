"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("manabiman-theme");
    if (saved === "dark") {
      setTheme("dark");
      document.documentElement.dataset.theme = "dark";
    } else {
      setTheme("light");
      document.documentElement.dataset.theme = "light";
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("manabiman-theme", nextTheme);
    document.documentElement.dataset.theme = nextTheme;
  };

  const isDark = theme === "dark";
  const title = isDark
    ? "Đang nền tối — bấm để chuyển nền sáng"
    : "Đang nền sáng — bấm để chuyển nền tối";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      title={title}
      aria-label={title}
      aria-pressed={isDark}
      className="fixed top-3 right-3 z-50 grid h-11 w-11 place-items-center overflow-hidden rounded-full border border-line bg-surface text-ink-2 shadow-[var(--shadow)] transition hover:border-ai/50 hover:text-ai hover:shadow-[0_4px_14px_-4px_var(--ai)] active:translate-y-px lg:top-5 lg:right-5 cursor-pointer"
    >
      <span className="relative grid h-[1.15rem] w-[1.15rem] place-items-center">
        {/* Sun Icon */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`absolute h-full w-full transition-[transform,opacity] duration-300 ${
            isDark
              ? "translate-y-5 rotate-90 opacity-0"
              : "translate-y-0 rotate-0 opacity-100"
          }`}
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="4.4" />
          <path d="M12 3v2.1M12 18.9V21M3 12h2.1M18.9 12H21M5.6 5.6l1.5 1.5M16.9 16.9l1.5 1.5M5.6 18.4l1.5-1.5M16.9 7.1l1.5-1.5" />
        </svg>

        {/* Moon Icon */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`absolute h-full w-full transition-[transform,opacity] duration-300 ${
            isDark
              ? "translate-y-0 rotate-0 opacity-100"
              : "-translate-y-5 -rotate-90 opacity-0"
          }`}
          aria-hidden="true"
        >
          <path d="M18.6 15.8A7.6 7.6 0 0 1 8.2 5.4 7.6 7.6 0 1 0 18.6 15.8Z" />
          <path
            d="M14.2 7.6Q14.904 9.096 16.4 9.8Q14.904 10.504 14.2 12Q13.496 10.504 12 9.8Q13.496 9.096 14.2 7.6Z"
            fill="currentColor"
            stroke="none"
          />
        </svg>
      </span>
    </button>
  );
}
