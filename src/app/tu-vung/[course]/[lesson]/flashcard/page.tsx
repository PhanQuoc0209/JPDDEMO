"use client";

import { use, useState, useEffect, useMemo, useCallback, useRef } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { VOCABULARY_DATA, VocabItem } from "@/data/vocabulary";
import { COURSES } from "@/data/courses";
import { AudioButton } from "@/components/AudioButton";
import { BookmarkButton } from "@/components/BookmarkButton";

export default function TuVungFlashcardPage({
  params,
}: {
  params: Promise<{ course: string; lesson: string }>;
}) {
  const { course, lesson } = use(params);
  const lessonData = VOCABULARY_DATA[lesson];
  const courseData = COURSES.find((c) => c.id === course);

  if (!lessonData || !lessonData.items || lessonData.items.length === 0) {
    notFound();
  }

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const [autoPlay, setAutoPlay] = useState(false);

  const items = useMemo(() => {
    let list = lessonData.items;
    if (isShuffle) {
      list = [...list].sort(() => 0.5 - Math.random());
    }
    return list;
  }, [lessonData.items, isShuffle]);

  const itemsRef = useRef(items);
  itemsRef.current = items;

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

  // Keyboard navigation
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

  // Auto-play timer
  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      handleNext();
    }, 3500);
    return () => clearInterval(timer);
  }, [autoPlay, handleNext]);

  return (
    <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 lg:py-12">
      {/* Top Header */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <Link
          href={`/tu-vung/${course}/${lesson}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink-2 hover:text-ai transition"
        >
          <span>←</span> Danh sách bài học
        </Link>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={(e) => {
              e.currentTarget.blur();
              setIsShuffle((s) => !s);
            }}
            className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold transition cursor-pointer ${
              isShuffle
                ? "bg-ai text-surface shadow-xs"
                : "border border-line bg-surface text-ink-2 hover:bg-surface-2"
            }`}
            title="Xáo trộn thứ tự từ vựng"
          >
            <span>🔀</span> Xáo trộn
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.currentTarget.blur();
              setAutoPlay((a) => !a);
            }}
            className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold transition cursor-pointer ${
              autoPlay
                ? "bg-shu text-surface shadow-xs"
                : "border border-line bg-surface text-ink-2 hover:bg-surface-2"
            }`}
            title="Tự động lật và chuyển thẻ"
          >
            <span>{autoPlay ? "⏸ Dừng" : "▶ Tự động"}</span>
          </button>
        </div>
      </div>

      {/* Title */}
      <div className="mb-6 text-center">
        <span className="text-xs font-bold uppercase tracking-wider text-ai bg-ai-wash px-3 py-1 rounded-full">
          {courseData?.code} · TỪ VỰNG THẺ GHI NHỚ
        </span>
        <h1 className="mt-3 text-2xl font-bold text-ink sm:text-3xl">
          {lessonData.title}
        </h1>
        <p className="mt-1 text-xs text-ink-3">
          Chạm thẻ hoặc phím <kbd className="rounded border border-line bg-surface-2 px-1.5 py-0.5 font-mono text-[11px] font-bold text-ink">Space</kbd> để lật xem nghĩa • Phím <kbd className="rounded border border-line bg-surface-2 px-1.5 py-0.5 font-mono text-[11px] font-bold text-ink">→</kbd> để qua từ khác.
        </p>
      </div>

      {/* 3D Flashcard Section */}
      <div className="perspective-1000 my-4">
        <div
          onClick={handleFlip}
          className="relative h-[25rem] sm:h-[28rem] w-full cursor-pointer select-none"
          role="button"
          tabIndex={0}
          aria-label="Thẻ từ vựng, bấm để lật"
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
                  {currentItem?.pos || "Từ vựng"}
                </span>
                <div
                  className="flex items-center gap-1.5"
                  onClick={(e) => e.stopPropagation()}
                >
                  <BookmarkButton
                    id={currentItem?.id}
                    type="vocab"
                    label={`${currentItem?.word} (${currentItem?.meaning})`}
                  />
                  <AudioButton text={currentItem?.reading || currentItem?.word} />
                </div>
              </div>

              <div className="my-auto py-4">
                <span className="jp block text-5xl sm:text-6xl font-bold text-ink leading-tight transition-transform hover:scale-105">
                  {currentItem?.word}
                </span>
                {currentItem?.reading !== currentItem?.word && (
                  <span className="jp mt-2 block text-lg font-medium text-ink-3">
                    {currentItem?.reading}
                  </span>
                )}
                <p className="mt-6 text-xs text-ink-3 font-medium">
                  (Bấm vào thẻ hoặc phím Space để xem nghĩa)
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-bold text-ai bg-ai-wash px-4 py-2 rounded-full">
                <span>Xem nghĩa tiếng Việt</span>
                <span>▾</span>
              </div>
            </div>

            {/* BACK SIDE */}
            <div className="card-face rotate-y-180 rounded-3xl border-2 border-ai/50 bg-surface p-6 sm:p-8 shadow-md flex flex-col justify-between items-center text-center">
              <div className="w-full flex items-center justify-between text-xs text-ink-3">
                <span className="font-mono font-bold text-xs text-ai">
                  {currentItem?.pos || "Từ vựng"}
                </span>
                <div
                  className="flex items-center gap-1.5"
                  onClick={(e) => e.stopPropagation()}
                >
                  <AudioButton text={currentItem?.reading || currentItem?.word} />
                </div>
              </div>

              <div className="my-auto py-4 w-full max-w-md">
                <div className="mb-2">
                  <span className="font-mono text-base font-semibold text-ink-3">
                    [{currentItem?.romaji}]
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-ai mb-4">
                  {currentItem?.meaning}
                </h3>
                <div className="rounded-2xl border border-line bg-surface-2 p-3 text-xs text-ink-2">
                  <p className="font-semibold text-ink">Cách đọc Hiragana:</p>
                  <p className="jp text-lg font-bold text-ink mt-0.5">
                    {currentItem?.reading}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-bold text-ink-2 hover:text-ai transition bg-surface-2 px-4 py-2 rounded-full">
                <span>▴ Lật về từ tiếng Nhật</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="mt-6 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={(e) => {
            e.currentTarget.blur();
            handlePrev();
          }}
          className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-4 py-2.5 text-xs font-semibold text-ink-2 transition hover:border-line-2 hover:bg-surface-2 active:scale-95 cursor-pointer"
        >
          <span>←</span> Từ trước
        </button>

        <button
          type="button"
          onClick={(e) => {
            e.currentTarget.blur();
            handleFlip();
          }}
          className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-4 py-2.5 text-xs font-semibold text-ink-2 transition hover:border-ai/50 hover:text-ai active:scale-95 cursor-pointer"
        >
          <span>🔄</span> {isFlipped ? "Lật về từ vựng" : "Lật xem nghĩa"} (Space)
        </button>

        <button
          type="button"
          onClick={(e) => {
            e.currentTarget.blur();
            handleNext();
          }}
          className="inline-flex items-center gap-2 rounded-full bg-ai px-5 py-2.5 text-xs font-semibold text-surface shadow-xs transition hover:bg-ai-2 active:scale-95 cursor-pointer"
        >
          <span>Từ tiếp theo ({nextItem?.word})</span>
          <span>→</span>
        </button>
      </div>

      {/* Quick Vocab Strip */}
      <div className="mt-8 rounded-3xl border border-line bg-surface p-4 sm:p-5 shadow-xs">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-xs font-bold text-ink flex items-center gap-1.5">
            <span>📚</span> Danh sách từ vựng bài học (Bấm vào từ bất kỳ để xem):
          </span>
          <span className="font-mono text-xs font-bold text-ai">
            {currentIndex + 1} / {items.length}
          </span>
        </div>

        <div className="flex flex-wrap gap-1.5 max-h-40 overflow-y-auto p-1">
          {items.map((it, idx) => {
            const isCurrent = (currentIndex % items.length) === idx;
            return (
              <button
                key={it.id || idx}
                type="button"
                onClick={(e) => {
                  e.currentTarget.blur();
                  setIsFlipped(false);
                  setCurrentIndex(idx);
                }}
                className={`rounded-xl px-3 py-1.5 text-xs font-medium transition cursor-pointer active:scale-95 ${
                  isCurrent
                    ? "bg-ai text-surface shadow-xs scale-105 ring-2 ring-ai/40 font-bold"
                    : "border border-line bg-surface-2 text-ink hover:border-ai/50 hover:bg-surface hover:text-ai"
                }`}
                title={`${it.word}: ${it.meaning}`}
              >
                <span className="jp font-bold">{it.word}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Shortcuts */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-[11px] text-ink-3 border-t border-line pt-4">
        <span>Phím tắt hỗ trợ:</span>
        <span>
          <kbd className="rounded border border-line bg-surface px-1.5 py-0.5 font-mono text-[10px] font-bold text-ink">Space</kbd> : Lật thẻ
        </span>
        <span>
          <kbd className="rounded border border-line bg-surface px-1.5 py-0.5 font-mono text-[10px] font-bold text-ink">→</kbd> : Qua từ khác
        </span>
        <span>
          <kbd className="rounded border border-line bg-surface px-1.5 py-0.5 font-mono text-[10px] font-bold text-ink">←</kbd> : Quay lại từ trước
        </span>
      </div>
    </div>
  );
}
