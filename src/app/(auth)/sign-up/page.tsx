import { Icons } from "@/components/Icons";
import SignUpForm from "@/components/SignUpForm";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const SignUpPage = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex flex-col sm:w-[350px]">
        <div className="flex justify-center items-center gap-2 flex-col">
          <Icons.logo className="w-12 h-12" />
          <h1 className="text-xl font-medium">Create an account</h1>
        </div>
        <SignUpForm />
        <div className="flex justify-center items-center flex-col">
          <span>Already have an account?</span>
          <Link
            href="/sign-in"
            className={buttonVariants({
              variant: "ghost",
              className: "underline",
            })}
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
