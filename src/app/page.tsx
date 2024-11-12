import MaxWidthWrapper from "@/components/global/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { SocialIcon } from "react-social-icons";
// import Image from "next/image";
import { ChevronsRightIcon, Mail, MailIcon, Phone } from "lucide-react";
import Link from "next/link";
// import { motion } from "framer-motion";
import AboutContent from "@/components/global/about-content";
import Beat from "@/components/global/Beat";

const Home = async () => {
  return (
    <MaxWidthWrapper className="font-serif">
      <div className="h-[70vh] mt-10 bg-accent">
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
          <h1 className="uppercase text-8xl font-black flex flex-col TextGradient">
            <span className="animate-slideinX [--slidein-delay:300ms] w-full">
              Jayana
            </span>
            <span>Pharma</span>
          </h1>
          <div className="flex justify-center items-center gap-x-5 mt-5 animate-slideinY opacity-0 [--slidein-delay:700ms]">
            <Button className="text-xl shadow-lg">Brochure</Button>
            <Link href={"/products"}>
              <Button
                variant={"outline"}
                className="group border-2 border-primary text-xl"
              >
                Products{" "}
                <ChevronsRightIcon className="group-hover:translate-x-2 duration-150" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-2xl animate-slideinX opacity-0 [--slidein-delay:500ms]">
            Connect with us
          </div>
          <ul className="flex items-center gap-x-4 mx-5 animate-slideinX opacity-0 [--slidein-delay:900ms]">
            <SocialIcon
              url={"https://x.com"}
              label="twitter"
              bgColor="#413f52"
              className="hover:scale-105 duration-150"
            />
            <SocialIcon
              url={"https://facebook.com"}
              bgColor="#413f52"
              className="hover:scale-105 duration-150"
            />
            <SocialIcon
              url={"https://instagram.com"}
              bgColor="#413f52"
              className="hover:scale-105 duration-150"
            />
            <SocialIcon
              url={"https://linkedin.com"}
              bgColor="#413f52"
              className="hover:scale-105 duration-150"
            />
          </ul>
        </div>
        <ul className="bg-accent border-2 border-primary/70 rounded-xl p-4 animate-slideinY opacity-0 [--slidein-delay:700ms]">
          <li className="flex mb-2 justify-start gap-x-2">
            <Phone /> 98211 26463
          </li>
          <li className="flex justify-start gap-x-2">
            <Mail /> jayanapharma@gmail.com
          </li>
        </ul>
      </div>
      <AboutContent />
      <Beat />
      <OurProducts />
      <ContactUs />
    </MaxWidthWrapper>
  );
};
export default Home;

const OurProducts = async (): Promise<JSX.Element> => {
  return (
    <div className="flex flex-col bg-muted rounded-lg p-5 BGProd pb-10">
      <h1 className="text-center text-3xl text-primary font-bold border-b border-primary z-10">
        Our Products
      </h1>
      <div className="z-10 flex justify-center items-center mt-5 mb-10">
        <ul className="grid grid-cols-2 w-[50%] text-xl text-black">
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
      <Button className="z-10 mx-auto w-[30%] text-2xl shadow-lg">
        View All Products
      </Button>
    </div>
  );
};

const ContactUs = async (): Promise<JSX.Element> => {
  return (
    <div className="bg-muted mt-10 p-5 flex flex-col justify-center items-center border-2 border-primary rounded-xl shadow-xl">
      <h1 className="text-4xl text-center border-b p-1 border-primary w-full flex justify-center items-center">
        Waiting for your response!
        <MailIcon size={50} />
      </h1>
      <p className="px-20">
        At Jayana Pharma, we’re here to support and collaborate with our clients
        and partners. Driven by a commitment to quality, integrity, and strong
        ethical values, we prioritize exceptional service and responsiveness in
        every interaction. For inquiries, product information, or partnership
        opportunities, please contact us:
      </p>
      <Button className="w-[30%] text-2xl shadow-lg">Visit our company</Button>
    </div>
  );
};
