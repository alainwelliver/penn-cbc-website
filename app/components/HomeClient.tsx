'use client';

import Image from "next/image";
import { useMemo, useState } from "react";

type Photo = { src: string; alt: string };

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

export default function HomeClient({ initialPhotos }: { initialPhotos: Photo[] }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const photoWallImages = useMemo(() => initialPhotos.slice(0, 12), [initialPhotos]);

  const leftPhotos = photoWallImages.slice(0, 4);
  const rightPhotos = photoWallImages.slice(4, 8);
  const [topLeftPhoto, topRightPhoto, bottomLeftPhoto, bottomRightPhoto] = photoWallImages.slice(8, 12);

  // keep order; just render in a 2-col grid on mobile
  const mobileGridRows = useMemo(() => chunk(photoWallImages, 2), [photoWallImages]);

  return (
    <div
      className="min-h-screen flex flex-col items-center py-12 lg:py-20 relative"
      style={{ backgroundColor: '#FBF2E9' }}
    >
      <main className="flex flex-col items-center w-full">
        {/* Photo Wall Section - Logo with photos on sides */}
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-8 mb-16 lg:mb-24 relative">
          {/* Desktop: left stack + (2 top photos, logo, 2 bottom photos) + right stack */}
          <div className="hidden lg:flex items-center justify-center gap-3">
            <div className="flex flex-col gap-3 w-52 shrink-0">
              {leftPhotos.map((photo, index) => (
                <div
                  key={index}
                  className="relative aspect-square overflow-hidden rounded-lg shadow-lg cursor-pointer transition-transform duration-200 hover:scale-105 bg-gray-100"
                  onClick={() => setSelectedImage(photo.src)}
                >
                  <Image src={photo.src} alt={photo.alt} fill className="object-cover" />
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="flex gap-3">
                {topLeftPhoto && (
                  <div
                    className="relative aspect-square overflow-hidden rounded-lg shadow-lg cursor-pointer transition-transform duration-200 hover:scale-105 bg-gray-100 w-52"
                    onClick={() => setSelectedImage(topLeftPhoto.src)}
                  >
                    <Image src={topLeftPhoto.src} alt={topLeftPhoto.alt} fill className="object-cover" />
                  </div>
                )}
                {topRightPhoto && (
                  <div
                    className="relative aspect-square overflow-hidden rounded-lg shadow-lg cursor-pointer transition-transform duration-200 hover:scale-105 bg-gray-100 w-52"
                    onClick={() => setSelectedImage(topRightPhoto.src)}
                  >
                    <Image src={topRightPhoto.src} alt={topRightPhoto.alt} fill className="object-cover" />
                  </div>
                )}
              </div>

              <Image
                src="/marketing/newCBClogo.png"
                alt="Claude Builder Club at Penn Logo"
                width={428}
                height={428}
                priority
                className="opacity-100"
              />

              <div className="flex gap-3">
                {bottomLeftPhoto && (
                  <div
                    className="relative aspect-square overflow-hidden rounded-lg shadow-lg cursor-pointer transition-transform duration-200 hover:scale-105 bg-gray-100 w-52"
                    onClick={() => setSelectedImage(bottomLeftPhoto.src)}
                  >
                    <Image src={bottomLeftPhoto.src} alt={bottomLeftPhoto.alt} fill className="object-cover" />
                  </div>
                )}
                {bottomRightPhoto && (
                  <div
                    className="relative aspect-square overflow-hidden rounded-lg shadow-lg cursor-pointer transition-transform duration-200 hover:scale-105 bg-gray-100 w-52"
                    onClick={() => setSelectedImage(bottomRightPhoto.src)}
                  >
                    <Image src={bottomRightPhoto.src} alt={bottomRightPhoto.alt} fill className="object-cover" />
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-3 w-52 shrink-0">
              {rightPhotos.map((photo, index) => (
                <div
                  key={index}
                  className="relative aspect-square overflow-hidden rounded-lg shadow-lg cursor-pointer transition-transform duration-200 hover:scale-105 bg-gray-100"
                  onClick={() => setSelectedImage(photo.src)}
                >
                  <Image src={photo.src} alt={photo.alt} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile/Tablet: logo + 2-column photo grid below */}
          <div className="lg:hidden">
            <div className="flex justify-center items-center px-4">
              <Image
                src="/marketing/newCBClogo.png"
                alt="Claude Builder Club at Penn Logo"
                width={500}
                height={500}
                priority
                className="opacity-100"
              />
            </div>

            <div className="grid grid-cols-2 gap-3 mt-6">
              {mobileGridRows.flat().map((photo, index) => (
                <div
                  key={index}
                  className="relative aspect-square overflow-hidden rounded-lg shadow-lg cursor-pointer transition-transform duration-200 hover:scale-105 bg-gray-100"
                  onClick={() => setSelectedImage(photo.src)}
                >
                  <Image src={photo.src} alt={photo.alt} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Scroll Indicator - Bottom Right of Photo Wall */}
          <div className="absolute -bottom-12 right-4 lg:right-8 flex flex-col items-center animate-bounce">
            <p className="text-sm lg:text-base font-sans font-semibold mb-1" style={{ color: '#D97757' }}>
              Learn More
            </p>
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: '#D97757' }}
            >
              <path
                d="M12 4L12 20M12 20L18 14M12 20L6 14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Who We Are Section */}
        <section className="w-full max-w-3xl px-8 py-12 lg:py-16">
          <h2
            className="text-3xl lg:text-4xl font-bold mb-6 text-center font-sans"
            style={{ color: '#D97757' }}
          >
            Who We Are
          </h2>
          <p className="text-base lg:text-lg text-center font-sans leading-relaxed" style={{ color: '#333' }}>
            We are a community of builders, innovators, and AI enthusiasts at the University of Pennsylvania. We are
            co-creating a space where students of all backgrounds and skill levels can take their ideas and bring them to life.
            In this GenAI world, we know we can build anything, but we don&apos;t want GenAI to learn for us; we want to learn with it.
            Our mission is to take each member of our community one step further on their educational and builder journey, whether
            they be a Wharton freshman or a CIS PhD, and explore the frontiers of artificial intelligence through hands-on projects,
            collaborative learning, and meaningful discussions.
          </p>
        </section>

        {/* Why We Started It Section */}
        <section className="w-full max-w-3xl px-8 py-12 lg:py-16">
          <h2
            className="text-3xl lg:text-4xl font-bold mb-6 text-center font-sans"
            style={{ color: '#D97757' }}
          >
            Why We Started It
          </h2>
          <div className="text-base lg:text-lg text-center font-sans leading-relaxed" style={{ color: '#333' }}>
            <p>
              The Claude Builder Club was born from a shared vision between Anthropic, Albert Opher, Alain Welliver, and other
              like-minded Penn students to democratize AI knowledge and create a space where stuents can learn, build, and grow
              together, no matter what learning pace or background they come with.
            </p>
            <p className="mt-4">
              We saw that there was no one space on campus that was dedicated to learning and building with AI that was open to
              everyone and that truly harnessed the power mutual encouragement and support that a builder community provides.
            </p>
            <p className="mt-4">
              In addition, there was no one-stop-shop where students can learn how to take an idea and build a product, and then
              take that product and learn how to turn it into a business.
            </p>
            <p className="mt-4">
              We&apos;ve been blown away by the caliber of projects produced and the quality of learning that has taken place in our
              inaugural semester, and we can&apos;t wait to see how the club grows and serves its members.
            </p>
          </div>
          <p className="text-right mt-6 text-lg font-serif italic" style={{ color: '#666' }}>
            - Alain Welliver SEAS &apos;26, Albert Opher M&T &apos;25
          </p>
        </section>

        {/* Action Buttons */}
        <div className="flex flex-col items-center gap-6 w-full max-w-lg px-8 mt-12">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScP9LuFwiHEx806tv9zczjCIEzqO1Zjb-FjB4XWoa6BS1NNKQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="w-64 text-white font-sans font-semibold py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl hover:opacity-90 text-center"
            style={{
              backgroundColor: '#D97757'
            }}
          >
            Sign Up Now!
          </a>

          <a
            href="https://join.slack.com/t/penncbc/shared_invite/zt-3o3fc1uvq-4ow_Ayc6SAZaP38CXUifOg"
            target="_blank"
            rel="noopener noreferrer"
            className="w-64 bg-white hover:bg-gray-50 font-sans font-semibold py-4 px-8 rounded-xl border-2 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 text-center"
            style={{
              color: '#D97757',
              borderColor: '#D97757'
            }}
          >
            Join Slack
          </a>
        </div>

        {/* Social Icons */}
        <div className="mt-8">
          <a
            href="https://www.linkedin.com/company/cbcatpenn"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-all duration-200 transform hover:scale-110 hover:opacity-80"
            aria-label="LinkedIn"
          >
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="#D97757"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>

        {/* Footer Disclaimer */}
        <footer className="w-full py-8 mt-12">
          <p className="text-sm font-sans text-center" style={{ color: '#666' }}>
            Made with Claude...hehe
          </p>
        </footer>
      </main>

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
    </div>
  );
}

