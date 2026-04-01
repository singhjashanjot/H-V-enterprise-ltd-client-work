# H&V Enterprise Ltd — Professional Canadian Fencing

> Engineering Canadian durability through architectural fencing and outdoor structures.

## Tech Stack

| Layer | Technology |
|:---|:---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript 5 (strict mode) |
| Styling | Tailwind CSS 3 |
| Animations | Framer Motion 12 |
| Forms | React Hook Form + Zod |
| Icons | Lucide React |
| Monorepo | Turborepo + pnpm workspaces |

## Getting Started

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Production build
pnpm build

# Format code
pnpm format

# Type check
pnpm typecheck
```

The development server runs at `http://localhost:3000`.

## Project Structure

```
├── apps/
│   └── web/                   # Next.js website
│       ├── public/images/     # Project photography
│       └── src/
│           ├── app/           # Page routes (App Router)
│           ├── components/    # React components
│           │   ├── common/    # Shared utilities (animations)
│           │   ├── features/  # Page-specific sections
│           │   └── layout/    # Header, Footer
│           ├── hooks/         # Custom React hooks
│           └── styles/        # Global CSS
├── packages/
│   ├── config/                # Shared TypeScript configs
│   ├── constants/             # Site data, navigation, service catalog
│   ├── types/                 # Shared TypeScript interfaces
│   ├── ui/                    # Design system primitives
│   └── utils/                 # Utility functions (cn, formatPhone)
└── docs/                      # Architecture documentation
```

## Routes

| Route | Description |
|:---|:---|
| `/` | Home — hero, services, trust signals, CTA |
| `/about` | Company story, values, process, team |
| `/services` | Full fencing service catalog |
| `/services/cedar-fencing` | Cedar product detail page |
| `/gallery` | Filterable project portfolio with lightbox |
| `/service-areas` | Coverage map across Canada |
| `/contact` | Contact info + quote request form |

## Design System

Based on **"Boreal Timber & Iron"** — a design language rooted in Canadian landscape:

- **Typography:** Bricolage Grotesque (headings) + DM Sans (body)
- **Colors:** Forest greens (`#263D2A`, `#3C5440`), parchment whites, stone greys
- **Principles:** No 1px borders (tonal layering), glassmorphic overlays, ambient shadows
- **Motion:** `cubic-bezier(0.16, 1, 0.3, 1)` scroll-triggered animations

## License

© 2024 H&V Enterprise Ltd. All rights reserved.
