import ProductCard from "./productCard";
const flashProducts = [
  { id: 1, name: "Gamepad", price: "$99", img: "/gamepad.png" },
  { id: 2, name: "Headset", price: "$149", img: "/headset.png" },
  { id: 3, name: "Chair", price: "$199", img: "/chair.png" },
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