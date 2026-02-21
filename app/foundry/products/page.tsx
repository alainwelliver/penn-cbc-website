'use client';

import { motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { products } from './data';

export default function FoundryProducts() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStages, setSelectedStages] = useState<string[]>([]);
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [showBoardBubble, setShowBoardBubble] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setShowBoardBubble(false), 7000);
    return () => clearTimeout(timeout);
  }, []);

  // Filter products based on search and stage
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      // Search filter
      const matchesSearch = searchQuery === '' ||
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());

      // Stage filter
      const matchesStage = selectedStages.length === 0 || selectedStages.includes(product.stage);

      return matchesSearch && matchesStage;
    });
  }, [searchQuery, selectedStages]);

  const toggleStage = (stage: string) => {
    setSelectedStages(prev =>
      prev.includes(stage)
        ? prev.filter(s => s !== stage)
        : [...prev, stage]
    );
  };

  const toggleCard = (id: string) => {
    setExpandedCard(prev => prev === id ? null : id);
  };

  const getStageColor = (stage: string) => {
    switch (stage) {
      case 'Live':
        return { bg: '#D1FAE5', text: '#065F46' };
      case 'MVP':
        return { bg: '#FEF3C7', text: '#92400E' };
      case 'Beta':
        return { bg: '#FECACA', text: '#991B1B' };
      case 'Ideation':
        return { bg: '#E0E7FF', text: '#3730A3' };
      default:
        return { bg: '#F3F4F6', text: '#1F2937' };
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center py-20 px-8"
      style={{
        background: 'linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)',
        transition: 'background 0.3s ease'
      }}
    >
      <main className="w-full max-w-7xl">
        {/* Header */}
        <motion.section
          className="mb-12"
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
            Foundry Products
          </motion.h1>
          <motion.p
            className="text-lg text-center font-sans mb-8"
            style={{ color: 'var(--text-tertiary)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            See what CBC Foundry founders are building. Get in touch for partnerships, pilots, or collaborations
          </motion.p>
        </motion.section>

        {/* Search and Filter Section */}
        <motion.section
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            {/* Search Bar */}
            <div className="w-full md:w-96">
              <input
                type="text"
                placeholder="Search projects or founders..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 rounded-xl font-sans transition-all duration-300"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-primary)',
                  outline: 'none',
                  boxShadow: 'var(--shadow-sm)'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#D97757';
                  e.target.style.boxShadow = '0 0 0 3px rgba(217, 119, 87, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'var(--border-color)';
                  e.target.style.boxShadow = 'var(--shadow-sm)';
                }}
              />
            </div>

            {/* Stage Filter Pills */}
            <div className="flex gap-2 flex-wrap">
              {(['Ideation', 'MVP', 'Beta', 'Live'] as const).map((stage) => {
                const isSelected = selectedStages.includes(stage);
                const colors = getStageColor(stage);
                return (
                  <button
                    key={stage}
                    onClick={() => toggleStage(stage)}
                    className="px-4 py-2 rounded-full font-sans font-semibold text-sm transition-all duration-300 cursor-pointer"
                    style={{
                      backgroundColor: isSelected ? colors.bg : 'var(--bg-card)',
                      color: isSelected ? colors.text : 'var(--text-secondary)',
                      border: `2px solid ${isSelected ? colors.text : 'var(--border-color)'}`,
                      opacity: isSelected ? 1 : 0.7,
                      transform: isSelected ? 'scale(1.05)' : 'scale(1)'
                    }}
                    onMouseEnter={(e) => {
                      if (!isSelected) {
                        e.currentTarget.style.opacity = '1';
                        e.currentTarget.style.transform = 'scale(1.05)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isSelected) {
                        e.currentTarget.style.opacity = '0.7';
                        e.currentTarget.style.transform = 'scale(1)';
                      }
                    }}
                  >
                    {stage}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Results Count */}
          <p className="mt-4 text-sm font-sans" style={{ color: 'var(--text-secondary)' }}>
            Showing {filteredProducts.length} of {products.length} projects
          </p>
        </motion.section>

        {/* Products Grid */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredProducts.map((product, index) => {
              const isExpanded = expandedCard === product.id;
              const colors = getStageColor(product.stage);

              return (
                <motion.div
                  key={product.id}
                  className="rounded-xl overflow-hidden transition-all duration-300"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    boxShadow: isExpanded ? 'var(--shadow-md)' : 'var(--shadow-sm)',
                    border: '1px solid var(--border-color)'
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.05 }}
                >
                  {/* Card Main (Always Visible) */}
                  <div
                    className="p-6 cursor-pointer"
                    onClick={() => toggleCard(product.id)}
                  >
                    <div className="flex justify-between items-start gap-4 mb-3">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold font-sans mb-2" style={{ color: 'var(--text-primary)' }}>
                          {product.title}
                        </h3>
                        <p className="text-sm font-sans" style={{ color: 'var(--text-secondary)' }}>
                          {product.name}
                          {product.teamMembers.length > 0 && (
                            <span>, {product.teamMembers.map(m => m.name).join(', ')}</span>
                          )}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-2 shrink-0">
                        {product.isBoardProject && (
                          <span
                            className="px-3 py-1 rounded-full text-[0.65rem] font-semibold uppercase tracking-wide"
                            style={{
                              backgroundColor: 'rgba(217, 119, 87, 0.18)',
                              color: '#9A3412'
                            }}
                          >
                            CBC Board Builder
                          </span>
                        )}
                        <span
                          className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide"
                          style={{
                            backgroundColor: colors.bg,
                            color: colors.text
                          }}
                        >
                          {product.stage}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm font-sans mb-4" style={{ color: 'var(--text-tertiary)' }}>
                      {product.shortDescription}
                    </p>

                    <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: '#D97757' }}>
                      <span>Learn more</span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{
                          transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.3s'
                        }}
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  <div
                    style={{
                      maxHeight: isExpanded ? '1000px' : '0',
                      overflow: 'hidden',
                      transition: 'max-height 0.4s ease-out'
                    }}
                  >
                    <div className="px-6 pb-6 border-t" style={{ borderTopColor: 'var(--border-color)', paddingTop: '1.5rem' }}>
                      {/* Description */}
                      <div className="mb-6">
                        <h4 className="text-xs font-semibold uppercase tracking-wide mb-3 font-sans" style={{ color: '#D97757' }}>
                          About
                        </h4>
                        <p className="text-sm leading-relaxed font-sans" style={{ color: 'var(--text-secondary)' }}>
                          {product.description}
                        </p>
                      </div>

                      {/* Team */}
                      <div className="mb-6">
                        <h4 className="text-xs font-semibold uppercase tracking-wide mb-3 font-sans" style={{ color: '#D97757' }}>
                          Team
                        </h4>
                        <div className="flex flex-col gap-2">
                          {/* Primary Founder */}
                          <div
                            className="flex justify-between items-center px-4 py-3 rounded-lg transition-all duration-200"
                            style={{
                              backgroundColor: 'var(--bg-secondary)',
                              border: '1px solid var(--border-color)'
                            }}
                          >
                            <span className="font-semibold text-sm font-sans" style={{ color: 'var(--text-primary)' }}>
                              {product.name}
                            </span>
                            <a
                              href={`mailto:${product.email}`}
                              className="text-xs font-sans transition-opacity duration-200"
                              style={{ color: '#D97757' }}
                              onClick={(e) => e.stopPropagation()}
                              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                            >
                              {product.email}
                            </a>
                          </div>

                          {/* Additional Team Members */}
                          {product.teamMembers.length > 0 && product.teamMembers.map((member, idx) => (
                            <div
                              key={idx}
                              className="flex justify-between items-center px-4 py-3 rounded-lg transition-all duration-200"
                              style={{
                                backgroundColor: 'var(--bg-secondary)',
                                border: '1px solid var(--border-color)'
                              }}
                            >
                              <span className="font-semibold text-sm font-sans" style={{ color: 'var(--text-primary)' }}>
                                {member.name}
                              </span>
                              <a
                                href={`mailto:${member.email}`}
                                className="text-xs font-sans transition-opacity duration-200"
                                style={{ color: '#D97757' }}
                                onClick={(e) => e.stopPropagation()}
                                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                              >
                                {member.email}
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Actions */}
                      {product.repoLink && (
                        <div className="flex gap-3">
                          <a
                            href={product.repoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 px-6 py-3 rounded-lg font-sans font-semibold text-center text-sm transition-all duration-300"
                            style={{
                              backgroundColor: '#D97757',
                              color: 'white'
                            }}
                            onClick={(e) => e.stopPropagation()}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = '#c76644';
                              e.currentTarget.style.transform = 'translateY(-2px)';
                              e.currentTarget.style.boxShadow = '0 4px 12px rgba(217, 119, 87, 0.3)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = '#D97757';
                              e.currentTarget.style.transform = 'translateY(0)';
                              e.currentTarget.style.boxShadow = 'none';
                            }}
                          >
                            Visit Site
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div
                className="inline-block p-8 rounded-xl"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '2px dashed var(--border-color)'
                }}
              >
                <h3 className="text-xl font-bold mb-2 font-sans" style={{ color: '#D97757' }}>
                  No projects found
                </h3>
                <p className="font-sans" style={{ color: 'var(--text-secondary)' }}>
                  Try adjusting your search or filters
                </p>
              </div>
            </motion.div>
          )}
        </motion.section>
      </main>

      {showBoardBubble && (
        <motion.aside
          className="fixed bottom-6 right-6 z-50 w-[min(90vw,360px)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          aria-label="CBC board builders callout"
        >
          <div
            className="rounded-2xl p-4 shadow-lg border"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              borderColor: 'var(--border-color)',
              backdropFilter: 'blur(8px)'
            }}
          >
            <p className="text-sm font-semibold font-sans mb-2" style={{ color: '#D97757' }}>
              CBC board is also comprised of builders!
            </p>
            <p className="text-xs font-sans mb-3" style={{ color: 'var(--text-secondary)' }}>
              We are building Attendance Location for Groups to track attendance and email blast attendees about Claude Pro
              and important announcements, such as Foundry.
            </p>
            <a
              href="https://attendance-location-for-groups.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-3 py-2 rounded-lg text-xs font-semibold font-sans transition-all duration-200"
              style={{
                backgroundColor: '#D97757',
                color: 'white'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#c76644';
                e.currentTarget.style.transform = 'translateY(-1px)';
                e.currentTarget.style.boxShadow = '0 4px 10px rgba(217, 119, 87, 0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#D97757';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Visit Site
            </a>
          </div>
        </motion.aside>
      )}
    </div>
  );
}
