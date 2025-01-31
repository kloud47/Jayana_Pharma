"use client";
import { motion, Variants, MotionProps } from "framer-motion";
import React from "react";

const Inner = ({ children }: { children: React.ReactNode }) => {
  const anim = (variants: Variants): MotionProps => ({
    initial: "initial",
    animate: "enter",
    exit: "exit",
    variants,
  });

  const opacity: Variants = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
    exit: {
      opacity: 1,
    },
  };

  const slide: Variants = {
    initial: {
      top: "0vh",
    },
    enter: {
      top: "100vh",
    },
    exit: {
      top: "0",
      transition: {
        duration: 1,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const perspective: Variants = {
    initial: {
      y: 0,
      scale: 1,
    },
    enter: {
      y: 0,
      scale: 1,
    },
    exit: {
      y: -100,
      scale: 0.9,
      transition: {
        duration: 1,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  return (
    <div className="inner">
      <motion.div {...anim(slide)} className="slide" />
      <motion.div {...anim(perspective)}>
        <motion.div {...anim(opacity)} className="Page">
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Inner;
