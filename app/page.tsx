"use client";
import React from "react";
import { Button, Image as HeroImage } from "@heroui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaTiktok } from "react-icons/fa";

export default function Home() {
  return (
    <main className="text-white bg-gray-900">
      {/* HERO SECTION */}
      <section
        className="relative w-full h-screen bg-center bg-cover bg-no-repeat flex items-center justify-center text-center px-4 sm:px-8"
        style={{ backgroundImage: "url('/tedunan.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-70 z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-gray-900 z-20" />

        <div className="relative z-30 max-w-4xl">
          <div className="px-4 py-10 md:py-20">
            <h1 className="text-2xl md:text-4xl lg:text-7xl font-bold mb-4">
              {"IDBU UNDIP TIM 23".split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                  animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1,
                    ease: "easeInOut",
                  }}
                  className="mr-2 inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.8 }}
              className="max-w-xl mx-auto text-lg font-normal text-white/80"
            >
              Penguatan Perekonomian Masyarakat Desa Tedunan Melalui
              Optimalisasi Potensi Desa
            </motion.p>
          </div>
        </div>
      </section>

      {/* PROGRAM KKN */}
      <section className="bg-gray-900 py-16 px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto text-center"
        >
          <h2 className="text-3xl font-semibold mb-4">Tentang Program KKN</h2>
          <p className="text-lg text-gray-300 mb-10">
            Program ini bertujuan untuk meningkatkan potensi ekonomi warga
            melalui penerapan teknologi informasi dan digitalisasi pertanian
            lokal.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6">
            {[
              {
                title: "TEMA",
                content:
                  "Pengembangan potensi desa berbasis teknologi, ekonomi, dan lingkungan.",
              },
              {
                title: "PERIODE",
                content:
                  "KKN berlangsung dari Juli hingga Agustus 2025, dengan berbagai kegiatan pemberdayaan dan edukasi.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex-1 bg-gray-800 border border-gray-700 rounded-lg p-6 text-left hover:bg-gray-700 transition-all"
              >
                <h3 className="text-xl font-bold mb-2 text-yellow-400">
                  {item.title}
                </h3>
                <p className="text-gray-300">{item.content}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* DESA TEDUNAN */}
      <section className="bg-gray-900 text-white py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Tentang Desa Tedunan</h2>
            <p className="text-gray-300 text-lg">
              Desa Tedunan adalah desa pesisir di Kecamatan Wedung, Kabupaten
              Demak, Jawa Tengah. Potensi perikanan dan pertaniannya
              menjadikannya pusat pemberdayaan ekonomi masyarakat berbasis desa.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <Image
              src="/tedunan.png"
              alt="Desa Tedunan"
              width={500}
              height={300}
              className="rounded-lg shadow-md w-full md:w-1/2 h-auto object-cover"
            />
            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold text-yellow-400 mb-3">
                Potensi Unggulan
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>Perikanan laut dan budidaya tambak</li>
                <li>Pertanian tradisional dan organik</li>
                <li>Pemberdayaan UMKM berbasis hasil alam</li>
                <li>Ekowisata dan edukasi konservasi pesisir</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* TENTANG KAMI */}
      <section className="bg-gray-900 text-white py-20 px-6" id="tentang-kami">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Tentang Kami
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-10">
              Kami adalah tim mahasiswa dari berbagai jurusan yang tergabung
              dalam program Kuliah Kerja Nyata (KKN). Dengan keahlian yang
              beragam, kami bersatu untuk memberi dampak nyata melalui teknologi
              dan edukasi.
            </p>

            <HeroImage
              isBlurred
              alt="Foto KKN"
              src="/fotokkn.jpg"
              className="rounded-lg max-w-full mx-auto"
            />

            <Link href="/tim">
              <Button
                className="mt-10"
                variant="shadow"
                color="primary"
                size="lg"
              >
                Lihat Tim Lengkap
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
      <section className="bg-gray-900 text-white py-16 px-6" id="social">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto"
        >
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Our Social Media</h2>
            <p className="mb-8">
              Follow aktivitas kami selama KKN di platform media sosial!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              {/* Instagram Box */}
              <div className="bg-white text-black rounded-lg shadow-md px-6 py-4 transition hover:scale-105">
                <a
                  href="https://instagram.com/kisahditedunan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                  <FaInstagram className="text-pink-600 text-2xl" />
                  <span className="font-medium">@kisahditedunan</span>
                </a>
              </div>

              {/* TikTok Box */}
              <div className="bg-white text-black rounded-lg shadow-md px-6 py-4 transition hover:scale-105">
                <a
                  href="https://tiktok.com/@kisahditedunan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                  <FaTiktok className="text-black text-2xl" />
                  <span className="font-medium">@kisahditedunan</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col items-center justify-center space-y-4 border-t border-gray-700 pt-6">
          <div className="text-center text-sm">
            Made with <span className="text-red-500">❤️</span> by{" "}
            <strong>TIM 23 KKNT UNDIP 2025</strong>
          </div>
          <div className="text-xs text-gray-400">
            © {new Date().getFullYear()} All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
