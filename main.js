/* =========================================================
   EDIT YOUR LINKS HERE: set one to "" to show a "coming soon" toast
   ========================================================= */
const LINKS = {
  github: "https://github.com/sukrititalwar",
  linkedin: "https://www.linkedin.com/in/sukrititalwar",
  email: "sukrititalwar2006@gmail.com",
  resume: "assets/Sukriti_Talwar_Resume.pdf"
};

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------------- pixel sprites ---------------- */
const PAL = {
  K: "#3b4a7a", n: "#cfe0ff", B: "#7aa2f7", b: "#a9c4f7", c: "#5b82e0",
  i: "#e3edff", w: "#ffffff", l: "#d9d6fb"
};
const SPRITES = {
  heart: [
    ".KK.KK.",
    "KbbKbbK",
    "KbwbbbK",
    "KbbbbbK",
    ".KbbbK.",
    "..KbK..",
    "...K..."
  ],
  computer: [
    "KKKKKKKKKKKKK",
    "KBBBBBBBBBBBK",
    "KBnnnnnnnnnBK",
    "KBnccnnnnnnBK",
    "KBnnnccnnnnBK",
    "KBnccnnnnnnBK",
    "KBnnnnniicnBK",
    "KBnnnnnnnnnBK",
    "KBBBBBBBBBBBK",
    "KKKKKKKKKKKKK",
    "....KBBBK....",
    "..KKKKKKKKK..",
    ".KbbbbbbbbbK.",
    ".KKKKKKKKKKK."
  ],
  coffee: [
    "..i..i....",
    "...i..i...",
    "..i..i....",
    "KKKKKKKK..",
    "KwwwwwwKKK",
    "KBBBBBBK.K",
    "KBbBBBBK.K",
    "KBBBBBBKKK",
    "KBBBBBBK..",
    ".KBBBBK...",
    "KKKKKKKKK.",
    ".KKKKKKK.."
  ],
  trophy: [
    "KKKKKKKKKKKK",
    "KcKbbbbbbKcK",
    "KcKbwbbbbKcK",
    ".KKbwbbbbKK.",
    "..KbbbbbbK..",
    "...KbbbbK...",
    "....KbbK....",
    ".....KK.....",
    ".....KK.....",
    "...KKBBKK...",
    "..KBBBBBBK..",
    "..KKKKKKKK.."
  ],
  cursor: [
    "K.......",
    "KK......",
    "KwK.....",
    "KwwK....",
    "KwwwK...",
    "KwwwwK..",
    "KwwwwwK.",
    "KwwKKKKK",
    "KwK.....",
    "KK......",
    "K......."
  ],
  robot: [
    ".....c.....",
    ".....K.....",
    "..KKKKKKK..",
    "..KiiiiiK..",
    "..KiciciK..",
    "..KiiiiiK..",
    "..KiKKKiK..",
    "..KKKKKKK..",
    ".KKBBBBBKK.",
    "KbKBcBcBKbK",
    "KbKBBBBBKbK",
    "..KBBBBBK..",
    "..KK...KK.."
  ],
  floppy: [
    "KKKKKKKKKKK.",
    "KBKiiiiiKBKK",
    "KBKiiKiiKBBK",
    "KBKiiKiiKBBK",
    "KBKKKKKKKBBK",
    "KBBBBBBBBBBK",
    "KBwwwwwwwwBK",
    "KBwbbbbbbwBK",
    "KBwwwwwwwwBK",
    "KBwbbbbbbwBK",
    "KBwwwwwwwwBK",
    "KKKKKKKKKKKK"
  ],
  cat: [
    ".K........K.",
    "KbK......KbK",
    "KbbKKKKKKbbK",
    "KbbbbbbbbbbK",
    "KbcKbbbbcKbK",
    "KbbbbbbbbbbK",
    "KbbbbwwbbbbK",
    ".KbbbbbbbbK.",
    "..KKKKKKKK.."
  ],
  rocket: [
    "....KK....",
    "...KwwK...",
    "..KiiiiK..",
    "..KicciK..",
    "..KicciK..",
    "..KiiiiK..",
    "..KiiiiK..",
    ".KBKiiKBK.",
    "KBBKiiKBBK",
    "KBKKKKKKBK",
    "K..KccK..K",
    "....cc....",
    "....c....."
  ],
  terminal: [
    "KKKKKKKKKKKKKK",
    "KbbbbbbbbbbcwK",
    "KKKKKKKKKKKKKK",
    "KnnnnnnnnnnnnK",
    "KncnnnnnnnnnnK",
    "KnncnnnnnnnnnK",
    "KncnniiinnnnnK",
    "KnnnnnnnnnnnnK",
    "KKKKKKKKKKKKKK"
  ],
  satellite: [
    "KKKK......KKKK",
    "KbbK..KK..KbbK",
    "KcbKKKiiKKKbcK",
    "KbcK.KBBK.KcbK",
    "KcbKKKBBKKKbcK",
    "KbbK..KK..KbbK",
    "KKKK..K...KKKK",
    "......K.......",
    ".....KcK......"
  ],
  arrow: [
    "..KKK..",
    "..KcK..",
    "..KcK..",
    "..KcK..",
    "KKKcKKK",
    ".KcccK.",
    "..KcK..",
    "...K..."
  ]
};

