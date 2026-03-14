import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import NavLinks from "@/components/NavLinks";

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
            <div className="w-8 h-8 rounded bg-gradient-to-br from-[var(--accent)] to-[var(--accent-gold)] flex items-center justify-center font-bold text-white text-sm">
              AI
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-white text-lg">Africa AI Atlas</span>
              <span className="hidden sm:inline px-2 py-0.5 rounded-full text-xs font-medium border border-[var(--accent-gold)] text-[var(--accent-gold)]">
                Q1 2026
              </span>
            </div>
          </Link>
          <NavLinks />
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[var(--card-border)] mt-16 py-10 bg-[var(--card)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded bg-gradient-to-br from-[var(--accent)] to-[var(--accent-gold)] flex items-center justify-center font-bold text-white text-[10px]">
                AI
              </div>
              <span className="font-bold text-white">Africa AI Atlas</span>
            </div>
            <p className="text-sm text-[var(--muted)]">
              The first Africa-owned, open-source AI readiness index.
              Updated quarterly.
            </p>
            <div className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs border border-[var(--accent-green)] text-[var(--accent-green)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-green)]" />
              Last updated: Q1 2026
            </div>
          </div>
          <div>
            <div className="text-sm font-medium text-white mb-3">Quick Links</div>
            <div className="space-y-2 text-sm">
              <Link href="/rankings" className="block text-[var(--muted)] hover:text-white transition">Rankings</Link>
              <Link href="/compare" className="block text-[var(--muted)] hover:text-white transition">Compare Countries</Link>
              <Link href="/methodology" className="block text-[var(--muted)] hover:text-white transition">Methodology</Link>
              <Link href="/about" className="block text-[var(--muted)] hover:text-white transition">About</Link>
            </div>
          </div>
          <div>
            <div className="text-sm font-medium text-white mb-3">7Square Inc.</div>
            <div className="space-y-2 text-sm text-[var(--muted)]">
              <p>Converting Africa&apos;s Challenges into Opportunities</p>
              <a href="mailto:info@7squareinc.com" className="block text-[var(--accent)] hover:underline">info@7squareinc.com</a>
              <a href="https://7squareinc.com" className="block text-[var(--accent)] hover:underline">7squareinc.com</a>
            </div>
          </div>
        </div>
        <div className="border-t border-[var(--card-border)] mt-8 pt-6 text-center text-xs text-[var(--muted)]">
          Open source under MIT License · Data freely available with attribution · <a href="https://github.com/ernestmoyo/africa_ai_atlas" className="text-[var(--accent)] hover:underline">GitHub</a>
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
