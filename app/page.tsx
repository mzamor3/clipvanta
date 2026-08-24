"use client";

import { useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { Generator } from "@/components/generator";
import { AuthModal, type AuthMode } from "@/components/auth-modal";

export default function Home() {
  const [authMode, setAuthMode] = useState<AuthMode | null>(null);

  return (
    <>
      <div className="bg-orb orb-one" />
      <div className="bg-orb orb-two" />

      <SiteHeader onAuth={setAuthMode} />

      <main id="top">
        <section className="hero section">
          <div className="hero-copy">
            <div className="eyebrow">AI-powered faceless video creation</div>
            <h1>
              Turn one idea into a{" "}
              <span className="gradient-text">scroll-stopping video.</span>
            </h1>
            <p className="hero-sub">
              Create faceless TikToks, Reels, and Shorts with AI-generated
              scripts, scene plans, captions, hooks, and voiceover direction in
              minutes.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#generator">
                Create your first video
              </a>
              <a className="btn btn-secondary" href="#how">
                See how it works
              </a>
            </div>
            <div className="trust-row">
              <span>✓ No camera needed</span>
              <span>✓ Beginner friendly</span>
              <span>✓ Built for short-form</span>
            </div>
          </div>

          <div className="hero-card">
            <div className="app-window">
              <div className="window-top">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
                <span className="window-title">ClipVanta Studio</span>
              </div>
              <div className="window-body">
                <div className="mini-sidebar">
                  <div className="mini-logo">CV</div>
                  <div className="mini-nav active" />
                  <div className="mini-nav" />
                  <div className="mini-nav" />
                  <div className="mini-nav" />
                </div>
                <div className="studio">
                  <div className="studio-head">
                    <div>
                      <span className="tiny-label">NEW PROJECT</span>
                      <h3>Build a faceless short</h3>
                    </div>
                    <span className="status-pill">AI Ready</span>
                  </div>
                  <div className="prompt-box">
                    <span className="tiny-label">TOPIC</span>
                    <p>3 psychology facts that make people trust you faster</p>
                  </div>
                  <div className="chip-row">
                    <span>30 sec</span>
                    <span>Storytelling</span>
                    <span>9:16</span>
                  </div>
                  <div className="video-preview">
                    <div className="preview-badge">Scene 1</div>
                    <div className="preview-text">
                      People decide whether they trust you in seconds.
                    </div>
                    <div className="fake-caption">
                      Here are 3 psychology-backed ways to build trust fast.
                    </div>
                  </div>
                  <div className="generate-bar">
                    <span>Script + 6 scenes + captions</span>
                    <button type="button">Generate</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="metrics section compact">
          <div>
            <strong>10×</strong>
            <span>faster content planning</span>
          </div>
          <div>
            <strong>1 idea</strong>
            <span>to complete short</span>
          </div>
          <div>
            <strong>0 camera</strong>
            <span>time required</span>
          </div>
          <div>
            <strong>3 formats</strong>
            <span>TikTok, Reels, Shorts</span>
          </div>
        </section>

        <section id="features" className="section">
          <div className="section-heading">
            <span className="eyebrow">Everything in one workflow</span>
            <h2>From blank page to publish-ready plan</h2>
            <p>
              ClipVanta helps you create the parts that normally slow faceless
              creators down.
            </p>
          </div>

          <div className="feature-grid">
            <article className="feature-card">
              <div className="icon">✦</div>
              <h3>Hook Generator</h3>
              <p>
                Turn any topic into attention-grabbing openings designed for
                short-form content.
              </p>
            </article>
            <article className="feature-card">
              <div className="icon">≋</div>
              <h3>AI Script Builder</h3>
              <p>
                Generate concise scripts with pacing, transitions, CTAs, and
                scene-by-scene structure.
              </p>
            </article>
            <article className="feature-card">
              <div className="icon">▣</div>
              <h3>Scene Planner</h3>
              <p>
                Get visual directions for every scene so you know exactly what
                footage or AI visuals to use.
              </p>
            </article>
            <article className="feature-card">
              <div className="icon">Aa</div>
              <h3>Caption Pack</h3>
              <p>
                Create on-screen text, post captions, and hashtags from the same
                content idea.
              </p>
            </article>
            <article className="feature-card">
              <div className="icon">◖</div>
              <h3>Voiceover Direction</h3>
              <p>
                Choose tone, pace, and delivery notes for AI voice tools or your
                preferred narrator.
              </p>
            </article>
            <article className="feature-card">
              <div className="icon">↗</div>
              <h3>Platform Ready</h3>
              <p>
                Optimize ideas for TikTok, Instagram Reels, and YouTube Shorts
                from one dashboard.
              </p>
            </article>
          </div>
        </section>

        <section id="how" className="section how">
          <div className="section-heading left">
            <span className="eyebrow">Simple by design</span>
            <h2>Create a video plan in three steps</h2>
          </div>
          <div className="steps">
            <div className="step">
              <span className="step-number">01</span>
              <h3>Enter your idea</h3>
              <p>Type a topic, niche, story, product, or rough idea.</p>
            </div>
            <div className="step">
              <span className="step-number">02</span>
              <h3>Choose your style</h3>
              <p>Select length, platform, tone, and content format.</p>
            </div>
            <div className="step">
              <span className="step-number">03</span>
              <h3>Generate your plan</h3>
              <p>Get a hook, script, scenes, captions, and voiceover direction.</p>
            </div>
          </div>
        </section>

        <section id="generator" className="section generator-section">
          <div className="section-heading">
            <span className="eyebrow">Interactive demo</span>
            <h2>Try the ClipVanta generator</h2>
            <p>
              This version generates a polished sample plan in your browser so
              the site works immediately after upload.
            </p>
          </div>

          <Generator />
        </section>

        <section id="pricing" className="section pricing">
          <div className="section-heading">
            <span className="eyebrow">Start simple</span>
            <h2>Pricing built for creators</h2>
          </div>
          <div className="pricing-grid">
            <article className="price-card">
              <span className="plan">Free</span>
              <div className="price">
                $0<span>/mo</span>
              </div>
              <p>Perfect for trying ClipVanta.</p>
              <ul>
                <li>3 video plans per month</li>
                <li>Hooks + scripts</li>
                <li>Basic scene plans</li>
              </ul>
              <a className="btn btn-secondary full" href="#generator">
                Try free
              </a>
            </article>

            <article className="price-card featured">
              <span className="popular">MOST POPULAR</span>
              <span className="plan">Creator</span>
              <div className="price">
                $19<span>/mo</span>
              </div>
              <p>For creators posting consistently.</p>
              <ul>
                <li>50 video plans per month</li>
                <li>Hooks, scripts, scenes</li>
                <li>Captions + hashtags</li>
                <li>Voiceover direction</li>
              </ul>
              <a className="btn btn-primary full" href="#generator">
                Start creating
              </a>
            </article>

            <article className="price-card">
              <span className="plan">Pro</span>
              <div className="price">
                $39<span>/mo</span>
              </div>
              <p>For high-volume faceless channels.</p>
              <ul>
                <li>Unlimited planning</li>
                <li>Multiple content styles</li>
                <li>Priority generations</li>
                <li>Commercial use</li>
              </ul>
              <a className="btn btn-secondary full" href="#generator">
                Go Pro
              </a>
            </article>
          </div>
          <p className="pricing-note">
            Pricing is placeholder content for the MVP and can be connected to
            Stripe later.
          </p>
        </section>

        <section id="faq" className="section faq">
          <div className="section-heading">
            <span className="eyebrow">Good to know</span>
            <h2>Frequently asked questions</h2>
            <p>
              Everything you need to know about creating faceless videos with
              ClipVanta.
            </p>
          </div>
          <div className="faq-list">
            <details className="faq-item" open>
              <summary>
                Do I need to show my face or record video?
                <span className="faq-icon" aria-hidden="true">
                  +
                </span>
              </summary>
              <p>
                No. ClipVanta is built for faceless content. You get scripts,
                scene directions, captions, and voiceover notes so you can create
                using stock footage, AI visuals, or screen recordings.
              </p>
            </details>
            <details className="faq-item">
              <summary>
                Which platforms does it support?
                <span className="faq-icon" aria-hidden="true">
                  +
                </span>
              </summary>
              <p>
                Every plan is optimized for TikTok, Instagram Reels, and YouTube
                Shorts in a vertical 9:16 format, with pacing tuned for each
                platform.
              </p>
            </details>
            <details className="faq-item">
              <summary>
                Do I need an API key or payment to try it?
                <span className="faq-icon" aria-hidden="true">
                  +
                </span>
              </summary>
              <p>
                Not right now. This is a working front-end demo — the generator
                creates a full sample plan directly in your browser with no
                signup, API key, or payment required.
              </p>
            </details>
            <details className="faq-item">
              <summary>
                What does a generated plan include?
                <span className="faq-icon" aria-hidden="true">
                  +
                </span>
              </summary>
              <p>
                Each plan includes multiple hooks, a full script, a
                scene-by-scene shot plan, on-screen captions, ready-to-use
                hashtags, and voiceover delivery direction.
              </p>
            </details>
            <details className="faq-item">
              <summary>
                Can I use the videos commercially?
                <span className="faq-icon" aria-hidden="true">
                  +
                </span>
              </summary>
              <p>
                Yes. On the Pro plan, everything you create is cleared for
                commercial use across your channels and client work.
              </p>
            </details>
          </div>
        </section>

        <section className="cta section">
          <div>
            <span className="eyebrow">Create without showing your face</span>
            <h2>Your next short starts with one idea.</h2>
            <p>
              Use ClipVanta to turn it into a structured, ready-to-create video
              plan.
            </p>
          </div>
          <a className="btn btn-primary" href="#generator">
            Generate a video plan
          </a>
        </section>
      </main>

      <footer>
        <a className="brand" href="#top">
          <span className="brand-mark">C</span>
          <span>
            ClipVanta<span className="accent"> AI</span>
          </span>
        </a>
        <p>© 2026 ClipVanta. Built for faceless creators.</p>
        <div className="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Contact</a>
        </div>
      </footer>

      <AuthModal
        mode={authMode}
        onModeChange={setAuthMode}
        onClose={() => setAuthMode(null)}
      />
    </>
  );
}
