import Link from "next/link";

interface SectionItem {
  id: string;
  num: string;
  title: string;
  jp: string;
  desc: string;
  href: string;
  tint: string;
  tags: { label: string; href: string }[];
  iconSvg: React.ReactNode;
}

const SECTIONS: SectionItem[] = [
  {
    id: "nhap-mon",
    num: "01",
    title: "Làm quen",
    jp: "入門",
    desc: "Làm quen Hiragana & Katakana, xây nền tảng tiếng Nhật.",
    href: "/nhap-mon",
    tint: "var(--iro-1)",
    tags: [
      { label: "Hiragana", href: "/nhap-mon/hiragana" },
      { label: "Katakana", href: "/nhap-mon/katakana" },
      { label: "Bảng chữ cái", href: "/nhap-mon/hiragana/bang-chu" },
      { label: "Luyện gõ", href: "/nhap-mon/hiragana/go" },
    ],
    iconSvg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5.2" />
        <path d="M12 4.8v14.4M4.8 12h14.4" />
      </svg>
    ),
  },
  {
    id: "han-tu",
    num: "02",
    title: "Hán tự",
    jp: "漢字",
    desc: "Học chữ Hán qua âm Hán Việt và hình ảnh liên tưởng.",
    href: "/han-tu",
    tint: "var(--iro-2)",
    tags: [
      { label: "JPD113 (30 chữ)", href: "/han-tu/jpd113" },
      { label: "JPD123 (40 chữ)", href: "/han-tu/jpd123" },
      { label: "JPD133 (47 chữ)", href: "/han-tu/jpd133" },
    ],
    iconSvg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
        <path d="M6 6h10M6 10h10M6 14h6" />
      </svg>
    ),
  },
  {
    id: "tu-vung",
    num: "03",
    title: "Từ vựng",
    jp: "語彙",
    desc: "Học từ theo bài, nghe phát âm và xem ví dụ thật.",
    href: "/tu-vung",
    tint: "var(--iro-3)",
    tags: [
      { label: "JPD113 (11 bài)", href: "/tu-vung/jpd113" },
      { label: "JPD123 (12 bài)", href: "/tu-vung/jpd123" },
      { label: "JPD133 (12 bài)", href: "/tu-vung/jpd133" },
    ],
    iconSvg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <rect x="3" y="6.6" width="13.4" height="14.2" rx="4.2" />
        <path d="M8.2 6.6V5.6a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H17" />
        <path d="M6.8 12.6h5.8M6.8 16.2h3.6" />
      </svg>
    ),
  },
  {
    id: "ngu-phap",
    num: "04",
    title: "Ngữ pháp",
    jp: "文法",
    desc: "Nắm mẫu câu qua ví dụ, rồi tự ghép lại.",
    href: "/ngu-phap",
    tint: "var(--iro-4)",
    tags: [
      { label: "JPD113 (9 bài)", href: "/ngu-phap/jpd113" },
      { label: "JPD123 (12 bài)", href: "/ngu-phap/jpd123" },
      { label: "JPD133 (12 bài)", href: "/ngu-phap/jpd133" },
    ],
    iconSvg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M12 7.4C10.4 5.8 8.4 5 6 5H4.6A1.4 1.4 0 0 0 3.2 6.4v10.4c0 .8.6 1.4 1.4 1.4H6c2.4 0 4.4.8 6 2.4 1.6-1.6 3.6-2.4 6-2.4h1.4c.8 0 1.4-.6 1.4-1.4V6.4c0-.8-.6-1.4-1.4-1.4H18c-2.4 0-4.4.8-6 2.4Z" />
        <path d="M12 7.4v13.2" />
      </svg>
    ),
  },
  {
    id: "shadowing",
    num: "05",
    title: "Shadowing",
    jp: "音読",
    desc: "Nghe từng câu rồi nói theo ngay, cho quen nhịp điệu tiếng Nhật.",
    href: "/shadowing",
    tint: "var(--iro-5)",
    tags: [
      { label: "JPD113 (3 bài)", href: "/shadowing/khoa/jpd113" },
      { label: "JPD123 (4 bài)", href: "/shadowing/khoa/jpd123" },
      { label: "JPD133 (2 bài)", href: "/shadowing/khoa/jpd133" },
      { label: "Bảng xếp hạng", href: "/shadowing/bang-xep-hang" },
    ],
    iconSvg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" y1="19" x2="12" y2="23" />
        <line x1="8" y1="23" x2="16" y2="23" />
      </svg>
    ),
  },
  {
    id: "ghi-nho",
    num: "06",
    title: "Ghi nhớ",
    jp: "記憶",
    desc: "Tập trung những từ chưa nhớ để ôn lại.",
    href: "/ghi-nho",
    tint: "var(--iro-6)",
    tags: [
      { label: "Chữ hay quên", href: "/ghi-nho" },
      { label: "Luyện flashcard", href: "/ghi-nho" },
    ],
    iconSvg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    id: "game",
    num: "07",
    title: "Trò chơi",
    jp: "ゲーム",
    desc: "Chơi vài ván, nhớ được kha khá mà không thấy mệt.",
    href: "/game",
    tint: "var(--iro-7)",
    tags: [
      { label: "Từ vựng hôm nay", href: "/game/tu-vung-hom-nay" },
      { label: "Mưa chữ", href: "/game/mua-chu" },
      { label: "Bảng xếp hạng", href: "/game/bang-xep-hang" },
    ],
    iconSvg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <polygon points="5 3 19 12 5 21 5 3" />
      </svg>
    ),
  },
  {
    id: "thi",
    num: "08",
    title: "Thi trực tuyến",
    jp: "試験",
    desc: "Thử sức với bài kiểm tra và xem kết quả ngay khi hoàn thành.",
    href: "/thi",
    tint: "var(--iro-8)",
    tags: [
      { label: "Đề thi giữa kỳ", href: "/thi" },
      { label: "Đề thi cuối kỳ", href: "/thi" },
    ],
    iconSvg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M20.2 4 10.6 13.6" />
        <path d="M9 12 12.2 15.2" />
        <path d="M10 14.2 7.4 16.8" />
        <circle cx="6.4" cy="17.8" r="1.2" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export default function HomePage() {
  return (
    <div className="relative isolate overflow-hidden">
      {/* Background Japanese Watermarks & Grid */}
      <div
        aria-hidden="true"
        className="ruled-fade pointer-events-none fixed inset-0 -z-10 opacity-40 [--cell:2.5rem]"
      />

      <div className="mx-auto max-w-5xl px-5 pt-10 pb-24 sm:px-8 lg:pt-16">
        {/* Header Hero */}
        <header className="relative mb-12 sm:mb-16 lg:mb-20">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-ai-wash px-3 py-1 text-xs font-semibold text-ai">
              <span className="h-1.5 w-1.5 rounded-full bg-ai" />
              Giáo trình Dekiru Nihongo & JLPT
            </span>
            <span className="text-xs text-ink-3">·</span>
            <span className="text-xs font-medium text-ink-2">JPD113 · JPD123 · JPD133</span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Hôm nay học gì?
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-2 sm:text-base">
            Học tiếng Nhật từ bảng chữ cái đến JLPT: Hiragana, Katakana, Hán tự và từ vựng, có hình ảnh liên tưởng và luyện gõ phản xạ.
          </p>

          {/* Quick Metrics */}
          <div className="mt-6 flex flex-wrap gap-2 sm:gap-3">
            <div className="rounded-xl border border-line bg-surface px-3.5 py-2 shadow-xs">
              <span className="block text-[0.7rem] font-medium text-ink-3">Bảng chữ cái</span>
              <span className="font-mono text-sm font-bold text-ink">103 kana</span>
            </div>
            <div className="rounded-xl border border-line bg-surface px-3.5 py-2 shadow-xs">
              <span className="block text-[0.7rem] font-medium text-ink-3">Hán tự</span>
              <span className="font-mono text-sm font-bold text-ink">117 chữ</span>
            </div>
            <div className="rounded-xl border border-line bg-surface px-3.5 py-2 shadow-xs">
              <span className="block text-[0.7rem] font-medium text-ink-3">Từ vựng</span>
              <span className="font-mono text-sm font-bold text-ink">805 từ</span>
            </div>
            <div className="rounded-xl border border-line bg-surface px-3.5 py-2 shadow-xs">
              <span className="block text-[0.7rem] font-medium text-ink-3">Ngữ pháp</span>
              <span className="font-mono text-sm font-bold text-ink">136 mẫu câu</span>
            </div>
          </div>
        </header>

        {/* Section List (1-to-1 matching Manabiman signature section list) */}
        <div className="divide-y divide-line">
          {SECTIONS.map((sec) => (
            <div
              key={sec.id}
              style={{ "--tint": sec.tint } as React.CSSProperties}
              className="group relative flex flex-col md:flex-row md:items-center justify-between gap-4 py-5 sm:gap-6 sm:py-6 transition-colors"
            >
              {/* Background tint on hover */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-[-1rem] inset-y-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background: `color-mix(in srgb, ${sec.tint} 8%, transparent)`,
                }}
              />

              {/* Japanese character watermark */}
              <span
                aria-hidden="true"
                className="jp pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-[4.5rem] leading-none font-bold opacity-[0.06] transition-all duration-500 select-none group-hover:opacity-[0.16] lg:text-[6rem]"
                style={{ color: sec.tint }}
              >
                {sec.jp}
              </span>

              {/* Left Column: Number + Icon + Title + Description */}
              <div className="relative z-10 flex items-start sm:items-center gap-4 sm:gap-6 min-w-0 flex-1">
                {/* Number */}
                <span className="font-mono text-xs font-semibold tabular-nums text-ink-3 transition-colors duration-300 group-hover:text-[var(--tint)] pt-1 sm:pt-0">
                  {sec.num}
                </span>

                {/* Icon */}
                <span
                  className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl transition-transform duration-300 group-hover:scale-105 shadow-xs"
                  style={{
                    background: `color-mix(in srgb, ${sec.tint} 14%, var(--surface))`,
                    color: sec.tint,
                  }}
                >
                  {sec.iconSvg}
                </span>

                {/* Text Content */}
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                    <Link
                      href={sec.href}
                      className="text-lg font-bold text-ink transition hover:underline sm:text-xl"
                    >
                      {sec.title}
                    </Link>
                    <span className="jp text-xs font-semibold text-ink-3">
                      {sec.jp}
                    </span>
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-ink-2 sm:text-sm">
                    {sec.desc}
                  </p>
                </div>
              </div>

              {/* Right Column: Tags + Link Arrow */}
              <div className="relative z-20 flex flex-wrap items-center justify-start md:justify-end gap-1.5 pl-10 md:pl-0">
                {sec.tags.map((tag) => (
                  <Link
                    key={tag.label}
                    href={tag.href}
                    className="rounded-full border border-line bg-surface px-2.5 py-1 text-xs font-medium text-ink-2 transition hover:border-[var(--tint)] hover:text-ink hover:shadow-xs"
                  >
                    {tag.label}
                  </Link>
                ))}

                <Link
                  href={sec.href}
                  aria-label={`Xem ${sec.title}`}
                  className="hidden md:grid h-9 w-9 shrink-0 place-items-center rounded-full text-ink-3 transition group-hover:translate-x-1 group-hover:text-[var(--tint)]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
