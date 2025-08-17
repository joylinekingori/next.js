interface ProductProps {
  name: string;
  img: string;
  price?: string;          
  rating?: number;         
  reviews?: number;       
  className?: string;     
}

const Star = ({ filled }: { filled: boolean }) => (
  <svg viewBox="0 0 20 20" className={`w-4 h-4 ${filled ? "fill-yellow-400" : "fill-gray-300"}`}>
    <path d="M10 15.27 16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z"/>
  </svg>
);

const IconBtn = ({ children }: { children: React.ReactNode }) => (
  <button
    className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center hover:scale-105 transition"
    type="button"
  >
    {children}
  </button>
);

export default function ProductCard({
  name,
  price,
  img,
  rating = 5,
  reviews,
  className = "",
}: ProductProps) {
  const full = Math.round(Math.max(0, Math.min(5, rating)));

  return (
    <div className={`group relative border rounded-lg p-4 bg-white hover:shadow-lg transition ${className}`}>
      <div className="absolute right-3 top-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition">
        <IconBtn>
          
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-red-500">
            <path d="M12 21s-7.2-4.35-9.6-8.28C.27 9.7 2.13 6 5.64 6c1.86 0 3.18.96 4.02 2.1C10.18 6.96 11.5 6 13.36 6c3.51 0 5.37 3.7 3.24 6.72C19.2 16.65 12 21 12 21z"/>
          </svg>
        </IconBtn>
        <IconBtn>
          <svg viewBox="0 0 24 24" className="w-5 h-5">
            <path d="M12 5C5 5 1 12 1 12s4 7 11 7 11-7 11-7-4-7-11-7zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
          </svg>
        </IconBtn>
      </div>

      <img src={img} alt={name} className="w-full h-40 object-contain mx-auto" />
      <h3 className="mt-3 font-medium line-clamp-1">{name}</h3>

      {price ? (
        <>
          <div className="mt-2 flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} filled={i < full} />
            ))}
            {typeof reviews === "number" && (
              <span className="text-xs text-gray-500 ml-1">({reviews})</span>
            )}
          </div>
          <p className="mt-2 text-red-500 font-semibold">{price}</p>

          <button
            type="button"
            className="absolute left-0 right-0 bottom-0 translate-y-full group-hover:translate-y-0 bg-black text-white text-sm py-2 rounded-b-lg transition"
          >
            Add To Cart
          </button>
        </>
      ) : (
        <p className="text-xs text-gray-500 mt-1">Browse</p>
      )}
    </div>
  );
}