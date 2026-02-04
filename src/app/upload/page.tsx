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
    <main className="min-h-screen bg-white text-black flex flex-col items-center justify-center px-6">
      <h1 className="text-3xl font-bold mb-4">
        Upload your full-body photo 📸
      </h1>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files?.[0] || null)}
        className="mb-4"
      />

      <button
        onClick={generatePreview}
        disabled={!image || loading}
        className={`px-6 py-3 rounded-xl text-lg text-white ${
          image ? "bg-black" : "bg-gray-400"
        }`}
      >
        {loading ? "Generating..." : "Generate Preview"}
      </button>

      {preview && (
        <img
          src={preview}
          alt="AI Preview"
          className="mt-6 w-64 rounded-xl shadow"
        />
      )}
    </main>
  );
}
