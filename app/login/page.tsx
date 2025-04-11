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

export default function LoginPage() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle authentication here
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
            <CardTitle className="text-2xl text-[#5D4037]">Log in</CardTitle>
            <CardDescription className="text-[#8B4513]">
              Enter your email and password to access your account
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
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
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-[#5D4037]">
                    Password
                  </Label>
                  <Link
                    href="/forgot-password"
                    className="text-xs text-[#8B4513] hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  className="border-[#D2B48C]"
                  placeholder="your password"
                />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button
                type="submit"
                className="w-full bg-[#8B4513] text-white hover:bg-[#5D4037]"
              >
                Log in
              </Button>
              <div className="text-center text-sm">
                <span className="text-[#5D4037]">Don't have an account? </span>
                <Link
                  href="/register"
                  className="text-[#8B4513] hover:underline"
                >
                  Sign up
                </Link>
              </div>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
}
