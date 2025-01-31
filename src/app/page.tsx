import MaxWidthWrapper2 from "@/components/global/MaxWidthWrapper2";
import MaxWidthWrapper from "@/components/global/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { SocialIcon } from "react-social-icons";
// import Image from "next/image";
import { ChevronsRightIcon, Mail, MailIcon, Phone } from "lucide-react";
import Link from "next/link";
// import { motion } from "framer-motion";
import AboutContent from "@/components/global/about-content";
import Beat from "@/components/global/Beat";
import Inner from "@/components/layout/Inner";

const Home = async () => {
  return (
    <Inner>
      <MaxWidthWrapper2 className="font-serif">
        <div className="h-[70vh] BGProd3">
          <div className="uppercase flex flex-col items-center justify-center w-full  h-full font-serif leading-[4rem] animate-slideinY opacity-0 [--slidein-delay:300ms] border-b border-primary">
            {/* <h1 className="text-2xl">Exporter, importer</h1>
        <h1 className="text-2xl">& indentors of</h1>
        <h1 className="text-4xl font-bold leading-[50px]">
          {" "}
          PHARMACEUTICALS
        </h1>
        <h1 className="text-3xl font-bold">
          {" "}
          RAW MATERIALS, DRUGS & CHEMICALS.
        </h1> */}
            <h1 className="uppercase text-6xl lg:text-8xl font-black flex flex-col TextGradient font-sans text-center p-2">
              <span className="w-full">Jayana</span>
              <span>Pharma</span>
            </h1>
            <div className="flex justify-center items-center gap-x-5 mt-5 animate-slideinY opacity-0 [--slidein-delay:700ms]">
              <Button className="text-xl shadow-xl">Brochure</Button>
              <Link href={"/products"}>
                <Button
                  variant={"ghost"}
                  className="group border-2 border-primary text-xl bg-muted/30"
                >
                  Products
                  <ChevronsRightIcon className="group-hover:translate-x-2 duration-150" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-lg lg:text-2xl animate-slideinX opacity-0 [--slidein-delay:500ms]">
              Connect with us
            </div>
            <ul className="flex items-center gap-x-4 mx-5 animate-slideinX opacity-0 [--slidein-delay:900ms]">
              <SocialIcon
                url={"https://x.com"}
                label="twitter"
                bgColor="#279161"
                className="hover:scale-105 duration-150"
              />
              <SocialIcon
                url={"https://facebook.com"}
                bgColor="#279161"
                className="hover:scale-105 duration-150"
              />
              <SocialIcon
                url={"https://instagram.com"}
                bgColor="#279161"
                className="hover:scale-105 duration-150"
              />
              <SocialIcon
                url={"https://linkedin.com"}
                bgColor="#279161"
                className="hover:scale-105 duration-150"
              />
            </ul>
          </div>
          <ul className="hidden lg:block bg-accent border-2 border-primary/70 rounded-xl p-4 animate-slideinY opacity-0 [--slidein-delay:700ms]">
            <li className="flex mb-2 justify-start gap-x-2">
              <Phone /> 98211 26463
            </li>
            <li className="flex justify-start gap-x-2">
              <Mail /> jayanapharma@gmail.com
            </li>
          </ul>
        </div>
      </MaxWidthWrapper2>
      <MaxWidthWrapper className="mb-10">
        <AboutContent />
        <Beat />
        <OurProducts />
        <ContactUs />
      </MaxWidthWrapper>
    </Inner>
  );
};
export default Home;

const OurProducts = async (): Promise<JSX.Element> => {
  return (
    <div className="flex flex-col rounded-lg p-5 BGProd pb-10">
      <h1 className="text-center text-2xl lg:text-3xl text-primary font-medium pb-2 border-b border-primary z-10">
        Our Products
      </h1>
      <div className="z-10 flex justify-center items-center mt-5 mb-10">
        <ul className="grid grid-cols-2 lg:w-[50%] text-md lg:text-xl text-black">
          <li className="text-center p-2 rounded-xl m-1 bg-primary/30">
            Methyl Cobalamin
          </li>
          <li className="text-center p-2 rounded-xl m-1 bg-background/50 border border-primary">
            Aspirin
          </li>
          <li className="text-center p-2 rounded-xl m-1 bg-background/50 border border-primary">
            Benfothiamine
          </li>
          <li className="text-center p-2 rounded-xl m-1 bg-primary/30">
            Ambroxol
          </li>
          <li className="text-center p-2 rounded-xl m-1 bg-primary/30">
            Bronopol
          </li>
          <li className="text-center p-2 rounded-xl m-1 bg-background/50 border border-primary">
            Mometasone Furoate
          </li>
          <li className="text-center p-2 rounded-xl m-1 bg-background/50 border border-primary">
            Ofloxacin
          </li>
          <li className="text-center p-2 rounded-xl m-1 bg-primary/30">
            Paracetamol
          </li>
          <li className="text-center p-2 rounded-xl m-1 bg-primary/30">
            Cetrimide
          </li>
          <li className="text-center p-2 rounded-xl m-1 bg-background/50 border border-primary">
            Caffeine Citrate
          </li>
        </ul>
      </div>
      <Button className="z-10 mx-auto text-2xl shadow-lg">
        <Link href={"/products"}>View All Products</Link>
      </Button>
    </div>
  );
};

const ContactUs = async (): Promise<JSX.Element> => {
  return (
    <div className="bg-muted mt-10 p-5 flex flex-col justify-center items-center border-2 border-primary rounded-xl shadow-xl">
      <h1 className="text-2xl lg:text-4xl text-center border-b p-1 border-primary w-full flex justify-center items-center pb-2">
        Waiting for your response!
        <MailIcon size={40} fill="#fff" />
      </h1>
      <p className="lg:px-20 m-2 lg:m-5 text-sm lg:text-lg text-center">
        At Jayana Pharma, we’re here to support and collaborate with our clients
        and partners. Driven by a commitment to quality, integrity, and strong
        ethical values, we prioritize exceptional service and responsiveness in
        every interaction. For inquiries, product information, or partnership
        opportunities, please contact us:
      </p>
      <Button className="text-xl lg:text-2xl shadow-lg">
        <Link href={"/contact"}>Visit our company</Link>
      </Button>
    </div>
  );
};
