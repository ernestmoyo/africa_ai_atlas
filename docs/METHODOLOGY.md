# Africa AI Atlas — Methodology

**Version:** 1.0 | **Date:** March 2026 | **Author:** Ernest Moyo, 7Square Inc.

---

## Overview

The Africa AI Atlas scores and ranks all 54 African countries across 5 pillars of AI readiness, maturity, and adoption. Each pillar is equally weighted at 20% of the composite score. Countries are scored on a 0–100 scale per pillar, yielding a composite score of 0–100.

The index is updated quarterly. Each quarterly snapshot is immutable — scores are not retroactively adjusted.

---

## Pillar 1: Policy & Governance (20%)

Measures a country's regulatory readiness and strategic commitment to AI.

| Indicator | Source | Scoring |
|-----------|--------|---------|
| **National AI Strategy** | UNESCO AI Strategy Observatory, government portals | 0 = None, 5 = In development, 10 = Published |
| **Data Protection Law** | UNCTAD, DLA Piper Global Data Protection Laws | 0 = None, 5 = Draft/partial, 10 = Comprehensive enacted |
| **AI Ethics Framework** | UNESCO, national government publications | 0 = None, 5 = Guidelines, 10 = Binding framework |
| **Government AI Taskforce/Ministry** | Government portals, news reports | 0 = None, 5 = Advisory body, 10 = Dedicated ministry/agency |
| **Open Government Data Portal** | data.gov portals, Open Data Barometer | 0 = None, 5 = Limited, 10 = Comprehensive |

**Pillar Score** = Sum of indicators normalized to 0–100

---

## Pillar 2: Infrastructure & Data (20%)

Measures the foundational digital and data infrastructure available.

| Indicator | Source | Scoring |
|-----------|--------|---------|
| **Internet Penetration (%)** | ITU, World Bank (IT.NET.USER.ZS) | Continuous 0–100 |
| **Mobile Broadband Subscriptions (per 100)** | ITU, GSMA Intelligence | Continuous, normalized |
| **Fixed Broadband Subscriptions (per 100)** | World Bank (IT.NET.BBND.P2) | Continuous, normalized |
| **Electricity Access (%)** | World Bank (EG.ELC.ACCS.ZS) | Continuous 0–100 |
| **Cloud Infrastructure** | Cloudscene, data center trackers | 0 = None, 5 = 1-2 facilities, 10 = Multiple/hyperscale |
| **International Bandwidth (bits/s per user)** | ITU | Continuous, normalized |

**Pillar Score** = Weighted average of indicators, normalized to 0–100

---

## Pillar 3: Talent & Education (20%)

Measures the human capital pipeline for AI development and adoption.

| Indicator | Source | Scoring |
|-----------|--------|---------|
| **STEM Graduates (% of tertiary)** | UNESCO UIS, World Bank (SE.TER.GRAD.SC.ZS) | Continuous, normalized |
| **Tertiary Enrollment Rate** | World Bank (SE.TER.ENRR) | Continuous, normalized |
| **AI/ML University Programs** | University websites, AI4D network | Count, normalized |
| **GitHub Developer Activity** | GitHub Innovation Graph, Stack Overflow | Developer density, normalized |
| **AI Research Publications** | Scopus, Google Scholar (country-level) | Count per capita, normalized |
| **Digital Literacy Rate** | ITU Digital Development Dashboard | Continuous, normalized |

**Pillar Score** = Weighted average of indicators, normalized to 0–100

---

## Pillar 4: Innovation & Ecosystem (20%)

Measures the vibrancy of the AI startup and research ecosystem.

| Indicator | Source | Scoring |
|-----------|--------|---------|
| **AI Startups** | Crunchbase, Tracxn, Briter Bridges | Count, normalized |
| **VC/AI Funding** | Partech Africa Report, Briter Bridges | USD amount, normalized |
| **AI Research Labs/Centers** | Institutional websites, AI4D | Count |
| **Tech Hubs & Incubators** | GSMA, AfriLabs, Briter Bridges | Count, normalized |
| **AI Patents Filed** | WIPO, national IP offices | Count, normalized |
| **AI Hackathons & Competitions** | Zindi, Kaggle, DeveloperWeek Africa | Count, normalized |

**Pillar Score** = Weighted average of indicators, normalized to 0–100

---

## Pillar 5: Deployment & Impact (20%)

Measures actual AI deployment and real-world impact.

