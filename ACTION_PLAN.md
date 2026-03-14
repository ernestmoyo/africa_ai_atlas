# Africa AI Atlas — Action Plan

**Owner:** Ernest Moyo | **Status:** Data Complete, Platform Build Next | **Target Launch:** Q3 2026
**Platform Name:** Africa AI Atlas | **URL:** atlas.7squareinc.com

---

## Objective

Build and publish the **Africa AI Atlas** — the definitive quarterly interactive platform ranking all 54 African countries by AI readiness, maturity, and adoption. Position 7Square Inc. as the authoritative source on AI progress across the continent.

---

## Why This Matters

No single organisation currently owns a credible, Africa-focused, interactive AI index. The global indices (Oxford Insights, Stanford AI Index) treat Africa as an afterthought. 7Square has the analytical capability and continental credibility to fill this gap — and whoever publishes first will be cited by every DFI, government, and media outlet covering AI in Africa.

---

## What's Been Done (March 2026)

### Completed
- [x] Methodology defined — 5 pillars, 30+ indicators, equal weighting, 0-100 scale
- [x] Data sources identified and catalogued — 16+ sources including World Bank API, Oxford Insights, ITU, UNESCO, UNCTAD, Partech, AfriLabs
- [x] Real data collected for all 54 countries via World Bank API (internet, electricity, broadband, education)
- [x] Policy & governance data researched — AI strategies, data protection laws, ethics frameworks
- [x] Innovation ecosystem data gathered — VC funding, startups, data centers, tech hubs
- [x] All 54 countries scored and ranked (Q1 2026 baseline)
- [x] Comprehensive research document produced (40+ pages)
- [x] Q1 2026 dataset created (JSON + CSV)
- [x] Country reference data (ISO codes, regional classification)
- [x] Oxford Insights benchmark comparison completed

### Key Deliverables Produced
1. `docs/METHODOLOGY.md` — Full scoring methodology
2. `docs/DATA_SOURCES.md` — Complete data sources registry
3. `research/AFRICA_AI_ATLAS_Q1_2026_RESEARCH.md` — Comprehensive research document
4. `data/quarterly/2026-Q1.json` — Scored dataset (all 54 countries)
5. `data/quarterly/2026-Q1-rankings.csv` — Rankings table (CSV export)
6. `data/reference/countries.json` — Canonical country list with ISO codes

---

## Deliverables

1. **Africa AI Atlas Interactive Platform**
   - Next.js static site hosted on Vercel
   - Interactive choropleth map of Africa
   - Country profile pages (54 drill-down pages)
   - Side-by-side country comparison tool
   - Sortable, filterable rankings table
   - Quarterly trend charts (from Q2 onwards)
   - Methodology transparency page
   - Download center (PDF, CSV)

2. **Quarterly Research Reports**
   - Full analysis with rankings, regional breakdowns, deep dives
   - Available as web publication and downloadable PDF
   - Cumulative trend data from Q2 onwards

3. **Press Kit & One-Pager**
   - For media distribution and conference handouts
   - Shareable social media graphics

---

## Index Framework

| Pillar | Weight | Key Indicators | Data Sources |
|--------|--------|----------------|-------------|
| **Policy & Governance** | 20% | National AI strategy, data protection laws, AI ethics frameworks, government AI body, open data portal | UNESCO, UNCTAD, Carnegie, government portals |
| **Infrastructure & Data** | 20% | Internet penetration, electricity access, fixed broadband, cloud infrastructure, data centers | World Bank API, ITU, Cloudscene |
| **Talent & Education** | 20% | Tertiary enrollment, STEM graduates, AI/ML programs, developer activity, AI publications | UNESCO UIS, World Bank, GitHub |
| **Innovation & Ecosystem** | 20% | AI startups, VC funding, AI research centers, tech hubs, patents, competitions | Partech, Crunchbase, AfriLabs, WIPO, Zindi |
| **Deployment & Impact** | 20% | AI use cases, public sector AI, financial/agri/health AI, sector diversity | UN E-Gov, WHO, news, case studies |

---

## Tech Stack

| Component | Technology | Cost |
|-----------|-----------|------|
| Frontend | Next.js (static export) | Free |
| Hosting | Vercel (free tier) | Free |
| Data pipeline | Python (pandas, requests) | Free |
| Maps | react-simple-maps or Mapbox | Free tier |
| Charts | recharts or nivo | Free |
| Data store | JSON files in git repo | Free |
| Domain | atlas.7squareinc.com (subdomain) | Free |

**Total platform cost: $0** (excluding domain if separate .com registered later)

---

## Phased Execution (Updated)

### Phase 1: Foundation ✅ COMPLETE (March 2026)
- [x] Finalise the index methodology and pillar weightings
- [x] Identify and catalogue data sources for each indicator
- [x] Collect baseline data for all 54 countries
- [x] Score and rank all countries
- [x] Produce Q1 2026 research document

