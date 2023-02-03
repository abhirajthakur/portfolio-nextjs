import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    directionLeft?: boolean;
}

const Skill = (props: Props) => {
    return (
        <div className="group relative flex cursor-pointer">
            <motion.img
                initial={{
                    x: props.directionLeft ? -200 : 200,
                    opacity: 0,
                }}
                transition={{ duration: 1 }}
                whileInView={{
                    x: 0,
                    opacity: 1,
                }}
                src="/solidity-logo.png"
                className="rounded-full border border-gray-500 object-cover w-16 h-16 
                2xl:w-40 2xl:h-40 filter group-hover:invert transition duration-300 ease-in-out"
            />

            <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out 
            group-hover:bg-white w-16 h-16 2xl:w-40 2xl:h-40 rounded-full z-0">
                <div className="flex items-center justify-center h-full">
                    <p className="text-xl font-bold text-black opacity-100">100%</p>
                </div>
            </div>
        </div>
    )
}

export default Skill