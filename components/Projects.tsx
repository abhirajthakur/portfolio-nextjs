import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlForImage } from "../sanity";
import Link from "next/link";
import Image from "next/image";

type Props = { projects: Project[] };

const Projects = ({ projects }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row 
        max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-20 uppercase tracking-[16px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x 
      snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 
      scrollbar-thumb-[#00FFFF]/75"
      >
        {projects.map((project, index) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 
            items-center justify-center p-[4.5rem] xl:p-20 h-screen"
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={urlForImage(project?.image).url()}
              alt={project?.title}
              onClick={() => window.open(project?.linkToBuild, "_blank")}
              width={650}
              className="p-36 pb-0 lg:p-28 lg:pb-0 cursor-pointer"
            />

            <div className="space-y-3">
              <h4 className="text-2xl font-bold text-center">
                <span className="underline decoration-[#00FFFF]/40">
                  Case Study {index + 1} of {projects.length}:
                </span>{" "}
                <Link href={project?.linkToSourceCode} target="_blank">
                  {project?.title}
                </Link>
              </h4>

              <div className="flex justify-center space-x-2">
                {project?.technologies.map((technology) => (
                  <Image
                    key={technology._id}
                    src={urlForImage(technology?.image).url()}
                    alt={technology?.name}
                    width={30}
                    height={30}
                  />
                ))}
              </div>

              <p className="text-lg text-center md:text-justify">
                {project?.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#00FFFF]/10 left-0 h-[500px] -skew-y-12 -z-30"></div>
    </motion.div>
  );
};

export default Projects;
