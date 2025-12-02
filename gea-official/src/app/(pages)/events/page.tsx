export default function Events() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-gray-100 px-6 py-20">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl sm:text-5xl font-semibold text-white mb-6">
          No events available
        </h1>
        <p className="text-lg sm:text-xl text-gray-400 leading-relaxed">
          We don’t have any events scheduled at the moment.  
          <br className="hidden sm:block" />
          But stay tuned… new musical experiences will be coming soon
        </p>

        <div className="mt-10">
          <div className="h-1 w-32 bg-linear-to-r from-gray-600 via-gray-400 to-gray-600 mx-auto rounded-full opacity-70"></div>
        </div>
      </div>
    </div>
  );
}
