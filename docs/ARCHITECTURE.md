# Architecture Overview

## Monorepo Strategy

This project uses **Turborepo + pnpm workspaces** for monorepo management.

### Why Turborepo

- Zero-config remote caching
- Parallel task execution with dependency awareness
- Pipeline-based task orchestration via `turbo.json`

### Why pnpm

- Strict dependency resolution (no phantom deps)
- Symlinked `node_modules` — fast installs, disk-efficient
- Native workspace protocol (`workspace:*`)

## Package Graph

```
@hv/web (apps/web)
├── @hv/ui          → Shared design system primitives
├── @hv/constants   → Site data, navigation, service catalog
├── @hv/utils       → cn(), formatPhone(), slugify()
├── @hv/types       → TypeScript interfaces
└── @hv/config      → Shared tsconfig presets
```

## Design System: "Boreal Timber & Iron"

### Token Architecture

Colors, typography, spacing, and shadows are defined as Tailwind theme extensions in `apps/web/tailwind.config.ts`. This maps 1:1 to the original Stitch MCP design system.

### Key Rules

1. **No-Line Rule:** Sections are separated by tonal background shifts, never 1px borders
2. **Glassmorphism:** Navigation and overlays use `bg-surface/80 backdrop-blur-xl`
3. **Ambient Shadows:** `rgba(27,28,26,0.06)` tinted to match on-surface color
4. **Staggered Scroll Animations:** Framer Motion with `staggerChildren: 0.1`

### Component Hierarchy

```
pages (app/*.tsx)
└── feature sections (components/features/{page}/*.tsx)
    └── UI primitives (packages/ui)
        └── utility layer (packages/utils — cn())
```

## Rendering Strategy

- **Server Components by default** — most pages are static content
- **Client Components** only for: mobile nav, gallery lightbox, contact form, scroll animations
- **Static Generation** — all pages prerendered at build time (no SSR needed for V1)

## Data Flow

Content lives in `packages/constants/src/data.ts` — a typed, centralized store of:
- Fencing service catalog (9 services)
- Cedar styles & features
- Company values & process steps
- Gallery projects (9 entries)
- Service regions (3 provinces, 26 cities)
- Trust signals

This structure supports future migration to a headless CMS (Sanity, Contentful) or Supabase.

## Deployment

Optimized for **Vercel**:
- Automatic Next.js detection
- Turborepo remote caching
- Edge network for static assets
- `next/image` optimization via Vercel CDN
