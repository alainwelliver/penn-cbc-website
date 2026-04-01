'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { track } from '@vercel/analytics';

import { getUpcomingEvents, type Event } from '@/lib/events';
import { PENN_CBC_LINKS, PENN_CBC_LINKTREE_COPY } from '@/lib/linktree-data';

type LinkConfig = {
  href: string;
  label: string;
  eventName: string;
  kind?: 'primary' | 'secondary' | 'social';
};

function trackClick(eventName: string, meta?: Record<string, string>) {
  track(eventName, meta ?? {});
}

export default function LinktreePage({
  initialUpcomingEvents,
}: {
  initialUpcomingEvents: Event[];
}) {
  const [upcomingEvents, setUpcomingEvents] = useState(initialUpcomingEvents);

  useEffect(() => {
    track('page_view', { page: 'linktree' });
    const refreshEvents = () => {
      setUpcomingEvents(getUpcomingEvents(new Date()).slice(0, 4));
    };

    const intervalId = window.setInterval(refreshEvents, 60_000);

    return () => window.clearInterval(intervalId);
  }, []);

  const primaryLinks: LinkConfig[] = [
    {
      href: PENN_CBC_LINKS.signUp,
      label: 'Sign Up',
      eventName: 'cta_sign_up_click',
      kind: 'primary',
    },
    {
      href: PENN_CBC_LINKS.joinSlack,
      label: 'Join Slack',
      eventName: 'cta_join_slack_click',
      kind: 'secondary',
    },
    {
      href: PENN_CBC_LINKS.joinFoundry,
      label: 'Join Foundry',
      eventName: 'cta_join_foundry_click',
      kind: 'secondary',
    },
    {
      href: PENN_CBC_LINKS.newsletter,
      label: 'Subscribe to Newsletter',
      eventName: 'cta_newsletter_click',
      kind: 'secondary',
    },
    {
      href: PENN_CBC_LINKS.website,
      label: 'Visit Our Website',
      eventName: 'cta_website_click',
      kind: 'secondary',
    },
  ];

  const socialLinks: LinkConfig[] = [
    {
      href: PENN_CBC_LINKS.instagram,
      label: 'Instagram',
      eventName: 'social_instagram_click',
      kind: 'social',
    },
    {
      href: PENN_CBC_LINKS.linkedIn,
      label: 'LinkedIn',
      eventName: 'social_linkedin_click',
      kind: 'social',
    },
    {
      href: PENN_CBC_LINKS.email,
      label: 'Email',
      eventName: 'social_email_click',
      kind: 'social',
    },
  ];

  return (
    <main className="linktree-shell">
      <div className="linktree-frame">
        <section className="profile-block">
          <div className="profile-mark">
            <Image
              src="/cbc-logo.png"
              alt="Claude Builder Club at Penn logo"
              fill
              sizes="84px"
              className="profile-image"
            />
          </div>
          <p className="profile-kicker">University of Pennsylvania</p>
          <h1>{PENN_CBC_LINKTREE_COPY.title}</h1>
          <p className="profile-subtitle">{PENN_CBC_LINKTREE_COPY.subtitle}</p>
        </section>

        <section className="links-stack">
          <div className="link-grid">
            {primaryLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`link-button link-button-${link.kind ?? 'secondary'}`}
                onClick={() => trackClick(link.eventName)}
              >
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </section>

        <section className="events-panel">
          <div className="panel-heading">
            <div>
              <p className="panel-kicker">Upcoming Events</p>
              <h2>Current events</h2>
            </div>
          </div>

          {upcomingEvents.length === 0 ? (
            <div className="empty-state">
              No current events right now. Check back soon.
            </div>
          ) : (
            <div className="event-list">
              {upcomingEvents.map((event) => {
                const primaryButton = event.buttons[0];

                return (
                  <article key={event.sortKey} className="event-card">
                    <div className="event-meta-row">
                      <div className="event-date">
                        {event.time ? `${event.date} • ${event.time}` : event.date}
                      </div>
                      {event.location ? (
                        <div className="event-location">{event.location}</div>
                      ) : null}
                    </div>
                    <h3>{event.title}</h3>
                    <p className="event-description">{event.description}</p>
                    {primaryButton ? (
                      <a
                        href={primaryButton.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="event-button"
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
                        className="event-button event-button-secondary"
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

        <section className="social-row" aria-label="Social links">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-button"
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

        <footer className="page-footer">
          Made with Claude © 2026 Claude Builder Club at Penn
        </footer>
      </div>
    </main>
  );
}
