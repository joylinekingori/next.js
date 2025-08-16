import { InputHTMLAttributes } from "react";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}
export default function Input({ className = "", ...props }: InputProps) {
  return (
    <input
      {...props}
      className={`w-full border-b border-gray-300 py-2 text-sm placeholder-gray-400 focus:outline-none focus:border-gray-500 ${className}`}
    />
  );
}