import { motion } from "framer-motion";

type Props = { image: string };

const About = (props: Props) => {
    return (
        <motion.div
            initial={{
                opacity: 0
            }}
            whileInView={{
                opacity: 1
            }}
            transition={{
                duration: 1.5
            }}
            className="flex flex-col relative h-screen text-center md:text-left md:flex-row
        max-w-7xl px-10 justify-evenly mx-auto items-center">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                About
            </h3>

            <motion.img
                initial={{
                    x: -200,
                    opacity: 0
                }}
                transition={{
                    duration: 1.2
                }}
                whileInView={{
                    x: 0,
                    opacity: 1
                }}
                viewport={{ once: true }}
                src={props.image}
                className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
                md:rounded-md md:w-64 md:h-60"
            />
            <div className="space-y-10 px-0 md:px-10">
                <h4 className="text-4xl font-semibold">Here's a <span className="underline decoration-[#00FFFF]/50">little</span> background</h4>
                <p className="text-base">Hi 🙋️, I'm Abhiraj Thakur, currently in 3rd year of my college. I eagerly want to become a Web3/Blockchain developer because I find Web3 very interesting.</p>
            </div>
        </motion.div>
    )
}

export default About;