import Image from "next/image";
import Link from "next/link";
const accountLinks = [
  { href: "/account", label: "My Account" },
  { href: "/login", label: "Login / Register" },
  { href: "/cart", label: "Cart" },
  { href: "/wishlist", label: "Wishlist" },
  { href: "/shop", label: "Shop" },
];
const quickLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];
function SendIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M22 2L11 13" stroke="currentColor" strokeWidth="1.8" />
      <path d="M22 2l-7 20-4-9-9-4 20-7z" fill="none" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}
function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M15 3h-2.2C10.7 3 10 4 10 5.8V8H8v3h2v8h3v-8h2.2l.3-3H13V6c0-.6.2-1 .9-1H15V3z" fill="currentColor" />
    </svg>
  );
}
function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M22 5.8a8 8 0 01-2.3.6 4 4 0 001.7-2.2 8.1 8.1 0 01-2.6 1A4 4 0 0012 9.4a11.5 11.5 0 01-8.4-4.2 4 4 0 001.2 5.3 4 4 0 01-1.8-.5v.1c0 1.9 1.3 3.6 3.2 4a4 4 0 01-1.8.1c.5 1.6 2 2.7 3.8 2.7A8.1 8.1 0 012 18.7 11.4 11.4 0 008.4 20c7.6 0 11.8-6.4 11.8-11.8v-.5A8.3 8.3 0 0022 5.8z" fill="currentColor" />
    </svg>
  );
}
function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  );
}
function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M6 9h3v9H6zM7.5 6.5A1.5 1.5 0 116 5a1.5 1.5 0 011.5 1.5zM11 9h2.8v1.3h.1A3 3 0 0117.7 9c2.5 0 3.3 1.6 3.3 4v5h-3v-4.4c0-1.1 0-2.6-1.6-2.6s-1.8 1.2-1.8 2.5V18h-3V9z" fill="currentColor" />
    </svg>
  );
}
export default function Footer() {
  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          <div>
            <h2 className="text-2xl font-bold text-white">Exclusive</h2>
            <p className="mt-4 text-sm">Subscribe</p>
            <p className="mt-1 text-xs text-gray-400">Get 10% off your first order</p>
            <form className="mt-4 relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full h-11 bg-transparent border border-gray-600 rounded-md pl-3 pr-10 text-sm placeholder-gray-500 focus:outline-none focus:border-gray-400"
                aria-label="Email address"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="absolute right-1 top-1/2 -translate-y-1/2 h-9 w-9 grid place-items-center rounded-md hover:bg-gray-800 text-gray-200"
              >
                <SendIcon className="w-5 h-5" />
              </button>
            </form>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Support</h3>
            <div className="mt-4 space-y-1 text-sm">
              <p>111 Bijoy sarani, Dhaka,</p>
              <p>DH 1515, Bangladesh.</p>
              <p className="mt-2">exclusive@gmail.com</p>
              <p>+88015-88888-9999</p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Account</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {accountLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Quick Link</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Download App</h3>
            <p className="mt-2 text-xs text-gray-400">Save $3 with App New User Only</p>
            <div className="mt-4 flex items-center gap-4">
              <Image src="/images/qrcode.jpeg" alt="QR code" width={84} height={84} className="w-20 h-20 rounded-sm" />
              <div className="space-y-2">
                <Image src="/images/app.png" alt="Download on the App Store" width={15} height={20} />
                <Image src="/images/google.png" alt="Get it on Google Play" width={20} height={20} />
              </div>
            </div>
            <div className="mt-6 flex items-center gap-4">
              <Link href="#" aria-label="Facebook" className="p-2 rounded hover:bg-gray-800">
                <FacebookIcon className="w-5 h-5" />
              </Link>
              <Link href="#" aria-label="Twitter" className="p-2 rounded hover:bg-gray-800">
                <TwitterIcon className="w-5 h-5" />
              </Link>
              <Link href="#" aria-label="Instagram" className="p-2 rounded hover:bg-gray-800">
                <InstagramIcon className="w-5 h-5" />
              </Link>
              <Link href="#" aria-label="LinkedIn" className="p-2 rounded hover:bg-gray-800">
                <LinkedinIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-4">
          <p className="text-center text-xs text-gray-500">
            © 2025 Exclusive. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}




















