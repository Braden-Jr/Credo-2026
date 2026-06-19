import ProductCard from "./ProductCard";

export default function NewIn() {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-sm tracking-widest mb-6">NEW IN</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
}