
const form = document.getElementById("generatorForm");
const output = document.getElementById("output");

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, m => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
  })[m]);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const topic = escapeHtml(document.getElementById("topic").value.trim());
  const platform = escapeHtml(document.getElementById("platform").value);
  const length = escapeHtml(document.getElementById("length").value);
  const style = escapeHtml(document.getElementById("style").value);

  if (!topic) return;

  output.innerHTML = `
    <div class="output-head">
      <div>
        <span class="tiny-label">GENERATED PLAN</span>
        <h3 class="output-title">${topic}</h3>
      </div>
      <span class="output-tag">${platform} · ${length}</span>
    </div>

    <div class="output-block">
      <h4>Hook</h4>
      <p>Most people scroll past this topic without realizing the one detail that changes everything.</p>
    </div>

    <div class="output-block">
      <h4>Script</h4>
      <p><strong>Opening:</strong> “Here’s what almost nobody tells you about ${topic}.”</p>
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
      <h4>Style direction</h4>
      <p>${style} tone, quick pacing, high-contrast captions, 9:16 vertical framing, subtle background music, and a clear voiceover with a confident but natural delivery.</p>
    </div>
  `;
});
