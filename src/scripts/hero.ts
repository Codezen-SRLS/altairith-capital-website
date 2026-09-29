// Hero canvas: the Altairith emblem assembles from a star field into the Aquila
// constellation, with Altair flaring at the eagle's eye. Ported from the v2 design
// ("assemble" variant, constellation + labels on; no pointer parallax).

type Pt = {
    u: number;
    v: number;
    gold: boolean;
    edge: boolean;
    sx: number;
    sy: number;
    del: number;
    ph: number;
    sp: number;
    r: number;
};
type Motion = "full" | "off";

const EW = 1025;
const EH = 1140;
const N: Record<string, [number, number]> = {
    crest: [238, 370], nape: [305, 405], wingL: [98, 568], crown: [440, 352], brow: [630, 405],
    beakTop: [748, 490], beakTip: [735, 540], throat: [640, 515], neck: [560, 600], chest: [600, 730],
    plume1: [800, 830], root2: [557, 838], plume2: [748, 1000], inner: [445, 670], inner2: [430, 860],
    tail: [565, 1135], back: [382, 528], back2: [285, 800], back3: [200, 912], star: [511, 215],
};
const L: [string, string][] = [
    ["wingL", "nape"], ["nape", "crest"], ["crest", "crown"], ["crown", "brow"], ["brow", "beakTop"],
    ["beakTop", "beakTip"], ["beakTip", "throat"], ["throat", "neck"], ["neck", "chest"], ["chest", "plume1"],
    ["chest", "root2"], ["root2", "plume2"], ["inner", "inner2"], ["inner2", "tail"], ["back", "back2"],
    ["back2", "back3"], ["back2", "inner2"], ["nape", "back"], ["back", "inner"],
];
const EYE: [number, number] = [588, 426];
const T = { lines: 2.4, flare: 3.1 };

const lcg = (seed: number) => () => (seed = (seed * 16807) % 2147483647) / 2147483647;
const ease = (x: number) => (x <= 0 ? 0 : x >= 1 ? 1 : 1 - Math.pow(1 - x, 3));
const gold = (a: number) => `rgba(193,157,106,${a})`;
const white = (a: number) => `rgba(244,242,238,${a})`;

function sample(img: HTMLImageElement) {
    const SW = 210;
    const SH = Math.round((SW * img.height) / img.width);
    const o = document.createElement("canvas");
    o.width = SW;
    o.height = SH;
    const x = o.getContext("2d", { willReadFrequently: true })!;
    x.drawImage(img, 0, 0, SW, SH);
    const d = x.getImageData(0, 0, SW, SH).data;
    const ink = (i: number, j: number) => i >= 0 && j >= 0 && i < SW && j < SH && d[(j * SW + i) * 4 + 3] > 120;
    const rnd = lcg(11);
    const pts: Pt[] = [];
    for (let j = 0; j < SH; j++)
        for (let i = 0; i < SW; i++) {
            if (!ink(i, j)) continue;
            const k = (j * SW + i) * 4;
            const isGold = d[k] > 120;
            const edge = !ink(i - 2, j) || !ink(i + 2, j) || !ink(i, j - 2) || !ink(i, j + 2);
            if (rnd() > (edge ? 0.55 : isGold ? 0.14 : 0.11)) continue;
            pts.push({
                u: (i + rnd()) / SW,
                v: (j + rnd()) / SH,
                gold: isGold,
                edge,
                sx: rnd(),
                sy: rnd(),
                del: (j / SH) * 0.9 + rnd() * 0.7,
                ph: rnd() * 6.28,
                sp: 0.6 + rnd() * 1.8,
                r: edge ? 0.7 + rnd() * 0.6 : 0.4 + rnd() * 0.6,
            });
        }
    return { pts, aspect: img.width / img.height };
}

