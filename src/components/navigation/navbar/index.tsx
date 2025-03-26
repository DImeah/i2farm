"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-green-700 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href={"/"}>
          <div className="text-2xl font-bold hover:text-yellow-300">
            {" "}
            <Image
              src="/ifarm_logo.png"
              alt="ifarm logo"
              width={100}
              height={5}
            />
          </div>
        </Link>

        {/* Navigation Links (Desktop) */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="#" className="hover:text-yellow-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-yellow-300">
              About
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-yellow-300">
              Services
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-yellow-300">
              Contact
            </Link>
          </li>
        </ul>

        {/* Get Started Button */}
        <Link
          href="/get-started"
          className="hidden md:block bg-yellow-400 text-green-800 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500"
        >
          Get Started
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-green-800 transition-transform duration-300 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <ul className="flex flex-col items-center py-4 space-y-4">
          <li>
            <Link href="#" className="hover:text-yellow-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-yellow-300">
              About
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-yellow-300">
              Services
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-yellow-300">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
