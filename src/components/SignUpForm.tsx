"use client";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const SignUpForm = () => {
  return (
    <div className="py-5 flex flex-col gap-3">
      <div className="flex flex-col gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          placeholder="info@example.com"
          className={cn({
            "focus-visible:border-red-500 outline-none": true,
          })}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          placeholder="#yourpass@34"
          className={cn({
            "focus-visible:border-red-500 outline-none": true,
          })}
        />
      </div>
      <div>
        <Button className="w-full">Sign Up</Button>
      </div>
    </div>
  );
};

export default SignUpForm;
