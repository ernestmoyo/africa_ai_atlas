// Africa AI Atlas — Data Layer
// All 54 African countries scored and ranked for Q1 2026

export interface CountryData {
  name: string;
  iso3: string;
  iso2: string;
  region: string;
  pillar_scores: {
    policy_governance: number;
    infrastructure_data: number;
    talent_education: number;
    innovation_ecosystem: number;
    deployment_impact: number;
  };
  composite_score: number;
  rank: number;
  raw_data: {
    internet_penetration: number | null;
    electricity_access: number | null;
    fixed_broadband_per100: number | null;
    tertiary_enrollment: number | null;
    ai_strategy: string;
    data_protection_law: string;
    data_centers: number;
    oxford_ai_readiness_score: number | null;
  };
}

export const PILLAR_LABELS: Record<string, string> = {
  policy_governance: "Policy & Governance",
  infrastructure_data: "Infrastructure & Data",
  talent_education: "Talent & Education",
  innovation_ecosystem: "Innovation & Ecosystem",
  deployment_impact: "Deployment & Impact",
};

export const PILLAR_COLORS: Record<string, string> = {
  policy_governance: "#2563eb",
  infrastructure_data: "#059669",
  talent_education: "#d97706",
  innovation_ecosystem: "#7c3aed",
  deployment_impact: "#dc2626",
};

export const REGIONS = [
  "All Regions",
  "North Africa",
  "West Africa",
  "East Africa",
  "Central Africa",
  "Southern Africa",
];

const ISO2_MAP: Record<string, string> = {
  DZA: "DZ", AGO: "AO", BEN: "BJ", BWA: "BW", BFA: "BF", BDI: "BI",
  CPV: "CV", CMR: "CM", CAF: "CF", TCD: "TD", COM: "KM", COG: "CG",
  COD: "CD", CIV: "CI", DJI: "DJ", EGY: "EG", GNQ: "GQ", ERI: "ER",
  SWZ: "SZ", ETH: "ET", GAB: "GA", GMB: "GM", GHA: "GH", GIN: "GN",
  GNB: "GW", KEN: "KE", LSO: "LS", LBR: "LR", LBY: "LY", MDG: "MG",
  MWI: "MW", MLI: "ML", MRT: "MR", MUS: "MU", MAR: "MA", MOZ: "MZ",
  NAM: "NA", NER: "NE", NGA: "NG", RWA: "RW", STP: "ST", SEN: "SN",
  SYC: "SC", SLE: "SL", SOM: "SO", ZAF: "ZA", SSD: "SS", SDN: "SD",
  TZA: "TZ", TGO: "TG", TUN: "TN", UGA: "UG", ZMB: "ZM", ZWE: "ZW",
};

