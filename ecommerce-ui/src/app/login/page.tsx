import Header from "@/components/header";
import Footer from "@/components/footer";
import AuthLayout from "@/components/authAside";
import Input from "@/components/inputField";
import Button from "@/components/button";
import Link from "next/link";
export default function LoginPage() {
  return (
    <>
      <Header />
      <AuthLayout title="Log in to Exclusive" subtitle="Enter your details below">
        <form className="space-y-6">
          <Input type="email" placeholder="Email or Phone Number" />
          <Input type="password" placeholder="Password" />
          <div className="flex items-center justify-between pt-2">
            <Button type="submit">Log In</Button>
            <Link href="/forgot-password" className="text-red-500 hover:underline text-sm">
              Forgot Password?
            </Link>
          </div>
        </form>
      </AuthLayout>
      <Footer />
    </>
  );
}