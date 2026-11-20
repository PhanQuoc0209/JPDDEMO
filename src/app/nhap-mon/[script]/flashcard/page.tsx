"use client";

import { use, useState, useEffect, useMemo, useCallback, useRef } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HIRAGANA_DATA, KATAKANA_DATA } from "@/data/kana";
import { AudioButton } from "@/components/AudioButton";
import { BookmarkButton } from "@/components/BookmarkButton";

interface KanaItem {
  id: number;
  glyph: string;
  romaji: string;
  row: string;
  kind: string;
  mnemonic?: {
    keywordVi?: string;
    emoji?: string;
    hint?: string;
    note?: string | null;
  } | null;
}

export default function KanaFlashcardPage({
  params,
}: {
  params: Promise<{ script: string }>;
}) {
  const { script } = use(params);
  const isHira = script === "hiragana";
  const isKata = script === "katakana";

  if (!isHira && !isKata) {
    notFound();
  }

  const data = isHira ? HIRAGANA_DATA : KATAKANA_DATA;
  const scriptName = isHira ? "Hiragana" : "Katakana";
  const scriptJp = isHira ? "ひらがな" : "カタカナ";

  // Flatten all items from groups
  const allKana: KanaItem[] = useMemo(() => {
    return (data.groups as readonly any[]).flatMap((g) =>
      g.rows.flatMap((r: any) =>
        r.items.map((it: any) => ({
          ...it,
          kind: g.kind,
        }))
      )
    );
  }, [data]);

  const [filterKind, setFilterKind] = useState<string>("ALL");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const [autoPlay, setAutoPlay] = useState(false);

  // Filter items
  const items = useMemo(() => {
    let list =
      filterKind === "ALL"
        ? allKana
        : allKana.filter((it) => it.kind === filterKind);

    if (isShuffle) {
      list = [...list].sort(() => 0.5 - Math.random());
    }
    return list;
  }, [allKana, filterKind, isShuffle]);

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

  // Global Keyboard listener for Space, ArrowRight, ArrowLeft
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if user is typing in an input
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
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:py-12">
      {/* Top Header & Breadcrumb */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs font-semibold">
          <Link
            href="/nhap-mon"
            className="text-ink-2 hover:text-ai transition"
          >
            Làm quen
          </Link>
          <span className="text-ink-3">/</span>
          <Link
            href={`/nhap-mon/${script}/bang-chu`}
            className="text-ink-2 hover:text-ai transition"
          >
            Bảng chữ {scriptName}
          </Link>
          <span className="text-ink-3">/</span>
          <span className="text-ai font-bold">Thẻ ghi nhớ</span>
        </div>

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
            title="Xáo trộn thứ tự các thẻ"
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
            title="Tự động lật và chuyển thẻ sau 3.5s"
          >
            <span>{autoPlay ? "⏸ Dừng" : "▶ Tự động"}</span>
          </button>
        </div>
      </div>

      {/* Main Title & Description */}
      <div className="mb-6 text-center">
        <span className="jp text-xs font-bold uppercase tracking-wider text-ai bg-ai-wash px-3 py-1 rounded-full">
          {scriptJp} · THẺ GHI NHỚ
        </span>
        <h1 className="mt-3 text-2xl font-bold text-ink sm:text-3xl">
          Ôn tập thẻ {scriptName}
        </h1>
        <p className="mt-1 text-xs text-ink-2">
          Chạm thẻ hoặc bấm <kbd className="rounded border border-line bg-surface-2 px-1.5 py-0.5 font-mono text-[11px] font-bold text-ink">Space</kbd> để lật mặt • Bấm <kbd className="rounded border border-line bg-surface-2 px-1.5 py-0.5 font-mono text-[11px] font-bold text-ink">→</kbd> để qua chữ khác.
        </p>

        {/* Filter Tabs */}
        <div className="mt-5 flex flex-wrap justify-center gap-1.5">
          {[
            { key: "ALL", label: "Tất cả", count: allKana.length },
            { key: "MAIN", label: "Chữ thuần", count: 46 },
            { key: "VOICED", label: "Âm đục (Tenteng/Maru)", count: 25 },
            { key: "COMBINATION", label: "Âm ghép (Ảo âm)", count: isHira ? 32 : 30 },
          ].map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={(e) => {
                e.currentTarget.blur();
                setFilterKind(tab.key);
                setCurrentIndex(0);
                setIsFlipped(false);
              }}
              className={`rounded-full px-3.5 py-1 text-xs font-semibold transition cursor-pointer ${
                filterKind === tab.key
                  ? "bg-ai text-surface shadow-xs"
                  : "border border-line bg-surface text-ink-2 hover:bg-surface-2"
              }`}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </div>
      </div>

      {/* 3D Flashcard Section */}
      <div className="perspective-1000 my-4">
        <div
          onClick={handleFlip}
          className="relative h-[25rem] sm:h-[28rem] w-full cursor-pointer select-none"
          role="button"
          tabIndex={0}
          aria-label="Thẻ ghi nhớ, bấm để lật"
        >
          {/* Flipper Container with 3D preserve */}
          <div
            className={`relative h-full w-full transition-transform duration-500 preserve-3d ${
              isFlipped ? "rotate-y-180" : ""
            }`}
          >
            {/* FRONT FACE */}
            <div className="card-face rounded-3xl border border-line bg-surface p-6 sm:p-8 shadow-sm flex flex-col justify-between items-center text-center">
              {/* Card top toolbar */}
              <div className="w-full flex items-center justify-between text-xs text-ink-3">
                <span className="font-mono font-bold text-xs">
                  Hàng {currentItem?.row} • {currentItem?.kind === "MAIN" ? "Chữ thuần" : currentItem?.kind === "VOICED" ? "Âm đục" : "Âm ghép"}
                </span>
                <div
                  className="flex items-center gap-1.5"
                  onClick={(e) => e.stopPropagation()}
                >
                  <BookmarkButton
                    id={currentItem?.id || 0}
                    type="kanji"
                    label={`${currentItem?.glyph} (${currentItem?.romaji})`}
                  />
                  <AudioButton text={currentItem?.glyph || ""} />
                </div>
              </div>

              {/* Big Kana Glyph in Genko Frame */}
              <div className="my-auto py-4">
                <span className="jp block text-[7rem] sm:text-[9rem] font-bold text-ink leading-none transition-transform hover:scale-105">
                  {currentItem?.glyph}
                </span>
                <p className="mt-4 text-xs font-medium text-ink-3">
                  (Bấm vào thẻ hoặc phím Space để xem mẹo nhớ)
                </p>
              </div>

              {/* Card footer prompt */}
              <div className="flex items-center gap-1.5 text-xs font-bold text-ai bg-ai-wash px-4 py-2 rounded-full">
                <span>Xem hình ảnh liên tưởng & romaji</span>
                <span>▾</span>
              </div>
            </div>

            {/* BACK FACE */}
            <div className="card-face rotate-y-180 rounded-3xl border-2 border-ai/50 bg-surface p-6 sm:p-8 shadow-md flex flex-col justify-between items-center text-center">
              {/* Back top bar */}
              <div className="w-full flex items-center justify-between text-xs text-ink-3">
                <span className="font-mono font-bold text-xs text-ai">
                  {currentItem?.glyph} • Hàng {currentItem?.row}
                </span>
                <div
                  className="flex items-center gap-1.5"
                  onClick={(e) => e.stopPropagation()}
                >
                  <AudioButton text={currentItem?.glyph || ""} />
                </div>
              </div>

              {/* Main Reading & Mnemonic Content */}
              <div className="my-auto py-2 w-full max-w-md">
                {/* Romaji */}
                <div className="mb-4">
                  <span className="font-mono text-5xl sm:text-6xl font-extrabold text-ink tracking-wide">
                    {currentItem?.romaji}
                  </span>
                  <span className="ml-2 text-xs font-semibold text-ink-3 uppercase">
                    (romaji)
                  </span>
                </div>

                {/* Mnemonic / Hình ảnh liên tưởng */}
                {currentItem?.mnemonic ? (
                  <div className="rounded-2xl border border-line bg-surface-2 p-4 text-left sm:p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">{currentItem.mnemonic.emoji || "💡"}</span>
                      <strong className="text-xs sm:text-sm font-bold text-ink">
                        {currentItem.mnemonic.keywordVi || "Mẹo nhớ mặt chữ"}
                      </strong>
                    </div>
                    {currentItem.mnemonic.hint && (
                      <p className="text-xs text-ink-2 leading-relaxed whitespace-pre-line">
                        {currentItem.mnemonic.hint}
                      </p>
                    )}
                    {currentItem.mnemonic.note && (
                      <p className="mt-2 text-[11px] font-medium text-shu bg-shu/10 px-2.5 py-1 rounded-lg">
                        ⚠️ Chú ý: {currentItem.mnemonic.note}
                      </p>
                    )}
                  </div>
                ) : (
                  <div className="rounded-2xl border border-line bg-surface-2 p-4 text-xs text-ink-2">
                    <p>Phát âm âm thanh: <strong className="font-mono font-bold text-ai">{currentItem?.romaji}</strong></p>
                    <p className="mt-1 text-ink-3">Thuộc bảng chữ {scriptName} tiếng Nhật</p>
                  </div>
                )}
              </div>

              {/* Back footer flip back prompt */}
              <div className="flex items-center gap-1.5 text-xs font-bold text-ink-2 hover:text-ai transition bg-surface-2 px-4 py-2 rounded-full">
                <span>▴ Lật về mặt chữ</span>
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
          <span>←</span> Chữ trước
        </button>

        <button
          type="button"
          onClick={(e) => {
            e.currentTarget.blur();
            handleFlip();
          }}
          className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-4 py-2.5 text-xs font-semibold text-ink-2 transition hover:border-ai/50 hover:text-ai active:scale-95 cursor-pointer"
        >
          <span>🔄</span> {isFlipped ? "Lật về mặt chữ" : "Lật xem mẹo nhớ"} (Space)
        </button>

        <button
          type="button"
          onClick={(e) => {
            e.currentTarget.blur();
            handleNext();
          }}
          className="inline-flex items-center gap-2 rounded-full bg-ai px-5 py-2.5 text-xs font-semibold text-surface shadow-xs transition hover:bg-ai-2 active:scale-95 cursor-pointer"
        >
          <span>Chữ tiếp theo ({nextItem?.glyph})</span>
          <span>→</span>
        </button>
      </div>

      {/* Quick Character Strip / Ô chữ chọn nhanh (Cho phép bấm trực tiếp vào ô chữ tiếp theo) */}
      <div className="mt-8 rounded-3xl border border-line bg-surface p-4 sm:p-5 shadow-xs">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-xs font-bold text-ink flex items-center gap-1.5">
            <span>🔤</span> Danh sách ô chữ (Bấm vào bất kỳ ô chữ nào để xem):
          </span>
          <span className="font-mono text-xs font-bold text-ai">
            {currentIndex + 1} / {items.length}
          </span>
        </div>

        <div className="flex flex-wrap gap-1.5 max-h-44 overflow-y-auto p-1">
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
                className={`grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-xl font-bold text-sm transition cursor-pointer active:scale-95 ${
                  isCurrent
                    ? "bg-ai text-surface shadow-xs scale-105 ring-2 ring-ai/40"
                    : "border border-line bg-surface-2 text-ink hover:border-ai/50 hover:bg-surface hover:text-ai"
                }`}
                title={`Chữ ${it.glyph} (${it.romaji})`}
              >
                <span className="jp text-base leading-none">{it.glyph}</span>
                <span className="font-mono text-[9px] font-normal opacity-75">{it.romaji}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Keyboard Shortcuts Notice */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-[11px] text-ink-3 border-t border-line pt-4">
        <span>Phím tắt hỗ trợ:</span>
        <span>
          <kbd className="rounded border border-line bg-surface px-1.5 py-0.5 font-mono text-[10px] font-bold text-ink">Space</kbd> : Lật thẻ
        </span>
        <span>
          <kbd className="rounded border border-line bg-surface px-1.5 py-0.5 font-mono text-[10px] font-bold text-ink">→</kbd> : Qua chữ khác
        </span>
        <span>
          <kbd className="rounded border border-line bg-surface px-1.5 py-0.5 font-mono text-[10px] font-bold text-ink">←</kbd> : Quay lại chữ trước
        </span>
      </div>

      {/* Bottom Switcher */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href={`/nhap-mon/${isHira ? "katakana" : "hiragana"}/flashcard`}
          className="rounded-full border border-line bg-surface px-4 py-2 text-xs font-medium text-ink-2 hover:border-ai/50 hover:text-ai transition"
        >
          Chuyển sang ôn thẻ {isHira ? "Katakana" : "Hiragana"} →
        </Link>
        <Link
          href={`/nhap-mon/${script}/go`}
          className="rounded-full border border-line bg-surface px-4 py-2 text-xs font-medium text-ink-2 hover:border-ai/50 hover:text-ai transition"
        >
          Chuyển sang Luyện gõ phản xạ →
        </Link>
      </div>
    </div>
  );
}
