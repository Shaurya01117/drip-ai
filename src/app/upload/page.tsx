"use client";

import { useState } from "react";

export default function UploadPage() {
  const [image, setImage] = useState<File | null>(null);

  return (
    <main className="min-h-screen bg-white text-black flex flex-col items-center justify-center px-6">
      <h1 className="text-3xl font-bold mb-4">
        Upload your full-body photo 📸
      </h1>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files?.[0] || null)}
        className="mb-6"
      />

      <button
        disabled={!image}
        className={`px-6 py-3 rounded-xl text-lg text-white ${
          image ? "bg-black" : "bg-gray-400"
        }`}
      >
        Generate Preview
      </button>
    </main>
  );
}
