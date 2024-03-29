import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../typings";
import { urlForImage } from "../sanity";

type Props = { pageInfo: PageInfo };

const About = ({ pageInfo }: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row 
            max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-20 uppercase tracking-[16px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.4,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        src={urlForImage(pageInfo?.profilePicture).url()}
        className="-mb-20 md:mb-0 flex-shrink-0 w-40 h-40 rounded-full object-cover md:w-64 md:h-64"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-3xl font-semibold">
          Here&apos;s a{" "}
          <span className="underline decoration-[#00FFFF]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base text-justify">
          {pageInfo?.backgroundInformation}
        </p>
      </div>
    </motion.div>
  );
};

export default About;
