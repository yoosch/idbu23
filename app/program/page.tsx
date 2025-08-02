"use client";

import React, { useState } from "react";
import { Timeline } from "../../components/timeline";

export default function ProgramPage() {
  const multiData = [
    // Tambahkan data multidisiplin di sini jika diperlukan
  ];

  const monoData = [
    {
      title: "Sosialisasi Posyandu Remaja",
      content: (
        <div>
          <p className="mb-4 text-sm text-pink-600">
            Sosialisasi Posyandu Remaja di MTs Tedunan
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={`multi1.jpg`}
              className="h-28 md:h-44 lg:h-60 w-full object-cover rounded-2xl shadow-pink-300 shadow-md border-2 border-pink-300"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Pelatihan Microsoft Word untuk Guru",
      content: (
        <div>
          <p className="mb-4 text-sm text-pink-600">
            Memberikan pelatihan dasar Microsoft Word untuk membuat soal dan
            materi pembelajaran.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/guru1.jpg"
              alt="Guru Pelatihan"
              className="h-28 md:h-44 lg:h-60 w-full object-cover rounded-2xl shadow-pink-300 shadow-md border-2 border-pink-300"
            />
            <img
              src="/images/guru2.jpg"
              alt="Pelatihan Word"
              className="h-28 md:h-44 lg:h-60 w-full object-cover rounded-2xl shadow-pink-300 shadow-md border-2 border-pink-300"
            />
          </div>
        </div>
      ),
    },
  ];

  const [activeType, setActiveType] = useState<"multi" | "mono">("multi");

  const activeData = activeType === "multi" ? multiData : monoData;

  return (
    <div className="min-h-screen bg-pink-50 text-pink-700 py-24 px-6">
      <div className="max-w-5xl mx-auto mb-6">
        <h1 className="text-3xl font-bold mb-2 text-pink-600 drop-shadow">
          Program Kerja KKNT TIM 23 UNDIP
        </h1>
        <p className="text-pink-500 text-sm">
          Silakan pilih jenis program kerja yang ingin dilihat:
        </p>
        <div className="mt-4 flex gap-3">
          <button
            onClick={() => setActiveType("multi")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
              activeType === "multi"
                ? "bg-pink-500 text-white shadow-lg"
                : "bg-white text-pink-700 border border-pink-300"
            }`}
          >
            Multidisiplin
          </button>
          <button
            onClick={() => setActiveType("mono")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
              activeType === "mono"
                ? "bg-pink-500 text-white shadow-lg"
                : "bg-white text-pink-700 border border-pink-300"
            }`}
          >
            Sosial Masyarakat
          </button>
        </div>
      </div>

      <Timeline data={activeData} />
    </div>
  );
}