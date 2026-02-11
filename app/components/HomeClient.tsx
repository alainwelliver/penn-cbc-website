'use client';

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import DarkModeToggle from "./DarkModeToggle";
import LoadingAnimation from "./LoadingAnimation";

type Photo = { src: string; alt: string };

export default function HomeClient({ initialPhotos }: { initialPhotos: Photo[] }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [highlightIndex, setHighlightIndex] = useState(0);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.3]);

  // Use first 14 photos for carousel (need duplicates for infinite scroll)
  const carouselPhotos = initialPhotos.slice(0, 7);

  // Cycle through words to highlight
  useEffect(() => {
    const words = 5; // curiosity, AI, Learn, build, think critically
    const interval = setInterval(() => {
      setHighlightIndex((prev) => (prev + 1) % words);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <LoadingAnimation />
      <div className="min-h-screen flex flex-col">
        <main className="flex flex-col items-center w-full">
          {/* Hero Grid Section */}
          <motion.div
            className="w-full max-w-7xl px-4 sm:px-8 py-24 lg:py-32"
            style={{ opacity }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left: Hero Content */}
              <motion.div
                className="lg:pr-8"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 2.8 }}
              >
                {/* Logo Badge */}
                <motion.div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '0.75rem 1.5rem',
                    marginBottom: '1.5rem',
                    borderRadius: '16px',
                    backgroundColor: 'var(--bg-card)',
                    boxShadow: 'var(--shadow-sm)',
                    border: '1px solid var(--border-color)'
                  }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 2.8 }}
                >
                  <Image
                    src="/penn-shield.png"
                    alt="Penn Shield"
                    width={58}
                    height={48}
                    style={{ objectFit: 'contain' }}
                  />
                  <span style={{ fontSize: '1.75rem', color: '#D97757', fontWeight: 700 }}>×</span>
                  <Image
                    src="/claude-logo.png"
                    alt="Claude Logo"
                    width={48}
                    height={48}
                    style={{ objectFit: 'contain' }}
                  />
                </motion.div>

                <motion.h1
                  style={{
                    fontSize: 'clamp(3rem, 5vw, 5.5rem)',
                    fontWeight: 600,
                    lineHeight: 1.05,
                    letterSpacing: '-0.03em',
                    marginBottom: '1.5rem',
                    color: 'var(--text-primary)'
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                >
                  Claude Builder Club{' '}
                  <span
                    style={{
                      background: 'linear-gradient(120deg, transparent 0%, #D97757 0%)',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: '100% 35%',
                      backgroundPosition: '0 95%',
                      paddingBottom: '0.1em'
                    }}
                  >
                    at Penn
                  </span>
                </motion.h1>

                <motion.p
                  style={{
                    fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)',
                    lineHeight: 1.5,
                    marginBottom: '2.5rem',
                    fontWeight: 400
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.6 }}
                >
                  Where{' '}
                  <motion.span
                    animate={{
                      color: highlightIndex === 0 ? '#D97757' : 'var(--text-secondary)',
                      fontWeight: highlightIndex === 0 ? 600 : 400,
                      scale: highlightIndex === 0 ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                    style={{ display: 'inline-block' }}
                  >
                    curiosity
                  </motion.span>{' '}
                  meets{' '}
                  <motion.span
                    animate={{
                      color: highlightIndex === 1 ? '#D97757' : 'var(--text-secondary)',
                      fontWeight: highlightIndex === 1 ? 600 : 400,
                      scale: highlightIndex === 1 ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                    style={{ display: 'inline-block' }}
                  >
                    AI
                  </motion.span>
                  .{' '}
                  <motion.span
                    animate={{
                      color: highlightIndex === 2 ? '#D97757' : 'var(--text-secondary)',
                      fontWeight: highlightIndex === 2 ? 600 : 400,
                      scale: highlightIndex === 2 ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                    style={{ display: 'inline-block' }}
                  >
                    Learn
                  </motion.span>
                  ,{' '}
                  <motion.span
                    animate={{
                      color: highlightIndex === 3 ? '#D97757' : 'var(--text-secondary)',
                      fontWeight: highlightIndex === 3 ? 600 : 400,
                      scale: highlightIndex === 3 ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                    style={{ display: 'inline-block' }}
                  >
                    build
                  </motion.span>
                  , and{' '}
                  <motion.span
                    animate={{
                      color: highlightIndex === 4 ? '#D97757' : 'var(--text-secondary)',
                      fontWeight: highlightIndex === 4 ? 600 : 400,
                      scale: highlightIndex === 4 ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                    style={{ display: 'inline-block' }}
                  >
                    think critically
                  </motion.span>
                  .
                </motion.p>

                <motion.div
                  className="flex flex-wrap gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.8 }}
                >
                  <motion.a
                    href="https://www.jotform.com/253555944387168"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 rounded-xl font-semibold transition-all duration-300 ease-out"
                    style={{
                      background: '#D97757',
                      color: 'white',
                      boxShadow: '0 4px 12px rgba(217, 119, 87, 0.2)',
                      fontSize: '1rem',
                      letterSpacing: '-0.01em'
                    }}
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                      boxShadow: '0 8px 24px rgba(217, 119, 87, 0.3)',
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Sign Up
                  </motion.a>

                  <motion.a
                    href="https://join.slack.com/t/penncbc/shared_invite/zt-3o3fc1uvq-4ow_Ayc6SAZaP38CXUifOg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 rounded-xl font-semibold transition-all duration-300 ease-out border-2"
                    style={{
                      background: 'var(--bg-card)',
                      color: 'var(--text-primary)',
                      borderColor: 'var(--border-color)',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                      fontSize: '1rem',
                      letterSpacing: '-0.01em'
                    }}
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                      borderColor: '#D97757',
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Join Slack
                  </motion.a>
                </motion.div>
              </motion.div>

              {/* Right: Upcoming Events Preview */}
              <motion.div
                className="rounded-3xl p-10 transition-all duration-300"
                style={{
                  background: 'var(--bg-card)',
                  boxShadow: 'var(--shadow-md)',
                  border: '1px solid var(--border-color)'
                }}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 3 }}
                whileHover={{ scale: 1.02, boxShadow: '0 12px 40px rgba(0,0,0,0.12)' }}
              >
                <div className="flex justify-between items-center mb-8">
                  <h2
                    style={{
                      fontSize: '1.75rem',
                      fontWeight: 700,
                      letterSpacing: '-0.02em',
                      color: 'var(--text-primary)'
                    }}
                  >
                    Upcoming Events
                  </h2>
                </div>

                <div className="space-y-3">
                  <a
                    href="https://luma.com/odqhow3k"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 rounded-xl transition-all duration-300 cursor-pointer"
                    style={{
                      background: 'var(--bg-secondary)',
                      borderLeft: '3px solid #D97757'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateX(4px)';
                      e.currentTarget.style.background = 'var(--bg-card)';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(217, 119, 87, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateX(0)';
                      e.currentTarget.style.background = 'var(--bg-secondary)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div style={{ fontSize: '0.85rem', color: '#D97757', fontWeight: 600, marginBottom: '0.25rem' }}>
                      Feb 13, 2026 • 4:30 PM
                    </div>
                    <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                      Entrepreneurship 101
                    </div>
                  </a>

                  <a
                    href="https://luma.com/rbpazilw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 rounded-xl transition-all duration-300 cursor-pointer"
                    style={{
                      background: 'var(--bg-secondary)',
                      borderLeft: '3px solid #D97757'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateX(4px)';
                      e.currentTarget.style.background = 'var(--bg-card)';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(217, 119, 87, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateX(0)';
                      e.currentTarget.style.background = 'var(--bg-secondary)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div style={{ fontSize: '0.85rem', color: '#D97757', fontWeight: 600, marginBottom: '0.25rem' }}>
                      Feb 22, 2026 • 3:00 PM
                    </div>
                    <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                      Board Game Mixer
                    </div>
                  </a>
                </div>

                <a
                  href="/events"
                  className="mt-6 block text-center font-semibold transition-opacity duration-200"
                  style={{
                    color: '#D97757',
                    fontSize: '0.95rem'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '0.7';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '1';
                  }}
                >
                  View All Events →
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Who We Are Section */}
          <motion.section
            className="w-full max-w-4xl px-8 py-24"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              style={{
                fontSize: 'clamp(2rem, 3vw, 2.75rem)',
                fontWeight: 700,
                color: '#D97757',
                marginBottom: '2rem',
                textAlign: 'center',
                letterSpacing: '-0.02em'
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Who We Are
            </motion.h2>
            <motion.p
              style={{
                fontSize: '1.1rem',
                color: 'var(--text-tertiary)',
                lineHeight: 1.8,
                textAlign: 'center'
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We are a community of builders, innovators, and AI enthusiasts at the University of Pennsylvania. We are
              co-creating a space where students of all backgrounds and skill levels can take their ideas and bring them to life.
              In this GenAI world, we know we can build anything, but we don&apos;t want GenAI to learn for us; we want to learn with it.
              Our mission is to take each member of our community one step further on their educational and builder journey, whether
              they be a Wharton freshman or a CIS PhD, and explore the frontiers of artificial intelligence through hands-on projects,
              collaborative learning, and meaningful discussions.
            </motion.p>
          </motion.section>

          {/* Why We Started It Section */}
          <motion.section
            className="w-full max-w-4xl px-8 py-24"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              style={{
                fontSize: 'clamp(2rem, 3vw, 2.75rem)',
                fontWeight: 700,
                color: '#D97757',
                marginBottom: '2rem',
                textAlign: 'center',
                letterSpacing: '-0.02em'
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Why We Started It
            </motion.h2>
            <motion.div
              style={{
                fontSize: '1.1rem',
                color: 'var(--text-tertiary)',
                lineHeight: 1.8,
                textAlign: 'center'
              }}
            >
              <motion.p
                style={{ marginBottom: '1.5rem' }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                The Claude Builder Club was born from a shared vision between Anthropic, Albert Opher, Alain Welliver, and other
                like-minded Penn students to democratize AI knowledge and create a space where students can learn, build, and grow
                together, no matter what learning pace or background they come with.
              </motion.p>
              <motion.p
                style={{ marginBottom: '1.5rem' }}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                We saw that there was no one space on campus that was dedicated to learning and building with AI that was open to
                everyone and that truly harnessed the power mutual encouragement and support that a builder community provides.
              </motion.p>
              <motion.p
                style={{ marginBottom: '1.5rem' }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                In addition, there was no one-stop-shop where students can learn how to take an idea and build a product, and then
                take that product and learn how to turn it into a business.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                We&apos;ve been blown away by the caliber of projects produced and the quality of learning that has taken place in our
                inaugural semester, and we can&apos;t wait to see how the club grows and serves its members.
              </motion.p>
            </motion.div>
            <motion.p
              className="text-right mt-8"
              style={{
                fontFamily: 'Crimson Text, serif',
                fontStyle: 'italic',
                fontSize: '1.1rem',
                color: 'var(--text-secondary)'
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              - Alain Welliver SEAS &apos;26, Albert Opher M&T &apos;25
            </motion.p>
          </motion.section>

          {/* Photo Carousel */}
          <motion.section
            className="w-full py-24 overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1 }}
          >
            <motion.h2
              style={{
                fontSize: '1.75rem',
                fontWeight: 700,
                textAlign: 'center',
                marginBottom: '3rem',
                letterSpacing: '-0.02em',
                color: 'var(--text-primary)'
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              From Our Community
            </motion.h2>

            <div className="relative">
              <style jsx>{`
                @keyframes scroll {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(calc(-316px * 7)); }
                }
                .carousel-track {
                  animation: scroll 30s linear infinite;
                }
                .carousel-track:hover {
                  animation-play-state: paused;
                }
              `}</style>

              <div className="carousel-track flex gap-4">
                {/* First set */}
                {carouselPhotos.map((photo, index) => (
                  <motion.div
                    key={`first-${index}`}
                    className="min-w-[300px] h-[300px] rounded-2xl overflow-hidden cursor-pointer"
                    style={{ boxShadow: 'var(--shadow-sm)' }}
                    onClick={() => setSelectedImage(photo.src)}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
                {/* Duplicate set for seamless loop */}
                {carouselPhotos.map((photo, index) => (
                  <motion.div
                    key={`second-${index}`}
                    className="min-w-[300px] h-[300px] rounded-2xl overflow-hidden cursor-pointer"
                    style={{ boxShadow: 'var(--shadow-sm)' }}
                    onClick={() => setSelectedImage(photo.src)}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        </main>

        {/* Footer */}
        <footer
          className="w-full py-16 px-8 mt-24 border-t transition-all duration-300"
          style={{
            background: 'var(--footer-bg)',
            borderColor: 'var(--border-color)'
          }}
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            {/* Social Links */}
            <div>
              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  marginBottom: '1.5rem',
                  color: 'var(--text-primary)'
                }}
              >
                Connect With Us
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/company/cbcatpenn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300"
                  style={{ background: 'var(--bg-secondary)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#D97757';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'var(--bg-secondary)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                  title="LinkedIn"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--text-primary)' }}>
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>

                <a
                  href="https://join.slack.com/t/penncbc/shared_invite/zt-3o3fc1uvq-4ow_Ayc6SAZaP38CXUifOg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300"
                  style={{ background: 'var(--bg-secondary)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#D97757';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'var(--bg-secondary)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                  title="Slack"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--text-primary)' }}>
                    <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zm10.122 2.521a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.268 0a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zm-2.523 10.122a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zm0-1.268a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
                  </svg>
                </a>

                <a
                  href="https://www.instagram.com/penncbc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300"
                  style={{ background: 'var(--bg-secondary)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#D97757';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'var(--bg-secondary)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                  title="Instagram"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--text-primary)' }}>
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>

                <a
                  href="mailto:penncbc@gmail.com"
                  className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300"
                  style={{ background: 'var(--bg-secondary)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#D97757';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'var(--bg-secondary)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                  title="Email"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--text-primary)' }}>
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  marginBottom: '1.5rem',
                  color: 'var(--text-primary)'
                }}
              >
                Stay Updated
              </h3>
              <a
                href="https://magic.beehiiv.com/v1/38c57aa9-08ce-4517-9e3b-0e043bee3279?email=%7B%7Bemail%7D%7D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-3.5 rounded-xl font-semibold transition-all duration-300"
                style={{
                  background: '#D97757',
                  color: 'white',
                  boxShadow: '0 4px 14px rgba(217, 119, 87, 0.25)',
                  fontSize: '1rem'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#c46647';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(217, 119, 87, 0.35)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#D97757';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 14px rgba(217, 119, 87, 0.25)';
                }}
              >
                Subscribe to Newsletter
              </a>
            </div>
          </div>

          <div
            className="text-center pt-8 border-t"
            style={{
              borderColor: 'var(--border-color)',
              color: 'var(--text-secondary)',
              fontSize: '0.9rem'
            }}
          >
            <p>Made with Claude © 2026 Claude Builder Club at Penn</p>
          </div>
        </footer>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-6xl max-h-full">
              <button
                className="absolute -top-12 right-0 text-white text-4xl font-bold hover:text-gray-300 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                ×
              </button>
              <Image
                src={selectedImage}
                alt="Selected photo"
                width={1200}
                height={800}
                className="max-w-full max-h-[90vh] object-contain"
              />
            </div>
          </div>
        )}
      </div>

      {/* Dark Mode Toggle */}
      <DarkModeToggle />
    </>
  );
}
