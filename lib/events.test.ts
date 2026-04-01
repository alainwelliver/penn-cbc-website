import { describe, it, expect } from 'vitest';
import {
  getUpcomingEvents,
  getPastEvents,
  getNewlyPastFromUpcoming,
  UPCOMING_EVENTS_SOURCE,
  STATIC_PAST_EVENTS,
  isRegistrationLikeButton,
  buttonsForPastEventDisplay,
} from './events';

describe('events', () => {
  it('UPCOMING_EVENTS_SOURCE has 7 events with sortKeys', () => {
    expect(UPCOMING_EVENTS_SOURCE).toHaveLength(7);
    UPCOMING_EVENTS_SOURCE.forEach((e) => {
      expect(e.sortKey).toBeDefined();
      expect(new Date(e.sortKey).getTime()).not.toBeNaN();
    });
  });

  it('getUpcomingEvents(asOf before all events) returns all 7 upcoming', () => {
    const asOf = new Date('2026-03-01T00:00:00-04:00');
    const upcoming = getUpcomingEvents(asOf);
    expect(upcoming).toHaveLength(7);
    expect(upcoming[0].title).toBe('Anthropic × Penn Hackathon Mixer');
    expect(upcoming[1].title).toBe('Meet Slow Ventures');
    expect(upcoming[2].title).toBe(
      'CBC Business Model & Go-to-Market 101 with Shanel Fields (CEO, MD Ally)'
    );
    expect(upcoming[3].title).toBe('Build the Future of Learning');
    expect(upcoming[4].title).toBe('Technical Workshop 3: AI Agents');
    expect(upcoming[5].title).toBe('Penn X Khosla Ventures');
    expect(upcoming[6].title).toBe('Anthropic x Penn AI Hackathon');
  });

  it('getUpcomingEvents(asOf after first event, before second) returns 6 upcoming', () => {
    const asOf = new Date('2026-03-19T12:00:00-04:00'); // after Mixer (Mar 18 8pm), before Slow Ventures (Mar 19 5:30pm)
    const upcoming = getUpcomingEvents(asOf);
    expect(upcoming).toHaveLength(6);
    expect(upcoming[0].title).toBe('Meet Slow Ventures');
    expect(upcoming[1].title).toBe(
      'CBC Business Model & Go-to-Market 101 with Shanel Fields (CEO, MD Ally)'
    );
    expect(upcoming[2].title).toBe('Build the Future of Learning');
    expect(upcoming[3].title).toBe('Technical Workshop 3: AI Agents');
    expect(upcoming[4].title).toBe('Penn X Khosla Ventures');
    expect(upcoming[5].title).toBe('Anthropic x Penn AI Hackathon');
  });

  it('getUpcomingEvents(asOf after all events) returns 0 upcoming', () => {
    const asOf = new Date('2026-04-13T00:00:00-04:00');
    const upcoming = getUpcomingEvents(asOf);
    expect(upcoming).toHaveLength(0);
  });

  it('getNewlyPastFromUpcoming(asOf after first event) returns 1 newly past', () => {
    const asOf = new Date('2026-03-19T12:00:00-04:00');
    const newlyPast = getNewlyPastFromUpcoming(asOf);
    expect(newlyPast).toHaveLength(1);
    expect(newlyPast[0].title).toBe('Anthropic × Penn Hackathon Mixer');
  });

  it('getNewlyPastFromUpcoming(asOf after all seven) returns 7 newly past', () => {
    const asOf = new Date('2026-04-13T00:00:00-04:00');
    const newlyPast = getNewlyPastFromUpcoming(asOf);
    expect(newlyPast).toHaveLength(7);
  });

  it('getPastEvents(asOf after all upcoming) includes newly past and static past', () => {
    const asOf = new Date('2026-04-13T00:00:00-04:00');
    const past = getPastEvents(asOf);
    const spring2026 = past.filter((e) => e.semester === 'Spring 2026');
    const newlyPastTitles = [
      'Anthropic x Penn AI Hackathon',
      'Penn X Khosla Ventures',
      'Technical Workshop 3: AI Agents',
      'Build the Future of Learning',
      'CBC Business Model & Go-to-Market 101 with Shanel Fields (CEO, MD Ally)',
      'Meet Slow Ventures',
      'Anthropic × Penn Hackathon Mixer',
    ];
    newlyPastTitles.forEach((title) => {
      expect(past.some((e) => e.title === title)).toBe(true);
    });
    expect(past.length).toBe(STATIC_PAST_EVENTS.length + 7);
    expect(spring2026.length).toBeGreaterThan(0);
  });

  it('getPastEvents(asOf before any upcoming) equals static past only', () => {
    const asOf = new Date('2026-03-01T00:00:00-04:00');
    const past = getPastEvents(asOf);
    expect(past).toHaveLength(STATIC_PAST_EVENTS.length);
  });
});

describe('past event buttons', () => {
  it('isRegistrationLikeButton detects register / rsvp / sign up', () => {
    expect(isRegistrationLikeButton('Register on Luma')).toBe(true);
    expect(isRegistrationLikeButton('RSVP on Luma')).toBe(true);
    expect(isRegistrationLikeButton('Sign up')).toBe(true);
    expect(isRegistrationLikeButton('SIGNUP HERE')).toBe(true);
    expect(isRegistrationLikeButton('View Slides')).toBe(false);
    expect(isRegistrationLikeButton('Watch Recording')).toBe(false);
  });

  it('buttonsForPastEventDisplay removes registration CTAs only', () => {
    const filtered = buttonsForPastEventDisplay([
      { label: 'RSVP on Luma', url: 'https://luma.com/x' },
      { label: 'View Slides', url: 'https://docs.google.com/x' },
    ]);
    expect(filtered).toHaveLength(1);
    expect(filtered[0].label).toBe('View Slides');
  });
});
