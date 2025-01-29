"use client";
import React, { useState } from "react";
import MaxWidthWrapper from "../global/MaxWidthWrapper";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Menu } from "lucide-react";

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
      <MaxWidthWrapper className="flex justify-between items-center h-full w-full lg:p-2 p-4">
        <Link
          href={"/"}
          className="uppercase text-3xl font-mono font-bold text-popover"
        >
          Jayana Pharma
        </Link>
        <nav className=" hidden lg:flex justify-between gap-x-5 uppercase">
          <Link
            className={`${
              pathname === "/"
                ? "border-b border-black"
                : "hover:text-popover/50 duration-150 border-b border-transparent"
            }`}
            href={"/"}
          >
            Home
          </Link>
          <Link
            className={`${
              pathname === "/about"
                ? "border-b border-black"
                : "hover:text-popover/50 duration-150 border-b border-transparent"
            }`}
            href={"/about"}
          >
            About Us
          </Link>
          <Link
            className={`${
              pathname === "/products"
                ? "border-b border-black"
                : "hover:text-popover/50 duration-150 border-b border-transparent"
            }`}
            href={"/products"}
          >
            Our Products
          </Link>
          <Link
            className={`${
              pathname === "/contact"
                ? "border-b border-black"
                : "hover:text-popover/50 duration-150 border-b border-transparent"
            }`}
            href={"/contact"}
          >
            Contact Us
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger className="lg:hidden">
            <Menu />
          </SheetTrigger>
          <SheetContent className="bg-muted">
            <SheetTitle>Menu</SheetTitle>
            <nav className="flex flex-col gap-y-4 uppercase mt-10">
              <Link
                href={"/"}
                className="animate-slideinY opacity-0 [--slidein-delay:300ms] hover:text-primary/60 text-lg border-b border-muted-foreground"
              >
                Home
              </Link>
              <Link
                href={"/about"}
                className="animate-slideinY opacity-0 [--slidein-delay:500ms] hover:text-primary/60 text-lg border-b border-muted-foreground"
              >
                About Us
              </Link>
              <Link
                href={"/products"}
                className="animate-slideinY opacity-0 [--slidein-delay:700ms] hover:text-primary/60 text-lg border-b border-muted-foreground"
              >
                Our Products
              </Link>
              <Link
                href={"/contact"}
                className="animate-slideinY opacity-0 [--slidein-delay:700ms] hover:text-primary/60 text-lg border-b border-muted-foreground"
              >
                Contact Us
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </MaxWidthWrapper>
    </motion.div>
  );
};

export default Navbar;
