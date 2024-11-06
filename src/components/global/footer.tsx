import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="bg-primary text-background p-5 mt-10 font-serif z-10">
      <div className="grid grid-cols-3 mt-10">
        <div>
          <h1 className="text-3xl">Reach Us</h1>
        </div>
        <div>ok</div>
        <div className="flex flex-col">
          <h1 className="text-xl">Quick Links</h1>
          <ul className="flex flex-col gap-y-2 my-5">
            <Link
              className="border-b border-border/40 flex justify-between items-center hover:text-background group text-muted-foreground"
              href={"/"}
            >
              Home
              <ChevronRight className="group-hover:translate-x-1 duration-150" />
            </Link>
            <Link
              className="border-b border-border/40 flex justify-between items-center hover:text-background group text-muted-foreground"
              href={"/about"}
            >
              About Us
              <ChevronRight className="group-hover:translate-x-1 duration-150" />
            </Link>
            <Link
              className="border-b border-border/40 flex justify-between items-center hover:text-background group text-muted-foreground"
              href={"/products"}
            >
              Our Products
              <ChevronRight className="group-hover:translate-x-1 duration-150" />
            </Link>
            <Link
              className="border-b border-border/40 flex justify-between items-center hover:text-background group text-muted-foreground"
              href={"/contact"}
            >
              Contact Us
              <ChevronRight className="group-hover:translate-x-1 duration-150" />
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
