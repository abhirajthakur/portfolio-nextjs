import { motion } from "framer-motion";

type Props = {};

const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex flex-col overflow-hidden text-left md:flex-row 
        max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[16px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative top-24 w-full flex overflow-x-scroll overflow-y-hidden snap-x z-20">
        {projects.map((project, index) => (
          <div
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
              src="/web3godaddy.png"
              alt="Web3 Godaddy"
              width={500}
            />

            <div className="space-y-10 px-0 md:px-7 max-w-6xl">
              <h4 className="text-2xl font-semibold text-center">
                <span className="underline decoration-[#00FFFF]/40">
                  case study {index + 1} of {projects.length}:
                </span>{" "}
                Web3 Godaddy
              </h4>
              <p className="text-lg text-center md:text-left">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusantium aperiam eligendi animi! Veritatis dignissimos
                aspernatur iusto eos doloribus laborum ipsum quisquam! Dolor
                recusandae quaerat corrupti omnis laborum architecto doloribus,
                minus atque saepe assumenda expedita labore eos voluptatibus.
                Possimus quam omnis, nisi dolore cupiditate delectus hic eveniet
                fugiat, ullam exercitationem nemo?
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[25%] bg-[#00FFFF]/10 left-0 h-[400px] -skew-y-12"></div>
    </motion.div>
  );
};

export default Projects;
