export default function Foundry() {
  const eligibilityItems = [
    "You have an idea or an early build you're committed to",
    "You'll show up, put in the work, and ship—no matter where you are today",
    'You want real feedback, accountability, and a place to be seen',
    "You're ready to collaborate: find co-founders, get advice, or test with peers",
  ];

  const benefits = [
    { label: 'Website showcase', text: 'Featured listing with your project, name, and contact so you can find teammates and get feedback.' },
    { label: 'Beta user network', text: 'Private channel with 700+ Penn students to share your MVP and get real user feedback.' },
    { label: 'Showcase opportunity', text: 'Present at our end-of-semester event to the Penn community and potential VC partners.' },
    { label: 'Workshop series', text: 'Technical and entrepreneurship workshops across the full product development cycle.' },
    { label: 'Builder community', text: 'Connect with fellow builders, find collaborators, and get unstuck together.' },
  ];

  return (
    <div
      className="min-h-screen flex flex-col items-center py-20 px-8"
      style={{ backgroundColor: '#FBF2E9' }}
    >
      <main className="w-full max-w-4xl">
        {/* Hero Section */}
        <section className="mb-16">
          <h1
            className="text-5xl font-bold mb-4 text-center font-sans"
            style={{ color: '#D97757' }}
          >
            CBC Foundry
          </h1>
          <h2 className="text-2xl font-semibold mb-12 text-center font-sans" style={{ color: '#D97757', opacity: 0.8 }}>
            Your launchpad for building real AI products at Penn
          </h2>
        </section>

        {/* Program Overview */}
        <section className="mb-16">
          <p className="text-base lg:text-lg text-center font-sans leading-relaxed" style={{ color: '#333' }}>
            CBC Foundry supports Penn students building real AI products. Whether you&apos;re technical, business-focused, or somewhere in between—if you have an idea worth building (or want to join a team), we&apos;ll help you ship. We work with projects at all stages and skill levels.
          </p>
        </section>

        {/* Eligibility Section */}
        <section className="mb-16">
          <h2
            className="text-2xl font-bold text-center font-sans mb-8"
            style={{ color: '#D97757' }}
          >
            This is for you if
          </h2>
          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-sm border border-gray-200/80 overflow-hidden">
            <div className="flex">
              <div className="w-1 shrink-0" style={{ backgroundColor: '#D97757' }} aria-hidden />
              <ul className="flex-1 py-6 pl-6 pr-8 font-sans space-y-5" style={{ color: '#171717' }}>
                {eligibilityItems.map((item, index) => (
                  <li key={index} className="flex gap-4 text-base lg:text-lg leading-relaxed items-start">
                    <span className="shrink-0 mt-0.5" style={{ color: '#D97757' }} aria-hidden>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Benefits Section — single coherent block */}
        <section className="mb-16">
          <h2
            className="text-2xl font-bold text-center font-sans mb-8"
            style={{ color: '#D97757' }}
          >
            What you&apos;ll get
          </h2>
          <div className="bg-white rounded-xl p-8 lg:p-10 shadow-sm border border-gray-200/80 max-w-3xl mx-auto">
            <ul className="font-sans space-y-6" style={{ color: '#171717' }}>
              {benefits.map((benefit, index) => (
                <li key={index} className="flex flex-col sm:flex-row sm:gap-3 sm:items-baseline">
                  <span className="font-semibold shrink-0 sm:w-40" style={{ color: '#D97757' }}>
                    {benefit.label}
                  </span>
                  <span className="text-gray-600 text-base lg:text-lg leading-relaxed">
                    {benefit.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="mb-16 text-center">
          <a
            href="https://forms.gle/UUs8KEcqgH9Hggo76"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white font-sans font-semibold py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl hover:opacity-90"
            style={{ backgroundColor: '#D97757' }}
          >
            Join Now!
          </a>
          <p className="mt-4 text-sm font-sans" style={{ color: '#666' }}>
            Submit one application per project. Teams: have one person apply on behalf of the group.
          </p>
        </section>

        {/* Projects Showcase Section */}
        <section>
          <div className="mb-6">
            <h2
              className="text-3xl font-bold text-center font-sans"
              style={{ color: '#D97757' }}
            >
              Foundry Projects
            </h2>
            <div
              className="h-0.5 mt-2 mx-auto"
              style={{ backgroundColor: '#D97757', width: '200px' }}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[200px]">
            {/* Placeholder state - grid structure ready for future project cards */}
            <div className="col-span-full flex flex-col items-center justify-center py-16 px-6 bg-white rounded-xl border-2 border-dashed" style={{ borderColor: '#D97757' }}>
              <h3 className="text-2xl font-bold mb-2 font-sans" style={{ color: '#D97757' }}>
                Coming Soon
              </h3>
              <p className="text-gray-600 font-sans text-center">
                Apply to be among our first cohort!
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
