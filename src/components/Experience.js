import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({ position, company, companyLink, time, address, work }) => {

    const ref = useRef(null);

    return (
        <li ref={ref}
            className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between
                        md:w-[80%]'
        >

            <LiIcon reference={ref} />

            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
                className='dark:text-light'
            >
                <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
                    {position}&nbsp;
                    <a
                        href={companyLink}
                        target="_blank"
                        className='capitalize text-primary dark:text-primaryDark'
                    >
                        @{company}
                    </a>
                </h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm pt-2'>
                    {time} | {address}
                </span>
                <p className='font-medium w-full md:text-sm pt-1'>
                    {work}
                </p>
            </motion.div>
        </li>
    )
}


const Experience = () => {

    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    })

    return (
        <div className='my-64'>

            <h2 className='font-bold text-8xl mb-32 w-full text-center
                         dark:text-light md:text-6xl sm:text-4xl md:mb-16'>
                Experience
            </h2>

            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

                <motion.div
                    className='absolute left-9 top-1 w-[4px] h-full bg-dark origin-top dark:bg-light
                                md:w-[2px] md:left-[30px] xs:left-[20px]'
                    style={{ scaleY: scrollYProgress }}
                />

                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                    <Details
                        position={"React Developer Intern"}
                        company={"GradUp"}
                        companyLink={"www.google.com"}
                        time={"Dec, 2023 - May, 2024"}
                        address={"Remote."}
                        work="Collaborated with an enthusiastic team of developers to bring responsive frontend designs to life, ensuring
                                seamless functionality that delights our clients."
                    />

                    <Details
                        position={"Cyber Security Intern"}
                        company={"CDAC, Noida"}
                        companyLink={"www.google.com"}
                        time={"May, 2024 - July, 2024"}
                        address={"Remote"}
                        work="As a Cybersecurity Intern, I gained hands-on experience in DNS server administration, conducted attack
                         simulations, and developed robust defense strategies to safeguard organizational assets."
                    />
                </ul>
            </div>

        </div>
    )
}

export default Experience;