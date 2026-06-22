import Image from "next/image";

type Product = {
  name: string;
  price: string;
  image: string;       // PNG (clean product cutout)
  hoverImage: string;  // JPEG (lifestyle / full scene)
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group space-y-3">

      {/* IMAGE WRAPPER */}
      <div className="relative aspect-[3/4] overflow-hidden bg-zinc-100 group">

        {/* DARK BASE LAYER */}
        <div
          className="
            absolute inset-0
            bg-white/5
            z-10
            transition-opacity duration-500
            group-hover:opacity-0
            group-focus-within:opacity-0
            group-active:opacity-0
          "
        />

        {/* HOVER IMAGE (lifestyle) */}
        <Image
          src={product.hoverImage}
          alt={`${product.name} lifestyle`}
          fill
          className="
            object-cover
            opacity-0
            scale-105
            transition-all duration-700 ease-out

            group-hover:opacity-100
            group-focus-within:opacity-100
            group-active:opacity-100

            group-hover:scale-105
            group-active:scale-105
          "
        />

        {/* MAIN PNG PRODUCT */}
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="
            object-contain
            drop-shadow-[0_12px_30px_rgba(0,0,0,0.18)]
            transition-all duration-700 ease-out

            group-hover:opacity-0
            group-focus-within:opacity-0
            group-active:opacity-0

            group-hover:scale-95
            group-active:scale-95
          "
        />

        {/* SOFT VIGNETTE */}
        <div
          className="
            absolute inset-0
            bg-black/0
            transition duration-700

            group-hover:bg-black/10
            group-focus-within:bg-black/10
            group-active:bg-black/10
          "
        />
      </div>

      {/* TEXT */}
      <div className="space-y-1">
        <p className="text-sm font-light tracking-wide">
          {product.name}
        </p>

        <p className="text-xs text-zinc-500">
          {product.price}
        </p>
      </div>

    </div>
  );
}