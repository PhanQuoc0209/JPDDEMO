"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { EXAMS_DATA, ExamInfo } from "@/data/thi";

export default function ThiPage() {
  const [selectedExam, setSelectedExam] = useState<ExamInfo | null>(null);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [timeLeft, setTimeLeft] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Start exam
  const startExam = (exam: ExamInfo) => {
    setSelectedExam(exam);
    setCurrentQIndex(0);
    setUserAnswers({});
    setTimeLeft(exam.durationMinutes * 60);
    setIsSubmitted(false);
  };

  // Timer countdown
  useEffect(() => {
    if (!selectedExam || isSubmitted || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setIsSubmitted(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [selectedExam, isSubmitted, timeLeft]);

  const handleSelectOption = (questionId: number, optionIndex: number) => {
    if (isSubmitted) return;
    setUserAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  };

  const calculateScore = () => {
    if (!selectedExam) return { correct: 0, total: 0, percentage: 0 };
    let correct = 0;
    selectedExam.questions.forEach((q) => {
      if (userAnswers[q.id] === q.answer) {
        correct++;
      }
    });
    const total = selectedExam.questions.length;
    return {
      correct,
      total,
      percentage: Math.round((correct / total) * 100),
    };
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  // View: Exam Taking
  if (selectedExam) {
    const currentQuestion = selectedExam.questions[currentQIndex];
    const scoreResult = calculateScore();

    return (
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        {/* Top Sticky Bar */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-line bg-surface p-4 shadow-xs sticky top-16 z-30">
          <div>
            <h2 className="text-sm font-bold text-ink">{selectedExam.title}</h2>
            <span className="text-xs text-ink-3">
              Câu {currentQIndex + 1} / {selectedExam.questions.length}
            </span>
          </div>

          {!isSubmitted && (
            <div className="flex items-center gap-3">
              <span className="font-mono text-base font-bold text-shu bg-shu/10 px-3 py-1 rounded-full">
                ⏱️ {formatTime(timeLeft)}
              </span>
              <button
                type="button"
                onClick={() => {
                  if (confirm("Bạn có chắc chắn muốn nộp bài thi?")) {
                    setIsSubmitted(true);
                  }
                }}
                className="rounded-full bg-ai px-4 py-1.5 text-xs font-semibold text-surface hover:bg-ai-2 transition cursor-pointer"
              >
                Nộp bài
              </button>
            </div>
          )}

          {isSubmitted && (
            <button
              type="button"
              onClick={() => setSelectedExam(null)}
              className="rounded-full border border-line bg-surface px-4 py-1.5 text-xs font-semibold text-ink hover:bg-surface-2 transition cursor-pointer"
            >
              ← Về danh sách đề
            </button>
          )}
        </div>

        {/* Score Banner when Submitted */}
        {isSubmitted && (
          <div className="mb-8 rounded-3xl border border-line bg-surface p-6 sm:p-8 text-center shadow-md animate-fade-in">
            <span className="text-5xl block mb-2">
              {scoreResult.percentage >= 70 ? "🎉" : "📚"}
            </span>
            <h3 className="text-2xl font-bold text-ink mb-1">
              {scoreResult.percentage >= 70 ? "Đạt kết quả xuất sắc!" : "Cần ôn tập thêm!"}
            </h3>
            <p className="text-xs text-ink-2 mb-4">
              Bạn trả lời đúng {scoreResult.correct} trên tổng số {scoreResult.total} câu ({scoreResult.percentage}%)
            </p>

            <div className="inline-flex gap-3">
              <button
                type="button"
                onClick={() => startExam(selectedExam)}
                className="rounded-full bg-ai px-6 py-2.5 text-xs font-semibold text-surface hover:bg-ai-2 transition cursor-pointer"
              >
                Làm lại đề này 🔄
              </button>
              <button
                type="button"
                onClick={() => setSelectedExam(null)}
                className="rounded-full border border-line bg-surface px-6 py-2.5 text-xs font-semibold text-ink-2 hover:bg-surface-2 transition cursor-pointer"
              >
                Chọn đề khác
              </button>
            </div>
          </div>
        )}

        {/* Question Area */}
        <div className="rounded-3xl border border-line bg-surface p-6 sm:p-8 shadow-xs">
          <div className="mb-4 flex items-center justify-between text-xs">
            <span className="rounded-full bg-surface-2 px-2.5 py-1 font-semibold text-ink-2">
              Câu {currentQIndex + 1}
            </span>
            <span className="font-mono text-ink-3 uppercase">
              {currentQuestion.type}
            </span>
          </div>

          <h3 className="jp text-xl sm:text-2xl font-bold text-ink mb-6 leading-relaxed">
            {currentQuestion.question}
          </h3>

          {/* Options */}
          <div className="grid gap-3 sm:grid-cols-2 mb-8">
            {currentQuestion.options.map((opt, oIdx) => {
              const isSelected = userAnswers[currentQuestion.id] === oIdx;
              const isCorrectAnswer = currentQuestion.answer === oIdx;

              let styleClass = "border-line bg-surface hover:border-line-2 hover:bg-surface-2";
              if (isSubmitted) {
                if (isCorrectAnswer) {
                  styleClass = "border-matsuba bg-matsuba/15 text-matsuba font-bold";
                } else if (isSelected && !isCorrectAnswer) {
                  styleClass = "border-shu bg-shu/15 text-shu font-bold";
                }
              } else if (isSelected) {
                styleClass = "border-ai bg-ai-wash text-ai font-bold shadow-xs";
              }

              return (
                <button
                  key={oIdx}
                  type="button"
                  disabled={isSubmitted}
                  onClick={() => handleSelectOption(currentQuestion.id, oIdx)}
                  className={`flex items-center gap-3 rounded-2xl border p-4 text-left text-sm transition cursor-pointer ${styleClass}`}
                >
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-xl bg-surface-2 font-mono text-xs font-bold text-ink">
                    {String.fromCharCode(65 + oIdx)}
                  </span>
                  <span className="jp flex-1 font-medium">{opt}</span>
                </button>
              );
            })}
          </div>

          {/* Explanation if submitted */}
          {isSubmitted && (
            <div className="mb-6 rounded-2xl bg-surface-2/80 p-4 text-xs leading-relaxed text-ink-2 border border-line">
              <strong className="text-ink">Giải thích:</strong> {currentQuestion.explanation}
            </div>
          )}

          {/* Navigation buttons */}
          <div className="flex items-center justify-between border-t border-line pt-4">
            <button
              type="button"
              disabled={currentQIndex === 0}
              onClick={() => setCurrentQIndex((i) => i - 1)}
              className="rounded-full border border-line bg-surface px-4 py-2 text-xs font-semibold text-ink-2 hover:bg-surface-2 disabled:opacity-30 cursor-pointer"
            >
              ← Câu trước
            </button>
            <button
              type="button"
              disabled={currentQIndex === selectedExam.questions.length - 1}
              onClick={() => setCurrentQIndex((i) => i + 1)}
              className="rounded-full bg-ai px-5 py-2 text-xs font-semibold text-surface hover:bg-ai-2 disabled:opacity-30 cursor-pointer"
            >
              Câu tiếp →
            </button>
          </div>
        </div>

        {/* Question Grid Navigator */}
        <div className="mt-6 rounded-2xl border border-line bg-surface p-4 flex flex-wrap gap-2 justify-center">
          {selectedExam.questions.map((q, idx) => {
            const isAnswered = userAnswers[q.id] !== undefined;
            const isCurrent = currentQIndex === idx;

            let badgeClass = "border-line bg-surface text-ink-2";
            if (isSubmitted) {
              const isCorrect = userAnswers[q.id] === q.answer;
              badgeClass = isCorrect
                ? "bg-matsuba text-surface border-matsuba"
                : "bg-shu text-surface border-shu";
            } else if (isCurrent) {
              badgeClass = "border-ai bg-ai text-surface";
            } else if (isAnswered) {
              badgeClass = "border-ai/40 bg-ai-wash text-ai";
            }

            return (
              <button
                key={q.id}
                type="button"
                onClick={() => setCurrentQIndex(idx)}
                className={`grid h-8 w-8 place-items-center rounded-xl border font-mono text-xs font-bold transition cursor-pointer ${badgeClass}`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // View: Exam List
  return (
    <div className="relative isolate mx-auto max-w-5xl px-5 py-10 lg:py-16">
      {/* Header */}
      <div className="mb-10 text-center sm:text-left">
        <span className="jp text-xs font-bold uppercase tracking-wider text-ai bg-ai-wash px-3 py-1 rounded-full">
          試験 · Thi trực tuyến
        </span>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Bài thi & Đánh giá năng lực
        </h1>
        <p className="mt-2 text-sm text-ink-2 max-w-2xl">
          Đề thi trắc nghiệm bấm giờ theo chuẩn JLPT và chương trình học phần JPD113 - JPD133. Chấm điểm tức thì kèm giải thích chi tiết.
        </p>
      </div>

      {/* Exam Cards */}
      <div className="grid gap-6 sm:grid-cols-2">
        {EXAMS_DATA.map((exam) => (
          <div
            key={exam.id}
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-line bg-surface p-6 sm:p-8 shadow-xs transition hover:shadow-md hover:border-ai/50"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold text-ai rounded-full bg-ai-wash px-3 py-1">
                  {exam.course}
                </span>
                <span className="text-xs text-ink-3">
                  ⏱️ {exam.durationMinutes} phút · {exam.totalQuestions} câu
                </span>
              </div>

              <h2 className="text-xl font-bold text-ink mb-2">{exam.title}</h2>
              <p className="text-xs text-ink-2 leading-relaxed mb-6">
                {exam.description}
              </p>
            </div>

            <div className="border-t border-line pt-4 flex items-center justify-between">
              <span className="text-xs text-ink-3">Chấm điểm tự động</span>
              <button
                type="button"
                onClick={() => startExam(exam)}
                className="rounded-full bg-ai px-6 py-2.5 text-xs font-semibold text-surface hover:bg-ai-2 transition shadow-xs cursor-pointer"
              >
                Bắt đầu làm bài →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
