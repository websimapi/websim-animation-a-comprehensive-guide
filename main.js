import { sections } from "./content.js";

/* Build TOC */
const tocEl = document.getElementById("toc");
const contentEl = document.getElementById("content");
const searchEl = document.getElementById("search");
const sidebar = document.getElementById("sidebar");
const toggleBtn = document.querySelector(".menu-toggle");

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
  toggleBtn.setAttribute("aria-expanded", String(open));
});
tocEl.addEventListener("click", (e) => {
  if (e.target.closest("a")) {
    sidebar.classList.remove("open");
    toggleBtn.setAttribute("aria-expanded", "false");
  }
});

/* Section reveal on scroll */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) en.target.classList.add("visible");
    });
  },
  { threshold: 0.08 },
);
const watchSections = () =>
  document.querySelectorAll('section[data-animate="in"]').forEach((el) => observer.observe(el));
watchSections();

/* Support deep links */
if (location.hash) {
  const target = document.querySelector(location.hash);
  if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* Keyboard: focus main with "f" */
window.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === "f") contentEl.focus();
});

