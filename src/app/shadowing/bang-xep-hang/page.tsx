import Link from "next/link";

const LEADERBOARD_USERS = [
  { rank: 1, name: "Thanh Trúc", class: "JPD113-FA26", score: 2840, streak: 28, medal: "🥇" },
  { rank: 2, name: "Minh Quân", class: "JPD123-SU26", score: 2690, streak: 24, medal: "🥈" },
  { rank: 3, name: "Hoàng Long", class: "JPD113-FA26", score: 2510, streak: 21, medal: "🥉" },
  { rank: 4, name: "Khánh Linh", class: "JPD133-SP26", score: 2380, streak: 19, medal: "4" },
  { rank: 5, name: "Đức Huy", class: "JPD123-SU26", score: 2240, streak: 16, medal: "5" },
  { rank: 6, name: "Phương Anh", class: "JPD113-FA26", score: 2120, streak: 15, medal: "6" },
  { rank: 7, name: "Tuấn Kiệt", class: "JPD133-SP26", score: 1980, streak: 12, medal: "7" },
  { rank: 8, name: "Bảo Ngọc", class: "JPD123-SU26", score: 1850, streak: 10, medal: "8" },
];

export default function ShadowingLeaderboardPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:py-12">
      {/* Breadcrumb */}
      <div className="mb-6">
        <Link
          href="/shadowing"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink-2 hover:text-ai transition"
        >
          <span>←</span> Luyện nói Shadowing
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
              Bảng xếp hạng Shadowing
            </h1>
            <p className="mt-1 text-xs text-ink-2">
              Top sinh viên luyện phát âm chuẩn và tích lũy chuỗi ngày đều đặn nhất.
            </p>
          </div>
        </div>
      </div>

      {/* Leaderboard Table */}
      <div className="overflow-hidden rounded-3xl border border-line bg-surface shadow-xs">
        <div className="grid grid-cols-12 border-b border-line bg-surface-2/60 px-5 py-3 text-xs font-bold text-ink-3 uppercase">
          <span className="col-span-2 sm:col-span-1">Hạng</span>
          <span className="col-span-6 sm:col-span-7">Họ tên & Lớp</span>
          <span className="col-span-2 text-right">Chuỗi 🔥</span>
          <span className="col-span-2 text-right">Điểm ⭐</span>
        </div>

        <div className="divide-y divide-line">
          {LEADERBOARD_USERS.map((user) => (
            <div
              key={user.rank}
              className="grid grid-cols-12 items-center px-5 py-3.5 text-xs sm:text-sm hover:bg-surface-2/40 transition"
            >
              <div className="col-span-2 sm:col-span-1 font-bold text-sm">
                {user.medal}
              </div>
              <div className="col-span-6 sm:col-span-7">
                <span className="font-semibold text-ink block">{user.name}</span>
                <span className="font-mono text-xs text-ink-3">{user.class}</span>
              </div>
              <div className="col-span-2 text-right font-mono font-semibold text-shu">
                {user.streak} ngày
              </div>
              <div className="col-span-2 text-right font-mono font-bold text-ai">
                {user.score.toLocaleString()}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scoring Rules */}
      <div className="mt-8 rounded-2xl border border-line bg-surface-2/60 p-4 text-xs leading-relaxed text-ink-2">
        <h4 className="font-bold text-ink mb-1">Cách tính điểm:</h4>
        <ul className="list-disc list-inside space-y-1">
          <li>Mỗi câu thoại hoàn thành đúng nhịp điệu: +10 điểm.</li>
          <li>Hoàn thành một bài đàm thoại: +50 điểm thưởng.</li>
          <li>Duy trì chuỗi ngày liên tiếp: nhân hệ số thưởng tương ứng (lên đến x2.0).</li>
        </ul>
      </div>
    </div>
  );
}
