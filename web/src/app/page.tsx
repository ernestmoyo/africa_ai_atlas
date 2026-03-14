import Link from "next/link";
import { countries, getScoreColor, getScoreLabel, getRegionStats, countryToSlug } from "@/lib/data";
import MapSection from "@/components/MapSection";

function StatCard({ label, value, sub, icon, accent }: { label: string; value: string; sub?: string; icon: string; accent: string }) {
  return (
    <div className={`bg-[var(--card)] border border-[var(--card-border)] rounded-xl p-5 ${accent}`}>
      <div className="flex items-center gap-2 text-[var(--muted)] text-sm">
        <span className="text-base">{icon}</span>
        {label}
      </div>
      <div className="text-2xl font-bold text-white mt-1">{value}</div>
      {sub && <div className="text-xs text-[var(--muted)] mt-1">{sub}</div>}
    </div>
  );
}

function getRankBadgeClass(rank: number): string {
  if (rank === 1) return "rank-badge-1";
  if (rank === 2) return "rank-badge-2";
  if (rank === 3) return "rank-badge-3";
  return "rank-badge-default";
}

export default function HomePage() {
  const top10 = countries.slice(0, 10);
  const regions = getRegionStats();
  const withStrategy = countries.filter((c) => c.raw_data.ai_strategy === "Yes").length;
  const avgScore = Math.round((countries.reduce((s, c) => s + c.composite_score, 0) / countries.length) * 10) / 10;
  const totalDC = countries.reduce((s, c) => s + c.raw_data.data_centers, 0);

  return (
    <div>
      {/* Hero with gradient */}
      <div className="hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Africa AI Atlas
          </h1>
          <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
            The definitive quarterly ranking of all 54 African countries on AI readiness,
            maturity, and adoption. Q1 2026 Baseline Edition.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
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
              className="px-6 py-2.5 border border-[var(--card-border)] text-white rounded-lg font-medium hover:bg-[var(--card)] transition"
            >
              Methodology
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12 -mt-6">
          <StatCard icon="&#127758;" label="Countries Ranked" value="54" sub="All African nations" accent="stat-accent-blue" />
          <StatCard icon="&#128202;" label="Continental Average" value={String(avgScore)} sub="Out of 100" accent="stat-accent-gold" />
          <StatCard icon="&#128203;" label="AI Strategies" value={`${withStrategy}`} sub={`${Math.round((withStrategy / 54) * 100)}% of countries`} accent="stat-accent-green" />
          <StatCard icon="&#127981;" label="Data Centers" value={`~${totalDC}`} sub="<1% of global total" accent="stat-accent-purple" />
        </div>

        {/* Map + Top 10 */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-[var(--card)] border border-[var(--card-border)] rounded-xl p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-white">AI Readiness Map</h2>
              <span className="text-xs text-[var(--muted)]">Hover to explore, click to drill down</span>
            </div>
            <MapSection />
          </div>

          <div className="bg-[var(--card)] border border-[var(--card-border)] rounded-xl p-6">
            <h2 className="text-lg font-bold text-white mb-4">Top 10 Countries</h2>
            <div className="space-y-2">
              {top10.map((c) => (
                <Link
                  key={c.iso3}
                  href={`/country/${countryToSlug(c.name)}`}
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-[var(--background)] transition group"
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${getRankBadgeClass(c.rank)}`}>
                    {c.rank}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-white group-hover:text-[var(--accent)] transition">{c.name}</div>
                    <div className="text-xs text-[var(--muted)]">{c.region}</div>
                  </div>
                  <div className="text-right shrink-0">
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
                  <div className="w-24 hidden sm:block shrink-0">
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
                  <span className="text-[var(--muted)] opacity-0 group-hover:opacity-100 transition text-sm">&#8594;</span>
                </Link>
              ))}
            </div>
            <Link
              href="/rankings"
              className="block text-center mt-4 text-sm text-[var(--accent)] hover:underline"
            >
              View all 54 countries &#8594;
            </Link>
          </div>
        </div>

        {/* Regional Summary — 5 cards in balanced 3+2 grid */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6">Regional Overview</h2>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
            {regions.map((r) => (
              <div
                key={r.region}
                className={`bg-[var(--card)] border border-[var(--card-border)] rounded-xl p-5 ${
                  regions.length === 5 && regions.indexOf(r) === 4 ? "col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="font-medium text-white text-sm">{r.region}</div>
                <div className="flex items-baseline gap-2 mt-2">
                  <span
                    className="text-2xl font-bold"
                    style={{ color: getScoreColor(r.average) }}
                  >
                    {r.average}
                  </span>
                  <span className="text-xs text-[var(--muted)]">avg</span>
                </div>
                <div className="text-xs text-[var(--muted)] mt-1">
                  {r.count} countries
                </div>
                <div className="text-xs mt-1">
                  <Link
                    href={`/country/${countryToSlug(r.top.name)}`}
                    className="text-[var(--accent)] hover:underline"
                  >
                    {r.top.name}
                  </Link>
                  <span className="text-[var(--muted)]"> ({r.top.composite_score})</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Findings */}
        <div className="bg-[var(--card)] border border-[var(--card-border)] rounded-xl p-6 mb-12">
          <h2 className="text-xl font-bold text-white mb-4">Key Findings — Q1 2026</h2>
          <div className="grid sm:grid-cols-2 gap-4 text-sm text-[var(--muted)]">
            {[
              "Egypt leads Africa with 69.0/100, driven by a perfect policy score (100/100 on Oxford Insights).",
              "Kenya is the innovation powerhouse — $1.04B in 2025 tech funding, Microsoft $1B data center.",
              `Only ${withStrategy} of 54 countries (${Math.round((withStrategy/54)*100)}%) have a national AI strategy. Over 30 remain inactive.`,
              "Africa has <1% of global data center capacity. South Africa alone hosts 25% of the continent's total.",
              "The Big Four (Nigeria, Kenya, South Africa, Egypt) capture 81% of all tech equity funding.",
              "Rwanda punches above its weight — ranked #7 despite low infrastructure, thanks to visionary policy.",
            ].map((finding, i) => (
              <div key={i} className="flex gap-3">
                <span className="text-[var(--accent-gold)] font-bold shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <span>{finding}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
