"use client";

import { use, useState, useEffect, useRef } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SHADOWING_DATA } from "@/data/shadowing";
import { AudioButton } from "@/components/AudioButton";

export default function ShadowingPlayerPage({
  params,
}: {
  params: Promise<{ lesson: string }>;
}) {
  const { lesson } = use(params);
  const lessonData = SHADOWING_DATA[lesson];

  if (!lessonData || !lessonData.lines) {
    notFound();
  }

  const [activeLine, setActiveLine] = useState(0);
  const [isPlayingAll, setIsPlayingAll] = useState(false);
  const [rate, setRate] = useState(0.85);
  const [showVi, setShowVi] = useState(true);

  const lines = lessonData.lines;
  const isPlayingRef = useRef(isPlayingAll);
  isPlayingRef.current = isPlayingAll;

  // Play line audio
  const playLineAudio = (index: number, onFinish?: () => void) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      onFinish?.();
      return;
    }

    window.speechSynthesis.cancel();
    const jpText = lines[index]?.[0] || "";
    // Clean speaker prefix e.g. "A："
    const cleanText = jpText.replace(/^[A-Z]：/, "").trim();

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = "ja-JP";
    utterance.rate = rate;

    utterance.onend = () => {
      onFinish?.();
    };
    utterance.onerror = () => {
      onFinish?.();
    };

    window.speechSynthesis.speak(utterance);
  };

  const handleLineClick = (idx: number) => {
    setIsPlayingAll(false);
    window.speechSynthesis.cancel();
    setActiveLine(idx);
    playLineAudio(idx);
  };

  const startPlayAll = () => {
    setIsPlayingAll(true);
    let cur = activeLine;

    const step = () => {
      if (!isPlayingRef.current) return;
      playLineAudio(cur, () => {
        if (!isPlayingRef.current) return;
        if (cur + 1 < lines.length) {
          cur += 1;
          setActiveLine(cur);
          setTimeout(step, 600); // 600ms breath gap between lines
        } else {
          setIsPlayingAll(false);
        }
      });
    };

    step();
  };

  const stopPlayAll = () => {
    setIsPlayingAll(false);
    if (typeof window !== "undefined") {
      window.speechSynthesis.cancel();
    }
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:py-12">
      {/* Top Breadcrumb */}
      <div className="mb-6 flex items-center justify-between">
        <Link
          href="/shadowing"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink-2 hover:text-ai transition"
        >
          <span>←</span> Tất cả bài Shadowing
        </Link>
        <span className="font-mono text-xs text-ink-3">
          {lines.length} câu thoại
        </span>
      </div>

      {/* Banner */}
      <div className="rise mb-8 rounded-3xl border border-line bg-surface p-6 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="rounded-full bg-ai-wash px-2.5 py-0.5 text-xs font-semibold text-ai">
                {lessonData.lesson.toUpperCase()}
              </span>
              <span className="text-xs text-ink-3">·</span>
              <span className="text-xs text-ink-2">{lessonData.topic}</span>
            </div>
            <h1 className="text-2xl font-bold text-ink sm:text-3xl">
              {lessonData.title}
            </h1>
          </div>

          {/* Player controls */}
          <div className="flex flex-wrap items-center gap-2">
            {!isPlayingAll ? (
              <button
                type="button"
                onClick={startPlayAll}
                className="inline-flex items-center gap-2 rounded-full bg-ai px-5 py-2.5 text-xs font-semibold text-surface shadow-xs hover:bg-ai-2 transition cursor-pointer"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                Phát toàn bộ bài
              </button>
            ) : (
              <button
                type="button"
                onClick={stopPlayAll}
                className="inline-flex items-center gap-2 rounded-full bg-shu px-5 py-2.5 text-xs font-semibold text-surface shadow-xs hover:opacity-90 transition cursor-pointer"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <rect x="6" y="4" width="4" height="16" />
                  <rect x="14" y="4" width="4" height="16" />
                </svg>
                Tạm dừng
              </button>
            )}

            {/* Speed toggle */}
            <select
              value={rate}
              onChange={(e) => setRate(parseFloat(e.target.value))}
              className="rounded-full border border-line bg-surface px-3 py-2 text-xs font-semibold text-ink-2 outline-none cursor-pointer"
            >
              <option value={0.75}>Tốc độ: 0.75x</option>
              <option value={0.85}>Tốc độ: 0.85x (Chuẩn)</option>
              <option value={1.0}>Tốc độ: 1.0x (Nhanh)</option>
            </select>

            {/* Translation toggle */}
            <button
              type="button"
              onClick={() => setShowVi(!showVi)}
              className="rounded-full border border-line bg-surface px-3.5 py-2 text-xs font-semibold text-ink-2 hover:border-ai/50 hover:text-ai transition cursor-pointer"
            >
              {showVi ? "Ẩn dịch" : "Hiện dịch"}
            </button>
          </div>
        </div>
      </div>

      {/* Dialogue Script Lines */}
      <div className="space-y-3">
        {lines.map((pair, idx) => {
          const jpLine = pair[0];
          const viLine = pair[1];
          const isCurrent = activeLine === idx;

          // Parse speaker prefix
          const speakerMatch = jpLine.match(/^([A-Z])：/);
          const speaker = speakerMatch ? speakerMatch[1] : null;
          const cleanJp = speaker ? jpLine.replace(/^[A-Z]：/, "") : jpLine;
          const cleanVi = speaker ? viLine.replace(/^[A-Z]:\s*/, "") : viLine;

          return (
            <div
              key={idx}
              onClick={() => handleLineClick(idx)}
              className={`group flex items-start gap-3 rounded-2xl border p-4 transition cursor-pointer ${
                isCurrent
                  ? "border-ai bg-ai-wash/40 shadow-xs"
                  : "border-line bg-surface hover:border-line-2 hover:bg-surface-2/40"
              }`}
            >
              {/* Speaker avatar */}
              {speaker ? (
                <span
                  className={`grid h-8 w-8 shrink-0 place-items-center rounded-xl font-mono text-xs font-bold ${
                    speaker === "A"
                      ? "bg-ai text-surface"
                      : speaker === "B"
                      ? "bg-shu text-surface"
                      : "bg-matsuba text-surface"
                  }`}
                >
                  {speaker}
                </span>
              ) : (
                <span className="font-mono text-xs text-ink-3 pt-1 w-6">
                  {idx + 1}
                </span>
              )}

              {/* Line text */}
              <div className="flex-1 min-w-0">
                <p className={`jp text-base font-semibold leading-relaxed ${isCurrent ? "text-ai font-bold" : "text-ink"}`}>
                  {cleanJp}
                </p>
                {showVi && (
                  <p className="mt-1 text-xs text-ink-2 leading-relaxed">
                    {cleanVi}
                  </p>
                )}
              </div>

              {/* Speaker action */}
              <div className="shrink-0 pt-0.5">
                <AudioButton text={cleanJp} size="sm" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Textbook Citation Note */}
      <div className="mt-12 rounded-2xl border border-line bg-surface-2/60 p-4 text-xs text-ink-2 leading-relaxed">
        <strong>Tài liệu nguồn:</strong> Giáo trình 『できる日本語 初級 本冊』 (嶋田和子 giám tu, アルク 2011).
      </div>
    </div>
  );
}
