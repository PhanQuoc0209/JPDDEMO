import Link from "next/link";
import { COURSES } from "@/data/courses";

export default function ShadowingIndexPage() {
  return (
    <div className="relative isolate mx-auto max-w-5xl px-5 py-10 lg:py-16">
      {/* Header */}
      <div className="mb-10 text-center sm:text-left">
        <span className="jp text-xs font-bold uppercase tracking-wider text-ai bg-ai-wash px-3 py-1 rounded-full">
          音読 · Luyện nói phản xạ Shadowing
        </span>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Phương pháp Shadowing
        </h1>
        <p className="mt-2 text-sm text-ink-2 max-w-2xl">
          Nghe người bản xứ nói và nhại theo ngay lập tức như chiếc bóng (shadow). Rèn luyện phản xạ ngữ điệu, trọng âm từ và nhịp điệu hội thoại tự nhiên.
        </p>
      </div>

      {/* Courses List */}
      <div className="grid gap-6 sm:grid-cols-3 mb-10">
        {COURSES.map((c) => {
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
                    声
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
                  <span>{c.shadowingLessons.length} bài hội thoại</span>
                  <span className="font-semibold text-ink">Giọng bản xứ</span>
                </div>

                <Link
                  href={`/shadowing/khoa/${c.id}`}
                  className="flex w-full items-center justify-center gap-1.5 rounded-full bg-ai py-2.5 text-xs font-semibold text-surface transition hover:bg-ai-2"
                >
                  Vào luyện {c.code} →
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Leaderboard CTA */}
      <div className="rounded-3xl border border-line bg-surface p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold text-ink flex items-center gap-2">
            🏆 Bảng xếp hạng Shadowing
          </h3>
          <p className="text-xs text-ink-2 mt-1">
            Ghi điểm qua mỗi lượt luyện đọc chuẩn ngữ điệu và duy trì chuỗi ngày học tập.
          </p>
        </div>
        <Link
          href="/shadowing/bang-xep-hang"
          className="rounded-full border border-line bg-surface px-5 py-2.5 text-xs font-semibold text-ink-2 hover:border-ai/50 hover:text-ai transition shadow-xs shrink-0"
        >
          Xem bảng xếp hạng →
        </Link>
      </div>
    </div>
  );
}
