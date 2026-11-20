"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AudioButton } from "@/components/AudioButton";

interface SavedItem {
  id: string | number;
  type: "kanji" | "vocab" | "grammar";
  label: string;
  savedAt: number;
}

export default function GhiNhoPage() {
  const [items, setItems] = useState<SavedItem[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("manabiman_saved_index");
    if (saved) {
      try {
        setItems(JSON.parse(saved));
      } catch (e) {
        setItems([]);
      }
    }
  }, []);

  const handleRemove = (id: string | number, type: string) => {
    const updated = items.filter((item) => !(item.id === id && item.type === type));
    setItems(updated);
    localStorage.setItem("manabiman_saved_index", JSON.stringify(updated));
    localStorage.removeItem(`manabiman_saved_${type}_${id}`);
  };

  const addSampleItems = () => {
    const sample: SavedItem[] = [
      { id: "私", type: "kanji", label: "私 (TƯ - Tôi)", savedAt: Date.now() },
      { id: "日本", type: "vocab", label: "日本 (にほん - Nhật Bản)", savedAt: Date.now() },
      { id: "学校", type: "vocab", label: "学校 (がっこう - Trường học)", savedAt: Date.now() },
      { id: "生", type: "kanji", label: "生 (SINH - Sinh viên/sống)", savedAt: Date.now() },
    ];
    setItems(sample);
    localStorage.setItem("manabiman_saved_index", JSON.stringify(sample));
    sample.forEach((s) => {
      localStorage.setItem(`manabiman_saved_${s.type}_${s.id}`, "true");
    });
  };

  if (!mounted) return null;

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:py-12">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-shu text-2xl text-surface shadow-xs">
            🔖
          </span>
          <div>
            <h1 className="text-2xl font-bold text-ink sm:text-3xl">
              Chữ hay quên
            </h1>
            <p className="mt-1 text-xs text-ink-2">
              Danh sách chữ Hán và từ vựng bạn đã đánh dấu — ôn lại bằng Học nhanh hoặc nghe phát âm.
            </p>
          </div>
        </div>
      </div>

      {/* List Content */}
      {items.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-line bg-surface p-12 text-center">
          <span className="jp mb-3 block text-6xl text-ink-3 opacity-30">記</span>
          <h3 className="text-lg font-bold text-ink mb-1">Chưa có chữ nào được đánh dấu</h3>
          <p className="mx-auto max-w-sm text-xs text-ink-2 mb-6">
            Bấm vào biểu tượng đánh dấu 🔖 ở các thẻ từ vựng hoặc Hán tự trong bài học để lưu chữ hay quên vào đây.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={addSampleItems}
              className="rounded-full bg-ai px-5 py-2.5 text-xs font-semibold text-surface shadow-xs hover:bg-ai-2 transition cursor-pointer"
            >
              Thêm chữ mẫu vào danh sách +
            </button>
            <Link
              href="/tu-vung"
              className="rounded-full border border-line bg-surface px-5 py-2.5 text-xs font-semibold text-ink-2 hover:border-ai/50 hover:text-ai transition"
            >
              Đến kho từ vựng →
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="mb-4 flex items-center justify-between text-xs text-ink-3">
            <span>Đã lưu {items.length} chữ</span>
            <button
              type="button"
              onClick={() => {
                if (confirm("Xoá toàn bộ danh sách đã lưu?")) {
                  items.forEach((item) => {
                    localStorage.removeItem(`manabiman_saved_${item.type}_${item.id}`);
                  });
                  setItems([]);
                  localStorage.removeItem("manabiman_saved_index");
                }
              }}
              className="text-shu hover:underline cursor-pointer"
            >
              Xoá tất cả
            </button>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {items.map((item) => (
              <div
                key={`${item.type}-${item.id}`}
                className="group relative flex items-center justify-between gap-3 rounded-2xl border border-line bg-surface p-4 shadow-xs hover:border-ai/50 transition"
              >
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-xl font-bold text-xs ${
                      item.type === "kanji"
                        ? "bg-shu/10 text-shu"
                        : "bg-ai/10 text-ai"
                    }`}
                  >
                    {item.type === "kanji" ? "漢" : "語"}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="jp text-base font-bold text-ink truncate">
                      {item.label}
                    </p>
                    <span className="text-[0.68rem] text-ink-3">
                      Đã lưu {new Date(item.savedAt).toLocaleDateString("vi-VN")}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <AudioButton text={String(item.id)} size="sm" />
                  <button
                    type="button"
                    onClick={() => handleRemove(item.id, item.type)}
                    title="Xoá khỏi danh sách"
                    className="grid h-8 w-8 place-items-center rounded-full text-ink-3 hover:text-shu hover:bg-shu/10 transition cursor-pointer"
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
