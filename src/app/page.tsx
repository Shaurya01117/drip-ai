export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-black px-6">
      <h1 className="text-4xl font-bold mb-4 text-center">
        Drip AI 👕🔥
      </h1>

      <p className="text-center max-w-md text-lg mb-8 text-gray-700">
        Try outfits on your own body using AI.  
        No guessing. No bakch*di. Just drip.
      </p>

      <a
        href="/upload"
        className="bg-black text-white px-8 py-3 rounded-xl text-lg hover:opacity-80 transition"
      >
        Try Outfit
      </a>

      <p className="mt-6 text-sm text-gray-500 text-center max-w-sm">
        AI-generated preview. Actual product may vary.
      </p>
    </main>
  );
}
