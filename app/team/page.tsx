import Image from 'next/image';

export default function Team() {
  const founders = [
    {
      name: 'Albert Opher',
      title: 'CBA | M&T \'25',
      role: 'Co-President',
      image: '/team/albert.jpg',
      bio: '<Albert\'s bio loading>'
    },
    {
      name: 'Alain Welliver',
      title: 'CBA | SEAS \'26',
      role: 'Co-President',
      image: '/team/alain.jpg',
      bio: 'Reimagining the way we learn new things, get around, and interact safely with AI.'
    }
  ];

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

        {/* Founders Section */}
        <section className="mb-16">
          <h3
            className="text-3xl font-bold mb-8 text-center font-sans"
            style={{ color: '#D97757' }}
          >
            Founders
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
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
                <p className="text-sm text-center font-sans mt-3 max-w-xs" style={{ color: '#666' }}>
                  {member.bio}
                </p>
              </div>
            ))}
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