function spriteSVG(name, size) {
  const rows = SPRITES[name];
  if (!rows) return "";
  const w = rows[0].length, h = rows.length;
  let rects = "";
  rows.forEach((row, y) => {
    [...row].forEach((ch, x) => {
      if (ch !== ".") rects += `<rect x="${x}" y="${y}" width="1" height="1" fill="${PAL[ch]}"/>`;
    });
  });
  return `<svg width="${w * size}" height="${h * size}" viewBox="0 0 ${w} ${h}" aria-hidden="true">${rects}</svg>`;
}
document.querySelectorAll(".px[data-sprite]").forEach(el => {
  el.innerHTML = spriteSVG(el.dataset.sprite, +el.dataset.size || 3);
});

/* ---------------- links ---------------- */
const toast = document.getElementById("toast");
let toastTimer;
function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}
const LINK_LABELS = { github: "GitHub", linkedin: "LinkedIn", email: "Email", resume: "Resume" };
document.querySelectorAll("[data-link]").forEach(a => {
  const key = a.dataset.link;
  const val = LINKS[key];
  if (val) {
    a.href = key === "email" ? `mailto:${val}` : val;
  } else {
    a.addEventListener("click", e => { e.preventDefault(); showToast(`${LINK_LABELS[key]}: coming soon`); });
  }
});

/* ---------------- boot sequence ---------------- */
(function boot() {
  const bootEl = document.getElementById("boot");
  const log = document.getElementById("boot-log");
  const name = document.getElementById("boot-name");
  let seen = false;
  try { seen = sessionStorage.getItem("booted") === "1"; } catch (e) {}

  const finish = () => {
    bootEl.classList.add("done");
    document.body.classList.remove("booting");
    try { sessionStorage.setItem("booted", "1"); } catch (e) {}
    startHeroReveal();
  };
  if (location.search.includes("noboot")) {
    // preview/screenshot mode: no boot screen, jump straight to the hash target
    document.documentElement.style.scrollBehavior = "auto";
    const t = location.hash.length > 1 && document.getElementById(location.hash.slice(1));
    if (location.search.includes("tall")) document.querySelector(".hero").style.minHeight = "900px";
    addEventListener("load", () => t && t.scrollIntoView());
  }
  if (reduceMotion || location.search.includes("noboot")) { bootEl.style.display = "none"; startHeroReveal(); return; }

  document.body.classList.add("booting");
  const lines = ["BOOTING PORTFOLIO...", "LOADING PROJECTS...", "LOADING ACHIEVEMENTS...", "LOADING SYSTEMS...", "READY."];
  let i = 0, done = false;
  const skip = () => { if (!done) { done = true; finish(); } };
  bootEl.querySelector(".boot-skip").addEventListener("click", skip);
  bootEl.addEventListener("click", skip);

  function next() {
    if (done) return;
    if (i < lines.length) {
      const last = i === lines.length - 1;
      log.innerHTML += `&gt; ${lines[i]}${last ? "" : ' <span class="ok">[ok]</span>'}\n`;
      i++;
      setTimeout(next, last ? 350 : 320);
    } else {
      name.classList.add("show");
      setTimeout(skip, 1100);
    }
  }
  setTimeout(next, 250);
})();

