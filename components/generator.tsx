"use client";

import { useRef, useState } from "react";

type Plan = {
  topic: string;
  platform: string;
  length: string;
  style: string;
  hashtags: string[];
  voice: string;
};

function toHashtag(word: string) {
  return "#" + word.replace(/[^a-z0-9]/gi, "");
}

function buildHashtags(topic: string, platform: string) {
  const words = topic
    .toLowerCase()
    .split(/\s+/)
    .filter((w) => w.length > 3)
    .slice(0, 3)
    .map(toHashtag);

  const platformTags: Record<string, string[]> = {
    TikTok: ["#tiktok", "#fyp", "#foryou"],
    "Instagram Reels": ["#reels", "#instagram", "#explorepage"],
    "YouTube Shorts": ["#shorts", "#youtube", "#youtubeshorts"],
  };

  const base = ["#facelesscontent", "#contentcreator", "#viralvideo"];
  return [
    ...new Set([...words, ...(platformTags[platform] || []), ...base]),
  ].slice(0, 9);
}

const styleVoice: Record<string, string> = {
  Storytelling:
    "Warm and conversational, like telling a friend a secret. Slow down on the twist, then speed up through the payoff.",
  Educational:
    "Clear, confident, and calm. Emphasize key terms and pause briefly before each new point so it lands.",
  Motivational:
    "High energy and punchy. Rising intonation, short breaths, and a powerful, slower final line.",
  Listicle:
    "Upbeat and snappy. Count each item with a slight vocal 'reset' so the structure feels obvious.",
  "Mystery / Curiosity":
    "Low, intriguing, and unhurried. Leave small gaps of silence to build suspense before the reveal.",
};

export function Generator() {
  const [plan, setPlan] = useState<Plan | null>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const topic = String(formData.get("topic") || "").trim();
    const platform = String(formData.get("platform") || "");
    const length = String(formData.get("length") || "");
    const style = String(formData.get("style") || "");

    if (!topic) return;

    setPlan({
      topic,
      platform,
      length,
      style,
      hashtags: buildHashtags(topic, platform),
      voice: styleVoice[style] || styleVoice.Storytelling,
    });

    requestAnimationFrame(() => {
      outputRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  }

  return (
    <div className="generator-shell">
      <form id="generatorForm" className="generator-form" onSubmit={handleSubmit}>
        <label>
          Video topic
          <textarea
            id="topic"
            name="topic"
            placeholder="Example: 5 money habits that quietly keep people broke"
            required
          />
        </label>

        <div className="form-row">
          <label>
            Platform
            <select id="platform" name="platform" defaultValue="TikTok">
              <option>TikTok</option>
              <option>Instagram Reels</option>
              <option>YouTube Shorts</option>
            </select>
          </label>
          <label>
            Length
            <select id="length" name="length" defaultValue="30 seconds">
              <option>30 seconds</option>
              <option>45 seconds</option>
              <option>60 seconds</option>
            </select>
          </label>
        </div>

        <label>
          Style
          <select id="style" name="style" defaultValue="Storytelling">
            <option>Storytelling</option>
            <option>Educational</option>
            <option>Motivational</option>
            <option>Listicle</option>
            <option>Mystery / Curiosity</option>
          </select>
        </label>

        <button className="btn btn-primary full" type="submit">
          Generate video plan
        </button>
        <p className="form-note">Demo mode — no API key required.</p>
      </form>

      <div className="generator-output" id="output" ref={outputRef}>
        {!plan ? (
          <div className="empty-state">
            <div className="empty-icon">✦</div>
            <h3>Your video plan will appear here</h3>
            <p>Enter a topic and click generate.</p>
          </div>
        ) : (
          <>
            <div className="output-head">
              <div>
                <span className="tiny-label">GENERATED PLAN</span>
                <h3 className="output-title">{plan.topic}</h3>
              </div>
              <span className="output-tag">
                {plan.platform} · {plan.length} · {plan.style}
              </span>
            </div>

            <div className="output-block">
              <h4>Hooks</h4>
              <ul>
                <li>{`"Most people scroll past ${plan.topic} — until they hear this."`}</li>
                <li>{`"Nobody tells you the truth about ${plan.topic}. So I will."`}</li>
                <li>{`"If you care about ${plan.topic}, stop scrolling for 10 seconds."`}</li>
              </ul>
            </div>

            <div className="output-block">
              <h4>Script</h4>
              <p>
                <strong>Opening:</strong>{" "}
                {`"Here's what almost nobody tells you about ${plan.topic}."`}
              </p>
              <p>
                <strong>Body:</strong> Start with the most surprising point,
                explain why it matters, then give two fast supporting takeaways.
                Keep each sentence short and visual.
              </p>
              <p>
                <strong>CTA:</strong> {`"Save this for later and follow for more."`}
              </p>
            </div>

            <div className="output-block">
              <h4>Scene plan</h4>
              <ul>
                <li>Scene 1 — Bold opening text over fast-moving background footage.</li>
                <li>Scene 2 — Close-up B-roll matching the main topic.</li>
                <li>Scene 3 — Key point #1 with large animated captions.</li>
                <li>Scene 4 — Key point #2 with a visual change or zoom.</li>
                <li>Scene 5 — Final takeaway with cleaner, calmer footage.</li>
                <li>Scene 6 — CTA screen with "Save + Follow".</li>
              </ul>
            </div>

            <div className="output-block">
              <h4>On-screen captions</h4>
              <ul>
                <li>{`"Wait for it… 👀"`}</li>
                <li>{`"Here's the part they skip."`}</li>
                <li>{`"Point #1 that changes everything."`}</li>
                <li>{`"Save this before you forget."`}</li>
              </ul>
            </div>

            <div className="output-block">
              <h4>Hashtags</h4>
              <div className="tag-row">
                {plan.hashtags.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="output-block">
              <h4>Voiceover direction</h4>
              <p>{plan.voice}</p>
              <p className="tiny-label" style={{ marginTop: 10 }}>
                FORMAT · 9:16 vertical · high-contrast captions · subtle
                background music
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
