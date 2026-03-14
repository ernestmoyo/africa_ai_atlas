import Link from "next/link";
import { countries, getScoreColor, getScoreLabel, getRegionStats, countryToSlug } from "@/lib/data";
import MapSection from "@/components/MapSection";

function StatCard({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="bg-[var(--card)] border border-[var(--card-border)] rounded-xl p-5">
      <div className="text-[var(--muted)] text-sm">{label}</div>
      <div className="text-2xl font-bold text-white mt-1">{value}</div>
      {sub && <div className="text-xs text-[var(--muted)] mt-1">{sub}</div>}
    </div>
  );
}

export default function HomePage() {
  const top10 = countries.slice(0, 10);
  const regions = getRegionStats();
  const withStrategy = countries.filter((c) => c.raw_data.ai_strategy === "Yes").length;
  const avgScore = Math.round((countries.reduce((s, c) => s + c.composite_score, 0) / countries.length) * 10) / 10;
  const totalDC = countries.reduce((s, c) => s + c.raw_data.data_centers, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero */}
      <div className="text-center mb-12 animate-fade-in">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Africa AI Atlas
        </h1>
        <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
          The definitive quarterly ranking of all 54 African countries on AI readiness,
          maturity, and adoption. Q1 2026 Baseline Edition.
        </p>
        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          <Link
            href="/rankings"
            className="px-6 py-2.5 bg-[var(--accent)] text-white rounded-lg font-medium hover:opacity-90 transition"
          >
            View Full Rankings
          </Link>
          <Link
            href="/compare"
            className="px-6 py-2.5 border border-[var(--card-border)] text-white rounded-lg font-medium hover:bg-[var(--card)] transition"
          >
            Compare Countries
          </Link>
          <Link
            href="/methodology"
            className="px-6 py-2.5 border border-[var(--card-border)] text-[var(--muted)] rounded-lg font-medium hover:bg-[var(--card)] transition"
          >
            Methodology
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
        <StatCard label="Countries Ranked" value="54" sub="All African nations" />
        <StatCard label="Continental Average" value={String(avgScore)} sub="Out of 100" />
        <StatCard label="AI Strategies" value={`${withStrategy}`} sub={`${Math.round((withStrategy / 54) * 100)}% of countries`} />
        <StatCard label="Data Centers" value={`~${totalDC}`} sub="<1% of global total" />
      </div>

      {/* Map + Top 10 */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        <div className="bg-[var(--card)] border border-[var(--card-border)] rounded-xl p-6">
          <h2 className="text-lg font-bold text-white mb-4">AI Readiness Map</h2>
          <MapSection />
        </div>

        <div className="bg-[var(--card)] border border-[var(--card-border)] rounded-xl p-6">
          <h2 className="text-lg font-bold text-white mb-4">Top 10 Countries</h2>
          <div className="space-y-3">
            {top10.map((c) => (
              <Link
                key={c.iso3}
                href={`/country/${countryToSlug(c.name)}`}
                className="flex items-center gap-4 p-3 rounded-lg hover:bg-[var(--background)] transition"
              >
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white bg-[var(--background)]">
                  {c.rank}
                </div>
                <div className="flex-1">
                  <div className="font-medium text-white">{c.name}</div>
                  <div className="text-xs text-[var(--muted)]">{c.region}</div>
                </div>
                <div className="text-right">
                  <div
                    className="text-sm font-bold"
                    style={{ color: getScoreColor(c.composite_score) }}
                  >
                    {c.composite_score}
                  </div>
                  <div className="text-xs text-[var(--muted)]">
                    {getScoreLabel(c.composite_score)}
                  </div>
                </div>
                <div className="w-24 hidden sm:block">
                  <div className="w-full bg-[var(--background)] rounded-full h-2">
                    <div
                      className="h-2 rounded-full"
                      style={{
                        width: `${c.composite_score}%`,
                        background: getScoreColor(c.composite_score),
                      }}
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <Link
            href="/rankings"
            className="block text-center mt-4 text-sm text-[var(--accent)] hover:underline"
          >
            View all 54 countries →
          </Link>
        </div>
      </div>

      {/* Regional Summary */}
      <div className="mb-12">
        <h2 className="text-xl font-bold text-white mb-6">Regional Overview</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {regions.map((r) => (
            <div
              key={r.region}
              className="bg-[var(--card)] border border-[var(--card-border)] rounded-xl p-5"
            >
              <div className="font-medium text-white">{r.region}</div>
              <div className="flex items-baseline gap-2 mt-2">
                <span
                  className="text-2xl font-bold"
                  style={{ color: getScoreColor(r.average) }}
                >
                  {r.average}
                </span>
                <span className="text-sm text-[var(--muted)]">avg score</span>
              </div>
              <div className="text-sm text-[var(--muted)] mt-1">
                {r.count} countries | Leader:{" "}
                <Link
                  href={`/country/${countryToSlug(r.top.name)}`}
                  className="text-[var(--accent)] hover:underline"
                >
                  {r.top.name}
                </Link>{" "}
                ({r.top.composite_score})
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Key Findings */}
      <div className="bg-[var(--card)] border border-[var(--card-border)] rounded-xl p-6 mb-12">
        <h2 className="text-xl font-bold text-white mb-4">Key Findings — Q1 2026</h2>
        <div className="grid sm:grid-cols-2 gap-4 text-sm text-[var(--muted)]">
          <div className="flex gap-3">
            <span className="text-[var(--accent-green)] font-bold shrink-0">01</span>
            <span>Egypt leads Africa with 69.0/100, driven by a perfect policy score (100/100 on Oxford Insights).</span>
          </div>
          <div className="flex gap-3">
            <span className="text-[var(--accent-green)] font-bold shrink-0">02</span>
            <span>Kenya is the innovation powerhouse — $1.04B in 2025 tech funding, Microsoft $1B data center.</span>
          </div>
          <div className="flex gap-3">
            <span className="text-[var(--accent-green)] font-bold shrink-0">03</span>
            <span>Only 16 of 54 countries (30%) have a national AI strategy. Over 30 remain inactive.</span>
          </div>
          <div className="flex gap-3">
            <span className="text-[var(--accent-green)] font-bold shrink-0">04</span>
            <span>Africa has &lt;1% of global data center capacity. South Africa alone hosts 25% of the continent&apos;s total.</span>
          </div>
          <div className="flex gap-3">
            <span className="text-[var(--accent-green)] font-bold shrink-0">05</span>
            <span>The Big Four (Nigeria, Kenya, South Africa, Egypt) capture 81% of all tech equity funding.</span>
          </div>
          <div className="flex gap-3">
            <span className="text-[var(--accent-green)] font-bold shrink-0">06</span>
            <span>Rwanda punches above its weight — ranked #7 despite low infrastructure, thanks to visionary policy.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
