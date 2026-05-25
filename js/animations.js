/**
 * animations.js — Scroll Reveal, Typing Effect, Counter Animations
 */

// ─── Scroll Reveal ───
function initScrollReveal() {
    const elements = document.querySelectorAll(".rev");
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("in");
                    // Staggered children
                    const children = entry.target.querySelectorAll(".stagger");
                    children.forEach((child, i) => {
                        setTimeout(() => child.classList.add("in"), i * 80);
                    });
                }
            });
        },
        { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    elements.forEach((el) => observer.observe(el));
}

// ─── Typing Effect ───
function initTyping() {
    const el = document.getElementById("typed-text");
    if (!el) return;

    const phrases = [
        "Full-Stack Developer",
        "AI Enthusiast",
        "Cloud Certified",
        "Problem Solver",
        "GTBIT — IT 2025"
    ];

    let phraseIdx = 0;
    let charIdx = 0;
    let deleting = false;
    let pause = false;

    function type() {
        const current = phrases[phraseIdx];
        if (pause) {
            setTimeout(type, 1400);
            pause = false;
            return;
        }
        if (!deleting) {
            el.textContent = current.slice(0, charIdx + 1);
            charIdx++;
            if (charIdx === current.length) {
                pause = true;
                deleting = true;
                setTimeout(type, 50);
                return;
            }
        } else {
            el.textContent = current.slice(0, charIdx - 1);
            charIdx--;
            if (charIdx === 0) {
                deleting = false;
                phraseIdx = (phraseIdx + 1) % phrases.length;
            }
        }
        setTimeout(type, deleting ? 45 : 90);
    }
    type();
}

// ─── Number Counter ───
function animateCounter(el) {
    const target = parseInt(el.dataset.target, 10);
    const suffix = el.dataset.suffix || "";
    const duration = 1600;
    const start = performance.now();

    function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(eased * target);
        el.textContent = current.toLocaleString() + suffix;
        if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
}

function initCounters() {
    const counters = document.querySelectorAll(".counter");
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.5 }
    );
    counters.forEach((c) => observer.observe(c));
}

// ─── Skill Bar Fill ───
function initSkillBars() {
    const bars = document.querySelectorAll(".skill-fill");
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const width = entry.target.dataset.width || "80%";
                    setTimeout(() => {
                        entry.target.style.width = width;
                    }, 200);
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.3 }
    );
    bars.forEach((b) => observer.observe(b));
}

// ─── Section Active Highlight (for nav) ───
function initSectionTracker(onSectionChange) {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && entry.intersectionRatio >= 0.4) {
                    onSectionChange(entry.target.id);
                }
            });
        },
        { threshold: 0.4 }
    );
    sections.forEach((s) => observer.observe(s));
}

// ─── Card 3D Tilt on mouse ───
function initTilt() {
    document.querySelectorAll(".tilt-card").forEach((card) => {
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            card.style.transform = `translateY(-6px) perspective(900px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg)`;
        });
        card.addEventListener("mouseleave", () => {
            card.style.transform = "";
        });
    });
}

// ─── Scroll Progress Bar ───
function initScrollProgress() {
    const bar = document.getElementById("scroll-bar");
    if (!bar) return;
    window.addEventListener("scroll", () => {
        const scrolled = document.documentElement.scrollTop;
        const total = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.width = (scrolled / total) * 100 + "%";
    });
}
