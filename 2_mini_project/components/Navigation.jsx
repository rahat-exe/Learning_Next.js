"use client";

import Link from "next/link";
import React, { useState } from "react";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="shadow-sm ">
      <div className="max-w-6xl mx-auto px-4 border-b">
        <div className="flex justify-between items-center h-12">
          {/* Logo */}
          <div className="shrink-0">
            <Link href={"/"} className="text-xl font-bold">
              MyWebsite
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href={"/"}
                className="text-sm font-medium text-gray-950 hover:text-gray-700 transition-colors"
              >
                Home
              </Link>
              <Link
                href={"/about"}
                className="text-sm font-medium text-gray-950 hover:text-gray-700 transition-colors"
              >
                About
              </Link>
              <Link
                href={"/projects"}
                className="text-sm font-mediumtext-gray-950 hover:text-gray-700 transition-colors"
              >
                Projects
              </Link>
              <Link
                href={"/contact"}
                className="text-sm font-medium text-gray-950 hover:text-gray-700 transition-colors"
              >
                Contact us
              </Link>
            </div>
          </div>

          {/* Menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen((prev) => !prev)}
              className="text-3xl"
            >
              =
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden">
            <div className="ml-10  space-x-8 flex flex-col  items-center">
              <Link
                href={"/"}
                className="text-sm font-medium text-gray-950 hover:text-gray-700 transition-colors"
              >
                Home
              </Link>
              <Link
                href={"/about"}
                className="text-sm font-medium text-gray-950 hover:text-gray-700 transition-colors"
              >
                About
              </Link>
              <Link
                href={"/projects"}
                className="text-sm font-mediumtext-gray-950 hover:text-gray-700 transition-colors"
              >
                Projects
              </Link>
              <Link
                href={"/contact"}
                className="text-sm font-medium text-gray-950 hover:text-gray-700 transition-colors"
              >
                Contact us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
