'use client';

import { motion } from 'framer-motion';
import { getUpcomingEvents, getPastEvents, buttonsForPastEventDisplay } from '@/lib/events';

export default function Events() {
  const upcomingEvents = getUpcomingEvents();
  const pastEvents = getPastEvents();

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

          <div className={upcomingEvents.length === 1 ? "flex justify-center" : ""}>
            {upcomingEvents.length === 0 ? (
              <p className="text-center py-8 font-sans" style={{ color: 'var(--text-secondary)' }}>
                No upcoming events at the moment. Check back soon!
              </p>
            ) : (
            <div className={`grid gap-6 w-full ${upcomingEvents.length === 1 ? 'md:grid-cols-1 max-w-xl' : 'md:grid-cols-2'}`}>
              {upcomingEvents.map((event, index) => (
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
                  <p className={`text-sm font-sans ${event.location ? 'mb-1' : 'mb-3'}`} style={{ color: 'var(--text-secondary)' }}>{event.time}</p>
                  {event.location && (
                    <p className="text-sm mb-3 font-sans" style={{ color: 'var(--text-secondary)' }}>{event.location}</p>
                  )}
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

          <div className={`grid gap-6 mb-12 ${pastEvents.filter(event => event.semester === 'Spring 2026').length === 1 ? 'md:grid-cols-1 max-w-2xl mx-auto' : 'md:grid-cols-2'}`}>
            {pastEvents.filter(event => event.semester === 'Spring 2026').map((event, index) => (
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
                  {buttonsForPastEventDisplay(event.buttons).map((button, buttonIndex) => (
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
            {pastEvents.filter(event => event.semester === 'Fall 2025').map((event, index) => (
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
                  {buttonsForPastEventDisplay(event.buttons).map((button, buttonIndex) => (
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
