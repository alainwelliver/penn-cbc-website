/**
 * Shared event types and data for Events page and Home "Upcoming Events".
 * Use getUpcomingEvents() / getPastEvents() so past events drop from upcoming automatically.
 */

export type EventButton = { label: string; url: string };

export type Event = {
  title: string;
  date: string;
  description: string;
  buttons: EventButton[];
  sortKey: string;
  /** Optional explicit end timestamp (ISO string, typically in ET). */
  endSortKey?: string;
  time?: string;
  location?: string;
  semester: 'Spring 2026' | 'Fall 2025';
};

/**
 * Compute the instant when an event should stop being considered "current" / "upcoming".
 *
 * Rules:
 * - If endSortKey is provided and valid, use that.
 * - Otherwise, default to the start of the next calendar day in ET (America/New_York),
 *   based on the date and offset encoded in sortKey.
 */
function getEventEndInstant(event: Event): Date | null {
  const start = new Date(event.sortKey);
  if (Number.isNaN(start.getTime())) return null;

  if (event.endSortKey) {
    const explicitEnd = new Date(event.endSortKey);
    if (!Number.isNaN(explicitEnd.getTime())) {
      return explicitEnd;
    }
  }

  // Derive ET offset from sortKey if present, e.g. 2026-03-18T20:00:00-04:00
  const match = event.sortKey.match(/([+-]\d{2}):?(\d{2})$/);
  // Fallback to -05:00 (standard ET) if no offset is encoded.
  const offsetMinutes = match
    ? Number(match[1]) * 60 + Number(match[2])
    : -5 * 60;

  const etMillis = start.getTime() + offsetMinutes * 60_000;
  const etDate = new Date(etMillis);

  const year = etDate.getUTCFullYear();
  const month = etDate.getUTCMonth();
  const day = etDate.getUTCDate();

  // Start of next ET day, converted back to UTC.
  const nextDayStartEtUtcMillis =
    Date.UTC(year, month, day + 1, 0, 0, 0) - offsetMinutes * 60_000;

  return new Date(nextDayStartEtUtcMillis);
}

