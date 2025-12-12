# Setup Guide for BIOMED CONNECT

Follow these steps to get your project up and running:

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/biomed_connect?schema=public"

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Next.js
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Getting Your Keys:

#### Clerk Setup:
1. Go to [clerk.com](https://clerk.com) and create an account
2. Create a new application
3. Copy the Publishable Key and Secret Key from the dashboard
4. Add them to your `.env` file

#### Stripe Setup:
1. Go to [stripe.com](https://stripe.com) and create an account
2. Navigate to Developers > API keys
3. Copy your Publishable key and Secret key (use test keys for development)
4. Add them to your `.env` file

**For Webhooks (Local Development):**
Since webhooks require a publicly accessible URL, use the **Stripe CLI** for local testing:

1. Install the Stripe CLI:
   - **Windows**: Download from [stripe.com/docs/stripe-cli](https://stripe.com/docs/stripe-cli) or use `scoop install stripe`
   - **Mac**: `brew install stripe/stripe-cli/stripe`
   - **Linux**: See [stripe.com/docs/stripe-cli](https://stripe.com/docs/stripe-cli)

2. Login to Stripe CLI:
   ```bash
   stripe login
   ```

3. Forward webhooks to your local server (in a separate terminal):
   ```bash
   stripe listen --forward-to localhost:3000/api/webhooks/stripe
   ```

4. The CLI will display a webhook signing secret (starts with `whsec_`). Copy this to your `.env` file as `STRIPE_WEBHOOK_SECRET`

**For Production:**
1. Go to Developers > Webhooks in your Stripe dashboard
2. Add endpoint: `https://yourdomain.com/api/webhooks/stripe`
3. Copy the webhook signing secret to your production environment variables

#### Database Setup:
**Option 1: Supabase (Recommended)**
1. Go to [supabase.com](https://supabase.com) and create a project
2. Go to Settings > Database
3. Copy the connection string (use the URI format)
4. Replace the password in the connection string

**Option 2: Neon DB**
1. Go to [neon.tech](https://neon.tech) and create a project
2. Copy the connection string from the dashboard
3. Add it to `DATABASE_URL`

## Step 3: Database Setup

```bash
# Generate Prisma Client
npm run db:generate

# Push schema to database
npm run db:push

# (Optional) Open Prisma Studio to view your database
npm run db:studio
```

## Step 4: Run Development Server

**Terminal 1 - Start Next.js:**
```bash
npm run dev
```

**Terminal 2 - Forward Stripe Webhooks (if testing payments):**
```bash
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

Open [http://localhost:3000](http://localhost:3000) to see your app!

## Troubleshooting

### Clerk Errors
- Make sure your Clerk keys are correct
- Check that your middleware is properly configured
- Verify your public routes are set correctly

### Stripe Errors
- Ensure you're using test keys in development
- For local webhook testing, make sure Stripe CLI is running: `stripe listen --forward-to localhost:3000/api/webhooks/stripe`
- Verify webhook secret matches the one from Stripe CLI (local) or Stripe dashboard (production)
- Check that your webhook endpoint URL is correct: `http://localhost:3000/api/webhooks/stripe`

### Database Errors
- Verify your `DATABASE_URL` is correct
- Make sure your database is accessible
- Check Prisma schema for any errors

## Next Steps

1. Customize your Prisma schema in `prisma/schema.prisma`
2. Add more ShadCN UI components as needed: `npx shadcn-ui@latest add [component]`
3. Build out your application features
4. Set up your production environment

BD PASSWORD: ynUzaDgf9SNTBDos