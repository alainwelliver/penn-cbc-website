export default function PastMeetings() {
  const meetings = [
    {
      title: 'CBC at Penn First Meeting',
      date: 'Fall 2025',
      file: '/CBC at Penn First Meeting Deck.pdf',
      description: 'Our inaugural meeting deck introducing CBC at Penn',
      type: 'slides'
    },
    {
      title: 'Penn CBC Agents Masterclass 1 (Builders Version)',
      date: 'Fall 2025',
      file: '/Penn CBC Agents Masterclass 1 (Builders Version).pdf',
      description: 'First masterclass on building with Claude agents',
      type: 'slides'
    },
    {
      title: 'Penn CBC Agents Masterclass 2 (Builder\'s Version)',
      date: 'Fall 2025',
      file: '/Penn CBC Agents Masterclass 2 (Builder\'s Version).pdf',
      description: 'Second masterclass on building with Claude agents',
      type: 'slides'
    },
    {
      title: 'Founder + Builder Mixer',
      date: 'Fall 2025',
      file: '/Mixer Slides.pdf',
      description: 'Slides from our Founder + Builder Mixer event with Diversatech, WAIAC, WUDAC, and ColorStack',
      type: 'slides'
    },
    {
      title: 'Building Agents Workshop',
      date: 'October 1, 2025',
      file: 'https://teamwass.zoom.us/rec/play/4F-5erosyFauaH0aGeDlrArudPP5LNP7r-Ae8lIYthSpzUI-thXLGZzgrf3xsUHQaFTMm2xANno1pSVt.CBjygpR0e8KfX704?eagerLoadZvaPages=sidemenu.billing.plan_management&isReferralProgramEnabled=false&isReferralProgramAvailable=false&accessLevel=meeting&canPlayFromShare=true&from=share_recording_detail&continueMode=true&componentName=rec-play&originRequestUrl=https%3A%2F%2Fteamwass.zoom.us%2Frec%2Fshare%2FZMiY-gjvVoCInXlyShrTAd0wR5sptHEdkCaQ8W2W0GT-71M3LNcXmF9DVMZBeY00.Acq9nVyXM87f0oFl',
      description: 'Workshop session on building with agents',
      type: 'recording'
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
          Past Meeting Slides & Recordings
        </h1>

        <div className="grid gap-6 md:grid-cols-2">
          {meetings.map((meeting, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 border-2"
              style={{ borderColor: '#D97757' }}
            >
              <h2 className="text-xl font-bold mb-2 font-sans" style={{ color: '#D97757' }}>
                {meeting.title}
              </h2>
              <p className="text-gray-600 text-sm mb-3 font-sans">{meeting.date}</p>
              <p className="text-gray-700 mb-4 font-sans">{meeting.description}</p>

              <a
                href={meeting.file}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-white font-sans font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg hover:opacity-90"
                style={{ backgroundColor: '#D97757' }}
              >
                {meeting.type === 'recording' ? 'Watch Recording' : 'View Slides'}
              </a>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
