"use client";

import { useState } from "react";

interface AudioButtonProps {
  text: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function AudioButton({ text, className = "", size = "md" }: AudioButtonProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const playAudio = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();

    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "ja-JP";
    utterance.rate = 0.85;

    utterance.onstart = () => setIsPlaying(true);
    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => setIsPlaying(false);

    window.speechSynthesis.speak(utterance);
  };

  const sizeClasses = {
    sm: "h-7 w-7 text-xs",
    md: "h-9 w-9 text-sm",
    lg: "h-11 w-11 text-base",
  }[size];

  return (
    <button
      type="button"
      onClick={playAudio}
      title={`Nghe phát âm: ${text}`}
      aria-label={`Nghe phát âm: ${text}`}
      className={`grid place-items-center rounded-full border border-line bg-surface text-ink-2 shadow-xs transition hover:border-ai/60 hover:text-ai hover:shadow-[0_2px_8px_-2px_var(--ai)] active:scale-95 cursor-pointer ${sizeClasses} ${className}`}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`h-4 w-4 transition-transform ${isPlaying ? "scale-110 text-ai" : ""}`}
        aria-hidden="true"
      >
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
      </svg>
    </button>
  );
}
