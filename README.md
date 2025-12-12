<<<<<<< HEAD
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

=======
[![MasterHead](https://media.licdn.com/dms/image/v2/D4E16AQH4BLg5PWPkiQ/profile-displaybackgroundimage-shrink_350_1400/B4EZVeAvLEGYAc-/0/1741039007991?e=1767225600&v=beta&t=unX1WsH1LnZ6P5pCdCiKzUecxUm4ZHMCVfJGPh64sNQ)](https://kellycodeportfolio.vercel.app)

<h1 align="center">
  <span style="background: linear-gradient(90deg, #071952, #088395, #37B7C3); -webkit-background-clip: text; color: transparent;">
    Hi 👋, I'm KellyCode
  </span>
</h1>

<h3 align="center">
  <img src="https://readme-typing-svg.herokuapp.com/?lines=Full+Stack+Developer;Mobile+App+Developer;Cyber+Security+%26+GRC+Specialist;Data+Analyst;Tech+Strategist;UI/UX+Designer&center=true&width=600&height=50&color=088395" />
</h3>

---

<p align="center">
  <img src="https://avatars.githubusercontent.com/u/88552144?s=400&u=89ba0c46ee20744339008a52f94787964a3a7ac6&v=4" width="200" 
  style="border-radius: 50%; border: 4px solid #088395;" />
</p>

---

## 🧭 **Motto**
<h3 align="center"><em>“Slow Motion is better than No Motion.”</em></h3>

---

## 🚀 **About Me**
<div style="background:#EBF4F6;padding:15px;border-left:5px solid #37B7C3;border-radius:8px;">

- Full Stack Web Developer  
- Mobile Developer (React Native, Flutter)  
- UI/UX & Web Designer  
- Cybersecurity & Information Security Specialist  
- GRC (Governance, Risk & Compliance) Professional  
- Data Analyst & Visualization  
- Tech Strategist & Marketing Consultant  

Working on: **ODMS**, **AI & SaaS Security Concepts**, **Tech Startups (GIGATECH | CYGPRO)**  
Currently learning: **Laravel**, **Django**  
Email: **kundamwelwa7@gmail.com**

</div>

---

## 🧩 **Developer Card**
<p align="center">
  <img src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=kundamwelwa&theme=default" />
</p>

---

## 🌐 **Connect With Me**

<p align="center">
  <a href="https://www.linkedin.com/in/kelly-kunda-mwelwa/">
    <img src="https://img.shields.io/badge/LinkedIn-088395?style=for-the-badge&logo=linkedin&logoColor=white" />
  </a>
  <a href="https://instagram.com/kellyjr2464">
    <img src="https://img.shields.io/badge/Instagram-071952?style=for-the-badge&logo=instagram&logoColor=white" />
  </a>
  <a href="https://kellycodeportfolio.vercel.app">
    <img src="https://img.shields.io/badge/Portfolio-37B7C3?style=for-the-badge&logo=vercel&logoColor=white" />
  </a>
</p>

---

## 🛠️ **Tech Stack**

### 📌 Languages, Frameworks & Tools
<p align="center">
  <img src="https://skillicons.dev/icons?i=html,css,js,ts,react,reactnative,flutter,nodejs,python,php,laravel,django,mysql,git,figma,docker,linux,postman,tensorflow&theme=light" />
</p>

### 🔐 Security & GRC
<p align="center">
  <img src="https://img.shields.io/badge/Cybersecurity-071952?style=for-the-badge&logo=security&logoColor=white" />
  <img src="https://img.shields.io/badge/Information%20Security-088395?style=for-the-badge&logo=shield&logoColor=white" />
  <img src="https://img.shields.io/badge/GRC-37B7C3?style=for-the-badge&logo=go&logoColor=white" />
</p>

### 📈 Data Analytics
<p align="center">
  <img src="https://img.shields.io/badge/Data%20Analytics-088395?style=for-the-badge&logo=python&logoColor=white" />
  <img src="https://img.shields.io/badge/Visualization-071952?style=for-the-badge&logo=tableau&logoColor=white" />
</p>

---

## 📊 **GitHub Analytics**

### 🔥 Streak Stats  
<p align="center">
  <img src="https://streak-stats.demolab.com?user=kundamwelwa&theme=default&background=EBF4F6&ring=088395&fire=37B7C3&currStreakLabel=071952" />
</p>

### 🧠 GitHub Stats  
<p align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=kundamwelwa&show_icons=true&title_color=071952&text_color=071952&icon_color=088395&bg_color=EBF4F6" />
</p>

### 🧩 Most Used Languages  
<p align="center">
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=kundamwelwa&layout=compact&title_color=071952&text_color=071952&bg_color=EBF4F6" />
</p>

---

## 🎨 **Animated Wave Footer**
<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=088395&height=80&section=footer" />
</p>
>>>>>>> 6d8c1d9d75acf0fb415a7b0b32eeba535e6adcb5
