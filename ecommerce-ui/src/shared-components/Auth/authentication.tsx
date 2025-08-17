import Image from "next/image";
import { ReactNode } from "react";
export default function Auth({ children, title, subtitle }: {
  children: ReactNode;
  title: string;
  subtitle?: string;
}) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="w-full max-w-6xl flex items-center gap-12">
        <div className="hidden md:block flex-1">
          <Image
            src="/images/cart.jpeg"
            alt="Illustration"
            width={800}
            height={800}
            className="object-contain"
            priority
          />
        </div>
        <div className="flex-1 max-w-md w-full">
          <h2 className="text-3xl font-bold mb-8">{title}</h2>
          {subtitle && <p className="mb-8 text-gray-600">{subtitle}</p>}
          {children}
        </div>
      </div>
    </main>
  );
}