"use client";
import React, { useState } from "react";
import MaxWidthWrapper from "../global/MaxWidthWrapper";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

const Navbar = () => {
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous! && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.div
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      className="flex sticky top-0 justify-between items-center h-20 bg-[#E5E5E9] w-full z-20 shadow-lg"
    >
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
    </motion.div>
  );
};

export default Navbar;
