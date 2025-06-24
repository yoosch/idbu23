"use client";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@heroui/react";

import { motion, time, useInView } from "framer-motion";

export default function Home() {
  return (
    <div>
      {/* Navbar */}

      {/* Hero Section */}
      <section
        className="relative w-full h-screen bg-center bg-cover bg-no-repeat flex items-center justify-center text-white text-center px-4 sm:px-8"
        style={{ backgroundImage: "url('/tedunan.png')" }}
      >
        {/* Overlay gelap transparan menutupi seluruh area */}
        <div className="absolute inset-0 bg-black opacity-70 z-10" />

        {/* Gradient bawah untuk transisi ke section selanjutnya */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#1f2937] z-20" />

        {/* Konten */}
        <div className="relative z-30 max-w-4xl bg-opacity-80 p-4 sm:p-6 rounded">
          <div className="px-4 py-10 md:py-20">
            <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-WHITE md:text-4xl lg:text-7xl">
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
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.3,
                delay: 0.8,
              }}
              className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-white dark:text-neutral-400"
            >
              Penguatan Perekonomian Masyarakat Desa Tedunan Melalui
              Optimalisasi Potensi Desa
            </motion.p>
          </div>
        </div>
      </section>

      {/* Section Selanjutnya */}
      {/* SECTION: Tentang Program KKN */}
      <section className="bg-[#1f2937] text-white py-16 px-6 relative">
        <motion.div
          id="about"
          initial={{ opacity: 0, y: 50 }} // Initially invisible and offset vertically
          whileInView={{ opacity: 1, y: 0 }} // When in view, make it visible and reset position
          viewport={{ once: false, amount: 0.1 }} // Triggers when 10% of element is in view
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
              Tentang Program KKN
            </h2>
            <p className="text-base sm:text-lg">
              Program ini bertujuan untuk meningkatkan potensi ekonomi warga
              melalui penerapan teknologi informasi dan digitalisasi pertanian
              lokal.
            </p>
          </div>

          <div className="mt-10 flex flex-col md:flex-row justify-center gap-3">
            <a
              href="#"
              className="flex flex-col items-center bg-gray-700 text-white border border-gray-600 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-600"
            >
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight">TEMA</h5>
                <p className="mb-3 font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Eligendi sequi, similique quis ad doloribus voluptate hic
                  veritatis voluptas eaque quasi!
                </p>
              </div>
            </a>
            <a
              href="#"
              className="flex flex-col items-center bg-gray-700 text-white border border-gray-600 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-600"
            >
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight">
                  PERIODE
                </h5>
                <p className="mb-3 font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Eligendi sequi, similique quis ad doloribus voluptate hic
                  veritatis voluptas eaque quasi!
                </p>
              </div>
            </a>
          </div>

          {/* Gradient untuk transisi halus */}
          <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-b from-transparent to-gray-900 pointer-events-none" />
        </motion.div>
      </section>

      {/* SECTION: Tentang Desa Tedunan */}
      <section id="tentang-desa" className="bg-gray-900 text-white py-20 px-6">
        <motion.div
          id="about"
          initial={{ opacity: 0, y: 50 }} // Initially invisible and offset vertically
          whileInView={{ opacity: 1, y: 0 }} // When in view, make it visible and reset position
          viewport={{ once: false, amount: 0.1 }} // Triggers when 10% of element is in view
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Tentang Desa Tedunan
              </h2>
              <p className="text-gray-300 text-base sm:text-lg">
                Desa Tedunan merupakan desa pesisir yang terletak di Kecamatan
                Wedung, Kabupaten Demak, Jawa Tengah. Dikenal akan hasil
                perikanan dan pertaniannya, desa ini memiliki potensi besar
                untuk dikembangkan melalui pendekatan teknologi dan pemberdayaan
                masyarakat.
              </p>
            </div>

            {/* Konten dengan gambar dan teks */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <img
                src="/tedunan.png"
                alt="Pemandangan Desa Tedunan"
                className="w-full md:w-1/2 rounded-lg shadow-md object-cover"
              />
              <div className="text-gray-300 md:w-1/2">
                <h3 className="text-2xl font-semibold text-yellow-400 mb-3">
                  Potensi Unggulan
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Perikanan laut dan budidaya tambak</li>
                  <li>Pertanian tradisional dan organik</li>
                  <li>Pemberdayaan UMKM berbasis hasil alam</li>
                  <li>Ekowisata dan edukasi konservasi pesisir</li>
                </ul>
                <p className="mt-4">
                  Potensi-potensi ini menjadi fondasi dalam perencanaan program
                  KKN berbasis penguatan ekonomi lokal melalui inovasi dan
                  kolaborasi masyarakat.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
