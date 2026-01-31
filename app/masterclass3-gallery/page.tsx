'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Masterclass3Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const photos = [
    { src: '/masterclass3-photos/LLM Interpretability Workshop (CBC@Penn)-2.png', alt: 'LLM Interpretability Workshop' },
    { src: '/masterclass3-photos/image (1).png', alt: 'Masterclass Session' },
    { src: '/masterclass3-photos/unknown 2.png', alt: 'Workshop Activity' },
    { src: '/masterclass3-photos/unknown 4.png', alt: 'Workshop Discussion' },
    { src: '/masterclass3-photos/unknown 5.png', alt: 'Workshop Participants' }
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
            fontSize: 'clamp(2rem, 5vw, 3rem)'
          }}
        >
          Masterclass 3: LLM Interpretability Workshop
        </h1>
        <h2 className="text-2xl font-semibold mb-12 text-center font-sans" style={{
          color: '#D97757',
          opacity: 0.8,
          fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)'
        }}>
          Photos from the Event
        </h2>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              className="relative aspect-square overflow-hidden rounded-xl cursor-pointer transition-all duration-300 hover:scale-105 hover:-translate-y-1"
              style={{
                boxShadow: 'var(--shadow-md)'
              }}
              onClick={() => setSelectedImage(photo.src)}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
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
