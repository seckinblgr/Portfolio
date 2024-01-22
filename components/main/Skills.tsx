import React from 'react'
import { Backend_skill, Frontend_skill, Full_stack, Other_skill } from '@/constants'
import SkillDataProvider from '../sub/SkillDataProvider'
import SkillText from '../sub/SkillText'
const Skills = () => {
  return (
    <section id='skills' className=' flex flex-col ic justify-center gap-8 h-full overflow-hidden py-20  pb-10' style={{transform:"scale(0.9)"}}>
       <SkillText />
        <div className='flex  flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
        {Frontend_skill.map((image,index) => (
            <SkillDataProvider 
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
            />
        ))}
        </div>
        <div className='flex  flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
        {Backend_skill.map((image,index) => (
            <SkillDataProvider 
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
            />
        ))}
        </div>
        <div className='flex  flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
        {Full_stack.map((image,index) => (
            <SkillDataProvider 
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
            />
        ))}
        </div>
        <div className='w-full h-full absolute'>
            <div className=' w-full h-full z-[-10] opacity-40 absolute items-center flex  justify-center bg-cover'>
            <video className=' w-full  h-auto' preload='false' playsInline
            loop
            muted
            autoPlay
            src='/cards-video.webm'>

            </video>
            </div>
        </div>
    </section>
  )
}

export default Skills