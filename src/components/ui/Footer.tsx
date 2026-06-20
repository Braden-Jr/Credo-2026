"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";

export default function Footer() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-white text-black mt-32 overflow-hidden">

      {/* subtle background logo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Optional ghost logo */}
        <Image
          src="/images/Credo-S.png"
          alt="Credo Background Logo"
          width={900}
          height={900}
          className="opacity-[0.04] object-contain scale-110 md:scale-125"
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-24">

        {/* LOGO */}
        <div className="flex justify-center">
          <Image
            src="/images/Credo-logoblack.png"
            alt="Credo Supply"
            width={220}
            height={60}
            className="object-contain"
          />
        </div>

        {/* TAGLINE */}
        <p className="mt-4 text-center text-sm tracking-[0.3em] text-zinc-600">
          Wisemen's wardrobe
        </p>

        {/* NEWSLETTER */}
        <div className="mt-14 text-center">
          <p className="text-xs tracking-[0.3em] text-zinc-500">
            JOIN THE CLUB
          </p>

          <div className="mt-4 flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-64 px-4 py-2 text-sm bg-transparent border border-zinc-300 text-black placeholder:text-zinc-400 focus:outline-none focus:border-black"
            />
            <button className="px-4 py-2 border border-zinc-300 text-xs tracking-widest hover:bg-black hover:text-white transition">
              SUBSCRIBE
            </button>
          </div>
        </div>

        {/* NAVIGATION */}
        <div className="mt-14 flex flex-wrap justify-center gap-x-10 gap-y-4 text-sm tracking-[0.25em]">
          <Link href="/collections" className="opacity-70 hover:opacity-100 transition">
            COLLECTIONS
          </Link>
          <Link href="/lookbook" className="opacity-70 hover:opacity-100 transition">
            LOOKBOOK
          </Link>
          <Link href="/reviews" className="opacity-70 hover:opacity-100 transition">
            REVIEWS
          </Link>
          <Link href="/about" className="opacity-70 hover:opacity-100 transition">
            ABOUT
          </Link>
        </div>

        {/* SOCIAL ICONS */}
        <div className="mt-10 flex justify-center gap-6 text-zinc-500">
          <a href="https://www.instagram.com/credosupply_official/" className="hover:text-black transition">
            <FaInstagram size={18} />
          </a>

          <a href="https://www.facebook.com/profile.php?id=61585937402145" className="hover:text-black transition">
            <FaFacebook size={18} />
          </a>

          <a href="#" className="hover:text-black transition">
            <FaTiktok size={18} />
          </a>
        </div>

        {/* DIVIDER */}
        <div className="mt-16 border-t border-zinc-200" />

        {/* COPYRIGHT */}
        <div className="mt-6 text-center text-xs text-zinc-500 tracking-wide">
          © 2026 Credo Supply. All rights reserved.
        </div>
      </div>

      {/* BACK TO TOP BUTTON */}
      {visible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-black text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
        >
          <ArrowUp size={16} />
        </button>
      )}
    </footer>
  );
}