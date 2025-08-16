"use client";
import Link from "next/link";
function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M21 21l-4.3-4.3m1.3-5.2a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
        stroke="currentColor"
        strokeWidth="1.8"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function HeartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M12 21s-7-4.4-9.5-8A5.5 5.5 0 1112 7.3 5.5 5.5 0 1121.5 13c-2.5 3.6-9.5 8-9.5 8z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function CartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M3 3h2l2.2 11.2A2 2 0 009.2 16h7.8a2 2 0 001.9-1.4L22 7H6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="9" cy="20" r="1.6" />
      <circle cx="18" cy="20" r="1.6" />
    </svg>
  );
}
export default function Header() {
  return (
    <header className="bg-white border-b">
      <div className="hidden md:block text-xs text-white bg-black">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          <p>Get 10% off with Voucher</p>
          <Link href="/register" className="underline">
            Sign Up
          </Link>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center gap-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-2xl font-bold">
            Exclusive
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/" className="hover:text-red-500">Home</Link>
            <Link href="/contact" className="hover:text-red-500">Contact</Link>
            <Link href="/about" className="hover:text-red-500">About</Link>
            <Link href="/register" className="hover:text-red-500">Sign Up</Link>
          </nav>
        </div>
        <form className="ml-auto w-full max-w-xl relative">
          <input
            type="search"
            placeholder="What are you looking for?"
            className="w-full h-10 bg-gray-100 rounded-md pl-4 pr-10 outline-none border border-transparent focus:border-gray-300"
            aria-label="Search products"
          />
          <button
            type="submit"
            className="absolute right-1 top-1/2 -translate-y-1/2 p-2 rounded-md hover:bg-gray-200"
            aria-label="Search"
          >
            <SearchIcon className="w-5 h-5" />
          </button>
        </form>
        <div className="hidden md:flex items-center gap-3 pl-2">
          <Link href="/wishlist" aria-label="Wishlist" className="p-2 rounded hover:bg-gray-100">
            <HeartIcon className="w-5 h-5" />
          </Link>
          <Link href="/cart" aria-label="Cart" className="p-2 rounded hover:bg-gray-100">
            <CartIcon className="w-5 h-5" />
          </Link>
          <Link href="/login" className="text-sm hover:text-red-500">
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}