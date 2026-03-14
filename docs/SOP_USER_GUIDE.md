# Africa AI Atlas — Standard Operating Procedure (SOP)
## User Guide for Getting the Best Out of the Platform

**Version:** 1.0 | **Date:** March 2026 | **Author:** 7Square Inc.
**Platform:** atlas.7squareinc.com | **Contact:** info@7squareinc.com

---

## Table of Contents

1. [Who Is This For](#1-who-is-this-for)
2. [Platform Overview](#2-platform-overview)
3. [SOP by User Type](#3-sop-by-user-type)
4. [Page-by-Page Walkthrough](#4-page-by-page-walkthrough)
5. [Common Workflows](#5-common-workflows)
6. [How to Read the Scores](#6-how-to-read-the-scores)
7. [Data Download & Citation](#7-data-download--citation)
8. [FAQ](#8-faq)
9. [Quarterly Update Schedule](#9-quarterly-update-schedule)

---

## 1. Who Is This For

The Africa AI Atlas serves five primary user types:

| User Type | What They Need | Where to Start |
|-----------|---------------|----------------|
| **Government Policy Makers** | Benchmark their country, identify gaps, build AI strategy | Country Profile → Compare → Methodology |
| **Investors & VCs** | Identify high-potential markets, assess ecosystem maturity | Rankings → Compare → Country Profiles |
| **Development Partners (AU, UNDP, World Bank)** | Continental overview, regional gaps, funding priorities | Homepage → Regional Overview → Rankings |
| **Researchers & Academics** | Data for publications, methodology review, cross-country analysis | Methodology → Rankings (CSV download) → Compare |
| **Media & Journalists** | Key findings, country stories, quotable stats | Homepage (Key Findings) → Country Profiles → About (citation) |

---

## 2. Platform Overview

### Site Map

```
atlas.7squareinc.com
├── / (Homepage)
│   ├── Interactive Africa Map
│   ├── Top 10 Rankings
│   ├── Key Statistics
│   ├── Regional Overview
│   └── Key Findings
├── /rankings
│   ├── Full 54-country table
│   ├── Sort by any pillar
│   ├── Filter by region
│   └── Search by country name
├── /compare
│   ├── Select up to 5 countries
│   ├── Radar chart comparison
│   └── Side-by-side data table
├── /country/[name]
│   ├── Composite score & rank
│   ├── Pillar score breakdown
│   ├── Key indicators
│   └── Navigation to adjacent ranks
├── /methodology
│   ├── Scoring framework
│   ├── Pillar definitions
│   ├── Data sources
│   └── Limitations
└── /about
    ├── About 7Square Inc.
    ├── How to cite
    ├── Contact
    └── Roadmap
```

### Score Categories

| Category | Score Range | Color | Meaning |
|----------|-----------|-------|---------|
| **Advanced** | 60–100 | Green | Strong AI ecosystem with active deployments |
| **Developing** | 40–59 | Blue | Emerging framework with growing capabilities |
| **Emerging** | 25–39 | Amber | Early AI activity, foundational gaps remain |
| **Early Stage** | 15–24 | Orange | Limited AI infrastructure and policy |
| **Nascent** | 0–14 | Red | Minimal AI readiness across all pillars |

### The 5 Pillars

| # | Pillar | Weight | What It Measures |
|---|--------|--------|-----------------|
| P1 | **Policy & Governance** | 20% | AI strategy, data protection laws, ethics frameworks, government AI bodies |
| P2 | **Infrastructure & Data** | 20% | Internet, electricity, broadband, cloud/data centers |
| P3 | **Talent & Education** | 20% | Tertiary enrollment, STEM graduates, developer communities, AI research |
| P4 | **Innovation & Ecosystem** | 20% | AI startups, VC funding, tech hubs, patents, competitions |
| P5 | **Deployment & Impact** | 20% | Real AI use cases across sectors (health, finance, agriculture, government) |

---

## 3. SOP by User Type

### 3A. Government Policy Makers

**Objective:** Understand your country's AI readiness, identify gaps, benchmark against peers.

**Step-by-step:**

1. **Find your country:** Go to `/rankings` → search your country name or scroll the table
2. **Review your profile:** Click your country → study the pillar breakdown
   - Which pillar is your **strongest**? (Build on it)
   - Which pillar is your **weakest**? (Priority for investment)
3. **Benchmark against peers:** Go to `/compare` → select your country + 2-3 regional peers
   - Example: If you're Tanzania, compare with Kenya, Rwanda, and Uganda
   - The radar chart instantly shows where you lead and where you trail
4. **Identify quick wins:** Look at the Key Indicators table:
   - No AI Strategy? → Develop one (see AU Continental AI Strategy as template)
   - No Data Protection Law? → Priority legislation needed
   - Low data centers? → Attract cloud infrastructure investment
5. **Download the data:** Use the CSV from the rankings page for internal briefings
6. **Cite in policy documents:** Use the citation format from `/about`

**Key questions this answers:**
- "Where does my country rank in Africa on AI readiness?"
- "What are we doing well and where are we falling behind?"
- "Which countries should we learn from?"
- "What should we prioritize in our AI strategy?"

---

### 3B. Investors & VCs

**Objective:** Identify high-potential AI markets, assess ecosystem maturity, find opportunities.

**Step-by-step:**

1. **Start with Rankings:** Go to `/rankings` → sort by **Innovation & Ecosystem** pillar (click column header)
   - This shows countries ranked by startup ecosystem strength
2. **Filter by region:** Use the region dropdown to focus on your geography of interest
3. **Deep dive on targets:** Click into country profiles for the top markets:
   - Check **VC funding figures** and **data center count**
   - Check **AI Strategy status** — countries with strategies signal government support
   - Check **Internet penetration** — market size proxy
4. **Compare investment targets:** Go to `/compare` → select 3-5 countries you're evaluating
   - The radar chart reveals balanced vs. lopsided profiles
   - A country strong on Innovation but weak on Infrastructure = high risk, high reward
   - A country strong on Infrastructure but weak on Innovation = underserved market opportunity
5. **Beyond the Big Four:** Filter out Nigeria, Kenya, South Africa, Egypt to find emerging markets:
   - Ghana, Senegal, Rwanda, Tunisia, Morocco are the Tier 2 opportunities

**Key questions this answers:**
- "Which African markets are most ready for AI investment?"
- "Where is the infrastructure sufficient to support AI startups?"
- "Which governments are creating enabling environments for AI?"
- "What's the next Kenya or Nigeria?"

---

### 3C. Development Partners (AU, UNDP, World Bank, DFIs)

**Objective:** Understand continental AI readiness gaps, prioritize funding, track progress.

**Step-by-step:**

1. **Start with Homepage:** The key statistics and regional overview give the continental picture
   - Continental average score: ~24.3/100 — significant room for growth
   - Only 18/54 countries have AI strategies
   - Africa has <1% of global data center capacity
2. **Regional analysis:** Note the regional averages:
   - North Africa leads (~47.9 avg) — driven by Egypt, Morocco, Tunisia
   - Central Africa trails (~14.0 avg) — fundamental infrastructure gaps
3. **Identify funding priorities:** Go to `/rankings` → sort by **Infrastructure** pillar
   - Countries scoring <20 on Infrastructure need foundational investment (electricity, internet)
   - Countries scoring 40+ on Infrastructure but <20 on Innovation need ecosystem support
4. **Track AI strategy adoption:** In the rankings table, the "AI Strategy" column shows which countries still need help developing strategies
5. **Compare to inform programming:** Use `/compare` to assess clusters:
   - Compare all East African Community members to design regional programs
   - Compare ECOWAS members to understand West African gaps

**Key questions this answers:**
- "Where should we allocate AI-related development funding?"
- "Which countries need infrastructure vs. policy vs. talent support?"
- "How is the continent progressing quarter-over-quarter?" (from Q2 onwards)
- "Which regions are being left behind?"

---

### 3D. Researchers & Academics

**Objective:** Access rigorous data for publications, understand methodology, conduct cross-country analysis.

**Step-by-step:**

1. **Review methodology first:** Go to `/methodology` — understand the scoring framework before using the data
   - Note the 5 equal-weight pillars
   - Note the data sources (World Bank API, Oxford Insights, UNESCO, etc.)
   - Note the limitations section — important for academic integrity
2. **Download the data:** Rankings page provides the full dataset
   - CSV format available at `/data/quarterly/2026-Q1-rankings.csv`
   - JSON format at `/data/quarterly/2026-Q1.json` (for programmatic use)
3. **Cross-reference with Oxford Insights:** Country profiles show our score alongside Oxford Insights scores where available — useful for validation
4. **Use the Compare tool for analysis:** Select countries for your research question
   - Example: "How do Francophone vs. Anglophone countries compare on AI governance?"
   - Select Senegal, Côte d'Ivoire, Cameroon vs. Ghana, Kenya, Nigeria
5. **Cite properly:** Use the citation format from `/about`:
   > 7Square Inc. (2026). *Africa AI Atlas Q1 2026*. Available at: atlas.7squareinc.com

**Key questions this answers:**
- "What's the most current, comprehensive dataset on AI in Africa?"
- "How does this methodology compare to Oxford Insights or Stanford HAI?"
- "What correlations exist between infrastructure and AI adoption in Africa?"

---

### 3E. Media & Journalists

**Objective:** Find stories, get quotable stats, understand the big picture.

**Step-by-step:**

1. **Start with Key Findings:** Homepage bottom section has 6 headline-ready findings
2. **Find country stories:** Go to `/country/[name]` for any country — the profile gives you:
   - The rank and score (headline number)
   - Strongest and weakest pillar (the narrative)
   - Key indicators (the supporting data)
3. **Story angles available:**
   - **"Africa's AI leaders"** — Top 5 country profiles
   - **"The digital divide"** — Compare Morocco (91% internet) vs Burundi (11%)
   - **"Policy vs. reality"** — Rwanda ranks #7 on governance but #30+ on infrastructure
   - **"The Big Four dominance"** — 81% of all tech funding goes to 4 countries
   - **"Francophone Africa rising"** — Senegal, Côte d'Ivoire, Tunisia emerging
4. **For graphics:** The interactive map and comparison radar charts are shareable
5. **For quotes/interviews:** Contact info@7squareinc.com

---

## 4. Page-by-Page Walkthrough

### Homepage (`/`)

| Section | What It Shows | How to Use It |
|---------|--------------|--------------|
| Hero | Platform title, CTA buttons | Navigate to Rankings, Compare, or Methodology |
| Key Stats | 4 headline numbers (countries, avg score, AI strategies, data centers) | Quick continental snapshot |
| Interactive Map | Choropleth of Africa colored by score | Hover for country tooltip, click to go to country profile |
| Top 10 | Ranked list with score bars | Click any country to drill down |
| Regional Overview | 5 region cards with average scores | Identify strongest/weakest regions |
| Key Findings | 6 numbered insights | Use for presentations, reports, media |

### Rankings Page (`/rankings`)

| Feature | How to Use |
|---------|-----------|
| **Search** | Type any country name to filter instantly |
| **Region filter** | Dropdown to show only North/West/East/Central/Southern Africa |
| **Sort columns** | Click any column header to sort ascending/descending |
| **Sort by pillar** | Click "Policy", "Infra", "Talent", "Innovation", or "Deploy" headers |
| **Country link** | Click any country name to go to its full profile |
| **AI Strategy column** | Green = Yes, Amber = In Development/Draft, Grey = No |

**Pro tip:** Sort by a single pillar to find hidden leaders. For example, sorting by Infrastructure reveals Seychelles and Cabo Verde — small islands with excellent connectivity that don't make the overall top 10.

### Country Profile (`/country/[name]`)

| Section | What It Shows |
|---------|--------------|
| Header | Country name, region, rank, composite score with category badge |
| Pillar Scores | 5 horizontal bars showing each pillar score (0-100) |
| Strongest/Weakest | Auto-identified best and worst pillar |
| Key Indicators | 8 raw data points (internet %, electricity %, broadband, enrollment, AI strategy, data protection, data centers, Oxford score) |
| Navigation | Links to previous/next ranked countries for easy browsing |

### Compare Page (`/compare`)

| Feature | How to Use |
|---------|-----------|
| **Country selector** | Dropdown to add countries (up to 5) |
| **Selected chips** | Click × to remove a country |
| **Radar chart** | Visual overlay of all selected countries' pillar scores |
| **Comparison table** | Side-by-side values for all metrics |

**Best comparisons to try:**
- Egypt vs Kenya vs South Africa (The Big Three)
- Rwanda vs Ghana vs Senegal (The Rising Stars)
- Nigeria vs Egypt (Innovation leader vs Policy leader)
- Morocco vs Tunisia vs Algeria (North Africa showdown)
- Botswana vs Namibia vs Zambia (Southern Africa emerging)

### Methodology Page (`/methodology`)

Read this page if you need to:
- Understand how scores are calculated
- Validate the data sources
- Identify limitations for your use case
- Provide feedback on the framework

### About Page (`/about`)

Contains:
- Why the Atlas exists
- About 7Square Inc.
- Citation format
- Contact information
- Upcoming features roadmap

---

## 5. Common Workflows

### Workflow 1: "Brief my Minister on our country's AI readiness"

```
Step 1: /country/[your-country]     → Screenshot the pillar bars
Step 2: /compare                    → Add your country + 3 regional peers → Screenshot radar chart
Step 3: /rankings                   → Filter your region → Screenshot table
Step 4: /methodology                → Note the data sources for credibility
Step 5: Compile into a 2-page brief with: rank, score, strengths, weaknesses, peer comparison
```

**Output:** A 2-page brief with 3 visuals and sourced data.

### Workflow 2: "Write an investment thesis on AI in Africa"

```
Step 1: / (homepage)                → Note key stats (funding, strategies, data centers)
Step 2: /rankings                   → Sort by Innovation → Identify top 10 innovation ecosystems
Step 3: /compare                    → Compare top 5 innovation countries
Step 4: /country/[each-target]      → Deep dive on infrastructure + policy enablers
Step 5: Download CSV                → Build your own analysis in Excel/Sheets
```

**Output:** Investment thesis with quantified market sizing by country.

### Workflow 3: "Design an AI capacity building program for West Africa"

```
Step 1: /rankings                   → Filter "West Africa" → See all 16 countries
Step 2: /rankings                   → Sort by Talent → Identify talent gaps
Step 3: /compare                    → Select Nigeria, Ghana, Senegal, Côte d'Ivoire, Benin
Step 4: Note which countries have AI strategies vs not
Step 5: /country/[bottom-5-west]    → Identify infrastructure prerequisites
```

**Output:** Needs assessment with country-level gaps mapped to interventions.

### Workflow 4: "Write a news article on AI in Africa"

```
Step 1: / (homepage)                → Use Key Findings section for lead
Step 2: /country/egypt              → Lead with Africa's #1 ranked country
Step 3: /compare                    → Pick a compelling comparison (e.g., Rwanda vs Nigeria)
Step 4: /rankings                   → Note the bottom 5 for the "digital divide" angle
Step 5: /about                      → Get citation and contact for quotes
```

**Output:** 800-word article with data points, country examples, and expert source.

### Workflow 5: "Update our quarterly internal AI landscape report"

```
Step 1: / (homepage)                → Check if new quarter is published
Step 2: /rankings                   → Download latest CSV
Step 3: /compare                    → Check your focus countries for changes
Step 4: Note any rank movements (available from Q2 2026 onwards)
Step 5: Update your report with latest scores and trends
```

**Output:** Updated quarterly brief with latest Atlas data.

---

## 6. How to Read the Scores

### Composite Score
- **What it is:** Weighted average of 5 pillar scores (each 20%)
- **Range:** 0–100
- **Interpretation:** Higher = more AI-ready across all dimensions

### Pillar Scores
- **What they are:** Individual dimension scores (0–100)
- **Why they matter more than composite:** A country can be a policy leader (e.g., Rwanda: 75) but infrastructure-poor (35). The composite hides this.
- **Look for imbalances:** Large gaps between pillar scores reveal strategic opportunities.

### Reading a Country Profile — Example: Kenya

```
Rank: #2 | Composite: 63.6/100 (Advanced)

Pillar Breakdown:
  Policy & Governance:    78  ████████████████████████████████████████  ← Strong
  Infrastructure & Data:  45  ███████████████████████                  ← Moderate gap
  Talent & Education:     55  ████████████████████████████             ← Good
  Innovation & Ecosystem: 72  ████████████████████████████████████     ← Excellent
  Deployment & Impact:    68  ██████████████████████████████████       ← Strong

Reading: Kenya is an innovation powerhouse (#72 on ecosystem) with strong
policy (#78) and deployment (#68). Its main gap is infrastructure (#45) —
despite hosting 18 data centers and a Microsoft $1B investment, internet
penetration is only 35%. Focus area: connectivity and broadband.
```

### Comparing Two Countries — Example: Nigeria vs Rwanda

```
                    Nigeria     Rwanda
Composite:          57.4        47.0
Policy:             65          75      ← Rwanda leads on governance
Infrastructure:     35          35      ← Both weak
Talent:             50          38      ← Nigeria's larger talent pool
Innovation:         75          42      ← Nigeria dominates (200+ startups)
Deployment:         62          45      ← Nigeria has more active use cases

Reading: Nigeria wins on ecosystem scale (75 vs 42) and deployment breadth.
Rwanda wins on governance (75 vs 65) — punching above its weight through
strategic policy. Both share the same infrastructure gap (35).
```

---

## 7. Data Download & Citation

### Available Formats

| Format | Location | Best For |
|--------|----------|---------|
| **CSV** | `/data/quarterly/2026-Q1-rankings.csv` | Excel, Google Sheets, data analysis |
| **JSON** | `/data/quarterly/2026-Q1.json` | Programmatic access, web developers |
| **Research PDF** | `/research/AFRICA_AI_ATLAS_Q1_2026_RESEARCH.md` | Full research document |

### How to Cite

**Academic format:**
> 7Square Inc. (2026). *Africa AI Atlas Q1 2026*. Available at: atlas.7squareinc.com

**Media format:**
> According to the Africa AI Atlas by 7Square Inc., [country] ranks #[X] out of 54 African countries on AI readiness with a score of [Y]/100.

**Government report format:**
> Source: Africa AI Atlas, Q1 2026 (7Square Inc.). Methodology available at atlas.7squareinc.com/methodology

### Data Licence
The Atlas data is freely available for non-commercial use with attribution. For commercial licensing, contact info@7squareinc.com.

---

## 8. FAQ

**Q: How often is the data updated?**
A: Quarterly. Q1 = January-March, Q2 = April-June, Q3 = July-September, Q4 = October-December. Each quarterly snapshot is immutable.

**Q: Why does my country score differ from Oxford Insights?**
A: Different methodology. Oxford Insights uses 6 pillars with unequal weighting and a governance-heavy approach. We use 5 equally-weighted pillars including Innovation & Ecosystem and Deployment & Impact, which Oxford doesn't cover. Both are valid — they measure different things.

**Q: Why is Kenya's internet penetration only 35% when other sources say higher?**
A: World Bank methodology (IT.NET.USER.ZS) measures individuals using the internet as % of population, which differs from ITU's broadband subscription counts. We use World Bank for consistency across all 54 countries.

**Q: Can I use this data in my report/thesis/article?**
A: Yes, with attribution. See the citation formats above.

**Q: How do you handle missing data?**
A: Countries must have data for at least 3 of 5 pillars. Missing indicators within a pillar are calculated from available data only. All missing data is transparently flagged.

**Q: I think my country's score is wrong. How do I report it?**
A: Email info@7squareinc.com with the country name, the indicator you believe is incorrect, and a source for the correct figure. We review all submissions for the next quarterly update.

**Q: When will trend data be available?**
A: From Q2 2026. Once we have 2+ quarters, quarter-over-quarter comparisons and trend charts will be available.

**Q: Can I embed the map or charts on my website?**
A: Embeddable widgets are planned for Q4 2026. Contact us for early access.

**Q: Is there an API?**
A: Planned for Q4 2026. Currently, the JSON dataset is available for download.

---

## 9. Quarterly Update Schedule

| Quarter | Data Period | Publication Date | What's New |
|---------|-----------|-----------------|-----------|
| **Q1 2026** | Jan–Mar 2026 | March 2026 | Baseline edition — first rankings |
| **Q2 2026** | Apr–Jun 2026 | July 2026 | First trend data, quarter-over-quarter changes |
| **Q3 2026** | Jul–Sep 2026 | October 2026 | AI Readiness Assessment tool integration |
| **Q4 2026** | Oct–Dec 2026 | January 2027 | API access, embeddable widgets |
| **Q1 2027** | Jan–Mar 2027 | April 2027 | Full year of trend data, annual summary report |

### What Changes Each Quarter
- Fresh data pulled from World Bank, ITU, and other API sources
- Updated AI strategy and data protection law status
- New startup/funding data from Partech and Disrupt Africa reports
- Refreshed deployment & impact assessments
- Score recalculations and rank movements

---

## Quick Reference Card

```
┌──────────────────────────────────────────────────────────────┐
│              AFRICA AI ATLAS — QUICK REFERENCE                │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  FIND A COUNTRY:  /rankings → search box                     │
│  COMPARE:         /compare → select up to 5                  │
│  DEEP DIVE:       /country/[name] → pillar breakdown         │
│  DOWNLOAD DATA:   CSV from /data/quarterly/                  │
│  METHODOLOGY:     /methodology → full framework              │
│  CITE:            7Square Inc. (2026). Africa AI Atlas Q1.   │
│  CONTACT:         info@7squareinc.com                        │
│                                                              │
│  SCORE GUIDE:                                                │
│  ■ 60-100  Advanced    (green)                               │
│  ■ 40-59   Developing  (blue)                                │
│  ■ 25-39   Emerging    (amber)                               │
│  ■ 15-24   Early Stage (orange)                              │
│  ■ 0-14    Nascent     (red)                                 │
│                                                              │
│  TOP 5 (Q1 2026):                                            │
│  1. Egypt (69.0)  2. Kenya (63.6)  3. South Africa (60.8)   │
│  4. Nigeria (57.4)  5. Mauritius (54.0)                      │
│                                                              │
│  UPDATED: Quarterly | NEXT UPDATE: Q2 2026 (July)            │
│                                                              │
│  by 7Square Inc. — Converting Africa's Challenges            │
│  into Opportunities                                          │
└──────────────────────────────────────────────────────────────┘
```

---

*Africa AI Atlas — User Guide v1.0*
*7Square Inc. | info@7squareinc.com*
*March 2026*
