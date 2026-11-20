"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { MUA_CHU_DATA } from "@/data/games";

interface Drop {
  id: number;
  glyph: string;
  romaji: string;
  x: number; // percentage 10% - 90%
  y: number; // percentage 0% - 100%
  speed: number;
}

const COMBO_PRAISES: Record<number, string> = {
  3: "Tốt lắm! 👍",
  5: "Xuất sắc! 🔥",
  8: "Không thể cản! ⚡",
  12: "Đẳng cấp quá trời! 🌟",
  18: "Thần đồng tiếng Nhật! 🏆",
};

export default function MuaChuGamePage() {
  const [script, setScript] = useState<"hira" | "kata">("hira");
  const [isPlaying, setIsPlaying] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [combo, setCombo] = useState(0);
  const [maxCombo, setMaxCombo] = useState(0);
  const [praise, setPraise] = useState<string | null>(null);
  const [inputVal, setInputVal] = useState("");
  const [drops, setDrops] = useState<Drop[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);
  const nextDropId = useRef(1);

  // Load high score
  useEffect(() => {
    const saved = localStorage.getItem("manabiman_muachu_high");
    if (saved) setHighScore(parseInt(saved, 10));
  }, []);

  const kanaList = MUA_CHU_DATA[script] || MUA_CHU_DATA.hira;

  const startGame = () => {
    setIsPlaying(true);
    setIsGameOver(false);
    setScore(0);
    setLives(3);
    setCombo(0);
    setMaxCombo(0);
    setDrops([]);
    setInputVal("");
    nextDropId.current = 1;
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  // Spawn new drop
  const spawnDrop = useCallback(() => {
    const randomItem = kanaList[Math.floor(Math.random() * kanaList.length)];
    const newDrop: Drop = {
      id: nextDropId.current++,
      glyph: randomItem.glyph,
      romaji: randomItem.romaji,
      x: 10 + Math.random() * 80, // between 10% and 90%
      y: 0,
      speed: 0.35 + Math.random() * 0.25,
    };
    setDrops((prev) => [...prev, newDrop]);
  }, [kanaList]);

  // Main game tick loop
  useEffect(() => {
    if (!isPlaying || isGameOver) return;

    // Drop spawner interval
    const spawnTimer = setInterval(() => {
      spawnDrop();
    }, 1800);

    // Drop movement interval (30fps)
    const moveTimer = setInterval(() => {
      setDrops((prevDrops) => {
        let lifeLost = false;
        const nextDrops: Drop[] = [];

        for (const drop of prevDrops) {
          const newY = drop.y + drop.speed;
          if (newY >= 95) {
            // Hit ground!
            lifeLost = true;
          } else {
            nextDrops.push({ ...drop, y: newY });
          }
        }

        if (lifeLost) {
          setCombo(0);
          setLives((l) => {
            const nextL = l - 1;
            if (nextL <= 0) {
              setIsGameOver(true);
              setIsPlaying(false);
            }
            return nextL;
          });
        }

        return nextDrops;
      });
    }, 40);

    return () => {
      clearInterval(spawnTimer);
      clearInterval(moveTimer);
    };
  }, [isPlaying, isGameOver, spawnDrop]);

  // Handle typing input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.toLowerCase().trim();
    setInputVal(val);

    // Check if matches any active drop
    const matchedIndex = drops.findIndex(
      (d) => d.romaji.toLowerCase() === val
    );

    if (matchedIndex !== -1) {
      const matched = drops[matchedIndex];
      // Pop drop!
      setDrops((prev) => prev.filter((d) => d.id !== matched.id));
      setInputVal("");

      // Score & combo
      const newCombo = combo + 1;
      setCombo(newCombo);
      setMaxCombo((m) => Math.max(m, newCombo));
      const points = 10 + newCombo * 2;
      setScore((s) => {
        const nextScore = s + points;
        if (nextScore > highScore) {
          setHighScore(nextScore);
          localStorage.setItem("manabiman_muachu_high", nextScore.toString());
        }
        return nextScore;
      });

      // Sound
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(matched.glyph);
        u.lang = "ja-JP";
        window.speechSynthesis.speak(u);
      }

      // Combo praise
      if (COMBO_PRAISES[newCombo]) {
        setPraise(COMBO_PRAISES[newCombo]);
        setTimeout(() => setPraise(null), 1500);
      }
    }
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      {/* Top Header */}
      <div className="mb-4 flex items-center justify-between">
        <Link
          href="/game"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink-2 hover:text-ai transition"
        >
          <span>←</span> Trò chơi
        </Link>
        <div className="flex items-center gap-4 text-xs font-semibold">
          <span>Kỷ lục: <strong className="font-mono text-ai">{highScore}</strong></span>
        </div>
      </div>

      {/* Main Game Screen */}
      <div className="relative overflow-hidden rounded-3xl border-2 border-line bg-surface shadow-md">
        {/* Sky Header: Stats */}
        <div className="flex items-center justify-between border-b border-line bg-surface-2/60 px-6 py-3 text-xs font-semibold">
          <div className="flex items-center gap-1 text-shu">
            <span>Mạng:</span>
            {Array.from({ length: 3 }).map((_, i) => (
              <span key={i} className="text-sm">
                {i < lives ? "❤️" : "🖤"}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span>Điểm:</span>
            <span className="font-mono text-base font-bold text-ai">{score}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <span>Chuỗi:</span>
            <span className="font-mono text-base font-bold text-gold">{combo}🔥</span>
          </div>
        </div>

        {/* Rain Play Area */}
        <div className="relative h-[26rem] sm:h-[32rem] w-full overflow-hidden bg-gradient-to-b from-surface via-surface to-ai-wash/30">
          {/* Combo Praise Popup */}
          {praise && (
            <div className="absolute top-8 left-1/2 -translate-x-1/2 z-30 rounded-full bg-ai px-5 py-1.5 text-xs font-bold text-surface shadow-md animate-bounce">
              {praise}
            </div>
          )}

          {/* Falling Drops */}
          {isPlaying &&
            drops.map((drop) => (
              <div
                key={drop.id}
                style={{
                  left: `${drop.x}%`,
                  top: `${drop.y}%`,
                }}
                className="absolute -translate-x-1/2 flex flex-col items-center pointer-events-none transition-all duration-75"
              >
                <div className="genko-cell h-12 w-12 rounded-2xl shadow-sm border border-line bg-surface">
                  <span className="jp text-xl font-bold text-ink">
                    {drop.glyph}
                  </span>
                </div>
              </div>
            ))}

          {/* Start Screen Overlay */}
          {!isPlaying && !isGameOver && (
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center bg-surface/90 backdrop-blur-xs">
              <span className="text-5xl mb-3">🌧️</span>
              <h2 className="text-2xl font-bold text-ink">Trò chơi Mưa chữ</h2>
              <p className="mt-2 text-xs text-ink-2 max-w-sm">
                Gõ nhanh romaji của chữ cái đang rơi trước khi chạm mặt đất!
              </p>

              {/* Script selector */}
              <div className="my-6 flex gap-2">
                <button
                  type="button"
                  onClick={() => setScript("hira")}
                  className={`rounded-full px-4 py-2 text-xs font-bold transition cursor-pointer ${
                    script === "hira"
                      ? "bg-ai text-surface shadow-xs"
                      : "border border-line bg-surface text-ink-2 hover:bg-surface-2"
                  }`}
                >
                  Bảng Hiragana (Chữ mềm)
                </button>
                <button
                  type="button"
                  onClick={() => setScript("kata")}
                  className={`rounded-full px-4 py-2 text-xs font-bold transition cursor-pointer ${
                    script === "kata"
                      ? "bg-shu text-surface shadow-xs"
                      : "border border-line bg-surface text-ink-2 hover:bg-surface-2"
                  }`}
                >
                  Bảng Katakana (Chữ cứng)
                </button>
              </div>

              <button
                type="button"
                onClick={startGame}
                className="rounded-full bg-ai px-8 py-3.5 text-sm font-bold text-surface shadow-md hover:bg-ai-2 transition active:scale-95 cursor-pointer"
              >
                Bắt đầu chơi ngay 🎮
              </button>
            </div>
          )}

          {/* Game Over Screen */}
          {isGameOver && (
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center bg-surface/95 backdrop-blur-xs">
              <span className="text-5xl mb-2">💥</span>
              <h2 className="text-2xl font-bold text-shu">Hết lượt chơi!</h2>
              <p className="mt-1 text-xs text-ink-2">
                Bạn đã hoàn thành lượt chơi hôm nay.
              </p>

              <div className="my-6 grid grid-cols-2 gap-4 rounded-2xl border border-line bg-surface-2 p-4 text-center">
                <div>
                  <span className="block text-[0.7rem] text-ink-3">Điểm số</span>
                  <span className="font-mono text-2xl font-bold text-ai">{score}</span>
                </div>
                <div>
                  <span className="block text-[0.7rem] text-ink-3">Chuỗi cao nhất</span>
                  <span className="font-mono text-2xl font-bold text-gold">{maxCombo}🔥</span>
                </div>
              </div>

              <button
                type="button"
                onClick={startGame}
                className="rounded-full bg-ai px-8 py-3 text-xs font-bold text-surface shadow-md hover:bg-ai-2 transition active:scale-95 cursor-pointer"
              >
                Chơi lại ván mới 🔄
              </button>
            </div>
          )}
        </div>

        {/* Typing Input Bar */}
        <div className="border-t border-line bg-surface p-4 sm:p-5 flex items-center justify-center">
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={handleInputChange}
            disabled={!isPlaying}
            placeholder={isPlaying ? "Gõ romaji ở đây..." : "Bấm Bắt đầu để chơi"}
            className="w-full max-w-sm rounded-full border-2 border-line bg-surface-2 px-6 py-3 text-center font-mono text-lg font-bold text-ink outline-none transition focus:border-ai focus:bg-surface disabled:opacity-50"
          />
        </div>
      </div>
    </div>
  );
}
