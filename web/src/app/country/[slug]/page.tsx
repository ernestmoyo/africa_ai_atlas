import { notFound } from "next/navigation";
import Link from "next/link";
import { countries, getCountryBySlug, countryToSlug, getScoreColor, getScoreLabel, PILLAR_LABELS, PILLAR_COLORS } from "@/lib/data";
import type { Metadata } from "next";
import ScoreBadge from "@/components/ScoreBadge";
import PillarBars from "@/components/PillarBars";

export function generateStaticParams() {
  return countries.map((c) => ({ slug: countryToSlug(c.name) }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const country = getCountryBySlug(slug);
  if (!country) return { title: "Country Not Found" };
  return {
    title: `${country.name} — Africa AI Atlas`,
    description: `${country.name} ranks #${country.rank} out of 54 African countries with an AI readiness score of ${country.composite_score}/100.`,
  };
}

function getRankBadgeClass(rank: number): string {
  if (rank === 1) return "rank-badge-1";
  if (rank === 2) return "rank-badge-2";
  if (rank === 3) return "rank-badge-3";
  return "rank-badge-default";
}

export default async function CountryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const country = getCountryBySlug(slug);
  if (!country) notFound();

  const rankIndex = countries.findIndex((c) => c.iso3 === country.iso3);
  const prevCountry = rankIndex > 0 ? countries[rankIndex - 1] : null;
  const nextCountry = rankIndex < countries.length - 1 ? countries[rankIndex + 1] : null;

  const pillarEntries = Object.entries(PILLAR_LABELS) as [string, string][];
  const bestPillar = pillarEntries.reduce((best, [key, label]) => {
    const score = country.pillar_scores[key as keyof typeof country.pillar_scores];
    return score > best.score ? { key, label, score } : best;
  }, { key: "", label: "", score: 0 });

  const worstPillar = pillarEntries.reduce((worst, [key, label]) => {
    const score = country.pillar_scores[key as keyof typeof country.pillar_scores];
    return score < worst.score ? { key, label, score } : worst;
  }, { key: "", label: "", score: 100 });

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Nav between countries — prominent at top */}
      <div className="flex justify-between items-center mb-6">
        {prevCountry ? (
          <Link
            href={`/country/${countryToSlug(prevCountry.name)}`}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--card)] border border-[var(--card-border)] text-sm text-[var(--muted)] hover:text-white hover:border-[var(--accent)] transition"
          >
            <span>&#8592;</span>
            <span>#{prevCountry.rank} {prevCountry.name}</span>
          </Link>
        ) : <div />}
        <Link href="/rankings" className="text-sm text-[var(--muted)] hover:text-white transition">
          All Rankings
        </Link>
        {nextCountry ? (
          <Link
            href={`/country/${countryToSlug(nextCountry.name)}`}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--card)] border border-[var(--card-border)] text-sm text-[var(--muted)] hover:text-white hover:border-[var(--accent)] transition"
          >
            <span>#{nextCountry.rank} {nextCountry.name}</span>
            <span>&#8594;</span>
          </Link>
        ) : <div />}
      </div>

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white">{country.name}</h1>
          <div className="text-[var(--muted)] mt-1">
            {country.region} | ISO: {country.iso3}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl font-bold ${getRankBadgeClass(country.rank)}`}>
            #{country.rank}
          </div>
          <div>
            <ScoreBadge score={country.composite_score} size="lg" />
            <div className="text-xs text-[var(--muted)] mt-1 text-right">of 54 countries</div>
          </div>
        </div>
      </div>

      {/* Compare CTA */}
      <div className="mb-8">
        <Link
          href={`/compare?c=${country.iso3}`}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--card-border)] text-sm text-[var(--accent)] hover:bg-[var(--card)] transition"
        >
          Compare {country.name} with other countries &#8594;
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {/* Pillar Scores */}
        <div className="bg-[var(--card)] border border-[var(--card-border)] rounded-xl p-6">
          <h2 className="text-lg font-bold text-white mb-4">Pillar Scores</h2>
          <PillarBars country={country} />
          <div className="mt-4 pt-4 border-t border-[var(--card-border)] text-sm">
            <div className="flex justify-between text-[var(--muted)]">
              <span>Strongest: <span className="text-[var(--accent-green)] font-medium">{bestPillar.label}</span> ({bestPillar.score}/100)</span>
            </div>
            <div className="flex justify-between text-[var(--muted)] mt-1">
              <span>Weakest: <span className="text-[var(--accent-red)] font-medium">{worstPillar.label}</span> ({worstPillar.score}/100)</span>
            </div>
          </div>
        </div>

        {/* Key Indicators */}
        <div className="bg-[var(--card)] border border-[var(--card-border)] rounded-xl p-6">
          <h2 className="text-lg font-bold text-white mb-4">Key Indicators</h2>
          <div className="space-y-3 text-sm">
            <Row label="Internet Penetration" value={country.raw_data.internet_penetration != null ? `${country.raw_data.internet_penetration}%` : "N/A"} />
            <Row label="Electricity Access" value={country.raw_data.electricity_access != null ? `${country.raw_data.electricity_access}%` : "N/A"} />
            <Row label="Fixed Broadband / 100" value={country.raw_data.fixed_broadband_per100 != null ? String(country.raw_data.fixed_broadband_per100) : "N/A"} />
            <Row label="Tertiary Enrollment" value={country.raw_data.tertiary_enrollment != null ? `${country.raw_data.tertiary_enrollment}%` : "N/A"} />
            <Row label="National AI Strategy" value={country.raw_data.ai_strategy} highlight={country.raw_data.ai_strategy === "Yes"} warn={country.raw_data.ai_strategy === "No"} />
            <Row label="Data Protection Law" value={country.raw_data.data_protection_law} highlight={country.raw_data.data_protection_law === "Yes"} warn={country.raw_data.data_protection_law === "No"} />
            <Row label="Data Centers" value={String(country.raw_data.data_centers)} />
            <Row label="Oxford AI Readiness" value={country.raw_data.oxford_ai_readiness_score != null ? String(country.raw_data.oxford_ai_readiness_score) : "N/A"} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Row({ label, value, highlight, warn }: { label: string; value: string; highlight?: boolean; warn?: boolean }) {
  return (
    <div className="flex justify-between items-center py-1.5 border-b border-[var(--card-border)]">
      <span className="text-[var(--muted)]">{label}</span>
      <span className={
        highlight ? "text-[var(--accent-green)] font-medium" :
        warn ? "text-[#6b7280]" :
        "text-white"
      }>
        {value}
      </span>
    </div>
  );
}
