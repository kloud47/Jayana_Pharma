import MaxWidthWrapper from "@/components/global/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { SocialIcon } from "react-social-icons";
import Image from "next/image";
import { ChevronsRightIcon, CircleCheckBig, Dice1, Phone } from "lucide-react";
import Link from "next/link";

const Home = async () => {
  return (
    <MaxWidthWrapper className="font-serif">
      <div className="h-[70vh] my-10 bg-accent">
        <div className="uppercase flex flex-col items-center justify-center w-full  h-full font-serif leading-[4rem] animate-slideinY opacity-0 [--slidein-delay:300ms] border-b border-primary">
          <h1 className="text-2xl">Exporter, importer</h1>
          <h1 className="text-2xl">& indentors of</h1>
          <h1 className="text-4xl font-bold leading-[50px]">
            {" "}
            PHARMACEUTICALS
          </h1>
          <h1 className="text-3xl font-bold">
            {" "}
            RAW MATERIALS, DRUGS & CHEMICALS.
          </h1>
          <div className="flex justify-center items-center gap-x-5 mt-5 animate-slideinY opacity-0 [--slidein-delay:700ms]">
            <Button className="text-xl">Brochure</Button>
            <Link href={"/contact"}>
              <Button
                variant={"outline"}
                className="group border-2 border-primary text-xl"
              >
                Contact Us{" "}
                <ChevronsRightIcon className="group-hover:translate-x-2 duration-150" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="p-4 flex items-center">
        <div className="text-2xl animate-slideinX opacity-0 [--slidein-delay:500ms]">
          Connect with us
        </div>
        <ul className="flex items-center gap-x-4 mx-5 animate-slideinX opacity-0 [--slidein-delay:900ms]">
          <SocialIcon url={"https://x.com"} label="twitter" bgColor="#413f52" />
          <SocialIcon url={"https://facebook.com"} bgColor="#413f52" />
          <SocialIcon url={"https://instagram.com"} bgColor="#413f52" />
          <SocialIcon url={"https://linkedin.com"} bgColor="#413f52" />
        </ul>
      </div>
      <AboutContent />
      <OurProducts />
    </MaxWidthWrapper>
  );
};
export default Home;

const AboutContent = async (): Promise<JSX.Element> => {
  return (
    <div className="grid grid-cols-[60%_40%]">
      <div>
        <h1 className="text-3xl font-bold mt-10 border-t border-primary pt-5">
          Who we are
        </h1>
        <p className="text-start font-thin text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
          asperiores illum quibusdam nostrum consequuntur accusantium dicta
          neque maiores tenetur velit totam magni quaerat, odit, necessitatibus
          perspiciatis molestiae sit, debitis magnam? Officiis maxime ipsum
          numquam sunt molestiae corrupti a harum ex, tenetur delectus quo.
          Labore ducimus, beatae fugiat ad dignissimos harum ipsam omnis eius
          explicabo! Dolorum labore facilis rerum cumque doloremque? Quas id
          blanditiis esse perspiciatis minima nobis veritatis laudantium
          similique sunt. Amet quia, exercitationem rem ex incidunt quibusdam
          quis facere. Inventore suscipit voluptate odit laborum eos dolorem
          similique rerum quis. Quod blanditiis eligendi eos, delectus in
          impedit ipsa sapiente ab inventore ex laudantium nesciunt aliquid
          tempore amet officiis quam. Facilis laudantium numquam vero molestiae
          explicabo ipsum deserunt accusamus, itaque beatae. Ut, amet esse
          placeat, facilis provident et eos molestiae autem voluptatibus ipsam
          quis, assumenda inventore adipisci qui facere accusantium perferendis
          corporis sunt odit tempore fugiat. Ab alias consectetur iure saepe.
        </p>
      </div>
      <div className="flex flex-col mt-10">
        <div className="bg-gradient-to-r from-transparent to-primary/40 p-4 lg:p-8 rounded-r-full mb-10 duration-200">
          <h1 className="flex items-center space-x-5 text-lg lg:text-2xl font-medium">
            <CircleCheckBig size={30} className="text-green-500" />{" "}
            <span>15+ Countries</span>
          </h1>
          <p className="ml-10 text-sm lg:text-lg mt-2">
            Products are made from sustainable materials, while waste is reduced
            through manufacturing, reuse and recycle
          </p>
        </div>

        <div className="bg-gradient-to-r from-transparent to-primary/40 p-4 lg:p-8 rounded-r-full mb-10 duration-200">
          <h1 className="flex items-center space-x-5 text-lg lg:text-2xl font-medium">
            <CircleCheckBig size={30} className="text-green-500" />{" "}
            <span>150 + customers</span>
          </h1>
          <p className="ml-10 text-sm lg:text-lg mt-2">
            We adapt the newest technology to manufacture products.
          </p>
        </div>

        <div className="bg-gradient-to-r from-transparent to-primary/40 p-4 lg:p-8 rounded-r-full mb-10 duration-200">
          <h1 className="flex items-center space-x-5 text-lg lg:text-2xl font-medium">
            <CircleCheckBig size={30} className="text-green-500" />{" "}
            <span>200 + DMF Product Sources</span>
          </h1>
          <p className="ml-10 text-sm lg:text-lg mt-2">
            We follow the manufacturing production strategy in order to MTS, MTO
          </p>
        </div>
      </div>
    </div>
  );
};

const OurProducts = async (): Promise<JSX.Element> => {
  return <div>ok</div>;
};