function startHeroReveal() {
  document.querySelectorAll(".hero .hero-copy > *").forEach((el, idx) => {
    el.animate(
      [{ opacity: 0, transform: "translateY(18px)" }, { opacity: 1, transform: "none" }],
      { duration: reduceMotion ? 1 : 800, delay: reduceMotion ? 0 : idx * 110, easing: "cubic-bezier(.2,.7,.2,1)", fill: "backwards" }
    );
  });
}

/* ---------------- particle field ---------------- */
(function field() {
  const cv = document.getElementById("field");
  const ctx = cv.getContext("2d");
  let W, H, pts = [], mouse = { x: -9999, y: -9999 };
  const DPR = Math.min(window.devicePixelRatio || 1, 2);

  function resize() {
    W = cv.width = innerWidth * DPR; H = cv.height = innerHeight * DPR;
    const n = Math.round(Math.min(80, (innerWidth * innerHeight) / 18000));
    pts = Array.from({ length: n }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - .5) * .18 * DPR, vy: (Math.random() - .5) * .18 * DPR,
      r: (Math.random() * 1.4 + .4) * DPR
    }));
  }
  function draw() {
    ctx.clearRect(0, 0, W, H);
    const max = 130 * DPR;
    for (let i = 0; i < pts.length; i++) {
      const p = pts[i];
      if (!reduceMotion) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
      }
      for (let j = i + 1; j < pts.length; j++) {
        const q = pts[j], dx = p.x - q.x, dy = p.y - q.y, d = Math.hypot(dx, dy);
        if (d < max) {
          ctx.strokeStyle = `rgba(122,162,247,${(1 - d / max) * .28})`;
          ctx.lineWidth = DPR * .8;
          ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
        }
      }
      const md = Math.hypot(p.x - mouse.x, p.y - mouse.y);
      const near = md < 160 * DPR;
      ctx.fillStyle = near ? "rgba(91,130,224,.8)" : "rgba(122,162,247,.4)";
      ctx.beginPath(); ctx.arc(p.x, p.y, near ? p.r * 1.6 : p.r, 0, Math.PI * 2); ctx.fill();
    }
    if (!reduceMotion) requestAnimationFrame(draw);
  }
  addEventListener("resize", () => { resize(); if (reduceMotion) draw(); });
  addEventListener("mousemove", e => { mouse.x = e.clientX * DPR; mouse.y = e.clientY * DPR; });
  resize(); draw();
})();

/* ---------------- cursor glow ---------------- */
(function glow() {
  const g = document.getElementById("cursor-glow");
  let x = -999, y = -999, tx = x, ty = y;
  addEventListener("mousemove", e => { tx = e.clientX; ty = e.clientY; });
  (function loop() {
    x += (tx - x) * .15; y += (ty - y) * .15;
    g.style.transform = `translate(${x}px, ${y}px)`;
    requestAnimationFrame(loop);
  })();
})();

/* ---------------- nav ---------------- */
(function nav() {
  const header = document.querySelector(".nav");
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  const onScroll = () => header.classList.toggle("scrolled", scrollY > 20);
  addEventListener("scroll", onScroll, { passive: true }); onScroll();

  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });
  links.addEventListener("click", e => {
    if (e.target.tagName === "A") { links.classList.remove("open"); toggle.setAttribute("aria-expanded", false); }
  });

  const map = {};
  links.querySelectorAll("a").forEach(a => (map[a.getAttribute("href").slice(1)] = a));
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting && map[en.target.id]) {
        Object.values(map).forEach(a => a.classList.remove("active"));
        map[en.target.id].classList.add("active");
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  document.querySelectorAll("main > section").forEach(s => io.observe(s));
})();

