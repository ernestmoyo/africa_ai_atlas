"use client";

import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import { PILLAR_LABELS, type CountryData } from "@/lib/data";

const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#8b5cf6", "#ef4444"];

interface Props {
  countries: CountryData[];
}

export default function PillarChart({ countries: data }: Props) {
  const pillars = Object.keys(PILLAR_LABELS) as (keyof typeof PILLAR_LABELS)[];

  const chartData = pillars.map((key) => {
    const point: Record<string, string | number> = {
      pillar: PILLAR_LABELS[key].replace(" & ", "\n& "),
    };
    data.forEach((c) => {
      point[c.name] = c.pillar_scores[key as keyof CountryData["pillar_scores"]];
    });
    return point;
  });

  return (
    <div>
      <ResponsiveContainer width="100%" height={350}>
        <RadarChart data={chartData} cx="50%" cy="50%" outerRadius="70%">
          <PolarGrid stroke="#334155" />
          <PolarAngleAxis
            dataKey="pillar"
            tick={{ fill: "#94a3b8", fontSize: 11 }}
          />
          <PolarRadiusAxis
            angle={90}
            domain={[0, 100]}
            tick={{ fill: "#64748b", fontSize: 10 }}
          />
          {data.map((c, i) => (
            <Radar
              key={c.iso3}
              name={c.name}
              dataKey={c.name}
              stroke={COLORS[i % COLORS.length]}
              fill={COLORS[i % COLORS.length]}
              fillOpacity={0.15}
              strokeWidth={2}
            />
          ))}
          <Tooltip
            contentStyle={{
              background: "#1e293b",
              border: "1px solid #475569",
              borderRadius: 8,
              color: "#e2e8f0",
            }}
          />
          <Legend
            wrapperStyle={{ color: "#94a3b8", fontSize: 13, paddingTop: 8 }}
          />
        </RadarChart>
      </ResponsiveContainer>

      {/* Explicit color legend for clarity */}
      <div className="flex flex-wrap gap-4 justify-center mt-2">
        {data.map((c, i) => (
          <div key={c.iso3} className="flex items-center gap-2 text-sm">
            <div
              className="w-3 h-3 rounded-full"
              style={{ background: COLORS[i % COLORS.length] }}
            />
            <span className="text-white font-medium">{c.name}</span>
            <span className="text-[var(--muted)]">({c.composite_score})</span>
          </div>
        ))}
      </div>
    </div>
  );
}
