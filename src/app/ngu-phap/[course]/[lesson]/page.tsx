"use client";

import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GRAMMAR_DATA } from "@/data/grammar";
import { COURSES } from "@/data/courses";
import { AudioButton } from "@/components/AudioButton";

export default function NguPhapLessonPage({
  params,
}: {
  params: Promise<{ course: string; lesson: string }>;
}) {
  const { course, lesson } = use(params);
  const lessonData = GRAMMAR_DATA[lesson];
  const courseData = COURSES.find((c) => c.id === course);

  if (!lessonData) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:py-12">
      {/* Breadcrumb */}
      <div className="mb-6 flex items-center justify-between">
        <Link
          href={`/ngu-phap/${course}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink-2 hover:text-ai transition"
        >
          <span>←</span> Danh sách bài {courseData?.code}
        </Link>
        <span className="text-xs text-ink-3">
          {lessonData.items.length} mẫu câu
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
            文
          </span>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="rounded-full bg-ai-wash px-2.5 py-0.5 text-xs font-semibold text-ai">
                {courseData?.code}
              </span>
              <span className="text-xs text-ink-3">·</span>
              <span className="text-xs text-ink-2 font-medium">
                {lessonData.count} mẫu ngữ pháp
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-ink">
              {lessonData.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Grammar Pattern Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {lessonData.items.map((item, index) => (
          <div
            key={item.id}
            style={{ "--tint": `var(--iro-${(index % 10) + 1})` } as React.CSSProperties}
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-line bg-surface p-6 shadow-xs transition duration-300 hover:-translate-y-1 hover:shadow-md hover:border-ai/50"
          >
            {/* Background number watermark */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-2 -bottom-4 font-mono text-[6rem] leading-none font-bold opacity-[0.06] select-none group-hover:opacity-[0.14] transition-opacity"
              style={{ color: "var(--tint)" }}
            >
              {index + 1}
            </span>

            <div>
              {/* Colored pill bar */}
              <span
                aria-hidden="true"
                className="mb-4 block h-2 w-10 rounded-full transition-all duration-300 group-hover:w-16"
                style={{ background: "var(--tint)" }}
              />

              {/* Japanese Formula */}
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="jp text-lg font-bold text-ink leading-snug break-words">
                  {item.pattern}
                </h3>
                <AudioButton text={item.pattern.replace(/[N1N2～]/g, "")} size="sm" />
              </div>

              {/* Vietnamese Meaning */}
              <p className="text-xs leading-relaxed text-ink-2">
                {item.meaning}
              </p>
            </div>

            <div className="mt-6 border-t border-line/60 pt-3 flex items-center justify-between text-xs">
              <span className="rounded-full bg-surface-2 px-2.5 py-1 text-[0.7rem] font-semibold text-ink-3">
                Mẫu số {index + 1}
              </span>
              <span
                className="font-mono text-xs font-semibold"
                style={{ color: "var(--tint)" }}
              >
                JPD · N5
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
