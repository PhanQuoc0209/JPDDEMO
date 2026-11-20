"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Bell, Menu, Sparkles, CheckCircle2 } from "lucide-react";

interface TopNavProps {
  onOpenSidebar: () => void;
  onOpenSearch: () => void;
}

export function TopNav({ onOpenSidebar, onOpenSearch }: TopNavProps) {
  const [userName, setUserName] = useState("Phan Quốc");
  const [showNotifications, setShowNotifications] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("manabiman_user");
      if (saved) {
        const u = JSON.parse(saved);
        if (u.name) setUserName(u.name);
      }
    } catch (e) {}
  }, []);

  return (
    <header className="sticky top-0 z-20 flex h-16 w-full items-center justify-between border-b border-line bg-surface/80 px-4 sm:px-6 lg:px-8 backdrop-blur-md">
      {/* Left side: Hamburger button on mobile & Global Search */}
      <div className="flex items-center gap-3 flex-1 max-w-xl">
        <button
          type="button"
          onClick={onOpenSidebar}
          className="lg:hidden p-2 rounded-xl border border-line bg-surface text-ink-2 hover:text-ink hover:bg-surface-2 transition"
          aria-label="Mở thanh điều hướng"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Global Search Bar (Trigger for SearchModal) */}
        <button
          type="button"
          onClick={onOpenSearch}
          className="flex flex-1 items-center justify-between rounded-full border border-line bg-surface-2/70 px-4 py-2 text-xs text-ink-3 hover:border-ai/40 hover:bg-surface-2 transition cursor-pointer shadow-xs group"
        >
          <div className="flex items-center gap-2.5 truncate">
            <Search className="w-4 h-4 text-ink-3 group-hover:text-ai transition" />
            <span className="truncate">Tìm kiếm bài học, từ vựng, ngữ pháp...</span>
          </div>

          <kbd className="hidden sm:inline-block rounded-md border border-line bg-surface px-1.5 py-0.5 font-mono text-[10px] text-ink-3">
            Ctrl + K
          </kbd>
        </button>
      </div>

      {/* Right side: Notifications & User Avatar */}
      <div className="flex items-center gap-3 ml-4">
        {/* Notification Bell */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative grid h-10 w-10 place-items-center rounded-full border border-line bg-surface text-ink-2 hover:border-ai/50 hover:text-ai hover:bg-surface-2 transition cursor-pointer"
            aria-label="Thông báo"
          >
            <Bell className="w-4 h-4" />
            {/* Red dot badge */}
            <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-rose-500 ring-2 ring-surface" />
          </button>

          {/* Notifications Dropdown */}
          {showNotifications && (
            <div
              className="absolute right-0 mt-2 w-80 rounded-2xl border border-line bg-surface p-3 shadow-xl z-50 glass-panel animate-in fade-in zoom-in-95 duration-150"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-line pb-2 mb-2 px-1">
                <span className="text-xs font-bold text-ink">Thông báo mới</span>
                <span className="text-[10px] text-ai font-semibold cursor-pointer">Đánh dấu đã đọc</span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex items-start gap-2.5 p-2 rounded-xl bg-ai-wash/40">
                  <Sparkles className="w-4 h-4 text-ai shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-ink">Chuỗi học 7 ngày liên tiếp! 🔥</p>
                    <p className="text-[11px] text-ink-3 mt-0.5">Bạn được cộng 20 XP vào mục tiêu tuần.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-surface-2 transition">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-ink">Bài 04 Hiragana đã hoàn thành 65%</p>
                    <p className="text-[11px] text-ink-3 mt-0.5">Tiếp tục luyện phản xạ để mở khóa bài tiếp theo.</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* User Profile Avatar */}
        <Link
          href="/dang-nhap"
          className="flex items-center gap-2.5 group cursor-pointer"
          title={`Tài khoản: ${userName}`}
        >
          <div className="relative h-10 w-10 rounded-full overflow-hidden border-2 border-violet-500/60 p-0.5 purple-glow-sm transition group-hover:scale-105 group-hover:border-violet-400">
            <Image
              src="/images/redesign/avatar.png"
              alt="User Avatar"
              fill
              className="rounded-full object-cover"
              sizes="40px"
            />
          </div>
        </Link>
      </div>
    </header>
  );
}