export const countries: CountryData[] = [
  { name: "Egypt", iso3: "EGY", iso2: "EG", region: "North Africa", pillar_scores: { policy_governance: 90, infrastructure_data: 68, talent_education: 62, innovation_ecosystem: 65, deployment_impact: 60 }, composite_score: 69.0, rank: 1, raw_data: { internet_penetration: 72.69, electricity_access: 100.0, fixed_broadband_per100: 10.86, tertiary_enrollment: 37.58, ai_strategy: "Yes", data_protection_law: "Yes", data_centers: 14, oxford_ai_readiness_score: 57.50 } },
  { name: "Kenya", iso3: "KEN", iso2: "KE", region: "East Africa", pillar_scores: { policy_governance: 78, infrastructure_data: 45, talent_education: 55, innovation_ecosystem: 72, deployment_impact: 68 }, composite_score: 63.6, rank: 2, raw_data: { internet_penetration: 35.00, electricity_access: 76.2, fixed_broadband_per100: 2.39, tertiary_enrollment: 10.42, ai_strategy: "Yes", data_protection_law: "Yes", data_centers: 18, oxford_ai_readiness_score: 53.00 } },
  { name: "South Africa", iso3: "ZAF", iso2: "ZA", region: "Southern Africa", pillar_scores: { policy_governance: 58, infrastructure_data: 62, talent_education: 58, innovation_ecosystem: 68, deployment_impact: 58 }, composite_score: 60.8, rank: 3, raw_data: { internet_penetration: 75.66, electricity_access: 87.7, fixed_broadband_per100: 3.41, tertiary_enrollment: 23.49, ai_strategy: "Yes", data_protection_law: "Yes", data_centers: 49, oxford_ai_readiness_score: 50.68 } },
  { name: "Nigeria", iso3: "NGA", iso2: "NG", region: "West Africa", pillar_scores: { policy_governance: 72, infrastructure_data: 35, talent_education: 50, innovation_ecosystem: 75, deployment_impact: 62 }, composite_score: 58.8, rank: 4, raw_data: { internet_penetration: 39.21, electricity_access: 61.2, fixed_broadband_per100: 0.05, tertiary_enrollment: null, ai_strategy: "Yes (Sep 2025)", data_protection_law: "Yes", data_centers: 16, oxford_ai_readiness_score: 51.85 } },
  { name: "Mauritius", iso3: "MUS", iso2: "MU", region: "East Africa", pillar_scores: { policy_governance: 65, infrastructure_data: 78, talent_education: 52, innovation_ecosystem: 35, deployment_impact: 40 }, composite_score: 54.0, rank: 5, raw_data: { internet_penetration: 79.50, electricity_access: 100.0, fixed_broadband_per100: 26.91, tertiary_enrollment: 45.78, ai_strategy: "Yes", data_protection_law: "Yes", data_centers: 3, oxford_ai_readiness_score: 53.27 } },
  { name: "Morocco", iso3: "MAR", iso2: "MA", region: "North Africa", pillar_scores: { policy_governance: 55, infrastructure_data: 72, talent_education: 55, innovation_ecosystem: 42, deployment_impact: 38 }, composite_score: 52.4, rank: 6, raw_data: { internet_penetration: 91.00, electricity_access: 100.0, fixed_broadband_per100: 7.02, tertiary_enrollment: 48.18, ai_strategy: "Yes", data_protection_law: "Yes", data_centers: 8, oxford_ai_readiness_score: 40.93 } },
  { name: "Rwanda", iso3: "RWA", iso2: "RW", region: "East Africa", pillar_scores: { policy_governance: 75, infrastructure_data: 35, talent_education: 38, innovation_ecosystem: 42, deployment_impact: 45 }, composite_score: 47.0, rank: 7, raw_data: { internet_penetration: 34.20, electricity_access: 63.9, fixed_broadband_per100: 0.45, tertiary_enrollment: 9.41, ai_strategy: "Yes", data_protection_law: "Yes", data_centers: 3, oxford_ai_readiness_score: 52.60 } },
  { name: "Tunisia", iso3: "TUN", iso2: "TN", region: "North Africa", pillar_scores: { policy_governance: 45, infrastructure_data: 68, talent_education: 52, innovation_ecosystem: 38, deployment_impact: 32 }, composite_score: 47.0, rank: 7, raw_data: { internet_penetration: 72.35, electricity_access: 100.0, fixed_broadband_per100: 14.14, tertiary_enrollment: 38.12, ai_strategy: "In development", data_protection_law: "Yes", data_centers: 3, oxford_ai_readiness_score: 40.82 } },
  { name: "Ghana", iso3: "GHA", iso2: "GH", region: "West Africa", pillar_scores: { policy_governance: 62, infrastructure_data: 52, talent_education: 40, innovation_ecosystem: 42, deployment_impact: 38 }, composite_score: 46.8, rank: 9, raw_data: { internet_penetration: 69.94, electricity_access: 89.5, fixed_broadband_per100: 0.56, tertiary_enrollment: 22.10, ai_strategy: "Yes", data_protection_law: "Yes", data_centers: 7, oxford_ai_readiness_score: 48.80 } },
  { name: "Algeria", iso3: "DZA", iso2: "DZ", region: "North Africa", pillar_scores: { policy_governance: 52, infrastructure_data: 68, talent_education: 52, innovation_ecosystem: 28, deployment_impact: 30 }, composite_score: 46.0, rank: 10, raw_data: { internet_penetration: 76.91, electricity_access: 100.0, fixed_broadband_per100: 12.01, tertiary_enrollment: 54.43, ai_strategy: "Yes", data_protection_law: "Yes", data_centers: 5, oxford_ai_readiness_score: 42.05 } },
  { name: "Senegal", iso3: "SEN", iso2: "SN", region: "West Africa", pillar_scores: { policy_governance: 62, infrastructure_data: 45, talent_education: 35, innovation_ecosystem: 35, deployment_impact: 32 }, composite_score: 41.8, rank: 11, raw_data: { internet_penetration: 60.61, electricity_access: 74.2, fixed_broadband_per100: 1.97, tertiary_enrollment: 15.33, ai_strategy: "Yes", data_protection_law: "Yes", data_centers: 7, oxford_ai_readiness_score: null } },
  { name: "Ethiopia", iso3: "ETH", iso2: "ET", region: "East Africa", pillar_scores: { policy_governance: 55, infrastructure_data: 25, talent_education: 28, innovation_ecosystem: 25, deployment_impact: 28 }, composite_score: 32.2, rank: 12, raw_data: { internet_penetration: 30.00, electricity_access: 55.4, fixed_broadband_per100: 0.45, tertiary_enrollment: null, ai_strategy: "Yes", data_protection_law: "Yes", data_centers: 5, oxford_ai_readiness_score: 44.00 } },
  { name: "Botswana", iso3: "BWA", iso2: "BW", region: "Southern Africa", pillar_scores: { policy_governance: 38, infrastructure_data: 58, talent_education: 32, innovation_ecosystem: 15, deployment_impact: 20 }, composite_score: 32.6, rank: 13, raw_data: { internet_penetration: 81.36, electricity_access: 76.0, fixed_broadband_per100: 3.41, tertiary_enrollment: 21.41, ai_strategy: "In development", data_protection_law: "Yes", data_centers: 2, oxford_ai_readiness_score: 37.10 } },
  { name: "Côte d'Ivoire", iso3: "CIV", iso2: "CI", region: "West Africa", pillar_scores: { policy_governance: 40, infrastructure_data: 38, talent_education: 22, innovation_ecosystem: 22, deployment_impact: 22 }, composite_score: 28.8, rank: 14, raw_data: { internet_penetration: 40.65, electricity_access: 72.4, fixed_broadband_per100: 1.36, tertiary_enrollment: 11.57, ai_strategy: "Yes", data_protection_law: "Yes", data_centers: 5, oxford_ai_readiness_score: null } },
  { name: "Benin", iso3: "BEN", iso2: "BJ", region: "West Africa", pillar_scores: { policy_governance: 52, infrastructure_data: 30, talent_education: 20, innovation_ecosystem: 18, deployment_impact: 22 }, composite_score: 28.4, rank: 15, raw_data: { internet_penetration: 32.21, electricity_access: 57.0, fixed_broadband_per100: 0.17, tertiary_enrollment: 10.24, ai_strategy: "Yes", data_protection_law: "Yes", data_centers: 1, oxford_ai_readiness_score: 41.71 } },
  { name: "Namibia", iso3: "NAM", iso2: "NA", region: "Southern Africa", pillar_scores: { policy_governance: 35, infrastructure_data: 45, talent_education: 30, innovation_ecosystem: 15, deployment_impact: 15 }, composite_score: 28.0, rank: 16, raw_data: { internet_penetration: 64.41, electricity_access: 56.7, fixed_broadband_per100: 3.52, tertiary_enrollment: 26.11, ai_strategy: "Yes", data_protection_law: "No", data_centers: 2, oxford_ai_readiness_score: null } },
  { name: "Seychelles", iso3: "SYC", iso2: "SC", region: "East Africa", pillar_scores: { policy_governance: 22, infrastructure_data: 75, talent_education: 25, innovation_ecosystem: 5, deployment_impact: 10 }, composite_score: 27.4, rank: 17, raw_data: { internet_penetration: 87.40, electricity_access: 100.0, fixed_broadband_per100: 30.77, tertiary_enrollment: 14.53, ai_strategy: "No", data_protection_law: "No", data_centers: 0, oxford_ai_readiness_score: null } },
  { name: "Tanzania", iso3: "TZA", iso2: "TZ", region: "East Africa", pillar_scores: { policy_governance: 35, infrastructure_data: 28, talent_education: 22, innovation_ecosystem: 25, deployment_impact: 25 }, composite_score: 27.0, rank: 18, raw_data: { internet_penetration: 29.06, electricity_access: 48.3, fixed_broadband_per100: 2.50, tertiary_enrollment: 4.02, ai_strategy: "Draft", data_protection_law: "Yes", data_centers: 3, oxford_ai_readiness_score: null } },
  { name: "Cameroon", iso3: "CMR", iso2: "CM", region: "Central Africa", pillar_scores: { policy_governance: 35, infrastructure_data: 38, talent_education: 25, innovation_ecosystem: 18, deployment_impact: 18 }, composite_score: 26.8, rank: 19, raw_data: { internet_penetration: 41.91, electricity_access: 72.0, fixed_broadband_per100: 2.13, tertiary_enrollment: 16.66, ai_strategy: "Yes", data_protection_law: "Yes", data_centers: 2, oxford_ai_readiness_score: null } },
  { name: "Cabo Verde", iso3: "CPV", iso2: "CV", region: "West Africa", pillar_scores: { policy_governance: 28, infrastructure_data: 62, talent_education: 22, innovation_ecosystem: 8, deployment_impact: 12 }, composite_score: 26.4, rank: 20, raw_data: { internet_penetration: 73.54, electricity_access: 98.6, fixed_broadband_per100: 7.23, tertiary_enrollment: null, ai_strategy: "No", data_protection_law: "No", data_centers: 0, oxford_ai_readiness_score: null } },
  { name: "Uganda", iso3: "UGA", iso2: "UG", region: "East Africa", pillar_scores: { policy_governance: 32, infrastructure_data: 22, talent_education: 25, innovation_ecosystem: 28, deployment_impact: 25 }, composite_score: 26.4, rank: 20, raw_data: { internet_penetration: 15.25, electricity_access: 51.5, fixed_broadband_per100: 0.09, tertiary_enrollment: null, ai_strategy: "Draft", data_protection_law: "Yes", data_centers: 2, oxford_ai_readiness_score: null } },
  { name: "Zambia", iso3: "ZMB", iso2: "ZM", region: "Southern Africa", pillar_scores: { policy_governance: 45, infrastructure_data: 28, talent_education: 20, innovation_ecosystem: 18, deployment_impact: 18 }, composite_score: 25.8, rank: 22, raw_data: { internet_penetration: 33.00, electricity_access: 51.1, fixed_broadband_per100: 0.68, tertiary_enrollment: null, ai_strategy: "Yes", data_protection_law: "Yes", data_centers: 2, oxford_ai_readiness_score: null } },
  { name: "Libya", iso3: "LBY", iso2: "LY", region: "North Africa", pillar_scores: { policy_governance: 25, infrastructure_data: 55, talent_education: 28, innovation_ecosystem: 8, deployment_impact: 10 }, composite_score: 25.2, rank: 23, raw_data: { internet_penetration: 88.50, electricity_access: 73.2, fixed_broadband_per100: 4.52, tertiary_enrollment: null, ai_strategy: "Yes", data_protection_law: "No", data_centers: 0, oxford_ai_readiness_score: null } },
  { name: "Gabon", iso3: "GAB", iso2: "GA", region: "Central Africa", pillar_scores: { policy_governance: 15, infrastructure_data: 55, talent_education: 18, innovation_ecosystem: 8, deployment_impact: 10 }, composite_score: 21.2, rank: 24, raw_data: { internet_penetration: 71.93, electricity_access: 94.1, fixed_broadband_per100: 3.97, tertiary_enrollment: null, ai_strategy: "No", data_protection_law: "Partial", data_centers: 1, oxford_ai_readiness_score: null } },
  { name: "Togo", iso3: "TGO", iso2: "TG", region: "West Africa", pillar_scores: { policy_governance: 38, infrastructure_data: 30, talent_education: 15, innovation_ecosystem: 12, deployment_impact: 15 }, composite_score: 22.0, rank: 24, raw_data: { internet_penetration: 37.02, electricity_access: 59.2, fixed_broadband_per100: 1.23, tertiary_enrollment: null, ai_strategy: "Draft", data_protection_law: "Yes", data_centers: 1, oxford_ai_readiness_score: null } },
  { name: "Angola", iso3: "AGO", iso2: "AO", region: "Southern Africa", pillar_scores: { policy_governance: 28, infrastructure_data: 32, talent_education: 18, innovation_ecosystem: 12, deployment_impact: 15 }, composite_score: 21.0, rank: 25, raw_data: { internet_penetration: 44.76, electricity_access: 51.1, fixed_broadband_per100: 0.37, tertiary_enrollment: 9.95, ai_strategy: "In development", data_protection_law: "Yes", data_centers: 8, oxford_ai_readiness_score: 27.09 } },
  { name: "Zimbabwe", iso3: "ZWE", iso2: "ZW", region: "Southern Africa", pillar_scores: { policy_governance: 42, infrastructure_data: 32, talent_education: 20, innovation_ecosystem: 15, deployment_impact: 18 }, composite_score: 25.4, rank: 22, raw_data: { internet_penetration: 38.43, electricity_access: 62.0, fixed_broadband_per100: 1.57, tertiary_enrollment: 7.75, ai_strategy: "Yes (March 2026)", data_protection_law: "Yes", data_centers: 1, oxford_ai_readiness_score: null } },
  { name: "Eswatini", iso3: "SWZ", iso2: "SZ", region: "Southern Africa", pillar_scores: { policy_governance: 12, infrastructure_data: 50, talent_education: 15, innovation_ecosystem: 5, deployment_impact: 8 }, composite_score: 18.0, rank: 28, raw_data: { internet_penetration: 57.62, electricity_access: 86.4, fixed_broadband_per100: 2.76, tertiary_enrollment: null, ai_strategy: "No", data_protection_law: "No", data_centers: 0, oxford_ai_readiness_score: null } },
  { name: "Gambia", iso3: "GMB", iso2: "GM", region: "West Africa", pillar_scores: { policy_governance: 20, infrastructure_data: 35, talent_education: 15, innovation_ecosystem: 8, deployment_impact: 10 }, composite_score: 17.6, rank: 29, raw_data: { internet_penetration: 45.91, electricity_access: 66.9, fixed_broadband_per100: 0.22, tertiary_enrollment: 13.48, ai_strategy: "No", data_protection_law: "Yes", data_centers: 0, oxford_ai_readiness_score: null } },
  { name: "Mauritania", iso3: "MRT", iso2: "MR", region: "West Africa", pillar_scores: { policy_governance: 30, infrastructure_data: 28, talent_education: 12, innovation_ecosystem: 8, deployment_impact: 8 }, composite_score: 17.2, rank: 30, raw_data: { internet_penetration: 37.38, electricity_access: 50.3, fixed_broadband_per100: 0.59, tertiary_enrollment: null, ai_strategy: "Yes", data_protection_law: "Partial", data_centers: 0, oxford_ai_readiness_score: null } },
  { name: "Djibouti", iso3: "DJI", iso2: "DJ", region: "East Africa", pillar_scores: { policy_governance: 25, infrastructure_data: 45, talent_education: 12, innovation_ecosystem: 5, deployment_impact: 8 }, composite_score: 19.0, rank: 29, raw_data: { internet_penetration: 65.02, electricity_access: 65.2, fixed_broadband_per100: 1.47, tertiary_enrollment: null, ai_strategy: "Draft", data_protection_law: "Yes", data_centers: 2, oxford_ai_readiness_score: null } },
  { name: "Lesotho", iso3: "LSO", iso2: "LS", region: "Southern Africa", pillar_scores: { policy_governance: 30, infrastructure_data: 32, talent_education: 12, innovation_ecosystem: 5, deployment_impact: 5 }, composite_score: 16.8, rank: 31, raw_data: { internet_penetration: 47.99, electricity_access: 57.3, fixed_broadband_per100: 0.38, tertiary_enrollment: null, ai_strategy: "Yes (Jan 2025)", data_protection_law: "Partial", data_centers: 0, oxford_ai_readiness_score: null } },
  { name: "Mali", iso3: "MLI", iso2: "ML", region: "West Africa", pillar_scores: { policy_governance: 18, infrastructure_data: 28, talent_education: 12, innovation_ecosystem: 8, deployment_impact: 8 }, composite_score: 14.8, rank: 33, raw_data: { internet_penetration: 35.09, electricity_access: 54.5, fixed_broadband_per100: 0.77, tertiary_enrollment: null, ai_strategy: "No", data_protection_law: "Yes", data_centers: 0, oxford_ai_readiness_score: null } },
  { name: "Congo (Republic)", iso3: "COG", iso2: "CG", region: "Central Africa", pillar_scores: { policy_governance: 12, infrastructure_data: 30, talent_education: 15, innovation_ecosystem: 8, deployment_impact: 8 }, composite_score: 14.6, rank: 34, raw_data: { internet_penetration: 38.38, electricity_access: 51.3, fixed_broadband_per100: 1.27, tertiary_enrollment: 10.38, ai_strategy: "No", data_protection_law: "No", data_centers: 1, oxford_ai_readiness_score: null } },
  { name: "Burkina Faso", iso3: "BFA", iso2: "BF", region: "West Africa", pillar_scores: { policy_governance: 30, infrastructure_data: 15, talent_education: 14, innovation_ecosystem: 10, deployment_impact: 10 }, composite_score: 15.8, rank: 37, raw_data: { internet_penetration: 17.02, electricity_access: 21.7, fixed_broadband_per100: 0.07, tertiary_enrollment: 10.04, ai_strategy: "In development", data_protection_law: "Yes", data_centers: 0, oxford_ai_readiness_score: 29.45 } },
  { name: "São Tomé and Príncipe", iso3: "STP", iso2: "ST", region: "Central Africa", pillar_scores: { policy_governance: 8, infrastructure_data: 48, talent_education: 8, innovation_ecosystem: 2, deployment_impact: 3 }, composite_score: 13.8, rank: 36, raw_data: { internet_penetration: 61.46, electricity_access: 81.3, fixed_broadband_per100: 2.50, tertiary_enrollment: null, ai_strategy: "No", data_protection_law: "No", data_centers: 0, oxford_ai_readiness_score: null } },
  { name: "Equatorial Guinea", iso3: "GNQ", iso2: "GQ", region: "Central Africa", pillar_scores: { policy_governance: 8, infrastructure_data: 42, talent_education: 10, innovation_ecosystem: 3, deployment_impact: 5 }, composite_score: 13.6, rank: 37, raw_data: { internet_penetration: 60.37, electricity_access: 66.9, fixed_broadband_per100: 0.10, tertiary_enrollment: null, ai_strategy: "No", data_protection_law: "Partial", data_centers: 0, oxford_ai_readiness_score: null } },
  { name: "Comoros", iso3: "COM", iso2: "KM", region: "East Africa", pillar_scores: { policy_governance: 8, infrastructure_data: 40, talent_education: 10, innovation_ecosystem: 3, deployment_impact: 5 }, composite_score: 13.2, rank: 38, raw_data: { internet_penetration: 35.67, electricity_access: 89.8, fixed_broadband_per100: 0.39, tertiary_enrollment: null, ai_strategy: "No", data_protection_law: "No", data_centers: 0, oxford_ai_readiness_score: null } },
  { name: "Sudan", iso3: "SDN", iso2: "SD", region: "East Africa", pillar_scores: { policy_governance: 15, infrastructure_data: 28, talent_education: 15, innovation_ecosystem: 8, deployment_impact: 5 }, composite_score: 14.2, rank: 38, raw_data: { internet_penetration: null, electricity_access: 66.0, fixed_broadband_per100: 0.06, tertiary_enrollment: null, ai_strategy: "Institutional (Nov 2025)", data_protection_law: "No", data_centers: 0, oxford_ai_readiness_score: null } },
  { name: "Guinea", iso3: "GIN", iso2: "GN", region: "West Africa", pillar_scores: { policy_governance: 35, infrastructure_data: 22, talent_education: 10, innovation_ecosystem: 5, deployment_impact: 8 }, composite_score: 16.0, rank: 36, raw_data: { internet_penetration: 26.50, electricity_access: 51.1, fixed_broadband_per100: 0.01, tertiary_enrollment: null, ai_strategy: "Yes (Dec 2025)", data_protection_law: "Yes", data_centers: 0, oxford_ai_readiness_score: null } },
  { name: "Malawi", iso3: "MWI", iso2: "MW", region: "Southern Africa", pillar_scores: { policy_governance: 28, infrastructure_data: 12, talent_education: 10, innovation_ecosystem: 8, deployment_impact: 10 }, composite_score: 13.6, rank: 41, raw_data: { internet_penetration: 17.99, electricity_access: 15.6, fixed_broadband_per100: 0.08, tertiary_enrollment: 2.71, ai_strategy: "Draft (Feb 2026)", data_protection_law: "Yes", data_centers: 0, oxford_ai_readiness_score: null } },
  { name: "Madagascar", iso3: "MDG", iso2: "MG", region: "East Africa", pillar_scores: { policy_governance: 10, infrastructure_data: 18, talent_education: 12, innovation_ecosystem: 8, deployment_impact: 8 }, composite_score: 11.2, rank: 42, raw_data: { internet_penetration: 20.37, electricity_access: 39.4, fixed_broadband_per100: 0.12, tertiary_enrollment: 6.15, ai_strategy: "No", data_protection_law: "No", data_centers: 1, oxford_ai_readiness_score: null } },
  { name: "Congo (DR)", iso3: "COD", iso2: "CD", region: "Central Africa", pillar_scores: { policy_governance: 32, infrastructure_data: 16, talent_education: 12, innovation_ecosystem: 12, deployment_impact: 10 }, composite_score: 16.4, rank: 35, raw_data: { internet_penetration: 30.55, electricity_access: 22.1, fixed_broadband_per100: 0.02, tertiary_enrollment: 6.38, ai_strategy: "Yes (2025)", data_protection_law: "Partial", data_centers: 1, oxford_ai_readiness_score: null } },
  { name: "Mozambique", iso3: "MOZ", iso2: "MZ", region: "Southern Africa", pillar_scores: { policy_governance: 22, infrastructure_data: 18, talent_education: 10, innovation_ecosystem: 5, deployment_impact: 8 }, composite_score: 12.6, rank: 43, raw_data: { internet_penetration: 19.84, electricity_access: 36.0, fixed_broadband_per100: 0.20, tertiary_enrollment: null, ai_strategy: "In development", data_protection_law: "Partial", data_centers: 1, oxford_ai_readiness_score: null } },
  { name: "Sierra Leone", iso3: "SLE", iso2: "SL", region: "West Africa", pillar_scores: { policy_governance: 18, infrastructure_data: 18, talent_education: 10, innovation_ecosystem: 5, deployment_impact: 8 }, composite_score: 11.8, rank: 44, raw_data: { internet_penetration: 20.64, electricity_access: 35.5, fixed_broadband_per100: null, tertiary_enrollment: null, ai_strategy: "In development", data_protection_law: "No", data_centers: 0, oxford_ai_readiness_score: null } },
  { name: "Liberia", iso3: "LBR", iso2: "LR", region: "West Africa", pillar_scores: { policy_governance: 10, infrastructure_data: 18, talent_education: 8, innovation_ecosystem: 5, deployment_impact: 5 }, composite_score: 9.2, rank: 46, raw_data: { internet_penetration: 23.50, electricity_access: 32.5, fixed_broadband_per100: 0.27, tertiary_enrollment: null, ai_strategy: "No", data_protection_law: "No", data_centers: 0, oxford_ai_readiness_score: null } },
  { name: "Guinea-Bissau", iso3: "GNB", iso2: "GW", region: "West Africa", pillar_scores: { policy_governance: 8, infrastructure_data: 22, talent_education: 8, innovation_ecosystem: 3, deployment_impact: 3 }, composite_score: 8.8, rank: 47, raw_data: { internet_penetration: 32.47, electricity_access: 40.5, fixed_broadband_per100: 0.31, tertiary_enrollment: null, ai_strategy: "No", data_protection_law: "No", data_centers: 0, oxford_ai_readiness_score: null } },
  { name: "Eritrea", iso3: "ERI", iso2: "ER", region: "East Africa", pillar_scores: { policy_governance: 5, infrastructure_data: 22, talent_education: 8, innovation_ecosystem: 2, deployment_impact: 3 }, composite_score: 8.0, rank: 48, raw_data: { internet_penetration: 20.01, electricity_access: 54.4, fixed_broadband_per100: 0.17, tertiary_enrollment: null, ai_strategy: "No", data_protection_law: "No", data_centers: 0, oxford_ai_readiness_score: null } },
  { name: "Somalia", iso3: "SOM", iso2: "SO", region: "East Africa", pillar_scores: { policy_governance: 5, infrastructure_data: 20, talent_education: 5, innovation_ecosystem: 5, deployment_impact: 5 }, composite_score: 8.0, rank: 48, raw_data: { internet_penetration: 27.60, electricity_access: 50.3, fixed_broadband_per100: 0.72, tertiary_enrollment: null, ai_strategy: "No", data_protection_law: "No", data_centers: 1, oxford_ai_readiness_score: null } },
  { name: "Niger", iso3: "NER", iso2: "NE", region: "West Africa", pillar_scores: { policy_governance: 10, infrastructure_data: 12, talent_education: 8, innovation_ecosystem: 3, deployment_impact: 5 }, composite_score: 7.6, rank: 50, raw_data: { internet_penetration: 23.19, electricity_access: 20.1, fixed_broadband_per100: 0.11, tertiary_enrollment: null, ai_strategy: "No", data_protection_law: "Yes", data_centers: 0, oxford_ai_readiness_score: null } },
  { name: "Burundi", iso3: "BDI", iso2: "BI", region: "East Africa", pillar_scores: { policy_governance: 8, infrastructure_data: 8, talent_education: 8, innovation_ecosystem: 5, deployment_impact: 5 }, composite_score: 6.8, rank: 51, raw_data: { internet_penetration: 11.08, electricity_access: 11.6, fixed_broadband_per100: 0.02, tertiary_enrollment: 6.03, ai_strategy: "No", data_protection_law: "No", data_centers: 0, oxford_ai_readiness_score: null } },
  { name: "Chad", iso3: "TCD", iso2: "TD", region: "Central Africa", pillar_scores: { policy_governance: 8, infrastructure_data: 8, talent_education: 8, innovation_ecosystem: 3, deployment_impact: 5 }, composite_score: 6.4, rank: 52, raw_data: { internet_penetration: 13.18, electricity_access: 12.0, fixed_broadband_per100: 0.00, tertiary_enrollment: 4.40, ai_strategy: "No", data_protection_law: "Partial", data_centers: 0, oxford_ai_readiness_score: null } },
  { name: "Central African Republic", iso3: "CAF", iso2: "CF", region: "Central Africa", pillar_scores: { policy_governance: 5, infrastructure_data: 6, talent_education: 5, innovation_ecosystem: 2, deployment_impact: 3 }, composite_score: 4.2, rank: 53, raw_data: { internet_penetration: 11.00, electricity_access: 17.6, fixed_broadband_per100: 0.02, tertiary_enrollment: null, ai_strategy: "No", data_protection_law: "No", data_centers: 0, oxford_ai_readiness_score: null } },
  { name: "South Sudan", iso3: "SSD", iso2: "SS", region: "East Africa", pillar_scores: { policy_governance: 3, infrastructure_data: 5, talent_education: 3, innovation_ecosystem: 2, deployment_impact: 2 }, composite_score: 3.0, rank: 54, raw_data: { internet_penetration: null, electricity_access: 5.4, fixed_broadband_per100: 0.00, tertiary_enrollment: null, ai_strategy: "No", data_protection_law: "No", data_centers: 0, oxford_ai_readiness_score: null } },
];

