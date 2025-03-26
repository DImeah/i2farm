"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href={"/"}>
            <Image
              src="/ifarm_logo.png"
              alt="ifarm logo"
              width={150}
              height={150}
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <Link
            href="#products"
            className="text-sm font-medium hover:text-green-600"
          >
            Products
          </Link>
          <Link
            href="#services"
            className="text-sm font-medium hover:text-green-600"
          >
            Services
          </Link>
          <Link
            href="#investment"
            className="text-sm font-medium hover:text-green-600"
          >
            Investment
          </Link>
          <Link
            href="#testimonials"
            className="text-sm font-medium hover:text-green-600"
          >
            Reviews
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium hover:text-green-600"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          {/* Desktop Buttons */}
          <div className="hidden md:flex gap-2">
            <Button
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-50 shadow-lg hover:shadow-xl transition-shadow"
            >
              Buy Now
            </Button>
            <Button className="bg-green-600 hover:bg-green-700 shadow-lg hover:shadow-xl transition-shadow">
              Invest Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-600 focus:outline-none"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b shadow-lg z-50">
          <div className="container py-4 flex flex-col space-y-4">
            <Link
              href="#products"
              className="text-sm font-medium hover:text-green-600 py-2"
              onClick={toggleMenu}
            >
              Products
            </Link>
            <Link
              href="#services"
              className="text-sm font-medium hover:text-green-600 py-2"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              href="#investment"
              className="text-sm font-medium hover:text-green-600 py-2"
              onClick={toggleMenu}
            >
              Investment
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium hover:text-green-600 py-2"
              onClick={toggleMenu}
            >
              Reviews
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-green-600 py-2"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <div className="flex flex-col gap-2 pt-2">
              <Button
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50 w-full shadow-lg hover:shadow-xl transition-shadow"
              >
                Buy Now
              </Button>
              <Button className="bg-green-600 hover:bg-green-700 w-full shadow-lg hover:shadow-xl transition-shadow">
                Invest Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
