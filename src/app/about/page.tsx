"use client";
import MaxWidthWrapper from "@/components/global/MaxWidthWrapper";
import Lottie from "lottie-react";
import React from "react";
import Medi from "../../../public/medi.json";
import { Button } from "@/components/ui/button";
import Beat from "@/components/global/Beat";

// type Props = {};

const page = () => {
  return (
    <MaxWidthWrapper>
      <div className="grid grid-cols-2 h-[70vh] font-serif border-b border-primary">
        <div className="flex flex-col justify-center font-sans">
          <h1 className="uppercase text-6xl font-thin font-sans">About</h1>
          <h1 className="uppercase text-8xl font-black flex flex-col TextGradient">
            <span>Jayana</span>
            <span>Pharmacy</span>
          </h1>
          <Button className="w-[40%] text-2xl mt-10">Book Appointment</Button>
        </div>
        <div className="flex justify-center">
          <Lottie loop={true} animationData={Medi} className="w-[60%]" />
        </div>
      </div>
      <div className="my-5">
        As we started our journey from 1973 in Mumbai, India Jayana pharma is a
        leading provider of pharmaceutical raw materials, offering a
        comprehensive range of APIs, pellets, herbal extracts and excipients.
        Our expertise in sourcing and supplying these essential components
        enables us to meet the diverse needs of our clients, from small-scale
        generic manufacturers to multinational pharmaceutical giants. With
        decades of experience in the industry, we have built strong
        relationships with suppliers and customers alike, ensuring a reliable
        and efficient supply chain.
      </div>
      <Beat />
    </MaxWidthWrapper>
  );
};

export default page;
