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
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-[var(--muted)] mb-6">
        <Link href="/" className="hover:text-white">Home</Link>
        <span>/</span>
        <Link href="/rankings" className="hover:text-white">Rankings</Link>
        <span>/</span>
        <span className="text-white">{country.name}</span>
      </div>

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white">{country.name}</h1>
          <div className="text-[var(--muted)] mt-1">
            {country.region} | ISO: {country.iso3}
          </div>
        </div>
        <div className="text-right">
          <div className="text-4xl font-bold" style={{ color: getScoreColor(country.composite_score) }}>
            #{country.rank}
          </div>
          <ScoreBadge score={country.composite_score} size="lg" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {/* Pillar Scores */}
        <div className="bg-[var(--card)] border border-[var(--card-border)] rounded-xl p-6">
          <h2 className="text-lg font-bold text-white mb-4">Pillar Scores</h2>
          <PillarBars country={country} />
          <div className="mt-4 pt-4 border-t border-[var(--card-border)] text-sm">
            <div className="flex justify-between text-[var(--muted)]">
              <span>Strongest: <span className="text-white">{bestPillar.label}</span> ({bestPillar.score})</span>
            </div>
            <div className="flex justify-between text-[var(--muted)] mt-1">
              <span>Weakest: <span className="text-white">{worstPillar.label}</span> ({worstPillar.score})</span>
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
            <Row label="National AI Strategy" value={country.raw_data.ai_strategy} highlight={country.raw_data.ai_strategy === "Yes"} />
            <Row label="Data Protection Law" value={country.raw_data.data_protection_law} highlight={country.raw_data.data_protection_law === "Yes"} />
            <Row label="Data Centers" value={String(country.raw_data.data_centers)} />
            <Row label="Oxford AI Readiness" value={country.raw_data.oxford_ai_readiness_score != null ? String(country.raw_data.oxford_ai_readiness_score) : "N/A"} />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-8">
        {prevCountry ? (
          <Link
            href={`/country/${countryToSlug(prevCountry.name)}`}
            className="text-sm text-[var(--accent)] hover:underline"
          >
            ← #{prevCountry.rank} {prevCountry.name}
          </Link>
        ) : <div />}
        <Link href="/rankings" className="text-sm text-[var(--muted)] hover:text-white">
          All Rankings
        </Link>
        {nextCountry ? (
          <Link
            href={`/country/${countryToSlug(nextCountry.name)}`}
            className="text-sm text-[var(--accent)] hover:underline"
          >
            #{nextCountry.rank} {nextCountry.name} →
          </Link>
        ) : <div />}
      </div>
    </div>
  );
}

function Row({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="flex justify-between items-center py-1 border-b border-[var(--card-border)]">
      <span className="text-[var(--muted)]">{label}</span>
      <span className={highlight ? "text-[var(--accent-green)] font-medium" : "text-white"}>
        {value}
      </span>
    </div>
  );
}
