import Header from "../components/header";
import Footer from "../components/footer";
import Banner from "../components/banner";
import FlashSales from "../components/flashSales";
import ProductCard from "../components/productCard";
const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-2">
    <span className="w-3 h-6 bg-red-500 rounded" />
    <p className="text-red-500 font-semibold">{children}</p>
  </div>
);
const HeaderWithArrows = ({
  label,
  title,
  rightCta,
}: {
  label: string;
  title: string;
  rightCta?: React.ReactNode;
}) => (
  <div className="flex items-end justify-between">
    <div>
      <SectionLabel>{label}</SectionLabel>
      <h2 className="text-2xl md:text-3xl font-semibold mt-2">{title}</h2>
    </div>
    <div className="flex items-center gap-3">
      {rightCta}
      <div className="flex items-center gap-2">
        <button className="w-9 h-9 rounded-full border flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-5 h-5">
            <path d="M15 18 9 12l6-6" />
          </svg>
        </button>
        <button className="w-9 h-9 rounded-full border flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-5 h-5">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    </div>
  </div>
);
export default function HomePage() {
  return (
    <div className="bg-white text-gray-900">
      <Header />
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-8 grid grid-cols-12 gap-8">
        <aside className="col-span-12 md:col-span-3 border rounded-xl p-6">
          <ul className="space-y-4 text-sm">
            {[
              "Woman’s Fashion",
              "Men’s Fashion",
              "Electronics",
              "Home & Lifestyle",
              "Medicine",
              "Sports & Outdoor",
              "Baby’s & Toys",
              "Groceries & Pets",
              "Health & Beauty",
            ].map((t) => (
              <li
                key={t}
                className="flex items-center justify-between cursor-pointer"
              >
                <span>{t}</span>
                <svg viewBox="0 0 24 24" className="w-4 h-4">
                  <path d="M10 7l5 5-5 5" />
                </svg>
              </li>
            ))}
          </ul>
        </aside>
        <div className="col-span-12 md:col-span-9">
          <Banner />
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-8">
        <FlashSales />
      </section>
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-8">
        <HeaderWithArrows label="Categories" title="Browse By Category" />
        <div className="mt-8 grid grid-cols-3 md:grid-cols-6 gap-6">
          {[
            { name: "Phones", img: "/cat-phone.png" },
            { name: "Computers", img: "/cat-computer.png" },
            { name: "SmartWatch", img: "/cat-watch.png" },
            { name: "Camera", img: "/cat-camera.png" },
            { name: "HeadPhones", img: "/cat-headphone.png" },
            { name: "Gaming", img: "/cat-game.png" },
          ].map((c) => (
            <div
              key={c.name}
              className="border rounded-xl flex flex-col items-center justify-center py-6"
            >
              <img src={c.img} alt={c.name} className="h-14 object-contain" />
              <p className="mt-3 text-sm font-medium">{c.name}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-8">
        <HeaderWithArrows
          label="This Month"
          title="Best Selling Products"
          rightCta={
            <button className="hidden md:inline-flex px-6 py-2 bg-red-500 text-white rounded-md">
              View All
            </button>
          }
        />
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { name: "Jacket", img: "/coat.png", price: "$50", rating: 5 },
            { name: "Hand Bag", img: "/bag.png", price: "$80", rating: 4 },
            { name: "Headset", img: "/headset.png", price: "$30", rating: 5 },
            { name: "Chair", img: "/chair.png", price: "$60", rating: 4 },
          ].map((p) => (
            <ProductCard key={p.name} {...p} />
          ))}
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-8">
        <HeaderWithArrows label="Our Products" title="Explore Our Products" />
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {[
            { name: "Gamepad", img: "/gp.png", price: "$120", rating: 5 },
            { name: "Camera", img: "/camera.png", price: "$820", rating: 4 },
            { name: "Laptop", img: "/laptop.png", price: "$999", rating: 5 },
            { name: "Serum", img: "/serum.png", price: "$40", rating: 4 },
            { name: "Skincare", img: "/skincare.png", price: "$29", rating: 4 },
            { name: "Sneakers", img: "/shoe.png", price: "$120", rating: 5 },
            { name: "Football Boot", img: "/boot.png", price: "$150", rating: 4 },
            { name: "Controller", img: "/controller.png", price: "$70", rating: 4 },
            { name: "Hoodie", img: "/hoodie.png", price: "$58", rating: 5 },
            { name: "Speaker", img: "/speaker.png", price: "$180", rating: 5 },
          ].map((p, i) => (
            <ProductCard key={i} {...p} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <button className="px-8 py-2 border border-gray-300 rounded-md">
            View All Products
          </button>
        </div>
      </section>
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
}






