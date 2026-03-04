// components/Layout.js
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Layout({ children, title, description }) {
  const [dark, setDark] = useState(false);

  // On mount: detect system preference or saved choice
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDark(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.setAttribute('data-theme', next ? 'dark' : '');
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  const pageTitle = title ? `${title} | Charles Freeborn` : "Charles Freeborn's Website";
  const pageDesc  = description || "Front-end developer and technical writer. Writing about JavaScript, React, CSS, Web3, and the modern web.";

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={pageDesc} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@charliecodes" />
        <link rel="icon" href="/favicon.ico" />
        <title>{pageTitle}</title>
      </Head>

      <div className="site-wrapper">
        <header className="site-header">
          <div className="site-header-left">
            <Link href="/" className="site-title">
              Charles Freeborn&apos;s Website
            </Link>
            <nav className="site-nav" aria-label="Main navigation">
              <Link href="/" className="site-nav-link">Writing</Link>
              <Link href="/writing" className="site-nav-link">Portfolio</Link>
            </nav>
          </div>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
          >
            {dark ? 'Light Mode' : 'Dark Mode'}
          </button>
        </header>

        <main>{children}</main>

        <footer className="site-footer">
          <span>© {new Date().getFullYear()} Charles Freeborn</span>
          <nav className="footer-links" aria-label="Social links">
            <a href="https://twitter.com/charliecodes" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://github.com/charlesfreeborn" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://freeborncharles.com">freeborncharles.com</a>
          </nav>
        </footer>
      </div>
    </>
  );
}
