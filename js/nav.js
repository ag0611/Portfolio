/**
 * nav.js — Navbar Logic
 * Active link tracking, smooth scroll, hide/show on scroll, mobile toggle
 */

function initNav() {
    const navbar = document.getElementById("navbar");
    const navLinks = document.querySelectorAll(".nav-link");
    let lastScrollY = 0;
    let ticking = false;

    // ─── Smooth Scroll on nav click ───
    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").replace("#", "");
            const target = document.getElementById(targetId);
            if (target) {
                target.scrollIntoView({ behavior: "smooth", block: "start" });
            }
            // Close mobile menu if open
            navbar.classList.remove("menu-open");
        });
    });

    // ─── Active state on scroll ───
    function setActiveLink(sectionId) {
        navLinks.forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === `#${sectionId}`);
        });
    }

    // ─── Navbar hide on scroll down / show on scroll up ───
    function handleNavbarScroll() {
        const currentY = window.scrollY;
        if (currentY < 80) {
            navbar.classList.remove("nav-hidden");
        } else if (currentY > lastScrollY + 8) {
            navbar.classList.add("nav-hidden");
        } else if (currentY < lastScrollY - 8) {
            navbar.classList.remove("nav-hidden");
        }
        lastScrollY = currentY;
        ticking = false;
    }

    window.addEventListener("scroll", () => {
        if (!ticking) {
            requestAnimationFrame(handleNavbarScroll);
            ticking = true;
        }
    });

    // ─── Mobile hamburger toggle ───
    const hamburger = document.getElementById("hamburger");
    if (hamburger) {
        hamburger.addEventListener("click", () => {
            navbar.classList.toggle("menu-open");
        });
    }

    // Expose setActiveLink so animations.js section tracker can call it
    window.setActiveNavLink = setActiveLink;
}

// ─── Theme Toggle ───
function initTheme() {
    const btn = document.getElementById("themeToggle");
    const html = document.documentElement;
    const saved = localStorage.getItem("ag-theme") || "dark";
    html.setAttribute("data-theme", saved);
    btn.textContent = saved === "dark" ? "☀️" : "🌙";

    btn.addEventListener("click", () => {
        const current = html.getAttribute("data-theme");
        const next = current === "dark" ? "light" : "dark";
        html.setAttribute("data-theme", next);
        btn.textContent = next === "dark" ? "☀️" : "🌙";
        localStorage.setItem("ag-theme", next);
    });
}

// ─── Custom Cursor ───
function initCursor() {
    const cur = document.getElementById("cursor");
    const ring = document.getElementById("cursor-ring");
    if (!cur || !ring) return;

    let mx = 0, my = 0, rx = 0, ry = 0;

    document.addEventListener("mousemove", (e) => {
        mx = e.clientX;
        my = e.clientY;
        cur.style.left = mx + "px";
        cur.style.top = my + "px";
    });

    function animateRing() {
        rx += (mx - rx) * 0.11;
        ry += (my - ry) * 0.11;
        ring.style.left = rx + "px";
        ring.style.top = ry + "px";
        requestAnimationFrame(animateRing);
    }
    animateRing();

    // Hover effect on interactive elements
    const hoverEls = document.querySelectorAll("a, button, .tilt-card, .hobby-tag, .cert-card, .proj-card, .skill-tag, .nav-link");
    hoverEls.forEach((el) => {
        el.addEventListener("mouseenter", () => {
            cur.classList.add("big");
            ring.classList.add("big");
        });
        el.addEventListener("mouseleave", () => {
            cur.classList.remove("big");
            ring.classList.remove("big");
        });
    });

    // Hide cursor when leaving window
    document.addEventListener("mouseleave", () => {
        cur.style.opacity = "0";
        ring.style.opacity = "0";
    });
    document.addEventListener("mouseenter", () => {
        cur.style.opacity = "1";
        ring.style.opacity = "1";
    });
}
