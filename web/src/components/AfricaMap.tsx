"use client";

import { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import { countries, getScoreColor, countryToSlug, type CountryData } from "@/lib/data";
import Link from "next/link";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// ISO 3166-1 numeric codes for all 54 African countries
// world-atlas@2 uses these numeric IDs, not ISO_A2
const AFRICA_NUMERIC: Record<string, string> = {
  "012": "DZA", "024": "AGO", "204": "BEN", "072": "BWA", "854": "BFA",
  "108": "BDI", "132": "CPV", "120": "CMR", "140": "CAF", "148": "TCD",
  "174": "COM", "178": "COG", "180": "COD", "384": "CIV", "262": "DJI",
  "818": "EGY", "226": "GNQ", "232": "ERI", "748": "SWZ", "231": "ETH",
  "266": "GAB", "270": "GMB", "288": "GHA", "324": "GIN", "624": "GNB",
  "404": "KEN", "426": "LSO", "430": "LBR", "434": "LBY", "450": "MDG",
  "454": "MWI", "466": "MLI", "478": "MRT", "480": "MUS", "504": "MAR",
  "508": "MOZ", "516": "NAM", "562": "NER", "566": "NGA", "646": "RWA",
  "678": "STP", "686": "SEN", "690": "SYC", "694": "SLE", "706": "SOM",
  "710": "ZAF", "728": "SSD", "729": "SDN", "834": "TZA", "768": "TGO",
  "788": "TUN", "800": "UGA", "894": "ZMB", "716": "ZWE",
};

const AFRICA_NUMERIC_SET = new Set(Object.keys(AFRICA_NUMERIC));

// Build lookup: ISO3 → CountryData
const ISO3_MAP = new Map<string, CountryData>();
for (const c of countries) {
  ISO3_MAP.set(c.iso3, c);
}

function findCountry(geoId: string): CountryData | undefined {
  const iso3 = AFRICA_NUMERIC[geoId];
  if (iso3) return ISO3_MAP.get(iso3);
  return undefined;
}

interface TooltipData {
  country: CountryData;
  x: number;
  y: number;
}

export default function AfricaMap() {
  const [tooltip, setTooltip] = useState<TooltipData | null>(null);

  return (
    <div className="relative map-container">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          center: [20, 2],
          scale: 380,
        }}
        width={600}
        height={620}
        style={{ width: "100%", height: "auto" }}
      >
        <ZoomableGroup center={[20, 2]} zoom={1} minZoom={0.8} maxZoom={4}>
          <Geographies geography={GEO_URL}>
            {({ geographies }) =>
              geographies
                .filter((geo) => AFRICA_NUMERIC_SET.has(geo.id))
                .map((geo) => {
                  const country = findCountry(geo.id);
                  const score = country?.composite_score ?? 0;
                  const fillColor = country
                    ? getScoreColor(score)
                    : "#334155";

                  const href = country
                    ? `/country/${countryToSlug(country.name)}`
                    : "#";

                  return (
                    <Link key={geo.rsmKey} href={href}>
                      <Geography
                        geography={geo}
                        fill={fillColor}
                        stroke="#0f172a"
                        strokeWidth={0.5}
                        style={{
                          default: { outline: "none", opacity: 0.85 },
                          hover: { outline: "none", opacity: 1, fill: "#60a5fa" },
                          pressed: { outline: "none" },
                        }}
                        onMouseEnter={(evt) => {
                          if (country) {
                            setTooltip({
                              country,
                              x: evt.clientX,
                              y: evt.clientY,
                            });
                          }
                        }}
                        onMouseLeave={() => setTooltip(null)}
                      />
                    </Link>
                  );
                })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>

      {tooltip && (
        <div
          className="map-tooltip fixed"
          style={{
            left: tooltip.x + 15,
            top: tooltip.y - 10,
          }}
        >
          <div className="font-bold text-white">{tooltip.country.name}</div>
          <div className="text-sm text-[var(--muted)]">
            Rank #{tooltip.country.rank} | Score:{" "}
            <span className="text-white font-medium">
              {tooltip.country.composite_score}
            </span>
            /100
          </div>
          <div className="text-xs text-[var(--muted)] mt-1">
            {tooltip.country.region}
          </div>
        </div>
      )}

      {/* Legend */}
      <div className="flex flex-wrap gap-3 mt-4 justify-center text-xs">
        {[
          { label: "Advanced (60+)", color: "#059669" },
          { label: "Developing (40-59)", color: "#2563eb" },
          { label: "Emerging (25-39)", color: "#d97706" },
          { label: "Early Stage (15-24)", color: "#ea580c" },
          { label: "Nascent (<15)", color: "#dc2626" },
        ].map(({ label, color }) => (
          <div key={label} className="flex items-center gap-1.5">
            <div
              className="w-3 h-3 rounded-sm"
              style={{ background: color }}
            />
            <span className="text-[var(--muted)]">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
