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
            
{/* Smart AI Picks */}
<div className="mt-6 bg-gray-100 rounded-xl p-4">
  <h3 className="font-semibold text-lg mb-2">
    🔥 AI Picks for You
  </h3>

  <ul className="text-sm text-gray-700 space-y-1">
    <li>✔️ Oversized fits suit your body frame</li>
    <li>✔️ Dark colors enhance your look</li>
    <li>✔️ Street style works better than slim-fit</li>
  </ul>
</div>

           {/* Multi Product Recommendations */}
<div className="mt-8 space-y-4">
  <h3 className="font-semibold text-lg">
    🛍️ Best places to buy this look
  </h3>

  {/* Amazon */}
  <div className="border rounded-xl p-4 flex items-center gap-4">
    <img
      src="https://placehold.co/80x120?text=Amazon"
      alt="Amazon"
      className="rounded-lg"
    />

    <div className="flex-1">
      <p className="font-medium">Black Oversized T-Shirt</p>
      <p className="text-sm text-gray-600">₹699 • Amazon</p>
    </div>

    <a
      href="https://www.amazon.in/?tag=YOURTAG-21"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-black text-white px-4 py-2 rounded-lg text-sm hover:opacity-80"
    >
      Buy
    </a>
  </div>

  {/* Flipkart */}
  <div className="border rounded-xl p-4 flex items-center gap-4">
    <img
      src="https://placehold.co/80x120?text=Flipkart"
      alt="Flipkart"
      className="rounded-lg"
    />

    <div className="flex-1">
      <p className="font-medium">Black Street Fit Tee</p>
      <p className="text-sm text-gray-600">₹679 • Flipkart</p>
    </div>

    <a
      href="https://www.flipkart.com"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-black text-white px-4 py-2 rounded-lg text-sm hover:opacity-80"
    >
      Buy
    </a>
  </div>

  {/* Myntra */}
  <div className="border rounded-xl p-4 flex items-center gap-4">
    <img
      src="https://placehold.co/80x120?text=Myntra"
      alt="Myntra"
      className="rounded-lg"
    />

    <div className="flex-1">
      <p className="font-medium">Oversized Cotton T-Shirt</p>
      <p className="text-sm text-gray-600">₹749 • Myntra</p>
    </div>

    <a
      href="https://www.myntra.com"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-black text-white px-4 py-2 rounded-lg text-sm hover:opacity-80"
    >
      Buy
    </a>
  </div>

  <p className="text-xs text-gray-500 text-center">
    Affiliate links • Prices may vary
  </p>
</div>
