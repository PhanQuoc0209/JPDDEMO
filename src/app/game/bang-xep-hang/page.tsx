import Link from "next/link";

const MUA_CHU_TOP = [
  { rank: 1, name: "Minh Quân", script: "Hiragana", score: 3420, maxCombo: 42, medal: "🥇" },
  { rank: 2, name: "Thanh Trúc", script: "Katakana", score: 3150, maxCombo: 38, medal: "🥈" },
  { rank: 3, name: "Đức Huy", script: "Hiragana", score: 2890, maxCombo: 34, medal: "🥉" },
  { rank: 4, name: "Phương Anh", script: "Hiragana", score: 2640, maxCombo: 29, medal: "4" },
  { rank: 5, name: "Khánh Linh", script: "Katakana", score: 2480, maxCombo: 26, medal: "5" },
];

export default function GameLeaderboardPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:py-12">
      {/* Breadcrumb */}
      <div className="mb-6">
        <Link
          href="/game"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink-2 hover:text-ai transition"
        >
          <span>←</span> Trò chơi
        </Link>
      </div>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gold text-2xl text-surface shadow-xs">
            🏆
          </span>
          <div>
            <h1 className="text-2xl font-bold text-ink sm:text-3xl">
              Bảng xếp hạng trò chơi
            </h1>
            <p className="mt-1 text-xs text-ink-2">
              Kỷ lục gõ nhanh Mưa chữ và thành tích xuất sắc nhất.
            </p>
          </div>
        </div>
      </div>

      {/* Leaderboard Table */}
      <div className="overflow-hidden rounded-3xl border border-line bg-surface shadow-xs mb-8">
        <div className="border-b border-line bg-surface-2/60 px-5 py-3 text-xs font-bold text-ink flex items-center justify-between">
          <span>🌧️ KỶ LỤC MƯA CHỮ</span>
          <span className="text-[0.7rem] text-ink-3">Cập nhật hàng ngày</span>
        </div>

        <div className="grid grid-cols-12 border-b border-line px-5 py-2.5 text-xs font-semibold text-ink-3 uppercase">
          <span className="col-span-2 sm:col-span-1">Hạng</span>
          <span className="col-span-5 sm:col-span-6">Người chơi</span>
          <span className="col-span-2 text-center">Bảng chữ</span>
          <span className="col-span-3 text-right">Điểm ⭐</span>
        </div>

        <div className="divide-y divide-line">
          {MUA_CHU_TOP.map((user) => (
            <div
              key={user.rank}
              className="grid grid-cols-12 items-center px-5 py-3.5 text-xs sm:text-sm hover:bg-surface-2/40 transition"
            >
              <div className="col-span-2 sm:col-span-1 font-bold text-sm">
                {user.medal}
              </div>
              <div className="col-span-5 sm:col-span-6 font-semibold text-ink">
                {user.name}
              </div>
              <div className="col-span-2 text-center">
                <span className="rounded-full bg-surface-2 px-2.5 py-0.5 text-xs text-ink-2">
                  {user.script}
                </span>
              </div>
              <div className="col-span-3 text-right font-mono font-bold text-ai">
                {user.score.toLocaleString()} <span className="text-xs text-ink-3">({user.maxCombo}🔥)</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <Link
          href="/game/mua-chu"
          className="rounded-full bg-ai px-6 py-3 text-xs font-bold text-surface shadow-sm hover:bg-ai-2 transition"
        >
          Tham gia phá kỷ lục Mưa chữ 🌧️
        </Link>
      </div>
    </div>
  );
}