/* ---------------- reveal on scroll ---------------- */
(function reveal() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
    });
  }, { threshold: .12, rootMargin: "0px 0px -40px 0px" });
  document.querySelectorAll(".reveal").forEach((el, i) => {
    el.style.transitionDelay = `${(i % 4) * 70}ms`;
    io.observe(el);
  });
})();

/* ---------------- lifeline (scroll progress) ---------------- */
(function lifeline() {
  const bar = document.querySelector(".lifeline");
  const pct = bar.querySelector(".life-pct");
  const update = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    const p = max > 0 ? Math.round(Math.min(1, Math.max(0, scrollY / max)) * 100) : 100;
    bar.style.setProperty("--life", p + "%");
    bar.setAttribute("aria-valuenow", p);
    bar.classList.toggle("full", p >= 100);
    pct.textContent = p + "%";
  };
  addEventListener("scroll", update, { passive: true });
  addEventListener("resize", update);
  update();
})();

/* ---------------- lightbox ---------------- */
(function lightbox() {
  const lb = document.getElementById("lightbox");
  const img = lb.querySelector("img");
  const close = () => { lb.classList.remove("open"); lb.setAttribute("aria-hidden", "true"); };
  document.querySelectorAll(".zoom[data-full]").forEach(btn => btn.addEventListener("click", () => {
    img.src = btn.dataset.full;
    img.alt = btn.querySelector("img")?.alt || "";
    lb.classList.add("open"); lb.setAttribute("aria-hidden", "false");
  }));
  lb.addEventListener("click", close);
  addEventListener("keydown", e => { if (e.key === "Escape") close(); });
})();

/* ---------------- card spotlight ---------------- */
document.querySelectorAll(".proj").forEach(card => {
  card.addEventListener("pointermove", e => {
    const r = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${e.clientX - r.left}px`);
    card.style.setProperty("--my", `${e.clientY - r.top}px`);
  });
});

/* ---------------- terminals ---------------- */
function typeTerminal(el, script, speed = 22) {
  // script: array of [cls, text] segments; "\n" in text for new lines
  let started = false;
  const run = async () => {
    if (started) return; started = true;
    el.innerHTML = "";
    const caret = document.createElement("span"); caret.className = "caret";
    for (const [cls, text] of script) {
      const span = document.createElement("span");
      if (cls) span.className = cls;
      el.appendChild(span); el.appendChild(caret);
      if (reduceMotion || cls === "red") { span.textContent = text; continue; }
      for (const ch of text) {
        span.textContent += ch;
        await new Promise(r => setTimeout(r, ch === "\n" ? speed * 8 : speed));
      }
    }
  };
  new IntersectionObserver((en, o) => { if (en[0].isIntersecting) { run(); o.disconnect(); } }, { threshold: .4 }).observe(el);
}

typeTerminal(document.getElementById("exp-term"), [
  ["p", "$ "], ["", "cat internship.info\n"],
  ["k", "org     "], ["", "Indian Army · DGIS\n"],
  ["k", "unit    "], ["", "MISO\n"],
  ["k", "role    "], ["", "AI/ML Intern (IAIP) · Jun–Aug 2025\n"],
  ["k", "project "], ["", "SAMPURNA: multimodal AI pipeline\n"],
  ["k", "inputs  "], ["", "image · speech · structured data\n"],
  ["k", "impact  "], ["", "preprocessing effort −70%\n"],
  ["k", "env     "], ["", "air-gapped ✓\n"],
  ["k", "details "], ["red", "████████████"], ["m", "  // need-to-know\n"],
  ["p", "$ "], ["", "status\n"],
  ["", "learning in a mission-oriented setting ▸ "]
]);

typeTerminal(document.getElementById("lab-term"), [
  ["p", "$ "], ["", "whoami\n"],
  ["", "sukriti@ai-lab\n\n"],
  ["p", "$ "], ["", "current_focus\n"],
  ["k", "agentic_ai\ngenai\nmultimodal_ai\ncomputer_vision\n"],
  ["m", "# also: advanced dsa, automation\n\n"],
  ["p", "$ "], ["", "status\n"],
  ["", "building "]
]);

