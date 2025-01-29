"use client";
import MaxWidthWrapper from "@/components/global/MaxWidthWrapper";
import { Mail, Phone } from "lucide-react";
import React from "react";
import { useForm as UseForm } from "react-hook-form";
import { SocialIcon } from "react-social-icons";

type FormFields = {
  Name: string;
  Email: string;
  Message: string;
};

const page = () => {
  const { register, handleSubmit } = UseForm<FormFields>();
  // const words = [
  //   {
  //     text: "Tech",
  //     className: "text-6xl",
  //   },
  //   {
  //     text: "Council",
  //     className: "text-6xl",
  //   },
  // ];

  const onSubmit = async () => {};

  return (
    <MaxWidthWrapper className="lg:h-[85vh] mb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
        <GetInTouch />
        <div className="bg-primary/90 h-full m-5 rounded-3xl p-10 flex items-center BGProd BoxShadow1">
          <div className="bg-white mt-2 w-full rounded-3xl p-2 shadow-xl animate-slideinY opacity-0 [--slidein-delay:150ms] z-10">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("Name", { required: true })}
                className="w-full rounded-full border border-primary bg-accent p-2 mb-4"
                placeholder="Name"
              />
              <input
                {...register("Email", { required: true })}
                className="w-full rounded-full border border-primary bg-accent p-2 mb-4"
                placeholder="Email"
                type="email"
              />
              <textarea
                rows={6}
                {...register("Message", { required: true })}
                className="w-full rounded-xl border border-border bg-accent p-2 mb-4"
                placeholder="Message..."
              />
              <button
                className={`bg-gradient-to-br relative group/btn  bg-popover hover:text-black w-full hover:bg-[#3333] duration-200 text-white rounded-full h-10 font-medium shadow-[0px_5px_0px_0px_var(--zinc-800)_inset,0px_-5px_0px_0px_var(--zinc-800)_inset]`}
                type="submit"
                // disabled={true}
              >
                {/* {(!isLoad) ? (done ? <div className="flex justify-center items-center"><Check className="rounded-full mx-1 bg-green-400" />Done</div> : "Send") : <LoaderCircle className="mx-auto loader text-[#00e5ff]" />} */}
                Submit
                <BottomGradient />
              </button>
            </form>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};
export default page;

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const GetInTouch = (): JSX.Element => {
  return (
    <div className="flex flex-col justify-center items-start relative">
      <div className="text-primary/90 font-black font-serif animate-slideinX opacity-0 [--slidein-delay:300ms] p-5">
        <h1 className="text-2xl lg:text-4xl">Get in</h1>
        <h1 className="text-4xl lg:text-6xl uppercase">Touch</h1>
        <p className="font-thin text-sm lg:text-xl border-b border-primary py-4">
          We’re here to connect, support, and answer any questions you may have!
          Whether you’re interested in learning more about our offerings, need
          assistance, or have a specific inquiry, our team is ready to help.
          Here’s how you can reach us:
        </p>
        <div className="my-2 mb-4">
          <h1 className="text-xl my-2">Information</h1>
          <p className="font-sans font-medium">
            Office Hours: Monday - Friday, 9:00 AM - 6:00 PM (Local Time)
          </p>
        </div>
        <ul className="flex items-center gap-x-4 mt-2 animate-slideinX opacity-0 [--slidein-delay:900ms]">
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
      <ul className="mt-4 lg:mt-10 bg-accent border-2 border-primary rounded-xl p-4">
        <li className="flex mb-2 justify-start gap-x-2">
          <Phone /> 98211 26463
        </li>
        <li className="flex justify-start gap-x-2">
          <Mail /> jayanapharma@gmail.com
        </li>
      </ul>
    </div>
  );
};
