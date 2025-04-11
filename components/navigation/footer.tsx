import Link from "next/link";
import { Box } from "lucide-react";
import { footerLinks, legalLinks } from "@/mocks/data/footerLinks";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#D2B48C] bg-white">
      <div className="container py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Box className="h-6 w-6 text-[#8B4513]" />
              <span className="text-xl font-bold text-[#5D4037]">
                RoboTrack
              </span>
            </div>
            <p className="text-sm text-[#5D4037] max-w-xs">
              Advanced robot movement and inventory tracking system for modern
              warehouses and facilities.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {footerLinks.map((section) => (
              <div key={section.title} className="space-y-3">
                <h3 className="text-sm font-medium text-[#8B4513]">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.title}>
                      <Link
                        href={link.href}
                        className="text-sm text-[#5D4037] hover:text-[#8B4513]"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-[#E6D2B5] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#5D4037]">
            © {currentYear} RoboTrack. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {legalLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="text-xs text-[#5D4037] hover:text-[#8B4513]"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
