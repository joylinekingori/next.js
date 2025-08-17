import { ButtonHTMLAttributes, ReactNode } from "react";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}
export default function Button({ children, className = "", ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`bg-red-500 text-white px-8 py-2 rounded-md hover:bg-red-600 transition ${className}`}
    >
      {children}
    </button>
  );
}

