"use client";
import { CircleCheckBig } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { useRef } from "react";
// import Image from "next/image";
// import MediProd from "../../../public/AboutProd.png";

const AboutContent = () => {
  const router = useRouter();
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 0.7", "0.8 end"],
  });

  const translate = useTransform(
    scrollYProgress,
    [0, 1],
    ["-500px 100px", "0px 0px"]
  );
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] mb-10">
      <motion.div
        ref={targetRef}
        className="border border-primary px-4 flex flex-col shadow-2xl"
        style={{ translate, opacity }}
      >
        <h1 className="text-xl lg:text-4xl font-bold mt-5 lg:mt-10 pt-5">
          Who we are
        </h1>
        <div className="text-start font-thin text-sm lg:text-lg mt-4">
          Founded in 1973 in Mumbai, India, Jayana Pharma is a leading supplier
          of pharmaceutical raw materials, including APIs, pellets, herbal
          extracts, and excipients. Our decades of expertise support clients
          ranging from small generic manufacturers to global pharmaceutical
          companies, backed by a robust, efficient supply chain and trusted
          industry relationships.
        </div>
        <div className="BGProd2 h-[45%] rounded-lg my-4">.</div>
        <Button
          className="mt-5 text-xl w-1/2 mx-auto shadow-lg bg-popover"
          onClick={() => router.push("/about")}
        >
          Know More
        </Button>
      </motion.div>
      <div className="flex flex-col mt-10">
        <motion.div
          className="bg-gradient-to-r from-transparent to-primary/40 p-4 lg:p-8 rounded-r-full mb-10 duration-200"
          initial={{
            opacity: 0,
            y: "20px",
          }}
          whileInView={{
            opacity: 1,
            y: "0px",
          }}
          transition={{
            duration: 1,
          }}
          // viewport={{ once: true }}
        >
          <h1 className="flex items-center space-x-5 text-lg lg:text-2xl font-medium">
            <CircleCheckBig size={30} className="text-green-500" />{" "}
            <span>15+ Countries</span>
          </h1>
          <p className="ml-10 text-sm lg:text-lg mt-2">
            Products are made from sustainable materials, while waste is reduced
            through manufacturing, reuse and recycle
          </p>
        </motion.div>

        <motion.div
          className="bg-gradient-to-r from-transparent to-primary/40 p-4 lg:p-8 rounded-r-full mb-10 duration-200"
          initial={{
            opacity: 0,
            y: "20px",
          }}
          whileInView={{
            opacity: 1,
            y: "0px",
          }}
          transition={{
            duration: 1,
            delay: 0.5,
          }}
        >
          <h1 className="flex items-center space-x-5 text-lg lg:text-2xl font-medium">
            <CircleCheckBig size={30} className="text-green-500" />{" "}
            <span>150 + customers</span>
          </h1>
          <p className="ml-10 text-sm lg:text-lg mt-2">
            We adapt the newest technology to manufacture products.
          </p>
        </motion.div>

        <motion.div
          className="bg-gradient-to-r from-transparent to-primary/40 p-4 lg:p-8 rounded-r-full mb-10 duration-200"
          initial={{
            opacity: 0,
            y: "20px",
          }}
          whileInView={{
            opacity: 1,
            y: "0px",
          }}
          transition={{
            duration: 1,
            delay: 1,
          }}
        >
          <h1 className="flex items-center space-x-5 text-lg lg:text-2xl font-medium">
            <CircleCheckBig size={30} className="text-green-500" />{" "}
            <span>200 + DMF Product Sources</span>
          </h1>
          <p className="ml-10 text-sm lg:text-lg mt-2">
            We follow the manufacturing production strategy in order to MTS, MTO
          </p>
        </motion.div>
        <motion.div
          className="bg-gradient-to-r from-transparent to-primary/40 p-4 lg:p-8 rounded-r-full mb-10 duration-200"
          initial={{
            opacity: 0,
            y: "20px",
          }}
          whileInView={{
            opacity: 1,
            y: "0px",
          }}
          transition={{
            duration: 1,
            delay: 1,
          }}
        >
          <h1 className="flex items-center space-x-5 text-lg lg:text-2xl font-medium">
            <CircleCheckBig size={30} className="text-green-500" />{" "}
            <span>50+ Years</span>
          </h1>
          <p className="ml-10 text-sm lg:text-lg mt-2">
            A Wealth of Knowledge & Trust Gained Over Five Decades
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutContent;
