import Link from "next/link";

export default function GameHubPage() {
  return (
    <div className="relative isolate mx-auto max-w-5xl px-5 py-10 lg:py-16">
      {/* Header */}
      <div className="mb-10 text-center sm:text-left">
        <span className="jp text-xs font-bold uppercase tracking-wider text-ai bg-ai-wash px-3 py-1 rounded-full">
          ゲーム · Trò chơi tương tác
        </span>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Chơi cho nhớ lâu
        </h1>
        <p className="mt-2 text-sm text-ink-2 max-w-2xl">
          Chơi vài ván, nhớ được kha khá mà không thấy mệt. Rèn luyện tốc độ phản xạ nhận diện chữ cái và vốn từ vựng hàng ngày.
        </p>
      </div>

      {/* Games Grid */}
      <div className="grid gap-6 sm:grid-cols-2">
        {/* Game 1: Mưa chữ */}
        <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-line bg-surface p-6 sm:p-8 shadow-xs transition hover:shadow-md hover:border-ai/50">
          <span
            aria-hidden="true"
            className="jp pointer-events-none absolute -bottom-6 -right-3 text-[9rem] font-bold text-ai opacity-[0.05] transition-opacity group-hover:opacity-10 select-none"
          >
            雨
          </span>

          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-ai text-surface text-2xl shadow-sm">
                🌧️
              </span>
              <span className="rounded-full bg-ai-wash px-3 py-1 text-xs font-bold text-ai">
                Phản xạ gõ
              </span>
            </div>

            <h2 className="text-2xl font-bold text-ink mb-1">Mưa chữ</h2>
            <p className="jp text-xs text-ink-3 mb-3">文字の雨 · Kana Typing Rain</p>
            <p className="text-xs text-ink-2 leading-relaxed mb-6">
              Các chữ cái Hiragana & Katakana rơi từ trên xuống. Bạn hãy gõ thật nhanh romaji tương ứng để làm nổ hạt mưa trước khi chạm đất!
            </p>
          </div>

          <div className="flex items-center gap-3 pt-4 border-t border-line">
            <Link
              href="/game/mua-chu"
              className="flex-1 rounded-full bg-ai py-2.5 text-center text-xs font-semibold text-surface hover:bg-ai-2 transition shadow-xs"
            >
              Vào chơi ngay →
            </Link>
            <Link
              href="/game/bang-xep-hang"
              className="rounded-full border border-line bg-surface px-4 py-2.5 text-xs font-semibold text-ink-2 hover:border-ai/50 hover:text-ai transition"
            >
              Hạng
            </Link>
          </div>
        </div>

        {/* Game 2: Từ vựng hôm nay */}
        <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-line bg-surface p-6 sm:p-8 shadow-xs transition hover:shadow-md hover:border-shu/50">
          <span
            aria-hidden="true"
            className="jp pointer-events-none absolute -bottom-6 -right-3 text-[9rem] font-bold text-shu opacity-[0.05] transition-opacity group-hover:opacity-10 select-none"
          >
            語
          </span>

          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-shu text-surface text-2xl shadow-sm">
                🟩
              </span>
              <span className="rounded-full bg-shu/10 px-3 py-1 text-xs font-bold text-shu">
                Wordle Nhật
              </span>
            </div>

            <h2 className="text-2xl font-bold text-ink mb-1">Từ vựng hôm nay</h2>
            <p className="jp text-xs text-ink-3 mb-3">今日の単語 · Japanese Wordle</p>
            <p className="text-xs text-ink-2 leading-relaxed mb-6">
              Mỗi ngày một từ tiếng Nhật bí ẩn. Bạn có 6 lượt đoán với gợi ý màu ô gạch: Xanh lá (đúng vị trí), Vàng (có trong từ), Xám (không có).
            </p>
          </div>

          <div className="flex items-center gap-3 pt-4 border-t border-line">
            <Link
              href="/game/tu-vung-hom-nay"
              className="flex-1 rounded-full bg-shu py-2.5 text-center text-xs font-semibold text-surface hover:opacity-90 transition shadow-xs"
            >
              Thử tài đoán từ →
            </Link>
            <Link
              href="/game/bang-xep-hang"
              className="rounded-full border border-line bg-surface px-4 py-2.5 text-xs font-semibold text-ink-2 hover:border-shu/50 hover:text-shu transition"
            >
              Hạng
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
