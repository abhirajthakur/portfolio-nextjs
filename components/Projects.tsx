import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlForImage } from "../sanity";
import Link from "next/link";

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
      <h3 className="absolute top-24 uppercase tracking-[16px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x 
      snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#00FFFF]/75"
      >
        {projects.map((project, index) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 
                    items-center justify-center p-20 md:p-44 h-screen"
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
              width={500}
            />

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-2xl font-semibold text-center">
                <span className="underline decoration-[#00FFFF]/40">
                  Case Study {index + 1} of {projects.length}:
                </span>{" "}
                <Link href={project?.linkToSourceCode} target="_blank">
                  {project?.title}
                </Link>
              </h4>

              <div className="flex justify-center space-x-2">
                {project?.technologies.map((technology) => (
                  <img
                    className="h-7 w-7"
                    key={technology._id}
                    src={urlForImage(technology?.image).url()}
                    alt={technology?.name}
                  />
                ))}
              </div>

              <p className="text-lg text-center md:text-left">
                {project?.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[23%] bg-[#00FFFF]/10 left-0 h-[400px] -skew-y-12"></div>
    </motion.div>
  );
};

export default Projects;
