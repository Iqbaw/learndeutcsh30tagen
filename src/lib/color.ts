export type RGB = [number, number, number];
export type HSL = { h: number; s: number; l: number };

export function hexToRgb(hex: string): RGB | null {
  const m = hex.replace("#", "").trim();
  if (![3, 6].includes(m.length)) return null;
  const full = m.length === 3 ? m.split("").map((c) => c + c).join("") : m;
  const n = parseInt(full, 16);
  if (Number.isNaN(n)) return null;
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

export function rgbToHex([r, g, b]: RGB): string {
  const to = (v: number) =>
    Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, "0");
  return `#${to(r)}${to(g)}${to(b)}`;
}

export function rgbToHsl([r, g, b]: RGB): HSL {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      default:
        h = (r - g) / d + 4;
    }
    h /= 6;
  }
  return { h: h * 360, s: s * 100, l: l * 100 };
}

export function hslToRgb({ h, s, l }: HSL): RGB {
  h /= 360;
  s /= 100;
  l /= 100;
  if (s === 0) {
    const v = Math.round(l * 255);
    return [v, v, v];
  }
  const hue2rgb = (p: number, q: number, t: number) => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  };
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  return [
    Math.round(hue2rgb(p, q, h + 1 / 3) * 255),
    Math.round(hue2rgb(p, q, h) * 255),
    Math.round(hue2rgb(p, q, h - 1 / 3) * 255),
  ];
}

const SCALE_STEPS: { name: number; l: number }[] = [
  { name: 50, l: 96 },
  { name: 100, l: 90 },
  { name: 200, l: 82 },
  { name: 300, l: 71 },
  { name: 400, l: 60 },
  { name: 500, l: 50 },
  { name: 600, l: 42 },
  { name: 700, l: 34 },
  { name: 800, l: 26 },
  { name: 900, l: 18 },
];

export interface Swatch {
  name: number;
  hex: string;
}

export function generateScale(baseHex: string): Swatch[] {
  const rgb = hexToRgb(baseHex);
  if (!rgb) return [];
  const { h, s } = rgbToHsl(rgb);
  return SCALE_STEPS.map((step) => ({
    name: step.name,
    hex: rgbToHex(hslToRgb({ h, s: Math.min(100, Math.max(8, s)), l: step.l })),
  }));
}

export function complementary(baseHex: string): string {
  const rgb = hexToRgb(baseHex);
  if (!rgb) return baseHex;
  const hsl = rgbToHsl(rgb);
  return rgbToHex(hslToRgb({ ...hsl, h: (hsl.h + 180) % 360 }));
}

function luminance([r, g, b]: RGB): number {
  const a = [r, g, b].map((v) => {
    const c = v / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2];
}

export function contrastRatio(fg: string, bg: string): number | null {
  const a = hexToRgb(fg);
  const b = hexToRgb(bg);
  if (!a || !b) return null;
  const l1 = luminance(a);
  const l2 = luminance(b);
  const [hi, lo] = l1 > l2 ? [l1, l2] : [l2, l1];
  return (hi + 0.05) / (lo + 0.05);
}

/** Pick black or white text for best contrast on a background. */
export function readableText(bgHex: string): string {
  const onWhite = contrastRatio(bgHex, "#ffffff") ?? 1;
  const onBlack = contrastRatio(bgHex, "#000000") ?? 1;
  return onBlack >= onWhite ? "#0B1020" : "#ffffff";
}
