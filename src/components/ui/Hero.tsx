import { Button } from "@heroui/react";
export default function Hero() {
  return (
    <section className="group relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <img
        src="/images/credocover.png"
        alt="Hero Image"
        className="absolute inset-0 h-full w-full object-cover"
      />
      console.log(collections);

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 transition-all duration-500 group-has-[h1:hover]:bg-black/75" />

      {/* Content */}
      <div className="relative flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <h1 className="cursor-pointer">
          <img
            src="/images/Credo-S.png"
            alt="Brand Logo"
            width={500}
            className="
      object-contain
      transition-all
      duration-700
      ease-out
      group-has-[h1:hover]:scale-[1.015]
      group-has-[h1:hover]:brightness-105
      group-has-[h1:hover]:contrast-105
      group-has-[h1:hover]:drop-shadow-[0_0_30px_rgba(255,255,255,0.15)]
    "
          />
        </h1>

        <p
          className="
    mt-2
    text-md
    tracking-[0.3em]
    opacity-80
    transition-all
    duration-700
    group-has-[h1:hover]:opacity-100
    group-has-[h1:hover]:-translate-y-2
  "
        >
          Wisemen's wardrobe
        </p>

        <Button
  variant="outline"
  className="
    mt-8
    border border-white
    text-white
    text-xs
    tracking-widest
    uppercase
    px-8 py-3
    hover:bg-white hover:text-black
    transition
  "
>
  EXPLORE
</Button>
      </div>
    </section>
  );
}
