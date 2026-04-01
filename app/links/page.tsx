import type { Metadata } from 'next';

import LinktreePage from '@/app/components/LinktreePage';
import { getUpcomingEvents } from '@/lib/events';

export const metadata: Metadata = {
  title: 'Links | Claude Builder Club at Penn',
  description:
    'A mobile-friendly link hub for Penn CBC sign-up, community links, and current events.',
};

export const dynamic = 'force-dynamic';

export default function LinksPage() {
  const initialUpcomingEvents = getUpcomingEvents(new Date());

  return <LinktreePage initialUpcomingEvents={initialUpcomingEvents} />;
}
