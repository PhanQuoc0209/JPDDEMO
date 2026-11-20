import Link from "next/link";

export default function NhapMonPage() {
  return (
    <div className="relative isolate mx-auto max-w-5xl px-5 py-10 lg:py-16">
      <div className="mb-10 text-center sm:text-left">
        <span className="jp text-xs font-bold uppercase tracking-wider text-ai bg-ai-wash px-3 py-1 rounded-full">
          入門 · Bảng chữ cái
        </span>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Làm quen tiếng Nhật
        </h1>
        <p className="mt-2 text-sm text-ink-2 max-w-2xl">
          Học hai bảng chữ cái nền tảng Hiragana và Katakana qua bảng tra âm thanh chuẩn, mẹo nhớ hình ảnh và luyện gõ phản xạ.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {/* Card Hiragana */}
        <div className="group relative overflow-hidden rounded-3xl border border-line bg-surface p-6 shadow-xs transition hover:shadow-md hover:border-ai/40">
          <span
            aria-hidden="true"
            className="jp pointer-events-none absolute -bottom-6 -right-3 text-[8rem] font-bold text-ai opacity-[0.05] transition-opacity group-hover:opacity-10 select-none"
          >
            あ
          </span>
          <div className="flex items-center gap-3 mb-4">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ai text-surface font-bold text-xl jp shadow-xs">
              あ
            </span>
            <div>
              <h2 className="text-xl font-bold text-ink">Bảng chữ Hiragana</h2>
              <span className="text-xs text-ink-3">Chữ mềm thuần Nhật · 103 chữ</span>
            </div>
          </div>
          <p className="text-xs text-ink-2 leading-relaxed mb-6">
            Bảng chữ cái đầu tiên người học cần nắm vững, dùng để biểu thị ngữ pháp, trợ từ và từ gốc Nhật.
          </p>

          <div className="flex flex-wrap gap-2">
            <Link
              href="/nhap-mon/hiragana/bang-chu"
              className="inline-flex items-center gap-1.5 rounded-full bg-ai px-4 py-2 text-xs font-semibold text-surface transition hover:bg-ai-2"
            >
              Xem bảng chữ
            </Link>
            <Link
              href="/nhap-mon/hiragana/go"
              className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-4 py-2 text-xs font-semibold text-ink-2 transition hover:border-ai/50 hover:text-ai"
            >
              Luyện gõ phản xạ
            </Link>
          </div>
        </div>

        {/* Card Katakana */}
        <div className="group relative overflow-hidden rounded-3xl border border-line bg-surface p-6 shadow-xs transition hover:shadow-md hover:border-shu/40">
          <span
            aria-hidden="true"
            className="jp pointer-events-none absolute -bottom-6 -right-3 text-[8rem] font-bold text-shu opacity-[0.05] transition-opacity group-hover:opacity-10 select-none"
          >
            ア
          </span>
          <div className="flex items-center gap-3 mb-4">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-shu text-surface font-bold text-xl jp shadow-xs">
              ア
            </span>
            <div>
              <h2 className="text-xl font-bold text-ink">Bảng chữ Katakana</h2>
              <span className="text-xs text-ink-3">Chữ cứng từ mượn · 101 chữ</span>
            </div>
          </div>
          <p className="text-xs text-ink-2 leading-relaxed mb-6">
            Dùng để ghi các từ mượn tiếng nước ngoài, tên riêng quốc tế, tên quốc gia và từ ngữ khoa học.
          </p>

          <div className="flex flex-wrap gap-2">
            <Link
              href="/nhap-mon/katakana/bang-chu"
              className="inline-flex items-center gap-1.5 rounded-full bg-shu px-4 py-2 text-xs font-semibold text-surface transition hover:opacity-90"
            >
              Xem bảng chữ
            </Link>
            <Link
              href="/nhap-mon/katakana/go"
              className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-4 py-2 text-xs font-semibold text-ink-2 transition hover:border-shu/50 hover:text-shu"
            >
              Luyện gõ phản xạ
            </Link>
          </div>
        </div>
      </div>

      {/* Learning tip notice */}
      <div className="mt-8 rounded-2xl border border-line bg-surface-2/60 p-4 text-xs leading-relaxed text-ink-2 flex items-start gap-3">
        <span className="text-lg">💡</span>
        <p>
          <strong className="text-ink">Mẹo học:</strong> Học thuộc vững Hiragana trước rồi mới sang Katakana để tránh nhầm lẫn giữa hai bảng chữ cái. Kết hợp luyện gõ phản xạ để kích hoạt trí nhớ tay và phản xạ âm thanh.
        </p>
      </div>
    </div>
  );
}
