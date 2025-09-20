import { sections } from "./content.js";

/* Build TOC */
const tocEl = document.getElementById("toc");
const contentEl = document.getElementById("content");
const searchEl = document.getElementById("search");
const sidebar = document.getElementById("sidebar");
const toggleBtn = document.querySelector(".menu-toggle");
const backdrop = document.getElementById("backdrop");

/* add predeclaration for IntersectionObserver */
let observer;

function renderTOC(list) {
  tocEl.innerHTML = "";
  list.forEach((s) => {
    const a = document.createElement("a");
    a.href = `#${s.slug}`;
    a.innerHTML = `${s.title}${s.badge ? ` <span class="badge">${s.badge}</span>` : ""}${
      s.desc ? `<span class="muted">${s.desc}</span>` : ""
    }`;
    tocEl.appendChild(a);
  });
}

function renderContent(list) {
  contentEl.innerHTML = "";
  list.forEach((s) => {
    const sec = document.createElement("section");
    sec.id = s.slug;
    sec.dataset.animate = "in";
    sec.innerHTML = `<h2>${s.title}</h2>${s.body}`;
    contentEl.appendChild(sec);
  });
  watchSections(); enhanceCodeBlocks();
}

renderTOC(sections);
renderContent(sections);

/* Search */
searchEl.addEventListener("input", (e) => {
  const q = e.target.value.toLowerCase().trim();
  const filtered = sections.filter(
    (s) =>
      s.title.toLowerCase().includes(q) ||
      (s.desc && s.desc.toLowerCase().includes(q)) ||
      s.plain.includes(q),
  );
  renderTOC(filtered);
  renderContent(filtered);
});

/* Mobile sidebar toggle */
toggleBtn.addEventListener("click", () => {
  const open = !sidebar.classList.contains("open");
  sidebar.classList.toggle("open", open);
  document.body.classList.toggle("sidebar-open", open);
  backdrop.hidden = !open; backdrop.classList.toggle("show", open);
  toggleBtn.setAttribute("aria-expanded", String(open));
});

tocEl.addEventListener("click", (e) => {
  if (e.target.closest("a")) {
    sidebar.classList.remove("open");
    document.body.classList.remove("sidebar-open");
    backdrop.hidden = true; backdrop.classList.remove("show");
    toggleBtn.setAttribute("aria-expanded", "false");
  }
});

/* Section reveal on scroll */
observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) en.target.classList.add("visible");
    });
  },
  { threshold: 0.08 },
);

function watchSections() {
  document.querySelectorAll('section[data-animate="in"]').forEach((el) => observer.observe(el));
}

/* Support deep links */
if (location.hash) {
  const target = document.querySelector(location.hash);
  if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* Keyboard: focus main with "f" */
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && sidebar.classList.contains("open")) backdrop.click();
});

function enhanceCodeBlocks() {
  document.querySelectorAll("pre").forEach((pre) => {
    if (pre.dataset.enhanced) return;
    pre.dataset.enhanced = "1"; const btn = document.createElement("button");
    btn.className = "copy-btn"; btn.type = "button"; btn.textContent = "Copy";
    btn.addEventListener("click", async () => {
      const code = pre.querySelector("code")?.innerText || pre.innerText;
      try { await navigator.clipboard.writeText(code); btn.textContent = "Copied"; setTimeout(()=>btn.textContent="Copy",1200); }
      catch { btn.textContent = "Error"; setTimeout(()=>btn.textContent="Copy",1200); }
    });
    pre.appendChild(btn);
  });
}

backdrop.addEventListener("click", () => {
  sidebar.classList.remove("open"); document.body.classList.remove("sidebar-open");
  backdrop.hidden = true; backdrop.classList.remove("show");
  toggleBtn.setAttribute("aria-expanded", "false");
});