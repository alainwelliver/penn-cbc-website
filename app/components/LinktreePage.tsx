'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import { track } from '@vercel/analytics';

import { type Event } from '@/lib/events';
import {
  PENN_CBC_LINKS,
  PENN_CBC_LINKTREE_COPY,
  PENN_CBC_PRIMARY_LINKS,
  PENN_CBC_SOCIAL_LINKS,
} from '@/lib/linktree-data';
import useUpcomingEvents from './useUpcomingEvents';
import styles from './LinktreePage.module.css';

function trackClick(eventName: string, meta?: Record<string, string>) {
  track(eventName, meta ?? {});
}

export default function LinktreePage({
  initialUpcomingEvents,
}: {
  initialUpcomingEvents: Event[];
}) {
  const upcomingEvents = useUpcomingEvents(initialUpcomingEvents);

  useEffect(() => {
    track('page_view', { page: 'linktree' });
  }, []);

  return (
    <main className={styles.shell}>
      <div className={styles.frame}>
        <section className={styles.profileBlock}>
          <div className={styles.profileMark}>
            <Image
              src="/cbc-logo.png"
              alt="Claude Builder Club at Penn logo"
              fill
              sizes="84px"
              className={styles.profileImage}
            />
          </div>
          <p className={styles.profileKicker}>University of Pennsylvania</p>
          <h1>{PENN_CBC_LINKTREE_COPY.title}</h1>
          <p className={styles.profileSubtitle}>{PENN_CBC_LINKTREE_COPY.subtitle}</p>
        </section>

        <section className={styles.linksStack}>
          <div className={styles.linkGrid}>
            {PENN_CBC_PRIMARY_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={[
                  styles.linkButton,
                  link.kind === 'primary' ? styles.linkButtonPrimary : '',
                ].join(' ')}
                onClick={() => trackClick(link.eventName)}
              >
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </section>

        <section className={styles.eventsPanel}>
          <div className={styles.panelHeading}>
            <div>
              <p className={styles.panelKicker}>Upcoming Events</p>
              <h2>Current events</h2>
            </div>
          </div>

          {upcomingEvents.length === 0 ? (
            <div className={styles.emptyState}>
              No current events right now. Check back soon.
            </div>
          ) : (
            <div className={styles.eventList}>
              {upcomingEvents.map((event) => {
                const primaryButton = event.buttons[0];

                return (
                  <article key={event.sortKey} className={styles.eventCard}>
                    <div className={styles.eventMetaRow}>
                      <div className={styles.eventDate}>
                        {event.time ? `${event.date} • ${event.time}` : event.date}
                      </div>
                      {event.location ? (
                        <div className={styles.eventLocation}>{event.location}</div>
                      ) : null}
                    </div>
                    <h3>{event.title}</h3>
                    <p className={styles.eventDescription}>{event.description}</p>
                    {primaryButton ? (
                      <a
                        href={primaryButton.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.eventButton}
                        onClick={() =>
                          trackClick('event_cta_click', {
                            eventTitle: event.title,
                            sortKey: event.sortKey,
                            ctaLabel: primaryButton.label,
                          })
                        }
                      >
                        {primaryButton.label}
                      </a>
                    ) : (
                      <a
                        href={PENN_CBC_LINKS.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.eventButton} ${styles.eventButtonSecondary}`}
                        onClick={() =>
                          trackClick('event_card_click', {
                            eventTitle: event.title,
                            sortKey: event.sortKey,
                          })
                        }
                      >
                        View details
                      </a>
                    )}
                  </article>
                );
              })}
            </div>
          )}
        </section>

        <section className={styles.socialRow} aria-label="Social links">
          {PENN_CBC_SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIconButton}
              aria-label={link.label}
              title={link.label}
              onClick={() => trackClick(link.eventName)}
            >
              {link.label === 'Instagram' ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="2.5" y="2.5" width="19" height="19" rx="5" stroke="currentColor" strokeWidth="2" />
                  <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="2" />
                  <circle cx="18" cy="6" r="1.2" fill="currentColor" />
                </svg>
              ) : null}
              {link.label === 'LinkedIn' ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A2.02 2.02 0 0 0 3.2 5.02c0 1.1.9 2 2 2h.02a2.01 2.01 0 1 0 .03-4.02ZM20.8 12.77c0-3.47-1.85-5.08-4.32-5.08-1.99 0-2.88 1.1-3.38 1.87V8.5H9.72c.05.7 0 11.5 0 11.5h3.38v-6.42c0-.34.02-.67.12-.91.27-.67.88-1.37 1.9-1.37 1.35 0 1.88 1.03 1.88 2.54V20h3.38v-7.23Z" />
                </svg>
              ) : null}
              {link.label === 'Email' ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
                  <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : null}
            </a>
          ))}
        </section>

        <footer className={styles.pageFooter}>
          Made with Claude © 2026 Claude Builder Club at Penn
        </footer>
      </div>
    </main>
  );
}
