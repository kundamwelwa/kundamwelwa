# BIOMED CONNECT - Project Structure

## Overview

The project is organized into clear **frontend** and **backend** separation while maintaining Next.js 14 App Router conventions.

## Directory Structure

```
BIOMED/
├── app/                          # Next.js App Router (required at root)
│   ├── (public)/                 # Public route group
│   │   ├── layout.tsx           # Public layout
│   │   └── page.tsx              # Home page
│   ├── (admin)/                  # Admin route group
│   │   ├── layout.tsx           # Admin layout (protected)
│   │   └── page.tsx              # Admin dashboard
│   ├── api/                      # API Routes (backend endpoints)
│   │   ├── checkout/
│   │   │   └── route.ts          # Stripe checkout endpoint
│   │   └── webhooks/
│   │       └── stripe/
│   │           └── route.ts      # Stripe webhook handler
│   ├── globals.css               # Global styles
│   └── layout.tsx                # Root layout
│
├── frontend/                     # All frontend code
│   ├── components/               # React components
│   │   ├── ui/                  # ShadCN UI components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   ├── dialog.tsx
│   │   │   └── ... (all ShadCN components)
│   │   └── providers/           # Context providers
│   │       └── query-provider.tsx
│   └── lib/                     # Frontend utilities
│       ├── hooks/               # React hooks
│       │   ├── use-api.ts
│       │   └── use-toast.ts
│       ├── stores/              # Zustand stores
│       │   └── use-store.ts
│       └── utils.ts              # Utility functions
│
├── backend/                     # All backend code
│   ├── api/                     # API route handlers (reference)
│   │   └── ...                  # (Actual routes in app/api/)
│   └── lib/                     # Server-side utilities
│       ├── prisma.ts            # Prisma client
│       └── stripe.ts            # Stripe client
│
├── prisma/                      # Database
│   └── schema.prisma            # Prisma schema
│
├── public/                      # Static assets
├── types/                       # TypeScript types
└── ...config files
```

## Key Points

### Frontend (`frontend/`)
- **Components**: All React components, including ShadCN UI components
- **Hooks**: Custom React hooks for data fetching, state management
- **Stores**: Zustand stores for global state
- **Utils**: Helper functions (cn, formatters, etc.)

### Backend (`backend/`)
- **API Routes**: Located in `app/api/` (Next.js requirement)
- **Server Utilities**: Prisma client, Stripe client, server-side helpers
- **Database**: Prisma schema and migrations

### App Router Structure
- **`(public)`**: Public pages accessible to everyone
- **`(admin)`**: Admin pages protected by authentication
- **`api/`**: API endpoints for backend operations

## Import Paths

Use these path aliases (configured in `tsconfig.json`):

- `@/frontend/components/*` - UI components
- `@/frontend/lib/*` - Frontend utilities
- `@/backend/lib/*` - Backend utilities
- `@/*` - Root level (for app/, public/, etc.)

## Example Imports

```typescript
// Frontend component
import { Button } from "@/frontend/components/ui/button"
import { useStore } from "@/frontend/lib/stores/use-store"
import { cn } from "@/frontend/lib/utils"

// Backend API route
import { prisma } from "@/backend/lib/prisma"
import { stripe } from "@/backend/lib/stripe"

// App Router page
import { auth } from "@clerk/nextjs/server"
```

## Adding New Components

1. **UI Components**: Add to `frontend/components/ui/`
2. **Feature Components**: Add to `frontend/components/` (create feature folders)
3. **Pages**: Add to `app/(public)/` or `app/(admin)/`
4. **API Routes**: Add to `app/api/`
5. **Server Utils**: Add to `backend/lib/`

## ShadCN Components

All ShadCN UI components are installed and available in `frontend/components/ui/`:
- accordion, alert, alert-dialog, avatar, badge, button, card
- carousel, checkbox, dialog, dropdown-menu, form, input, label
- popover, progress, radio-group, select, separator, sheet
- skeleton, slider, switch, table, tabs, textarea, toast, tooltip

Use them with: `import { Component } from "@/frontend/components/ui/component"`

