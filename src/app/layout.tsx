import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/nav/Header";
import { Footer } from "@/components/nav/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-kr",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://luxon-crypto-lab.vercel.app"),
  title: {
    default: "luxon-crypto-lab — Top 10 cryptocurrency monthly deep-dive",
    template: "%s · luxon-crypto-lab",
  },
  description:
    "시가총액 Top 10 코인을 매크로 사이클(Fed·DXY·M2) × 온체인 메트릭(NVT·MVRV·Burn yield) × 산업 턴어라운드·모멘텀 관점으로 매월 한 편씩 deep dive.",
  keywords: ["bitcoin", "ethereum", "cryptocurrency", "macro", "trend following", "on-chain", "momentum", "korean"],
  authors: [{ name: "pollmap", url: "https://github.com/pollmap" }],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
  openGraph: {
    type: "website",
    title: "luxon-crypto-lab",
    description: "Top 10 cryptocurrency · monthly deep dive · macro × cycle × momentum",
    siteName: "luxon-crypto-lab",
    images: [{ url: "/og.svg", width: 1200, height: 630, type: "image/svg+xml" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "luxon-crypto-lab",
    description: "Top 10 cryptocurrency · monthly deep dive",
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
      className={`${inter.variable} ${jetbrains.variable} ${notoSansKr.variable} h-full antialiased`}
    >
      <head>
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        <meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=()" />
        <meta name="theme-color" content="#0a0a0f" />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
