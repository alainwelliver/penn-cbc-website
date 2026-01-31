'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // 25 diverse photos from different events
  const photos = [
    { src: '/gallery-photos/photo1.jpg', alt: 'CBC Meeting' },
    { src: '/gallery-photos/photo2.jpg', alt: 'Workshop Session' },
    { src: '/gallery-photos/photo3.jpg', alt: 'Team Discussion' },
    { src: '/gallery-photos/photo4.jpg', alt: 'Hackathon Winners' },
    { src: '/gallery-photos/photo5.jpg', alt: 'Community Event' },
    { src: '/gallery-photos/photo6.jpg', alt: 'Masterclass' },
    { src: '/gallery-photos/photo7.jpg', alt: 'Networking' },
    { src: '/gallery-photos/photo8.jpg', alt: 'Builder Hours' },
    { src: '/gallery-photos/photo9.jpg', alt: 'Group Photo' },
    { src: '/gallery-photos/photo10.jpg', alt: 'Workshop Activity' },
    { src: '/gallery-photos/photo11.jpg', alt: 'Hackathon Event' },
    { src: '/gallery-photos/photo12.jpg', alt: 'Hackathon Collaboration' },
    { src: '/gallery-photos/photo13.jpg', alt: 'Hackathon Team' },
    { src: '/gallery-photos/photo14.jpg', alt: 'Hackathon Presentations' },
    { src: '/gallery-photos/photo15.jpg', alt: 'Hackathon Builders' },
    { src: '/gallery-photos/photo16.jpg', alt: 'Hackathon Demos' },
    { src: '/gallery-photos/photo17.jpg', alt: 'Hackathon Projects' },
    { src: '/gallery-photos/photo18.jpg', alt: 'Hackathon Innovation' },
    { src: '/gallery-photos/photo19.jpg', alt: 'Hackathon Development' },
    { src: '/gallery-photos/photo20.jpg', alt: 'Hackathon Coding' },
    { src: '/gallery-photos/photo21.jpg', alt: 'Hackathon Participants' },
    { src: '/gallery-photos/photo22.jpg', alt: 'Hackathon Activities' },
    { src: '/gallery-photos/photo23.jpg', alt: 'Hackathon Showcase' },
    { src: '/gallery-photos/photo24.jpg', alt: 'Hackathon Community' },
    { src: '/gallery-photos/photo25.jpg', alt: 'Fireside Chat' }
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
          Gallery
        </h1>
        <h2 className="text-2xl font-semibold mb-12 text-center font-sans" style={{
          color: '#D97757',
          opacity: 0.8,
          fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)'
        }}>
          Photos from Our Meetings & Events
        </h2>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              className="relative aspect-square overflow-hidden rounded-xl cursor-pointer transition-all duration-300 hover:scale-105 hover:-translate-y-1"
              style={{
                boxShadow: 'var(--shadow-md)'
              }}
              onClick={() => setSelectedImage(photo.src)}
              initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-300"
              />
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-6xl max-h-full">
              <button
                className="absolute -top-12 right-0 text-white text-4xl font-bold hover:text-gray-300"
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
      </main>
    </div>
  );
}
