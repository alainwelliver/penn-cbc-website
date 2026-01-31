'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
}

export default function CursorParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const nextIdRef = useRef(0);

  useEffect(() => {
    let lastEmit = Date.now();

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      // Emit particles every 50ms while moving
      if (now - lastEmit > 50) {
        const newParticle: Particle = {
          id: nextIdRef.current,
          x: e.clientX,
          y: e.clientY,
        };

        setParticles(prev => [...prev, newParticle]);
        nextIdRef.current += 1;
        lastEmit = now;

        // Remove particle after animation
        setTimeout(() => {
          setParticles(prev => prev.filter(p => p.id !== newParticle.id));
        }, 1000);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 9999 }}>
      <AnimatePresence>
        {particles.map(particle => (
          <motion.div
            key={particle.id}
            initial={{
              x: particle.x,
              y: particle.y,
              opacity: 0.8,
              scale: 1,
            }}
            animate={{
              y: particle.y - 50,
              opacity: 0,
              scale: 0.5,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #D97757, #c46647)',
              boxShadow: '0 0 10px rgba(217, 119, 87, 0.5)',
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
