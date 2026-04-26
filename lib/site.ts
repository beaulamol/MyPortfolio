/**
 * Replace with your details - only placeholders in this file.
 * Set NEXT_PUBLIC_SITE_URL for canonical URLs, Open Graph, and sitemap.
 */
export function getSiteUrl(): string {
  const u = process.env.NEXT_PUBLIC_SITE_URL;
  if (u && /^https?:\/\//.test(u)) return u.replace(/\/$/, "");
  return "https://example.com";
}

export const SITE = {
  name: "Beaulamol Sibi",
  title: "Senior Frontend & Mobile Engineer",
  tagline:
    "Building scalable, real-time, and high-performance applications across web, mobile, and IoT ecosystems.",
  email: "beaulasibi@gmail.com",
  linkedIn: "https://www.linkedin.com/in/beaula-sibi-907810b7/",
} as const;

export const SEO_KEYWORDS = [
  "Senior Frontend Engineer",
  "React Developer",
  "React Native Developer",
  "IoT Engineer",
  "TypeScript",
  "Next.js",
  "Real-time systems",
  "Mobile Engineer",
] as const;
