import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = { image: string };

const ExperienceCard = (props: Props) => {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[200px]
      md:w-[400px] 2xl:w-[700px] snap-center bg-[#272829] p-10 opacity-40 hover:opacity-100
      cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="md:mt-48 mt-40 w-30 h-30 rounded-full xl:w-[80px] xl:h-[80px] object-cover object-center"
        src="/profileImage.jpeg"
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="text-3xl font-light">Junior Blockchain developer</h4>
        <p className="font-bold text-2xl mt-1">Some Company</p>
        <div className="flex space-x-2 my-2">
          <Image
            className="h-5 w-5 rounded-full"
            src={props.image}
            alt="image"
            width={30}
            height={30}
          />
          <Image
            className="h-10 w-10 rounded-full"
            src={props.image}
            alt="image"
            width={30}
            height={30}
          />
          <Image
            className="h-10 w-10 rounded-full"
            src={props.image}
            alt="image"
            width={30}
            height={30}
          />
        </div>
        <p className="uppercase py-5 text-gray-300">
          Started work.... - Ended...
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;