export function initHero(canvas: HTMLCanvasElement, src: string) {
    const maybeCtx = canvas.getContext("2d");
    if (!maybeCtx) return;
    const ctx: CanvasRenderingContext2D = maybeCtx;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)");
    const motion = (): Motion => (reduce.matches ? "off" : "full");

    const img = new Image();
    img.decoding = "async";
    img.onload = () => start(img);
    img.src = src;

    function start(img: HTMLImageElement) {
        const { pts, aspect } = sample(img);
        const host = canvas.parentElement!;
        // On narrow screens the emblem sits in the free band above the hero copy.
        const copy = host.parentElement?.querySelector<HTMLElement>(".hero__copy") ?? null;
        let W = 0, H = 0, dpr = 1, bandTop = 0, bandBottom = 0;

        const rnd = lcg(5);
        const field = Array.from({ length: 380 }, () => ({
            x: rnd(), y: rnd(), z: 0.15 + rnd() * 0.85,
            r: rnd() < 0.94 ? 0.3 + rnd() * 0.6 : 1 + rnd() * 0.7,
            ph: rnd() * 6.28, sp: 0.4 + rnd() * 1.5,
        }));

        const draw = (t: number) => {
            const mo = motion();
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            const wide = W > 900;
            const band = bandBottom - bandTop;
            const eh = wide
                ? Math.min(H * 0.7, (W * 0.5) / aspect)
                : Math.min(band > 0 ? band : H * 0.34, H * 0.42, (W * 0.62) / aspect);
            const ew = eh * aspect;
            const cx = wide ? W * 0.7 : W * 0.5;
            const cy = wide ? H * 0.5 : band > 0 ? bandTop + band / 2 : Math.max(H * 0.28, 96 + eh / 2);
            const x0 = cx - ew / 2, y0 = cy - eh / 2;
            const P = ([px, py]: [number, number]): [number, number] => [x0 + (px / EW) * ew, y0 + (py / EH) * eh];

            ctx.fillStyle = "#000B33";
            ctx.fillRect(0, 0, W, H);
            const [ex, ey] = P(EYE);
            const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(W, H) * 0.65);
            g.addColorStop(0, "rgba(27,74,154,0.38)");
            g.addColorStop(0.45, "rgba(0,23,97,0.25)");
            g.addColorStop(1, "rgba(0,11,51,0)");
            ctx.fillStyle = g;
            ctx.fillRect(0, 0, W, H);

            // background star field
            const drift = mo === "off" ? 0 : t * 3;
            for (const p of field) {
                const px = (((p.x * W - drift * p.z) % W) + W) % W;
                const py = p.y * H;
                const tw = mo === "off" ? 0.7 : 0.5 + 0.5 * Math.sin(t * p.sp + p.ph);
                ctx.fillStyle = `rgba(214,224,255,${(0.15 + 0.55 * tw) * p.z * ease(t / 1.2 + p.z * 0.4)})`;
                ctx.beginPath();
                ctx.arc(px, py, p.r, 0, 6.283);
                ctx.fill();
            }

            // emblem stars
            for (const p of pts) {
                const tx = x0 + p.u * ew, ty = y0 + p.v * eh;
                const k = ease((t - 0.3 - p.del) / 1.9);
                const sx = p.sx * W, sy = p.sy * H, bend = Math.sin(k * Math.PI) * 40 * (p.sx - 0.5);
                const x = sx + (tx - sx) * k + bend, y = sy + (ty - sy) * k;
                const tw = mo === "off" ? 0.85 : 0.6 + 0.4 * Math.sin(t * p.sp + p.ph);
                const a = Math.min(1, (p.edge ? 0.9 : 0.5) * tw * (0.25 + 0.75 * k));
                ctx.fillStyle = p.gold ? gold(a) : `rgba(214,224,255,${a})`;
                const r = p.r * (1 + (1 - k) * 0.6);
                ctx.fillRect(x - r / 2, y - r / 2, r, r);
            }

            // constellation figure
            L.forEach(([a, b], i) => {
                const p = ease((t - T.lines - i * 0.09) / 0.8);
                if (p <= 0) return;
                const [x1, y1] = P(N[a]), [x2, y2] = P(N[b]);
                ctx.strokeStyle = white(0.5);
                ctx.lineWidth = 0.9;
                ctx.beginPath();
                ctx.moveTo(x1, y1);
                ctx.lineTo(x1 + (x2 - x1) * p, y1 + (y2 - y1) * p);
                ctx.stroke();
            });
            Object.values(N).forEach((n, i) => {
                const p = ease((t - T.lines + 0.2 - i * 0.05) / 0.6);
                if (p <= 0) return;
                const [x, y] = P(n);
                const gr = ctx.createRadialGradient(x, y, 0, x, y, 10);
                gr.addColorStop(0, `rgba(230,236,255,${0.55 * p})`);
                gr.addColorStop(1, "rgba(230,236,255,0)");
                ctx.fillStyle = gr;
                ctx.beginPath();
                ctx.arc(x, y, 10, 0, 6.283);
                ctx.fill();
                ctx.fillStyle = white(p);
                ctx.beginPath();
                ctx.arc(x, y, 1.8, 0, 6.283);
                ctx.fill();
            });

            // Altair: the eagle's eye
            const fp = ease((t - T.flare) / 1.4);
            if (fp <= 0) return;
            const pulse = mo === "off" ? 1 : 1 + 0.08 * Math.sin(t * 1.6);
            const unit = eh / 30;
            ctx.strokeStyle = gold(0.55 * fp);
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.arc(ex, ey, unit * 2.2, -Math.PI / 2, -Math.PI / 2 + 6.283 * fp);
            ctx.stroke();
            const rot = mo === "off" ? 0 : t * 0.1;
            for (let k = 0; k < 24; k++) {
                const ang = rot + (k * Math.PI) / 12, len = k % 6 === 0 ? 6 : 2.5, R = unit * 2.2;
                ctx.strokeStyle = gold(0.6 * fp);
                ctx.beginPath();
                ctx.moveTo(ex + Math.cos(ang) * R, ey + Math.sin(ang) * R);
                ctx.lineTo(ex + Math.cos(ang) * (R + len), ey + Math.sin(ang) * (R + len));
                ctx.stroke();
            }
            const R = unit * 3.2 * pulse;
            const gr = ctx.createRadialGradient(ex, ey, 0, ex, ey, R);
            gr.addColorStop(0, `rgba(255,255,255,${fp})`);
            gr.addColorStop(0.1, `rgba(214,226,255,${0.6 * fp})`);
            gr.addColorStop(0.45, `rgba(120,150,255,${0.14 * fp})`);
            gr.addColorStop(1, "rgba(120,150,255,0)");
            ctx.fillStyle = gr;
            ctx.beginPath();
            ctx.arc(ex, ey, R, 0, 6.283);
            ctx.fill();
            const spike = (ang: number, len: number, w: number, a: number) => {
                ctx.save();
                ctx.translate(ex, ey);
                ctx.rotate(ang);
                const lg = ctx.createLinearGradient(-len, 0, len, 0);
                lg.addColorStop(0, "rgba(220,230,255,0)");
                lg.addColorStop(0.5, `rgba(245,248,255,${a})`);
                lg.addColorStop(1, "rgba(220,230,255,0)");
                ctx.fillStyle = lg;
                ctx.beginPath();
                ctx.moveTo(-len, 0);
                ctx.lineTo(0, -w);
                ctx.lineTo(len, 0);
                ctx.lineTo(0, w);
                ctx.closePath();
                ctx.fill();
                ctx.restore();
            };
            const sl = unit * 5 * fp * pulse;
            spike(0, sl, 1.4, 0.9 * fp);
            spike(Math.PI / 2, sl, 1.4, 0.9 * fp);
            spike(Math.PI / 4, sl * 0.38, 0.8, 0.45 * fp);
            spike(-Math.PI / 4, sl * 0.38, 0.8, 0.45 * fp);
            ctx.fillStyle = "#fff";
            ctx.beginPath();
            ctx.arc(ex, ey, 2.8, 0, 6.283);
            ctx.fill();

            const la = ease((t - T.flare - 0.7) / 1);
            const lx = Math.min(x0 + ew * 0.66, W - 130), ly = Math.max(y0 - 18, wide ? 118 : 84);
            ctx.strokeStyle = gold(0.7 * la);
            ctx.beginPath();
            ctx.moveTo(ex, ey - unit * 2.6);
            ctx.lineTo(ex, ly);
            ctx.lineTo(ex + (Math.min(lx + 150, W - 12) - ex) * la, ly);
            ctx.stroke();
            ctx.fillStyle = gold(la);
            ctx.font = '500 11px "Archivo", sans-serif';
            ctx.fillText("α AQL — ALTAIR", lx, ly - 10);
        };

        // ---- loop control: pause offscreen / hidden tab, static frame for reduced motion
        const t0 = performance.now();
        let raf = 0, visible = true;
        const running = () => visible && !document.hidden && motion() !== "off";
        const loop = () => {
            draw((performance.now() - t0) / 1000);
            raf = running() ? requestAnimationFrame(loop) : 0;
        };
        const kick = () => {
            if (motion() === "off") {
                cancelAnimationFrame(raf);
                raf = 0;
                draw(12);
            } else if (!raf && running()) raf = requestAnimationFrame(loop);
        };
        const resize = () => {
            const r = host.getBoundingClientRect();
            dpr = Math.min(2, devicePixelRatio || 1);
            W = r.width;
            H = r.height;
            canvas.width = Math.round(W * dpr);
            canvas.height = Math.round(H * dpr);
            if (copy) {
                // leave room above for the header + "α AQL — ALTAIR" label, and a gap above the copy
                bandTop = 116;
                bandBottom = copy.getBoundingClientRect().top - r.top - 28;
                if (bandBottom - bandTop < 140) bandTop = bandBottom = 0;
            }
            if (!raf) draw(motion() === "off" ? 12 : (performance.now() - t0) / 1000);
        };

        const ro = new ResizeObserver(resize);
        ro.observe(host);
        if (copy) ro.observe(copy);
        new IntersectionObserver(([e]) => {
            visible = e.isIntersecting;
            kick();
        }).observe(host);
        document.addEventListener("visibilitychange", kick);
        reduce.addEventListener("change", kick);
        resize();
        kick();
    }
}
