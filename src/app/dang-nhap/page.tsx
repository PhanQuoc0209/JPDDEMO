"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

function DangNhapForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const nextUrl = searchParams.get("next") || "/";

  const [name, setName] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [course, setCourse] = useState("jpd113");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentUser, setCurrentUser] = useState<any>(null);

  useEffect(() => {
    const saved = localStorage.getItem("manabiman_user");
    if (saved) {
      try {
        setCurrentUser(JSON.parse(saved));
      } catch (e) {}
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const userObj = {
      name: name || "Sinh viên tiếng Nhật",
      class: studentClass || "JPD-2026",
      course: course,
      loggedInAt: Date.now(),
    };

    localStorage.setItem("manabiman_user", JSON.stringify(userObj));

    setTimeout(() => {
      router.push(nextUrl);
    }, 400);
  };

  const handleLogout = () => {
    localStorage.removeItem("manabiman_user");
    setCurrentUser(null);
  };

  return (
    <div className="grid min-h-[80vh] place-items-center px-5 py-12">
      <div className="w-full max-w-sm">
        {/* Genko Header Icon */}
        <div className="mb-8 text-center">
          <span className="mb-3 flex justify-center gap-1.5" aria-hidden="true">
            <span className="genko-cell h-11 w-11 rounded-sm shadow-xs">
              <span
                className="jp relative text-xl leading-none font-semibold"
                style={{ color: "var(--iro-1)" }}
              >
                学
              </span>
            </span>
            <span className="genko-cell h-11 w-11 rounded-sm shadow-xs">
              <span
                className="jp relative text-xl leading-none font-semibold"
                style={{ color: "var(--iro-2)" }}
              >
                び
              </span>
            </span>
          </span>
          <h1 className="text-xl font-bold tracking-tight text-ink">
            Chào mừng bạn đến với Manabiman
          </h1>
          <p className="mt-1 text-xs text-ink-3">
            Học tiếng Nhật với Dekiru Nihongo & JLPT
          </p>
        </div>

        {/* Login Box */}
        <div className="overflow-hidden rounded-3xl border border-line bg-surface p-6 sm:p-8 shadow-sm">
          {/* Decorative stamp */}
          <div className="relative">
            <div className="mb-6 border-b border-line pb-4 text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-ai-wash px-3 py-1 text-xs font-semibold text-ai">
                <span>🌸</span>
                <span>Thông tin người học</span>
              </div>
            </div>

            {currentUser ? (
              <div className="space-y-4 text-center">
                <div className="rounded-2xl border border-line bg-surface-2 p-4">
                  <p className="text-xs text-ink-3">Đang học với tài khoản:</p>
                  <p className="mt-1 text-base font-bold text-ink">{currentUser.name}</p>
                  <p className="text-xs font-mono text-ai font-semibold">{currentUser.class} • {currentUser.course.toUpperCase()}</p>
                </div>
                <div className="flex gap-2">
                  <Link
                    href="/"
                    className="flex-1 rounded-full bg-ai py-2.5 text-xs font-bold text-surface shadow-xs hover:bg-ai-2 transition"
                  >
                    Vào trang chủ →
                  </Link>
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="rounded-full border border-line bg-surface px-4 py-2.5 text-xs font-medium text-shu hover:bg-surface-2 transition cursor-pointer"
                  >
                    Đổi tài khoản
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-ink mb-1.5">
                    Họ và tên
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nguyễn Văn A"
                    className="w-full rounded-xl border border-line bg-surface-2 px-3.5 py-2.5 text-xs text-ink outline-none transition focus:border-ai focus:bg-surface"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-ink mb-1.5">
                    Lớp / Mã sinh viên
                  </label>
                  <input
                    type="text"
                    value={studentClass}
                    onChange={(e) => setStudentClass(e.target.value)}
                    placeholder="JPD113-FA26"
                    className="w-full rounded-xl border border-line bg-surface-2 px-3.5 py-2.5 text-xs text-ink outline-none transition focus:border-ai focus:bg-surface"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-ink mb-1.5">
                    Khoá học hiện tại
                  </label>
                  <select
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                    className="w-full rounded-xl border border-line bg-surface-2 px-3.5 py-2.5 text-xs text-ink outline-none transition focus:border-ai focus:bg-surface cursor-pointer"
                  >
                    <option value="jpd113">JPD113 — Japanese 1 (Nhập môn)</option>
                    <option value="jpd123">JPD123 — Japanese 2 (Sơ cấp 1)</option>
                    <option value="jpd133">JPD133 — Japanese 3 (Sơ cấp 2)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-full bg-ai py-3 text-xs font-bold text-surface shadow-md hover:bg-ai-2 transition active:scale-95 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? "Đang đăng nhập…" : "Vào học ngay →"}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Note */}
        <p className="mt-6 text-center text-xs leading-relaxed text-ink-3">
          Phần học lưu tiến độ và chữ hay quên trên thiết bị của bạn. Lần đầu vào, bạn sẽ được hỏi thông tin — những lần sau thì không hỏi lại.
        </p>
      </div>
    </div>
  );
}

export default function DangNhapPage() {
  return (
    <Suspense fallback={<div className="grid min-h-[80vh] place-items-center"><div className="text-xs text-ink-3">Đang tải...</div></div>}>
      <DangNhapForm />
    </Suspense>
  );
}
