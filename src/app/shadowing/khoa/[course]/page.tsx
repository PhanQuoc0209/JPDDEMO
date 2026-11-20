import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { COURSES } from "@/data/courses";
import { SHADOWING_DATA } from "@/data/shadowing";

export default function ShadowingCoursePage({
  params,
}: {
  params: Promise<{ course: string }>;
}) {
  const { course } = use(params);
  const currentCourse = COURSES.find((c) => c.id === course);

  if (!currentCourse) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:py-12">
      {/* Breadcrumb */}
      <div className="mb-6 flex items-center justify-between">
        <Link
          href="/shadowing"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink-2 hover:text-ai transition"
        >
          <span>←</span> Tất cả khoá Shadowing
        </Link>
        <Link
          href="/shadowing/bang-xep-hang"
          className="text-xs text-ai font-semibold hover:underline"
        >
          Bảng xếp hạng 🏆
        </Link>
      </div>

      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3">
          <span
            className="grid h-12 w-12 place-items-center rounded-2xl text-xl font-bold text-surface jp shadow-xs"
            style={{ background: currentCourse.color }}
          >
            声
          </span>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-ai">
                {currentCourse.code}
              </span>
              <span className="text-xs text-ink-3">·</span>
              <span className="jp text-xs text-ink-3">{currentCourse.nameJp}</span>
            </div>
            <h1 className="text-2xl font-bold text-ink sm:text-3xl">
              Shadowing {currentCourse.title}
            </h1>
          </div>
        </div>
        <p className="mt-2 text-xs text-ink-2 sm:text-sm max-w-2xl">
          {currentCourse.description}
        </p>
      </div>

      {/* Lessons List */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {currentCourse.shadowingLessons.map((l, index) => {
          const lessonData = SHADOWING_DATA[l.id];
          const linesCount = lessonData?.lines?.length || 30;

          return (
            <Link
              key={l.id}
              href={`/shadowing/${l.id}`}
              className="group relative flex flex-col justify-between rounded-3xl border border-line bg-surface p-5 shadow-xs transition hover:shadow-md hover:border-ai/50 hover:-translate-y-0.5"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold text-ink-3">
                    Hội thoại {index + 1}
                  </span>
                  <span className="rounded-full bg-ai-wash px-2.5 py-0.5 text-xs font-semibold text-ai">
                    {linesCount} câu thoại
                  </span>
                </div>

                <h3 className="text-base font-bold text-ink mb-1 group-hover:text-ai transition-colors">
                  {l.title}
                </h3>
                <p className="text-xs text-ink-2 mb-3">
                  {l.topic}
                </p>

                {lessonData && lessonData.lines && (
                  <p className="text-[0.7rem] text-ink-3 italic line-clamp-2 bg-surface-2/60 p-2 rounded-xl">
                    &quot;{lessonData.lines[0]?.[0] || ""}&quot;
                  </p>
                )}
              </div>

              <div className="mt-4 flex items-center justify-between text-xs font-semibold text-ai pt-3 border-t border-line">
                <span>Bắt đầu luyện nói</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
