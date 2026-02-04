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
    <main className="min-h-screen bg-white text-black flex flex-col items-center px-6 py-10">
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-2 text-center">
        Upload your full-body photo 📸
      </h1>

      <p className="text-sm text-gray-600 mb-6 text-center max-w-md">
        Stand straight, plain background, normal fitted clothes.
        Image is auto-deleted after preview.
      </p>

      {/* Image upload */}
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files?.[0] || null)}
        className="mb-4"
      />

      {/* Generate button */}
      <button
        onClick={generatePreview}
        disabled={!image || loading}
        className={`px-6 py-3 rounded-xl text-lg text-white transition ${
          image && !loading
            ? "bg-black hover:opacity-80"
            : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        {loading ? "Generating..." : "Generate Preview"}
      </button>

      {/* AI Preview */}
      {preview && (
        <>
          <img
            src={preview}
            alt="AI Preview"
            className="mt-8 w-64 rounded-xl shadow-lg"
          />

          {/* Affiliate Product Card */}
          <div className="mt-8 w-full max-w-md border rounded-xl p-4 shadow-sm">
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
                  ₹699 • Casual street fit
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
    </main>
  );
}
