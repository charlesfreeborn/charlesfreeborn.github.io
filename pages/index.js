// pages/index.js
import { useState } from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import { getSortedPostsData } from "../lib/posts";

const CATEGORIES = [
  { key: "all", label: "All" },
  { key: "distributed-systems", label: "Distributed Systems" },
  { key: "protocol-research", label: "Protocol Research" },
  { key: "javascript", label: "JavaScript" },
  { key: "css", label: "CSS" },
  { key: "web3", label: "Web3" },
  { key: "graphql", label: "GraphQL" },
  { key: "docs", label: "Docs & APIs" },
  { key: "personal", label: "Personal" },
];

function formatDate(dateStr) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return d
    .toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    })
    .replace(",", "");
}

export default function Home({ allPostsData }) {
  const [activecat, setActiveCat] = useState("all");

  const filtered = allPostsData.filter(
    (post) => activecat === "all" || post.category === activecat
  );

  return (
    <Layout>
      <p className="bio">
        Technical writer and protocol researcher studying distributed systems,
        blockchain infrastructure, and Rust - bridging protocol engineering and
        developer understanding. Founder{" "}
        <a
          href="https://web3warri.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          web3 Warri
        </a>{" "}
        and web3 Warri Creative Hub. Former Technical Content Strategist at
        Protocol Labs. Published at{" "}
        <a
          href="https://blog.logrocket.com/author/charlesfreeborn/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LogRocket
        </a>{" "}
        and{" "}
        <a
          href="https://www.freecodecamp.org/news/understanding-the-javascript-call-stack-861e41ae61d4/"
          target="_blank"
          rel="noopener noreferrer"
        >
          freeCodeCamp
        </a>
        . Follow me on{" "}
        <a
          href="https://twitter.com/charliecodes"
          target="_blank"
          rel="noopener noreferrer"
        >
          X (formerly Twitter)
        </a>
        {" · "}
      </p>

      <nav className="categories" aria-label="Filter by category">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.key}
            className={`cat-link${activecat === cat.key ? " active" : ""}`}
            onClick={() => setActiveCat(cat.key)}
            aria-pressed={activecat === cat.key}
          >
            {cat.label}
          </button>
        ))}
      </nav>

      <ul className="posts-list">
        {filtered.map((post) => (
          <li key={post.slug} className="post-item">
            <span className="post-date">{formatDate(post.date)}</span>
            <Link href={`/posts/${post.slug}`} className="post-title-link">
              {post.title}
            </Link>
            {post.excerpt && (
              <span className="post-excerpt">{post.excerpt}</span>
            )}
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return { props: { allPostsData } };
}
