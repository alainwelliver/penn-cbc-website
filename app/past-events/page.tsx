export default function PastEvents() {
  const events = [
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
          url: '/Hackathon Intro Slides.pdf'
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
          url: '/Penn CBC LLM Interpretability Masterclass (Builder\'s Version).pdf'
        },
        {
          label: 'View Photos',
          url: '/masterclass3-gallery'
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
          url: '/Mixer Slides.pdf'
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
          url: '/Penn CBC Agents Masterclass 2 (Builder\'s Version).pdf'
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
          url: '/Penn CBC Agents Masterclass 1 (Builders Version).pdf'
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
          url: '/CBC at Penn First Meeting Deck.pdf'
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
          className="text-4xl font-bold mb-8 text-center font-sans"
          style={{ color: '#D97757' }}
        >
          Past Event Slides, Photos, & Recordings
        </h1>

        {/* Fall 2025 Divider */}
        <div className="mb-6">
          <h2
            className="text-2xl font-bold text-center font-sans"
            style={{ color: '#D97757' }}
          >
            Fall 2025
          </h2>
          <div
            className="h-0.5 mt-2 mx-auto"
            style={{ backgroundColor: '#D97757', width: '150px' }}
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 border-2"
              style={{ borderColor: '#D97757' }}
            >
              <h2 className="text-xl font-bold mb-2 font-sans" style={{ color: '#D97757' }}>
                {event.title}
              </h2>
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
      </main>
    </div>
  );
}