/** Events that can become past (have sortKey). Filter by current date to get "upcoming". */
export const UPCOMING_EVENTS_SOURCE: Event[] = [
  {
    title: 'Anthropic × Penn Hackathon Mixer',
    date: 'Mar 18, 2026',
    time: '8–9:30 PM',
    location: 'G60 Jon M. Huntsman Hall',
    description: 'Our Hackathon is on April 12th (more info soon). Meet other builders, find teammates, share ideas, and kick things off. Snacks provided.',
    buttons: [{ label: 'RSVP on Luma', url: 'https://luma.com/dq4wu2zr?tk=Fvvgtm' }],
    sortKey: '2026-03-18T20:00:00-04:00',
    semester: 'Spring 2026',
  },
  {
    title: 'Meet Slow Ventures',
    date: 'Mar 19, 2026',
    time: '5:30–6:30 PM',
    location: 'Levine Hall 307',
    description: "A session on how to build ideas that actually get funded — from what makes a startup compelling to how investors think about early ideas. Whether you're already building something or just curious about startups and product, this is a valuable opportunity to learn how strong ideas turn into real momentum. Pizza provided. Please RSVP so we have an accurate head count.",
    buttons: [
      { label: 'RSVP on Luma', url: 'https://luma.com/dndrjrkj' },
      {
        label: 'View Photos',
        url: 'https://drive.google.com/drive/folders/1GXpiWQ0JRISH4mvMuKpaAe1DhNuOtUgT?usp=sharing',
      },
    ],
    sortKey: '2026-03-19T17:30:00-04:00',
    semester: 'Spring 2026',
  },
  {
    title: 'CBC Business Model & Go-to-Market 101 with Shanel Fields (CEO, MD Ally)',
    date: 'Mar 20, 2026',
    time: '4:30–5:30 PM',
    location: 'Towne 217 ALC',
    description:
      'Join us for an interactive workshop / fireside with Shanel Fields, CEO of MD Ally — a Wharton alum who cold-outreached her way to her first EMS customer while still in school. We’ll dig into the real questions: how do you build a business model, price your product, and land your first paying customers? Bring your startup idea — you’ll leave with a concrete GTM plan and direct feedback from a founder who’s lived it.',
    buttons: [{ label: 'Register on Luma', url: 'https://luma.com/oaqhj52e' }],
    sortKey: '2026-03-20T16:30:00-04:00',
    semester: 'Spring 2026',
  },
  {
    title: 'Build the Future of Learning',
    date: 'Mar 23, 2026',
    time: '2:00 PM',
    description: 'Curious about AI in education? Join us to explore essential AI fundamentals, discuss the latest trends shaping equitable learning, and put those ideas into practice by building a real education tool together in minutes using Claude Code. Co-hosted with AIED @ Penn.',
    buttons: [{ label: 'Register on Luma', url: 'https://luma.com/t1d6o1hv' }],
    sortKey: '2026-03-23T14:00:00-04:00',
    semester: 'Spring 2026',
  },
  {
    title: 'Technical Workshop 3: AI Agents',
    date: 'Apr 3, 2026',
    time: '4:30–5:30 PM',
    location: 'Towne 225 Raisler Lounge',
    description:
      'Join us for a hands-on workshop on AI agents and how they are changing the way we build and interact with technology. We will cover core concepts, explore real-world applications, and give you the tools to start building your own. The workshop is Friday, April 3 from 4:30 to 5:30 PM in Towne 225 Raisler Lounge.',
    buttons: [{ label: 'Register on Luma', url: 'https://luma.com/4kjw0rsa' }],
    sortKey: '2026-04-03T16:30:00-04:00',
    semester: 'Spring 2026',
  },
  {
    title: 'Penn X Khosla Ventures',
    date: 'Apr 9, 2026',
    time: '6:45–8:45 PM',
    location: 'AGH First Floor Auditorium',
    description:
      "Join us for an evening with engineers and builders from Distyl, Pathway, and other companies. Learn about software, AI, and product roles, get a firsthand look at what it's like to build at fast-growing early-stage startups, and connect with teams working on real-world problems at the frontier of technology.",
    buttons: [{ label: 'Register on Luma', url: 'https://luma.com/0hrqf6ix' }],
    sortKey: '2026-04-09T18:45:00-04:00',
    semester: 'Spring 2026',
  },
  {
    title: 'Anthropic x Penn AI Hackathon',
    date: 'Apr 12, 2026',
    time: '12:00–7:30 PM',
    location: 'Amy Gutmann Hall',
    description:
      "CBC and Wharton AI & Analytics are partnering with Anthropic for our second annual hackathon, themed around Machines of Loving Grace: the idea that AI, built thoughtfully, can genuinely improve human life. This is not just another demo day. We are looking for impact-heavy projects that are ambitious, meaningful, and grounded in real problems people face.",
    buttons: [{ label: 'Register on Luma', url: 'https://luma.com/wz5u68yq?tk=kHnFWN' }],
    sortKey: '2026-04-12T12:00:00-04:00',
    semester: 'Spring 2026',
  },
];

