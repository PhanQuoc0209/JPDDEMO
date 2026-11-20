"use client";

import { use, useState } from "react";
import Link from "next/link";
import { HIRAGANA_DATA, KATAKANA_DATA } from "@/data/kana";
import { AudioButton } from "@/components/AudioButton";

export default function BangChuPage({ params }: { params: Promise<{ script: string }> }) {
  const { script } = use(params);
  const isHira = script === "hiragana";
  const data = isHira ? HIRAGANA_DATA : KATAKANA_DATA;
  const scriptName = isHira ? "Hiragana" : "Katakana";
  const scriptJp = isHira ? "ひらがな" : "カタカナ";
  const otherScript = isHira ? "katakana" : "hiragana";
  const otherName = isHira ? "Katakana" : "Hiragana";

  const [activeGroupIndex, setActiveGroupIndex] = useState(0);

  const activeGroup = data.groups[activeGroupIndex] || data.groups[0];

  const playKana = (text: string) => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = "ja-JP";
      u.rate = 0.85;
      window.speechSynthesis.speak(u);
    }
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Back button & Breadcrumb */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <Link
          href="/nhap-mon"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink-2 hover:text-ai transition"
        >
          <span>←</span> Làm quen
        </Link>
        <Link
          href={`/nhap-mon/${otherScript}/bang-chu`}
          className="rounded-full border border-line bg-surface px-3 py-1 text-xs font-semibold text-ink-2 hover:border-ai/50 hover:text-ai transition"
        >
          Chuyển sang bảng {otherName} →
        </Link>
      </div>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <span className="jp text-3xl font-bold text-ai">{scriptJp}</span>
          <h1 className="text-2xl font-bold text-ink sm:text-3xl">
            Bảng chữ cái {scriptName}
          </h1>
        </div>
        <p className="mt-2 text-xs text-ink-2 sm:text-sm">
          Chạm hoặc bấm vào từng chữ để nghe phát âm chuẩn giọng người bản xứ Nhật Bản.
        </p>
      </div>

      {/* Group Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-line pb-4 mb-6">
        {data.groups.map((grp, idx) => (
          <button
            key={grp.kind}
            type="button"
            onClick={() => setActiveGroupIndex(idx)}
            className={`rounded-full px-4 py-2 text-xs font-semibold transition cursor-pointer ${
              activeGroupIndex === idx
                ? "bg-ai text-surface shadow-xs"
                : "border border-line bg-surface text-ink-2 hover:bg-surface-2 hover:text-ink"
            }`}
          >
            {grp.labelVi} ({grp.rows.reduce((acc, r) => acc + r.items.length, 0)} chữ)
          </button>
        ))}
      </div>

      {/* Grid Table */}
      <div className="space-y-6">
        {activeGroup.rows.map((row) => (
          <div key={row.row} className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <span className="w-12 font-mono text-xs font-bold text-ink-3 uppercase">
              Hàng {row.row}
            </span>
            <div className="grid grid-cols-5 gap-2 sm:gap-3 flex-1 w-full max-w-xl">
              {row.items.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => playKana(item.glyph)}
                  className="group relative flex flex-col items-center justify-center rounded-2xl border border-line bg-surface p-3 transition hover:-translate-y-1 hover:border-ai/60 hover:shadow-md cursor-pointer active:scale-95"
                >
                  <span className="jp text-2xl font-bold text-ink group-hover:text-ai transition-colors">
                    {item.glyph}
                  </span>
                  <span className="font-mono text-xs text-ink-3 mt-1">
                    {item.romaji}
                  </span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Action Footer */}
      <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
        <Link
          href={`/nhap-mon/${script}/flashcard`}
          className="inline-flex items-center gap-2 rounded-full bg-ai px-6 py-3 text-sm font-semibold text-surface shadow-md hover:bg-ai-2 transition"
        >
          <span>🗂</span> Ôn tập thẻ {scriptName}
        </Link>
        <Link
          href={`/nhap-mon/${script}/go`}
          className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-6 py-3 text-sm font-semibold text-ink-2 shadow-xs hover:border-ai/50 hover:text-ai transition"
        >
          <span>⌨️</span> Luyện gõ phản xạ
        </Link>
      </div>
    </div>
  );
}
