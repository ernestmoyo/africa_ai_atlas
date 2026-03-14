"use client";

import dynamic from "next/dynamic";

const AfricaMap = dynamic(() => import("@/components/AfricaMap"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-[400px] text-[var(--muted)]">
      Loading map...
    </div>
  ),
});

export default function MapSection() {
  return <AfricaMap />;
}
