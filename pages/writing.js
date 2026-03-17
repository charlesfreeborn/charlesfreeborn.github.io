// pages/writing.js
import { useState } from "react";
import Link from "next/link";
import Layout from "../components/Layout";

// ─── All published writing ───────────────────────────────────────────────────
// Add `date` in YYYY-MM-DD format when adding new pieces.
// The list auto-sorts newest first — no manual ordering needed.
const PIECES = [
  // ── Web3 Warri / Medium — Rust series ──
  {
    title: "Understanding let, mut, and Shadowing in Rust",
    url: "https://medium.com/web3-warri/understanding-let-mut-and-shadowing-in-rust-3a7477139e1d",
    publication: "Web3 Warri",
    pubUrl: "https://medium.com/web3-warri",
    date: "2026-02-26",
    description:
      "Breaks down Rust variable binding — immutability by default, the mut keyword, and shadowing — with clear examples for developers coming from other languages.",
    tags: ["Tutorial"],
    featured: false,
  },
  {
    title:
      "Getting Started with Rust — A Deep Dive into Tooling, Compilation and Cargo",
    url: "https://medium.com/web3-warri/getting-started-with-rust-a-deep-dive-into-tooling-compilation-and-cargo-dbebfa6e4e62",
    publication: "Web3 Warri",
    pubUrl: "https://medium.com/web3-warri",
    date: "2026-02-19",
    description:
      "A hands-on guide to setting up a Rust development environment, understanding the compilation model, and using Cargo to manage projects and dependencies.",
    tags: ["Tutorial", "Guide"],
    featured: false,
  },
  {
    title: "Why Rust — An Introduction for New Developers",
    url: "https://medium.com/web3-warri/why-rust-an-introduction-for-new-developers-c2c9bce27096",
    publication: "Web3 Warri",
    pubUrl: "https://medium.com/web3-warri",
    date: "2026-02-12",
    description:
      "Explains why Rust is gaining traction in systems programming and Web3, making the case for new developers to learn the language.",
    tags: ["Explainer", "Web3"],
    featured: false,
  },

  // ── Protocol Labs / IPFS ──
  {
    title: "Understanding the Fundamentals of IPFS",
    url: "https://blog.ipfs.tech/2021-11-03-understanding-fundamentals-of-ipfs/",
    publication: "IPFS Blog",
    pubUrl: "https://blog.ipfs.tech",
    date: "2021-11-03",
    description:
      "A foundational explainer of the InterPlanetary File System — how content addressing, the DHT, and Merkle DAGs work together to build a decentralized web.",
    tags: ["Explainer", "Web3"],
    featured: true,
  },

  // ── LogRocket ──
  {
    title: "Articles on LogRocket Blog",
    url: "https://blog.logrocket.com/author/charlesfreeborn/",
    publication: "LogRocket Blog",
    pubUrl: "https://blog.logrocket.com",
    date: "2022-12-01",
    description:
      "A series of tutorials and explainers on front-end development — covering CSS fundamentals, JavaScript patterns, and modern web tooling for a developer audience.",
    tags: ["Tutorial", "Guide"],
    featured: true,
  },

  // ── Personal site ──
  {
    title:
      "What Lamport's 1978 paper tells us about why Nakamoto chose the longest chain rule",
    url: "/posts/lamport-nakamoto",
    publication: "freeborncharles.com",
    pubUrl: "/",
    date: "2026-03-17",
    description:
      "A worked example of professional API documentation — endpoint reference, request/response examples, error codes, and writing principles for a developer audience.",
    tags: ["distributed-systems", "protocol-research"],
    featured: false,
  },

  {
    title: "Documenting a Sound File API for a Hypothetical Dating Site",
    url: "/posts/documenting-api",
    publication: "freeborncharles.com",
    pubUrl: "/",
    date: "2022-10-19",
    description:
      "A worked example of professional API documentation — endpoint reference, request/response examples, error codes, and writing principles for a developer audience.",
    tags: ["API Docs"],
    featured: false,
  },
  {
    title: "A High Level Overview of Web 3.0",
    url: "/posts/what-is-web3",
    publication: "freeborncharles.com",
    pubUrl: "/",
    date: "2022-08-04",
    description:
      "Traces the arc from Web1 to Web3 — covering decentralization, digital ownership, smart contracts, and the honest tradeoffs of building on blockchains.",
    tags: ["Explainer", "Web3"],
    featured: false,
  },
  {
    title: "What is Blockchain? A Simplified Introduction",
    url: "/posts/what-is-blockchain",
    publication: "freeborncharles.com",
    pubUrl: "/",
    date: "2022-06-02",
    description:
      "Demystifies blockchain for non-technical readers — blocks, hashing, distributed consensus, and why trustlessness matters.",
    tags: ["Explainer", "Web3"],
    featured: false,
  },
  {
    title: "Understanding JavaScript Variables — var, let, and const",
    url: "/posts/javascript-variables",
    publication: "freeborncharles.com",
    pubUrl: "/",
    date: "2021-06-01",
    description:
      "Explains the differences between the three variable declaration keywords, focusing on scope, hoisting, and when to reach for each in modern JavaScript.",
    tags: ["Tutorial"],
    featured: false,
  },
  {
    title: "What Does the Cascade Mean in CSS?",
    url: "/posts/css-cascade",
    publication: "freeborncharles.com",
    pubUrl: "/",
    date: "2021-03-01",
    description:
      "A plain-language breakdown of the CSS cascade algorithm — specificity, inheritance, and source order — with practical debugging guidance.",
    tags: ["Explainer"],
    featured: false,
  },
  {
    title: "Understanding Basic CSS Selectors",
    url: "/posts/css-basic-selectors",
    publication: "freeborncharles.com",
    pubUrl: "/",
    date: "2020-09-01",
    description:
      "Introduces the core CSS selector types — type, class, ID, and selector lists — with examples for developers just learning to style the web.",
    tags: ["Tutorial"],
    featured: false,
  },
  {
    title: "What is CSS? A Simplified Introduction",
    url: "/posts/what-is-css",
    publication: "freeborncharles.com",
    pubUrl: "/",
    date: "2020-06-01",
    description:
      "A first-principles introduction to CSS — what it does, how it connects to HTML, and the anatomy of a CSS rule.",
    tags: ["Explainer"],
    featured: false,
  },
  {
    title: "What is GraphQL? — A High Level Overview",
    url: "/posts/graphql",
    publication: "freeborncharles.com",
    pubUrl: "/",
    date: "2020-03-01",
    description:
      "Compares GraphQL to REST, explains core concepts like schemas, queries, and mutations, and outlines when GraphQL is the right choice for an API.",
    tags: ["Explainer"],
    featured: false,
  },
];