/** Past events (manually curated). Events that pass from UPCOMING_EVENTS_SOURCE are merged in at runtime. */
export const STATIC_PAST_EVENTS: Event[] = [
  { title: 'CBC Agent Orchestration VIRTUAL', date: 'March 24, 2026 (Spring 2026)', description: 'Virtual session on agent orchestration - learn how to coordinate multiple AI agents to work together effectively on complex tasks.', buttons: [{ label: 'View Slides', url: '/agent-orchestration/CBC Agent Orchestration VIRTUAL.pdf' }, { label: 'View Screenshot', url: '/agent-orchestration/screenshot.png' }, { label: 'View Recording', url: 'https://drive.google.com/file/d/1rrE7bDKbgA8T65CWlGTnX3KvfoX8YpBf/view?usp=share_link' }], sortKey: '2026-03-24', semester: 'Spring 2026' },
  { title: 'MCP Deep Dive', date: 'March 3, 2026 (Spring 2026)', description: 'Deep dive into the Model Context Protocol (MCP) - explore advanced techniques for connecting AI models to tools and data sources.', buttons: [{ label: 'View Slides', url: 'https://docs.google.com/presentation/d/1tEf6GgcFDaBc7v00dlKuXz42N9Bqu9wq3xc_ltJgg_8/edit?usp=sharing' }, { label: 'View Group Photo', url: '/mcp-deep-dive-group.png' }, { label: 'Recording 1', url: 'https://drive.google.com/file/d/1feUC7-u3Lhi3hGNuHRUHruNmtqtIYEQb/view?usp=share_link' }, { label: 'Recording 2', url: 'https://drive.google.com/file/d/1isIYD3sZNzrmyFfClTjd3kMPM6VbHs7u/view?usp=share_link' }], sortKey: '2026-03-03', semester: 'Spring 2026' },
  { title: 'CBC Gen AI for Biotech', date: 'February 27, 2026 (Spring 2026)', description: 'AI is changing how we research new molecules and drugs! Come learn about applications of Generative AI in biotechnology.', buttons: [], sortKey: '2026-02-27', semester: 'Spring 2026' },
  { title: 'Pareto x Claude Builder Club @ Penn', date: 'February 25, 2026 (Spring 2026)', description: 'Casual mixer with Pareto VC to meet students who are building, ideating, or startup-curious—get advice, talk through ideas, and learn what investors look for.', buttons: [], sortKey: '2026-02-25', semester: 'Spring 2026' },
  { title: 'CBC Board Game Mixer', date: 'February 22, 2026 (Spring 2026)', description: 'Board game mixer at AGH 216A where members met and connected over games.', buttons: [], sortKey: '2026-02-22', semester: 'Spring 2026' },
  { title: 'CBC Technical Workshop #2: MCP', date: 'February 20, 2026 (Spring 2026)', description: 'Learned how to connect models to tools and data with MCP, held 4:30 - 5:30 PM at AGH 105.', buttons: [{ label: 'View Slides', url: 'https://docs.google.com/presentation/d/1IO76VRQdclsKVin2b3aLCv95vkWVgfpbemmgz47dsL8/edit?usp=sharing' }], sortKey: '2026-02-20', semester: 'Spring 2026' },
  { title: 'IPD 7990 Guest Lecture: Building with Claude', date: 'Spring 2026', description: 'Special guest lecture for IPD 7990 students exploring AI-assisted product development and building with Claude', buttons: [{ label: 'View Slides', url: 'https://docs.google.com/presentation/d/1BfjMl-q_RoPtoeb70pP8m3pJExGVVBwsSKQ-yfeo2P4/edit?usp=sharing' }, { label: 'GitHub Demo', url: 'https://github.com/Albinator3000/CBC_at_Penn_X_IPD_7990' }, { label: 'View Photos', url: '/ipd7990-gallery' }], sortKey: '2026-02-15', semester: 'Spring 2026' },
  { title: 'Entrepreneurship 101', date: 'February 13, 2026 (Spring 2026)', description: 'Everyone has ideas, but few have the right problem. Learn how to validate your idea, define your user, and leave with a one-page problem-solution brief you can actually build from.', buttons: [{ label: 'View Slides', url: 'https://docs.google.com/presentation/d/1S5hP7uGSgR7NzrfF48avIm2YsTWuXHwRnMG8rH2J-DI/edit?usp=sharing' }], sortKey: '2026-02-13', semester: 'Spring 2026' },
  { title: 'Claude Code Workshop', date: 'February 6, 2026 (Spring 2026)', description: 'Hands-on Claude code workshop at AGH 105A/B.', buttons: [{ label: 'View Slides', url: 'https://docs.google.com/presentation/d/187hnhzkoQTTZOfkPFAf0OfFfiL56HJQOL3hqB2h-wuU/edit?usp=sharing' }], sortKey: '2026-02-06', semester: 'Spring 2026' },
  { title: 'Claude Builder Club Semester Kickoff Event', date: 'Spring 2026', description: 'Join us for our Spring 2026 semester kickoff at AGH Lobby and Auditorium!', buttons: [{ label: 'View Slides', url: 'https://docs.google.com/presentation/d/1pgqkEegJXE3oIHvG7obZ-REh-vjB5x6eEiF4G-50hzo/edit?usp=sharing' }], sortKey: '2026-01-12', semester: 'Spring 2026' },
  { title: 'First Builder Hour', date: 'Spring 2026', description: 'Join us at AGH 216A for our first builder hour of the semester.', buttons: [], sortKey: '2026-01-19', semester: 'Spring 2026' },
  { title: 'CIS 5300 Recitation: NLP & Agentic Commerce with Claude', date: 'Spring 2026', description: 'Special recitation session for CIS 5300 students exploring natural language processing and agentic commerce with Claude', buttons: [{ label: 'View Slides', url: 'https://docs.google.com/presentation/d/1jJK_ZgkjfU7I0PE7rLg89iGMHZULG6OtygNbG8Eg9UE/edit?usp=sharing' }, { label: 'GitHub Demo', url: 'https://github.com/Albinator3000/CBC_at_Penn_X_CIS_5300' }], sortKey: '2026-02-01', semester: 'Spring 2026' },
  { title: 'CIS 2210 Recitation: Advanced Data Structures with Claude', date: 'Spring 2026', description: 'Special recitation session for CIS 2210 students exploring advanced data structures and AI-assisted programming', buttons: [{ label: 'View Slides', url: '/cis2210-recitation/Claude Builder Club X CIS 2210.pdf' }, { label: 'GitHub Demo', url: 'https://github.com/Albinator3000/CBC_at_Penn-X-CIS_2210' }, { label: 'Event Recording', url: 'https://upenn.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=f5941003-705e-479a-8857-b3db000c537a' }], sortKey: '2026-01-26', semester: 'Spring 2026' },
  { title: 'AI & The Future of the Tech Industry: Fireside Chat with Anthropic Staff', date: 'Fall 2025', description: 'Our first live fireside chat with industry experts, featuring David Wu, a Member of Technical Staff at Anthropic in their public sector software development group. Moderated by Alain and Albert', buttons: [{ label: 'View Photos', url: 'https://drive.google.com/drive/folders/1Grd0YGPtQ6wsABpUZb9waUOV6_qvTD0Z?usp=sharing' }], sortKey: '2025-11-15', semester: 'Fall 2025' },
  { title: 'Penn x Anthropic Hackathon', date: 'Fall 2025', description: 'Our inaugural hackathon, with over $3000 in prizes, and 229 hackers', buttons: [{ label: 'View Slides', url: '/hackathon/Hackathon Intro Slides.pdf' }, { label: 'View Photos', url: 'https://drive.google.com/drive/folders/1KCm8-qV4SwG_v3EP2eq0rdbGikqF3TdA?usp=sharing' }], sortKey: '2025-10-25', semester: 'Fall 2025' },
  { title: "Penn CBC Agents Masterclass 3 (Builder's Version): LLM Interpretability Workshop", date: 'Fall 2025', description: 'Third masterclass focusing on LLM interpretability techniques and understanding how language models work', buttons: [{ label: 'View Slides', url: "/masterclass3/Penn CBC LLM Interpretability Masterclass (Builder's Version).pdf" }, { label: 'View Photos', url: '/masterclass3-gallery' }, { label: 'GitHub Repo', url: 'https://github.com/Albinator3000/LLM-Interpretability-Dashboard-w-Ollama-HF-PyTorch-LangChain-CBC-PENN-' }, { label: 'Live Demo', url: 'https://albert-opher-ai-interpretability.streamlit.app' }], sortKey: '2025-11-01', semester: 'Fall 2025' },
  { title: 'Founder + Builder Mixer', date: 'Fall 2025', description: 'Slides from our Founder + Builder Mixer event with Diversatech, WAIAC, WUDAC, and ColorStack', buttons: [{ label: 'View Slides', url: '/mixer/Mixer Slides.pdf' }], sortKey: '2025-10-15', semester: 'Fall 2025' },
  { title: "Penn CBC Agents Masterclass 2 (Builder's Version)", date: 'Fall 2025', description: 'Second masterclass on building with Claude agents', buttons: [{ label: 'View Slides', url: '/masterclass2/Penn CBC Agents Masterclass 2 (Builder\'s Version).pdf' }], sortKey: '2025-10-10', semester: 'Fall 2025' },
  { title: 'Building Agents Workshop', date: 'Fall 2025', description: 'Workshop session on building with agents', buttons: [{ label: 'Watch Recording', url: 'https://teamwass.zoom.us/rec/play/4F-5erosyFauaH0aGeDlrArudPP5LNP7r-Ae8lIYthSpzUI-thXLGZzgrf3xsUHQaFTMm2xANno1pSVt.CBjygpR0e8KfX704?eagerLoadZvaPages=sidemenu.billing.plan_management&isReferralProgramEnabled=false&isReferralProgramAvailable=false&accessLevel=meeting&canPlayFromShare=true&from=share_recording_detail&continueMode=true&componentName=rec-play&originRequestUrl=https%3A%2F%2Fteamwass.zoom.us%2Frec%2Fshare%2FZMiY-gjvVoCInXlyShrTAd0wR5sptHEdkCaQ8W2W0GT-71M3LNcXmF9DVMZBeY00.Acq9nVyXM87f0oFl' }], sortKey: '2025-10-05', semester: 'Fall 2025' },
  { title: 'Penn CBC Agents Masterclass 1 (Builders Version)', date: 'Fall 2025', description: 'First masterclass on building with Claude agents', buttons: [{ label: 'View Slides', url: '/masterclass1/Penn CBC Agents Masterclass 1 (Builders Version).pdf' }], sortKey: '2025-09-25', semester: 'Fall 2025' },
  { title: 'CBC at Penn First Meeting', date: 'Fall 2025', description: 'Our inaugural meeting deck introducing CBC at Penn', buttons: [{ label: 'View Slides', url: '/first-meeting/CBC at Penn First Meeting Deck.pdf' }], sortKey: '2025-09-15', semester: 'Fall 2025' },
];

