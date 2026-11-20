import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { COURSES } from "@/data/courses";
import { GRAMMAR_DATA } from "@/data/grammar";

export default function NguPhapCoursePage({
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
      <div className="mb-6">
        <Link
          href="/ngu-phap"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink-2 hover:text-ai transition"
        >
          <span>←</span> Tất cả khoá Ngữ pháp
        </Link>
      </div>

      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3">
          <span
            className="grid h-12 w-12 place-items-center rounded-2xl text-xl font-bold text-surface jp shadow-xs"
            style={{ background: currentCourse.color }}
          >
            文
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
              Ngữ pháp {currentCourse.title}
            </h1>
          </div>
        </div>
        <p className="mt-2 text-xs text-ink-2 sm:text-sm max-w-2xl">
          {currentCourse.description}
        </p>
      </div>

      {/* Lessons Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {currentCourse.grammarLessons.map((l, index) => {
          const lessonData = GRAMMAR_DATA[l.id];
          const count = lessonData?.count || l.count;

          return (
            <Link
              key={l.id}
              href={`/ngu-phap/${course}/${l.id}`}
              className="group relative flex flex-col justify-between rounded-3xl border border-line bg-surface p-5 shadow-xs transition hover:shadow-md hover:border-ai/50 hover:-translate-y-0.5"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold text-ink-3">
                    Bài {index + 1}
                  </span>
                  <span className="rounded-full bg-ai-wash px-2.5 py-0.5 text-xs font-semibold text-ai">
                    {count} mẫu
                  </span>
                </div>

                <h3 className="text-base font-bold text-ink mb-2 group-hover:text-ai transition-colors">
                  {l.title}
                </h3>

                {lessonData && lessonData.items && (
                  <p className="text-xs text-ink-3 line-clamp-2">
                    {lessonData.items.map((m) => m.pattern).join(" · ")}
                  </p>
                )}
              </div>

              <div className="mt-4 flex items-center justify-between text-xs font-semibold text-ai pt-3 border-t border-line">
                <span>Học mẫu câu</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
