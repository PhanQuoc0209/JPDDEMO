"use client";

import { use, useState, useMemo } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { VOCABULARY_DATA, VocabItem } from "@/data/vocabulary";
import { COURSES } from "@/data/courses";
import { AudioButton } from "@/components/AudioButton";
import { BookmarkButton } from "@/components/BookmarkButton";

export default function TuVungLessonPage({
  params,
}: {
  params: Promise<{ course: string; lesson: string }>;
}) {
  const { course, lesson } = use(params);
  const lessonData = VOCABULARY_DATA[lesson];
  const courseData = COURSES.find((c) => c.id === course);

  if (!lessonData) {
    notFound();
  }

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPos, setSelectedPos] = useState<string>("ALL");

  const posList = useMemo(() => {
    const set = new Set<string>();
    lessonData.items.forEach((item) => {
      if (item.pos) set.add(item.pos);
    });
    return Array.from(set);
  }, [lessonData]);

  const filteredItems = useMemo(() => {
    return lessonData.items.filter((item) => {
      const matchSearch =
        searchTerm === "" ||
        item.word.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.reading.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.romaji.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.meaning.toLowerCase().includes(searchTerm.toLowerCase());

      const matchPos = selectedPos === "ALL" || item.pos === selectedPos;

      return matchSearch && matchPos;
    });
  }, [lessonData, searchTerm, selectedPos]);

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:py-12">
      {/* Breadcrumb */}
      <div className="mb-6 flex items-center justify-between">
        <Link
          href={`/tu-vung/${course}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink-2 hover:text-ai transition"
        >
          <span>←</span> Danh sách bài {courseData?.code}
        </Link>
        <span className="text-xs text-ink-3">
          Hiển thị: {filteredItems.length} / {lessonData.items.length} từ
        </span>
      </div>

      {/* Hero Banner */}
      <div className="rise relative mb-8 overflow-hidden rounded-3xl border border-line bg-surface p-6 sm:p-8 shadow-xs">
        <span
          aria-hidden="true"
          className="ruled-fade absolute inset-0 -z-10 opacity-40 [--cell:2rem]"
        />
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-ai to-ai-2 text-3xl font-bold text-surface jp shadow-sm">
            語
          </span>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="rounded-full bg-ai-wash px-2.5 py-0.5 text-xs font-semibold text-ai">
                {courseData?.code}
              </span>
              <span className="text-xs text-ink-3">·</span>
              <span className="text-xs text-ink-2 font-medium">
                {lessonData.total} từ vựng
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-ink">
              {lessonData.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="mb-6 flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Tìm theo từ, cách đọc, romaji, nghĩa..."
            className="w-full rounded-2xl border border-line bg-surface px-4 py-2.5 pl-10 text-xs sm:text-sm text-ink outline-none transition focus:border-ai focus:ring-1 focus:ring-ai shadow-xs"
          />
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-3"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>

        {posList.length > 0 && (
          <div className="flex flex-wrap gap-1.5 items-center">
            <button
              type="button"
              onClick={() => setSelectedPos("ALL")}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition cursor-pointer ${
                selectedPos === "ALL"
                  ? "bg-ai text-surface"
                  : "border border-line bg-surface text-ink-2 hover:bg-surface-2"
              }`}
            >
              Tất cả
            </button>
            {posList.map((pos) => (
              <button
                key={pos}
                type="button"
                onClick={() => setSelectedPos(pos)}
                className={`rounded-full px-3 py-1.5 text-xs font-medium transition cursor-pointer ${
                  selectedPos === pos
                    ? "bg-ai text-surface"
                    : "border border-line bg-surface text-ink-2 hover:bg-surface-2"
                }`}
              >
                {pos}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Words List */}
      <div className="grid gap-3 sm:grid-cols-2">
        {filteredItems.map((item, index) => (
          <div
            key={item.id || index}
            className="group relative flex items-start justify-between gap-3 overflow-hidden rounded-2xl border border-line bg-surface p-4 shadow-xs transition hover:shadow-md hover:border-ai/50"
          >
            <div className="flex items-start gap-3 min-w-0 flex-1">
              {/* Order number */}
              <span className="font-mono text-xs font-bold text-ink-3 pt-1 w-6">
                {index + 1}
              </span>

              {/* Word Details */}
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="jp text-xl font-bold text-ink">
                    {item.word}
                  </span>
                  {item.word !== item.reading && (
                    <span className="kana text-xs font-medium text-ink-3">
                      ({item.reading})
                    </span>
                  )}
                  {item.pos && (
                    <span className="rounded-full bg-surface-2 px-2 py-0.5 text-[0.65rem] font-semibold text-ink-2">
                      {item.pos}
                    </span>
                  )}
                </div>

                <span className="font-mono text-xs text-ai block mt-0.5">
                  {item.romaji}
                </span>

                <p className="mt-1 text-xs text-ink-2 leading-relaxed">
                  {item.meaning}
                </p>
              </div>
            </div>

            {/* Actions: Audio & Bookmark */}
            <div className="flex items-center gap-1.5 shrink-0">
              <AudioButton text={item.word} size="sm" />
              <BookmarkButton id={item.id || item.word} type="vocab" label={item.word} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
