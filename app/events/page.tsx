'use client';

import { motion } from 'framer-motion';

export default function Events() {
  const futureEvents: { title: string; date: string; time: string; description: string; buttons: { label: string; url: string }[] }[] = [
    {
      title: 'Build the Future of Learning',
      date: 'Mar 23, 2026',
      time: '2:00 PM',
      description: 'Curious about AI in education? Join us to explore essential AI fundamentals, discuss the latest trends shaping equitable learning, and put those ideas into practice by building a real education tool together in minutes using Claude Code. Co-hosted with AIED @ Penn.',
      buttons: [{ label: 'Register on Luma', url: 'https://luma.com/t1d6o1hv' }]
    }
  ];

  const pastEvents = [
    {
      title: 'MCP Deep Dive',
      date: 'March 3, 2026 (Spring 2026)',
      description: 'Deep dive into the Model Context Protocol (MCP) - explore advanced techniques for connecting AI models to tools and data sources.',
      buttons: [
        {
          label: 'View Slides',
          url: 'https://docs.google.com/presentation/d/1tEf6GgcFDaBc7v00dlKuXz42N9Bqu9wq3xc_ltJgg_8/edit?usp=sharing'
        },
        {
          label: 'View Group Photo',
          url: '/mcp-deep-dive-group.png'
        },
        {
          label: 'Recording 1',
          url: 'https://drive.google.com/file/d/1feUC7-u3Lhi3hGNuHRUHruNmtqtIYEQb/view?usp=share_link'
        },
        {
          label: 'Recording 2',
          url: 'https://drive.google.com/file/d/1isIYD3sZNzrmyFfClTjd3kMPM6VbHs7u/view?usp=share_link'
        }
      ],
      sortKey: '2026-03-03'
    },
    {
      title: 'CBC Gen AI for Biotech',
      date: 'February 27, 2026 (Spring 2026)',
      description: 'AI is changing how we research new molecules and drugs! Come learn about applications of Generative AI in biotechnology.',
      buttons: [],
      sortKey: '2026-02-27'
    },
    {
      title: 'Pareto x Claude Builder Club @ Penn',
      date: 'February 25, 2026 (Spring 2026)',
      description: 'Casual mixer with Pareto VC to meet students who are building, ideating, or startup-curious—get advice, talk through ideas, and learn what investors look for.',
      buttons: [],
      sortKey: '2026-02-25'
    },
    {
      title: 'CBC Board Game Mixer',
      date: 'February 22, 2026 (Spring 2026)',
      description: 'Board game mixer at AGH 216A where members met and connected over games.',
      buttons: [],
      sortKey: '2026-02-22'
    },
    {
      title: 'CBC Technical Workshop #2: MCP',
      date: 'February 20, 2026 (Spring 2026)',
      description: 'Learned how to connect models to tools and data with MCP, held 4:30 - 5:30 PM at AGH 105.',
      buttons: [],
      sortKey: '2026-02-20'
    },
    {
      title: 'IPD 7990 Guest Lecture: Building with Claude',
      date: 'Spring 2026',
      description: 'Special guest lecture for IPD 7990 students exploring AI-assisted product development and building with Claude',
      buttons: [
        {
          label: 'View Slides',
          url: 'https://docs.google.com/presentation/d/1BfjMl-q_RoPtoeb70pP8m3pJExGVVBwsSKQ-yfeo2P4/edit?usp=sharing'
        },
        {
          label: 'GitHub Demo',
          url: 'https://github.com/Albinator3000/CBC_at_Penn_X_IPD_7990'
        },
        {
          label: 'View Photos',
          url: '/ipd7990-gallery'
        }
      ],
      sortKey: '2026-02-15'
    },
    {
      title: 'Entrepreneurship 101',
      date: 'February 13, 2026 (Spring 2026)',
      description: 'Everyone has ideas, but few have the right problem. Learn how to validate your idea, define your user, and leave with a one-page problem-solution brief you can actually build from.',
      buttons: [],
      sortKey: '2026-02-13'
    },
    {
      title: 'Claude Code Workshop',
      date: 'February 6, 2026 (Spring 2026)',
      description: 'Hands-on Claude code workshop at AGH 105A/B.',
      buttons: [],
      sortKey: '2026-02-06'
    },
    {
      title: 'Claude Builder Club Semester Kickoff Event',
      date: 'Spring 2026',
      description: 'Join us for our Spring 2026 semester kickoff at AGH Lobby and Auditorium!',
      buttons: [],
      sortKey: '2026-01-12'
    },
    {
      title: 'First Builder Hour',
      date: 'Spring 2026',
      description: 'Join us at AGH 216A for our first builder hour of the semester.',
      buttons: [],
      sortKey: '2026-01-19'
    },
    {
      title: 'CIS 5300 Recitation: NLP & Agentic Commerce with Claude',
      date: 'Spring 2026',
      description: 'Special recitation session for CIS 5300 students exploring natural language processing and agentic commerce with Claude',
      buttons: [
        {
          label: 'View Slides',
          url: 'https://docs.google.com/presentation/d/1jJK_ZgkjfU7I0PE7rLg89iGMHZULG6OtygNbG8Eg9UE/edit?usp=sharing'
        },
        {
          label: 'GitHub Demo',
          url: 'https://github.com/Albinator3000/CBC_at_Penn_X_CIS_5300'
        }
      ],
      sortKey: '2026-02-01'
    },
    {
      title: 'CIS 2210 Recitation: Advanced Data Structures with Claude',
      date: 'Spring 2026',
      description: 'Special recitation session for CIS 2210 students exploring advanced data structures and AI-assisted programming',
      buttons: [
        {
          label: 'View Slides',
          url: '/cis2210-recitation/Claude Builder Club X CIS 2210.pdf'
        },
        {
          label: 'GitHub Demo',
          url: 'https://github.com/Albinator3000/CBC_at_Penn-X-CIS_2210'
        },
        {
          label: 'Event Recording',
          url: 'https://upenn.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=f5941003-705e-479a-8857-b3db000c537a'
        }
      ],
      sortKey: '2026-01-26'
    },
    {
      title: 'AI & The Future of the Tech Industry: Fireside Chat with Anthropic Staff',
      date: 'Fall 2025',
      description: 'Our first live fireside chat with industry experts, featuring David Wu, a Member of Technical Staff at Anthropic in their public sector software development group. Moderated by Alain and Albert',
      buttons: [
        {
          label: 'View Photos',
          url: 'https://drive.google.com/drive/folders/1Grd0YGPtQ6wsABpUZb9waUOV6_qvTD0Z?usp=sharing'
        }
      ],
      sortKey: '2025-11-15'
    },
    {
      title: 'Penn x Anthropic Hackathon',
      date: 'Fall 2025',
      description: 'Our inaugural hackathon, with over $3000 in prizes, and 229 hackers',
      buttons: [
        {
          label: 'View Slides',
          url: '/hackathon/Hackathon Intro Slides.pdf'
        },
        {
          label: 'View Photos',
          url: 'https://drive.google.com/drive/folders/1KCm8-qV4SwG_v3EP2eq0rdbGikqF3TdA?usp=sharing'
        }
      ],
      sortKey: '2025-10-25'
    },
    {
      title: 'Penn CBC Agents Masterclass 3 (Builder\'s Version): LLM Interpretability Workshop',
      date: 'Fall 2025',
      description: 'Third masterclass focusing on LLM interpretability techniques and understanding how language models work',
      buttons: [
        {
          label: 'View Slides',
          url: '/masterclass3/Penn CBC LLM Interpretability Masterclass (Builder\'s Version).pdf'
        },
        {
          label: 'View Photos',
          url: '/masterclass3-gallery'
        },
        {
          label: 'GitHub Repo',
          url: 'https://github.com/Albinator3000/LLM-Interpretability-Dashboard-w-Ollama-HF-PyTorch-LangChain-CBC-PENN-'
        },
        {
          label: 'Live Demo',
          url: 'https://albert-opher-ai-interpretability.streamlit.app'
        }
      ],
      sortKey: '2025-11-01'
    },
    {
      title: 'Founder + Builder Mixer',
      date: 'Fall 2025',
      description: 'Slides from our Founder + Builder Mixer event with Diversatech, WAIAC, WUDAC, and ColorStack',
      buttons: [
        {
          label: 'View Slides',
          url: '/mixer/Mixer Slides.pdf'
        }
      ],
      sortKey: '2025-10-15'
    },
    {
      title: 'Penn CBC Agents Masterclass 2 (Builder\'s Version)',
      date: 'Fall 2025',
      description: 'Second masterclass on building with Claude agents',
      buttons: [
        {
          label: 'View Slides',
          url: '/masterclass2/Penn CBC Agents Masterclass 2 (Builder\'s Version).pdf'
        }
      ],
      sortKey: '2025-10-10'
    },
    {
      title: 'Building Agents Workshop',
      date: 'Fall 2025',
      description: 'Workshop session on building with agents',
      buttons: [
        {
          label: 'Watch Recording',
          url: 'https://teamwass.zoom.us/rec/play/4F-5erosyFauaH0aGeDlrArudPP5LNP7r-Ae8lIYthSpzUI-thXLGZzgrf3xsUHQaFTMm2xANno1pSVt.CBjygpR0e8KfX704?eagerLoadZvaPages=sidemenu.billing.plan_management&isReferralProgramEnabled=false&isReferralProgramAvailable=false&accessLevel=meeting&canPlayFromShare=true&from=share_recording_detail&continueMode=true&componentName=rec-play&originRequestUrl=https%3A%2F%2Fteamwass.zoom.us%2Frec%2Fshare%2FZMiY-gjvVoCInXlyShrTAd0wR5sptHEdkCaQ8W2W0GT-71M3LNcXmF9DVMZBeY00.Acq9nVyXM87f0oFl'
        }
      ],
      sortKey: '2025-10-05'
    },
    {
      title: 'Penn CBC Agents Masterclass 1 (Builders Version)',
      date: 'Fall 2025',
      description: 'First masterclass on building with Claude agents',
      buttons: [
        {
          label: 'View Slides',
          url: '/masterclass1/Penn CBC Agents Masterclass 1 (Builders Version).pdf'
        }
      ],
      sortKey: '2025-09-25'
    },
    {
      title: 'CBC at Penn First Meeting',
      date: 'Fall 2025',
      description: 'Our inaugural meeting deck introducing CBC at Penn',
      buttons: [
        {
          label: 'View Slides',
          url: '/first-meeting/CBC at Penn First Meeting Deck.pdf'
        }
      ],
      sortKey: '2025-09-15'
    }
  ].sort((a, b) => (b.sortKey ?? '0000').localeCompare(a.sortKey ?? '0000'));

  return (
    <div
      className="min-h-screen flex flex-col items-center py-20 px-8"
      style={{
        background: 'linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)',
        transition: 'background 0.3s ease'
      }}
    >
      <main className="w-full max-w-4xl">
        <h1
          className="text-4xl font-bold mb-12 text-center font-sans"
          style={{
            color: '#D97757',
            fontSize: 'clamp(2rem, 4vw, 2.5rem)'
          }}
        >
          Events
        </h1>

        {/* Future Events Section */}
        <section className="mb-16">
          <div className="mb-6">
            <h2
              className="text-3xl font-bold text-center font-sans"
              style={{
                color: '#D97757',
                fontSize: 'clamp(1.75rem, 3vw, 2rem)'
              }}
            >
              Upcoming Events
            </h2>
            <div
              className="h-0.5 mt-2 mx-auto transition-all duration-300"
              style={{ backgroundColor: '#D97757', width: '200px' }}
            />
          </div>

          <div className={futureEvents.length === 1 ? "flex justify-center" : ""}>
            {futureEvents.length === 0 ? (
              <p className="text-center py-8 font-sans" style={{ color: 'var(--text-secondary)' }}>
                No upcoming events at the moment. Check back soon!
              </p>
            ) : (
            <div className={`grid gap-6 w-full ${futureEvents.length === 1 ? 'md:grid-cols-1 max-w-xl' : 'md:grid-cols-2'}`}>
              {futureEvents.map((event, index) => (
                <motion.div
                  key={index}
                  className="rounded-xl p-6 transition-all duration-300 border-2 hover:scale-[1.03] hover:-translate-y-1"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    borderColor: '#D97757',
                    boxShadow: 'var(--shadow-sm)',
                    transition: 'all 0.3s ease'
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-bold mb-2 font-sans" style={{ color: '#D97757' }}>
                    {event.title}
                  </h3>
                  <p className="text-sm mb-1 font-sans" style={{ color: 'var(--text-secondary)' }}>{event.date}</p>
                  <p className="text-sm mb-3 font-sans" style={{ color: 'var(--text-secondary)' }}>{event.time}</p>
                  <p className="mb-4 font-sans" style={{ color: 'var(--text-tertiary)' }}>{event.description}</p>

                  <div className="flex flex-wrap gap-3">
                    {event.buttons.map((button, buttonIndex) => (
                      <a
                        key={buttonIndex}
                        href={button.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-white font-sans font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg hover:opacity-90"
                        style={{ backgroundColor: '#D97757' }}
                      >
                        {button.label}
                      </a>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
            )}
          </div>
        </section>

        {/* Interest Survey Section */}
        <section className="mb-16">
          <div
            className="w-full rounded-xl p-6 text-center transition-all duration-300 border-2"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: '#D97757',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <p className="font-sans mb-4" style={{ color: 'var(--text-primary)', fontSize: '1.1rem' }}>
              Share your interests and help us tailor our events to what you want to build and learn. Tell us what topics, formats, and activities you&apos;d like to see this semester.
            </p>
            <a
              href="https://forms.gle/DahS8694gtXrAicU9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white font-sans font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg hover:opacity-90"
              style={{ backgroundColor: '#D97757' }}
            >
              CBC Spring 2026 Interest Survey
            </a>
          </div>
        </section>

        {/* Calendar Section */}
        <section className="mb-16">
          <div className="mb-6">
            <h2
              className="text-3xl font-bold text-center font-sans"
              style={{
                color: '#D97757',
                fontSize: 'clamp(1.75rem, 3vw, 2rem)'
              }}
            >
              Our Club Calendar
            </h2>
            <div
              className="h-0.5 mt-2 mx-auto transition-all duration-300"
              style={{ backgroundColor: '#D97757', width: '200px' }}
            />
          </div>
          <div
            className="w-full rounded-xl p-4 overflow-hidden border-2 transition-all duration-300"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: '#D97757',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <iframe
              src="https://calendar.google.com/calendar/embed?src=994e94a9b2b5c4e38c53eb412eb729362e86cd701169e17b6a0a4e70f0928f31%40group.calendar.google.com&ctz=America%2FNew_York"
              style={{ border: 0 }}
              width="100%"
              height="600"
              frameBorder="0"
              scrolling="no"
              title="Claude Builder Club Events Calendar"
            />
          </div>
        </section>

        {/* Past Events Section */}
        <section>
          <div className="mb-6">
            <h2
              className="text-3xl font-bold text-center font-sans"
              style={{
                color: '#D97757',
                fontSize: 'clamp(1.75rem, 3vw, 2rem)'
              }}
            >
              Past Events
            </h2>
            <div
              className="h-0.5 mt-2 mx-auto transition-all duration-300"
              style={{ backgroundColor: '#D97757', width: '200px' }}
            />
          </div>

          {/* Spring 2026 Divider */}
          <div className="mb-6 mt-8">
            <h3
              className="text-2xl font-bold text-center font-sans"
              style={{
                color: '#D97757',
                fontSize: 'clamp(1.5rem, 2.5vw, 1.75rem)'
              }}
            >
              Spring 2026
            </h3>
            <div
              className="h-0.5 mt-2 mx-auto transition-all duration-300"
              style={{ backgroundColor: '#D97757', width: '150px' }}
            />
          </div>

          <div className={`grid gap-6 mb-12 ${pastEvents.filter(event => event.date.includes('Spring 2026')).length === 1 ? 'md:grid-cols-1 max-w-2xl mx-auto' : 'md:grid-cols-2'}`}>
            {pastEvents.filter(event => event.date.includes('Spring 2026')).map((event, index) => (
              <motion.div
                key={index}
                className="rounded-xl p-6 transition-all duration-300 border-2 hover:scale-[1.03] hover:-translate-y-1"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: '#D97757',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'all 0.3s ease'
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold mb-2 font-sans" style={{ color: '#D97757' }}>
                  {event.title}
                </h3>
                <p className="text-sm mb-3 font-sans" style={{ color: 'var(--text-secondary)' }}>{event.date}</p>
                <p className="mb-4 font-sans" style={{ color: 'var(--text-tertiary)' }}>{event.description}</p>

                <div className="flex flex-wrap gap-3">
                  {event.buttons.map((button, buttonIndex) => (
                    <a
                      key={buttonIndex}
                      href={button.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-white font-sans font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg hover:opacity-90"
                      style={{ backgroundColor: '#D97757' }}
                    >
                      {button.label}
                    </a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Fall 2025 Divider */}
          <div className="mb-6 mt-8">
            <h3
              className="text-2xl font-bold text-center font-sans"
              style={{
                color: '#D97757',
                fontSize: 'clamp(1.5rem, 2.5vw, 1.75rem)'
              }}
            >
              Fall 2025
            </h3>
            <div
              className="h-0.5 mt-2 mx-auto transition-all duration-300"
              style={{ backgroundColor: '#D97757', width: '150px' }}
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {pastEvents.filter(event => event.date.includes('Fall 2025')).map((event, index) => (
              <motion.div
                key={index}
                className="rounded-xl p-6 transition-all duration-300 border-2 hover:scale-[1.03] hover:-translate-y-1"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: '#D97757',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'all 0.3s ease'
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <h3 className="text-xl font-bold mb-2 font-sans" style={{ color: '#D97757' }}>
                  {event.title}
                </h3>
                <p className="text-sm mb-3 font-sans" style={{ color: 'var(--text-secondary)' }}>{event.date}</p>
                <p className="mb-4 font-sans" style={{ color: 'var(--text-tertiary)' }}>{event.description}</p>

                <div className="flex flex-wrap gap-3">
                  {event.buttons.map((button, buttonIndex) => (
                    <a
                      key={buttonIndex}
                      href={button.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-white font-sans font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg hover:opacity-90"
                      style={{ backgroundColor: '#D97757' }}
                    >
                      {button.label}
                    </a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
