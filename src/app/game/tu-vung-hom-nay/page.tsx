"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { WORDLE_WORDS } from "@/data/games";
import { AudioButton } from "@/components/AudioButton";

const KANA_KEYBOARD = [
  ["あ", "い", "う", "え", "お"],
  ["か", "き", "く", "け", "こ"],
  ["さ", "し", "す", "せ", "そ"],
  ["た", "ち", "つ", "て", "と"],
  ["な", "に", "ぬ", "ね", "の"],
  ["は", "ひ", "ふ", "へ", "ほ"],
  ["ま", "み", "む", "め", "も"],
  ["や", "ゆ", "よ", "わ", "を"],
  ["ら", "り", "る", "れ", "ろ"],
  ["ん", "っ", "ー", "Del", "Enter"],
];

export default function TuVungHomNayPage() {
  // Target daily word (selects based on current date)
  const todayWordObj = WORDLE_WORDS[Math.floor(Date.now() / 86400000) % WORDLE_WORDS.length] || WORDLE_WORDS[0];
  const targetWord = todayWordObj.word;
  const wordLength = targetWord.length;

  const [guesses, setGuesses] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [isWon, setIsWon] = useState(false);
  const [isLost, setIsLost] = useState(false);
  const [copied, setCopied] = useState(false);

  const isGameOver = isWon || isLost;

  const handleKeyPress = (char: string) => {
    if (isGameOver) return;

    if (char === "Del") {
      setCurrentGuess((prev) => prev.slice(0, -1));
      return;
    }

    if (char === "Enter") {
      if (currentGuess.length !== wordLength) {
        alert(`Vui lòng nhập đủ ${wordLength} chữ cái!`);
        return;
      }

      const nextGuesses = [...guesses, currentGuess];
      setGuesses(nextGuesses);

      if (currentGuess === targetWord) {
        setIsWon(true);
      } else if (nextGuesses.length >= 6) {
        setIsLost(true);
      }

      setCurrentGuess("");
      return;
    }

    if (currentGuess.length < wordLength) {
      setCurrentGuess((prev) => prev + char);
    }
  };

  const getTileColor = (rowIndex: number, charIndex: number) => {
    const guess = guesses[rowIndex];
    if (!guess) return "bg-surface border-line text-ink";

    const char = guess[charIndex];
    if (char === targetWord[charIndex]) {
      // Correct position - Green
      return "bg-matsuba text-surface border-matsuba font-bold";
    } else if (targetWord.includes(char)) {
      // Wrong position - Yellow
      return "bg-gold text-surface border-gold font-bold";
    } else {
      // Not in word - Gray
      return "bg-surface-2 text-ink-3 border-line font-medium";
    }
  };

  const copyResult = () => {
    const resultEmoji = guesses
      .map((g) =>
        g
          .split("")
          .map((ch, i) =>
            ch === targetWord[i] ? "🟩" : targetWord.includes(ch) ? "🟨" : "⬛"
          )
          .join("")
      )
      .join("\n");

    const text = `Manabiman — Từ vựng hôm nay\n${isWon ? guesses.length : "X"}/6\n\n${resultEmoji}\n\nhttps://manabiman.io.vn/game/tu-vung-hom-nay`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6">
      {/* Top Header */}
      <div className="mb-6 flex items-center justify-between">
        <Link
          href="/game"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink-2 hover:text-ai transition"
        >
          <span>←</span> Trò chơi
        </Link>
        <span className="font-mono text-xs text-ink-3">
          Từ hôm nay ({wordLength} chữ)
        </span>
      </div>

      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-ink sm:text-3xl">
          Từ vựng hôm nay
        </h1>
        <p className="jp text-xs text-ink-3 mt-1">今日の単語 · Đoán từ 6 lượt</p>
      </div>

      {/* Rules Notice */}
      <details className="mb-6 rounded-2xl border border-line bg-surface px-4 py-3 text-xs leading-relaxed text-ink-2 shadow-xs cursor-pointer">
        <summary className="font-semibold text-ink cursor-pointer">
          📖 Xem luật chơi & ý nghĩa màu sắc
        </summary>
        <div className="mt-3 space-y-2 border-t border-line pt-2 text-xs">
          <p>
            Mỗi ngày bạn nhận một từ tiếng Nhật viết bằng hiragana. Bạn có 6 lượt để đoán từ.
          </p>
          <div className="flex items-center gap-2">
            <span className="h-5 w-5 rounded-md bg-matsuba text-surface flex items-center justify-center font-bold">✓</span>
            <span><strong>Xanh lá:</strong> đúng chữ và đúng vị trí.</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-5 w-5 rounded-md bg-gold text-surface flex items-center justify-center font-bold">~</span>
            <span><strong>Vàng:</strong> có chữ này trong từ nhưng sai vị trí.</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-5 w-5 rounded-md bg-surface-2 text-ink-3 flex items-center justify-center font-bold border border-line">✕</span>
            <span><strong>Xám:</strong> chữ này không có trong từ.</span>
          </div>
        </div>
      </details>

      {/* Wordle 6-Row Grid */}
      <div className="flex flex-col items-center gap-2 my-6">
        {Array.from({ length: 6 }).map((_, rowIndex) => {
          const isCurrentRow = rowIndex === guesses.length;
          const guess = guesses[rowIndex] || (isCurrentRow ? currentGuess : "");

          return (
            <div key={rowIndex} className="flex gap-2">
              {Array.from({ length: wordLength }).map((_, colIndex) => {
                const char = guess[colIndex] || "";
                const isGuessed = rowIndex < guesses.length;
                const tileColor = isGuessed
                  ? getTileColor(rowIndex, colIndex)
                  : isCurrentRow && char
                  ? "bg-surface border-ai text-ink shadow-xs"
                  : "bg-surface border-line text-ink";

                return (
                  <div
                    key={colIndex}
                    className={`jp grid h-12 w-12 sm:h-14 sm:w-14 place-items-center rounded-2xl border-2 text-2xl font-bold transition-all ${tileColor}`}
                  >
                    {char}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      {/* Result Card when Game Over */}
      {isGameOver && (
        <div className="my-6 rounded-3xl border border-line bg-surface p-6 text-center shadow-md animate-fade-in">
          {isWon ? (
            <div>
              <span className="text-4xl block mb-2">🎉</span>
              <h3 className="text-xl font-bold text-matsuba">Chính xác!</h3>
              <p className="text-xs text-ink-2 mt-1">
                Bạn đã giải được từ hôm nay sau {guesses.length} lượt đoán.
              </p>
            </div>
          ) : (
            <div>
              <span className="text-4xl block mb-2">😢</span>
              <h3 className="text-xl font-bold text-shu">Hết lượt đoán!</h3>
              <p className="text-xs text-ink-2 mt-1">
                Đáp án chính xác là:
              </p>
            </div>
          )}

          {/* Word Details */}
          <div className="my-4 rounded-2xl bg-surface-2 p-4 inline-flex items-center gap-3">
            <div>
              <span className="jp text-2xl font-bold text-ink">{todayWordObj.word}</span>
              <span className="font-mono text-xs text-ai block">({todayWordObj.romaji})</span>
              <span className="text-xs text-ink-2 font-medium">{todayWordObj.meaning}</span>
            </div>
            <AudioButton text={todayWordObj.word} />
          </div>

          <div className="mt-3 flex justify-center">
            <button
              type="button"
              onClick={copyResult}
              className="rounded-full bg-ai px-6 py-2.5 text-xs font-semibold text-surface shadow-xs hover:bg-ai-2 transition cursor-pointer"
            >
              {copied ? "Đã chép kết quả! ✓" : "Chép kết quả chia sẻ 📋"}
            </button>
          </div>
        </div>
      )}

      {/* On-Screen Hiragana Keyboard */}
      {!isGameOver && (
        <div className="mt-8 rounded-3xl border border-line bg-surface p-4 shadow-sm">
          <div className="grid gap-1.5">
            {KANA_KEYBOARD.map((row, rIdx) => (
              <div key={rIdx} className="flex justify-center gap-1 sm:gap-1.5">
                {row.map((key) => {
                  const isSpecial = key === "Del" || key === "Enter";
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => handleKeyPress(key)}
                      className={`grid place-items-center rounded-xl border border-line transition active:scale-95 cursor-pointer font-bold ${
                        isSpecial
                          ? "px-3 py-2 text-xs bg-surface-2 text-ink-2 hover:bg-line"
                          : "h-9 w-9 sm:h-10 sm:w-10 jp text-sm bg-surface text-ink hover:bg-ai-wash hover:text-ai"
                      }`}
                    >
                      {key}
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
