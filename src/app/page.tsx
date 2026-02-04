export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-black px-6">
      <h1 className="text-4xl font-bold mb-4">
        Drip AI 👕🔥
      </h1>

      <p className="text-center max-w-md text-lg mb-8">
        Try outfits on your own body using AI.  
        No guessing. No bakch*di. Just drip.
      </p>

      <button className="bg-black text-white px-6 py-3 rounded-xl text-lg hover:opacity-80 transition">
        Try Outfit
      </button>
    </main>
  );
}
