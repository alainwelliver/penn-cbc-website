import Image from "next/image";

export default function Home() {
  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
      style={{ backgroundColor: '#FBF2E9' }}
    >
      <main className="flex flex-col items-center text-center max-w-3xl px-8">
        <div className="mb-16">
          <Image
            src="/newCBClogo.png"
            alt="Claude Builder Club at Penn Logo"
            width={500}
            height={500}
            priority
            className="opacity-100"
          />
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 w-full max-w-lg">
          <a
            href="https://join.slack.com/t/penncbc/shared_invite/zt-3j3m5agvo-rteInQMuR54E0t6mUWuePw"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-white font-sans font-semibold py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl hover:opacity-90"
            style={{
              backgroundColor: '#D97757'
            }}
          >
            Join Slack
          </a>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScP9LuFwiHEx806tv9zczjCIEzqO1Zjb-FjB4XWoa6BS1NNKQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-white hover:bg-gray-50 font-sans font-semibold py-4 px-8 rounded-xl border-2 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
            style={{
              color: '#D97757',
              borderColor: '#D97757'
            }}
          >
            Join Official Roster
          </a>
        </div>

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
      </main>
    </div>
  );
}
