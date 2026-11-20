"use client";

import { use, useState, useEffect } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { KANJI_DATA } from "@/data/kanji";
import { AudioButton } from "@/components/AudioButton";

export default function KanjiFlashcardPage({
  params,
}: {
  params: Promise<{ course: string; lesson: string }>;
}) {
  const { course, lesson } = use(params);
  const lessonData = KANJI_DATA[lesson];

  if (!lessonData || !lessonData.items || lessonData.items.length === 0) {
    notFound();
  }

  const items = lessonData.items;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const currentItem = items[currentIndex];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        e.preventDefault();
        setIsFlipped((f) => !f);
      } else if (e.code === "ArrowRight") {
        e.preventDefault();
        handleNext();
      } else if (e.code === "ArrowLeft") {
        e.preventDefault();
        handlePrev();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((i) => (i + 1) % items.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((i) => (i - 1 + items.length) % items.length);
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 lg:py-12">
      {/* Top bar */}
      <div className="mb-6 flex items-center justify-between">
        <Link
          href={`/han-tu/${course}/${lesson}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink-2 hover:text-ai transition"
        >
          <span>←</span> Quay lại bài học
        </Link>
        <span className="font-mono text-xs font-bold text-ink-3">
          {currentIndex + 1} / {items.length}
        </span>
      </div>

      {/* 3D Flashcard Container */}
      <div className="perspective-1000 my-6">
        <div
          onClick={() => setIsFlipped(!isFlipped)}
          className={`relative min-h-[22rem] sm:min-h-[26rem] w-full cursor-pointer rounded-3xl border border-line bg-surface p-8 shadow-md transition-all duration-500 preserve-3d flex flex-col justify-between items-center text-center ${
            isFlipped ? "rotate-y-180" : ""
          }`}
        >
          {!isFlipped ? (
            /* Front Side */
            <div className="flex h-full w-full flex-col items-center justify-between">
              <div className="w-full flex justify-end">
                <AudioButton text={currentItem.glyph} />
              </div>

              <div className="my-auto">
                <span className="jp text-[6.5rem] sm:text-[8rem] font-bold text-ink leading-none select-none">
                  {currentItem.glyph}
                </span>
                <p className="mt-4 text-xs text-ink-3">
                  (Bấm vào thẻ hoặc phím Cách để lật)
                </p>
              </div>

              <div className="text-xs font-semibold text-ai">
                Xem nghĩa & cách đọc ▾
              </div>
            </div>
          ) : (
            /* Back Side */
            <div className="flex h-full w-full flex-col items-center justify-between rotate-y-180">
              <div>
                <span className="jp text-3xl font-bold text-ink">
                  {currentItem.glyph}
                </span>
                <h3 className="mt-1 text-2xl font-bold text-shu uppercase tracking-wider">
                  {currentItem.hanViet}
                </h3>
                <p className="mt-1 text-sm text-ink-2 font-medium">
                  {currentItem.meaning}
                </p>
              </div>

              <div className="my-auto space-y-3 w-full max-w-sm text-left border-y border-line py-4">
                {currentItem.kunyomi && currentItem.kunyomi.length > 0 && (
                  <div>
                    <span className="font-mono text-xs font-bold text-ink-3 block mb-1">
                      Kunyomi:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {currentItem.kunyomi.map((k) => (
                        <span
                          key={k}
                          className="kana rounded-full bg-surface-2 px-3 py-1 text-xs text-ink"
                        >
                          {k}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {currentItem.onyomi && currentItem.onyomi.length > 0 && (
                  <div>
                    <span className="font-mono text-xs font-bold text-ink-3 block mb-1">
                      Onyomi:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {currentItem.onyomi.map((o) => (
                        <span
                          key={o}
                          className="kana rounded-full bg-ai-wash px-3 py-1 text-xs font-bold text-ai"
                        >
                          {o}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="text-xs text-ink-3">
                Bấm để lật lại mặt trước ▴
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between gap-4 mt-6">
        <button
          type="button"
          onClick={handlePrev}
          className="flex-1 rounded-full border border-line bg-surface py-3 text-xs font-semibold text-ink-2 hover:border-ai/50 hover:text-ai transition cursor-pointer"
        >
          ← Chữ trước
        </button>
        <button
          type="button"
          onClick={() => setIsFlipped(!isFlipped)}
          className="rounded-full bg-surface-2 px-6 py-3 text-xs font-semibold text-ink hover:bg-line transition cursor-pointer"
        >
          Lật thẻ
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="flex-1 rounded-full bg-ai py-3 text-xs font-semibold text-surface hover:bg-ai-2 transition cursor-pointer"
        >
          Chữ sau →
        </button>
      </div>

      <div className="mt-4 text-center text-xs text-ink-3">
        ⌨️ Phím tắt: [← / →] chuyển chữ · [Dấu cách] lật thẻ
      </div>
    </div>
  );
}
