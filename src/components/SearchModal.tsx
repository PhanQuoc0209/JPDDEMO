"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, X, BookOpen, Sparkles, Languages, HelpCircle } from "lucide-react";
import { COURSES } from "@/data/courses";
import { KANJI_DATA } from "@/data/kanji";
import { VOCABULARY_DATA } from "@/data/vocabulary";
import { GRAMMAR_DATA } from "@/data/grammar";

interface SearchResult {
  id: string;
  type: "course" | "kanji" | "vocab" | "grammar" | "kana";
  title: string;
  subtitle: string;
  href: string;
  badge: string;
}

export function SearchModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery("");
    }
  }, [isOpen]);

  // Keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Trigger open
        }
      } else if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Aggregate searchable items
  const allSearchable = useMemo(() => {
    const list: SearchResult[] = [];

    // Kana
    list.push({
      id: "kana-hira",
      type: "kana",
      title: "Bảng chữ Hiragana (103 chữ)",
      subtitle: "Bảng chữ mềm cơ bản kèm âm đục, âm ghép và mẹo nhớ",
      href: "/nhap-mon/hiragana/bang-chu",
      badge: "Làm quen",
    });
    list.push({
      id: "kana-kata",
      type: "kana",
      title: "Bảng chữ Katakana (101 chữ)",
      subtitle: "Bảng chữ cứng từ mượn tiếng nước ngoài",
      href: "/nhap-mon/katakana/bang-chu",
      badge: "Làm quen",
    });

    // Courses
    COURSES.forEach((c) => {
      list.push({
        id: `course-${c.id}`,
        type: "course",
        title: `${c.code} — ${c.title}`,
        subtitle: `${c.nameJp} • ${c.description}`,
        href: `/tu-vung/${c.id}`,
        badge: "Khóa học",
      });
    });

    // Sample kanji
    Object.values(KANJI_DATA).forEach((les) => {
      les.items.slice(0, 5).forEach((k) => {
        list.push({
          id: `kanji-${k.glyph}`,
          type: "kanji",
          title: `${k.glyph} [${k.hanViet}]`,
          subtitle: `${k.meaning} • Onyomi: ${k.onyomi.join(", ")}`,
          href: `/han-tu/${k.course}/${k.lesson}`,
          badge: "Hán tự",
        });
      });
    });

    // Sample vocabulary
    Object.entries(VOCABULARY_DATA).forEach(([lesId, les]) => {
      les.items.slice(0, 4).forEach((v) => {
        list.push({
          id: `vocab-${v.id}`,
          type: "vocab",
          title: `${v.word} (${v.reading})`,
          subtitle: `${v.meaning} • ${v.romaji}`,
          href: `/tu-vung/${lesId.split("-")[0]}/${lesId}`,
          badge: "Từ vựng",
        });
      });
    });

    // Sample grammar
    Object.entries(GRAMMAR_DATA).forEach(([lesId, les]) => {
      les.items.slice(0, 3).forEach((g) => {
        list.push({
          id: `grammar-${g.id}`,
          type: "grammar",
          title: g.pattern,
          subtitle: g.meaning,
          href: `/ngu-phap/${lesId.split("-")[0]}/${lesId}`,
          badge: "Ngữ pháp",
        });
      });
    });

    return list;
  }, []);

  const filtered = useMemo(() => {
    if (!query.trim()) return allSearchable.slice(0, 8);
    const q = query.toLowerCase().trim();
    return allSearchable
      .filter(
        (it) =>
          it.title.toLowerCase().includes(q) ||
          it.subtitle.toLowerCase().includes(q) ||
          it.badge.toLowerCase().includes(q)
      )
      .slice(0, 12);
  }, [allSearchable, query]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl rounded-2xl border border-line bg-surface shadow-2xl overflow-hidden glass-panel"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search header */}
        <div className="flex items-center gap-3 border-b border-line px-4 py-3.5">
          <Search className="w-5 h-5 text-ai shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Tìm kiếm bài học, từ vựng, ngữ pháp, Hán tự..."
            className="w-full bg-transparent text-sm text-ink placeholder:text-ink-3 outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="text-ink-3 hover:text-ink p-1 rounded-md"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-block rounded border border-line px-1.5 py-0.5 font-mono text-[10px] text-ink-3">
            ESC
          </kbd>
        </div>

        {/* Results list */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <div className="p-8 text-center text-xs text-ink-3">
              Không tìm thấy kết quả phù hợp cho &ldquo;{query}&rdquo;
            </div>
          ) : (
            filtered.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={onClose}
                className="flex items-center justify-between gap-3 p-3 rounded-xl hover:bg-surface-2 transition group cursor-pointer"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-ai-wash text-ai text-xs font-bold">
                    {item.type === "kanji" ? (
                      <span className="jp text-sm">{item.title[0]}</span>
                    ) : item.type === "grammar" ? (
                      <Sparkles className="w-4 h-4" />
                    ) : item.type === "vocab" ? (
                      <Languages className="w-4 h-4" />
                    ) : (
                      <BookOpen className="w-4 h-4" />
                    )}
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-ink group-hover:text-ai transition truncate">
                      {item.title}
                    </p>
                    <p className="text-[11px] text-ink-3 truncate">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                <span className="shrink-0 text-[10px] font-semibold text-ink-3 bg-surface px-2 py-0.5 rounded-full border border-line">
                  {item.badge}
                </span>
              </Link>
            ))
          )}
        </div>

        {/* Search footer */}
        <div className="flex items-center justify-between border-t border-line px-4 py-2.5 text-[11px] text-ink-3 bg-surface-2/40">
          <span>Gợi ý: Hiragana, Kanji, Từ vựng, Ngữ pháp</span>
          <span>Bấm <kbd className="font-mono font-bold text-ink">Enter</kbd> để mở</span>
        </div>
      </div>
    </div>
  );
}
