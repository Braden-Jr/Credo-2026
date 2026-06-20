"use client";

import Image from "next/image";
import { Button } from "@heroui/react";
import { collections } from "@/data/collections";
import { motion } from "framer-motion";

export default function Collections() {
  return (
    <section className="py-24 px-4 max-w-6xl mx-auto">

      {/* Header */}
      <div className="mb-16">
        <h2 className="text-xs tracking-[0.35em] text-zinc-500">
          COLLECTIONS
        </h2>
      </div>

      {/* LIST */}
      <div className="space-y-28">
        {collections.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              delay: index * 0.15,
              ease: "easeOut",
            }}
            className="group grid md:grid-cols-2 gap-14 items-center"
          >

            {/* IMAGE */}
            <div
              className={`relative aspect-[4/5] overflow-hidden ${
                index % 2 === 1 ? "md:order-2" : ""
              }`}
            >

              {/* Hover Image */}
              <Image
                src={item.hoverImage}
                alt={`${item.title} hover`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="
                  absolute inset-0
                  object-cover
                  transition-transform duration-700 ease-out
                  group-hover:scale-105
                "
              />

              {/* Main Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="
                  absolute inset-0
                  object-cover
                  transition-all duration-700 ease-out
                  group-hover:opacity-0
                  group-hover:scale-105
                "
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 transition-all duration-700 group-hover:bg-black/10" />

              {/* Index */}
              <div className="absolute top-4 left-4 text-white/70 text-xs tracking-[0.3em]">
                0{item.id}
              </div>
            </div>

            {/* TEXT */}
            <div
              className={`relative space-y-6 ${
                index % 2 === 1 ? "md:order-1 md:text-right" : ""
              }`}
            >
              {/* Ghost text */}
              <div className="absolute -top-10 left-0 text-[80px] md:text-[110px] font-light text-black/10 pointer-events-none select-none">
                {item.title}
              </div>

              {/* TITLE */}
              <motion.h3
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="
                  text-4xl md:text-5xl font-light tracking-wide leading-tight
                "
              >
                {item.title}
              </motion.h3>

              {/* SUBTITLE */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-sm text-zinc-500 max-w-sm leading-relaxed"
              >
                {item.subtitle}
              </motion.p>

              {/* LINE */}
              <div className="w-12 h-px bg-black/20" />

              {/* BUTTON */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <Button
                  variant="outline"
                  className="
                    mt-2
                    border-black
                    text-black
                    text-xs
                    tracking-widest
                    uppercase
                    px-6 py-2
                    transition-all duration-300
                    hover:bg-black hover:text-white
                  "
                >
                  View Collection
                </Button>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}