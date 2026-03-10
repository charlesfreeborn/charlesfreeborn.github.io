// pages/work.js
import Layout from '../components/Layout';

// ── Data structures — populate these with your content ──

const CATEGORIES = [
  {
    id: 'protocol-documentation',
    label: '01',
    title: 'Protocol Documentation',
    mandate: 'Can you read a whitepaper and produce developer-grade documentation from it?',
    description:
      'Technical documentation that explains protocol mechanisms with enough precision that a developer could implement against them. Not conceptual overviews — precise, actionable documentation of how systems actually work.',
    items: [
      // {
      //   title: 'Your piece title here',
      //   publication: 'IPFS Blog',
      //   url: 'https://...',
      //   date: '2024',
      //   annotation: 'Three-line annotation: what it documents, who it is for, what technical depth it demonstrates.',
      //   tags: ['IPFS', 'Content Addressing', 'Protocol Labs'],
      // },
    ],
  },
  {
    id: 'developer-tutorials',
    label: '02',
    title: 'Developer Tutorials & Guides',
    mandate: 'Can you take a complex technical process and make it executable for a developer?',
    description:
      'Step-by-step guides that take a developer from zero to working implementation. Published at recognised developer education platforms with real readership and editorial standards.',
    items: [
      // {
      //   title: 'Your piece title here',
      //   publication: 'LogRocket',
      //   url: 'https://...',
      //   date: '2023',
      //   annotation: 'Three-line annotation: what problem it solves, who the target developer is, what technical process it makes executable.',
      //   tags: ['JavaScript', 'React', 'Tutorial'],
      // },
    ],
  },
  {
    id: 'research-analysis',
    label: '03',
    title: 'Protocol Research & Analysis',
    mandate: 'Do you think like a researcher or just a describer?',
    description:
      'Analytical writing that takes a real protocol design question, examines it across multiple systems, and arrives at a defensible original conclusion. This is the category that separates technical writers from protocol researchers.',
    items: [
      // {
      //   title: 'Your piece title here',
      //   publication: 'Mirror.xyz',
      //   url: 'https://...',
      //   date: '2026',
      //   annotation: 'Three-line annotation: the research question, which protocols are compared, what the original conclusion is.',
      //   tags: ['Distributed Systems', 'Consensus', 'Cross-chain'],
      // },
    ],
  },
  {
    id: 'ecosystem-contributions',
    label: '04',
    title: 'Ecosystem Contributions',
    mandate: 'Are you embedded in the space or writing about it from the outside?',
    description:
      'Three years of ground-level protocol ecosystem work with documented outcomes. Not community management — a field research programme that produced measurable developer growth, mainnet deployments, and infrastructure in emerging markets.',
    items: [
      // {
      //   title: 'Your piece or contribution title here',
      //   publication: 'Arbitrum DAO Forum',
      //   url: 'https://...',
      //   date: '2025',
      //   annotation: 'Three-line annotation: what the contribution argued, what outcome it produced, what it demonstrates about your protocol understanding.',
      //   tags: ['Arbitrum', 'DAO', 'Ecosystem'],
      // },
    ],
  },
];

// ── Sub-components ──

function CategoryLabel({ label }) {
  return <span className="work-cat-label">{label}</span>;
}

function EmptyState({ categoryId }) {
  const messages = {
    'protocol-documentation': 'Protocol documentation pieces coming soon — IPFS Blog and new research pieces.',
    'developer-tutorials': 'Tutorial pieces coming soon — LogRocket, freeCodeCamp, and new guides.',
    'research-analysis': 'Research pieces coming soon — starting with the Lamport / longest chain analysis.',
    'ecosystem-contributions': 'Web3 Warri case study and Arbitrum forum contributions coming soon.',
  };
  return (
    <div className="work-empty">
      <p>{messages[categoryId] || 'Pieces coming soon.'}</p>
    </div>
  );
}

