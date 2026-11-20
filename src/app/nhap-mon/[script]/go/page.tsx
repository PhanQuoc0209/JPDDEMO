"use client";

import { use, useState, useEffect, useRef } from "react";
import Link from "next/link";
import { HIRAGANA_DATA, KATAKANA_DATA } from "@/data/kana";

interface KanaItem {
  id: number;
  glyph: string;
  romaji: string;
}

export default function LuyenGoPage({ params }: { params: Promise<{ script: string }> }) {
  const { script } = use(params);
  const isHira = script === "hiragana";
  const data = isHira ? HIRAGANA_DATA : KATAKANA_DATA;
  const scriptName = isHira ? "Hiragana" : "Katakana";

  // Flatten all items safely with explicit typing
  const allKana: KanaItem[] = (data.groups as readonly any[]).flatMap((g) =>
    g.rows.flatMap((r: any) => r.items)
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [inputVal, setInputVal] = useState("");
  const [streak, setStreak] = useState(0);
  const [score, setScore] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [isWrong, setIsWrong] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const currentItem = allKana[currentIndex % allKana.length];

  useEffect(() => {
    inputRef.current?.focus();
  }, [currentIndex]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.toLowerCase().trim();
    setInputVal(val);

    const targetRomaji = currentItem.romaji.toLowerCase();
    if (val === targetRomaji) {
      // Correct!
      setIsWrong(false);
      setStreak((s) => s + 1);
      setScore((sc) => sc + 10 + streak * 2);
      setInputVal("");

      // Play sound via Web Speech API
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(currentItem.glyph);
        u.lang = "ja-JP";
        window.speechSynthesis.speak(u);
      }

      // Next random or sequential item
      setCurrentIndex((prev) => (prev + 1) % allKana.length);
    } else if (val.length >= targetRomaji.length) {
      // Wrong attempt
      setIsWrong(true);
      setMistakes((m) => m + 1);
      setStreak(0);
    }
  };

  const handleSkip = () => {
    setStreak(0);
    setInputVal("");
    setIsWrong(false);
    setCurrentIndex((prev) => (prev + 1) % allKana.length);
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:py-12">
      {/* Back button */}
      <div className="mb-6 flex items-center justify-between">
        <Link
          href={`/nhap-mon/${script}/bang-chu`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink-2 hover:text-ai transition"
        >
          <span>←</span> Bảng chữ {scriptName}
        </Link>
        <span className="text-xs text-ink-3">
          Tiến độ: {currentIndex + 1} / {allKana.length}
        </span>
      </div>

      {/* Main Typing Arena */}
      <div className="relative overflow-hidden rounded-3xl border border-line bg-surface p-8 sm:p-12 shadow-sm text-center">
        {/* Streak & Score Bar */}
        <div className="mb-8 flex items-center justify-between text-xs font-semibold text-ink-3">
          <div className="flex items-center gap-2">
            <span>🔥 Chuỗi:</span>
            <span className="font-mono text-base font-bold text-shu">{streak}</span>
          </div>
          <div className="flex items-center gap-2">
            <span>⭐ Điểm:</span>
            <span className="font-mono text-base font-bold text-ai">{score}</span>
          </div>
          <div className="flex items-center gap-2">
            <span>❌ Sai:</span>
            <span className="font-mono text-base font-bold text-ink-3">{mistakes}</span>
          </div>
        </div>

        {/* Big Kana Glyph */}
        <div className="my-6">
          <span className="jp inline-block text-[6rem] sm:text-[8rem] font-bold text-ink leading-none select-none transition-transform hover:scale-105">
            {currentItem?.glyph}
          </span>
          <p className="mt-2 text-xs text-ink-3">
            Gõ romaji tương ứng bằng bàn phím
          </p>
        </div>

        {/* Input Box */}
        <div className="mx-auto max-w-xs">
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={handleChange}
            autoFocus
            placeholder="Gõ romaji..."
            className={`w-full text-center rounded-2xl border-2 px-4 py-3.5 font-mono text-xl font-bold tracking-wider outline-none transition shadow-inner ${
              isWrong
                ? "border-shu bg-shu/10 text-shu animate-shake"
                : "border-line bg-surface-2 text-ink focus:border-ai focus:bg-surface"
            }`}
          />
          {isWrong && (
            <p className="mt-2 text-xs text-shu font-medium">
              Chưa đúng, đáp án là: <strong className="font-mono">{currentItem?.romaji}</strong>
            </p>
          )}
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex justify-center gap-3">
          <button
            type="button"
            onClick={handleSkip}
            className="rounded-full border border-line bg-surface px-4 py-2 text-xs font-medium text-ink-2 hover:border-line-2 transition cursor-pointer"
          >
            Bỏ qua (Tiếp theo) →
          </button>
        </div>
      </div>

      {/* Tip */}
      <div className="mt-6 text-center text-xs text-ink-3">
        💡 Mẹo: Nhìn mặt chữ và gõ ngay lập tức giúp não bộ hình thành phản xạ tự nhiên.
      </div>
    </div>
  );
}
