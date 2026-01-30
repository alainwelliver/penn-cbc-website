'use client';

export default function Events() {
  const futureEvents = [
    {
      title: 'First Builder Hour',
      date: 'February 1, 2026',
      time: '5:00 PM - 7:00 PM',
      description: 'Join us at AGH 216A for our first builder hour of the semester.',
      buttons: [
        {
          label: 'Register on Luma',
          url: 'https://luma.com/4kp6bjt4'
        }
      ]
    },
    {
      title: 'Claude Builder Club Semester Kickoff Event',
      date: 'February 3, 2026',
      time: '7:00 PM - 8:00 PM',
      description: 'Join us for our Spring 2026 semester kickoff at AGH Lobby and Auditorium!',
      buttons: [
        {
          label: 'Register on Luma',
          url: 'https://luma.com/l83hman4'
        }
      ]
    },
    {
      title: 'Claude Code Workshop',
      date: 'February 6, 2026',
      time: '4:00 PM - 5:30 PM',
      description: 'Hands-on Claude code workshop at AGH 105A/B.',
      buttons: [
        {
          label: 'Register on Luma',
          url: 'https://luma.com/20vudovc'
        }
      ]
    }
  ];

  const pastEvents = [
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
    }
  ];

  return (
    <div
      className="min-h-screen flex flex-col items-center py-20 px-8"
      style={{ backgroundColor: '#FBF2E9' }}
    >
      <main className="w-full max-w-4xl">
        <h1
          className="text-4xl font-bold mb-12 text-center font-sans"
          style={{ color: '#D97757' }}
        >
          Events
        </h1>

        {/* Future Events Section */}
        <section className="mb-16">
          <div className="mb-6">
            <h2
              className="text-3xl font-bold text-center font-sans"
              style={{ color: '#D97757' }}
            >
              Upcoming Events
            </h2>
            <div
              className="h-0.5 mt-2 mx-auto"
              style={{ backgroundColor: '#D97757', width: '200px' }}
            />
          </div>

          <div className={futureEvents.length === 1 ? "flex justify-center" : ""}>
            <div className={`grid gap-6 w-full ${futureEvents.length === 1 ? 'md:grid-cols-1 max-w-xl' : 'md:grid-cols-2'}`}>
              {futureEvents.map((event, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg transition-all duration-300 border-2"
                  style={{
                    borderColor: '#D97757',
                    animation: `pulse-subtle 3s ease-in-out infinite`,
                    animationDelay: `${index * 0.5}s`
                  }}
                >
                  <h3 className="text-xl font-bold mb-2 font-sans" style={{ color: '#D97757' }}>
                    {event.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-1 font-sans">{event.date}</p>
                  <p className="text-gray-600 text-sm mb-3 font-sans">{event.time}</p>
                  <p className="text-gray-700 mb-4 font-sans">{event.description}</p>

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
                </div>
              ))}
            </div>
          </div>
          <style jsx>{`
            @keyframes pulse-subtle {
              0%, 100% {
                transform: scale(1);
                box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
              }
              50% {
                transform: scale(1.02);
                box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
              }
            }
          `}</style>
        </section>

        {/* Past Events Section */}
        <section>
          <div className="mb-6">
            <h2
              className="text-3xl font-bold text-center font-sans"
              style={{ color: '#D97757' }}
            >
              Past Events
            </h2>
            <div
              className="h-0.5 mt-2 mx-auto"
              style={{ backgroundColor: '#D97757', width: '200px' }}
            />
          </div>

          {/* Spring 2026 Divider */}
          <div className="mb-6 mt-8">
            <h3
              className="text-2xl font-bold text-center font-sans"
              style={{ color: '#D97757' }}
            >
              Spring 2026
            </h3>
            <div
              className="h-0.5 mt-2 mx-auto"
              style={{ backgroundColor: '#D97757', width: '150px' }}
            />
          </div>

          <div className={`grid gap-6 mb-12 ${pastEvents.filter(event => event.date.includes('Spring 2026')).length === 1 ? 'md:grid-cols-1 max-w-2xl mx-auto' : 'md:grid-cols-2'}`}>
            {pastEvents.filter(event => event.date.includes('Spring 2026')).map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 border-2"
                style={{ borderColor: '#D97757' }}
              >
                <h3 className="text-xl font-bold mb-2 font-sans" style={{ color: '#D97757' }}>
                  {event.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3 font-sans">{event.date}</p>
                <p className="text-gray-700 mb-4 font-sans">{event.description}</p>

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
              </div>
            ))}
          </div>

          {/* Fall 2025 Divider */}
          <div className="mb-6 mt-8">
            <h3
              className="text-2xl font-bold text-center font-sans"
              style={{ color: '#D97757' }}
            >
              Fall 2025
            </h3>
            <div
              className="h-0.5 mt-2 mx-auto"
              style={{ backgroundColor: '#D97757', width: '150px' }}
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {pastEvents.filter(event => event.date.includes('Fall 2025')).map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 border-2"
                style={{ borderColor: '#D97757' }}
              >
                <h3 className="text-xl font-bold mb-2 font-sans" style={{ color: '#D97757' }}>
                  {event.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3 font-sans">{event.date}</p>
                <p className="text-gray-700 mb-4 font-sans">{event.description}</p>

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
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