// ─── Auto-sort newest first ──────────────────────────────────────────────────
const SORTED_PIECES = [...PIECES].sort(
  (a, b) => new Date(b.date) - new Date(a.date)
);

// ─── Tags ────────────────────────────────────────────────────────────────────
const ALL_TAGS = [
  "All",
  "Explainer",
  "Tutorial",
  "API Docs",
  "Guide",
  "Web3",
  "Distributed Systems",
  "Protocol Research",
  "Rust",
  "Consensus",
  "Artificial Intelligence",
];

// ─── Tag badge colours ───────────────────────────────────────────────────────
const TAG_COLORS = {
  Explainer: { bg: "#eff6ff", color: "#2563eb", border: "#bfdbfe" },
  Tutorial: { bg: "#f0fdf4", color: "#16a34a", border: "#bbf7d0" },
  "API Docs": { bg: "#fdf4ff", color: "#9333ea", border: "#e9d5ff" },
  Guide: { bg: "#fff7ed", color: "#ea580c", border: "#fed7aa" },
  Web3: { bg: "#fefce8", color: "#ca8a04", border: "#fde68a" },
  "Distributed Systems": { bg: "#f0f9ff", color: "#0369a1", border: "#bae6fd" },
  "Protocol Research": { bg: "#fdf4ff", color: "#7e22ce", border: "#e9d5ff" },
  Rust: { bg: "#fff1f2", color: "#be123c", border: "#fecdd3" },
  Consensus: { bg: "#f0fdf4", color: "#15803d", border: "#bbf7d0" },
  "Artificial Intelligence": {
    bg: "#f0fdf4",
    color: "#15803d",
    border: "#bbf7d0",
  },
};

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
}

