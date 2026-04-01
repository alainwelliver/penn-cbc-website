'use client';

import { useEffect, useState } from 'react';

import { getUpcomingEvents, type Event } from '@/lib/events';

export default function useUpcomingEvents(initialEvents?: Event[]) {
  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>(
    () => initialEvents ?? getUpcomingEvents(new Date())
  );

  useEffect(() => {
    const refreshUpcomingEvents = () => {
      setUpcomingEvents(getUpcomingEvents(new Date()));
    };

    refreshUpcomingEvents();
    const intervalId = window.setInterval(refreshUpcomingEvents, 60_000);

    return () => window.clearInterval(intervalId);
  }, []);

  return upcomingEvents;
}
