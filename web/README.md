# Africa AI Atlas

**The definitive quarterly ranking of all 54 African countries on AI readiness, maturity, and adoption.**

[Live Platform](https://atlas.7squareinc.com) · [Methodology](https://atlas.7squareinc.com/methodology) · [Download Data (CSV)](https://atlas.7squareinc.com/data/quarterly/2026-Q1-rankings.csv)

---

## About

The Africa AI Atlas is the first Africa-owned, open-source, interactive platform that scores and ranks every African country across five pillars of AI readiness. Updated quarterly, it provides governments, investors, researchers, and development partners with the most comprehensive picture of AI across the continent.

**No one else is doing this.** The global indices (Oxford Insights, Stanford HAI) treat Africa as an afterthought. The Atlas fills that gap — built in Africa, for Africa, by Africa.

### Q1 2026 — Top 10

| Rank | Country | Score | Key Strength |
|------|---------|-------|-------------|
| 1 | Egypt | 69.0 | Policy leadership (100/100 on Oxford policy capacity) |
| 2 | Kenya | 63.6 | Innovation ecosystem ($1.04B in 2025 funding) |
| 3 | South Africa | 60.8 | Infrastructure (49 data centers, hyperscaler presence) |
| 4 | Nigeria | 57.4 | Startup ecosystem (200+ AI startups) |
| 5 | Mauritius | 54.0 | Connectivity (26.9 broadband/100, 100% electricity) |
| 6 | Morocco | 52.4 | Digital access (91% internet penetration) |
| 7 | Rwanda | 47.0 | Governance (Kigali Innovation City, Smart Africa HQ) |
| 7 | Tunisia | 47.0 | Education (38% tertiary enrollment, strong STEM) |
| 9 | Ghana | 46.8 | Balanced profile (Google AI lab, strong policy) |
| 10 | Algeria | 46.0 | Education (54% tertiary enrollment) |

---

## The 5 Pillars

Each pillar carries equal weight (20%) in the composite score.

| Pillar | What It Measures |
|--------|-----------------|
| **Policy & Governance** | National AI strategy, data protection laws, ethics frameworks, government AI bodies |
| **Infrastructure & Data** | Internet penetration, electricity access, broadband, cloud/data centers |
| **Talent & Education** | Tertiary enrollment, STEM graduates, developer communities, AI research publications |
| **Innovation & Ecosystem** | AI startups, VC funding, tech hubs, patents, hackathons |
| **Deployment & Impact** | Real AI use cases across health, finance, agriculture, and government |

---

## Features

- **Interactive Africa Map** — Choropleth colored by AI readiness score, click any country to drill down
- **Full Rankings Table** — Sort by any pillar, filter by region, search by name
- **Country Profiles** — 54 individual pages with pillar breakdowns, key indicators, and navigation
- **Country Comparison** — Select up to 5 countries, radar chart + side-by-side data table
- **Methodology Page** — Full transparency on scoring, data sources, and limitations
- **Data Downloads** — CSV and JSON exports for researchers and analysts
- **Quarterly Updates** — Immutable snapshots each quarter, trend data from Q2 onwards

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Next.js](https://nextjs.org) (App Router, Static Export) |
| Language | TypeScript |
| Styling | [Tailwind CSS](https://tailwindcss.com) |
| Maps | [react-simple-maps](https://www.react-simple-maps.io) |
| Charts | [Recharts](https://recharts.org) |
| Data | Static JSON (no database — each quarter is a versioned snapshot) |
| Hosting | [Vercel](https://vercel.com) (free tier) |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
git clone https://github.com/ernestmoyo/africa_ai_atlas.git
cd africa_ai_atlas/web
npm install --legacy-peer-deps
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
npm run build
npm start
```

---

## Project Structure

```
africa_ai_atlas/
├── data/
│   ├── quarterly/          # Scored datasets (JSON + CSV per quarter)
│   │   ├── 2026-Q1.json
│   │   └── 2026-Q1-rankings.csv
│   ├── reference/          # Canonical country list, ISO codes
│   └── raw/                # Raw research data
├── docs/
│   ├── METHODOLOGY.md      # Full scoring methodology
│   ├── DATA_SOURCES.md     # Registry of 16+ data sources
│   └── SOP_USER_GUIDE.md   # User guide and workflows
├── research/               # Comprehensive research per pillar
│   ├── AFRICA_AI_ATLAS_Q1_2026_RESEARCH.md
│   ├── ai_policy_governance_54_countries.md
│   ├── infrastructure_data_54_countries.md
│   ├── innovation_ecosystem_data.md
│   └── ai_deployment_impact.md
├── web/                    # Next.js platform
│   ├── src/
│   │   ├── app/            # Pages (home, rankings, compare, country, methodology, about)
│   │   ├── components/     # AfricaMap, PillarChart, PillarBars, ScoreBadge
│   │   └── lib/            # Data layer with all 54 countries
│   └── public/             # Static assets and downloadable data files
└── ACTION_PLAN.md          # Project roadmap
```

---

## Data Sources

All data is sourced from publicly available, authoritative sources:

- [World Bank Open Data](https://data.worldbank.org) — Internet, electricity, broadband, education indicators
- [Oxford Insights Government AI Readiness Index 2025](https://oxfordinsights.com/ai-readiness/government-ai-readiness-index-2025/)
- [ITU Digital Development Dashboard](https://datahub.itu.int)
- [UNESCO Institute for Statistics](https://data.uis.unesco.org)
- [UNCTAD Data Protection Tracker](https://unctad.org/page/data-protection-and-privacy-legislation-worldwide)
- [Partech Africa Tech VC Reports](https://partechpartners.com/africa-reports/)
- [AfriLabs Network](https://afrilabs.com)
- [Carnegie Endowment — Africa AI Governance](https://carnegieendowment.org)

Full data source registry: [DATA_SOURCES.md](docs/DATA_SOURCES.md)

---

## Contributing

We welcome contributions from researchers, developers, and policy experts across Africa and beyond.

### Ways to Contribute

- **Data corrections** — Found an error? Open an issue with the country, indicator, and correct source.
- **New data sources** — Know of a reliable data source we're missing? Submit a PR or issue.
- **Feature development** — See the [open issues](https://github.com/ernestmoyo/africa_ai_atlas/issues) for planned features.
- **Methodology feedback** — Review our [METHODOLOGY.md](docs/METHODOLOGY.md) and share your thoughts.
- **Translations** — Help make the platform accessible in French, Portuguese, and Arabic.

### How to Contribute

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to your branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## Roadmap

| Quarter | Milestone |
|---------|-----------|
| **Q1 2026** | Baseline edition — 54 countries scored and ranked |
| **Q2 2026** | First quarterly update with trend data |
| **Q3 2026** | AI Readiness Assessment tool integration |
| **Q4 2026** | Public API for researchers and media |
| **Q1 2027** | Full year of trend data, annual summary report |

---

## Citation

If you use this data in your research, report, or publication:

```
7Square Inc. (2026). Africa AI Atlas Q1 2026. https://atlas.7squareinc.com
```

---

## License

This project is open source under the [MIT License](LICENSE).

Data is freely available for non-commercial use with attribution. For commercial licensing, contact [info@7squareinc.com](mailto:info@7squareinc.com).

---

## Developed By

**[7Square Inc.](https://7squareinc.com)** — Converting Africa's Challenges into Opportunities

Created by **Ernest Moyo** · [info@7squareinc.com](mailto:info@7squareinc.com)

---

*Africa AI Atlas — Because Africa deserves its own AI index.*
