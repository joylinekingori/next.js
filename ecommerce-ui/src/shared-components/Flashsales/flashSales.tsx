import ProductCard from "../ProductCard/productCard";
const flashProducts = [
  { id: 1, name: "Gamepad", price: "$99", img: "/images/gp.jpeg" },
  { id: 2, name: "Headset", price: "$149", img: "/images/keyboard.jpeg" },
  { id: 3, name: "Chair", price: "$199", img: "/images/chair.jpeg" },
];
export default function FlashSales() {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-bold mb-4">Flash Sales</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {flashProducts.map((p) => (
          <ProductCard key={p.id} {...p} />
        ))}
      </div>
    </section>
  );
}