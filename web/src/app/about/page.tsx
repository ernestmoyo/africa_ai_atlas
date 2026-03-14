export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-white mb-2">About the Africa AI Atlas</h1>
      <p className="text-[var(--muted)] mb-8">
        The first Africa-owned, interactive, comprehensive AI index for the continent.
      </p>

      <section className="bg-[var(--card)] border border-[var(--card-border)] rounded-xl p-6 mb-6">
        <h2 className="text-lg font-bold text-white mb-3">Why This Exists</h2>
        <div className="text-sm text-[var(--muted)] space-y-3">
          <p>
            Global AI indices treat Africa as an afterthought. The Oxford Insights Government AI Readiness Index,
            Stanford HAI AI Index, and others provide valuable data but are not designed for — or owned by — Africa.
          </p>
          <p>
            The Africa AI Atlas fills this gap. We rank all 54 African countries across 5 pillars of AI readiness
            on a quarterly basis, using real data from international databases, primary research, and on-the-ground knowledge.
          </p>
          <p>
            Our goal is to provide governments, investors, development partners, and researchers with the
            most comprehensive, up-to-date, and accessible picture of AI across the continent.
          </p>
        </div>
      </section>

      <section className="bg-[var(--card)] border border-[var(--card-border)] rounded-xl p-6 mb-6">
        <h2 className="text-lg font-bold text-white mb-3">About 7Square Inc.</h2>
        <div className="text-sm text-[var(--muted)] space-y-3">
          <p>
            <strong className="text-white">7Square Inc.</strong> is an advisory and research firm focused on
            technology, AI, and digital transformation in Africa. We help governments, enterprises, and development
            organisations understand and harness AI for impact.
          </p>
          <p>Our tagline: <em className="text-white">&quot;Converting Africa&apos;s Challenges into Opportunities.&quot;</em></p>
        </div>
      </section>

      <section className="bg-[var(--card)] border border-[var(--card-border)] rounded-xl p-6 mb-6">
        <h2 className="text-lg font-bold text-white mb-3">How to Cite</h2>
        <div className="bg-[var(--background)] rounded-lg p-4 text-sm text-white font-mono">
          7Square Inc. (2026). <em>Africa AI Atlas Q1 2026</em>. Available at: atlas.7squareinc.com
        </div>
      </section>

      <section className="bg-[var(--card)] border border-[var(--card-border)] rounded-xl p-6 mb-6">
        <h2 className="text-lg font-bold text-white mb-3">Contact</h2>
        <div className="text-sm text-[var(--muted)] space-y-2">
          <p>
            Email:{" "}
            <a href="mailto:info@7squareinc.com" className="text-[var(--accent)] hover:underline">
              info@7squareinc.com
            </a>
          </p>
          <p>
            Website:{" "}
            <a href="https://7squareinc.com" className="text-[var(--accent)] hover:underline">
              7squareinc.com
            </a>
          </p>
          <p>We welcome methodology feedback, data corrections, partnership inquiries, and media requests.</p>
        </div>
      </section>

      <section className="bg-[var(--card)] border border-[var(--card-border)] rounded-xl p-6">
        <h2 className="text-lg font-bold text-white mb-3">Upcoming</h2>
        <ul className="text-sm text-[var(--muted)] space-y-2">
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--accent-green)]" />
            <span><strong className="text-white">Q2 2026:</strong> Second quarterly update with trend data</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
            <span><strong className="text-white">Q3 2026:</strong> AI Readiness Assessment tool integration</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--accent-purple)]" />
            <span><strong className="text-white">Q4 2026:</strong> API access for researchers and media</span>
          </li>
        </ul>
      </section>
    </div>
  );
}