function WorkItem({ item }) {
  return (
    <li className="work-item">
      <div className="work-item-pub-row">
        <span className="work-item-pub">{item.publication}</span>
        {item.date && <span className="work-item-date">{item.date}</span>}
      </div>
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="work-item-title"
      >
        {item.title}
      </a>
      {item.annotation && (
        <p className="work-item-annotation">{item.annotation}</p>
      )}
      {item.tags && item.tags.length > 0 && (
        <div className="work-item-tags">
          {item.tags.map(tag => (
            <span key={tag} className="work-item-tag">{tag}</span>
          ))}
        </div>
      )}
    </li>
  );
}

function CategorySection({ category }) {
  return (
    <section className="work-category" id={category.id}>
      <div className="work-category-header">
        <div className="work-category-meta">
          <CategoryLabel label={category.label} />
          <h2 className="work-category-title">{category.title}</h2>
        </div>
        <p className="work-category-mandate">
          <em>Answers: {category.mandate}</em>
        </p>
        <p className="work-category-desc">{category.description}</p>
      </div>

      {category.items.length === 0 ? (
        <EmptyState categoryId={category.id} />
      ) : (
        <ul className="work-list">
          {category.items.map((item, i) => (
            <WorkItem key={i} item={item} />
          ))}
        </ul>
      )}
    </section>
  );
}

// ── Page ──

export default function Work() {
  return (
    <Layout
      title="Work"
      description="A curated dossier of protocol documentation, developer tutorials, research analysis, and ecosystem contributions by Charles Freeborn."
    >
      {/* ── Page Header ── */}
      <div className="work-page-header">
        <div className="work-page-header-inner">
          <p className="work-page-eyebrow">Portfolio</p>
          <h1 className="work-page-title">The Work</h1>
          <p className="work-page-intro">
            A curated dossier of evidence organised by what it proves.
            Four categories. Each one answers a specific question a hiring
            manager asks before they meet you.
          </p>

          {/* ── Jump nav ── */}
          <nav className="work-jumpnav" aria-label="Jump to section">
            {CATEGORIES.map(cat => (
              <a key={cat.id} href={`#${cat.id}`} className="work-jumpnav-link">
                <span className="work-jumpnav-num">{cat.label}</span>
                <span className="work-jumpnav-name">{cat.title}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* ── Availability Banner ── */}
      <div className="work-availability">
        <div className="work-availability-inner">
          <span className="work-availability-dot" aria-hidden="true" />
          <p className="work-availability-text">
            Available for technical writing contracts, developer documentation,
            and ecosystem research roles.{' '}
            <a href="mailto:charles.eteure@gmail.com">
              charles.eteure@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* ── Categories ── */}
      <div className="work-body">
        {CATEGORIES.map(cat => (
          <CategorySection key={cat.id} category={cat} />
        ))}
      </div>

      {/* ── Credentials Strip ── */}
      <div className="work-credentials">
        <div className="work-credentials-inner">
          <p className="work-credentials-label">Background</p>
          <div className="work-credentials-grid">
            <div className="work-credential">
              <span className="work-credential-name">Protocol Labs</span>
              <span className="work-credential-role">Technical Content Strategist · IPFS & Filecoin</span>
            </div>
            <div className="work-credential">
              <span className="work-credential-name">Web3 Warri</span>
              <span className="work-credential-role">Founder · 1,128 developers · 9 mainnet projects · 3 Arbitrum grants</span>
            </div>
            <div className="work-credential">
              <span className="work-credential-name">Published</span>
              <span className="work-credential-role">IPFS Blog · LogRocket · freeCodeCamp</span>
            </div>
            <div className="work-credential">
              <span className="work-credential-name">Research</span>
              <span className="work-credential-role">Distributed systems · Rust · Blockchain infrastructure</span>
            </div>
          </div>
        </div>
      </div>

    </Layout>
  );
}
