-- Visitor count table for CBC Foundry products page
-- Run this in Supabase SQL Editor (Dashboard → SQL Editor)

-- Create the table
CREATE TABLE IF NOT EXISTS visitor_count (
  id TEXT PRIMARY KEY,
  count INTEGER NOT NULL DEFAULT 0,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Insert initial row starting at 51
INSERT INTO visitor_count (id, count)
VALUES ('foundry-products', 51)
ON CONFLICT (id) DO NOTHING;

-- Create the atomic increment function
CREATE OR REPLACE FUNCTION increment_foundry_visitor_count()
RETURNS INTEGER
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  new_count INTEGER;
BEGIN
  UPDATE visitor_count
  SET count = count + 1, updated_at = NOW()
  WHERE id = 'foundry-products'
  RETURNING count INTO new_count;
  RETURN new_count;
END;
$$;

-- Grant execute to anonymous users (for API route using service role)
-- Service role bypasses RLS, so no extra grants needed for server-side calls
-- If you want to allow anon key: GRANT EXECUTE ON FUNCTION increment_foundry_visitor_count() TO anon;
