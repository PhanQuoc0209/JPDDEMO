"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "Trang chủ", jp: "ホーム" },
  { href: "/nhap-mon", label: "Làm quen", jp: "入門" },
  { href: "/han-tu", label: "Hán tự", jp: "漢字" },
  { href: "/tu-vung", label: "Từ vựng", jp: "語彙" },
  { href: "/ngu-phap", label: "Ngữ pháp", jp: "文法" },
  { href: "/shadowing", label: "Shadowing", jp: "音読" },
  { href: "/game", label: "Trò chơi", jp: "ゲーム" },
  { href: "/ghi-nho", label: "Ghi nhớ", jp: "記憶" },
  { href: "/thi", label: "Thi trực tuyến", jp: "試験" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-line bg-surface/85 backdrop-blur-md transition-colors">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 transition-transform hover:scale-105"
        >
          <span className="flex gap-1" aria-hidden="true">
            <span className="genko-cell h-8 w-8 rounded-sm shadow-xs">
              <span className="jp text-sm font-bold" style={{ color: "var(--iro-1)" }}>
                日
              </span>
            </span>
            <span className="genko-cell h-8 w-8 rounded-sm shadow-xs">
              <span className="jp text-sm font-bold" style={{ color: "var(--iro-2)" }}>
                本
              </span>
            </span>
            <span className="genko-cell h-8 w-8 rounded-sm shadow-xs">
              <span className="jp text-sm font-bold" style={{ color: "var(--iro-3)" }}>
                語
              </span>
            </span>
          </span>
          <span className="flex flex-col">
            <span className="font-display text-lg font-bold tracking-tight text-ink sm:text-xl">
              Manabiman
            </span>
            <span className="text-[0.65rem] -mt-1 font-medium text-ink-3">
              Học tiếng Nhật
            </span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3 py-1.5 text-xs font-semibold transition-all rounded-full ${
                  isActive
                    ? "bg-ai-wash text-ai font-bold shadow-xs"
                    : "text-ink-2 hover:bg-surface-2 hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Right Action */}
        <div className="flex items-center gap-2">
          <Link
            href="/dang-nhap"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3.5 py-1.5 text-xs font-semibold text-ink-2 shadow-xs transition hover:border-ai/50 hover:text-ai hover:shadow-[0_2px_8px_-2px_var(--ai)]"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-3.5 w-3.5"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            Đăng nhập
          </Link>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
            className="grid h-9 w-9 place-items-center rounded-lg border border-line text-ink-2 hover:bg-surface-2 lg:hidden cursor-pointer"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5"
            >
              {mobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="border-t border-line bg-surface px-4 py-4 lg:hidden">
          <div className="grid grid-cols-2 gap-2">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex flex-col rounded-xl px-3 py-2 text-xs transition ${
                    isActive
                      ? "bg-ai-wash text-ai font-bold"
                      : "text-ink-2 hover:bg-surface-2"
                  }`}
                >
                  <span className="font-semibold">{link.label}</span>
                  <span className="jp text-[0.68rem] text-ink-3">{link.jp}</span>
                </Link>
              );
            })}
          </div>
          <div className="mt-4 border-t border-line pt-3">
            <Link
              href="/dang-nhap"
              onClick={() => setMobileMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-ai py-2.5 text-xs font-semibold text-surface"
            >
              Đăng nhập tài khoản
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
