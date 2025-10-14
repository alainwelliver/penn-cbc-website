export default function Calendar() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center py-8 px-4"
      style={{ backgroundColor: '#FBF2E9' }}
    >
      <main className="flex flex-col items-center text-center w-full max-w-6xl">
        <h1
          className="text-4xl font-bold font-serif mb-8"
          style={{ color: '#D97757' }}
        >
          Penn CBC Calendar
        </h1>

        <div className="w-full bg-white rounded-lg shadow-xl p-4 overflow-hidden">
          <iframe
            src="https://calendar.google.com/calendar/embed?src=994e94a9b2b5c4e38c53eb412eb729362e86cd701169e17b6a0a4e70f0928f31%40group.calendar.google.com&ctz=America%2FNew_York"
            style={{ border: 0 }}
            width="100%"
            height="600"
            frameBorder="0"
            scrolling="no"
            title="Claude Builder Club Events Calendar"
          ></iframe>
        </div>
      </main>
    </div>
  );
}
