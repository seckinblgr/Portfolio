"use client"
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion"
import { SparklesIcon } from "@heroicons/react/24/solid"
import {motion} from "framer-motion"

const SkillText = () => {
  return (
    <div className=' w-full h-auto flex flex-col items-center justify-center'>
        <motion.div
            variants={slideInFromTop}
            className="Welcome-box py-4 px-5 border-[#7042f88b] opacity-[0.9]"
            >
            <SparklesIcon className="text-[#b49bff] mr-4 h-5 w-5" />
            <h1 className="Welcome-text text-[16px]">Think better with NextJS 14  </h1>
            </motion.div>
            <motion.div 
            variants={slideInFromLeft(0.5)} className="text-[30px] text-white  font-medium mt-3 text-center mb-4"
            >
                Making apps with modern techs.
            </motion.div>
            <motion.div
            variants={slideInFromRight(0.5)}
            className="cursive text-[20px] text-gray-200 mb-3  mt-3 text-center">
                Never miss a task, or idea.
            </motion.div>
    </div>
  )
}

export default SkillText