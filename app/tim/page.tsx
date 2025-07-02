"use client";

import { HoverEffect } from "../../components/card-hover-effect";

const teamMembers = [
  { title: "MUHAMMAD RIZQY AULIA", description: "Akuntansi S1" },
  {
    title: "AULIA CANDRA PERTIWI",
    description: "Akuntansi S1",
    image: "12030122140265.jpg",
  },
  {
    title: "AISYAH FITRI PAIZAR",
    description: "Ekonomi S1",
    image: "12020122120008.jpg",
    link: "#",
  },
  {
    title: "ARSYADA ADHANUN IRBAH",
    description: "Ekonomi S1",
    image: "12020122120040.jpg",
  },
  {
    title: "HALIZA YOLANDA YUSTANTI",
    description: "Manajemen S1",
    image: "12010122130127.jpg",
  },
  {
    title: "NAFIRA EKA RAHMA",
    description: "Hukum S1",
    image: "11000122120069.jpg",
  },
  {
    title: "LINTANG AYU PRADNYA PARAMITHA",
    description: "Hukum S1",
    image: "11000122140492.jpeg",
  },
  {
    title: "MUHAMAD FARIS JALANDI",
    description: "Hukum S1",
    image: "1100012140521.jpg",
  },
  {
    title: "AMELIA MAYA DEWANTI",
    description: "Hukum S1",
    image: "11000122190211.jpeg",
  },
  {
    title: "AINA ANBAR",
    description: "Bahasa dan Kebudayaan Jepang S1",
    image: "13020222120012.jpg",
  },
  {
    title: "AHMAD AGUNG PRASETYO",
    description: "Sastra Indonesia S1",
    image: "13010122120005.jpg",
  },
  {
    title: "NU'UTTISSANIA",
    description: "Sastra Inggris S1",
    image: "13020122130063.jpg",
  },
  {
    title: "PRAMESTHI SIEFA MAHIROH",
    description: "Sejarah S1",
    image: "13030122130039.jpg",
  },
  {
    title: "ANISA DILLA SETYANI",
    description: "Administrasi Publik K. Rembang S1",
    image: "14020222120013.jpg",
  },
  {
    title: "REGIA NATAYA DEPARI",
    description: "Administrasi Publik S1",
    image: "14020122140179.png",
  },
  {
    title: "RAISA SHABIRA KHAIRANI SIREGAR",
    description: "Ilmu Komunikasi S1",
    image: "14040122120012.jpg",
  },
  {
    title: "MUHAMMAD IQBAL DWI PUTRANDA",
    description: "Ilmu Pemerintahan S1",
    image: "14010122140203.jpg",
  },
  {
    title: "TANAYA BAGAS PURWAKA",
    description: "Kedokteran S1",
    image: "22010122130096.jpeg",
  },
  {
    title: "INDAH TRI NUR HAZIZAH",
    description: "Keperawatan S1",
    image: "22020122130111.jpg",
  },
  {
    title: "AFIFAH NOR SA'IBAH",
    description: "Akuakultur S1",
    image: "26020122120016.jpeg",
  },
  {
    title: "ZAHRA FAHIRA SURYANITA",
    description: "Ilmu Kelautan S1",
    image: "26040122120029.jpeg",
  },
  {
    title: "ILHAM SYAKIR",
    description: "Oseanografi S1",
    image: "26050122140133.jpeg",
  },
  {
    title: "DICKY HALASAN SIANTURI",
    description: "Agribisnis S1",
    image: "23020322140108.jpg",
  },
  {
    title: "NIVANDA FIRDAUSA INDRA PUTRI",
    description: "Agroekoteknologi S1",
    image: "23020222140089.jpeg",
  },
  {
    title: "FITA ANGGRAINI SAPUTRI",
    description: "Peternakan S1",
    image: "23010122140188.jpg",
  },
  {
    title: "AZMI NAWANGJATI",
    description: "Psikologi S1",
    image: "15000120130269.jpeg",
  },
  {
    title: "AULYA ORNELLA PUTRI",
    description: "Psikologi S1",
    image: "15000122140319.jpeg",
  },
  {
    title: "AYUNDA RATRI YUDHANINGRUM",
    description: "Biologi S1",
    image: "24020122140183.png",
  },
  {
    title: "ANGGUN AVRILIA NUR AISYAH",
    description: "Fisika S1",
    image: "24040122120005.jpeg",
  },
  {
    title: "MUHAMMAD AHSAN YUDHISTIRA",
    description: "Informatika S1",
    image: "24060122130083.jpg",
  },
  {
    title: "ATIANA SYIFA",
    description: "Kimia S1",
    image: "24030122120024.png",
  },
  {
    title: "MUHAMMAD NAUFAL AKBAR PRIYANTO",
    description: "Matematika S1",
    image: "24010122130063.jpg",
  },
  {
    title: "PRAYUGANINGTYAS EKA SAPUTRI",
    description: "Statistika S1",
    image: "24050122120041.jpg",
  },
  {
    title: "RAHMANDIKA NANDA AKHIRA",
    description: "Statistika S1",
    image: "24050122140125.jpeg",
  },
  {
    title: "KAYLA AZARYA PUTRI CHRISTANTI SARANGA",
    description: "Statistika S1",
    image: "24050122140133.jpg",
  },
  {
    title: "DITA INDRIYANI DEWI",
    description: "Akuntansi Perpajakan D4",
    image: "40011422650015.png",
  },
  {
    title: "TASYA PUTRI SEPTIANINGTYAS",
    description: "Akuntansi Perpajakan D4",
    image: "40011422650194.jpg",
  },
  {
    title: "DIAH SYAKILA PUTRI",
    description: "Bahasa Asing Terapan D4",
    image: "40020522650082.jpg",
  },
  {
    title: "ANDINI PUTRI ALFANDI",
    description: "Informasi dan Humas D4",
    image: "40020622650055.jpeg",
  },
  {
    title: "SAHID SYUHADAN FAJRI",
    description: "Rekayasa Perancangan Mekanik D4",
    image: "40040222650008.jpg",
  },
  {
    title: "RAMADHANI YUANS DARMAWAN",
    description: "Teknologi Rekayasa Otomasi D4",
    image: "40040322650053.jpg",
  },
  {
    title: "WISNU ADI WICAKSONO",
    description: "Teknik Elektro S1",
    image: "21060122130055.png",
  },
  {
    title: "AHMAD GIBRAN NUR IKHSAN",
    description: "Teknik Geologi S1",
    image: "21100122140123.jpg",
  },
  {
    title: "CALVIN JULIO ARDIANSYAH",
    description: "Teknik Industri S1",
    image: "21070122140047.jpeg",
  },
  {
    title: "SYIFA DWIKY BASAMALA",
    description: "Teknik Komputer S1",
    image: "21120122120008.jpg",
  },
  {
    title: "JOHAN TARNAMA PAKPAHAN",
    description: "Teknik Komputer S1",
    image: "21120122140143.jpg",
  },
  {
    title: "NADIA BR GINTING",
    description: "Teknik Lingkungan S1",
    image: "21080122120016.jpg",
  },
];

export default function TimPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-24 px-6">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold">Tim KKN Tedunan</h1>
        <p className="text-gray-400 mt-2">
          Anggota yang terlibat dalam program KKN 2025
        </p>
      </div>
      <HoverEffect items={teamMembers} />
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
    </div>
  );
}
