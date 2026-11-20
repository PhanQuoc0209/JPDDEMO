import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { COURSES } from "@/data/courses";
import { KANJI_DATA } from "@/data/kanji";

export default function HanTuCoursePage({
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
          href="/han-tu"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink-2 hover:text-ai transition"
        >
          <span>←</span> Tất cả khoá Hán tự
        </Link>
      </div>

      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3">
          <span
            className="grid h-12 w-12 place-items-center rounded-2xl text-xl font-bold text-surface jp shadow-xs"
            style={{ background: currentCourse.color }}
          >
            漢
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
              Hán tự {currentCourse.title}
            </h1>
          </div>
        </div>
        <p className="mt-2 text-xs text-ink-2 sm:text-sm max-w-2xl">
          {currentCourse.description}
        </p>
      </div>

      {/* Lessons List */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {currentCourse.kanjiLessons.map((l, index) => {
          const lessonData = KANJI_DATA[l.id];
          const kanjiCount = lessonData?.items?.length || l.count;

          return (
            <div
              key={l.id}
              className="group relative flex flex-col justify-between rounded-3xl border border-line bg-surface p-5 shadow-xs transition hover:shadow-md hover:border-ai/50"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold text-ink-3">
                    Bài {index + 1}
                  </span>
                  <span className="rounded-full bg-ai-wash px-2.5 py-0.5 text-xs font-semibold text-ai">
                    {kanjiCount} chữ
                  </span>
                </div>

                <h3 className="text-base font-bold text-ink mb-2 line-clamp-2">
                  {l.title}
                </h3>

                {/* Preview sample kanji glyphs */}
                {lessonData && lessonData.items && (
                  <div className="flex flex-wrap gap-1 mb-4">
                    {lessonData.items.slice(0, 6).map((k) => (
                      <span
                        key={k.glyph}
                        className="jp grid h-7 w-7 place-items-center rounded-lg bg-surface-2 text-xs font-bold text-ink-2"
                      >
                        {k.glyph}
                      </span>
                    ))}
                    {lessonData.items.length > 6 && (
                      <span className="grid h-7 w-7 place-items-center rounded-lg bg-surface-2 text-xs text-ink-3">
                        +{lessonData.items.length - 6}
                      </span>
                    )}
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2 pt-3 border-t border-line">
                <Link
                  href={`/han-tu/${course}/${l.id}`}
                  className="flex-1 rounded-full bg-ai py-2 text-center text-xs font-semibold text-surface hover:bg-ai-2 transition"
                >
                  Học bài này
                </Link>
                <Link
                  href={`/han-tu/${course}/${l.id}/flashcard`}
                  className="rounded-full border border-line bg-surface px-3 py-2 text-xs font-semibold text-ink-2 hover:border-ai/40 hover:text-ai transition"
                  title="Học nhanh bằng thẻ ghi nhớ"
                >
                  Thẻ
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
