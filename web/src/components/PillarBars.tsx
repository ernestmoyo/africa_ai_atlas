import { PILLAR_LABELS, PILLAR_COLORS, type CountryData } from "@/lib/data";

export default function PillarBars({ country }: { country: CountryData }) {
  const pillars = Object.entries(PILLAR_LABELS) as [string, string][];

  return (
    <div className="space-y-3">
      {pillars.map(([key, label]) => {
        const score = country.pillar_scores[key as keyof CountryData["pillar_scores"]];
        const color = PILLAR_COLORS[key];
        return (
          <div key={key}>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-[var(--muted)]">{label}</span>
              <span className="font-medium text-white">{score}</span>
            </div>
            <div className="w-full bg-[var(--background)] rounded-full h-2.5">
              <div
                className="h-2.5 rounded-full transition-all duration-700"
                style={{ width: `${score}%`, background: color }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
