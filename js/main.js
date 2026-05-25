/**
 * main.js — App Entry Point
 * Renders all sections dynamically from DATA (data.js)
 * Initializes all modules: canvas, animations, nav, cursor
 */

// ═══════════════════════════════════════════════
// RENDER FUNCTIONS
// ═══════════════════════════════════════════════

// ─── Hero Section ───
function renderHero() {
    const p = DATA.personal;

    document.getElementById("hero-name-1").textContent = p.name.split(" ")[0];
    document.getElementById("hero-name-2").textContent = p.name.split(" ")[1] + ".";
    document.getElementById("hero-college").textContent = `${p.degree} · ${p.college}`;
    document.getElementById("hero-desc").innerHTML = p.about;

    // Social links
    const linksEl = document.getElementById("hero-links");
    linksEl.innerHTML = DATA.connect.map(c => `
    <a class="soc-link" href="${c.url}" target="_blank" rel="noopener" title="${c.label}">
      <span>${c.icon}</span>
    </a>
  `).join("");

    // Stats
    const statsEl = document.getElementById("hero-stats");
    statsEl.innerHTML = DATA.stats.map(s => `
    <div class="stat">
      <div class="stat-num counter" data-target="${s.number}" data-suffix="${s.suffix}">0</div>
      <div class="stat-label">${s.label}</div>
    </div>
  `).join("");
}

// ─── About Section ───
function renderAbout() {
    document.getElementById("about-text").textContent = DATA.personal.about;
}

// ─── Who Am I Section ───
function renderWhoAmI() {
    const el = document.getElementById("who-list");
    el.innerHTML = DATA.personal.whoAmI.map(item => `
    <li class="who-item stagger rev">
      <span class="who-arrow">▸</span>
      <span>${item}</span>
    </li>
  `).join("");
}

// ─── Hobbies Section ───
function renderHobbies() {
    const el = document.getElementById("hobbies-grid");
    el.innerHTML = DATA.personal.hobbies.map(h => `
    <div class="hobby-tag stagger">
      <span class="hobby-icon">${h.icon}</span>
      <span>${h.label}</span>
    </div>
  `).join("");
}

// ─── Projects Section ───
function renderProjects() {
    const el = document.getElementById("projects-grid");
    el.innerHTML = DATA.projects.map(p => `
    <div class="proj-card tilt-card rev" data-color="${p.color}">
      <span class="proj-num">${p.id}</span>
      <div class="proj-tags">
        ${p.tags.map(t => `<span class="ptag ptag-${p.color}">${t}</span>`).join("")}
      </div>
      <h3 class="proj-name">${p.name}</h3>
      <p class="proj-tagline">${p.tagline}</p>
      <p class="proj-desc">${p.description}</p>
      <div class="proj-stack">
        ${p.stack.map(s => `<span class="stk-tag">${s}</span>`).join("")}
      </div>
      <div class="proj-links">
        ${p.github !== "#" ? `<a class="proj-btn proj-btn-ghost" href="${p.github}" target="_blank" rel="noopener">⌥ GitHub</a>` : ""}
        ${p.live !== "#" ? `<a class="proj-btn proj-btn-primary" href="${p.live}" target="_blank" rel="noopener">↗ Live Demo</a>` : ""}
      </div>
    </div>
  `).join("");
}

// ─── Skills Section ───
function renderSkills() {
    const el = document.getElementById("skills-grid");
    el.innerHTML = DATA.skills.map(cat => `
    <div class="skill-cat-card rev tilt-card">
      <div class="skill-cat-header">
        <span class="skill-cat-icon">${cat.icon}</span>
        <span class="skill-cat-name">${cat.category}</span>
      </div>
      <div class="skill-tags">
        ${cat.items.map(item => `<span class="skill-tag">${item}</span>`).join("")}
      </div>
    </div>
  `).join("");
}

