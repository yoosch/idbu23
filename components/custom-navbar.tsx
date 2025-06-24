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
  "Profile",
  "Dashboard",
  "Activity",
  "Analytics",
  "System",
  "Deployments",
  "My Settings",
  "Team Settings",
  "Help & Feedback",
  "Log Out",
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
      className={`fixed top-0 w-full z-50 text-white transition-colors duration-300 ${
        scrolled ? "bg-gray-900 shadow-md" : "bg-transparent"
      }`}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Image alt="Logo" className="w-30" src="/logo.png" />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarItem>
          <Link href="/">
            <p className="text-white">Home</p>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link aria-current="page" href="tim">
            <p className="text-white">Team</p>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            <p className="text-white">Program</p>
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
