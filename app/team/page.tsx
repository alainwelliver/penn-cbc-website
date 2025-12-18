import Image from 'next/image';

export default function Team() {
  const founders = [
    {
      name: 'Albert Opher',
      title: 'CBA | Wharton + SEAS \'25 (M&T \'25), JWS \'25',
      subtitle: 'Club Administrator, Masterclasses Lead',
      role: 'Co-President',
      image: '/team/albert.jpg',
      bio: 'Focused on AI interpretability and infrastructure, agentic systems, and using emerging technologies to build tools that help teams ship faster.',
      imagePosition: '100% -10%'
    },
    {
      name: 'Alain Welliver',
      title: 'CBA | SEAS \'26',
      subtitle: 'External Specialist, Builder Hours Lead',
      role: 'Co-President',
      image: '/team/alain.jpg',
      bio: 'Reimagining the way we learn new things, get around, and interact safely with AI.',
      imagePosition: '50% 45%'
    }
  ];

  const facultyAdvisor = {
    name: 'Chris Callison-Burch',
    title: 'Professor of Computer and Information Science',
    role: 'Faculty Advisor',
    image: '/team/CCB.jpeg',
    bio: 'Professor of Computer and Information Science at Penn teaching Artificial Intelligence with 200+ publications cited 30,000+ times, Sloan Research Fellow, recipient of faculty research awards from Google, Microsoft, Amazon, Facebook, and Roblox, and recipient of funding from DARPA, IARPA, and NSF.',
    bioLink: 'https://www.cis.upenn.edu/~ccb/',
    imagePosition: '50% 50%'
  };

  const leadership: typeof founders = [];

  return (
    <div
      className="min-h-screen flex flex-col items-center py-20 px-8"
      style={{ backgroundColor: '#FBF2E9' }}
    >
      <main className="w-full max-w-7xl">
        <h1
          className="text-5xl font-bold mb-4 text-center font-sans"
          style={{ color: '#D97757' }}
        >
          Welcome to the Builder Club
        </h1>
        <h2 className="text-2xl font-semibold mb-16 text-center font-sans" style={{ color: '#D97757', opacity: 0.8 }}>
          Meet your Executive Board
        </h2>

        {/* Founders and Faculty Advisor Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_auto_1fr] gap-8 items-start">
            {/* Founders */}
            <div>
              <h3
                className="text-3xl font-bold mb-8 text-center font-sans"
                style={{ color: '#D97757' }}
              >
                Founders
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {founders.map((member, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center"
                  >
                    <div
                      className="relative w-full aspect-square mb-4 overflow-hidden rounded-lg shadow-xl"
                      style={{
                        maxWidth: '300px',
                        backgroundColor: '#E8D5C4'
                      }}
                    >
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                        style={{ objectPosition: member.imagePosition }}
                      />
                    </div>
                    <h4 className="text-xl font-bold text-center font-sans" style={{ color: '#000' }}>
                      {member.name}
                    </h4>
                    <p className="text-sm text-center font-sans" style={{ color: '#666' }}>
                      {member.title}
                    </p>
                    {member.subtitle && (
                      <p className="text-sm text-center font-sans" style={{ color: '#666' }}>
                        {member.subtitle}
                      </p>
                    )}
                    <p className="text-base font-semibold text-center font-sans mt-1" style={{ color: '#D97757' }}>
                      {member.role}
                    </p>
                    <p className="text-sm text-center font-sans mt-3 max-w-xs" style={{ color: '#666' }}>
                      {member.bio}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Vertical Separator */}
            <div className="hidden lg:block w-px bg-[#D97757] opacity-30 h-full min-h-[500px] mx-8"></div>

            {/* Faculty Advisor */}
            <div>
              <h3
                className="text-3xl font-bold mb-8 text-center font-sans"
                style={{ color: '#D97757' }}
              >
                Faculty Advisor
              </h3>
              <div className="flex justify-center">
                <div className="flex flex-col items-center max-w-md">
                  <div
                    className="relative w-full aspect-square mb-4 overflow-hidden rounded-lg shadow-xl"
                    style={{
                      maxWidth: '300px',
                      backgroundColor: '#E8D5C4'
                    }}
                  >
                    <Image
                      src={facultyAdvisor.image}
                      alt={facultyAdvisor.name}
                      fill
                      className="object-cover"
                      style={{ objectPosition: facultyAdvisor.imagePosition }}
                    />
                  </div>
                  <h4 className="text-xl font-bold text-center font-sans" style={{ color: '#000' }}>
                    {facultyAdvisor.name}
                  </h4>
                  <p className="text-sm text-center font-sans" style={{ color: '#666' }}>
                    {facultyAdvisor.title}
                  </p>
                  <p className="text-base font-semibold text-center font-sans mt-1" style={{ color: '#D97757' }}>
                    {facultyAdvisor.role}
                  </p>
                  <p className="text-sm text-center font-sans mt-3" style={{ color: '#666' }}>
                    {facultyAdvisor.bio}
                  </p>
                  <a
                    href={facultyAdvisor.bioLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-center font-sans mt-2 inline-block hover:opacity-80 transition-opacity"
                    style={{ color: '#D97757' }}
                  >
                    View Extended Bio →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="mb-16">
          <h3
            className="text-3xl font-bold mb-8 text-center font-sans"
            style={{ color: '#D97757' }}
          >
            Leadership
          </h3>

          {leadership.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
              {leadership.map((member, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center w-full max-w-xs"
                >
                  <div
                    className="relative w-full aspect-square mb-4 overflow-hidden rounded-lg shadow-xl"
                    style={{
                      backgroundColor: '#E8D5C4'
                    }}
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-center font-sans" style={{ color: '#000' }}>
                    {member.name}
                  </h4>
                  <p className="text-sm text-center font-sans" style={{ color: '#666' }}>
                    {member.title}
                  </p>
                  <p className="text-base font-semibold text-center font-sans mt-1" style={{ color: '#D97757' }}>
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center py-12">
              <p
                className="text-2xl font-semibold font-sans text-center"
                style={{ color: '#D97757', opacity: 0.7 }}
              >
                2026 Leadership loading...
              </p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
