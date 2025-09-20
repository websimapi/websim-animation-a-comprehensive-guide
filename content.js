export const sections = [
  {
    title: "What is Animation?",
    slug: "what-is-animation",
    desc: "Movement through change over time",
    badge: "Start here",
    body: `
<p>Animation is the craft of creating the illusion of motion and transformation through discrete changes over time. On the web and in apps, animation guides attention, communicates state, provides feedback, and delights users when used with purpose.</p>
<ul>
  <li>Functional: communicates hierarchy, state changes, and causality.</li>
  <li>Expressive: adds personality and brand voice.</li>
  <li>Informational: visualizes data transitions and spatial relationships.</li>
</ul>
<blockquote>Rule of thumb: If an animation doesn’t improve clarity or joy, simplify or remove it.</blockquote>
`,
    plain:
      "animation movement change time guide attention communicates state feedback functional expressive informational if an animation doesn’t improve clarity simplify or remove",
  },
  {
    title: "Core Principles",
    slug: "core-principles",
    desc: "Timing, easing, staging, continuity",
    body: `
<ul>
  <li><strong>Timing</strong>: duration sets weight and intent. Short (120–240ms) for micro feedback, medium (240–360ms) for page/UI transitions, longer (400–700ms) for large spatial moves or onboarding.</li>
  <li><strong>Easing</strong>: shape of time. Use <em>ease-out</em> for entrances, <em>ease-in</em> for exits, <em>ease-in-out</em> for position shifts. Physics-like with springs when appropriate.</li>
  <li><strong>Staging & hierarchy</strong>: animate primary elements first; reduce motion on background elements.</li>
  <li><strong>Continuity</strong>: keep elements “alive” during state changes; avoid teleportation.</li>
  <li><strong>Anticipation & follow-through</strong>: small pre-motions and subtle settling help legibility.</li>
  <li><strong>Performance</strong>: animate GPU-friendly properties (<code>transform</code>, <code>opacity</code>), avoid layout thrash.</li>
  <li><strong>Accessibility</strong>: respect <code>prefers-reduced-motion</code>; ensure contrast and semantic structure.</li>
</ul>
`,
    plain:
      "timing easing staging continuity anticipation follow-through performance accessibility transform opacity prefers reduced motion",
  },
  {
    title: "CSS Transitions & Animations",
    slug: "css",
    desc: "Simple, declarative micro-interactions",
    body: `
<h3>Transitions</h3>
<pre><code>button {
  transition: transform .18s ease-out, opacity .18s ease-out;
}
button:active { transform: scale(0.98); }</code></pre>
<h3>Keyframes</h3>
<pre><code>@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: none; }
}
.card { animation: fade-in-up .24s ease-out both; }</code></pre>
<h3>Reduced motion</h3>
<pre><code>@media (prefers-reduced-motion: reduce) {
  * { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; }
}</code></pre>
`,
    plain:
      "css transitions animations keyframes prefers reduced motion transform opacity scale fade",
  },
  {
    title: "JavaScript Animation",
    slug: "javascript",
    desc: "Fine control and sequencing",
    body: `
<p>Use JavaScript when you need runtime control, dynamic values, or orchestration across multiple elements.</p>
<h3>requestAnimationFrame</h3>
<pre><code>let start; const dur = 300;
function step(ts) {
  if (!start) start = ts;
  const p = Math.min((ts - start) / dur, 1);
  const t = 1 - Math.pow(1 - p, 3); // easeOutCubic
  el.style.transform = \`translateX(\${t * 40}px)\`;
  if (p &lt; 1) requestAnimationFrame(step);
}
requestAnimationFrame(step);</code></pre>
<h3>Web Animations API</h3>
<pre><code>el.animate([
  { opacity: 0, transform: "translateY(8px)" },
  { opacity: 1, transform: "none" }
], { duration: 240, easing: "ease-out", fill: "both" });</code></pre>
`,
    plain:
      "javascript animation requestanimationframe web animations api orchestration dynamic values easing",
  },
  {
    title: "SVG, Canvas, and WebGL",
    slug: "graphics-tech",
    desc: "When and why to use each",
    body: `
<ul>
  <li><strong>SVG</strong>: resolution-independent UI icons, paths, morphing, line-drawing effects. Animatable via CSS, WAAPI, or SMIL (limited).</li>
  <li><strong>Canvas 2D</strong>: high-frequency pixel rendering, charts, particles.</li>
  <li><strong>WebGL / WebGPU</strong>: 3D scenes, shaders, complex visual effects.</li>
</ul>
<h3>Canvas loop</h3>
<pre><code>const ctx = canvas.getContext("2d");
let t = 0;
function loop() {
  t += 1/60; ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = "#000"; ctx.beginPath();
  ctx.arc(80 + Math.sin(t)*20, 80, 12, 0, Math.PI*2); ctx.fill();
  requestAnimationFrame(loop);
}
loop();</code></pre>
`,
    plain:
      "svg canvas webgl webgpu icons morphing particles charts shaders",
  },
  {
    title: "3D, Controls, and Stability",
    slug: "threejs-ux",
    desc: "Functional over flashy",
    body: `
<p>For complex apps (3D, games, simulations), prioritize smooth framerates, responsive controls, and stable interactions.</p>
<ul>
  <li>Clamp vertical rotation to prevent over-rotation and disorientation.</li>
  <li>Desktop: WASD movement (no inversion). Mobile: use a virtual joystick like <code>nipple.js</code>.</li>
  <li>Optimize resources: frustum culling, texture compression, instancing, lazy-load heavy assets.</li>
</ul>
<pre><code>// Movement guideline (pseudo)
if (isMobile) useNipple(); else useWASD();
camera.rotateX(clamp(camera.rotation.x + dx, minPitch, maxPitch));</code></pre>
`,
    plain:
      "3d games simulations smooth framerates wasd nipple.js clamp vertical rotation performance",
  },
  {
    title: "Design Guidelines to Follow",
    slug: "design-guidelines",
    desc: "Clean, functional, accessible",
    body: `
<ul>
  <li>Keep design simple, functional, and clean. Default to white or black backgrounds.</li>
  <li>Fonts: Cal Sans, Noto Sans, or Space Mono unless specified otherwise.</li>
  <li>Use simple, snappy animations. Avoid complex or garish effects.</li>
  <li><strong>Avoid</strong>: purple backgrounds, garish gradients, Comic Sans, green-on-black, hover “rise” buttons.</li>
  <li>Ensure accessibility with semantic markup and proper contrast. Respect motion settings.</li>
</ul>
`,
    plain:
      "simple functional clean white black backgrounds noto sans space mono accessibility avoid purple garish gradients comic sans green on black",
  },
  {
    title: "Landing Pages & Presentational Content",
    slug: "landing-pages",
    desc: "Wow factor with restraint",
    body: `
<ul>
  <li>Modern aesthetic: bold typography, micro-animations, glassmorphism or vibrant gradients only if requested.</li>
  <li>Static designs are rare — add thoughtful interaction and responsiveness.</li>
  <li>Balance “wow” with performance and accessibility; keep important content legible and uncluttered.</li>
</ul>
`,
    plain:
      "landing pages modern aesthetic bold typography micro-animations wow factor responsive",
  },
  {
    title: "Remotion: Programmatic Video on the Web",
    slug: "remotion",
    desc: "Create videos via React components",
    badge: "Video",
    body: `
<p>Remotion lets you build videos with React. Use a Player to preview a component-based composition. Prefer square or portrait videos; avoid placing key elements in the top 10% or bottom 20% (UI overlays can obstruct).</p>
<h3>Setup (non-bundled)</h3>
<pre><code>&lt;script type="importmap"&gt;{
  "imports": {
    "react": "https://esm.sh/react@18.3.1?dev",
    "react-dom": "https://esm.sh/react-dom@18.3.1?dev",
    "react-dom/client": "https://esm.sh/react-dom@18.3.1/client?dev",
    "react/jsx-runtime": "https://esm.sh/react@18.3.1/jsx-runtime?dev",
    "react/jsx-dev-runtime": "https://esm.sh/react@18.3.1/jsx-dev-runtime?dev",
    "remotion": "https://esm.sh/remotion@4.0.350?external=react,react-dom&dev",
    "@remotion/player": "https://esm.sh/@remotion/player@4.0.350?external=react,react-dom&dev",
    "@remotion/gif": "https://esm.sh/@remotion/gif@4.0.350?external=react,react-dom,remotion&dev",
    "@remotion/transitions": "https://esm.sh/@remotion/transitions@4.0.350?external=react,react-dom,remotion&dev",
    "@websim/remotion/player": "https://esm.websim.com/@websim/remotion/player"
  }
}&lt;/script&gt;</code></pre>
<h3>Basic Player</h3>
<pre><code>import React from "react";
import { createRoot } from "react-dom/client";
import { Player } from "@websim/remotion/player";
import { MyComposition } from "./composition.jsx";
createRoot(document.getElementById("app")).render(
  &lt;Player component={MyComposition} durationInFrames={360} fps={30}
    compositionWidth={540} compositionHeight={960} loop controls autoplay /&gt;
);</code></pre>
<h3>Composition</h3>
<pre><code>import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
export const MyComposition = ({ name = "World" }) =&gt; {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 30], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    &lt;AbsoluteFill style={{ backgroundColor: "#000", justifyContent: "center", alignItems: "center" }}&gt;
      &lt;h1 style={{ fontSize: "64px", color: "white", opacity }}&gt;Hello {name}&lt;/h1&gt;
    &lt;/AbsoluteFill&gt;
  );
};</code></pre>
<h3>Sequences & Transitions</h3>
<pre><code>import { Sequence, Series } from "remotion";
import { TransitionSeries, springTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
&lt;Series&gt;
  &lt;Series.Sequence durationInFrames={30}&gt;...&lt;/Series.Sequence&gt;
  &lt;Series.Sequence durationInFrames={30}&gt;...&lt;/Series.Sequence&gt;
&lt;/Series&gt;
&lt;TransitionSeries&gt;
  &lt;TransitionSeries.Sequence durationInFrames={60}&gt;...&lt;/TransitionSeries.Sequence&gt;
  &lt;TransitionSeries.Transition timing={springTiming({ config: { damping: 200 }})} presentation={fade()} /&gt;
  &lt;TransitionSeries.Sequence durationInFrames={60}&gt;...&lt;/TransitionSeries.Sequence&gt;
&lt;/TransitionSeries&gt;</code></pre>
<h3>Media</h3>
<pre><code>import { OffthreadVideo, Audio, Img } from "remotion";
&lt;OffthreadVideo src="clip.mp4" volume={0.9} style={{ width: "100%" }} /&gt;
&lt;Audio src="sfx.mp3" /&gt;
&lt;Img src="logo.png" /&gt;</code></pre>
<h3>Deterministic Random and Springs</h3>
<pre><code>import { random, spring, useVideoConfig, useCurrentFrame } from "remotion";
const frame = useCurrentFrame();
const { fps } = useVideoConfig();
const seedVal = random("seed-123");
const s = spring({ fps, frame, config: { damping: 200 } });</code></pre>
<h3>Font Loading (delay render)</h3>
<pre><code>import { delayRender, continueRender } from "remotion";
const handle = delayRender();
const font = new FontFace("MyFont", "url(myfont.woff2)");
font.load().then(() =&gt; { document.fonts.add(font); continueRender(handle); });</code></pre>
<p><strong>Rules:</strong> avoid Math.random(); use <code>random()</code> with a static seed. 30 fps default, 1080p default, but prefer square/portrait. Keep large text (≥48px), and avoid top 10% or bottom 20% for important elements.</p>
`,
    plain:
      "remotion react video player composition durationInFrames fps portrait square transitions series sequence OffthreadVideo Img Audio deterministic random spring interpolate font loading delayRender continueRender avoid math.random",
  },
  {
    title: "Performance & Accessibility",
    slug: "perf-a11y",
    desc: "Do more with less motion",
    body: `
<ul>
  <li>Animate <code>transform</code> and <code>opacity</code> for best performance; avoid layout-triggering properties.</li>
  <li>Batch DOM reads/writes, throttle scroll-based animations, prefer CSS where possible.</li>
  <li>Respect <code>prefers-reduced-motion</code> and provide instant alternatives.</li>
  <li>Ensure focus states remain visible during transitions; avoid trapping focus behind animated overlays.</li>
</ul>
`,
    plain:
      "performance accessibility transform opacity layout thrash throttle prefers reduced motion focus states",
  },
  {
    title: "What to Avoid",
    slug: "avoid",
    desc: "Anti-patterns and clichés",
    body: `
<ul>
  <li>Purple backgrounds and garish gradients without explicit request.</li>
  <li>Comic Sans and novelty fonts for core UI.</li>
  <li>Green on black text (legibility issues) and low-contrast overlays.</li>
  <li>Overly complex or constant motion; hover buttons that unnaturally "rise".</li>
</ul>
`,
    plain:
      "avoid purple backgrounds garish gradients comic sans green on black rise hover complex motion",
  },
];

