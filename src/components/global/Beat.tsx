"use client";
import Lottie from "lottie-react";
import React from "react";
import beat from "../../../public/beat.json";

type Props = {};

const Beat = (props: Props) => {
  return (
    <div className="w-[30%] mx-auto my-5">
      <Lottie loop={true} animationData={beat} />
    </div>
  );
};

export default Beat;
