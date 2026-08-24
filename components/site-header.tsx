"use client";

import type { AuthMode } from "./auth-modal";

export function SiteHeader({ onAuth }: { onAuth: (mode: AuthMode) => void }) {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="ClipVantra home">
        <span className="brand-mark">C</span>
        <span>
          ClipVantra<span className="accent"> AI</span>
        </span>
      </a>
      <nav className="nav">
        <a href="#features">Features</a>
        <a href="#how">How it works</a>
        <a href="#pricing">Pricing</a>
        <a href="#generator">Generator</a>
        <a href="#faq">FAQ</a>
      </nav>
      <div className="header-actions">
        <button
          className="btn btn-ghost btn-sm"
          type="button"
          onClick={() => onAuth("login")}
        >
          Log in
        </button>
        <button
          className="btn btn-primary btn-sm"
          type="button"
          onClick={() => onAuth("signup")}
        >
          Sign up
        </button>
      </div>
    </header>
  );
}
