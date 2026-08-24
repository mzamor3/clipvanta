/* ---------- Helpers ---------- */
function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (m) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  })[m]);
}

function toHashtag(word) {
  return "#" + word.replace(/[^a-z0-9]/gi, "");
}

function buildHashtags(topic, platform) {
  const words = topic
    .toLowerCase()
    .split(/\s+/)
    .filter((w) => w.length > 3)
    .slice(0, 3)
    .map(toHashtag);

  const platformTags = {
    "TikTok": ["#tiktok", "#fyp", "#foryou"],
    "Instagram Reels": ["#reels", "#instagram", "#explorepage"],
    "YouTube Shorts": ["#shorts", "#youtube", "#youtubeshorts"]
  };

  const base = ["#facelesscontent", "#contentcreator", "#viralvideo"];
  return [...new Set([...words, ...(platformTags[platform] || []), ...base])].slice(0, 9);
}

const styleVoice = {
  "Storytelling": "Warm and conversational, like telling a friend a secret. Slow down on the twist, then speed up through the payoff.",
  "Educational": "Clear, confident, and calm. Emphasize key terms and pause briefly before each new point so it lands.",
  "Motivational": "High energy and punchy. Rising intonation, short breaths, and a powerful, slower final line.",
  "Listicle": "Upbeat and snappy. Count each item with a slight vocal 'reset' so the structure feels obvious.",
  "Mystery / Curiosity": "Low, intriguing, and unhurried. Leave small gaps of silence to build suspense before the reveal."
};

/* ---------- Generator ---------- */
const form = document.getElementById("generatorForm");
const output = document.getElementById("output");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const topic = escapeHtml(document.getElementById("topic").value.trim());
    const platform = escapeHtml(document.getElementById("platform").value);
    const length = escapeHtml(document.getElementById("length").value);
    const style = escapeHtml(document.getElementById("style").value);

    if (!topic) return;

    const hashtags = buildHashtags(topic, platform)
      .map((t) => `<span class="tag">${escapeHtml(t)}</span>`)
      .join("");

    const voice = styleVoice[style] || styleVoice["Storytelling"];

    output.innerHTML = `
      <div class="output-head">
        <div>
          <span class="tiny-label">GENERATED PLAN</span>
          <h3 class="output-title">${topic}</h3>
        </div>
        <span class="output-tag">${platform} · ${length} · ${style}</span>
      </div>

      <div class="output-block">
        <h4>Hooks</h4>
        <ul>
          <li>“Most people scroll past ${topic} — until they hear this.”</li>
          <li>“Nobody tells you the truth about ${topic}. So I will.”</li>
          <li>“If you care about ${topic}, stop scrolling for 10 seconds.”</li>
        </ul>
      </div>

      <div class="output-block">
        <h4>Script</h4>
        <p><strong>Opening:</strong> “Here's what almost nobody tells you about ${topic}.”</p>
        <p><strong>Body:</strong> Start with the most surprising point, explain why it matters, then give two fast supporting takeaways. Keep each sentence short and visual.</p>
        <p><strong>CTA:</strong> “Save this for later and follow for more.”</p>
      </div>

      <div class="output-block">
        <h4>Scene plan</h4>
        <ul>
          <li>Scene 1 — Bold opening text over fast-moving background footage.</li>
          <li>Scene 2 — Close-up B-roll matching the main topic.</li>
          <li>Scene 3 — Key point #1 with large animated captions.</li>
          <li>Scene 4 — Key point #2 with a visual change or zoom.</li>
          <li>Scene 5 — Final takeaway with cleaner, calmer footage.</li>
          <li>Scene 6 — CTA screen with “Save + Follow”.</li>
        </ul>
      </div>

      <div class="output-block">
        <h4>On-screen captions</h4>
        <ul>
          <li>“Wait for it… 👀”</li>
          <li>“Here's the part they skip.”</li>
          <li>“Point #1 that changes everything.”</li>
          <li>“Save this before you forget.”</li>
        </ul>
      </div>

      <div class="output-block">
        <h4>Hashtags</h4>
        <div class="tag-row">${hashtags}</div>
      </div>

      <div class="output-block">
        <h4>Voiceover direction</h4>
        <p>${voice}</p>
        <p class="tiny-label" style="margin-top:10px">FORMAT · 9:16 vertical · high-contrast captions · subtle background music</p>
      </div>
    `;

    output.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
}

/* ---------- Auth modal ---------- */
const authModal = document.getElementById("authModal");
const authForm = document.getElementById("authForm");
const authTitle = document.getElementById("authTitle");
const authSub = document.getElementById("authSub");
const authSubmit = document.getElementById("authSubmit");
const authSwitch = document.getElementById("authSwitch");

let authMode = "login";

function renderAuthMode() {
  const isSignup = authMode === "signup";
  authTitle.textContent = isSignup ? "Create your account" : "Welcome back";
  authSub.textContent = isSignup
    ? "Start turning ideas into faceless videos."
    : "Log in to keep creating faceless videos.";
  authSubmit.textContent = isSignup ? "Sign up" : "Log in";
  authSwitch.innerHTML = isSignup
    ? 'Already have an account? <button type="button" data-auth-toggle>Log in</button>'
    : "Don't have an account? <button type=\"button\" data-auth-toggle>Sign up</button>";
  authModal.classList.toggle("is-signup", isSignup);
}

function openAuth(mode) {
  authMode = mode;
  renderAuthMode();
  authModal.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeAuth() {
  authModal.hidden = true;
  document.body.style.overflow = "";
  if (authForm) authForm.reset();
}

document.querySelectorAll("[data-auth]").forEach((btn) => {
  btn.addEventListener("click", () => openAuth(btn.getAttribute("data-auth")));
});

if (authModal) {
  authModal.addEventListener("click", (e) => {
    if (e.target === authModal || e.target.hasAttribute("data-close-modal")) closeAuth();
    if (e.target.hasAttribute("data-auth-toggle")) {
      authMode = authMode === "signup" ? "login" : "signup";
      renderAuthMode();
    }
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && authModal && !authModal.hidden) closeAuth();
});

if (authForm) {
  authForm.addEventListener("submit", (e) => {
    e.preventDefault();
    authSubmit.textContent = authMode === "signup" ? "Account created ✓" : "Logged in ✓";
    setTimeout(closeAuth, 800);
  });
}
