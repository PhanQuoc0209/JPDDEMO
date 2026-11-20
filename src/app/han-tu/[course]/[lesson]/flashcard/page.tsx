"use client";

import { use, useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { KANJI_DATA } from "@/data/kanji";
import { AudioButton } from "@/components/AudioButton";
import { BookmarkButton } from "@/components/BookmarkButton";

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
  const itemsRef = useRef(items);
  itemsRef.current = items;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const currentItem = items[currentIndex % items.length] || items[0];
  const nextItem = items[(currentIndex + 1) % items.length];

  const handleNext = useCallback(() => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % itemsRef.current.length);
  }, []);

  const handlePrev = useCallback(() => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + itemsRef.current.length) % itemsRef.current.length);
  }, []);

  const handleFlip = useCallback(() => {
    setIsFlipped((f) => !f);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeTag = document.activeElement?.tagName.toLowerCase();
      if (activeTag === "input" || activeTag === "textarea") {
        return;
      }

      if (e.code === "Space" || e.key === " " || e.key === "Spacebar") {
        e.preventDefault();
        setIsFlipped((f) => !f);
      } else if (e.code === "ArrowRight" || e.key === "ArrowRight") {
        e.preventDefault();
        handleNext();
      } else if (e.code === "ArrowLeft" || e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrev();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

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
          onClick={handleFlip}
          className="relative h-[25rem] sm:h-[28rem] w-full cursor-pointer select-none"
          role="button"
          tabIndex={0}
          aria-label="Thẻ Hán tự, bấm để lật"
        >
          <div
            className={`relative h-full w-full transition-transform duration-500 preserve-3d ${
              isFlipped ? "rotate-y-180" : ""
            }`}
          >
            {/* FRONT SIDE */}
            <div className="card-face rounded-3xl border border-line bg-surface p-6 sm:p-8 shadow-sm flex flex-col justify-between items-center text-center">
              <div className="w-full flex items-center justify-between text-xs text-ink-3">
                <span className="font-mono font-bold text-xs">
                  {currentItem.hanViet}
                </span>
                <div
                  className="flex items-center gap-1.5"
                  onClick={(e) => e.stopPropagation()}
                >
                  <BookmarkButton
                    id={currentItem.glyph}
                    type="kanji"
                    label={`${currentItem.glyph} (${currentItem.hanViet})`}
                  />
                  <AudioButton text={currentItem.glyph} />
                </div>
              </div>

              <div className="my-auto py-4">
                <span className="jp block text-[7rem] sm:text-[9rem] font-bold text-ink leading-none transition-transform hover:scale-105">
                  {currentItem.glyph}
                </span>
                <p className="mt-4 text-xs font-medium text-ink-3">
                  (Bấm vào thẻ hoặc phím Space để xem âm Hán Việt & nghĩa)
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-bold text-ai bg-ai-wash px-4 py-2 rounded-full">
                <span>Xem âm Hán Việt & cách đọc</span>
                <span>▾</span>
              </div>
            </div>

            {/* BACK SIDE */}
            <div className="card-face rotate-y-180 rounded-3xl border-2 border-ai/50 bg-surface p-6 sm:p-8 shadow-md flex flex-col justify-between items-center text-center">
              <div className="w-full flex items-center justify-between text-xs text-ink-3">
                <span className="font-mono font-bold text-xs text-ai">
                  {currentItem.glyph}
                </span>
                <div
                  className="flex items-center gap-1.5"
                  onClick={(e) => e.stopPropagation()}
                >
                  <AudioButton text={currentItem.glyph} />
                </div>
              </div>

              <div className="my-auto w-full max-w-sm">
                <div>
                  <span className="jp text-3xl font-bold text-ink">
                    {currentItem.glyph}
                  </span>
                  <h3 className="mt-1 text-2xl font-extrabold text-shu uppercase tracking-wider">
                    {currentItem.hanViet}
                  </h3>
                  <p className="mt-1 text-sm text-ink-2 font-medium">
                    {currentItem.meaning}
                  </p>
                </div>

                <div className="my-4 space-y-2 text-left border-y border-line py-3">
                  {currentItem.kunyomi && currentItem.kunyomi.length > 0 && (
                    <div>
                      <span className="font-mono text-[11px] font-bold text-ink-3 block mb-1">
                        Kunyomi:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {currentItem.kunyomi.map((k) => (
                          <span
                            key={k}
                            className="kana rounded-full bg-surface-2 px-2.5 py-0.5 text-xs text-ink"
                          >
                            {k}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {currentItem.onyomi && currentItem.onyomi.length > 0 && (
                    <div>
                      <span className="font-mono text-[11px] font-bold text-ink-3 block mb-1">
                        Onyomi:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {currentItem.onyomi.map((o) => (
                          <span
                            key={o}
                            className="kana rounded-full bg-ai-wash px-2.5 py-0.5 text-xs font-bold text-ai"
                          >
                            {o}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-bold text-ink-2 hover:text-ai transition bg-surface-2 px-4 py-2 rounded-full">
                <span>▴ Lật về mặt chữ</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between gap-3 mt-6">
        <button
          type="button"
          onClick={(e) => {
            e.currentTarget.blur();
            handlePrev();
          }}
          className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-4 py-2.5 text-xs font-semibold text-ink-2 hover:border-line-2 hover:bg-surface-2 active:scale-95 transition cursor-pointer"
        >
          <span>←</span> Chữ trước
        </button>

        <button
          type="button"
          onClick={(e) => {
            e.currentTarget.blur();
            handleFlip();
          }}
          className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-4 py-2.5 text-xs font-semibold text-ink-2 hover:border-ai/50 hover:text-ai active:scale-95 transition cursor-pointer"
        >
          <span>🔄</span> {isFlipped ? "Lật về chữ Hán" : "Lật xem âm nghĩa"} (Space)
        </button>

        <button
          type="button"
          onClick={(e) => {
            e.currentTarget.blur();
            handleNext();
          }}
          className="inline-flex items-center gap-2 rounded-full bg-ai px-5 py-2.5 text-xs font-semibold text-surface hover:bg-ai-2 active:scale-95 transition cursor-pointer shadow-xs"
        >
          <span>Chữ tiếp theo ({nextItem?.glyph})</span>
          <span>→</span>
        </button>
      </div>

      {/* Quick Kanji Strip */}
      <div className="mt-8 rounded-3xl border border-line bg-surface p-4 sm:p-5 shadow-xs">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-xs font-bold text-ink flex items-center gap-1.5">
            <span>漢</span> Danh sách chữ Hán bài học (Bấm vào ô chữ bất kỳ để xem):
          </span>
          <span className="font-mono text-xs font-bold text-ai">
            {currentIndex + 1} / {items.length}
          </span>
        </div>

        <div className="flex flex-wrap gap-2 max-h-40 overflow-y-auto p-1">
          {items.map((it, idx) => {
            const isCurrent = (currentIndex % items.length) === idx;
            return (
              <button
                key={it.glyph || idx}
                type="button"
                onClick={(e) => {
                  e.currentTarget.blur();
                  setIsFlipped(false);
                  setCurrentIndex(idx);
                }}
                className={`grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-xl font-bold text-base transition cursor-pointer active:scale-95 ${
                  isCurrent
                    ? "bg-ai text-surface shadow-xs scale-105 ring-2 ring-ai/40"
                    : "border border-line bg-surface-2 text-ink hover:border-ai/50 hover:bg-surface hover:text-ai"
                }`}
                title={`${it.glyph} (${it.hanViet})`}
              >
                <span className="jp">{it.glyph}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-6 text-center text-xs text-ink-3">
        ⌨️ Phím tắt: [← / →] chuyển chữ · [Space] lật thẻ
      </div>
    </div>
  );
}
