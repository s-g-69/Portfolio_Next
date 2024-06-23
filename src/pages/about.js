import React, { useEffect, useRef } from 'react'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from '../../public/images/profile/my_img.jpg'
import { motionValue, useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import TransitionsEffect from '@/components/TransitionsEffect'


const AnimatedNumbers = ({ value }) => {
    const ref = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        if (inView) {
            motionValue.set(value);
        }
    }, [inView, value, motionValue]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        })
    }, [springValue, value]);


    return <span ref={ref}></span>
}


const about = () => {
    return (
        <>
            <Head>
                <title>Sahil Gutpa | About Page</title>
                <meta name='description' content='any description' />
            </Head>

            <TransitionsEffect />

            <main className=' w-full flex flex-col items-center justify-center'>
                <Layout className='pt-16'>
                    <AnimatedText text={"Fueling Purpose with Unbridled Passion!."}
                        className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'
                    />
                    <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>

                        <div className='col-span-3 flex flex-col items-start justify-start
                                         dark:text-light xl:col-span-4 md:order-2 md:col-span-8'>
                            <h2 className='mb-4 text-xl font-bold uppercase text-dark/75 dark:text-light/75'>
                                Biography
                            </h2>

                            <p className='font-medium'>
                                - Hi, I'm Sahil Gupta, a web developer, programmer and UI/UX designer passionate about crafting beautiful,
                                functional, and user-centric digital experiences. With 0-1 years of experience, I eagerly explore innovative
                                ways to bring my clients' visions to life.

                            </p>

                            <p className='my-4 font-medium'>
                                - To me, design is more than aesthetics – it's about solving problems and creating seamless, enjoyable user
                                experiences. Whether it's a website, mobile app, or any digital product, I strive for design excellence and
                                user-focused solutions in every project.
                            </p>

                            <p className='font-medium'>
                                - I'm excited to bring my skills and passion to your next project, fueled by my commitment to a healthy
                                lifestyle that includes running and mindfulness. This dedication enhances my creativity and drive to deliver
                                exceptional digital solutions.
                            </p>
                        </div>

                        <div
                            className='col-span-3 relative h-max rounded-2xl 
                            border-2 border-solid border-dark bg-light 
                            p-8 max-w-full overflow-hidden bg-cover bg-no-repeat
                            dark:bg-dark dark:border-light 
                            dark:border-t-[1px] dark:border-l-[1px]
                            dark:border-b-[10px] dark:border-r-[10px]
                            xl:col-span-4 md:order-1 md:col-span-8'
                        >

                            <Image src={profilePic} alt="Developer" className='w-full h-auto rounded-2xl'
                                priority
                                sizes="(max-width: 768px) 100vw,
                                    (max-width: 1200px) 50vw,
                                    33vw"
                            />

                            <div
                                className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden 
                                bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 
                                transition duration-300 ease-in-out hover:opacity-70"
                            >
                            </div>
                        </div>

                        <div className='col-span-2 flex flex-col items-end justify-between dark:text-light
                                        xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                    0<AnimatedNumbers value={3} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75
                                                xl:text-center md:text-lg sm:text-base xs:text-sm'>
                                    Satisfied clients
                                </h2>
                            </div>

                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <AnimatedNumbers value={10} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75
                                                xl:text-center md:text-lg sm:text-base xs:text-sm'>
                                    Projects Completed
                                </h2>
                            </div>

                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                    0<AnimatedNumbers value={1} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75
                                                xl:text-center md:text-lg sm:text-base xs:text-sm'>
                                    Years of experience
                                </h2>
                            </div>
                        </div>

                    </div>

                    <Skills />

                    <Experience />

                    <Education />

                </Layout>
            </main>
        </>
    )
}

export default about;
