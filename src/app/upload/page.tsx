"use client";

import { useState } from "react";

export default function UploadPage() {
  const [image, setImage] = useState<File | null>(null);

  return (
    <main className="min-h-screen bg-white text-black flex flex-col items-center px-6 py-10">
      <h1 className="text-3xl font-bold mb-4">Upload your full-body photo 📸</h1>

      <ul className="text-sm text-gray-600 mb-6 list-disc max-w-md">
        <li>Stand straight, arms slightly apart</li>
        <li>Plain background (white wall best)</li>
        <li>Normal fitted clothes (not too baggy)</li>
        <li>Image auto-deleted after preview</li>
      </ul>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files?.[0] || null)}
        className="mb-6"
      />

      <button
        disabled={!image}
        className={`px-6 py-3 rounded-xl text-lg text-white transition ${
          image ? "bg-black hover:opacity-80" : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        Generate Preview
      </button>
    </main>
  );
}
