import { getScoreColor, getScoreLabel } from "@/lib/data";

export default function ScoreBadge({ score, size = "md" }: { score: number; size?: "sm" | "md" | "lg" }) {
  const color = getScoreColor(score);
  const label = getScoreLabel(score);
  const sizeClasses = {
    sm: "text-xs px-2 py-0.5",
    md: "text-sm px-3 py-1",
    lg: "text-base px-4 py-1.5",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full font-medium text-white ${sizeClasses[size]}`}
      style={{ background: color }}
    >
      <span className="font-bold">{score}</span>
      <span className="opacity-80">/ 100</span>
      <span className="opacity-70 text-xs">({label})</span>
    </span>
  );
}
