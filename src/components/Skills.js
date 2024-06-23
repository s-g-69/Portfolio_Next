import React from 'react'
import { motion } from 'framer-motion'


const Skill = ({ name, x, y }) => {
    return (
        <motion.div
            className='flex items-center justify-center rounded-full font-semibold bg-dark text-light 
                        py-3 px-6 shadow-dark cursor-pointer absolute dark:bg-light dark:text-dark
                        lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
                        xs:text-dark xs:dark:text-light xs:font-bold xs:underline'
            whileHover={{
                scale: 1.1,
            }}
            initial={{ x: 0, y: 0 }}
            whileInView={{ x: x, y: y, transition: { duration: 1.0 } }}
            viewport={{ once: true }}
        >
            {name}
        </motion.div>
    )
}


const Skills = () => {
    return (
        <>
            <h2 className='font-bold text-8xl mt-64 mb-4 w-full text-center dark:text-light
                            md:text-6xl md:mt-32'>
                Skills
            </h2>
            <div className='w-full h-screen relative flex items-center justify-center rounded-full
                            bg-circularLight dark:bg-circularDark
                            lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
                            lg:bg-circularLightLg lg:dark:bg-circularDarkLg
                            md:bg-circularLightMd md:dark:bg-circularDarkMd
                            sm:bg-circularLightSm sm:dark:bg-circularDarkSm'>
                <motion.div
                    className='flex items-center justify-center rounded-full font-semibold bg-dark text-light 
                                p-8 shadow-dark cursor-pointer dark:bg-light dark:text-dark
                                lg:p-6 md:p-4 xs:text-xs xs:p-2'
                    whileHover={{
                        scale: 1.1,
                    }}
                >
                    Web
                </motion.div>

                {/* Y-axis */}
                <Skill name={"CSS"} x="0vw" y={"-12vw"} />
                <Skill name={"Javascript"} x="12vw" y={"-18vw"} />
                <Skill name={"HTML"} x="-12vw" y={"-18vw"} />
                <Skill name={"SQL"} x="0vw" y={"12vw"} />
                <Skill name={"Redux"} x="-12vw" y={"18vw"} />
                <Skill name={"Firebase"} x="12vw" y={"18vw"} />

                {/* X-axis */}
                <Skill name={"ExpressJS"} x="-24vw" y={"6vw"} />
                <Skill name={"MongoDB"} x="-24vw" y={"-6vw"} />
                <Skill name={"NodeJS"} x="24vw" y={"6vw"} />
                <Skill name={"ReactJS"} x="24vw" y={"-6vw"} />
            </div>
        </>
    )
}

export default Skills