// ─── Education Section ───
function renderEducation() {
    const eduEl = document.getElementById("edu-list");
    const expEl = document.getElementById("exp-list");

    eduEl.innerHTML = DATA.education.map(e => `
    <div class="timeline-item rev" data-color="${e.color}">
      <div class="timeline-dot">${e.icon}</div>
      <div class="timeline-content">
        <div class="tl-period">${e.period}</div>
        <h3 class="tl-title">${e.degree}</h3>
        <div class="tl-org">${e.institution}</div>
        <div class="tl-location">📍 ${e.location}</div>
        <p class="tl-detail">${e.details}</p>
      </div>
    </div>
  `).join("");

    expEl.innerHTML = DATA.experience.map(e => `
    <div class="timeline-item rev" data-color="${e.color}">
      <div class="timeline-dot">${e.icon}</div>
      <div class="timeline-content">
        <div class="tl-period">${e.period}</div>
        <h3 class="tl-title">${e.role}</h3>
        <div class="tl-org">${e.org}</div>
        <ul class="tl-points">
          ${e.points.map(pt => `<li>${pt}</li>`).join("")}
        </ul>
      </div>
    </div>
  `).join("");
}

// ─── Certificates Section ───
function renderCertificates() {
    const el = document.getElementById("certs-grid");
    el.innerHTML = DATA.certificates.map((cert, i) => `
    <div class="cert-card rev tilt-card" style="transition-delay:${i * 60}ms" data-color="${cert.color}">
      <div class="cert-icon">${cert.icon}</div>
      <div class="cert-badge">${cert.badge}</div>
      <h3 class="cert-name">${cert.name}</h3>
      <div class="cert-meta">
        <span class="cert-issuer">${cert.issuer}</span>
        <span class="cert-date">📅 ${cert.date}</span>
      </div>
    </div>
  `).join("");
}

// ─── Connect Section ───
function renderConnect() {
    const el = document.getElementById("connect-grid");
    el.innerHTML = DATA.connect.map(c => `
    <a class="connect-card tilt-card rev" href="${c.url}" target="_blank" rel="noopener" data-color="${c.color}">
      <span class="connect-icon">${c.icon}</span>
      <span class="connect-label">${c.label}</span>
      <span class="connect-arrow">↗</span>
    </a>
  `).join("");

    // Email display
    const emailEl = document.getElementById("contact-email");
    if (emailEl) emailEl.textContent = DATA.personal.email;
}

// ═══════════════════════════════════════════════
// INIT — runs when DOM is ready
// ═══════════════════════════════════════════════
document.addEventListener("DOMContentLoaded", () => {

    // 1. Render all sections
    renderHero();
    renderAbout();
    renderWhoAmI();
    renderHobbies();
    renderProjects();
    renderSkills();
    renderEducation();
    renderCertificates();
    renderConnect();

    // 2. Init theme + nav
    initTheme();
    initNav();
    initCursor();

    // 3. Init animations
    initScrollReveal();
    initTyping();
    initCounters();
    initSkillBars();
    initScrollProgress();
    initTilt();

    // 4. Init canvas background
    new TechCanvas("tech-canvas");

    // 5. Section tracker for nav active state
    initSectionTracker((id) => {
        if (window.setActiveNavLink) window.setActiveNavLink(id);
    });

    // 6. Re-init cursor hover after dynamic render
    setTimeout(() => {
        const hoverEls = document.querySelectorAll("a, button, .tilt-card, .hobby-tag, .cert-card, .proj-card, .skill-tag, .nav-link, .connect-card");
        const cur = document.getElementById("cursor");
        const ring = document.getElementById("cursor-ring");
        hoverEls.forEach((el) => {
            el.addEventListener("mouseenter", () => { cur?.classList.add("big"); ring?.classList.add("big"); });
            el.addEventListener("mouseleave", () => { cur?.classList.remove("big"); ring?.classList.remove("big"); });
        });
    }, 300);

});
