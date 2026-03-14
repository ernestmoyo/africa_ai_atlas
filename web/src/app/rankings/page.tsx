"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { countries, REGIONS, PILLAR_LABELS, getScoreColor, countryToSlug, type CountryData } from "@/lib/data";

type SortKey = "rank" | "name" | "composite_score" | "policy_governance" | "infrastructure_data" | "talent_education" | "innovation_ecosystem" | "deployment_impact";

export default function RankingsPage() {
  const [region, setRegion] = useState("All Regions");
  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState<SortKey>("rank");
  const [sortAsc, setSortAsc] = useState(true);

  const filtered = useMemo(() => {
    let list = [...countries];
    if (region !== "All Regions") list = list.filter((c) => c.region === region);
    if (search) {
      const q = search.toLowerCase();
      list = list.filter((c) => c.name.toLowerCase().includes(q));
    }
    list.sort((a, b) => {
      if (sortKey === "name") {
        return sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
      }
      let va: number, vb: number;
      if (sortKey === "rank") { va = a.rank; vb = b.rank; }
      else if (sortKey === "composite_score") { va = a.composite_score; vb = b.composite_score; }
      else { va = a.pillar_scores[sortKey]; vb = b.pillar_scores[sortKey]; }
      return sortAsc ? va - vb : vb - va;
    });
    return list;
  }, [region, search, sortKey, sortAsc]);

  function toggleSort(key: SortKey) {
    if (sortKey === key) setSortAsc(!sortAsc);
    else { setSortKey(key); setSortAsc(key === "rank" || key === "name"); }
  }

  const arrow = (key: SortKey) => sortKey === key ? (sortAsc ? " ↑" : " ↓") : "";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold text-white mb-1">Full Rankings</h1>
          <p className="text-[var(--muted)] text-sm">All 54 African countries ranked by AI readiness. Q1 2026.</p>
        </div>
        <a
          href="/data/quarterly/2026-Q1-rankings.csv"
          download="Africa_AI_Atlas_Q1_2026.csv"
          className="px-4 py-2 bg-[var(--accent)] text-white rounded-lg text-sm font-medium hover:opacity-90 transition shrink-0"
        >
          Download CSV
        </a>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-6">
        <input
          type="text"
          placeholder="Search country..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 rounded-lg bg-[var(--card)] border border-[var(--card-border)] text-white placeholder-[var(--muted)] text-sm w-48"
        />
        <select
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          className="px-4 py-2 rounded-lg bg-[var(--card)] border border-[var(--card-border)] text-white text-sm"
        >
          {REGIONS.map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
        <span className="text-sm text-[var(--muted)] self-center ml-2">
          {filtered.length} countries
        </span>
      </div>

      {/* Table — horizontally scrollable so pillar columns are always accessible */}
      <div className="overflow-x-auto bg-[var(--card)] border border-[var(--card-border)] rounded-xl">
        <table className="w-full text-sm rankings-table min-w-[900px]">
          <thead>
            <tr className="border-b border-[var(--card-border)]">
              <th className="px-4 py-3 text-left text-[var(--muted)] font-medium" onClick={() => toggleSort("rank")}>
                Rank{arrow("rank")}
              </th>
              <th className="px-4 py-3 text-left text-[var(--muted)] font-medium" onClick={() => toggleSort("name")}>
                Country{arrow("name")}
              </th>
              <th className="px-4 py-3 text-left text-[var(--muted)] font-medium">Region</th>
              <th className="px-4 py-3 text-right text-[var(--muted)] font-medium" onClick={() => toggleSort("composite_score")}>
                Score{arrow("composite_score")}
              </th>
              {(Object.keys(PILLAR_LABELS) as SortKey[]).map((key) => (
                <th
                  key={key}
                  className="px-3 py-3 text-right text-[var(--muted)] font-medium"
                  onClick={() => toggleSort(key)}
                  title={PILLAR_LABELS[key]}
                >
                  {PILLAR_LABELS[key].split(" ")[0]}{arrow(key)}
                </th>
              ))}
              <th className="px-4 py-3 text-center text-[var(--muted)] font-medium">AI Strategy</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((c) => (
              <tr
                key={c.iso3}
                className="border-b border-[var(--card-border)] hover:bg-[var(--background)] transition"
              >
                <td className="px-4 py-3 font-medium text-white">{c.rank}</td>
                <td className="px-4 py-3">
                  <Link href={`/country/${countryToSlug(c.name)}`} className="text-white font-medium hover:text-[var(--accent)]">
                    {c.name}
                  </Link>
                </td>
                <td className="px-4 py-3 text-[var(--muted)]">{c.region}</td>
                <td className="px-4 py-3 text-right">
                  <span className="font-bold" style={{ color: getScoreColor(c.composite_score) }}>
                    {c.composite_score}
                  </span>
                </td>
                {(Object.keys(PILLAR_LABELS) as (keyof CountryData["pillar_scores"])[]).map((key) => (
                  <td key={key} className="px-3 py-3 text-right text-[var(--muted)]">
                    {c.pillar_scores[key]}
                  </td>
                ))}
                <td className="px-4 py-3 text-center">
                  {c.raw_data.ai_strategy === "Yes" ? (
                    <span className="text-[var(--accent-green)]">Yes</span>
                  ) : c.raw_data.ai_strategy === "No" ? (
                    <span className="text-[#6b7280]">No</span>
                  ) : (
                    <span className="text-[var(--accent-amber)]">{c.raw_data.ai_strategy}</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
