# BIOMED CONNECT

A modern platform for connecting biomedical professionals.

## Tech Stack

### Frontend
- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **ShadCN UI** (Component library)
- **Zustand** (State management)
- **React Query** (Server state management)
- **Clerk** (Authentication)
- **Stripe** (Payment processing)

### Backend
- **Next.js API Routes** (Full-stack)
- **Prisma ORM**
- **PostgreSQL** (Supabase/Neon DB)

## Color Palette

- **Primary Orange**: `#FF6600`
- **Green**: `#8FD14F`
- **Blue**: `#0046FF`
- **Dark Blue**: `#091057`
- **Cyan**: `#73C8D2`

## Getting Started

### Prerequisites

- Node.js 18+ 
- PostgreSQL database (Supabase or Neon DB)
- Clerk account
- Stripe account

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env
```

Fill in your environment variables:
- `DATABASE_URL` - Your PostgreSQL connection string
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` - From Clerk dashboard
- `CLERK_SECRET_KEY` - From Clerk dashboard
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` - From Stripe dashboard
- `STRIPE_SECRET_KEY` - From Stripe dashboard
- `STRIPE_WEBHOOK_SECRET` - From Stripe webhook settings
- `NEXT_PUBLIC_APP_URL` - Your app URL (http://localhost:3000 for dev)

3. Set up the database:
```bash
npx prisma generate
npx prisma db push
```

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── (public)/          # Public pages
│   ├── (admin)/           # Admin pages (protected)
│   ├── api/               # API routes (backend)
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── frontend/              # Frontend code
│   ├── components/        # React components
│   │   ├── ui/          # ShadCN UI components
│   │   └── providers/   # Context providers
│   └── lib/              # Frontend utilities
│       ├── hooks/       # React hooks
│       ├── stores/      # Zustand stores
│       └── utils.ts     # Helper functions
├── backend/              # Backend code
│   └── lib/              # Server utilities
│       ├── prisma.ts    # Prisma client
│       └── stripe.ts    # Stripe client
├── prisma/               # Prisma schema
└── public/              # Static assets
```

See `PROJECT_STRUCTURE.md` for detailed structure documentation.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:generate` - Generate Prisma client
- `npm run db:push` - Push schema to database
- `npm run db:studio` - Open Prisma Studio
- `npm run db:migrate` - Run database migrations

## Features

- ✅ Next.js 14 with App Router
- ✅ TypeScript configuration
- ✅ Tailwind CSS with custom colors
- ✅ ShadCN UI components
- ✅ Zustand state management
- ✅ React Query setup
- ✅ Clerk authentication
- ✅ Stripe payment integration
- ✅ Prisma ORM with PostgreSQL

## Next Steps

1. Set up your Clerk application and add keys to `.env`
2. Set up your Stripe account and add keys to `.env`
3. Configure your PostgreSQL database (Supabase or Neon DB)
4. Customize the Prisma schema for your needs
5. Build out your application features!

