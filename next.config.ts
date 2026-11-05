import type { NextConfig } from "next";

const securityHeaders = [
  // 1. Prevent clickjacking by restricting framing
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  // 2. Prevent MIME-type sniffing
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  // 3. Enforce strict HTTPS with subdomains and preload (2 years)
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // 4. Protect visitor privacy by restricting referrer leaks
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  // 5. Restrict device hardware permissions
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  // 6. Content Security Policy (CSP) tailored for Next.js, images, fonts, and WhatsApp
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self';",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com;",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;",
      "img-src 'self' data: blob: https:;",
      "font-src 'self' data: https: https://fonts.gstatic.com;",
      "connect-src 'self' https:;",
      "frame-src 'self' https://www.google.com https://maps.google.com;",
      "frame-ancestors 'self';",
    ].join(" "),
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
