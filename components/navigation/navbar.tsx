"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Box } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#D2B48C] bg-white">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Box className="h-6 w-6 text-[#8B4513]" />
          <span className="text-xl font-bold text-[#5D4037]">RoboTrack</span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className={cn(
              "text-sm font-medium transition-colors hover:text-[#8B4513]",
              pathname === "/" ? "text-[#8B4513]" : "text-[#5D4037]"
            )}
          >
            Home
          </Link>
          <Link
            href="/features"
            className={cn(
              "text-sm font-medium transition-colors hover:text-[#8B4513]",
              pathname === "/features" ? "text-[#8B4513]" : "text-[#5D4037]"
            )}
          >
            Features
          </Link>
          <Link
            href="/pricing"
            className={cn(
              "text-sm font-medium transition-colors hover:text-[#8B4513]",
              pathname === "/pricing" ? "text-[#8B4513]" : "text-[#5D4037]"
            )}
          >
            Pricing
          </Link>
          <Link
            href="/about"
            className={cn(
              "text-sm font-medium transition-colors hover:text-[#8B4513]",
              pathname === "/about" ? "text-[#8B4513]" : "text-[#5D4037]"
            )}
          >
            About
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/login" className="hidden md:block">
            <Button className="bg-[#8B4513] text-white hover:bg-[#5D4037]">
              Sign In
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
