import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import { motion, useMotionValue } from 'framer-motion'
import article1 from "../../public/images/articles/pagination component in reactjs.jpg"
import article2 from "../../public/images/articles/create loading screen in react js.jpg"
import article3 from "../../public/images/articles/create modal component in react using react portals.png"
import TransitionsEffect from '@/components/TransitionsEffect'


const FramerImage = motion(Image);

const MovingImage = ({ img, title, link }) => {

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imgRef = useRef(null);

    function handleMouse(event) {
        imgRef.current.style.display = "inline-block";
        x.set(event.pageX);
        y.set(-10);
    }

    function handleMouseLeave(event) {
        imgRef.current.style.display = "none";
        x.set(0);
        y.set(0);
    }

    return (
        <Link
            href={link}
            target="_blank"
            onMouseMove={handleMouse}
            onMouseLeave={handleMouseLeave}
        >
            <h2 className='capitalize text-xl font-semibold hover:underline xs:!text-lg'>
                {title}
            </h2>
            <FramerImage
                style={{ x: x, y: y }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
                ref={imgRef}
                src={img}
                alt={title}
                className='z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden xs:!hidden' />
        </Link>
    )
}

const FeaturedArticle = ({ img, title, time, summary, link }) => {
    return (
        <li className='col-span-1 w-full p-4 bg-light border-2 border-solid border-dark rounded-2xl relative
            dark:bg-dark dark:border-light
            hover:shadow-xl hover:shadow-dark hover:duration-100 mt-4 border-b-[12px] border-r-[12px] hover:border-none
            dark:hover:shadow-light dark:border-b-2 dark:border-r-2'
        >

            <div className='absolute top-0 -right-3 -z-[100] w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl' />

            <Link
                href={link}
                target="_blank"
                className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'
            >
                <FramerImage src={img} alt={title} className='w-full h-auto'
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    priority
                    sizes="(max-width: 768px) 100vw,
                            (max-width: 1200px) 50vw,
                            33vw"
                />
            </Link>
            <Link
                href={link}
                target="_blank">
                <h2
                    className='capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg'
                >
                    {title}
                </h2>
            </Link>

            <p className='text-sm mb-2'>{summary}</p>
            <span className='text-primary dark:text-primaryDark font-semibold' >{time}</span>
        </li>
    )
}

const Article = ({ img, title, date, link }) => {
    return (
        <motion.li
            initial={{ y: 150 }}
            whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
            viewport={{ once: true }}
            className=' relative w-full p-4 py-6 my-6 rounded-xl flex items-center
            justify-between bg-light text-dark first:mt-0 border border-solid border-dark
            border-r-4 border-b-4 dark:bg-dark dark:text-light dark:border-light
            sm:flex-col'
        >
            <MovingImage img={img} title={title} link={link} />
            <span
                className='text-primary dark:text-primaryDark font-semibold pl-4 
                            sm:self-start sm:pl-0 xs:text-sm xs:pt-2'
            >
                {date}
            </span>
        </motion.li>
    )
}

const articles = () => {
    return (
        <>
            <Head>
                <title>Sahil Gutpa | Articles Page</title>
                <meta name='description' content='any description' />
            </Head>

            <TransitionsEffect />

            <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text={"Words Can Change The World!"}
                        className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-10 sm:mt-8'
                    />
                    <ul className='grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16'>
                        <FeaturedArticle
                            title="Build A Custom Pagination Component In Reactjs From Scratch"
                            summary="Learn how to build a custom pagination component in ReactJS from scratch.
                            Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
                            time="9 min read"
                            link={"/"}
                            img={article1}
                        />
                        <FeaturedArticle
                            title="Build A Custom Pagination Component In Reactjs From Scratch"
                            summary="Learn how to build a custom pagination component in ReactJS from scratch.
                            Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
                            time="9 min read"
                            link={"/"}
                            img={article2}
                        />
                    </ul>
                    <h2 className='font-bold text-4xl w-full text-center my-16 mt-32'>All Articles</h2>
                    <ul>
                        <Article
                            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                            date="June 8, 2024"
                            link="/"
                            img={article3}
                        />
                        <Article
                            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                            date="June 8, 2024"
                            link="/"
                            img={article2}
                        />
                        <Article
                            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                            date="June 8, 2024"
                            link="/"
                            img={article1}
                        />
                        <Article
                            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                            date="June 8, 2024"
                            link="/"
                            img={article3}
                        />
                        <Article
                            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                            date="June 8, 2024"
                            link="/"
                            img={article1}
                        />
                    </ul>
                </Layout>
            </main>
        </>
    )
}

export default articles
