import Link from "next/link";
import { COURSES } from "@/data/courses";

export default function TuVungIndexPage() {
  return (
    <div className="relative isolate mx-auto max-w-5xl px-5 py-10 lg:py-16">
      {/* Header */}
      <div className="mb-10 text-center sm:text-left">
        <span className="jp text-xs font-bold uppercase tracking-wider text-ai bg-ai-wash px-3 py-1 rounded-full">
          語彙 · Từ vựng theo bài học
        </span>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Kho từ vựng tiếng Nhật
        </h1>
        <p className="mt-2 text-sm text-ink-2 max-w-2xl">
          Hơn 800 từ vựng cốt lõi theo giáo trình Dekiru Nihongo & JLPT N5-N4. Mỗi từ đều có cách đọc furigana, phát âm giọng chuẩn, phân loại từ và nghĩa tiếng Việt tự nhiên.
        </p>
      </div>

      {/* Courses List */}
      <div className="grid gap-6 sm:grid-cols-3">
        {COURSES.map((c) => {
          const totalWords = c.vocabLessons.reduce((acc, l) => acc + l.count, 0);
          return (
            <div
              key={c.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-line bg-surface p-6 shadow-xs transition hover:shadow-md hover:border-ai/40"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="grid h-12 w-12 place-items-center rounded-2xl text-xl font-bold text-surface jp shadow-xs"
                    style={{ background: c.color }}
                  >
                    語
                  </span>
                  <span className="font-mono text-xs font-bold text-ink-3">
                    {c.code}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-ink mb-1">{c.title}</h2>
                <p className="jp text-xs text-ink-3 mb-3">{c.nameJp}</p>
                <p className="text-xs text-ink-2 leading-relaxed mb-6">
                  {c.description}
                </p>
              </div>

              <div>
                <div className="border-t border-line pt-4 mb-4 flex justify-between text-xs text-ink-3">
                  <span>{c.vocabLessons.length} bài học</span>
                  <span className="font-semibold text-ink">~{totalWords} từ vựng</span>
                </div>

                <Link
                  href={`/tu-vung/${c.id}`}
                  className="flex w-full items-center justify-center gap-1.5 rounded-full bg-ai py-2.5 text-xs font-semibold text-surface transition hover:bg-ai-2"
                >
                  Vào học khoá {c.code} →
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
