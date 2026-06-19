"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-black z-50 border-b border-white/10 h-16">
      <div className="h-full flex items-center justify-between px-4">

        {/* LOGO */}
        <Link href="/">
          <div className="relative w-52 h-12">
            <Image
              src="/images/2026-LOGOV2.png"
              alt="Brand Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* NAV */}
        <nav className="hidden md:flex gap-6 text-sm tracking-wide text-white">
          <Link href="/collections">COLLECTIONS</Link>
          <Link href="/lookbook">LOOKBOOK</Link>
          <Link href="/reviews">REVIEWS</Link>
          <Link href="/about">ABOUT</Link>
        </nav>

        {/* MOBILE */}
        <button className="md:hidden text-white">☰</button>

      </div>
    </header>
  );
}