"use client";

import { HoverEffect } from "../../components/card-hover-effect";

const teamMembers = [
  { title: "MUHAMMAD RIZQY AULIA", description: "Akuntansi S1", link: "#" },
  { title: "AULIA CANDRA PERTIWI", description: "Akuntansi S1", link: "#" },
  { title: "AISYAH FITRI PAIZAR", description: "Ekonomi S1", link: "#" },
  { title: "ARSYADA ADHANUN IRBAH", description: "Ekonomi S1", link: "#" },
  { title: "HALIZA YOLANDA YUSTANTI", description: "Manajemen S1", link: "#" },
  { title: "NAFIRA EKA RAHMA", description: "Hukum S1", link: "#" },
  { title: "LINTANG AYU PRADNYA PARAMITHA", description: "Hukum S1", link: "#" },
  { title: "MUHAMAD FARIS JALANDI", description: "Hukum S1", link: "#" },
  { title: "AMELIA MAYA DEWANTI", description: "Hukum S1", link: "#" },
  { title: "AINA ANBAR", description: "Bahasa dan Kebudayaan Jepang S1", link: "#" },
  { title: "AHMAD AGUNG PRASETYO", description: "Sastra Indonesia S1", link: "#" },
  { title: "NU'UTTISSANIA", description: "Sastra Inggris S1", link: "#" },
  { title: "PRAMESTHI SIEFA MAHIROH", description: "Sejarah S1", link: "#" },
  {
    title: "ANISA DILLA SETYANI",
    description: "Administrasi Publik K. Rembang S1",
    link: "#",
  },
  { title: "REGIA NATAYA DEPARI", description: "Administrasi Publik S1", link: "#" },
  {
    title: "RAISA SHABIRA KHAIRANI SIREGAR",
    description: "Ilmu Komunikasi S1",
    link: "#",
  },
  { title: "MUHAMMAD IQBAL DWI PUTRANDA", description: "Ilmu Pemerintahan S1", link: "#" },
  { title: "TANAYA BAGAS PURWAKA", description: "Kedokteran S1", link: "#" },
  { title: "INDAH TRI NUR HAZIZAH", description: "Keperawatan S1", link: "#" },
  { title: "AFIFAH NOR SA'IBAH", description: "Akuakultur S1", link: "#" },
  { title: "Zahra Fahira Suryanita", description: "Ilmu Kelautan S1", link: "#" },
  { title: "ILHAM SYAKIR", description: "Oseanografi S1", link: "#" },
  { title: "DICKY HALASAN SIANTURI", description: "Agribisnis S1", link: "#" },
  { title: "NIVANDA FIRDAUSA INDRA PUTRI", description: "Agroekoteknologi S1", link: "#" },
  { title: "FITA ANGGRAINI SAPUTRI", description: "Peternakan S1", link: "#" },
  { title: "AZMI NAWANGJATI", description: "Psikologi S1", link: "#" },
  { title: "AULYA ORNELLA PUTRI", description: "Psikologi S1", link: "#" },
  { title: "AYUNDA RATRI YUDHANINGRUM", description: "Biologi S1", link: "#" },
  { title: "Anggun Avrilia Nur Aisyah", description: "Fisika S1", link: "#" },
  { title: "MUHAMMAD AHSAN YUDHISTIRA", description: "Informatika S1", link: "#" },
  { title: "ATIANA SYIFA", description: "Kimia S1", link: "#" },
  { title: "MUHAMMAD NAUFAL AKBAR PRIYANTO", description: "Matematika S1", link: "#" },
  { title: "PRAYUGANINGTYAS EKA SAPUTRI", description: "Statistika S1", link: "#" },
  { title: "RAHMANDIKA NANDA AKHIRA", description: "Statistika S1", link: "#" },
  {
    title: "KAYLA AZARYA PUTRI CHRISTANTI SARANGA",
    description: "Statistika S1",
    link: "#",
  },
  { title: "DITA INDRIYANI DEWI", description: "Akuntansi Perpajakan D4", link: "#" },
  {
    title: "TASYA PUTRI SEPTIANINGTYAS",
    description: "Akuntansi Perpajakan D4",
    link: "#",
  },
  { title: "DIAH SYAKILA PUTRI", description: "Bahasa Asing Terapan D4", link: "#" },
  { title: "ANDINI PUTRI ALFANDI", description: "Informasi dan Humas D4", link: "#" },
  {
    title: "SAHID SYUHADAN FAJRI",
    description: "Rekayasa Perancangan Mekanik D4",
    link: "#",
  },
  {
    title: "RAMADHANI YUANS DARMAWAN",
    description: "Teknologi Rekayasa Otomasi D4",
    link: "#",
  },
  { title: "WISNU ADI WICAKSONO", description: "Teknik Elektro S1", link: "#" },
  { title: "AHMAD GIBRAN NUR IKHSAN", description: "Teknik Geologi S1", link: "#" },
  { title: "CALVIN JULIO ARDIANSYAH", description: "Teknik Industri S1", link: "#" },
  { title: "SYIFA DWIKY BASAMALA", description: "Teknik Komputer S1", link: "#" },
  { title: "JOHAN TARNAMA PAKPAHAN", description: "Teknik Komputer S1", link: "#" },
  { title: "NADIA BR GINTING", description: "Teknik Lingkungan S1", link: "#" },
];

export default function TimPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-16 px-6">
      
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold">Tim KKN Tedunan</h1>
        <p className="text-gray-400 mt-2">
          Anggota yang terlibat dalam program KKN 2025
        </p>
      </div>
      <HoverEffect items={teamMembers} />
    </div>
  );
}
