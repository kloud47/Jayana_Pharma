"use client";
import { CircleCheckBig } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { once } from "events";

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
    <div className="grid grid-cols-[60%_40%] mb-10">
      <motion.div
        ref={targetRef}
        className="border border-primary px-4 flex flex-col shadow-xl"
        style={{ translate, opacity }}
      >
        <h1 className="text-4xl font-bold mt-10 pt-5">Who we are</h1>
        <p className="text-start font-thin text-lg mt-4">
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
        <Button
          className="mt-5 text-xl w-1/2 mx-auto shadow-lg"
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
      </div>
    </div>
  );
};

export default AboutContent;
