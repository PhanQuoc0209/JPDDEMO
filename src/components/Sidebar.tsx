"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  Home,
  BookOpen,
  Languages,
  Sparkles,
  Award,
  BarChart3,
  Users,
  Moon,
  Sun,
  X,
} from "lucide-react";

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
  isDark: boolean;
  toggleTheme: () => void;
}

export function Sidebar({
  isOpen = false,
  onClose,
  isDark,
  toggleTheme,
}: SidebarProps) {
  const pathname = usePathname();

  const NAV_ITEMS = [
    { label: "Trang chủ", href: "/", icon: Home },
    { label: "Khóa học", href: "/nhap-mon", icon: BookOpen },
    { label: "Từ vựng", href: "/tu-vung", icon: Languages },
    { label: "Ngữ pháp", href: "/ngu-phap", icon: Sparkles },
    { label: "Luyện đề", href: "/thi", icon: Award },
    { label: "Thống kê", href: "/ghi-nho", icon: BarChart3 },
    { label: "Cộng đồng", href: "/shadowing/bang-xep-hang", icon: Users },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const content = (
    <div className="flex h-full flex-col justify-between bg-surface border-r border-line p-4 lg:p-5 select-none relative overflow-hidden transition-colors duration-200">
      {/* Brand Logo Header */}
      <div>
        <div className="flex items-center justify-between mb-7 px-1">
          <Link href="/" className="flex items-center gap-3 group">
            {/* Genko Purple Glow Logo */}
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 text-white font-bold text-lg shadow-md purple-glow-sm transition group-hover:scale-105">
              <span className="jp">日</span>
            </span>
            <div>
              <span className="block text-base font-bold tracking-tight text-ink group-hover:text-ai transition">
                Manabiman
              </span>
              <span className="jp block text-[10px] text-ink-3 tracking-wider">
                学び、つながる
              </span>
            </div>
          </Link>

          {/* Close button for mobile drawer */}
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="lg:hidden p-1.5 rounded-lg text-ink-3 hover:text-ink hover:bg-surface-2 transition"
              aria-label="Đóng thanh điều hướng"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Navigation List */}
        <nav className="space-y-1.5" aria-label="Thanh điều hướng chính">
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.href);
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={`group flex items-center gap-3.5 px-3.5 py-2.5 rounded-2xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  active
                    ? "bg-[#EDE9FE] text-[#7C3AED] dark:bg-gradient-to-r dark:from-violet-600/35 dark:to-indigo-600/20 dark:text-white font-bold shadow-xs border-l-2 border-[#7C3AED] dark:border-violet-400"
                    : "text-ink-2 hover:bg-[#F5F0FF] dark:hover:bg-[#1a1736] hover:text-ink dark:hover:text-white"
                }`}
              >
                <Icon
                  className={`w-4 h-4 transition-transform group-hover:scale-110 ${
                    active ? "text-[#7C3AED] dark:text-violet-400" : "text-ink-3 group-hover:text-ai dark:group-hover:text-white"
                  }`}
                />
                <span className="flex-1">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Sidebar Footer Section */}
      <div className="space-y-4 pt-4 relative z-10">
        {/* Banner Card: Cùng học tiếng Nhật mỗi ngày */}
        <div className="relative overflow-hidden rounded-2xl border border-line bg-[#F8F7FF] dark:bg-gradient-to-br dark:from-[#1b163d] dark:to-[#120f28] dark:border-violet-500/20 p-3.5 text-center shadow-md group transition-colors duration-200">
          <div className="relative h-16 w-full rounded-xl overflow-hidden mb-2.5 bg-surface-2">
            <Image
              src={isDark ? "/images/redesign/sidebar_promo_vibrant.png" : "/images/redesign/sidebar_promo_light.png"}
              alt="Japanese Torii Gate Scenery"
              fill
              loading="eager"
              unoptimized
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, 200px"
            />
          </div>

          <p className="text-[11px] font-semibold text-ink leading-tight mb-2.5">
            Cùng học tiếng Nhật mỗi ngày nhé! 💜
          </p>

          <Link
            href="/dang-nhap"
            className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 py-1.5 text-[11px] font-bold text-white shadow-xs hover:from-violet-500 hover:to-indigo-500 transition active:scale-95"
          >
            Tham gia ngay →
          </Link>
        </div>

        {/* Theme Toggle Switch */}
        <div className="flex items-center justify-between rounded-2xl border border-line bg-surface-2/60 dark:bg-[#17142e] px-3.5 py-2.5 transition-colors duration-200">
          <div className="flex items-center gap-2 text-xs font-semibold text-ink-2">
            {isDark ? (
              <Moon className="w-4 h-4 text-violet-400" />
            ) : (
              <Sun className="w-4 h-4 text-amber-500" />
            )}
            <span>Chế độ tối</span>
          </div>

          {/* Clean toggle switch */}
          <button
            type="button"
            onClick={toggleTheme}
            className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
              isDark ? "bg-violet-600" : "bg-[#DDD6FE]"
            }`}
            role="switch"
            aria-checked={isDark}
            aria-label="Bật tắt chế độ tối"
          >
            <span
              className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                isDark ? "translate-x-4" : "translate-x-0"
              }`}
            />
          </button>
        </div>

        {/* Subtle Japanese Seigaiha Waves Watermark at bottom */}
        <div className="pt-1 opacity-25 pointer-events-none">
          <svg className="w-full h-5 text-violet-400" viewBox="0 0 120 20" preserveAspectRatio="none">
            <path d="M0,20 C10,8 20,8 30,20 C40,8 50,8 60,20 C70,8 80,8 90,20 C100,8 110,8 120,20" fill="none" stroke="currentColor" strokeWidth="1.2" />
            <path d="M0,20 C6,13 14,13 20,20 C26,13 34,13 40,20 C46,13 54,13 60,20 C66,13 74,13 80,20 C86,13 94,13 100,20 C106,13 114,13 120,20" fill="none" stroke="currentColor" strokeWidth="1.2" />
          </svg>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Fixed Sidebar */}
      <aside className="hidden lg:block fixed inset-y-0 left-0 z-30 w-60 lg:w-64">
        {content}
      </aside>

      {/* Mobile / Tablet Drawer */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={onClose}
        >
          <div
            className="fixed inset-y-0 left-0 z-50 w-72 max-w-[85vw] shadow-2xl animate-in slide-in-from-left duration-250"
            onClick={(e) => e.stopPropagation()}
          >
            {content}
          </div>
        </div>
      )}
    </>
  );
}
