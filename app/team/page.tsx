'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Team() {
  type TeamMember = {
    name: string;
    title: string;
    subtitle?: string;
    role: string;
    image: string;
    bio: string;
    imagePosition: string;
    imageScale?: number;
    imageTranslateX?: string;
    linkedin?: string;
    github?: string;
  };

  const founders: TeamMember[] = [
    {
      name: 'Albert Opher',
      title: 'CBA | Wharton + SEAS \'25 (M&T \'25), JWS \'25',
      subtitle: 'President, AI Masterclasses Instructor',
      role: 'Co-Founder',
      image: '/team/albert.jpg',
      bio: 'Building AI interpretability infrastructure, agentic systems, and tools with emerging technologies to help teams ship faster.',
      imagePosition: '100% -25%',
      imageScale: 1.1,
      linkedin: 'https://www.linkedin.com/in/albertopher/',
      github: 'https://github.com/Albinator3000'
    },
    {
      name: 'Alain Welliver',
      title: 'CBA | SEAS \'26',
      subtitle: 'VP External, Builder Hours Lead',
      role: 'Co-Founder',
      image: '/team/alain.jpg',
      bio: 'Reimagining the way we learn new things, get around, and interact safely with AI.',
      imagePosition: '50% 45%',
      linkedin: 'https://www.linkedin.com/in/alain-welliver/',
      github: 'https://github.com/alainwelliver'
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

  const leadership: TeamMember[] = [
    {
      name: 'Anushka Sheoran',
      title: 'MSE CIS \'27',
      role: 'President',
      image: '/team/anushka.jpg',
      bio: '',
      imagePosition: '50% 50%',
      linkedin: 'https://www.linkedin.com/in/anushka-sheoran/',
      github: 'https://github.com/asheorann'
    },
    {
      name: 'Kyle Zhang',
      title: 'M&T \'27',
      role: 'VP External',
      image: '/team/kyle.jpg',
      bio: '',
      imagePosition: '50% 10%',
      linkedin: 'https://www.linkedin.com/in/zhangkyle/',
      github: 'https://github.com/RiptideStar'
    },
    {
      name: 'Andrea Causio',
      title: 'MCIT \'27',
      role: 'VP of Internal Relations/Research',
      image: '/team/andrea.jpeg',
      bio: '',
      imagePosition: '50% 50%',
      linkedin: 'https://www.linkedin.com/in/causio',
      github: 'https://github.com/causius0'
    },
    {
      name: 'Cindy Zhu',
      title: 'CIS & Finance \'26',
      role: 'VP Internal',
      image: '/team/cindy.jpg',
      bio: '',
      imagePosition: '50% 20%'
    },
    {
      name: 'Mohit Shah',
      title: 'CompE & Robotics \'27',
      role: 'VP Internal',
      image: '/team/mohit.png',
      bio: '',
      imagePosition: '50% 50%',
      github: 'https://github.com/moshah122'
    },
    {
      name: 'Ricky Pan',
      title: 'MCIT \'27',
      role: 'VP Internal',
      image: '/team/ricky.jpeg',
      bio: '',
      imagePosition: '50% -15%',
      imageScale: 1.3,
      imageTranslateX: '3%',
      linkedin: 'https://www.linkedin.com/in/ruiqipan/'
    }
  ];

  return (
    <div
      className="min-h-screen flex flex-col items-center py-20 px-8"
      style={{
        background: 'linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)',
        transition: 'background 0.3s ease'
      }}
    >
      <main className="w-full max-w-7xl">
        <h1
          className="text-5xl font-bold mb-4 text-center font-sans"
          style={{
            color: '#D97757',
            fontSize: 'clamp(2.5rem, 5vw, 3rem)'
          }}
        >
          Welcome to the Builder Club
        </h1>
        <h2 className="text-2xl font-semibold mb-16 text-center font-sans" style={{
          color: '#D97757',
          opacity: 0.8,
          fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)'
        }}>
          Meet your Executive Board
        </h2>
        
        {/* Leadership Section */}
        <section className="mb-16">
          <h3
            className="text-3xl font-bold mb-8 text-center font-sans"
            style={{
              color: '#D97757',
              fontSize: 'clamp(1.75rem, 3vw, 2rem)'
            }}
          >
            Leadership
          </h3>

          {leadership.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
              {leadership.map((member, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center w-full max-w-xs"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div
                    className="relative w-full aspect-square mb-4 overflow-hidden rounded-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                    style={{
                      backgroundColor: 'var(--bg-card)',
                      boxShadow: 'var(--shadow-md)'
                    }}
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-300"
                      style={{
                        objectPosition: member.imagePosition,
                        transform: `${member.imageScale ? `scale(${member.imageScale})` : ''} ${member.imageTranslateX ? `translateX(${member.imageTranslateX})` : ''}`.trim() || undefined
                      }}
                    />
                  </div>
                  <h4 className="text-xl font-bold text-center font-sans" style={{ color: 'var(--text-primary)' }}>
                    {member.name}
                  </h4>
                  <p className="text-sm text-center font-sans" style={{ color: 'var(--text-secondary)' }}>
                    {member.title}
                  </p>
                  {member.subtitle && (
                    <p className="text-sm text-center font-sans" style={{ color: 'var(--text-secondary)' }}>
                      {member.subtitle}
                    </p>
                  )}
                  <p className="text-base font-semibold text-center font-sans mt-1" style={{ color: '#D97757' }}>
                    {member.role}
                  </p>
                  <div className="flex gap-4 mt-3">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold font-sans transition-all duration-300 hover:opacity-80 hover:scale-105"
                        style={{ color: '#D97757' }}
                      >
                        LinkedIn
                      </a>
                    )}
                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold font-sans transition-all duration-300 hover:opacity-80 hover:scale-105"
                        style={{ color: '#D97757' }}
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </motion.div>
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

        {/* Founders and Faculty Advisor Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_auto_1fr] gap-8 items-start">
            {/* Founders */}
            <div>
              <h3
                className="text-3xl font-bold mb-8 text-center font-sans"
                style={{
                  color: '#D97757',
                  fontSize: 'clamp(1.75rem, 3vw, 2rem)'
                }}
              >
                Founders
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {founders.map((member, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center"
                    initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <div
                      className="relative w-full aspect-square mb-4 overflow-hidden rounded-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                      style={{
                        maxWidth: '300px',
                        backgroundColor: 'var(--bg-card)',
                        boxShadow: 'var(--shadow-md)'
                      }}
                    >
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-300"
                        style={{
                          objectPosition: member.imagePosition,
                          transform: `${member.imageScale ? `scale(${member.imageScale})` : ''} ${member.imageTranslateX ? `translateX(${member.imageTranslateX})` : ''}`.trim() || undefined
                        }}
                      />
                    </div>
                    <h4 className="text-xl font-bold text-center font-sans" style={{ color: 'var(--text-primary)' }}>
                      {member.name}
                    </h4>
                    <p className="text-sm text-center font-sans" style={{ color: 'var(--text-secondary)' }}>
                      {member.title}
                    </p>
                    {member.subtitle && (
                      <p className="text-sm text-center font-sans" style={{ color: 'var(--text-secondary)' }}>
                        {member.subtitle}
                      </p>
                    )}
                    <p className="text-base font-semibold text-center font-sans mt-1" style={{ color: '#D97757' }}>
                      {member.role}
                    </p>
                    <p className="text-sm text-center font-sans mt-3 max-w-xs" style={{ color: 'var(--text-tertiary)' }}>
                      {member.bio}
                    </p>
                    <div className="flex gap-4 mt-3">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-semibold font-sans transition-all duration-300 hover:opacity-80 hover:scale-105"
                          style={{ color: '#D97757' }}
                        >
                          LinkedIn
                        </a>
                      )}
                      {member.github && (
                        <a
                          href={member.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-semibold font-sans transition-all duration-300 hover:opacity-80 hover:scale-105"
                          style={{ color: '#D97757' }}
                        >
                          GitHub
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Vertical Separator */}
            <div className="hidden lg:block w-px bg-[#D97757] opacity-30 h-full min-h-[500px] mx-8"></div>

            {/* Faculty Advisor */}
            <div>
              <h3
                className="text-3xl font-bold mb-8 text-center font-sans"
                style={{
                  color: '#D97757',
                  fontSize: 'clamp(1.75rem, 3vw, 2rem)'
                }}
              >
                Faculty Advisor
              </h3>
              <div className="flex justify-center">
                <motion.div
                  className="flex flex-col items-center max-w-md"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <div
                    className="relative w-full aspect-square mb-4 overflow-hidden rounded-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                    style={{
                      maxWidth: '300px',
                      backgroundColor: 'var(--bg-card)',
                      boxShadow: 'var(--shadow-md)'
                    }}
                  >
                    <Image
                      src={facultyAdvisor.image}
                      alt={facultyAdvisor.name}
                      fill
                      className="object-cover transition-transform duration-300"
                      style={{ objectPosition: facultyAdvisor.imagePosition }}
                    />
                  </div>
                  <h4 className="text-xl font-bold text-center font-sans" style={{ color: 'var(--text-primary)' }}>
                    {facultyAdvisor.name}
                  </h4>
                  <p className="text-sm text-center font-sans" style={{ color: 'var(--text-secondary)' }}>
                    {facultyAdvisor.title}
                  </p>
                  <p className="text-base font-semibold text-center font-sans mt-1" style={{ color: '#D97757' }}>
                    {facultyAdvisor.role}
                  </p>
                  <p className="text-sm text-center font-sans mt-3" style={{ color: 'var(--text-tertiary)' }}>
                    {facultyAdvisor.bio}
                  </p>
                  <a
                    href={facultyAdvisor.bioLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-center font-sans mt-2 inline-block transition-all duration-300 hover:opacity-80 hover:scale-105"
                    style={{ color: '#D97757' }}
                  >
                    View Extended Bio →
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
