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
      className={`fixed top-0 py-[1%] w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-pink-200 shadow-md" : "bg-pink-100/80 backdrop-blur-md"
      } border-b border-pink-300`}
    >
      {/* Mobile Layout */}
      <NavbarContent className="sm:hidden flex justify-between items-center w-full px-4">
        <NavbarBrand>
          <Image alt="Logo" className="w-12" src="/logo.png" />
        </NavbarBrand>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="text-pink-600"
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
            <p className="text-pink-700 hover:text-fuchsia-600 font-semibold">Home</p>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/tim">
            <p className="text-pink-700 hover:text-fuchsia-600 font-semibold">Team</p>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/program">
            <p className="text-pink-700 hover:text-fuchsia-600 font-semibold">Program</p>
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu className="bg-pink-100 text-center text-pink-700">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.label}-${index}`}>
            <Link
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={`w-full text-lg py-2 font-semibold hover:text-fuchsia-600 ${
                index === menuItems.length - 1 ? "text-red-400" : ""
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
