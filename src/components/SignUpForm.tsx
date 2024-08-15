"use client";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import {
  AuthCredentialsValidator,
  TAuthCredentailsValidator,
} from "@/lib/validator/account-credentails-validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAuthCredentailsValidator>({
    resolver: zodResolver(AuthCredentialsValidator),
  });

  const handleSignUp = ({ email, password }: TAuthCredentailsValidator) => {
    console.log(email, password);
  };

  return (
    <div className="w-[350px]">
      <div className="py-5 flex flex-col gap-3 w-full ">
        <form
          className="flex flex-col gap-3"
          onSubmit={handleSubmit(handleSignUp)}
        >
          <div className="flex flex-col gap-2">
            {errors.email && (
              <p className="text-sm text-red-400">{errors.email.message}</p>
            )}
            <Label htmlFor="email">Email</Label>
            <Input
              {...register("email")}
              type="email"
              placeholder="info@example.com"
              className={cn({
                "focus-visible:ring-red-500": errors.email,
              })}
            />
          </div>
          <div className="flex flex-col gap-2">
            {errors.password && (
              <p className="text-sm text-red-400">{errors.password.message}</p>
            )}
            <Label htmlFor="password">Password</Label>
            <Input
              {...register("password")}
              type="password"
              placeholder="your#pass@34"
              className={cn({
                "focus-visible:ring-red-500": errors.password,
              })}
            />
          </div>
          <div>
            <Button className="w-full">Sign Up</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
