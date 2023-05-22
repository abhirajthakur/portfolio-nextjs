import React from "react";
import { motion } from "framer-motion";

type Props = {};

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "25%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-[#00FFFF] rounded-full h-[150px] w-[150px] mt-52 animate-ping" />
      <div className="rounded-full border border-[#333333] h-[250px] w-[250px] absolute mt-52" />
      <div className="rounded-full border border-[#333333] h-[450px] w-[450px] absolute mt-52" />
      <div className="rounded-full border border-[#00FFFF] h-[600px] w-[600px] absolute mt-52 animate-pulse opacity-20" />
      <div className="rounded-full border border-[#333333] h-[750px] w-[750px] absolute mt-52" />
    </motion.div>
  );
};

export default BackgroundCircles;
