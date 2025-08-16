type BannerProps = {
  title?: string;
  subtitle?: string;
  cta?: string;
  img?: string;
  dark?: boolean;
  className?: string;
};

export default function Banner({
  title = "Up to 10% off Voucher",
  subtitle = "iPhone 14 Series",
  cta = "Shop Now",
  img = "/banner-product.png",
  dark = true,
  className = "",
}: BannerProps) {
  return (
    <div
      className={`rounded-xl p-6 md:p-8 flex items-center justify-between overflow-hidden ${dark ? "bg-black text-white" : "bg-gray-900 text-white"} ${className}`}
    >
      <div>
        {subtitle && <p className="text-sm opacity-80">{subtitle}</p>}
        <h2 className="text-3xl md:text-4xl font-bold mt-1">{title}</h2>
        <button className="mt-4 px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
          {cta}
        </button>
      </div>
      <img src={img} alt="Banner" className="w-48 md:w-72 object-contain" />
    </div>
  );
}