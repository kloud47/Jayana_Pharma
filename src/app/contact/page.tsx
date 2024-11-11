"use client";
import MaxWidthWrapper from "@/components/global/MaxWidthWrapper";
import { Mail, Phone } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import { SocialIcon } from "react-social-icons";

type FormFields = {
  Name: string;
  Email: string;
  Message: string;
};

const page = () => {
  const { register, handleSubmit, formState, reset } = useForm<FormFields>();
  const words = [
    {
      text: "Tech",
      className: "text-6xl",
    },
    {
      text: "Council",
      className: "text-6xl",
    },
  ];

  const onSubmit = async () => {};

  return (
    <MaxWidthWrapper className="h-[85vh]">
      <div className="grid grid-cols-2 h-full">
        <GetInTouch />
        <div className="bg-primary/90 h-full m-5 rounded-3xl p-5 flex items-center">
          <div className="bg-white mt-2 w-full rounded-3xl p-4 shadow-lg animate-slideinY opacity-0 [--slidein-delay:150ms]">
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
                className={`bg-gradient-to-br relative group/btn  bg-zinc-800 hover:text-black w-full hover:bg-[#3333] duration-200 text-white rounded-full h-10 font-medium shadow-[0px_5px_0px_0px_var(--zinc-800)_inset,0px_-5px_0px_0px_var(--zinc-800)_inset]`}
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
      <div className="text-primary/90 font-black font-serif animate-slideinX opacity-0 [--slidein-delay:300ms]">
        <h1 className="text-4xl">Get in</h1>
        <h1 className="text-6xl uppercase">Touch</h1>
        <p className="font-thin text-xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, sunt
          officia! Quod quis ipsam dolor rem architecto alias asperiores
          dignissimos, iure, vitae quibusdam nobis necessitatibus non impedit
          quidem dolorum. Tempora. Voluptatem vitae voluptates placeat ad
          quibusdam voluptatum possimus accusamus reprehenderit asperiores!
          Consequatur ex nihil impedit voluptatem repudiandae in molestias
          nulla, voluptates maxime odio ipsa dolores qui voluptatibus quia.
          Inventore, harum. Esse laboriosam fuga est porro eos vitae ex
          inventore adipisci assumenda ipsam. Iure deleniti porro reiciendis
          obcaecati nam tempore autem illum voluptas cupiditate debitis quam,
          numquam ipsa, quas dicta odit?
        </p>
        <ul className="flex items-center gap-x-4 mt-2 animate-slideinX opacity-0 [--slidein-delay:900ms]">
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
      <ul className="absolute bottom-0 bg-accent border-2 border-primary rounded-xl p-4">
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
