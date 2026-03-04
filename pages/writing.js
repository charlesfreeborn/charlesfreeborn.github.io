// pages/writing.js
import { useState } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

// ─── All published writing, ordered by prestige / recency ───────────────────
const PIECES = [
  // ── Protocol Labs / IPFS (flagship credential) ──
  {
    title: 'Understanding the Fundamentals of IPFS',
    url: 'https://blog.ipfs.tech/2021-11-03-understanding-fundamentals-of-ipfs/',
    publication: 'IPFS Blog',
    pubUrl: 'https://blog.ipfs.tech',
    year: '2021',
    description:
      'A foundational explainer of the InterPlanetary File System — how content addressing, the DHT, and Merkle DAGs work together to build a decentralized web.',
    tags: ['Explainer', 'Web3'],
    featured: true,
  },

  // ── LogRocket ──
  {
    title: 'Articles on LogRocket Blog',
    url: 'https://blog.logrocket.com/author/charlesfreeborn/',
    publication: 'LogRocket Blog',
    pubUrl: 'https://blog.logrocket.com',
    year: '2020–2022',
    description:
      'A series of tutorials and explainers on front-end development — covering CSS fundamentals, JavaScript patterns, and modern web tooling for a developer audience.',
    tags: ['Tutorial', 'Guide'],
    featured: true,
  },

  // ── Web3 Warri / Medium — Rust series ──
  {
    title: 'Why Rust — An Introduction for New Developers',
    url: 'https://medium.com/web3-warri/why-rust-an-introduction-for-new-developers-c2c9bce27096',
    publication: 'Web3 Warri',
    pubUrl: 'https://medium.com/web3-warri',
    year: '2023',
    description:
      'Explains why Rust is gaining traction in systems programming and Web3, making the case for new developers to learn the language.',
    tags: ['Explainer', 'Web3'],
    featured: false,
  },
  {
    title: 'Getting Started with Rust — A Deep Dive into Tooling, Compilation and Cargo',
    url: 'https://medium.com/web3-warri/getting-started-with-rust-a-deep-dive-into-tooling-compilation-and-cargo-dbebfa6e4e62',
    publication: 'Web3 Warri',
    pubUrl: 'https://medium.com/web3-warri',
    year: '2023',
    description:
      'A hands-on guide to setting up a Rust development environment, understanding the compilation model, and using Cargo to manage projects and dependencies.',
    tags: ['Tutorial', 'Guide'],
    featured: false,
  },
  {
    title: 'Understanding let, mut, and Shadowing in Rust',
    url: 'https://medium.com/web3-warri/understanding-let-mut-and-shadowing-in-rust-3a7477139e1d',
    publication: 'Web3 Warri',
    pubUrl: 'https://medium.com/web3-warri',
    year: '2023',
    description:
      'Breaks down Rust variable binding — immutability by default, the mut keyword, and shadowing — with clear examples for developers coming from other languages.',
    tags: ['Tutorial'],
    featured: false,
  },

  // ── Personal site ──
  {
    title: 'Documenting a Sound File API for a Hypothetical Dating Site',
    url: 'https://freeborncharles.com/documenting-api/',
    publication: 'freeborncharles.com',
    pubUrl: 'https://freeborncharles.com',
    year: '2022',
    description:
      'A worked example of professional API documentation — endpoint reference, request/response examples, error codes, and writing principles for a developer audience.',
    tags: ['API Docs'],
    featured: false,
  },
  {
    title: 'A High Level Overview of Web 3.0',
    url: 'https://freeborncharles.com/what-is-web3/',
    publication: 'freeborncharles.com',
    pubUrl: 'https://freeborncharles.com',
    year: '2022',
    description:
      'Traces the arc from Web1 to Web3 — covering decentralization, digital ownership, smart contracts, and the honest tradeoffs of building on blockchains.',
    tags: ['Explainer', 'Web3'],
    featured: false,
  },
  {
    title: 'What is Blockchain? A Simplified Introduction',
    url: 'https://freeborncharles.com/what-is-blockchain/',
    publication: 'freeborncharles.com',
    pubUrl: 'https://freeborncharles.com',
    year: '2022',
    description:
      'Demystifies blockchain for non-technical readers — blocks, hashing, distributed consensus, and why trustlessness matters.',
    tags: ['Explainer', 'Web3'],
    featured: false,
  },
  {
    title: 'Understanding JavaScript Variables — var, let, and const',
    url: 'https://freeborncharles.com/javascript-variables/',
    publication: 'freeborncharles.com',
    pubUrl: 'https://freeborncharles.com',
    year: '2021',
    description:
      'Explains the differences between the three variable declaration keywords, focusing on scope, hoisting, and when to reach for each in modern JavaScript.',
    tags: ['Tutorial'],
    featured: false,
  },
  {
    title: 'What Does the Cascade Mean in CSS?',
    url: 'https://freeborncharles.com/css-cascade/',
    publication: 'freeborncharles.com',
    pubUrl: 'https://freeborncharles.com',
    year: '2021',
    description:
      'A plain-language breakdown of the CSS cascade algorithm — specificity, inheritance, and source order — with practical debugging guidance.',
    tags: ['Explainer'],
    featured: false,
  },
  {
    title: 'Understanding Basic CSS Selectors',
    url: 'https://freeborncharles.com/css-basic-selectors/',
    publication: 'freeborncharles.com',
    pubUrl: 'https://freeborncharles.com',
    year: '2020',
    description:
      'Introduces the core CSS selector types — type, class, ID, and selector lists — with examples for developers just learning to style the web.',
    tags: ['Tutorial'],
    featured: false,
  },
  {
    title: 'What is CSS? A Simplified Introduction',
    url: 'https://freeborncharles.com/what-is-css/',
    publication: 'freeborncharles.com',
    pubUrl: 'https://freeborncharles.com',
    year: '2020',
    description:
      'A first-principles introduction to CSS — what it does, how it connects to HTML, and the anatomy of a CSS rule.',
    tags: ['Explainer'],
    featured: false,
  },
  {
    title: 'What is GraphQL? — A High Level Overview',
    url: 'https://freeborncharles.com/graphql/',
    publication: 'freeborncharles.com',
    pubUrl: 'https://freeborncharles.com',
    year: '2020',
    description:
      'Compares GraphQL to REST, explains core concepts like schemas, queries, and mutations, and outlines when GraphQL is the right choice for an API.',
    tags: ['Explainer'],
    featured: false,
  },
];

