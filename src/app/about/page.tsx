"use client";
import MaxWidthWrapper from "@/components/global/MaxWidthWrapper";
import Lottie from "lottie-react";
import React from "react";
import Medi from "../../../public/medi.json";
import { Button } from "@/components/ui/button";
import Beat from "@/components/global/Beat";
import { Quote } from "lucide-react";
import Inner from "@/components/layout/Inner";

const page = () => {
  return (
    <Inner>
      <MaxWidthWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 h-[70vh] font-serif border-b border-primary lg:mt-10">
          <div className="flex flex-col justify-center items-center font-serif bg-primary/20">
            <div className="animate-slideinY opacity-0 [--slidein-delay:300ms] flex flex-col justify-center items-center">
              <h1 className="text-xl lg:text-2xl">Exporter, importer</h1>
              <h1 className="text-xl lg:text-2xl">& indentors of</h1>
              <h1 className="text-2xl lg:text-4xl font-bold leading-[50px]">
                {" "}
                PHARMACEUTICALS
              </h1>
              <h1 className="text-2xl font-bold text-center">
                {" "}
                RAW MATERIALS, DRUGS & CHEMICALS.
              </h1>
            </div>
            <Button className="text-2xl mt-10 animate-slideinY opacity-0 [--slidein-delay:700ms]">
              Book Appointment
            </Button>
          </div>
          <div className="lg:flex hidden md:hidden justify-center bg-primary/80">
            <Lottie
              loop={true}
              animationData={Medi}
              className="w-[60%] animate-slideinY opacity-0 [--slidein-delay:300ms]"
            />
          </div>
        </div>
        <div className="mt-20 grid grid-cols-[30%_70%]">
          <div className="BGMedi1"></div>
          <div className="bg-muted p-5 text-sm lg:text-lg font-thin font-serif flex flex-col relative border-t-2 border-primary">
            <div className="bg-primary rounded-full w-10 h-10 absolute top-0 left-0 -translate-x-5 -translate-y-5 z-10">
              .
            </div>
            <span className="font-bold">
              As we started our journey from 1973 in Mumbai,
            </span>{" "}
            <span className="flex mb-2 border-r-4 border-l-4 border-primary pl-2">
              India Jayana pharma is a leading provider of pharmaceutical raw
              materials, offering a comprehensive range of APIs, pellets, herbal
              extracts and excipients.
            </span>{" "}
            <span className="block mb-2 border-r-4 border-l-4 border-primary pl-2">
              Our expertise in sourcing and supplying these essential components
              enables us to meet the diverse needs of our clients, from
              small-scale generic manufacturers to multinational pharmaceutical
              giants.
            </span>{" "}
            <span className="relative block mb-2 border-r-4 border-l-4 border-primary pl-2">
              With decades of experience in the industry, we have built strong
              relationships with suppliers and customers alike, ensuring a
              reliable and efficient supply chain.
            </span>
          </div>
          <div className="BGMedi2 mt-10"></div>
          <div className="bg-muted p-5 text-sm lg:text-lg font-thin font-serif flex flex-col mt-10 relative border-t-2 border-primary">
            <div className="bg-primary rounded-full w-10 h-10 absolute top-0 left-0 -translate-x-5 -translate-y-5 z-10">
              .
            </div>
            <div className="flex items-start font-bold text-black bg-primary text-muted/70 rounded-xl p-2 mb-5">
              <Quote
                fill="#4c4866"
                stroke="#4c4866"
                className="rotate-180"
                size={40}
              />
              <span className="text-center">
                Jayana pharma is dedicated to maintaining the highest ethical
                standards in all aspects of our business.
              </span>
              <Quote fill="#4c4866" stroke="#4c4866" size={40} className="" />
            </div>
            Our commitment to integrity, transparency, and respect for our
            clients and suppliers has earned us a reputation as a trusted
            partner in the pharmaceutical industry. We strive to provide
            exceptional service, competitive pricing, and reliable delivery,
            while adhering to strict quality control measures and environmental
            standards.
          </div>
        </div>
        <Beat />
      </MaxWidthWrapper>
    </Inner>
  );
};

export default page;
