# Africa AI Atlas — Methodology

**Version:** 1.1 | **Date:** March 2026 | **Author:** Ernest Moyo, 7Square Inc.
**Last Updated:** 15 March 2026

---

## Overview

The Africa AI Atlas scores and ranks all 54 African countries across 5 pillars of AI readiness, maturity, and adoption. Each pillar is equally weighted at 20% of the composite score. Countries are scored on a 0–100 scale per pillar, yielding a composite score of 0–100.

The index is updated quarterly. Each quarterly snapshot is immutable — scores are not retroactively adjusted.

---

## Data Collection Process

Data is collected through a combination of:

1. **Automated API pulls** — World Bank Open Data API provides machine-readable, timestamped data for infrastructure and education indicators across all 54 countries.
2. **Structured web scraping** — Government portals, UN websites, AI policy databases, and tech news sources are systematically scraped to verify policy status, data center counts, and ecosystem metrics.
3. **Authoritative report analysis** — Published reports from Oxford Insights, Partech Africa, AfriLabs, Disrupt Africa, and others are cross-referenced for ecosystem and funding data.
4. **Primary verification** — Each data point is cross-referenced against at least two independent sources where possible. Single-source data points are flagged with a confidence indicator.

### Data Confidence Levels

| Level | Meaning | Example |
|-------|---------|---------|
| **High** | Verified from authoritative API or 2+ independent sources | World Bank internet penetration, Oxford Insights scores |
| **Medium** | From credible single source or report, not independently verified | Data center counts, startup estimates for mid-tier countries |
| **Estimated** | Based on qualitative assessment or proxy indicators | AI deployment scores for countries ranked 30-54 |

Each country profile indicates the overall data confidence level.

---

## Pillar 1: Policy & Governance (20%)

Measures a country's regulatory readiness and strategic commitment to AI.

| Indicator | Source | Scoring | Confidence |
|-----------|--------|---------|-----------|
| **National AI Strategy** | UNESCO, Carnegie Endowment, government portals, UN country offices, AI Policy Lab Africa, tech news (Ecofin Agency, iAfrica, TogoFirst) | 0 = None, 3 = Early institutional steps, 5 = In development/Draft, 8 = Validated/Approved, 10 = Published and implemented | High |
| **Data Protection Law** | UNCTAD, Data Protection Africa (ALT Advisory), Digital Policy Alert, World Population Review | 0 = None, 5 = Draft/partial, 10 = Comprehensive enacted | High |
| **AI Ethics Framework** | UNESCO Global AI Ethics Observatory, national government publications | 0 = None, 5 = Guidelines, 10 = Binding framework | Medium |
| **Government AI Taskforce/Ministry** | Government portals, news reports | 0 = None, 5 = Advisory body, 10 = Dedicated ministry/agency | Medium |
| **Open Government Data Portal** | data.gov portals, Open Data Barometer | 0 = None, 5 = Limited, 10 = Comprehensive | High |

**AI Strategy Status Categories:**
- **Published** — Strategy document officially released and adopted by government
- **Validated/Approved** — Strategy validated through stakeholder consultation or Cabinet approval
- **In development** — Active drafting process confirmed by government or partner organisation
- **Draft** — Draft document exists but not yet validated or adopted
- **Institutional** — Institutional bodies established (e.g., AI authority) but no strategy document
- **None** — No evidence of AI strategy activity

**Verification method:** Each country's AI strategy status is verified by searching UN country office websites, government digital ministry portals, Carnegie Endowment tracker, AI Policy Lab Africa database, and tech news sources (Ecofin Agency, iAfrica, TechAfrica News, TogoFirst, Morocco World News). Status is updated each quarter.

**Pillar Score** = Sum of indicators normalized to 0–100

---

## Pillar 2: Infrastructure & Data (20%)

Measures the foundational digital and data infrastructure available.

| Indicator | Source | Scoring | Confidence |
|-----------|--------|---------|-----------|
| **Internet Penetration (%)** | World Bank API (IT.NET.USER.ZS), 2023 data | Continuous 0–100 | High |
| **Mobile Broadband Subscriptions (per 100)** | ITU, GSMA Intelligence | Continuous, normalized | High |
| **Fixed Broadband Subscriptions (per 100)** | World Bank API (IT.NET.BBND.P2), 2023 data | Continuous, normalized | High |
| **Electricity Access (%)** | World Bank API (EG.ELC.ACCS.ZS), 2023 data | Continuous 0–100 | High |
| **Cloud Infrastructure / Data Centers** | Cloudscene, African Exponent, Mordor Intelligence, DC Byte, company announcements | 0 = None, 3 = 1-2 facilities, 5 = 3-5, 8 = 6-15, 10 = 16+ or hyperscale presence | Medium |
| **International Bandwidth** | ITU, submarine cable landing data | Continuous, normalized | Medium |

