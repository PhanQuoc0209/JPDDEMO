"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  isDark: boolean;
  toggleTheme: () => void;
  setTheme: (t: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  isDark: false,
  toggleTheme: () => {},
  setTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem("manabiman-theme") as Theme | null;
      if (saved === "dark") {
        setThemeState("dark");
        document.documentElement.dataset.theme = "dark";
        document.documentElement.classList.add("dark");
      } else {
        setThemeState("light");
        document.documentElement.dataset.theme = "light";
        document.documentElement.classList.remove("dark");
      }
    } catch (e) {}
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      (window as any).__setTheme = (t: Theme) => setTheme(t);
      (window as any).__toggleTheme = () => toggleTheme();
    }
  }, [theme]);

  const setTheme = (nextTheme: Theme) => {
    setThemeState(nextTheme);
    try {
      localStorage.setItem("manabiman-theme", nextTheme);
      document.documentElement.dataset.theme = nextTheme;
      if (nextTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } catch (e) {}
  };

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        isDark: theme === "dark",
        toggleTheme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
