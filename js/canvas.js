/**
 * canvas.js — Animated Tech Background
 * Circuit board style with nodes, edges, binary rain and particles.
 * Fully responsive, adapts to dark/light theme.
 */

class TechCanvas {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext("2d");
        this.nodes = [];
        this.particles = [];
        this.binaryDrops = [];
        this.animId = null;
        this.isDark = document.documentElement.getAttribute("data-theme") !== "light";
        this.resize();
        this.initNodes();
        this.initParticles();
        this.initBinary();
        this.animate();
        window.addEventListener("resize", () => this.resize());
        // Re-init on theme change
        document.getElementById("themeToggle")?.addEventListener("click", () => {
            this.isDark = document.documentElement.getAttribute("data-theme") !== "light";
        });
    }

    resize() {
        this.W = this.canvas.width = window.innerWidth;
        this.H = this.canvas.height = window.innerHeight;
        this.initNodes();
        this.initBinary();
    }

    // ─── Circuit Nodes ───
    initNodes() {
        this.nodes = [];
        const count = Math.floor((this.W * this.H) / 22000);
        for (let i = 0; i < count; i++) {
            this.nodes.push({
                x: Math.random() * this.W,
                y: Math.random() * this.H,
                r: Math.random() * 2 + 1,
                vx: (Math.random() - 0.5) * 0.25,
                vy: (Math.random() - 0.5) * 0.25,
                pulse: Math.random() * Math.PI * 2,
                pulseSpeed: Math.random() * 0.02 + 0.005,
                type: Math.random() > 0.85 ? "hub" : "node"
            });
        }
    }

    // ─── Floating Particles ───
    initParticles() {
        this.particles = [];
        for (let i = 0; i < 30; i++) {
            this.particles.push({
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                r: Math.random() * 1.5 + 0.3,
                vx: (Math.random() - 0.5) * 0.4,
                vy: (Math.random() - 0.5) * 0.4,
                alpha: Math.random() * 0.4 + 0.1,
                color: Math.random() > 0.5 ? "cyan" : "violet"
            });
        }
    }

    // ─── Binary Rain Columns ───
    initBinary() {
        this.binaryDrops = [];
        const cols = Math.floor(this.W / 28);
        for (let i = 0; i < cols; i++) {
            if (Math.random() > 0.7) {
                this.binaryDrops.push({
                    x: i * 28 + 14,
                    y: Math.random() * -this.H,
                    speed: Math.random() * 0.8 + 0.2,
                    chars: Array.from({ length: Math.floor(Math.random() * 8 + 4) }, () =>
                        Math.random() > 0.5 ? "1" : "0"
                    ),
                    alpha: Math.random() * 0.06 + 0.02,
                    fontSize: Math.random() * 4 + 9
                });
            }
        }
    }

    // ─── Colors based on theme ───
    get colors() {
        return this.isDark
            ? { node: "rgba(0,212,255,", hub: "rgba(167,139,250,", line: "rgba(0,212,255,", particle: { cyan: "rgba(0,212,255,", violet: "rgba(167,139,250," }, binary: "rgba(0,212,255," }
            : { node: "rgba(0,100,160,", hub: "rgba(100,60,180,", line: "rgba(0,100,160,", particle: { cyan: "rgba(0,100,160,", violet: "rgba(100,60,180," }, binary: "rgba(0,100,160," };
    }

    // ─── Draw Circuit Nodes ───
    drawNodes() {
        const c = this.colors;
        const maxDist = 120;

        // Connections
        for (let i = 0; i < this.nodes.length; i++) {
            for (let j = i + 1; j < this.nodes.length; j++) {
                const dx = this.nodes[i].x - this.nodes[j].x;
                const dy = this.nodes[i].y - this.nodes[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < maxDist) {
                    const alpha = (1 - dist / maxDist) * 0.15;
                    // Right-angle circuit style lines
                    this.ctx.beginPath();
                    this.ctx.strokeStyle = c.line + alpha + ")";
                    this.ctx.lineWidth = 0.8;
                    const midX = (this.nodes[i].x + this.nodes[j].x) / 2;
                    this.ctx.moveTo(this.nodes[i].x, this.nodes[i].y);
                    this.ctx.lineTo(midX, this.nodes[i].y);
                    this.ctx.lineTo(midX, this.nodes[j].y);
                    this.ctx.lineTo(this.nodes[j].x, this.nodes[j].y);
                    this.ctx.stroke();
                }
            }
        }

        // Nodes
        for (const n of this.nodes) {
            n.pulse += n.pulseSpeed;
            const pulseFactor = Math.sin(n.pulse) * 0.5 + 0.5;

            if (n.type === "hub") {
                // Hub node — bigger, glowing square
                this.ctx.save();
                this.ctx.translate(n.x, n.y);
                this.ctx.rotate(n.pulse * 0.3);
                const size = n.r * 3 + pulseFactor * 2;
                this.ctx.fillStyle = c.hub + (0.5 + pulseFactor * 0.3) + ")";
                this.ctx.shadowColor = c.hub + "0.8)";
                this.ctx.shadowBlur = 8 * pulseFactor;
                this.ctx.fillRect(-size / 2, -size / 2, size, size);
                this.ctx.restore();
            } else {
                // Normal node — circle
                this.ctx.beginPath();
                this.ctx.arc(n.x, n.y, n.r + pulseFactor * 0.8, 0, Math.PI * 2);
                this.ctx.fillStyle = c.node + (0.3 + pulseFactor * 0.4) + ")";
                this.ctx.shadowColor = c.node + "0.6)";
                this.ctx.shadowBlur = 4 * pulseFactor;
                this.ctx.fill();
            }

            // Move nodes
            n.x += n.vx;
            n.y += n.vy;
            if (n.x < 0 || n.x > this.W) n.vx *= -1;
            if (n.y < 0 || n.y > this.H) n.vy *= -1;
        }
    }

    // ─── Draw Particles ───
    drawParticles() {
        const c = this.colors;
        for (const p of this.particles) {
            const col = p.color === "cyan" ? c.particle.cyan : c.particle.violet;
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            this.ctx.fillStyle = col + p.alpha + ")";
            this.ctx.fill();
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0) p.x = this.W;
            if (p.x > this.W) p.x = 0;
            if (p.y < 0) p.y = this.H;
            if (p.y > this.H) p.y = 0;
        }
    }

    // ─── Draw Binary Rain ───
    drawBinary() {
        const c = this.colors;
        for (const drop of this.binaryDrops) {
            this.ctx.font = `${drop.fontSize}px monospace`;
            drop.chars.forEach((ch, i) => {
                const yPos = drop.y + i * (drop.fontSize + 4);
                const fadeAlpha = i === 0 ? drop.alpha * 2 : drop.alpha * (1 - i / drop.chars.length);
                this.ctx.fillStyle = c.binary + Math.max(0, fadeAlpha) + ")";
                this.ctx.fillText(ch, drop.x, yPos);
                // Randomly flip bits
                if (Math.random() > 0.98) drop.chars[i] = Math.random() > 0.5 ? "1" : "0";
            });
            drop.y += drop.speed;
            if (drop.y > this.H) drop.y = -drop.chars.length * 16;
        }
    }

    // ─── Main Animation Loop ───
    animate() {
        this.ctx.clearRect(0, 0, this.W, this.H);
        this.drawBinary();
        this.drawNodes();
        this.drawParticles();
        this.animId = requestAnimationFrame(() => this.animate());
    }

    destroy() {
        if (this.animId) cancelAnimationFrame(this.animId);
    }
}
