# Africa AI Atlas

**The definitive quarterly ranking of all 54 African countries on AI readiness, maturity, and adoption.**

[Live Platform](https://atlas.7squareinc.com) · [Methodology](docs/METHODOLOGY.md) · [Full Research](research/AFRICA_AI_ATLAS_Q1_2026_RESEARCH.md) · [Download Data](data/quarterly/2026-Q1-rankings.csv)

---

## What Is This?

The Africa AI Atlas is the first Africa-owned, open-source, interactive platform that scores and ranks every African country across five pillars of AI readiness:

1. **Policy & Governance** — AI strategies, data protection laws, ethics frameworks
2. **Infrastructure & Data** — Internet, electricity, broadband, data centers
3. **Talent & Education** — Universities, STEM graduates, developers, research
4. **Innovation & Ecosystem** — Startups, VC funding, tech hubs, patents
5. **Deployment & Impact** — Real AI use cases in health, finance, agriculture, government

Updated quarterly. Each edition is an immutable snapshot — a permanent record of where Africa stands on AI.

---

## Why?

No one else is doing this. The global indices (Oxford Insights, Stanford HAI) treat Africa as an afterthought — a few rows in a global spreadsheet. The Africa AI Atlas is built in Africa, for Africa, by Africa.

We believe Africa deserves its own AI index.

---

## Q1 2026 Rankings — Top 10

| Rank | Country | Score | Region |
|------|---------|-------|--------|
| 1 | Egypt | 69.0 | North Africa |
| 2 | Kenya | 63.6 | East Africa |
| 3 | South Africa | 60.8 | Southern Africa |
| 4 | Nigeria | 57.4 | West Africa |
| 5 | Mauritius | 54.0 | East Africa |
| 6 | Morocco | 52.4 | North Africa |
| 7 | Rwanda | 47.0 | East Africa |
| 7 | Tunisia | 47.0 | North Africa |
| 9 | Ghana | 46.8 | West Africa |
| 10 | Algeria | 46.0 | North Africa |

All 54 countries ranked: [2026-Q1-rankings.csv](data/quarterly/2026-Q1-rankings.csv)

---

## Repository Structure

```
├── data/                   # All datasets
│   ├── quarterly/          # Scored data per quarter (JSON + CSV)
│   ├── reference/          # Country codes, regional classifications
│   └── raw/                # Raw research data
├── docs/                   # Documentation
│   ├── METHODOLOGY.md      # Full scoring methodology
│   ├── DATA_SOURCES.md     # 16+ data sources with URLs
│   └── SOP_USER_GUIDE.md   # How to use the platform
├── research/               # Deep research per pillar
│   └── AFRICA_AI_ATLAS_Q1_2026_RESEARCH.md  # Flagship 40+ page report
├── web/                    # Next.js interactive platform
│   ├── src/app/            # Pages
│   ├── src/components/     # Map, charts, UI components
│   └── src/lib/            # Data layer
├── ACTION_PLAN.md          # Project roadmap
└── README.md               # You are here
```

---

## Quick Start

```bash
# Clone
git clone https://github.com/ernestmoyo/africa_ai_atlas.git
cd africa_ai_atlas

# Run the platform
cd web
npm install --legacy-peer-deps
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Key Documents

| Document | Description |
|----------|-------------|
| [Full Research Report](research/AFRICA_AI_ATLAS_Q1_2026_RESEARCH.md) | 40+ page analysis with rankings, regional breakdowns, and recommendations |
| [Methodology](docs/METHODOLOGY.md) | How we score — pillars, indicators, normalization, data sources |
| [Data Sources](docs/DATA_SOURCES.md) | Every source with URLs, coverage, and update frequency |
| [User Guide / SOP](docs/SOP_USER_GUIDE.md) | How to use the platform for different audiences |
| [Q1 2026 Dataset (JSON)](data/quarterly/2026-Q1.json) | Complete scored dataset with raw indicators |
| [Q1 2026 Rankings (CSV)](data/quarterly/2026-Q1-rankings.csv) | Rankings table for Excel/Sheets |

---

## Contributing

We welcome contributions — data corrections, new sources, features, methodology feedback, and translations. See [web/README.md](web/README.md) for contribution guidelines.

---

## Citation

```
7Square Inc. (2026). Africa AI Atlas Q1 2026. https://atlas.7squareinc.com
```

---

## License

Open source under the [MIT License](LICENSE). Data freely available with attribution.

---

## Developed By

**[7Square Inc.](https://7squareinc.com)** — Converting Africa's Challenges into Opportunities

Created by **Ernest Moyo** · [info@7squareinc.com](mailto:info@7squareinc.com)
