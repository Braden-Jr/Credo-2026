import ProductCard from "./ProductCard";
import { newInProducts } from "@/data/newInproducts";

export default function NewIn() {
  return (
    <section className="py-24 px-4 max-w-6xl mx-auto">
      <h2 className="text-xs tracking-[0.3em] mb-10">
        NEW IN
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {newInProducts.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </section>
  );
}