**Data center methodology:** Data center counts are sourced from industry trackers (Cloudscene, DC Byte, African Exponent) and verified against hyperscaler announcements (AWS, Azure, Google Cloud, Oracle, Huawei). Counts include colocation, carrier-neutral, and enterprise data centers with at least 100kW IT load capacity. Home/office server rooms are excluded.

**Internet penetration note:** World Bank methodology (IT.NET.USER.ZS) measures individuals using the internet as a percentage of population. This may differ from ITU broadband subscription counts or commercial estimates (e.g., DataReportal). We use World Bank for consistency across all 54 countries, and note discrepancies where significant.

**Pillar Score** = Weighted average of indicators, normalized to 0–100

---

## Pillar 3: Talent & Education (20%)

Measures the human capital pipeline for AI development and adoption.

| Indicator | Source | Scoring | Confidence |
|-----------|--------|---------|-----------|
| **Tertiary Enrollment Rate (%)** | World Bank API (SE.TER.ENRR), most recent year | Continuous, normalized | High |
| **STEM Graduates (% of tertiary)** | UNESCO UIS | Continuous, normalized | Medium |
| **AI/ML University Programs** | University websites, AI4D network, AIMS network, institutional announcements | Count, normalized (0-10 scale) | Medium |
| **Developer Community Size** | GitHub Innovation Graph, Stack Overflow Developer Survey | Developer count, normalized | Medium |
| **AI Research Publications** | Scopus (ML articles by country, 1993-2024), Google Scholar | Count per capita, normalized | High |
| **Digital Literacy / ICT Skills** | ITU Digital Development Dashboard, national surveys | Score, normalized | Medium |

**Developer count methodology:** GitHub developer counts are sourced from the GitHub Innovation Graph and third-party analyses. These represent registered accounts with activity, not full-time developers. Countries with no GitHub data are estimated based on internet penetration and tertiary enrollment as proxies.

**AI publications methodology:** Publication counts are from Scopus for machine learning and artificial intelligence keywords, aggregated by author affiliation country. Co-authored papers are counted for each participating country. Publication data has a 1-2 year lag.

**Pillar Score** = Weighted average of indicators, normalized to 0–100

---

## Pillar 4: Innovation & Ecosystem (20%)

Measures the vibrancy of the AI startup and research ecosystem.

| Indicator | Source | Scoring | Confidence |
|-----------|--------|---------|-----------|
| **AI Startups** | Crunchbase, Tracxn, Briter Bridges, StartupList Africa, Disrupt Africa | Count, normalized | Medium |
| **VC/AI Funding (USD)** | Partech Africa Tech VC Report (2024, 2025), Disrupt Africa Funding Report | USD amount, normalized | High |
| **AI Research Labs/Centers** | Google AI, IBM Research, AIMS, institutional websites | Count (0-10 scale) | Medium |
| **Tech Hubs & Incubators** | AfriLabs network (514 hubs, 53 countries), GSMA, Briter Bridges | Count, normalized | Medium |
| **AI Patents Filed** | WIPO IP Statistics | Count, normalized | Medium |
| **AI Competitions Participation** | Zindi, Kaggle, DeveloperWeek Africa | Participation level (0-10 scale) | Estimated |

**Startup count methodology:** AI startup counts include companies that use AI/ML as a core part of their product or service. Counts are sourced from Crunchbase, StartupList Africa, and Briter Bridges databases. For countries outside the top 10 ecosystems, counts are estimates based on available data and should be treated as approximate ranges rather than exact figures.

**Funding methodology:** VC funding figures are from Partech Africa's annual reports (the gold standard for Africa tech funding data). Figures include equity rounds only unless otherwise noted. Total funding figures include debt instruments. AI-specific funding is a subset estimated at 15-25% of total tech funding for top-tier ecosystems.

**Pillar Score** = Weighted average of indicators, normalized to 0–100

---

## Pillar 5: Deployment & Impact (20%)

Measures actual AI deployment and real-world impact.

| Indicator | Source | Scoring | Confidence |
|-----------|--------|---------|-----------|
| **Documented AI Use Cases** | News sources, government reports, company announcements, case study databases | Count, diversity-weighted (0-10 scale) | Medium |
| **Public Sector AI Adoption** | UN E-Government Development Index (EGDI 2024), government digital services | 0–10 scale | High (EGDI) / Medium (other) |
| **Financial Services AI** | Central bank reports, fintech trackers, company announcements | 0–10 scale | Medium |
| **Agriculture AI Deployment** | FAO, CGIAR, agritech company databases | 0–10 scale | Medium |
| **Health AI Deployment** | WHO Digital Health Atlas, health ministry reports | 0–10 scale | Medium |
| **Sector Diversity of AI** | Cross-sector analysis of documented use cases | Count of sectors with active AI deployment | Estimated |

