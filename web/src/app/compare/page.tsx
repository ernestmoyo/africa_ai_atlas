"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { countries, PILLAR_LABELS, getScoreColor, type CountryData } from "@/lib/data";

const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#8b5cf6", "#ef4444"];

const PillarChart = dynamic(() => import("@/components/PillarChart"), { ssr: false });

export default function ComparePage() {
  const [selected, setSelected] = useState<string[]>(["EGY", "KEN", "ZAF"]);

  function toggle(iso3: string) {
    setSelected((prev) =>
      prev.includes(iso3)
        ? prev.filter((s) => s !== iso3)
        : prev.length < 5
        ? [...prev, iso3]
        : prev
    );
  }

  const selectedCountries = selected
    .map((iso3) => countries.find((c) => c.iso3 === iso3)!)
    .filter(Boolean);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-white mb-2">Compare Countries</h1>
      <p className="text-[var(--muted)] mb-6">Select up to 5 countries to compare side-by-side.</p>

      {/* Country selector */}
      <div className="mb-8">
        <select
          onChange={(e) => {
            if (e.target.value && !selected.includes(e.target.value)) toggle(e.target.value);
            e.target.value = "";
          }}
          className="px-4 py-2 rounded-lg bg-[var(--card)] border border-[var(--card-border)] text-white text-sm"
          defaultValue=""
        >
          <option value="" disabled>Add a country...</option>
          {countries.map((c) => (
            <option key={c.iso3} value={c.iso3} disabled={selected.includes(c.iso3)}>
              {c.name} (#{c.rank}, score: {c.composite_score})
            </option>
          ))}
        </select>

        <div className="flex flex-wrap gap-2 mt-3">
          {selectedCountries.map((c, i) => (
            <button
              key={c.iso3}
              onClick={() => toggle(c.iso3)}
              className="px-3 py-1.5 rounded-full text-sm font-medium text-white transition flex items-center gap-2"
              style={{ background: COLORS[i % COLORS.length] }}
            >
              {c.name}
              <span className="text-white/60">&times;</span>
            </button>
          ))}
        </div>
      </div>

      {selectedCountries.length >= 2 && (
        <>
          {/* Radar Chart — taller */}
          <div className="bg-[var(--card)] border border-[var(--card-border)] rounded-xl p-6 mb-8">
            <h2 className="text-lg font-bold text-white mb-4">Pillar Comparison</h2>
            <div className="min-h-[420px]">
              <PillarChart countries={selectedCountries} />
            </div>
          </div>

          {/* Comparison Table with conditional heat */}
          <div className="overflow-x-auto bg-[var(--card)] border border-[var(--card-border)] rounded-xl">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--card-border)]">
                  <th className="px-4 py-3 text-left text-[var(--muted)] font-medium">Metric</th>
                  {selectedCountries.map((c, i) => (
                    <th key={c.iso3} className="px-4 py-3 text-right font-medium" style={{ color: COLORS[i % COLORS.length] }}>
                      {c.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <CompRow label="Rank" values={selectedCountries.map((c) => `#${c.rank}`)} />
                <CompRow
                  label="Composite Score"
                  values={selectedCountries.map((c) => String(c.composite_score))}
                  colors={selectedCountries.map((c) => getScoreColor(c.composite_score))}
                  bold
                  numericValues={selectedCountries.map((c) => c.composite_score)}
                />
                {(Object.entries(PILLAR_LABELS) as [string, string][]).map(([key, label]) => {
                  const nums = selectedCountries.map((c) =>
                    c.pillar_scores[key as keyof CountryData["pillar_scores"]]
                  );
                  return (
                    <CompRow
                      key={key}
                      label={label}
                      values={nums.map(String)}
                      numericValues={nums}
                    />
                  );
                })}
                <CompRow label="Internet %" values={selectedCountries.map((c) => c.raw_data.internet_penetration != null ? `${c.raw_data.internet_penetration}%` : "N/A")} numericValues={selectedCountries.map((c) => c.raw_data.internet_penetration ?? 0)} />
                <CompRow label="Electricity %" values={selectedCountries.map((c) => c.raw_data.electricity_access != null ? `${c.raw_data.electricity_access}%` : "N/A")} numericValues={selectedCountries.map((c) => c.raw_data.electricity_access ?? 0)} />
                <CompRow label="Fixed BB/100" values={selectedCountries.map((c) => c.raw_data.fixed_broadband_per100 != null ? String(c.raw_data.fixed_broadband_per100) : "N/A")} numericValues={selectedCountries.map((c) => c.raw_data.fixed_broadband_per100 ?? 0)} />
                <CompRow label="AI Strategy" values={selectedCountries.map((c) => c.raw_data.ai_strategy)} />
                <CompRow label="Data Protection" values={selectedCountries.map((c) => c.raw_data.data_protection_law)} />
                <CompRow label="Data Centers" values={selectedCountries.map((c) => String(c.raw_data.data_centers))} numericValues={selectedCountries.map((c) => c.raw_data.data_centers)} />
              </tbody>
            </table>
          </div>
        </>
      )}

      {selectedCountries.length < 2 && (
        <div className="text-center py-16 text-[var(--muted)]">
          Select at least 2 countries to compare.
        </div>
      )}
    </div>
  );
}

function CompRow({ label, values, colors, bold, numericValues }: {
  label: string;
  values: string[];
  colors?: string[];
  bold?: boolean;
  numericValues?: number[];
}) {
  // Determine which cell has the highest value for heat-map highlighting
  const maxVal = numericValues ? Math.max(...numericValues) : 0;
  const minVal = numericValues ? Math.min(...numericValues) : 0;

  return (
    <tr className="border-b border-[var(--card-border)]">
      <td className="px-4 py-2.5 text-[var(--muted)] whitespace-nowrap">{label}</td>
      {values.map((v, i) => {
        let cellBg = "";
        if (numericValues && numericValues.length > 1 && maxVal !== minVal) {
          if (numericValues[i] === maxVal) cellBg = "heat-high";
          else if (numericValues[i] === minVal) cellBg = "heat-low";
        }
        return (
          <td
            key={i}
            className={`px-4 py-2.5 text-right ${bold ? "font-bold text-lg" : ""} ${cellBg}`}
            style={colors?.[i] ? { color: colors[i] } : { color: "white" }}
          >
            {v}
          </td>
        );
      })}
    </tr>
  );
}