function TagBadge({ tag }) {
  const style = TAG_COLORS[tag] || {
    bg: "#f3f4f6",
    color: "#6b7280",
    border: "#e5e7eb",
  };
  return (
    <span
      className="writing-tag"
      style={{
        "--tag-bg-c": style.bg,
        "--tag-text-c": style.color,
        "--tag-border-c": style.border,
      }}
    >
      {tag}
    </span>
  );
}

// ─── Writing Item — handles internal vs external links automatically ─────────
function WritingItem({ piece }) {
  const isInternal = piece.url.startsWith("/");

  const titleLink = isInternal ? (
    <Link href={piece.url} className="writing-item-title">
      {piece.title}
      <span className="writing-ext-icon" aria-hidden="true">
        →
      </span>
    </Link>
  ) : (
    <a
      href={piece.url}
      className="writing-item-title"
      target="_blank"
      rel="noopener noreferrer"
    >
      {piece.title}
      <span className="writing-ext-icon" aria-hidden="true">
        ↗
      </span>
    </a>
  );

  const pubLink = isInternal ? (
    <Link href="/" className="writing-pub">
      {piece.publication}
    </Link>
  ) : (
    <a
      href={piece.pubUrl}
      className="writing-pub"
      target="_blank"
      rel="noopener noreferrer"
    >
      {piece.publication}
    </a>
  );

  return (
    <li
      className={`writing-item${
        piece.featured ? " writing-item--featured" : ""
      }`}
    >
      <div className="writing-item-meta">
        {pubLink}
        <span className="writing-year">{formatDate(piece.date)}</span>
      </div>
      {titleLink}
      <p className="writing-item-desc">{piece.description}</p>
      <div className="writing-item-tags">
        {piece.tags.map((tag) => (
          <TagBadge key={tag} tag={tag} />
        ))}
      </div>
    </li>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default function Writing() {
  const [activeTag, setActiveTag] = useState("All");

  const filtered = SORTED_PIECES.filter(
    (p) => activeTag === "All" || p.tags.includes(activeTag)
  );

  const featured = filtered.filter((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  return (
    <Layout
      title="Writing & Portfolio"
      description="All published technical writing by Charles Freeborn — Web3, JavaScript, CSS, Rust, API documentation, and more."
    >
      <div className="writing-header">
        <h1 className="writing-title">Writing &amp; Portfolio</h1>
        <p className="writing-subtitle">
          Technical articles, tutorials, and documentation published across the
          web. Front-end development, Web3 infrastructure, Rust, and API
          writing.
        </p>
      </div>

      <nav className="categories" aria-label="Filter by type">
        {ALL_TAGS.map((tag) => (
          <button
            key={tag}
            className={`cat-link${activeTag === tag ? " active" : ""}`}
            onClick={() => setActiveTag(tag)}
            aria-pressed={activeTag === tag}
          >
            {tag}
          </button>
        ))}
      </nav>

      {featured.length > 0 && (
        <section className="writing-section" aria-label="Featured">
          <h2 className="writing-section-label">Featured</h2>
          <ul className="writing-list">
            {featured.map((piece) => (
              <WritingItem key={piece.url} piece={piece} />
            ))}
          </ul>
        </section>
      )}

      {rest.length > 0 && (
        <section
          className="writing-section"
          aria-label="All writing"
          style={{ marginTop: featured.length > 0 ? "2.5rem" : 0 }}
        >
          {featured.length > 0 && (
            <h2 className="writing-section-label">All Writing</h2>
          )}
          <ul className="writing-list">
            {rest.map((piece) => (
              <WritingItem key={piece.url} piece={piece} />
            ))}
          </ul>
        </section>
      )}

      {filtered.length === 0 && (
        <p
          style={{
            color: "var(--muted)",
            fontStyle: "italic",
            marginTop: "2rem",
          }}
        >
          No pieces found for this filter.
        </p>
      )}

      <div className="writing-cta">
        <p>
          I am available for technical writing, protocol research, developer
          documentation, content strategy and ecosystem partnership roles. Reach
          me at charles.eteure@gmail.com{" "}
          <a href="mailto:charles.eteure@gmail.com">Get in touch →</a>
        </p>
      </div>
    </Layout>
  );
}
