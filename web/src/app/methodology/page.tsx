import { PILLAR_LABELS, PILLAR_COLORS } from "@/lib/data";

export default function MethodologyPage() {
  const pillars = [
    {
      key: "policy_governance",
      indicators: ["National AI Strategy", "Data Protection Law", "AI Ethics Framework", "Government AI Body", "Open Data Portal"],
      sources: "UNESCO, UNCTAD, Carnegie Endowment, AI Policy Lab Africa, Data Protection Africa, UN country offices, government portals, Ecofin Agency, iAfrica",
    },
    {
      key: "infrastructure_data",
      indicators: ["Internet Penetration (%)", "Mobile Broadband / 100", "Fixed Broadband / 100", "Electricity Access (%)", "Cloud Infrastructure", "International Bandwidth"],
      sources: "World Bank API, ITU, GSMA Intelligence, Cloudscene",
    },
    {
      key: "talent_education",
      indicators: ["Tertiary Enrollment Rate", "STEM Graduates (%)", "AI/ML University Programs", "Developer Activity", "AI Research Publications", "Digital Literacy"],
      sources: "UNESCO UIS, World Bank, GitHub Innovation Graph, Scopus",
    },
    {
      key: "innovation_ecosystem",
      indicators: ["AI Startups", "VC/AI Funding (USD)", "AI Research Labs", "Tech Hubs & Incubators", "AI Patents Filed", "AI Hackathons"],
      sources: "Partech, Crunchbase, AfriLabs, WIPO, Zindi",
    },
    {
      key: "deployment_impact",
      indicators: ["Documented AI Use Cases", "Public Sector AI", "Financial Services AI", "Agriculture AI", "Health AI", "Sector Diversity"],
      sources: "UN E-Gov Survey, WHO Digital Health Atlas, news sources",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-white mb-2">Methodology</h1>
      <p className="text-[var(--muted)] mb-8">
        How we score and rank all 54 African countries. Our methodology is published openly —
        we welcome peer review and feedback.
      </p>

      {/* Overview */}
      <section className="bg-[var(--card)] border border-[var(--card-border)] rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold text-white mb-3">Scoring Framework</h2>
        <div className="text-sm text-[var(--muted)] space-y-2">
          <p>The Africa AI Atlas scores each country across <strong className="text-white">5 equally-weighted pillars</strong> (20% each), yielding a composite score of 0–100.</p>
          <p>Each pillar contains 5–6 indicators sourced from international databases and primary research. Continuous indicators are normalized using min-max scaling across all 54 countries. Categorical indicators use a predetermined 0/5/10 scale.</p>
        </div>

        <div className="mt-4 grid grid-cols-5 gap-2">
          {Object.entries(PILLAR_LABELS).map(([key, label]) => (
            <div key={key} className="text-center">
              <div
                className="h-2 rounded-full mb-2"
                style={{ background: PILLAR_COLORS[key] }}
              />
              <div className="text-xs text-[var(--muted)]">{label}</div>
              <div className="text-sm font-bold text-white">20%</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pillars Detail */}
      {pillars.map((p) => (
        <section key={p.key} className="bg-[var(--card)] border border-[var(--card-border)] rounded-xl p-6 mb-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-3 h-3 rounded-full" style={{ background: PILLAR_COLORS[p.key] }} />
            <h3 className="text-lg font-bold text-white">{PILLAR_LABELS[p.key]}</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <div className="text-xs text-[var(--muted)] uppercase mb-2">Indicators</div>
              <ul className="space-y-1">
                {p.indicators.map((ind) => (
                  <li key={ind} className="text-sm text-white flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[var(--accent)]" />
                    {ind}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-xs text-[var(--muted)] uppercase mb-2">Data Sources</div>
              <p className="text-sm text-[var(--muted)]">{p.sources}</p>
            </div>
          </div>
        </section>
      ))}

      {/* Data Confidence */}
      <section className="bg-[var(--card)] border border-[var(--card-border)] rounded-xl p-6 mb-4">
        <h2 className="text-lg font-bold text-white mb-3">Data Confidence Levels</h2>
        <div className="space-y-2">
          {[
            { level: "High", color: "#10b981", desc: "Verified from authoritative API or 2+ independent sources (World Bank, Oxford Insights, UNCTAD)" },
            { level: "Medium", color: "#f59e0b", desc: "From credible single source, not independently verified (data center counts, startup estimates for mid-tier countries)" },
            { level: "Estimated", color: "#ef4444", desc: "Based on qualitative assessment or proxy indicators (AI deployment scores for countries ranked 30-54)" },
          ].map((item) => (
            <div key={item.level} className="flex items-start gap-3 text-sm">
              <div className="w-3 h-3 rounded-full shrink-0 mt-1" style={{ background: item.color }} />
              <div>
                <span className="text-white font-medium">{item.level}:</span>{" "}
                <span className="text-[var(--muted)]">{item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Verification Protocol */}
      <section className="bg-[var(--card)] border border-[var(--card-border)] rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold text-white mb-3">Verification Protocol</h2>
        <div className="text-sm text-[var(--muted)] space-y-2">
          <p>Each data point goes through a 5-step verification process:</p>
          <ol className="list-decimal list-inside space-y-1 ml-2">
            <li><strong className="text-white">Primary source check</strong> — Is the data from an authoritative, machine-readable source?</li>
            <li><strong className="text-white">Secondary verification</strong> — Can the data be independently confirmed from a second source?</li>
            <li><strong className="text-white">Recency check</strong> — Is this the most current data available? Flag if &gt;2 years old.</li>
            <li><strong className="text-white">Outlier detection</strong> — Does the value deviate significantly from regional peers?</li>
            <li><strong className="text-white">Source bias check</strong> — Might the source over/under-represent certain countries?</li>
          </ol>
          <p className="mt-3">
            Data collection uses automated API pulls (World Bank), structured web scraping of government portals and
            UN websites, authoritative report analysis (Partech, Oxford Insights, AfriLabs), and primary verification
            against news sources.
          </p>
        </div>
      </section>

      {/* Scoring Rules */}
      <section className="bg-[var(--card)] border border-[var(--card-border)] rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold text-white mb-3">Scoring Rules</h2>
        <div className="space-y-3 text-sm text-[var(--muted)]">
          <div>
            <strong className="text-white">Composite Score:</strong>{" "}
            (P1 × 0.20) + (P2 × 0.20) + (P3 × 0.20) + (P4 × 0.20) + (P5 × 0.20)
          </div>
          <div>
            <strong className="text-white">Missing Data:</strong>{" "}
            Countries must have data for at least 3 of 5 pillars to be ranked. Missing indicators within a pillar are calculated from available data only.
          </div>
          <div>
            <strong className="text-white">Tiebreaking:</strong>{" "}
            Tied scores resolved by higher Innovation & Ecosystem pillar score, then alphabetical.
          </div>
          <div>
            <strong className="text-white">Update Cadence:</strong>{" "}
            Quarterly. Each snapshot is immutable — scores are not retroactively adjusted.
          </div>
        </div>
      </section>

      {/* Score Categories */}
      <section className="bg-[var(--card)] border border-[var(--card-border)] rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold text-white mb-3">Score Categories</h2>
        <div className="space-y-2">
          {[
            { label: "Advanced", range: "60–100", color: "#059669", desc: "Strong AI ecosystem with active deployments" },
            { label: "Developing", range: "40–59", color: "#2563eb", desc: "Emerging framework with growing capabilities" },
            { label: "Emerging", range: "25–39", color: "#d97706", desc: "Early AI activity, foundational gaps" },
            { label: "Early Stage", range: "15–24", color: "#ea580c", desc: "Limited AI infrastructure and policy" },
            { label: "Nascent", range: "0–14", color: "#dc2626", desc: "Minimal AI readiness across all pillars" },
          ].map((cat) => (
            <div key={cat.label} className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-sm shrink-0" style={{ background: cat.color }} />
              <span className="text-white font-medium w-24">{cat.label}</span>
              <span className="text-[var(--muted)] w-16">{cat.range}</span>
              <span className="text-[var(--muted)] text-sm">{cat.desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Limitations */}
      <section className="bg-[var(--card)] border border-[var(--card-border)] rounded-xl p-6">
        <h2 className="text-lg font-bold text-white mb-3">Limitations & Transparency</h2>
        <ul className="space-y-2 text-sm text-[var(--muted)]">
          <li>1. Data recency: Some World Bank indicators lag by 1–2 years.</li>
          <li>2. Small island states (Seychelles, Comoros, Cabo Verde) may have limited innovation data.</li>
          <li>3. Conflict-affected states (Somalia, South Sudan, Sudan) may have unreliable data.</li>
          <li>4. Some indicators involve qualitative assessment (AI use cases, deployment breadth).</li>
          <li>5. English-language bias may undercount Francophone and Lusophone AI activity.</li>
        </ul>
        <p className="text-sm text-[var(--muted)] mt-4">
          We welcome feedback and peer review at{" "}
          <a href="mailto:info@7squareinc.com" className="text-[var(--accent)] hover:underline">
            info@7squareinc.com
          </a>
        </p>
      </section>
    </div>
  );
}
