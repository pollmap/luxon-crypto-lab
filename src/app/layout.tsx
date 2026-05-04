import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/nav/Header";
import { Footer } from "@/components/nav/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://luxon-crypto-lab.vercel.app"),
  title: {
    default: "luxon-crypto-lab",
    template: "%s · luxon-crypto-lab",
  },
  description:
    "암호자산을 매크로 사이클·온체인·산업 모멘텀의 학술 framework 으로 깊이 분석. NY Fed·BIS·NBER 1차 자료 인용.",
  keywords: ["bitcoin", "ethereum", "cryptocurrency", "macro", "on-chain", "academic", "korean"],
  authors: [{ name: "이찬희 (pollmap)", url: "https://github.com/pollmap" }],
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    type: "website",
    title: "luxon-crypto-lab",
    description: "Academic deep-dive on cryptocurrency",
    siteName: "luxon-crypto-lab",
    images: [{ url: "/og.svg", width: 1200, height: 630, type: "image/svg+xml" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "luxon-crypto-lab",
    description: "Academic deep-dive on cryptocurrency",
    images: ["/og.svg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ko"
      className={`${inter.variable} ${jetbrains.variable} h-full antialiased`}
      data-theme="light"
    >
      <head>
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        <meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=()" />
        <link
          rel="preconnect"
          href="https://cdn.jsdelivr.net"
          crossOrigin=""
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
        <style>{`
          :root { --font-pretendard: "Pretendard Variable", "Pretendard"; }
        `}</style>
        <link rel="alternate" type="application/rss+xml" title="luxon-crypto-lab RSS" href="/feed.xml" />
      </head>
      <body className="relative min-h-full flex flex-col bg-[var(--bg-base)]">
        <Header />
        <main className="relative flex-1 pt-14 md:pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