| Indicator | Source | Scoring |
|-----------|--------|---------|
| **Documented AI Use Cases** | News, case studies, government reports | Count, diversity-weighted |
| **Public Sector AI Adoption** | Government digital services, e-gov index | 0–10 scale |
| **Financial Services AI** | Central bank reports, fintech trackers | 0–10 scale |
| **Agriculture AI Deployment** | FAO, CGIAR, agritech trackers | 0–10 scale |
| **Health AI Deployment** | WHO, Digital Health Atlas | 0–10 scale |
| **Sector Diversity of AI** | Cross-sector analysis | Count of sectors with active AI |

**Pillar Score** = Weighted average of indicators, normalized to 0–100

---

## Scoring Methodology

### Normalization
- Continuous indicators: Min-max normalization across all 54 countries → 0–100
- Categorical indicators: Predetermined scale (0/5/10) → normalized to 0–100
- Each pillar score is the average of its normalized indicators

### Composite Score
```
Composite = (P1 × 0.20) + (P2 × 0.20) + (P3 × 0.20) + (P4 × 0.20) + (P5 × 0.20)
```

### Missing Data Handling
- Countries must have data for at least 3 of 5 pillars to receive a composite ranking
- Countries with 1–2 pillars of data are listed as "Insufficient Data"
- Missing indicators within a pillar: score is calculated from available indicators only
- All missing data is transparently flagged in country profiles

### Tiebreaking
- Tied composite scores: higher Innovation & Ecosystem pillar score wins
- Still tied: alphabetical order

### Regional Classification
- North Africa: Algeria, Egypt, Libya, Morocco, Tunisia
- West Africa: Benin, Burkina Faso, Cabo Verde, Côte d'Ivoire, Gambia, Ghana, Guinea, Guinea-Bissau, Liberia, Mali, Mauritania, Niger, Nigeria, Senegal, Sierra Leone, Togo
- Central Africa: Cameroon, Central African Republic, Chad, Congo (Republic), Congo (DR), Equatorial Guinea, Gabon, São Tomé and Príncipe
- East Africa: Burundi, Comoros, Djibouti, Eritrea, Ethiopia, Kenya, Madagascar, Mauritius, Rwanda, Seychelles, Somalia, South Sudan, Sudan, Tanzania, Uganda
- Southern Africa: Angola, Botswana, Eswatini, Lesotho, Malawi, Mozambique, Namibia, South Africa, Zambia, Zimbabwe

---

## Data Sources Registry

| Source | Type | URL | Update Frequency |
|--------|------|-----|-----------------|
| World Bank Open Data | API | data.worldbank.org | Annual |
| ITU Digital Development Dashboard | Web/API | datahub.itu.int | Annual |
| UNESCO UIS | API | data.uis.unesco.org | Annual |
| GSMA Intelligence | Report | gsmaintelligence.com | Quarterly |
| Crunchbase | Database | crunchbase.com | Real-time |
| WIPO IP Statistics | Database | wipo.int | Annual |
| Oxford Insights Gov AI Readiness | Report | oxfordinsights.com | Annual |
| UNCTAD Data Protection Laws | Database | unctad.org | Updated |
| UNESCO AI Strategy Observatory | Database | unesco.org | Updated |
| GitHub Innovation Graph | API | innovationgraph.github.com | Quarterly |
| Partech Africa Tech Report | Report | partechpartners.com | Annual |
| Briter Bridges | Database | briterbridges.com | Quarterly |
| AfriLabs | Database | afrilabs.com | Annual |
| Zindi | Platform | zindi.africa | Real-time |
| UN E-Government Survey | Report | publicadministration.un.org | Biennial |
| WHO Digital Health Atlas | Database | digitalhealthatlas.org | Updated |

---

## Limitations & Transparency

1. **Data recency:** Some indicators are 1–2 years lagged (e.g., World Bank data for 2024 may be the most recent available in 2026)
2. **Small island states:** Seychelles, Comoros, Cabo Verde, São Tomé may have limited data
3. **Conflict-affected states:** Somalia, South Sudan, Libya, Sudan may have outdated or unreliable data
4. **Subjectivity:** Some indicators (AI use cases, sector deployment) involve qualitative assessment
5. **Language bias:** English-language sources may undercount Francophone and Lusophone AI activity

All methodology decisions are published openly. We welcome peer review and feedback at info@7squareinc.com.

---

*Africa AI Atlas — by 7Square Inc.*
*"Converting Africa's Challenges into Opportunities"*
