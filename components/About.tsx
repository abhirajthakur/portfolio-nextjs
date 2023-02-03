import { motion } from "framer-motion";

type Props = { image: string };

const About = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.2,
      }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row 
            max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        src={props.image}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
                md:rounded-full md:w-60 md:h-60"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here's a{" "}
          <span className="underline decoration-[#00FFFF]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          Hi 🙋️, I am Abhiraj Thakur and I am currently in the 6th semester of my B.Tech 
          course. I am enthusiastic about web3 and blockchain. 
          I have gained knowledge about blockchain and smart 
          contracts and now I want that knowledge to be applied 
          to real world. I eagerly want to get a job/internship 
          in web3 domain as a web3/solidity/blockchain developer 
          so that I can gain new skills and industry experience.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
