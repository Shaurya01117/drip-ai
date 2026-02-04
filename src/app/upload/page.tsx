"use client";

import { useState } from "react";

export default function UploadPage() {
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);

  const generatePreview = async () => {
    if (!image) return;

    setLoading(true);
    setPreview(null);

    const formData = new FormData();
    formData.append("image", image);

    const res = await fetch("/api/preview", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setPreview(data.previewUrl);
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center mb-2">
          Try Outfit with AI 👕🔥
        </h1>

        <p className="text-sm text-gray-600 text-center mb-6">
          Upload a clear full-body photo.  
          Plain background works best.
        </p>

        {/* Trust badge */}
        <div className="text-xs text-gray-500 text-center mb-4">
          🔒 Your image is processed securely and never stored
        </div>

        {/* File input */}
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files?.[0] || null)}
          className="w-full mb-4"
        />

        {/* Generate button */}
        <button
          onClick={generatePreview}
          disabled={!image || loading}
          className={`w-full px-6 py-3 rounded-xl text-lg text-white transition-all duration-200 ${
            image && !loading
              ? "bg-black hover:scale-[1.02] hover:opacity-90"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          {loading ? "Generating..." : "Generate Preview"}
        </button>

        {/* Preview */}
        {preview && (
          <>
            <img
              src={preview}
              alt="AI Preview"
              className="mt-8 mx-auto w-64 rounded-xl shadow-2xl border"
            />

            {/* Affiliate Product Card */}
            <div className="mt-8 border rounded-xl p-4 shadow-sm">
              <div className="flex gap-4 items-center">
                <img
                  src="https://placehold.co/120x160?text=Product"
                  alt="Product"
                  className="w-24 rounded-lg"
                />

                <div className="flex-1">
                  <h3 className="font-semibold text-lg">
                    Black Oversized T-Shirt
                  </h3>
                  <p className="text-sm text-gray-600">
                    ₹699 • Street style fit
                  </p>

                  <a
                    href="https://www.amazon.in/?tag=YOURTAG-21"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 bg-black text-white px-4 py-2 rounded-lg hover:opacity-80 transition"
                  >
                    Buy on Amazon
                  </a>
                </div>
              </div>

              <p className="mt-3 text-xs text-gray-500">
                Affiliate link • We may earn a commission
              </p>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
