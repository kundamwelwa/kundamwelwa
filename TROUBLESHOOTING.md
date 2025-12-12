# Troubleshooting Guide

## Database Issues

### `prisma db push` is taking too long

If `npm run db:push` is taking a long time, try these solutions:

#### 1. Check Database Connection
```bash
# Test your database connection
npx prisma db pull
```

#### 2. Use Direct Connection (Faster)
If you're using Supabase, try the direct connection string instead of the pooler:

**Pooler (slower, but better for serverless):**
```
postgresql://postgres.xxx:password@aws-1-eu-north-1.pooler.supabase.com:6543/postgres
```

**Direct (faster, for development):**
```
postgresql://postgres.xxx:password@aws-1-eu-north-1.pooler.supabase.com:5432/postgres
```

Change port from `6543` to `5432` in your `.env` file.

#### 3. Use Migrations Instead (Recommended for Production)
```bash
# Create a migration instead of using db push
npm run db:migrate
```

Migrations are more reliable and trackable than `db push`.

#### 4. Check Network/Firewall
- Ensure your IP is allowed in Supabase dashboard
- Check if you're behind a VPN that might slow connections
- Try from a different network

#### 5. Use Prisma Studio to Verify
```bash
npm run db:studio
```
This will help you verify if the connection works and see your data.

#### 6. Alternative: Use Local Database for Development
For faster development, consider using a local PostgreSQL database:
```bash
# Install PostgreSQL locally or use Docker
docker run --name postgres -e POSTGRES_PASSWORD=password -p 5432:5432 -d postgres
```

Then update your `.env`:
```
DATABASE_URL="postgresql://postgres:password@localhost:5432/biomed_connect"
```

### Common Prisma Commands

```bash
# Generate Prisma Client (fast)
npm run db:generate

# Push schema changes (can be slow with remote DB)
npm run db:push

# Create migration (recommended)
npm run db:migrate

# Open Prisma Studio (browser-based DB viewer)
npm run db:studio

# Pull schema from existing database
npx prisma db pull
```

### If db:push Hangs

1. **Cancel and try again** - Sometimes it's just a network hiccup
2. **Check Supabase dashboard** - Ensure your database is active
3. **Use migrations** - More reliable: `npm run db:migrate`
4. **Check logs** - Look for error messages in the terminal

### Performance Tips

- Use `db:push` only for rapid prototyping
- Use `db:migrate` for production and team collaboration
- Consider using a local database for development
- Use connection pooling for production (Supabase pooler is good)

