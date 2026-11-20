"use client";

import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { TopNav } from "./TopNav";
import { SearchModal } from "./SearchModal";
import { useTheme } from "@/contexts/ThemeContext";

export function AppShell({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-paper text-ink selection:bg-ai-wash selection:text-ai flex flex-col font-sans transition-colors duration-200">
      {/* Sidebar Component */}
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        isDark={isDark}
        toggleTheme={toggleTheme}
      />

      {/* Main Content Area with left padding on Desktop */}
      <div className="lg:pl-64 flex flex-col flex-1 min-w-0">
        {/* Sticky Top Navigation */}
        <TopNav
          onOpenSidebar={() => setSidebarOpen(true)}
          onOpenSearch={() => setSearchOpen(true)}
        />

        {/* Page Content */}
        <main className="flex-1 min-w-0">{children}</main>
      </div>

      {/* Global Command Palette Modal (Ctrl + K) */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
}
