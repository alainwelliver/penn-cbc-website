'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function LoadingAnimation() {
  const [animationStage, setAnimationStage] = useState<'loading' | 'landing' | 'complete'>('loading');

  useEffect(() => {
    // Lock scroll during loading
    document.body.style.overflow = 'hidden';

    // Ensure we're at top of page
    window.scrollTo(0, 0);

    // After 2.5 seconds, start landing animation
    const landingTimer = setTimeout(() => {
      setAnimationStage('landing');
    }, 2500);

    // After 3.5 seconds, complete
    const completeTimer = setTimeout(() => {
      setAnimationStage('complete');
      // Unlock scroll after transition
      setTimeout(() => {
        document.body.style.overflow = '';
      }, 500);
    }, 3500);

    return () => {
      clearTimeout(landingTimer);
      clearTimeout(completeTimer);
      document.body.style.overflow = '';
    };
  }, []);

  if (animationStage === 'complete') return null;

  return (
    <>
      <style jsx>{`
        @keyframes fadeInLogo {
          from {
            opacity: 0;
            transform: scale(0.85);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fadeInDivider {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .loading-overlay {
          position: fixed;
          inset: 0;
          background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
          z-index: 10000;
          transition: opacity 1s ease-out;
        }

        .loading-overlay.landing {
          opacity: 0;
        }

        .logo-container {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 10001;
          transition: all 1s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .logo-container.landing {
          top: 11rem;
          left: 3rem;
          transform: translate(0, 0);
        }

        @media (min-width: 640px) {
          .logo-container.landing {
            left: max(2rem, calc((100vw - 80rem) / 2 + 2rem));
          }
        }

        .logo-group {
          display: inline-flex;
          align-items: center;
          gap: 1.5rem;
          transition: all 1s ease-out;
        }

        .logo-group.landing {
          gap: 1rem;
          padding: 0.75rem 1.5rem;
          border-radius: 16px;
          background-color: var(--bg-card);
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--border-color);
        }

        .logo {
          animation: fadeInLogo 2s ease-out forwards;
          object-fit: contain;
        }

        .divider {
          font-size: 2.5rem;
          color: #D97757;
          font-weight: 700;
          animation: fadeInDivider 2s ease-out 0.5s both;
          transition: font-size 1s ease-out;
        }

        .divider.landing {
          font-size: 1.75rem;
        }
      `}</style>

      <div className={`loading-overlay ${animationStage === 'landing' ? 'landing' : ''}`} />

      <div className={`logo-container ${animationStage === 'landing' ? 'landing' : ''}`}>
        <div className={`logo-group ${animationStage === 'landing' ? 'landing' : ''}`}>
          <Image
            src="/penn-shield.png"
            alt="Penn Shield"
            width={58}
            height={48}
            className="logo"
            priority
          />
          <span className={`divider ${animationStage === 'landing' ? 'landing' : ''}`}>×</span>
          <Image
            src="/claude-logo.png"
            alt="Claude Logo"
            width={48}
            height={48}
            className="logo"
            priority
          />
        </div>
      </div>
    </>
  );
}
