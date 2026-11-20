"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/contexts/ThemeContext";
import {
  Calendar,
  Play,
  Flame,
  Star,
  Sparkles,
  ChevronRight,
  BookOpen,
  Languages,
  Check,
  Lock,
  Flag,
  Target,
  ArrowRight,
  Layers,
} from "lucide-react";

export default function HomePage() {
  const { isDark } = useTheme();
  const [userName, setUserName] = useState("Phan Quốc");
  const [currentDateStr, setCurrentDateStr] = useState("Thứ Sáu, 21 tháng 11, 2025");

  useEffect(() => {
    // Load saved user
    try {
      const saved = localStorage.getItem("manabiman_user");
      if (saved) {
        const u = JSON.parse(saved);
        if (u.name) setUserName(u.name);
      }
    } catch (e) {}

    // Dynamic date format in Vietnamese
    try {
      const now = new Date();
      const days = [
        "Chủ Nhật",
        "Thứ Hai",
        "Thứ Ba",
        "Thứ Tư",
        "Thứ Năm",
        "Thứ Sáu",
        "Thứ Bảy",
      ];
      const dayName = days[now.getDay()];
      const day = now.getDate();
      const month = now.getMonth() + 1;
      const year = now.getFullYear();
      setCurrentDateStr(`${dayName}, ${day} tháng ${month}, ${year}`);
    } catch (e) {}
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8 space-y-5 select-none">
      {/* ======================================================== */}
      {/* 1. HERO SECTION                                          */}
      {/* ======================================================== */}
      <section className="relative overflow-hidden rounded-3xl border border-[#E5DDFB] dark:border-violet-500/25 shadow-lg min-h-[220px] sm:min-h-[240px] flex flex-col justify-center p-6 sm:p-7 lg:p-8 transition-colors duration-300">
        {/* Master Anime Illustration Background (Ảnh 1) */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/redesign/hero_master_anime.jpg"
            alt="Japanese Anime Landscape Mascot"
            fill
            priority
            unoptimized
            className="object-cover object-[78%_center] sm:object-[center_right] lg:object-right transition-transform duration-700 hover:scale-[1.02]"
          />

          {/* Left-side soft wash gradient: light mode lavender/white, dark mode deep navy/violet */}
          <div
            style={{
              background: isDark
                ? "linear-gradient(90deg, rgba(17, 13, 41, 0.97) 0%, rgba(22, 17, 53, 0.9) 55%, rgba(22, 17, 53, 0) 100%)"
                : "linear-gradient(90deg, rgba(249, 247, 255, 0.95) 0%, rgba(249, 247, 255, 0.8) 55%, rgba(249, 247, 255, 0) 100%)",
            }}
            className="absolute inset-0 pointer-events-none w-full sm:w-[65%] lg:w-[58%] transition-colors duration-300"
          />

          {/* Dark mode atmospheric twilight tint so the anime mascot & scenery blend with dark dashboard */}
          {isDark && (
            <div className="absolute inset-0 pointer-events-none bg-[#0e0a20]/35 backdrop-brightness-95" />
          )}
        </div>

        {/* Hero Left Content with 3D Embossed Floating Text & Gradual Entrance Reveal */}
        <div className="relative z-10 max-w-lg space-y-3">
          {/* Date pill badge - Emerge 1 */}
          <div className="anim-emerge-1 inline-flex items-center gap-2 rounded-full border border-[#E5DDFB] bg-white/95 dark:border-violet-400/25 dark:bg-[#181335]/90 px-3.5 py-1 text-xs font-semibold text-[#7C3AED] dark:text-violet-300 backdrop-blur-md shadow-xs">
            <Calendar className="w-3.5 h-3.5 text-[#7C3AED] dark:text-violet-400" />
            <span>{currentDateStr}</span>
          </div>

          {/* Large Greeting - Emerge 2 with 3D Embossed Floating Effect */}
          <h1 className="anim-emerge-2 hero-embossed-title jp text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight flex items-center gap-2.5">
            <span className="tracking-wide">こんにちは!</span>
            <span className="animate-wiggle">👋</span>
          </h1>

          {/* Subheading & Motto - Emerge 3 & 4 with 3D Embossed Floating Effect */}
          <div className="space-y-1">
            <h2 className="anim-emerge-3 hero-embossed-sub text-lg sm:text-xl font-extrabold text-[#21164F] dark:text-white">
              Chào mừng bạn quay lại{userName ? `, ${userName}` : ""}!
            </h2>
            <p className="anim-emerge-4 hero-embossed-sub text-xs sm:text-sm font-semibold text-[#635889] dark:text-violet-200/90 leading-relaxed flex items-center gap-1.5">
              <span>Hôm nay chúng ta tiếp tục hành trình tiếng Nhật nhé</span>
              <span>✨</span>
            </p>
          </div>

          {/* Hero CTA Button - Emerge 5 */}
          <div className="anim-emerge-5 pt-1">
            <Link
              href="/nhap-mon/hiragana/bang-chu"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 px-5 py-2.5 text-xs font-bold text-white shadow-md hover:from-violet-500 hover:to-indigo-500 hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Tiếp tục học tập</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. LEARNING DASHBOARD ROW (4 CARDS)                      */}
      {/* ======================================================== */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4">
        {/* Card 1: Tiếp tục học tập (Span 5 columns on lg) */}
        <div className="sm:col-span-2 lg:col-span-5 rounded-3xl border border-line bg-surface p-4 sm:p-5 shadow-xs flex flex-col justify-between hover:border-violet-500/40 hover:shadow-md transition duration-200 group">
          {/* Top pill badge */}
          <div className="flex items-center justify-between mb-2.5">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#EDE9FE] border border-[#DDD6FE] text-[#7C3AED] dark:bg-violet-600/20 dark:border-violet-500/25 dark:text-violet-300 px-3 py-1 text-[11px] font-bold">
              <span>🏷</span>
              <span>Tiếp tục học tập</span>
            </span>
          </div>

          {/* Lesson details & thumbnail */}
          <div className="flex items-center gap-3.5 my-1">
            <div className="relative h-16 w-20 sm:h-18 sm:w-24 shrink-0 rounded-2xl overflow-hidden border border-line shadow-xs">
              <Image
                src={isDark ? "/images/redesign/lesson_thumb_vibrant.png" : "/images/redesign/lesson_thumb_light.png"}
                alt="Torii gate lesson"
                fill
                loading="eager"
                unoptimized
                className="object-cover group-hover:scale-105 transition duration-300"
                sizes="100px"
              />
            </div>

            <div className="min-w-0 flex-1">
              <h3 className="text-sm font-bold text-ink truncate group-hover:text-ai transition">
                Hiragana cơ bản
              </h3>
              <p className="text-xs text-ink-3 truncate mt-0.5">
                Bài 04 · Hàng たちつてと
              </p>

              {/* Progress bar */}
              <div className="mt-2.5">
                <div className="flex items-center justify-between text-[11px] font-semibold mb-1">
                  <span className="text-ink-3">Tiến độ</span>
                  <span className="font-mono text-[#7C3AED] dark:text-violet-400 font-bold">65%</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-surface-2 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-violet-600 to-indigo-500"
                    style={{ width: "65%" }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Action button */}
          <div className="mt-3.5 flex justify-end">
            <Link
              href="/nhap-mon/hiragana/bang-chu"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-4 py-2 text-xs font-bold text-white shadow-xs hover:from-violet-500 hover:to-indigo-500 transition active:scale-95"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Tiếp tục học</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Card 2: Ngày liên tiếp (Daily streak) - Span 2 */}
        <div className="lg:col-span-2 rounded-3xl border border-line bg-surface p-4 sm:p-5 shadow-xs flex flex-col justify-between items-center text-center hover:border-amber-500/40 hover:shadow-md transition">
          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-amber-100 dark:bg-amber-500/15 text-amber-500 text-xl shadow-xs">
            <Flame className="w-5 h-5 fill-current text-amber-500" />
          </div>

          <div className="my-2">
            <span className="font-mono text-3xl sm:text-4xl font-extrabold text-ink block">
              7
            </span>
            <span className="text-xs font-semibold text-ink-3 mt-1 block">
              Ngày liên tiếp
            </span>
          </div>

          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400 font-mono text-[11px] font-bold px-2.5 py-0.5">
            <span>↑ +1</span>
          </span>
        </div>

        {/* Card 3: XP tích lũy (Total XP) - Span 2 */}
        <div className="lg:col-span-2 rounded-3xl border border-line bg-surface p-4 sm:p-5 shadow-xs flex flex-col justify-between items-center text-center hover:border-yellow-500/40 hover:shadow-md transition">
          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-yellow-100 dark:bg-yellow-500/15 text-yellow-500 text-xl shadow-xs">
            <Star className="w-5 h-5 fill-current text-yellow-500 dark:text-yellow-400" />
          </div>

          <div className="my-2">
            <span className="font-mono text-3xl sm:text-4xl font-extrabold text-ink block">
              320
            </span>
            <span className="text-xs font-semibold text-ink-3 mt-1 block">
              XP tích lũy
            </span>
          </div>

          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400 font-mono text-[11px] font-bold px-2.5 py-0.5">
            <span>↑ +20</span>
          </span>
        </div>

        {/* Card 4: Mục tiêu tuần (Weekly goal circular progress) - Span 3 */}
        <div className="lg:col-span-3 rounded-3xl border border-line bg-surface p-4 sm:p-5 shadow-xs flex flex-col justify-between items-center text-center hover:border-violet-500/40 hover:shadow-md transition">
          {/* Radial Donut Progress Ring */}
          <div className="relative grid h-20 w-20 place-items-center my-auto">
            <svg className="h-full w-full -rotate-90 transform" viewBox="0 0 36 36">
              {/* Background track */}
              <path
                className="text-surface-2"
                strokeWidth="3.5"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              {/* Progress stroke 32% */}
              <path
                className="text-ai transition-all duration-1000 ease-out"
                strokeDasharray="32, 100"
                strokeLinecap="round"
                strokeWidth="3.5"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <span className="absolute font-mono text-sm font-bold text-ink">
              32%
            </span>
          </div>

          <span className="text-xs font-semibold text-ink-3 mt-1 block">
            Mục tiêu tuần
          </span>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. KHÁM PHÁ BÀI HỌC (LEARNING CATEGORIES - 4 CARDS)       */}
      {/* ======================================================== */}
      <section className="space-y-4">
        {/* Section Header */}
        <div className="flex items-center justify-between">
          <h2 className="flex items-center gap-2 text-base sm:text-lg font-bold text-ink">
            <Sparkles className="w-4 h-4 text-ai" />
            <span>Khám phá bài học</span>
          </h2>

          <Link
            href="/nhap-mon"
            className="inline-flex items-center gap-1 text-xs font-semibold text-ink-3 hover:text-ai transition"
          >
            <span>Xem tất cả</span>
            <span>→</span>
          </Link>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: Làm quen (Hiragana & Katakana) */}
          <Link
            href="/nhap-mon"
            className="group relative overflow-hidden rounded-3xl border border-violet-500/35 p-5 shadow-md hover:border-violet-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between min-h-[225px]"
          >
            {/* High-res Scenery Illustration Cover (Ảnh 3) */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <Image
                src="/images/redesign/card_hiragana_purple_exact.jpg"
                alt="Hiragana & Katakana Torii Scenery"
                fill
                loading="eager"
                unoptimized
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 320px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#110924]/90 via-[#180d33]/40 to-transparent" />
            </div>

            {/* Top area letting the illustration's built-in glowing 'あ' badge shine */}
            <div className="relative z-10 h-20 sm:h-22 pointer-events-none" />

            {/* Card Content with 3D Embossed Floating Typography (Ảnh 4) */}
            <div className="relative z-10 space-y-0.5">
              <h3 className="card-embossed-white text-2xl font-black text-white tracking-tight group-hover:text-violet-100 transition duration-200">
                Làm quen
              </h3>
              <p className="card-sub-embossed text-xs sm:text-sm font-semibold text-violet-100/90 tracking-wide">
                Hiragana & Katakana
              </p>
            </div>

            {/* Bottom Info Row & Glowing Progress Bar (Ảnh 4) */}
            <div className="relative z-10 mt-3 pt-1">
              <div className="flex items-center justify-between text-xs font-semibold mb-2">
                <span className="flex items-center gap-1.5 text-white/95 card-sub-embossed text-xs font-medium">
                  <BookOpen className="w-4 h-4 text-violet-200 stroke-[2.2]" />
                  <span>103 kana</span>
                </span>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-white font-extrabold text-sm card-sub-embossed">
                    70%
                  </span>
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-[#6D28D9] border border-white/30 text-white shadow-md group-hover:bg-[#7C3AED] group-hover:scale-110 group-hover:translate-x-0.5 transition shrink-0">
                    <ChevronRight className="w-4 h-4 stroke-[3]" />
                  </span>
                </div>
              </div>

              {/* Exact Luminous Gradient Progress Bar matching Ảnh 4 */}
              <div className="h-2 w-full rounded-full bg-white/20 p-[1px] shadow-inner backdrop-blur-xs overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-violet-500 via-purple-400 to-pink-300 shadow-[0_0_12px_rgba(168,85,247,0.7)] transition-all duration-700"
                  style={{ width: "70%" }}
                />
              </div>
            </div>
          </Link>

          {/* Card 2: Hán tự (Kanji) */}
          <Link
            href="/han-tu"
            className="group relative overflow-hidden rounded-3xl border border-rose-500/35 p-5 shadow-md hover:border-rose-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between min-h-[195px]"
          >
            {/* High-res Scenery Illustration Cover */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <Image
                src="/images/redesign/bg_kanji_vivid.jpg"
                alt="Kanji Pagoda and Sakura"
                fill
                loading="eager"
                unoptimized
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 320px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#300e25]/90 via-[#421434]/50 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#280c1f]/85 via-transparent to-transparent" />
            </div>

            <div className="relative z-10">
              {/* Character Badge */}
              <div className="mb-3.5">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-rose-600/40 border border-rose-400/50 text-white text-2xl font-bold jp shadow-md backdrop-blur-sm group-hover:scale-105 group-hover:bg-rose-600/60 transition">
                  漢
                </span>
              </div>

              <h3 className="text-base font-bold text-white group-hover:text-rose-200 transition drop-shadow-md">
                Hán tự
              </h3>
              <p className="text-xs text-rose-100/95 mt-0.5 drop-shadow-sm">
                Kanji cơ bản
              </p>
            </div>

            <div className="relative z-10 mt-5 pt-3">
              <div className="flex items-center justify-between text-[11px] font-semibold mb-2">
                <span className="flex items-center gap-1.5 text-rose-100">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>117 chữ</span>
                </span>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-rose-200 font-bold">40%</span>
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-white/20 border border-white/30 text-white group-hover:bg-rose-600 group-hover:translate-x-0.5 transition shrink-0">
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              <div className="h-1.5 w-full rounded-full bg-white/20 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-rose-400 to-pink-300"
                  style={{ width: "40%" }}
                />
              </div>
            </div>
          </Link>

          {/* Card 3: Từ vựng (Vocabulary) */}
          <Link
            href="/tu-vung"
            className="group relative overflow-hidden rounded-3xl border border-teal-500/35 p-5 shadow-md hover:border-teal-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between min-h-[195px]"
          >
            {/* High-res Scenery Illustration Cover */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <Image
                src="/images/redesign/bg_vocab_vivid.jpg"
                alt="Mount Fuji and Lake"
                fill
                loading="eager"
                unoptimized
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 320px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b242e]/90 via-[#103340]/50 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#091e27]/85 via-transparent to-transparent" />
            </div>

            <div className="relative z-10">
              {/* Character Badge */}
              <div className="mb-3.5">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-teal-600/40 border border-teal-400/50 text-white text-2xl font-bold jp shadow-md backdrop-blur-sm group-hover:scale-105 group-hover:bg-teal-600/60 transition">
                  語
                </span>
              </div>

              <h3 className="text-base font-bold text-white group-hover:text-teal-200 transition drop-shadow-md">
                Từ vựng
              </h3>
              <p className="text-xs text-teal-100/95 mt-0.5 drop-shadow-sm">
                Học từ theo chủ đề
              </p>
            </div>

            <div className="relative z-10 mt-5 pt-3">
              <div className="flex items-center justify-between text-[11px] font-semibold mb-2">
                <span className="flex items-center gap-1.5 text-teal-100">
                  <Languages className="w-3.5 h-3.5" />
                  <span>805 từ</span>
                </span>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-teal-200 font-bold">60%</span>
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-white/20 border border-white/30 text-white group-hover:bg-teal-600 group-hover:translate-x-0.5 transition shrink-0">
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              <div className="h-1.5 w-full rounded-full bg-white/20 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-teal-400 to-cyan-300"
                  style={{ width: "60%" }}
                />
              </div>
            </div>
          </Link>

          {/* Card 4: Ngữ pháp (Grammar) */}
          <Link
            href="/ngu-phap"
            className="group relative overflow-hidden rounded-3xl border border-amber-500/35 p-5 shadow-md hover:border-amber-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between min-h-[195px]"
          >
            {/* High-res Scenery Illustration Cover */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <Image
                src="/images/redesign/bg_grammar_vivid.jpg"
                alt="Japanese Temple and Lanterns"
                fill
                loading="eager"
                unoptimized
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 320px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2d1b0c]/90 via-[#3d2511]/50 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#25170a]/85 via-transparent to-transparent" />
            </div>

            <div className="relative z-10">
              {/* Character Badge */}
              <div className="mb-3.5">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-amber-600/40 border border-amber-400/50 text-white text-2xl font-bold jp shadow-md backdrop-blur-sm group-hover:scale-105 group-hover:bg-amber-600/60 transition">
                  文
                </span>
              </div>

              <h3 className="text-base font-bold text-white group-hover:text-amber-200 transition drop-shadow-md">
                Ngữ pháp
              </h3>
              <p className="text-xs text-amber-100/95 mt-0.5 drop-shadow-sm">
                Mẫu câu & ngữ pháp
              </p>
            </div>

            <div className="relative z-10 mt-5 pt-3">
              <div className="flex items-center justify-between text-[11px] font-semibold mb-2">
                <span className="flex items-center gap-1.5 text-amber-100">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>136 mẫu câu</span>
                </span>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-amber-200 font-bold">45%</span>
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-white/20 border border-white/30 text-white group-hover:bg-amber-600 group-hover:translate-x-0.5 transition shrink-0">
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              <div className="h-1.5 w-full rounded-full bg-white/20 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-amber-400 to-yellow-300"
                  style={{ width: "45%" }}
                />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. BOTTOM SECTION: ROADMAP (LEFT) & CHALLENGE (RIGHT)     */}
      {/* ======================================================== */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Lộ trình học tập (JLPT N5 Roadmap) - Span 7 */}
        <div className="lg:col-span-7 rounded-3xl border border-line bg-surface p-6 shadow-xs flex flex-col justify-between hover:shadow-md transition duration-200">
          <div>
            {/* Header */}
            <div className="flex items-center justify-between mb-2">
              <h2 className="flex items-center gap-2 text-base font-bold text-ink">
                <Flag className="w-4 h-4 text-ai" />
                <span>Lộ trình học tập</span>
              </h2>

              <Link
                href="/nhap-mon"
                className="text-xs font-semibold text-ink-3 hover:text-ai transition flex items-center gap-1"
              >
                <span>Xem chi tiết</span>
                <span>→</span>
              </Link>
            </div>

            <p className="text-xs text-ink-3 font-medium">
              JLPT N5 – Cùng chinh phục kỳ thi đầu tiên!
            </p>

            {/* Overall Roadmap Progress Line */}
            <div className="my-5">
              <div className="flex justify-end mb-1">
                <span className="font-mono text-xs font-bold text-ai">32%</span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-surface-2 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-violet-600 to-indigo-500"
                  style={{ width: "32%" }}
                />
              </div>
            </div>
          </div>

          {/* Connected Milestone Stepper with Horizontal Track Line */}
          <div className="pt-2 relative">
            {/* Connecting Timeline Track Line passing through the centers of icons (top: 20px) */}
            <div className="absolute top-[20px] left-[10%] right-[10%] h-[2px] bg-[#E5DDFB] dark:bg-[#2a2347] z-0 pointer-events-none">
              {/* Completed part of the track line between Step 1 and Step 2 */}
              <div className="h-full bg-violet-600" style={{ width: "25%" }} />
            </div>

            <div className="grid grid-cols-5 gap-2 text-center relative z-10">
              {/* Milestone 1: Bảng chữ cái (Completed) */}
              <Link href="/nhap-mon/hiragana/bang-chu" className="group flex flex-col items-center">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-violet-600 text-white shadow-md purple-glow-sm group-hover:scale-110 transition border-2 border-violet-500">
                  <Check className="w-5 h-5 stroke-[3]" />
                </div>
                <span className="mt-2 text-[11px] font-bold text-ink block truncate w-full">
                  Bảng chữ cái
                </span>
                <span className="text-[10px] text-ai font-semibold block">
                  (Hoàn thành)
                </span>
              </Link>

              {/* Milestone 2: Từ vựng cơ bản (Active / Learning) */}
              <Link href="/tu-vung/jpd113" className="group flex flex-col items-center">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-[#EDE9FE] dark:bg-[#1b1535] border-2 border-violet-500 text-violet-600 dark:text-violet-300 shadow-md group-hover:scale-110 transition ring-4 ring-violet-500/20">
                  <BookOpen className="w-5 h-5" />
                </div>
                <span className="mt-2 text-[11px] font-bold text-ink dark:text-white block truncate w-full">
                  Từ vựng cơ bản
                </span>
                <span className="text-[10px] text-ai font-semibold block">
                  (Đang học)
                </span>
              </Link>

              {/* Milestone 3: Ngữ pháp N5 (Locked) */}
              <Link href="/ngu-phap/jpd113" className="group flex flex-col items-center opacity-70 hover:opacity-100 transition">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-[#F8F7FF] dark:bg-[#17132e] border border-line text-ink-3">
                  <Lock className="w-4 h-4" />
                </div>
                <span className="mt-2 text-[11px] font-medium text-ink-3 block truncate w-full">
                  Ngữ pháp N5
                </span>
                <span className="text-[10px] text-ink-3 block">
                  (Chưa mở khóa)
                </span>
              </Link>

              {/* Milestone 4: Luyện nghe (Locked) */}
              <Link href="/shadowing" className="group flex flex-col items-center opacity-70 hover:opacity-100 transition">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-[#F8F7FF] dark:bg-[#17132e] border border-line text-ink-3">
                  <Lock className="w-4 h-4" />
                </div>
                <span className="mt-2 text-[11px] font-medium text-ink-3 block truncate w-full">
                  Luyện nghe
                </span>
                <span className="text-[10px] text-ink-3 block">
                  (Chưa mở khóa)
                </span>
              </Link>

              {/* Milestone 5: Thi thử JLPT (Locked) */}
              <Link href="/thi" className="group flex flex-col items-center opacity-70 hover:opacity-100 transition">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-[#F8F7FF] dark:bg-[#17132e] border border-line text-ink-3">
                  <Lock className="w-4 h-4" />
                </div>
                <span className="mt-2 text-[11px] font-medium text-ink-3 block truncate w-full">
                  Thi thử JLPT
                </span>
                <span className="text-[10px] text-ink-3 block">
                  (Chưa mở khóa)
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column: Thử thách hôm nay (Daily Challenge) - Span 5 */}
        <div
          style={{
            background: isDark
              ? "linear-gradient(135deg, #1d163d 0%, #221338 100%)"
              : "linear-gradient(135deg, #6857E4 0%, #5237BA 50%, #41249D 100%)",
          }}
          className="lg:col-span-5 rounded-3xl border border-[#E5DDFB] dark:border-violet-500/20 p-6 shadow-md relative overflow-hidden flex flex-col justify-between"
        >
          {/* Daruma Doll Artwork on the right side */}
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 sm:w-2/5 overflow-hidden">
            <Image
              src={isDark ? "/images/redesign/daruma_seamless.png" : "/images/redesign/daruma_light_seamless.png"}
              alt="Daruma Doll"
              fill
              loading="eager"
              unoptimized
              className="object-cover object-right"
              sizes="350px"
            />
          </div>

          <div className="relative z-10">
            {/* Target Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white/20 border border-white/25 text-white shadow-xs">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-1.5">
                  <span>Thử thách hôm nay</span>
                  <span>🔥</span>
                </h3>
                <p className="text-xs font-semibold text-violet-200 mt-0.5">
                  Học 10 từ vựng mới
                </p>
              </div>
            </div>

            <p className="text-xs text-violet-100 leading-relaxed max-w-[22ch]">
              Hoàn thành để nhận <strong className="text-yellow-300 font-bold">20 XP</strong> thưởng mục tiêu tuần.
            </p>
          </div>

          {/* Bottom Progress Counter & Button */}
          <div className="mt-6 flex items-center gap-4 relative z-10">
            <span className="font-mono text-sm font-extrabold text-white bg-white/20 px-3.5 py-1.5 rounded-xl border border-white/25 backdrop-blur-xs">
              0 / 10
            </span>

            <Link
              href="/tu-vung/jpd113/jpd113-v1-1"
              className="inline-flex items-center gap-1.5 rounded-full bg-white text-violet-700 hover:bg-violet-50 px-5 py-2.5 text-xs font-bold shadow-md transition active:scale-95"
            >
              <span>Bắt đầu ngay</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
