import React from 'react'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { GithubIcon } from '@/components/Icons'
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";
import FP1 from "../../public/images/projects/FP1.png";
import FP2 from "../../public/images/projects/FP2.jpg";
import PJ1 from "../../public/images/projects/PJ1.png";
import PJ2 from "../../public/images/projects/PJ2.png";
import { motion } from 'framer-motion'
import TransitionsEffect from '@/components/TransitionsEffect'


const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github, technologies }) => {

    return (
        <article
            className='w-full flex items-center justify-between
            rounded-3xl border border-solid border-dark dark:border-light
            bg-light dark:bg-dark shadow-2xl p-12 dark:text-light
            hover:border-none
            hover:shadow-xl hover:shadow-dark hover:duration-200 dark:hover:shadow-light
            lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'
        >

            <Link href={link} target="_blank"
                className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'
            >
                <FramerImage src={img} alt={title} className='w-full h-auto'
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                />
            </Link>

            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-primary dark:text-primaryDark font-medium text-xl xs:text-base'>
                    {type}
                </span>

                <Link href={link} target="_blank"
                    className='hover:underline underline-offset-2'
                >
                    <h2 className='my-2 w-full text-left text-4xl font-bold md:text-xl xs:text-md'>
                        {title}
                    </h2>
                </Link>

                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>
                    {summary}
                </p>

                <div className='flex flex-wrap items-center justify-start my-2 font-medium text-dark dark:text-light sm:text-sm'>
                    {technologies.map((tech, index) => (
                        <span key={index} className='mr-2 mb-2 p-2 bg-gray-200 dark:bg-gray-700 rounded'>
                            {tech}
                        </span>
                    ))}
                </div>

                <div className='mt-2 flex items-center'>
                    <Link href={github} target="_blank" className='w-10'>
                        <GithubIcon />
                    </Link>
                    <Link href={link} target="_blank"
                        className='ml-4 rounded-lg bg-dark text-light
                        dark:bg-light dark:text-dark
                        p-2 px-6 text-lg font-semibold
                        sm:px-4 sm:text-base'
                    >
                        Visit Project
                    </Link>
                </div>
            </div>
        </article>
    )
};


const Project = ({ title, type, img, link, github, technologies }) => {
    return (
        <article
            className='w-full flex flex-col items-center justify-center rounded-2xl
            border border-solid border-dark bg-light p-6
            dark:border-light dark:bg-dark dark:text-light
            hover:border-none
            hover:shadow-xl hover:shadow-dark hover:duration-200
            dark:hover:shadow-light xs:p-4'
        >
            <Link href={link} target="_blank"
                className='w-full cursor-pointer overflow-hidden rounded-lg'
            >
                <FramerImage src={img} alt={title}
                    className='w-full h-auto'
                    priority
                    sizes="(max-width: 768px) 100vw,
                            (max-width: 1200px) 50vw,
                            33vw"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                />
            </Link>

            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary dark:text-primaryDark font-medium text-xl
                                 lg:text-lg md:text-base'
                >
                    {type}
                </span>

                <Link href={link} target="_blank"
                    className='hover:underline underline-offset-2'
                >
                    <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl md:text-xl xs:text-md'>
                        {title}
                    </h2>
                </Link>

                <div className='flex flex-wrap items-center justify-start my-2 font-medium text-dark dark:text-light sm:text-sm'>
                    {technologies.map((tech, index) => (
                        <span key={index} className='mr-2 mb-2 p-2 bg-gray-200 dark:bg-gray-700 rounded'>
                            {tech}
                        </span>
                    ))}
                </div>

                <div className='w-full mt-2 flex items-center justify-between'>
                    <Link href={link} target="_blank"
                        className='text-lg font-semibold underline md:text-base'
                    >
                        Visit
                    </Link>
                    <Link href={github} target="_blank" className='w-10 md:w-8'>
                        <GithubIcon />
                    </Link>
                </div>
            </div>
        </article>
    )
};


const projects = () => {
    return (
        <>
            <Head>
                <title>SahilGupta | Projects</title>
                <meta name='description' content='any description' />
            </Head>

            <TransitionsEffect />

            <main className='w-full mb-16 flex flex-col items-center justify-center'>
                <Layout className='pt-16'>
                    <AnimatedText text={"Imagination Triumphs Knowledge!"}
                        className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-10 sm:mt-8'
                    />

                    <div className='grid grid-cols-12 gap-24 gap-y-32
                                    xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'
                    >
                        <div className='col-span-12'>
                            <FeaturedProject
                                title={"Dream Nest"}
                                summary="DreamNest is is an online marketplace for short- and long-term home-stays and experiences and allows
                                 users to browse, search, and book properties with ease and ensures a seamless experience for both 
                                 property owners and prospective guests."
                                type={"Featured Project"}
                                img={FP1}
                                link={"https://github.com/s-g-69/dream_nest_project/tree/master"}
                                github={"https://github.com/s-g-69/dream_nest_project/tree/master"}
                                technologies={["React" , "Node" , "MongoDB", "Express" , "MUI" , "JWT"]}
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title={"AI Chat-Bot Powered By ChatGPT"}
                                type={"Project"}
                                img={PJ1}
                                link={"/"}
                                github={"/"}
                                technologies={["React" , "Node" , "Express" , "JWT" , "MUI" , "OpenAI API"]}
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title={"The Haweli Resort"}
                                type={"Project"}
                                img={PJ2}
                                link={"https://www.thehaweliresorts.in"}
                                github={"https://www.thehaweliresorts.in"}
                                technologies={["React" , "Redux" , "Tailwind"]}
                            />
                        </div>


                        <div className='col-span-12'>
                            <FeaturedProject
                                title={"Simple Ray Tracer in C++"}
                                summary="My implementation of a basic ray tracer, following the Ray Tracing in One Weekend series by 
                                Peter Shirley. The project is written in C++ and demonstrates fundamental concepts of ray tracing, 
                                including rendering, shading, and handling various materials."
                                type={"Featured Project"}
                                img={FP2}
                                link={"https://github.com/s-g-69/Simple_Raytracer_Cpp"}
                                github={"https://github.com/s-g-69/Simple_Raytracer_Cpp"}
                                technologies={["C++" , "C++ STL"]}
                            />
                        </div>
                        {/* <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title={"Crypto Screener Application"}
                                type={"Project"}
                                img={project1}
                                link={"/"}
                                github={"/"}
                                technologies={["C++" , "C++ STL"]}
                            />
                        </div> */}

                        {/* <div className='col-span-12'>
                            <FeaturedProject
                                title={"Dream Nest"}
                                summary="DreamNest is is an online marketplace for short- and long-term home-stays and experiences and allows
                                 users to browse, search, and book properties with ease and ensures a seamless experience for both 
                                 property owners and prospective guests."
                                type={"Featured Project"}
                                img={FP1}
                                link={"https://github.com/s-g-69/dream_nest_project/tree/master"}
                                github={"https://github.com/s-g-69/dream_nest_project/tree/master"}
                                technologies={["React" , "Node" , "MongoDB", "Express"]}
                            />
                        </div> */}

                    </div>
                </Layout>
            </main>
        </>
    )
}

export default projects;