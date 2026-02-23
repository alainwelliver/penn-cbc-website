-- Reset visitor count to a specific value (optional maintenance script)
-- Run this in Supabase SQL Editor if you need to reset the counter

-- Reset to 51
UPDATE visitor_count
SET count = 51, updated_at = NOW()
WHERE id = 'foundry-products';

-- Verify
SELECT * FROM visitor_count WHERE id = 'foundry-products';
