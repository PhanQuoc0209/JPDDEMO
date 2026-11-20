import Link from "next/link";

export default function NhapMonPage() {
  return (
    <div className="relative isolate mx-auto max-w-5xl px-5 py-10 lg:py-16">
      {/* Header */}
      <div className="mb-10 text-center sm:text-left">
        <span className="jp text-xs font-bold uppercase tracking-wider text-ai bg-ai-wash px-3 py-1 rounded-full">
          入門 · Bảng chữ cái
        </span>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Làm quen tiếng Nhật
        </h1>
        <p className="mt-2 text-sm text-ink-2 max-w-2xl">
          Học hai bảng chữ cái nền tảng Hiragana và Katakana qua bảng tra âm thanh chuẩn, mẹo nhớ hình ảnh, thẻ ghi nhớ (flashcard) và luyện gõ phản xạ.
        </p>
      </div>

      {/* Main Two Script Cards */}
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
              href="/nhap-mon/hiragana/flashcard"
              className="inline-flex items-center gap-1.5 rounded-full bg-surface-2 border border-line px-4 py-2 text-xs font-semibold text-ai transition hover:bg-ai-wash hover:border-ai/40"
            >
              <span>🗂</span> Ôn bằng thẻ
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
              href="/nhap-mon/katakana/flashcard"
              className="inline-flex items-center gap-1.5 rounded-full bg-surface-2 border border-line px-4 py-2 text-xs font-semibold text-shu transition hover:bg-shu/10 hover:border-shu/40"
            >
              <span>🗂</span> Ôn bằng thẻ
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

      {/* Vào thẳng phần luyện tập (Manabiman practice shortcuts) */}
      <div className="mt-14">
        <h2 className="mb-5 flex items-baseline gap-3 text-lg font-bold text-ink">
          Vào thẳng phần luyện tập
          <span className="jp text-xs font-normal text-ink-3">練習</span>
        </h2>

        <div className="grid gap-4 sm:grid-cols-2">
          {/* Box 1: Ôn bằng thẻ ghi nhớ & hình ảnh liên tưởng */}
          <div className="flex items-start gap-4 rounded-3xl border border-line bg-surface p-5 sm:p-6 shadow-xs transition hover:shadow-md hover:border-gold/40">
            <span
              aria-hidden="true"
              className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gold/15 text-gold text-2xl"
            >
              🗂
            </span>
            <div className="min-w-0 flex-1">
              <h3 className="text-base font-bold text-ink">Ôn bằng thẻ (Flashcard)</h3>
              <p className="mt-1 mb-3 text-xs leading-relaxed text-ink-2">
                Mỗi chữ gắn với một hình ảnh liên tưởng. Lật thẻ 3D để xem mẹo nhớ và tự kiểm tra khả năng nhận diện.
              </p>
              <div className="flex flex-wrap items-center gap-2">
                <Link
                  href="/nhap-mon/hiragana/flashcard"
                  className="inline-flex items-center gap-1 rounded-full bg-surface-2 px-3.5 py-1.5 text-xs font-semibold text-ink-2 transition hover:text-ai hover:bg-ai-wash"
                >
                  Hiragana <span>→</span>
                </Link>
                <Link
                  href="/nhap-mon/katakana/flashcard"
                  className="inline-flex items-center gap-1 rounded-full bg-surface-2 px-3.5 py-1.5 text-xs font-semibold text-ink-2 transition hover:text-shu hover:bg-shu/10"
                >
                  Katakana <span>→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Box 2: Luyện gõ phản xạ */}
          <div className="flex items-start gap-4 rounded-3xl border border-line bg-surface p-5 sm:p-6 shadow-xs transition hover:shadow-md hover:border-matsuba/40">
            <span
              aria-hidden="true"
              className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-matsuba/15 text-matsuba text-2xl"
            >
              ⌨️
            </span>
            <div className="min-w-0 flex-1">
              <h3 className="text-base font-bold text-ink">Luyện gõ phản xạ</h3>
              <p className="mt-1 mb-3 text-xs leading-relaxed text-ink-2">
                Nhìn chữ kana, gõ romaji tương ứng. Có bấm giờ, đếm chuỗi streak và tính số lần gõ sai.
              </p>
              <div className="flex flex-wrap items-center gap-2">
                <Link
                  href="/nhap-mon/hiragana/go"
                  className="inline-flex items-center gap-1 rounded-full bg-surface-2 px-3.5 py-1.5 text-xs font-semibold text-ink-2 transition hover:text-ai hover:bg-ai-wash"
                >
                  Hiragana <span>→</span>
                </Link>
                <Link
                  href="/nhap-mon/katakana/go"
                  className="inline-flex items-center gap-1 rounded-full bg-surface-2 px-3.5 py-1.5 text-xs font-semibold text-ink-2 transition hover:text-shu hover:bg-shu/10"
                >
                  Katakana <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Learning tip notice */}
      <div className="mt-10 rounded-2xl border border-line bg-surface-2/60 p-4 text-xs leading-relaxed text-ink-2 flex items-start gap-3">
        <span className="text-lg">💡</span>
        <p>
          <strong className="text-ink">Mẹo học:</strong> Học thuộc vững Hiragana trước rồi mới sang Katakana để tránh nhầm lẫn giữa hai bảng chữ cái. Kết hợp ôn thẻ Flashcard để ghi nhớ mẹo hình ảnh và luyện gõ phản xạ để kích hoạt trí nhớ tay.
        </p>
      </div>
    </div>
  );
}
