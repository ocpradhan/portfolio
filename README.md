# Developer Portfolio

A high-performance, accessible, and fully secure developer portfolio built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**. Designed with enterprise-grade security headers, strict Content Security Policy (CSP) configuration, and smooth, zero-flash theme transitions.

[**Live Demo**](https://onesimus-pradhan.vercel.app/)

---

## Performance, Accessibility & AI Agent Readiness

Optimized for instant rendering, modern accessibility standards, and seamless interaction with autonomous AI agents.

| Metric / Audit       | Score     | Strategy                                                                                                      |
| :------------------- | :-------- | :------------------------------------------------------------------------------------------------------------ | ---------------------------- |
| **Performance**      | **100**   | Server Components, automatic font/image optimization                                                          | minimal client JS footprint. |
| **Accessibility**    | **100**   | Full keyboard navigation support, semantic HTML5 tags, proper ARIA attributes.                                |
| **Best Practices**   | **100**   | Modern security headers, HTTPS enforcement, clean production build standards.                                 |
| **SEO**              | **100**   | Structured metadata, dynamic OpenGraph assets, semantic document structure.                                   |
| **Agentic Browsing** | **2 / 2** | Clean accessibility tree (clear interactive names/roles) and zero layout shifts (CLS) for AI agent readiness. |

---

## Responsive Design & UX

- **Mobile-First Layout:** Designed from the ground up to ensure seamless usability across all device screen sizes (mobile, tablet, desktop, and ultra-wide).
- **Adaptive Components**: Clean navigation transitions, fluid typography, and responsive layouts built using Tailwind CSS utility breakpoints.
- **Touch & Keyboard Optimized:** Accessible interactive elements tuned for both touch navigation on mobile devices and physical keyboard controls on desktop.

---

## Security & Architecture Highlights

- **Content Security Policy (CSP):** Header-level CSP implementation configured via `next.config.ts` to protect against cross site scripting (XSS) and unauthorized resource loading.
- **Production Security Headers:** Configured HSTS (`Strict-Transport-Security`), frame protection (`X-Frame-Options: DENY`), MIME sniffing prevention (`nosniff`), and origin isolation policy (`Cross-Origin-Opener-Policy`).
- **Zero-Flash Theme Management:** Integrated theme initialization using `@teispace/next-themes` for seamless light/dark/system mode toggles without layout shifts or hydration flashes.
- **Server-First Architecture:** Built on the Next.js App Router to maximize React Server Components (RSC) usage while keeping interactive client components localized.

---

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS, shadcn/ui
- **Theme Management:** `@teispace/next-themes`
