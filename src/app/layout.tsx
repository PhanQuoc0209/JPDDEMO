import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Manabiman — Học tiếng Nhật",
  description:
    "Học tiếng Nhật từ bảng chữ cái đến JLPT: Hiragana, Katakana, Hán tự và từ vựng, có hình ảnh liên tưởng và luyện gõ phản xạ.",
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  interactiveWidget: "resizes-content",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;700;800&family=Be+Vietnam+Pro:wght@400;500;600;700&family=Zen+Maru+Gothic:wght@400;500;700&family=Zen+Old+Mincho:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `try{document.documentElement.dataset.theme=localStorage.getItem('manabiman-theme')==='dark'?'dark':'light'}catch(e){document.documentElement.dataset.theme='light'}`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-paper text-ink selection:bg-ai-wash selection:text-ai font-sans">
        <ThemeToggle />
        <Navbar />
        <main className="flex-1 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
