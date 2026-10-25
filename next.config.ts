import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  async headers() {
    const securityHeaders = [
      // Enforces HTTPS and secures connections against downgrade attacks
      {
        key: "Strict-Transport-Security",
        value: "max-age=63072000; includeSubDomains; preload",
      },
      // Prevents clickjacking by stopping your site form being framed
      {
        key: "X-Frame-Options",
        value: "DENY",
      },
      // Prevents MIME-type sniffing
      {
        key: "X-Content-Type-Options",
        value: "nosniff",
      },
      // Basic origin isolation
      {
        key: "Cross-Origin-Opener-Policy",
        value: "same-origin",
      },
      // Adds Content Security Policy & Trusted Types
      ...(isProd
        ? [
            {
              key: "Content-Security-Policy",
              value:
                "default-src 'self'; " +
                "script-src 'self' 'sha256-n46vPwSWuMC0W703pBofImv82Z26xo4LXYmv0E9caPk=' 'sha256-OBTN3RiyCV4Bq7dFqZ5a2pAXjnCcCyETJMO2I/LYKeo='; " +
                "style-src 'self' 'unsafe-inline'; " +
                "img-src 'self' blob: data:; " +
                "require-trusted-types-for 'script';",
            },
          ]
        : []),
    ];

    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