function isUpcoming(event: Event, asOf: Date): boolean {
  const endInstant = getEventEndInstant(event);
  // Treat the event as "still upcoming" only until (but not including) its end instant.
  // This ensures events are removed when the "next day starts in ET" instant is reached.
  return !!endInstant && endInstant > asOf;
}

/** Returns upcoming events (sortKey >= asOf), sorted by sortKey. Default asOf = now. */
export function getUpcomingEvents(asOf: Date = new Date()): Event[] {
  return UPCOMING_EVENTS_SOURCE.filter((e) => isUpcoming(e, asOf))
    .sort((a, b) => (a.sortKey ?? '9999').localeCompare(b.sortKey ?? '9999'));
}

/** Events from UPCOMING_EVENTS_SOURCE that are now past (sortKey < asOf). */
export function getNewlyPastFromUpcoming(asOf: Date = new Date()): Event[] {
  return UPCOMING_EVENTS_SOURCE.filter((e) => {
    const endInstant = getEventEndInstant(e);
    // Once endInstant is reached, the event should move into "past".
    return !!endInstant && endInstant <= asOf;
  });
}

/** All past events: static list + any that have passed from upcoming. Sorted newest first. */
export function getPastEvents(asOf: Date = new Date()): Event[] {
  const newlyPast = getNewlyPastFromUpcoming(asOf);
  return [...STATIC_PAST_EVENTS, ...newlyPast].sort((a, b) =>
    (b.sortKey ?? '0000').localeCompare(a.sortKey ?? '0000')
  );
}

/** True if a button label is a registration / RSVP CTA (hidden on past event cards). */
export function isRegistrationLikeButton(label: string): boolean {
  const s = label.trim().toLowerCase();
  return (
    /\bregister\b/.test(s) ||
    /\brsvp\b/.test(s) ||
    /\bsign\s*up\b/.test(s) ||
    /\bsignup\b/.test(s)
  );
}

/** Buttons to show for a past event (registration-style CTAs removed). */
export function buttonsForPastEventDisplay(buttons: EventButton[]): EventButton[] {
  return buttons.filter((b) => !isRegistrationLikeButton(b.label));
}
