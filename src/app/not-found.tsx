import Link from "next/link";

export default function NotFound() {
  return (
    <div className="grid min-h-[70vh] place-items-center px-5 py-16">
      <div className="max-w-md text-center">
        <p className="jp mb-3 text-6xl text-ink-3">迷</p>
        <h1 className="mb-2 text-xl font-semibold text-ink">Không có trang này</h1>
        <p className="mb-6 text-sm leading-relaxed text-ink-2">
          Đường dẫn không tồn tại, hoặc nội dung đã chuyển sang chỗ khác.
        </p>
        <Link
          href="/"
          className="inline-block rounded-full bg-ai px-6 py-2.5 text-sm font-semibold text-surface transition hover:bg-ai-2"
        >
          Về trang chủ
        </Link>
      </div>
    </div>
  );
}
