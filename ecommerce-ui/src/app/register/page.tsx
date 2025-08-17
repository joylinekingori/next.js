import Header from "@/shared-components/Header/header";
import Footer from "@/shared-components/Footer/footer";
import AuthLayout from "@/shared-components/Auth/authentication";
import Input from "@/shared-components/InputField/inputField";
import Button from "@/shared-components/Button/button";
import SocialLoginButtons from "@/shared-components/SocialLoginButtons/socialLoginButtons";
import Link from "next/link";
export default function SignupPage() {
  return (
    <>
      <Header />
      <AuthLayout title="Create an account" subtitle="Enter your details below">
        <form className="space-y-6 w-full max-w-sm">
          <Input type="text" placeholder="Name" />
          <Input type="email" placeholder="Email or Phone Number" />
          <Input type="password" placeholder="Password" />
          <Button type="submit" className="w-full">
            Create Account
          </Button>
          <SocialLoginButtons />
        </form>
        <p className="text-sm text-gray-600 mt-6">
          Already have account?{" "}
          <Link href="/login" className="text-red-500 hover:underline font-medium">
            Log in
          </Link>
        </p>
      </AuthLayout>
      <Footer />
    </>
  );
}