**Use case verification:** Each documented AI use case must have at least one verifiable source (news article, company website, government announcement, or research paper). Unverified or anecdotal claims are excluded. For countries ranked 30-54, deployment scores are primarily estimated based on:
- E-Government Development Index scores
- Presence of international AI-deploying organizations (e.g., Zipline, Precision Agriculture for Development)
- Technology media coverage

**Sector scoring rubric:**
- 0 = No documented AI use cases in this sector
- 3 = 1-2 pilot projects or early-stage deployments
- 5 = Active deployments with measurable outcomes
- 8 = Multiple deployments across sub-sectors
- 10 = Widespread adoption, AI integrated into sector operations

**Pillar Score** = Weighted average of indicators, normalized to 0–100

---

## Scoring Methodology

### Normalization
- **Continuous indicators** (internet %, electricity %, broadband, enrollment): Min-max normalization across all 54 countries → 0–100. The country with the highest value scores 100; the lowest scores 0.
- **Categorical indicators** (AI strategy, data protection): Predetermined scale (0/3/5/8/10) → normalized to 0–100.
- **Count indicators** (startups, hubs, publications): Log-transformed then min-max normalized to reduce the impact of extreme outliers (e.g., Nigeria's startup count dominating).
- Each pillar score is the weighted average of its normalized indicators.

### Composite Score
```
Composite = (P1 × 0.20) + (P2 × 0.20) + (P3 × 0.20) + (P4 × 0.20) + (P5 × 0.20)
```

### Missing Data Handling
- Countries must have data for at least 3 of 5 pillars to receive a composite ranking.
- Countries with 1–2 pillars of data are listed as "Insufficient Data."
- Missing indicators within a pillar: score is calculated from available indicators only. The pillar score is then penalized by 10% for each missing indicator to avoid inflating scores for countries with less data.
- All missing data is transparently flagged in country profiles.

### Tiebreaking
- Tied composite scores: higher Innovation & Ecosystem pillar score wins.
- Still tied: alphabetical order.

### Regional Classification
- **North Africa (5):** Algeria, Egypt, Libya, Morocco, Tunisia
- **West Africa (16):** Benin, Burkina Faso, Cabo Verde, Côte d'Ivoire, Gambia, Ghana, Guinea, Guinea-Bissau, Liberia, Mali, Mauritania, Niger, Nigeria, Senegal, Sierra Leone, Togo
- **Central Africa (8):** Cameroon, Central African Republic, Chad, Congo (Republic), Congo (DR), Equatorial Guinea, Gabon, São Tomé and Príncipe
- **East Africa (15):** Burundi, Comoros, Djibouti, Eritrea, Ethiopia, Kenya, Madagascar, Mauritius, Rwanda, Seychelles, Somalia, South Sudan, Sudan, Tanzania, Uganda
- **Southern Africa (10):** Angola, Botswana, Eswatini, Lesotho, Malawi, Mozambique, Namibia, South Africa, Zambia, Zimbabwe

---

## Data Sources Registry

### Tier 1: Primary Sources (API / Machine-readable)

| Source | Type | URL | Indicators | Update Frequency | Confidence |
|--------|------|-----|-----------|-----------------|-----------|
| World Bank Open Data | REST API | data.worldbank.org | Internet, electricity, broadband, education | Annual | High |
| ITU Digital Development Dashboard | Web/API | datahub.itu.int | Mobile broadband, bandwidth, ICT skills | Annual | High |
| UNESCO UIS | API | data.uis.unesco.org | STEM graduates, enrollment | Annual | High |

### Tier 2: Authoritative Reports

| Source | Type | URL | Indicators | Update Frequency | Confidence |
|--------|------|-----|-----------|-----------------|-----------|
| Oxford Insights Gov AI Readiness | Annual Report | oxfordinsights.com | Composite AI readiness scores, pillar breakdowns | Annual | High |
| Partech Africa Tech VC Report | Annual Report | partechpartners.com | VC funding by country, deal counts | Annual | High |
| Disrupt Africa Funding Report | Annual Report | disruptafrica.com | Startup funding, deal counts | Annual | High |
| UN E-Government Survey (EGDI) | Biennial Report | publicadministration.un.org | E-government development index | Biennial | High |

### Tier 3: Databases and Trackers

| Source | Type | URL | Indicators | Update Frequency | Confidence |
|--------|------|-----|-----------|-----------------|-----------|
| UNCTAD Cyberlaw Tracker | Database | unctad.org | Data protection laws | Updated continuously | High |
| Data Protection Africa | Database | dataprotection.africa | Data protection law details | Updated continuously | High |
| UNESCO AI Strategy Observatory | Database | unesco.org/ethics-ai | AI strategy status | Updated | High |
| Carnegie Endowment AI Governance | Research | carnegieendowment.org | AI governance landscape | Updated | High |
| AI Policy Lab Africa | Database | aipolicy.africa | National AI strategies | Updated | High |
| Crunchbase | Database | crunchbase.com | Startup data | Real-time | Medium |
| AfriLabs | Network | afrilabs.com | Tech hubs (514 across 53 countries) | Annual | Medium |
| GitHub Innovation Graph | API | innovationgraph.github.com | Developer activity | Quarterly | Medium |
| Zindi | Platform | zindi.africa | AI competition participation | Real-time | Medium |
| WIPO IP Statistics | Database | wipo.int | Patent data | Annual | Medium |
| WHO Digital Health Atlas | Database | digitalhealthatlas.org | Health AI deployments | Updated | Medium |

### Tier 4: News and Verification Sources

| Source | Coverage | URL | Used For |
|--------|----------|-----|---------|
| Ecofin Agency | Continental | ecofinagency.com | Policy announcements, strategy launches |
| iAfrica | Continental | iafrica.com | Startup news, government AI initiatives |
| TechAfrica News | Continental | techafricanews.com | Strategy launches, ecosystem updates |
| TechCabal | Continental | techcabal.com | Startup ecosystem |
| Disrupt Africa | Continental | disruptafrica.com | Funding data, startup coverage |
| TogoFirst | Francophone West Africa | togofirst.com | Francophone policy updates |
| Morocco World News | North Africa | moroccoworldnews.com | Morocco AI initiatives |

---

## Verification and Quality Assurance

### Cross-referencing Protocol
Each data point is verified through the following process:
1. **Primary source check** — Is the data from an authoritative, machine-readable source (API, official database)?
2. **Secondary verification** — Can the data be independently confirmed from a second source?
3. **Recency check** — Is this the most current data available? Flag if >2 years old.
4. **Outlier detection** — Does the data point deviate significantly from regional peers? If so, investigate.
5. **Source bias check** — Is the source likely to over-represent or under-represent certain countries? (e.g., English-language sources may undercount Francophone AI activity)

### Known Biases and Mitigations
| Bias | Impact | Mitigation |
|------|--------|-----------|
| English-language source bias | Undercounting Francophone/Lusophone AI activity | Include French-language sources (TogoFirst, Ecofin), search in French |
| Big Four concentration | Overweighting Nigeria, Kenya, South Africa, Egypt | Log-transform count-based indicators to reduce outlier dominance |
| Urban bias | AI activity concentrated in capitals, data may not reflect rural reality | Note in country profiles where data represents capital city only |
| Reporting lag | Some data is 1-2 years old | Clearly label data year for each indicator |
| Survivorship bias | Only counting countries with visible AI activity | Explicitly search for evidence of AI activity in bottom 20 countries |

---

## Limitations & Transparency

1. **Data recency:** World Bank data is from 2023 (most recent available via API in 2026). Some indicators have a 1-2 year lag.
2. **Small island states:** Seychelles, Comoros, Cabo Verde, São Tomé have limited innovation ecosystem data. Scores for Pillars 4-5 are estimated.
3. **Conflict-affected states:** Somalia, South Sudan, Sudan, Libya have unreliable or outdated data. Scores carry lower confidence.
4. **Subjectivity in Pillar 5:** AI deployment indicators (use cases, sector adoption) involve qualitative assessment. Different assessors might score differently.
5. **Language bias:** Despite mitigation efforts, English-language sources likely undercount Francophone (21 countries) and Lusophone (6 countries) AI activity.
6. **Startup data concentration:** AI startup counts are most reliable for the Big Four (Nigeria, Kenya, South Africa, Egypt). For countries ranked 20-54, startup counts are estimates and should be treated as ranges.
7. **Equal weighting assumption:** All 5 pillars are weighted equally at 20%. This is a design choice — a country with excellent policy but no infrastructure scores the same as vice versa. Users should examine pillar-level scores for nuance.
8. **Quarterly cadence limitations:** Some data sources update only annually (World Bank, WIPO, UNESCO UIS). Quarterly scores may reflect policy/ecosystem changes faster than infrastructure/education changes.

### What This Index Does NOT Measure
- Quality or impact of individual AI deployments
- AI safety or risk preparedness
- Private sector AI adoption at company level
- AI public opinion or societal readiness
- Diaspora AI talent contributing from abroad

All methodology decisions are published openly. We actively welcome peer review, data corrections, and feedback at info@7squareinc.com.

---

## Changelog

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | March 2026 | Initial methodology |
| 1.1 | 15 March 2026 | Added data confidence levels, verification protocol, bias mitigations, detailed scoring rubrics, expanded source registry, changelog. Updated AI strategy categories to include "Validated" and "Institutional" statuses. Added "What this index does NOT measure" section. |

---

*Africa AI Atlas — by 7Square Inc.*
*"Converting Africa's Challenges into Opportunities"*
