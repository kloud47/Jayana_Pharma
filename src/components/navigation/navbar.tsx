"use client";
import React from "react";
import MaxWidthWrapper from "../global/MaxWidthWrapper";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {};

const Navbar = (props: Props) => {
  const pathname = usePathname();

  return (
    <div className="flex justify-between items-center h-20 bg-background w-full border-b border-primary z-20">
      <MaxWidthWrapper className="flex justify-between items-center h-full w-full p-2">
        <Link
          href={"/"}
          className="uppercase text-3xl font-mono font-bold  text-primary/70"
        >
          Jayana Pharma
        </Link>
        <nav className="flex justify-between gap-x-5 uppercase">
          <Link
            className={`${
              pathname === "/"
                ? "border-b border-black"
                : "hover:text-primary/50 duration-150 border-b border-transparent"
            }`}
            href={"/"}
          >
            Home
          </Link>
          <Link
            className={`${
              pathname === "/about"
                ? "border-b border-black"
                : "hover:text-primary/50 duration-150 border-b border-transparent"
            }`}
            href={"/about"}
          >
            About Us
          </Link>
          <Link
            className={`${
              pathname === "/products"
                ? "border-b border-black"
                : "hover:text-primary/50 duration-150 border-b border-transparent"
            }`}
            href={"/products"}
          >
            Our Products
          </Link>
          <Link
            className={`${
              pathname === "/contact"
                ? "border-b border-black"
                : "hover:text-primary/50 duration-150 border-b border-transparent"
            }`}
            href={"/contact"}
          >
            Contact Us
          </Link>
        </nav>
      </MaxWidthWrapper>
    </div>
  );
};

export default Navbar;
