import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

type Props = { image: string };

const WorkExperience = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative overflow-hidden text-left md:flex-row
        max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>

      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory">
        <ExperienceCard image={props.image} />
        <ExperienceCard image={props.image} />
        <ExperienceCard image={props.image} />
        <ExperienceCard image={props.image} />
      </div>
    </motion.div>
  );
};

export default WorkExperience;
