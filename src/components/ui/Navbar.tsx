"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@heroui/react";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "COLLECTIONS", href: "/collections" },
    { name: "LOOKBOOK", href: "/lookbook" },
    { name: "REVIEWS", href: "/reviews" },
    { name: "ABOUT", href: "/about" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <header
        className={`fixed top-0 left-0 w-full z-50 border-b border-white/10 transition-all duration-300 ${
          scrolled ? "h-14" : "h-16"
        } bg-black`}
      >
        <div className="h-full flex items-center justify-between px-4">

          {/* LOGO */}
          <Link href="/">
            <div
              className={`relative transition-all duration-300 ${
                scrolled ? "w-44 h-10" : "w-52 h-12"
              }`}
            >
              <Image
                src="/images/Credo-LOGO.png"
                alt="Brand Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex gap-8 text-sm tracking-wide text-white">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative transition ${
                    isActive ? "opacity-100" : "opacity-70 hover:opacity-100"
                  }`}
                >
                  {item.name}

                  {isActive && (
                    <span className="absolute left-0 -bottom-1 w-full h-[1px] bg-white" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* MOBILE BUTTON (HeroUI) */}
          <Button
            isIconOnly
            variant="outline"
            className="md:hidden text-white border-white"
            onPress={() => setMenuOpen(true)}
          >
            ☰
          </Button>

        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center text-white opacity-95">
          
          <Button
            isIconOnly
            variant="outline"
            className="absolute top-4 right-4 text-white border-white"
            onPress={() => setMenuOpen(false)}
          >
            ✕
          </Button>

          <div className="flex flex-col gap-8 text-xl tracking-widest">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}