export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">

        {/* Demo Badge */}
        <div className="inline-block mb-4 px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-600">
          🚧 Demo Mode
        </div>

        <h1 className="text-4xl font-bold mb-4">
          Drip AI 👕🔥
        </h1>

        <p className="text-gray-700 mb-6">
          See how outfits look on <span className="font-semibold">your own body</span> using AI.  
          Try first. Buy smarter.
        </p>

        {/* How it works */}
        <div className="text-sm text-gray-600 mb-6 space-y-2">
          <p>📸 Upload full-body photo</p>
          <p>🤖 Get AI outfit preview</p>
          <p>🛍️ Buy from Amazon / Flipkart / Myntra</p>
        </div>

        <a
          href="/upload"
          className="block w-full bg-black text-white py-3 rounded-xl text-lg hover:opacity-90 transition"
        >
          Try Outfit Now
        </a>

        <p className="mt-4 text-xs text-gray-500">
          AI-generated preview. Actual product may vary.
        </p>
      </div>
    </main>
  );
}
