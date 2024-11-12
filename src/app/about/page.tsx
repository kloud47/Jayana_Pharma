"use client";
import MaxWidthWrapper from "@/components/global/MaxWidthWrapper";
import Lottie from "lottie-react";
import React from "react";
import Medi from "../../../public/medi.json";
import { Button } from "@/components/ui/button";
import Beat from "@/components/global/Beat";

const page = () => {
  return (
    <MaxWidthWrapper>
      <div className="grid grid-cols-2 h-[70vh] font-serif border-b border-primary mt-10">
        <div className="flex flex-col justify-center items-center font-serif bg-primary/20">
          {/* <h1 className="uppercase text-6xl font-thin font-sans">About</h1> */}
          <h1 className="text-2xl">Exporter, importer</h1>
          <h1 className="text-2xl">& indentors of</h1>
          <h1 className="text-4xl font-bold leading-[50px]">
            {" "}
            PHARMACEUTICALS
          </h1>
          <h1 className="text-2xl font-bold">
            {" "}
            RAW MATERIALS, DRUGS & CHEMICALS.
          </h1>
          <Button className="w-[40%] text-2xl mt-10">Book Appointment</Button>
        </div>
        <div className="flex justify-center bg-primary/70">
          <Lottie loop={true} animationData={Medi} className="w-[60%]" />
        </div>
      </div>
      <div className="my-20 grid grid-cols-[30%_70%]">
        <div></div>
        <div className="bg-muted p-5 text-lg font-thin font-serif flex flex-col relative border-t-2 border-primary">
          <div className="bg-primary rounded-full w-10 h-10 absolute top-0 left-0 -translate-x-5 -translate-y-5">
            .
          </div>
          <span className="font-bold">
            As we started our journey from 1973 in Mumbai,
          </span>{" "}
          India Jayana pharma is a leading provider of pharmaceutical raw
          materials, offering a comprehensive range of APIs, pellets, herbal
          extracts and excipients. Our expertise in sourcing and supplying these
          essential components enables us to meet the diverse needs of our
          clients, from small-scale generic manufacturers to multinational
          pharmaceutical giants. With decades of experience in the industry, we
          have built strong relationships with suppliers and customers alike,
          ensuring a reliable and efficient supply chain.
        </div>
        <div></div>
        <div className="bg-muted p-5 text-lg font-thin font-serif flex flex-col mt-10 relative border-t-2 border-primary">
          <div className="bg-primary rounded-full w-10 h-10 absolute top-0 left-0 -translate-x-5 -translate-y-5">
            .
          </div>
          Jayana pharma is dedicated to maintaining the highest ethical
          standards in all aspects of our business. Our commitment to integrity,
          transparency, and respect for our clients and suppliers has earned us
          a reputation as a trusted partner in the pharmaceutical industry. We
          strive to provide exceptional service, competitive pricing, and
          reliable delivery, while adhering to strict quality control measures
          and environmental standards.
        </div>
      </div>
      <Beat />
    </MaxWidthWrapper>
  );
};

export default page;
