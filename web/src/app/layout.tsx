import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Africa AI Atlas | by 7Square Inc.",
  description:
    "The definitive quarterly ranking of all 54 African countries on AI readiness, maturity, and adoption. Powered by 7Square Inc.",
  keywords: ["Africa", "AI", "artificial intelligence", "index", "ranking", "readiness", "7Square"],
  authors: [{ name: "7Square Inc.", url: "https://7squareinc.com" }],
  openGraph: {
    title: "Africa AI Atlas — Q1 2026",
    description: "Ranking 54 African countries on AI readiness. The first Africa-owned AI index.",
    type: "website",
    locale: "en_US",
    siteName: "Africa AI Atlas",
  },
  twitter: {
    card: "summary_large_image",
    title: "Africa AI Atlas — Q1 2026",
    description: "Ranking 54 African countries on AI readiness. By 7Square Inc.",
  },
};

function Navbar() {
  return (
    <nav className="border-b border-[var(--card-border)] bg-[var(--card)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-[var(--accent)] flex items-center justify-center font-bold text-white text-sm">
              AI
            </div>
            <div>
              <span className="font-bold text-white text-lg">Africa AI Atlas</span>
              <span className="hidden sm:inline text-[var(--muted)] text-sm ml-2">Q1 2026</span>
            </div>
          </Link>
          <div className="flex items-center gap-1 sm:gap-2">
            <Link
              href="/rankings"
              className="px-3 py-2 rounded-md text-sm text-[var(--muted)] hover:text-white hover:bg-[var(--background)] transition"
            >
              Rankings
            </Link>
            <Link
              href="/compare"
              className="px-3 py-2 rounded-md text-sm text-[var(--muted)] hover:text-white hover:bg-[var(--background)] transition"
            >
              Compare
            </Link>
            <Link
              href="/methodology"
              className="px-3 py-2 rounded-md text-sm text-[var(--muted)] hover:text-white hover:bg-[var(--background)] transition"
            >
              Methodology
            </Link>
            <Link
              href="/about"
              className="px-3 py-2 rounded-md text-sm text-[var(--muted)] hover:text-white hover:bg-[var(--background)] transition"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[var(--card-border)] mt-16 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-[var(--muted)] text-sm">
            Africa AI Atlas Q1 2026 — by{" "}
            <a href="https://7squareinc.com" className="text-[var(--accent)] hover:underline">
              7Square Inc.
            </a>
          </div>
          <div className="text-[var(--muted)] text-sm">
            info@7squareinc.com | Converting Africa&apos;s Challenges into Opportunities
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
