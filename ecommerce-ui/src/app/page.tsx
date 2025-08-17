import Header from "../shared-components/Header/header";
import Footer from "../shared-components/Footer/footer";
import Banner from "../shared-components/Banner/banner";
import FlashSales from "../shared-components/Flashsales/flashSales";
import ProductCard from "../shared-components/ProductCard/productCard";
const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-2">
    <span className="w-3 h-6 bg-red-500 rounded" />
    <p className="text-red-500 font-semibold">{children}</p>
  </div>
);
const SectionHeader = ({
  label,
  title,
  right,
}: {
  label: string;
  title: string;
  right?: React.ReactNode;
}) => (
  <div className="flex items-end justify-between">
    <div>
      <SectionLabel>{label}</SectionLabel>
      <h2 className="text-2xl md:text-3xl font-semibold mt-2">{title}</h2>
    </div>
    {right && <div className="flex items-center gap-3">{right}</div>}
  </div>
);
const Arrows = () => (
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
);
export default function HomePage() {
  return (
    <div className="bg-white text-gray-900">
      <Header />
      <section className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 py-8 grid grid-cols-12 gap-8">
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
      <section className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 py-8">
        <FlashSales />
      </section>
      <section className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 py-8">
        <SectionHeader
          label="Categories"
          title="Browse By Category"
          right={<Arrows />}
        />
        <div className="mt-8 grid grid-cols-3 md:grid-cols-6 gap-6">
          {[
            { name: "Phones", img: "/images/iphone.png" },
            { name: "Computers", img: "/images/monitor.png" },
            { name: "SmartWatch", img: "/images/smartwatch.png" },
            { name: "Camera", img: "/images/camera.png" },
            { name: "HeadPhones", img: "/images/headphone.png" },
            { name: "Gaming", img: "/images/game-controller.png" },
          ].map((c) => (
            <div
              key={c.name}
              className="border rounded-xl flex flex-col items-center justify-center py-8 bg-white"
            >
              <img src={c.img} alt={c.name} className="h-14 object-contain" />
              <p className="mt-3 text-sm font-medium">{c.name}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 py-8">
        <SectionHeader
          label="This Month"
          title="Best Selling Products"
          right={
            <button className="hidden md:inline-flex px-6 py-2 bg-red-500 text-white rounded-md">
              View All
            </button>
          }
        />
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { name: "Jacket", img: "/images/jacket.jpeg", price: "$50", rating: 5 },
            { name: "Hand Bag", img: "/images/bag.jpeg", price: "$80", rating: 4 },
            { name: "Headset", img: "/images/hoofer.jpeg", price: "$30", rating: 5 },
            { name: "Chair", img: "/images/chair.jpeg", price: "$60", rating: 4 },
          ].map((p) => (
            <ProductCard key={p.name} {...p} />
          ))}
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 py-10">
        <div className="rounded-xl bg-black text-white px-6 md:px-10 py-10 flex items-center justify-between overflow-hidden">
          <div>
            <p className="text-sm opacity-80">Categories</p>
            <h3 className="text-3xl md:text-4xl font-semibold mt-1">
              Enhance Your Music Experience
            </h3>
            <button className="mt-5 px-6 py-2 bg-green-500 rounded-md text-black">
              Buy Now!
            </button>
          </div>
          <img
            src="/images/blackSpeaker.jpeg"
            alt="Speaker"
            className="w-48 md:w-72 object-contain"
          />
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 py-8">
        <SectionHeader
          label="Our Products"
          title="Explore Our Products"
          right={<Arrows />}
        />
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {[
            { name: "Gamepad", img: "/images/gp.jpeg", price: "$120", rating: 5 },
            { name: "Camera", img: "/images/camera.jpeg", price: "$820", rating: 4 },
            { name: "Laptop", img: "/images/laptop.jpeg", price: "$999", rating: 5 },
            { name: "Serum", img: "/images/serum.jpeg", price: "$40", rating: 4 },
            { name: "Skincare", img: "/images/serum.jpeg", price: "$29", rating: 4 },
            { name: "Sneakers", img: "/images/shoes.jpeg", price: "$120", rating: 5 },
            { name: "Toys", img: "/images/kidsCar.jpeg", price: "$150", rating: 4 },
            { name: "Controller", img: "/images/blackGaming.jpeg", price: "$70", rating: 4 },
            { name: "Jacket", img: "/images/jacketGreen.jpeg", price: "$58", rating: 5 },
            { name: "Speaker", img: "/images/blackSpeaker.jpeg", price: "$180", rating: 5 },
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
      <section className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 py-10">
        <SectionLabel>Featured</SectionLabel>
        <h2 className="text-2xl md:text-3xl font-semibold mt-2">New Arrival</h2>
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative bg-gray-100 rounded-xl overflow-hidden p-6 flex items-end min-h-[300px]">
            <img
              src="/images/playstation.jpeg"
              alt="PlayStation 5"
              className="absolute right-2 bottom-0 max-h-[92%] object-contain"
            />
            <div className="relative z-10 max-w-sm">
              <h3 className="text-2xl font-semibold">PlayStation 5</h3>
              <p className="text-sm text-gray-600 mt-1">
                Black and White version of the PS5 coming out on sale.
              </p>
              <button className="mt-4 underline underline-offset-4">
                Shop Now
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-8">
            <div className="col-span-2 relative bg-black  text-white rounded-xl overflow-hidden p-6 min-h-[160px]">
              <img
                src="/images/blackwoman.jpeg"
                alt="Women’s Collections"
                className="absolute right-4 bottom-0 h-40 object-contain"
              />
              <div className="relative z-10 max-w-md">
                <h3 className="text-xl font-semibold">Women’s Collections</h3>
                <p className="text-sm opacity-80">
                  Featured woman collections that give you another vibe.
                </p>
                <button className="mt-3 underline">Shop Now</button>
              </div>
            </div>
            <div className="relative bg-gray-100 rounded-xl p-6">
              <img
                src="/images/smallspeakers.jpeg"
                alt="Speakers"
                className="absolute right-3 bottom-3 h-24"
              />
              <h3 className="text-lg font-semibold">Speakers</h3>
              <p className="text-sm text-gray-600">Amazon wireless speakers</p>
              <button className="mt-2 underline">Shop Now</button>
            </div>
            <div className="relative bg-gray-100 rounded-xl p-6">
              <img
                src="/images/perfume.jpeg"
                alt="Perfume"
                className="absolute right-3 bottom-3 h-24"
              />
              <h3 className="text-lg font-semibold">Perfume</h3>
              <p className="text-sm text-gray-600">GUCCI INTENSE OUD EDP</p>
              <button className="mt-2 underline">Shop Now</button>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            {
              title: "FREE AND FAST DELIVERY",
              note: "Free delivery for all orders over $140",
            },
            {
              title: "24/7 CUSTOMER SERVICE",
              note: "Friendly 24/7 customer support",
            },
            {
              title: "MONEY BACK GUARANTEE",
              note: "We return money within 30 days",
            },
          ].map((i) => (
            <div key={i.title} className="border rounded-xl p-8">
              <div className="mx-auto w-14 h-14 rounded-full bg-black text-white flex items-center justify-center text-xl">
              </div>
              <h4 className="mt-4 font-semibold">{i.title}</h4>
              <p className="text-sm text-gray-600 mt-1">{i.note}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}









