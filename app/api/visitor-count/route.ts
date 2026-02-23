import { NextResponse } from 'next/server';
import { createServerSupabaseClient } from '@/lib/supabase';

export async function POST() {
  try {
    const supabase = createServerSupabaseClient();
    const { data, error } = await supabase.rpc('increment_foundry_visitor_count');

    if (error) {
      console.error('Visitor count increment failed:', error);
      return NextResponse.json({ error: 'Failed to increment count' }, { status: 500 });
    }

    return NextResponse.json({ count: data as number });
  } catch (err) {
    console.error('Visitor count error:', err);
    return NextResponse.json({ error: 'Failed to increment count' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const supabase = createServerSupabaseClient();
    const { data, error } = await supabase
      .from('visitor_count')
      .select('count')
      .eq('id', 'foundry-products')
      .single();

    if (error) {
      console.error('Visitor count fetch failed:', error);
      return NextResponse.json({ error: 'Failed to fetch count' }, { status: 500 });
    }

    return NextResponse.json({ count: data?.count ?? 0 });
  } catch (err) {
    console.error('Visitor count error:', err);
    return NextResponse.json({ error: 'Failed to fetch count' }, { status: 500 });
  }
}