// ─── All unique tags ─────────────────────────────────────────────────────────
const ALL_TAGS = ['All', 'Explainer', 'Tutorial', 'API Docs', 'Guide', 'Web3'];

// ─── Tag badge colours ───────────────────────────────────────────────────────
const TAG_COLORS = {
  'Explainer': { bg: '#eff6ff', color: '#2563eb', border: '#bfdbfe' },
  'Tutorial':  { bg: '#f0fdf4', color: '#16a34a', border: '#bbf7d0' },
  'API Docs':  { bg: '#fdf4ff', color: '#9333ea', border: '#e9d5ff' },
  'Guide':     { bg: '#fff7ed', color: '#ea580c', border: '#fed7aa' },
  'Web3':      { bg: '#fefce8', color: '#ca8a04', border: '#fde68a' },
};

const TAG_COLORS_DARK = {
  'Explainer': { bg: '#1e3a5f', color: '#93c5fd', border: '#1d4ed8' },
  'Tutorial':  { bg: '#14532d', color: '#86efac', border: '#166534' },
  'API Docs':  { bg: '#3b1a4f', color: '#d8b4fe', border: '#7e22ce' },
  'Guide':     { bg: '#431407', color: '#fdba74', border: '#c2410c' },
  'Web3':      { bg: '#422006', color: '#fcd34d', border: '#b45309' },
};

