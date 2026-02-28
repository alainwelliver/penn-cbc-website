# Supabase Setup for CBC Foundry Visitor Counter

## 1. Create a Supabase project

1. Go to [supabase.com](https://supabase.com) and create a project
2. Wait for the project to finish provisioning

## 2. Run the SQL scripts

1. Open your Supabase project dashboard
2. Go to **SQL Editor**
3. Run `scripts/001-create-visitor-count.sql` in full

This creates:
- `visitor_count` table with `id`, `count`, `updated_at`
- Initial row with `count = 51` for `foundry-products`
- `increment_foundry_visitor_count()` function for atomic increments

## 3. Get your project credentials

1. Go to **Project Settings** → **API**
2. Copy:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **service_role** key (under "Project API keys") → `SUPABASE_SERVICE_ROLE_KEY`

⚠️ **Never expose the service_role key in client-side code.** It bypasses RLS.

## 4. Add environment variables

Create `.env.local` in the project root:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

Add `.env.local` to `.gitignore` if not already (Next.js does this by default).

## 5. Optional: Reset the counter

To reset the visitor count to 51, run `scripts/002-reset-visitor-count.sql` in the SQL Editor.
