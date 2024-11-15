import { ChevronRight, MapPin } from "lucide-react";
import Link from "next/link";
import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Footer = () => {
  return (
    <div className="bg-primary text-background pt-5 font-serif z-10">
      <div className="w-full border-4 border-background"></div>
      <MaxWidthWrapper>
        <div className="grid grid-cols-3 mt-10">
          <div className="flex flex-col">
            <h1 className="text-3xl">Reach Us</h1>
            <div className="rounded-xl border border-border/50 text-muted p-2 grid grid-cols-[20%_80%] font-sans my-2 bg-accent/5">
              <div>off.</div>
              <div>
                <span className="mr-2">:</span> +91-22-2343 2311 / 6638 2516
              </div>
              <div>Fax</div>
              <div>
                <span className="mr-2">:</span> 91-22-2341 2106
              </div>
              <div>Mobile</div>
              <div>
                <span className="mr-2">:</span> 98211 26463
              </div>
              <div>Email</div>
              <div>
                <span className="mr-2">:</span> jayanapharma@gmail.com
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <MapPin className="ml-20" size={40} />
            <span className="mx-20 mt-5 font-thin font-sans">
              44, &apos;Faiz-E-Edroos&apos;, 4th Floor, 371/373, Narsi Natha
              Street, Masjid Bunder, MUMBAI-400 009. INDIA
            </span>
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl">Quick Links</h1>
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
        <Link
          href={"/"}
          className="uppercase text-3xl font-mono font-bold  text-primary/70"
        >
          Jayana Pharma
        </Link>
      </MaxWidthWrapper>
    </div>
  );
};

export default Footer;
