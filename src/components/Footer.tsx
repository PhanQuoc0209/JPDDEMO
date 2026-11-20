import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative mt-20 border-t border-line bg-surface-2/60 pt-12 pb-16 transition-colors">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Col 1: Brand & Philosophy */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="flex gap-1" aria-hidden="true">
                <span className="genko-cell h-7 w-7 rounded-xs">
                  <span className="jp text-xs font-bold" style={{ color: "var(--iro-1)" }}>
                    日
                  </span>
                </span>
                <span className="genko-cell h-7 w-7 rounded-xs">
                  <span className="jp text-xs font-bold" style={{ color: "var(--iro-2)" }}>
                    本
                  </span>
                </span>
                <span className="genko-cell h-7 w-7 rounded-xs">
                  <span className="jp text-xs font-bold" style={{ color: "var(--iro-3)" }}>
                    語
                  </span>
                </span>
              </span>
              <span className="font-display text-lg font-bold text-ink">Manabiman</span>
            </div>
            <p className="text-xs leading-relaxed text-ink-2">
              Nền tảng học tiếng Nhật theo giáo trình Dekiru Nihongo & JLPT: Bảng chữ cái, Hán tự liên tưởng, từ vựng theo chủ đề, ngữ pháp ứng dụng và luyện gõ phản xạ.
            </p>
            <p className="jp mt-3 text-xs text-ink-3">
              一期一会 · 継続は力なり (Học đều mỗi ngày là chìa khóa thành công)
            </p>
          </div>

          {/* Col 2: Học tập */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-ink mb-3">
              Khóa học & Lộ trình
            </h4>
            <ul className="space-y-2 text-xs text-ink-2">
              <li>
                <Link href="/nhap-mon" className="hover:text-ai transition">
                  Làm quen Hiragana & Katakana
                </Link>
              </li>
              <li>
                <Link href="/han-tu" className="hover:text-ai transition">
                  Hán tự liên tưởng (JPD113 - JPD133)
                </Link>
              </li>
              <li>
                <Link href="/tu-vung" className="hover:text-ai transition">
                  Kho từ vựng theo bài học
                </Link>
              </li>
              <li>
                <Link href="/ngu-phap" className="hover:text-ai transition">
                  Ngữ pháp mẫu câu & luyện dịch
                </Link>
              </li>
              <li>
                <Link href="/shadowing" className="hover:text-ai transition">
                  Luyện nói phản xạ Shadowing
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Thực hành & Trò chơi */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-ink mb-3">
              Luyện tập & Giải trí
            </h4>
            <ul className="space-y-2 text-xs text-ink-2">
              <li>
                <Link href="/game/mua-chu" className="hover:text-ai transition">
                  Trò chơi Mưa chữ (Gõ Kana)
                </Link>
              </li>
              <li>
                <Link href="/game/tu-vung-hom-nay" className="hover:text-ai transition">
                  Từ vựng hôm nay (Wordle Tiếng Nhật)
                </Link>
              </li>
              <li>
                <Link href="/game/bang-xep-hang" className="hover:text-ai transition">
                  Bảng xếp hạng trò chơi
                </Link>
              </li>
              <li>
                <Link href="/ghi-nho" className="hover:text-ai transition">
                  Danh sách chữ hay quên (Ghi nhớ)
                </Link>
              </li>
              <li>
                <Link href="/thi" className="hover:text-ai transition">
                  Thi & Kiểm tra trực tuyến
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Tài liệu & Nguồn gốc */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-ink mb-3">
              Nguồn tư liệu
            </h4>
            <p className="text-xs leading-relaxed text-ink-2 mb-2">
              Dựa trên giáo trình:
            </p>
            <p className="jp text-xs font-medium text-ink bg-surface p-2.5 rounded-lg border border-line">
              『できる日本語 初級 本冊』
              <span className="block text-[0.68rem] text-ink-3 mt-0.5">
                嶋田和子 giám tu · アルク 2011
              </span>
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-line pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-ink-3 gap-3">
          <p>© {new Date().getFullYear()} Manabiman. Thiết kế học tập tiếng Nhật tương tác.</p>
          <div className="flex items-center gap-4">
            <Link href="/dang-nhap" className="hover:text-ai">
              Đăng nhập
            </Link>
            <span>·</span>
            <Link href="/" className="hover:text-ai">
              Trang chủ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