export function getCountryByIso3(iso3: string): CountryData | undefined {
  return countries.find((c) => c.iso3 === iso3);
}

export function getCountryBySlug(slug: string): CountryData | undefined {
  return countries.find(
    (c) => c.name.toLowerCase().replace(/[^a-z0-9]/g, "-").replace(/-+/g, "-") === slug
  );
}

export function countryToSlug(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]/g, "-").replace(/-+/g, "-");
}

export function getScoreColor(score: number): string {
  if (score >= 60) return "#059669";
  if (score >= 40) return "#2563eb";
  if (score >= 25) return "#d97706";
  if (score >= 15) return "#ea580c";
  return "#dc2626";
}

export function getScoreLabel(score: number): string {
  if (score >= 60) return "Advanced";
  if (score >= 40) return "Developing";
  if (score >= 25) return "Emerging";
  if (score >= 15) return "Early Stage";
  return "Nascent";
}

export function getRegionStats() {
  const regionMap = new Map<string, { total: number; count: number; countries: CountryData[] }>();
  for (const c of countries) {
    const entry = regionMap.get(c.region) || { total: 0, count: 0, countries: [] };
    entry.total += c.composite_score;
    entry.count += 1;
    entry.countries.push(c);
    regionMap.set(c.region, entry);
  }
  return Array.from(regionMap.entries()).map(([region, data]) => ({
    region,
    average: Math.round((data.total / data.count) * 10) / 10,
    count: data.count,
    top: data.countries.sort((a, b) => b.composite_score - a.composite_score)[0],
  })).sort((a, b) => b.average - a.average);
}
