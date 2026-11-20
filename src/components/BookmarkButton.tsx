"use client";

import { useEffect, useState } from "react";

interface BookmarkButtonProps {
  id: string | number;
  type: "kanji" | "vocab" | "grammar";
  label: string;
  className?: string;
}

export function BookmarkButton({ id, type, label, className = "" }: BookmarkButtonProps) {
  const [isSaved, setIsSaved] = useState(false);
  const key = `manabiman_saved_${type}_${id}`;

  useEffect(() => {
    setIsSaved(localStorage.getItem(key) === "true");
  }, [key]);

  const toggleBookmark = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    const next = !isSaved;
    setIsSaved(next);
    if (next) {
      localStorage.setItem(key, "true");
      // Add to bookmarks index list
      const indexKey = "manabiman_saved_index";
      const current = JSON.parse(localStorage.getItem(indexKey) || "[]");
      if (!current.some((item: any) => item.id === id && item.type === type)) {
        current.push({ id, type, label, savedAt: Date.now() });
        localStorage.setItem(indexKey, JSON.stringify(current));
      }
    } else {
      localStorage.removeItem(key);
      const indexKey = "manabiman_saved_index";
      const current = JSON.parse(localStorage.getItem(indexKey) || "[]");
      const updated = current.filter((item: any) => !(item.id === id && item.type === type));
      localStorage.setItem(indexKey, JSON.stringify(updated));
    }
  };

  return (
    <button
      type="button"
      onClick={toggleBookmark}
      title={isSaved ? "Đã ghi nhớ (bấm để bỏ)" : "Đánh dấu chữ hay quên để ôn lại"}
      aria-label={isSaved ? "Đã ghi nhớ" : "Đánh dấu ghi nhớ"}
      className={`grid h-8 w-8 place-items-center rounded-full border transition active:scale-95 cursor-pointer ${
        isSaved
          ? "border-shu bg-shu/10 text-shu"
          : "border-line bg-surface text-ink-3 hover:border-line-2 hover:text-ink-2"
      } ${className}`}
    >
      <svg
        viewBox="0 0 24 24"
        fill={isSaved ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
        aria-hidden="true"
      >
        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
      </svg>
    </button>
  );
}