### Phase 2: Platform Build (April–May 2026)
- [ ] Initialize Next.js project with project structure
- [ ] Build interactive Africa choropleth map component
- [ ] Build country profile page template (dynamic routes)
- [ ] Build rankings table with sort/filter
- [ ] Build country comparison tool
- [ ] Build methodology page
- [ ] Build download center (PDF, CSV exports)
- [ ] Build homepage with key stats and map
- [ ] Mobile responsive design
- [ ] SEO optimization (meta tags, Open Graph, structured data)
- [ ] Deploy to Vercel

### Phase 3: Launch & PR (June 2026)
- [ ] Internal review with Isabel — alignment on narrative and positioning
- [ ] Recruit 3–5 external reviewers for methodology validation
- [ ] Design press kit and one-pager
- [ ] Pre-brief key journalists and organisations (AU, Smart Africa, UNDP, Brookings Africa)
- [ ] Soft launch for feedback
- [ ] Full public launch across all channels
- [ ] Submit to relevant mailing lists and policy forums

### Phase 4: Q2 2026 Update & Amplification (July–Sept 2026)
- [ ] Run Q2 2026 data pipeline (quarterly refresh)
- [ ] Publish Q2 report with trend data
- [ ] Present findings at 1–2 conferences or webinars
- [ ] Pitch op-eds based on findings to African media outlets
- [ ] Reach out to governments of top-ranked countries for endorsement quotes
- [ ] Track citations and media mentions

### Phase 5: Product Expansion (Q4 2026+)
- [ ] Integrate AI Readiness Assessment (Project #02) into platform
- [ ] Build API for third-party data access
- [ ] Develop country comparison embeddable widget
- [ ] Launch quarterly AI Africa Briefing (Project #03 synergy)
- [ ] Explore partnerships with AU, Smart Africa, UNDP

---

## Resource Requirements

| Resource | Responsibility | Notes |
|----------|---------------|-------|
| Data collection & analysis | Ernest | Core analytical work — DONE for Q1 |
| Platform development | Ernest | Next.js + Vercel |
| Report design & layout | Intern | Under Ernest's direction |
| Marketing & distribution | Isabel | Press outreach, social media campaign |
| External reviewers | Ernest to recruit | 3–5 advisory reviewers for methodology validation |

---

## Budget Estimate

| Item | Cost |
|------|------|
| Platform hosting (Vercel free tier) | $0 |
| Data acquisition (World Bank API = free) | $0 |
| Report design tools/templates | $100–200 |
| External reviewer honorariums (optional) | $500–1,000 |
| Promotion and distribution | $200–400 |
| Domain (africaaiatlas.com — if separate) | $12/year |
| **Total estimated** | **$812–1,612** |

---

## Success Metrics

- Platform receives 2,000+ unique visitors in first quarter
- Cited by at least 5 external organisations or media outlets within 6 months
- At least 2 government or DFI engagement inquiries generated
- 100+ dataset downloads in first 3 months
- Quarterly update cadence maintained (Q2, Q3, Q4 2026)
- Establishes repeatable quarterly process
- Feeds leads into AI Readiness Assessment consulting (Project #02)

---

## Top 10 Rankings (Q1 2026 Baseline)

| Rank | Country | Score | Key Strength |
|------|---------|-------|-------------|
| 1 | Egypt | 69.0 | Policy leadership (100/100 on Oxford policy capacity) |
| 2 | Kenya | 63.6 | Innovation ecosystem ($1.04B in 2025 funding) |
| 3 | South Africa | 60.8 | Infrastructure (49 data centers, hyperscaler presence) |
| 4 | Nigeria | 57.4 | Startup ecosystem (200+ AI startups, Lagos hub) |
| 5 | Mauritius | 54.0 | Infrastructure (26.9 broadband/100, 100% electricity) |
| 6 | Morocco | 52.4 | Connectivity (91% internet, full electricity) |
| 7 | Tunisia | 47.0 | Education (38% tertiary enrollment, strong broadband) |
| 7 | Rwanda | 47.0 | Governance (Kigali Innovation City, Smart Africa HQ) |
| 9 | Ghana | 46.8 | Balanced profile (Google AI lab, strong policy) |
| 10 | Senegal | 41.8 | Francophone leader (AI strategy, growing ecosystem) |

---

## Risks & Mitigations

| Risk | Mitigation |
|------|-----------|
| Data gaps for smaller/fragile states | Use proxy indicators; clearly flag data limitations |
| Methodology challenged by peers | Pre-validate with reviewers; publish openly; welcome feedback |
| Competing index launched first | Move fast — Q1 data already collected, platform next |
| Low visibility at launch | Pre-brief stakeholders; leverage Isabel's BD network |
| Quarterly cadence unsustainable | Automate data pipeline with Python scripts; most data from APIs |
| Data source APIs change | Cache raw data, version everything, have fallback sources |

---

*Document updated: March 2026 | Next review: April 2026*
*7Square Inc. — Converting Africa's Challenges into Opportunities*
