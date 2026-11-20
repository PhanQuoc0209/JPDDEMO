"use client";

import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { KANJI_DATA } from "@/data/kanji";
import { COURSES } from "@/data/courses";
import { AudioButton } from "@/components/AudioButton";
import { BookmarkButton } from "@/components/BookmarkButton";

export default function HanTuLessonPage({
  params,
}: {
  params: Promise<{ course: string; lesson: string }>;
}) {
  const { course, lesson } = use(params);
  const lessonData = KANJI_DATA[lesson];
  const courseData = COURSES.find((c) => c.id === course);

  if (!lessonData) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:py-12">
      {/* Breadcrumbs */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <Link
          href={`/han-tu/${course}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink-2 hover:text-ai transition"
        >
          <span>←</span> Danh sách bài {courseData?.code}
        </Link>
        <Link
          href={`/han-tu/${course}/${lesson}/flashcard`}
          className="inline-flex items-center gap-1.5 rounded-full bg-ai px-4 py-2 text-xs font-semibold text-surface shadow-xs hover:bg-ai-2 transition"
        >
          <span>🃏</span> Học nhanh (Flashcard)
        </Link>
      </div>

      {/* Lesson Hero Banner */}
      <div className="rise relative mb-8 overflow-hidden rounded-3xl border border-line bg-surface p-6 sm:p-8 shadow-xs">
        <span
          aria-hidden="true"
          className="ruled-fade absolute inset-0 -z-10 opacity-40 [--cell:2rem]"
        />
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-ai to-ai-2 text-3xl font-bold text-surface jp shadow-sm">
            漢
          </span>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="rounded-full bg-ai-wash px-2.5 py-0.5 text-xs font-semibold text-ai">
                {courseData?.code}
              </span>
              <span className="text-xs text-ink-3">·</span>
              <span className="text-xs text-ink-2 font-medium">
                {lessonData.count} chữ Hán
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-ink">
              {lessonData.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Kanji Cards Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
        {lessonData.items.map((k, idx) => (
          <div
            key={k.glyph + idx}
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-line bg-surface p-5 shadow-xs transition hover:shadow-md hover:border-ai/50"
          >
            <div>
              {/* Card Top: Glyph + Han-Viet & Meanings + Audio & Bookmark */}
              <div className="flex items-start gap-4 mb-4">
                {/* Big Glyph */}
                <div className="jp grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-surface-2 text-3xl font-bold text-ink group-hover:text-ai group-hover:scale-105 transition-all shadow-inner">
                  {k.glyph}
                </div>

                {/* Han Viet + Meaning */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-base text-shu uppercase tracking-wide">
                      {k.hanViet}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <AudioButton text={k.glyph} size="sm" />
                      <BookmarkButton id={k.glyph} type="kanji" label={k.glyph} />
                    </div>
                  </div>
                  <p className="mt-1 text-xs text-ink-2 line-clamp-2">
                    {k.meaning}
                  </p>
                </div>
              </div>

              {/* Readings: Kunyomi & Onyomi */}
              <div className="space-y-2 border-t border-line/60 pt-3 text-xs">
                {k.kunyomi && k.kunyomi.length > 0 && (
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="font-mono text-[0.7rem] text-ink-3">Kun:</span>
                    {k.kunyomi.map((kun) => (
                      <span
                        key={kun}
                        className="kana rounded-full bg-surface-2 px-2.5 py-0.5 text-xs text-ink-2"
                      >
                        {kun}
                      </span>
                    ))}
                  </div>
                )}

                {k.onyomi && k.onyomi.length > 0 && (
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="font-mono text-[0.7rem] text-ink-3">On:</span>
                    {k.onyomi.map((on) => (
                      <span
                        key={on}
                        className="kana rounded-full bg-ai-wash px-2.5 py-0.5 text-xs font-semibold text-ai"
                      >
                        {on}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Mnemonic story if available */}
            {k.mnemonic && (
              <div className="mt-4 rounded-xl bg-surface-2/60 p-2.5 text-xs text-ink-2 italic">
                💡 {k.mnemonic}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
