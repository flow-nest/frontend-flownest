"use client";

import type React from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Box } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function RegisterPage() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle registration here
    // For now, we'll just redirect to the dashboard
    router.push("/dashboard");
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#F5EBE0] p-4">
      <div className="w-full max-w-md">
        <div className="mb-8 flex items-center justify-center gap-2">
          <Box className="h-8 w-8 text-[#8B4513]" />
          <span className="text-2xl font-bold text-[#5D4037]">RoboTrack</span>
        </div>
        <Card className="border-[#D2B48C]">
          <CardHeader>
            <CardTitle className="text-2xl text-[#5D4037]">
              Create an account
            </CardTitle>
            <CardDescription className="text-[#8B4513]">
              Enter your information to create a RoboTrack account
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-[#5D4037]">
                    First name
                  </Label>
                  <Input id="firstName" required className="border-[#D2B48C]" placeholder="Sophia"/>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-[#5D4037]">
                    Last name
                  </Label>
                  <Input id="lastName" required className="border-[#D2B48C]" placeholder="Ait Mesbah"/>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-[#5D4037]">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  required
                  className="border-[#D2B48C]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-[#5D4037]">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  required
                  className="border-[#D2B48C]"
                  placeholder="your password"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-[#5D4037]">
                  Confirm password
                </Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  required
                  className="border-[#D2B48C]"
                  placeholder="confirm your password"
                />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button
                type="submit"
                className="w-full bg-[#8B4513] text-white hover:bg-[#5D4037]"
              >
                Create account
              </Button>
              <div className="text-center text-sm">
                <span className="text-[#5D4037]">
                  Already have an account?{" "}
                </span>
                <Link href="/login" className="text-[#8B4513] hover:underline">
                  Log in
                </Link>
              </div>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
}
