"use client";

import React from "react";
import { Button, Image as HeroImage } from "@heroui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaTiktok } from "react-icons/fa";

export default function Home() {
  return (
    <main className="text-pink-900 bg-pink-100 font-[\'Comic Neue\']">
      <audio autoPlay loop>
        <source src="/bg-sanrio-music.mp3" type="audio/mpeg" />
      </audio>

      {/* HERO SECTION */}
      <section
        className="relative w-full h-screen bg-center bg-cover bg-no-repeat flex items-center justify-center text-center px-4 sm:px-8"
        style={{ backgroundImage: "url('/kitty.jpg')" }}
      >
        <div className="absolute inset-0 bg-pink-200 opacity-80 z-10" />

        <div className="relative z-30 max-w-4xl">
          <div className="px-4 py-10 md:py-20">
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 text-pink-600">
              {"IDBU UNDIP TIM 23".split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                  animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1, ease: "easeInOut" }}
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
              className="max-w-xl mx-auto text-lg font-normal text-pink-800"
            >
              Penguatan Perekonomian Masyarakat Desa Tedunan Melalui Optimalisasi Potensi Desa
            </motion.p>
          </div>
        </div>
      </section>

      {/* PROGRAM KKN */}
      <section className="bg-white py-20 px-6 rounded-t-[4rem]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto text-center"
        >
          <h2 className="text-3xl font-semibold mb-4 text-pink-500">Tentang Program KKN 💕</h2>
          <p className="text-lg text-pink-600 mb-10">
            Program ini bertujuan untuk membantu warga desa seperti Hello Kitty membantu teman-temannya! 🎀
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6">
            {[{
              title: "TEMA",
              content: "Pengembangan potensi desa berbasis teknologi, ekonomi, dan lingkungan."
            }, {
              title: "PERIODE",
              content: "Juli - Agustus 2025, penuh cinta dan kontribusi untuk Desa Tedunan. 💗"
            }].map((item, idx) => (
              <div key={idx} className="flex-1 bg-pink-50 border border-pink-300 rounded-2xl p-6 text-left hover:bg-pink-100 transition-all shadow-md">
                <h3 className="text-xl font-bold mb-2 text-pink-500">{item.title}</h3>
                <p className="text-pink-700">{item.content}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* DESA TEDUNAN */}
      <section className="bg-pink-100 text-pink-800 py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4 text-pink-600">Tentang Desa Tedunan</h2>
            <p className="text-pink-700 text-lg">
              Desa pesisir penuh warna dan potensi! 🐱🌸🌊
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <Image
              src="/tedunan.png"
              alt="Desa Tedunan"
              width={500}
              height={300}
              className="rounded-xl shadow-lg w-full md:w-1/2 h-auto object-cover"
            />
            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold text-pink-600 mb-3">Potensi Unggulan</h3>
              <ul className="list-[circle] pl-5 space-y-2 text-pink-700">
                <li>Perikanan laut dan budidaya tambak</li>
                <li>Pertanian organik & tradisional</li>
                <li>UMKM kreatif & hasil alam</li>
                <li>Ekowisata dan konservasi pesisir</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* TENTANG KAMI */}
      <section className="bg-white text-pink-800 py-20 px-6" id="tentang-kami">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-pink-600">Tentang Kami 🎓💗</h2>
            <p className="text-lg sm:text-xl text-pink-700 mb-10">
              Kami adalah tim KKN penuh semangat dan kasih sayang! 💕
            </p>

            <HeroImage
              isBlurred
              alt="Foto KKN"
              src="/fotokkn.jpg"
              className="rounded-3xl max-w-full mx-auto shadow-md"
            />

            <Link href="/tim">
              <Button className="mt-10 bg-pink-400 hover:bg-pink-500 text-white rounded-full shadow-lg px-6 py-3">
                Lihat Tim Lengkap
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* SOCIAL MEDIA */}
      <section className="bg-pink-100 text-pink-800 py-16 px-6" id="social">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto"
        >
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-pink-600">Ikuti Kami 💬</h2>
            <p className="mb-8 text-pink-700">
              Follow aktivitas lucu kami selama KKN di media sosial! 🌈✨
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <div className="bg-white text-pink-700 rounded-lg shadow-md px-6 py-4 transition hover:scale-105">
                <a
                  href="https://instagram.com/kisahditedunan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                  <FaInstagram className="text-pink-500 text-2xl" />
                  <span className="font-medium">@kisahditedunan</span>
                </a>
              </div>

              <div className="bg-white text-pink-700 rounded-lg shadow-md px-6 py-4 transition hover:scale-105">
                <a
                  href="https://tiktok.com/@kisahditedunan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                  <FaTiktok className="text-pink-500 text-2xl" />
                  <span className="font-medium">@kisahditedunan</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <footer className="bg-pink-50 text-pink-600 py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col items-center justify-center space-y-4 border-t border-pink-300 pt-6">
          <div className="text-center text-sm">
            Made with <span className="text-red-400">❤</span> by <strong>TIM 23 KKNT UNDIP 2025</strong>
          </div>
          <div className="text-xs text-pink-400">
            © {new Date().getFullYear()} All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
