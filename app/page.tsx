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
            src="/Penn_CBC_Logo_background_better.png"
            alt="Penn Claude Builder Club Logo"
            width={600}
            height={600}
            priority
            className="opacity-100"
          />
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 w-full max-w-lg">
          <a
            href="https://join.slack.com/t/pennclaudebuilderclub/shared_invite/zt-3cp23uvmb-YNAM18JLw2aby~6CNtWOWg"
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
      </main>
    </div>
  );
}