function TagBadge({ tag }) {
  const style = TAG_COLORS[tag] || { bg: '#f3f4f6', color: '#6b7280', border: '#e5e7eb' };
  return (
    <span
      className="writing-tag"
      style={{
        '--tag-bg-c':     style.bg,
        '--tag-text-c':   style.color,
        '--tag-border-c': style.border,
      }}
    >
      {tag}
    </span>
  );
}

export default function Writing() {
  const [activeTag, setActiveTag] = useState('All');

  const filtered = PIECES.filter(
    p => activeTag === 'All' || p.tags.includes(activeTag)
  );

  const featured  = filtered.filter(p => p.featured);
  const rest      = filtered.filter(p => !p.featured);

  return (
    <Layout
      title="Writing & Portfolio"
      description="All published technical writing by Charles Freeborn — Web3, JavaScript, CSS, Rust, API documentation, and more."
    >
      {/* ── Page header ── */}
      <div className="writing-header">
        <h1 className="writing-title">Writing &amp; Portfolio</h1>
        <p className="writing-subtitle">
          Technical articles, tutorials, and documentation published across the web.
          Front-end development, Web3 infrastructure, Rust, and API writing.
        </p>
      </div>

      {/* ── Filter tabs ── */}
      <nav className="categories" aria-label="Filter by type">
        {ALL_TAGS.map(tag => (
          <button
            key={tag}
            className={`cat-link${activeTag === tag ? ' active' : ''}`}
            onClick={() => setActiveTag(tag)}
            aria-pressed={activeTag === tag}
          >
            {tag}
          </button>
        ))}
      </nav>

      {/* ── Featured pieces ── */}
      {featured.length > 0 && (
        <section className="writing-section" aria-label="Featured">
          <h2 className="writing-section-label">Featured</h2>
          <ul className="writing-list">
            {featured.map(piece => (
              <WritingItem key={piece.url} piece={piece} />
            ))}
          </ul>
        </section>
      )}

      {/* ── All other pieces ── */}
      {rest.length > 0 && (
        <section
          className="writing-section"
          aria-label="All writing"
          style={{ marginTop: featured.length > 0 ? '2.5rem' : 0 }}
        >
          {featured.length > 0 && (
            <h2 className="writing-section-label">All Writing</h2>
          )}
          <ul className="writing-list">
            {rest.map(piece => (
              <WritingItem key={piece.url} piece={piece} />
            ))}
          </ul>
        </section>
      )}

      {filtered.length === 0 && (
        <p style={{ color: 'var(--muted)', fontStyle: 'italic', marginTop: '2rem' }}>
          No pieces found for this filter.
        </p>
      )}

      {/* ── Hire me callout ── */}
      <div className="writing-cta">
        <p>
          Available for technical writing, developer documentation, and content strategy in the
          Web3 and developer tooling space.{' '}
          <a href="mailto:charlesfreeborn@gmail.com">Get in touch →</a>
        </p>
      </div>
    </Layout>
  );
}

// ─── Individual writing item ─────────────────────────────────────────────────
function WritingItem({ piece }) {
  return (
    <li className={`writing-item${piece.featured ? ' writing-item--featured' : ''}`}>
      <div className="writing-item-meta">
        <a
          href={piece.pubUrl}
          className="writing-pub"
          target="_blank"
          rel="noopener noreferrer"
        >
          {piece.publication}
        </a>
        <span className="writing-year">{piece.year}</span>
      </div>

      <a
        href={piece.url}
        className="writing-item-title"
        target="_blank"
        rel="noopener noreferrer"
      >
        {piece.title}
        <span className="writing-ext-icon" aria-hidden="true">↗</span>
      </a>

      <p className="writing-item-desc">{piece.description}</p>

      <div className="writing-item-tags">
        {piece.tags.map(tag => (
          <TagBadge key={tag} tag={tag} />
        ))}
      </div>
    </li>
  );
}
