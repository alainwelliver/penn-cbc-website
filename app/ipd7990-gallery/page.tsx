'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function IPD7990Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const photos = [
    { src: '/ipd7790-guest-lecture/513A0227-2671-45B3-AEA0-608C2117A81A_4_5005_c.jpeg', alt: 'IPD 7990 Guest Lecture' },
    { src: '/ipd7790-guest-lecture/A1B30E9F-14BB-44BF-B711-E98ED393196F_4_5005_c.jpeg', alt: 'Guest Lecture Session' },
    { src: '/ipd7790-guest-lecture/E6B9417A-71AB-4D51-9DD3-14712D26A7CA_4_5005_c.jpeg', alt: 'Lecture Activity' },
    { src: '/ipd7790-guest-lecture/E8AD568D-1AED-4A00-9F52-9B91273D2B74_1_105_c.jpeg', alt: 'Lecture Discussion' },
    { src: '/ipd7790-guest-lecture/EEDFCE95-B120-4FB1-B0DD-1C28A83504DF_4_5005_c.jpeg', alt: 'Lecture Participants' },
    { src: '/ipd7790-guest-lecture/F10FD059-DD6F-41C8-BB37-992F2A0DCCD6_4_5005_c.jpeg', alt: 'Guest Lecture Presentation' },
    { src: '/ipd7790-guest-lecture/F85D04A5-DC3F-4C95-B279-EF8F14BEF219_4_5005_c.jpeg', alt: 'Lecture Attendees' }
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
          IPD 7990 Guest Lecture
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
