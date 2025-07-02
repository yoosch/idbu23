"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Image,
} from "@heroui/react";
import { useState, useEffect } from "react";
import Link from "next/link";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Team", href: "/tim" },
  { label: "Program", href: "/program" },
];

export default function CustomNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className={`fixed top-0 py-[1%] w-full z-50 text-white transition-colors duration-300 ${
        scrolled ? "bg-gray-900 shadow-md" : "bg-transparent"
      }`}
    >
      {/* Mobile Layout */}
      <NavbarContent className="sm:hidden flex justify-between items-center w-full px-4">
        {/* Logo di kiri */}
        <NavbarBrand>
          <Image alt="Logo" className="w-12" src="/logo.png" />
        </NavbarBrand>

        {/* Toggle di kanan */}
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      {/* Desktop Layout */}
      <NavbarContent className="hidden sm:flex gap-4" justify="start">
        <NavbarBrand>
          <Image alt="Logo" className="w-16" src="/logo.png" />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarItem>
          <Link href="/">
            <p className="text-white hover:underline">Home</p>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/tim">
            <p className="text-white hover:underline">Team</p>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/program">
            <p className="text-white hover:underline">Program</p>
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.label}-${index}`}>
            <Link
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={`w-full text-lg hover:underline ${
                index === menuItems.length - 1 ? "text-red-500" : ""
              }`}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
