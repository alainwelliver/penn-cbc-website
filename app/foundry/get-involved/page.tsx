'use client';

import { motion } from 'framer-motion';

export default function Foundry() {
  const eligibilityItems = [
    "You have an idea or an early build you're committed to",
    "You'll show up, put in the work, and ship—no matter where you are today",
    'You want real feedback, accountability, and a place to be seen',
    "You're ready to collaborate: find co-founders, get advice, or test with peers",
  ];

  const benefits = [
    { label: 'Website showcase', text: 'Featured listing with your project, name, and contact so you can find teammates and get feedback.' },
    { label: 'Beta user network', text: 'Private channel with other founders to share your MVP and get real user feedback.' },
    { label: 'Showcase opportunity', text: 'Present at our end-of-semester event to the Penn community and potential VC partners.' },
    { label: 'Workshop series', text: 'Technical and entrepreneurship workshops across the full product development cycle.' },
    { label: 'Builder community', text: 'Connect with fellow builders, find collaborators, and get unstuck together.' },
  ];

  return (
    <div
      className="min-h-screen flex flex-col items-center py-20 px-8"
      style={{
        background: 'linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)',
        transition: 'background 0.3s ease'
      }}
    >
      <main className="w-full max-w-4xl">
        {/* Hero Section */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl font-bold mb-4 text-center font-sans"
            style={{
              color: '#D97757',
              fontSize: 'clamp(2.5rem, 5vw, 3rem)'
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            CBC Foundry
          </motion.h1>
          <motion.h2
            className="text-2xl font-semibold mb-12 text-center font-sans"
            style={{
              color: '#D97757',
              opacity: 0.8,
              fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Your launchpad for building real AI products at Penn
          </motion.h2>
        </motion.section>

        {/* Program Overview */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-base lg:text-lg text-center font-sans leading-relaxed" style={{ color: 'var(--text-tertiary)' }}>
            CBC Foundry supports Penn students building real AI products. Whether you&apos;re technical, business-focused, or somewhere in between—if you have an idea worth building (or want to join a team), we&apos;ll help you ship. We work with projects at all stages and skill levels.
          </p>
        </motion.section>

        {/* Eligibility Section */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-2xl font-bold text-center font-sans mb-8"
            style={{
              color: '#D97757',
              fontSize: 'clamp(1.5rem, 2.5vw, 1.75rem)'
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            This is for you if
          </motion.h2>
          <motion.div
            className="max-w-2xl mx-auto rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02]"
            style={{
              backgroundColor: 'var(--bg-card)',
              boxShadow: 'var(--shadow-sm)',
              border: '1px solid var(--border-color)'
            }}
            initial={{ opacity: 0, rotateX: 90 }}
            whileInView={{ opacity: 1, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex">
              <div className="w-1 shrink-0" style={{ backgroundColor: '#D97757' }} aria-hidden />
              <ul className="flex-1 py-6 pl-6 pr-8 font-sans space-y-5" style={{ color: 'var(--text-primary)' }}>
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
          </motion.div>
        </motion.section>

        {/* Benefits Section — single coherent block */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-2xl font-bold text-center font-sans mb-8"
            style={{
              color: '#D97757',
              fontSize: 'clamp(1.5rem, 2.5vw, 1.75rem)'
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What you&apos;ll get
          </motion.h2>
          <motion.div
            className="rounded-xl p-8 lg:p-10 max-w-3xl mx-auto transition-all duration-300 hover:scale-[1.02]"
            style={{
              backgroundColor: 'var(--bg-card)',
              boxShadow: 'var(--shadow-sm)',
              border: '1px solid var(--border-color)'
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ul className="font-sans space-y-6" style={{ color: 'var(--text-primary)' }}>
              {benefits.map((benefit, index) => (
                <li key={index} className="flex flex-col sm:flex-row sm:gap-3 sm:items-baseline">
                  <span className="font-semibold shrink-0 sm:w-40" style={{ color: '#D97757' }}>
                    {benefit.label}
                  </span>
                  <span className="text-base lg:text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {benefit.text}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.section>

        {/* Call-to-Action Section */}
        <motion.section
          className="mb-16 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: 'spring', bounce: 0.4 }}
        >
          <motion.a
            href="https://forms.gle/UUs8KEcqgH9Hggo76"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white font-sans font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5"
            style={{
              backgroundColor: '#D97757',
              boxShadow: 'var(--shadow-md)'
            }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Join Now!
          </motion.a>
          <motion.p
            className="mt-4 text-sm font-sans"
            style={{ color: 'var(--text-secondary)' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            Submit one application per project. Teams: have one person apply on behalf of the group.
          </motion.p>
        </motion.section>

      </main>
    </div>
  );
}
