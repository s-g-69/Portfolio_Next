import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import TransitionsEffect from '@/components/TransitionsEffect';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        description: "+916367470120",
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "sahilll03022003@gmail.com",
        link: "mailto:sahilll03022003@gmail.com",
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Address",
        description: "38, Lions Colony, Sita Bari, Jaipur, Rajasthan, IN",
    },
];

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        projectDescription: ''
    });
    const [popupVisible, setPopupVisible] = useState(false);

    const [state, handleSubmit] = useForm("mdknngvw");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await handleSubmit(e);
        if (state.succeeded) {
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                projectDescription: ''
            });
            setPopupVisible(true);
        }
    };

    const closePopup = () => {
        setPopupVisible(false);
    };

    return (
        <>
            <Head>
                <title>SahilGupta | Contact</title>
                <meta name='description' content='Contact page description' />
            </Head>
            <TransitionsEffect />
            <main className='flex items-center text-dark w-full min-h-screen dark:text-light dark:bg-dark'>
                <Layout className='pt-16'>
                    <AnimatedText
                        text={"Hello! Let's Connect"}
                        className='mb-16 lg:text-7xl sm:text-6xl xs:text-4xl sm:mb-10 sm:mt-8'
                    />
                    <motion.section
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1,
                            transition: { delay: 0.8, duration: 0.4, ease: "easeIn" }
                        }}
                    >
                        <div className='container mx-auto'>
                            <div className='flex flex-row md:flex-col 2xl:flex-row gap-30'>

                                <div className='order-1 xl:order-none w-1/2 md:w-full overflow-x-auto md:order-2'>
                                    <form
                                        className='flex flex-col gap-6 p-10 rounded-xl bg-slate-300 dark:bg-[#27272c] xl:mt-4'
                                        onSubmit={onSubmit}
                                    >
                                        <h3 className='text-4xl sm:text-2xl dark:text-primaryDark text-dark'>
                                            Let&apos;s Work Together
                                        </h3>
                                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                            <input
                                                type='text'
                                                name='name'
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                placeholder='Your Name'
                                                required
                                                className='flex h-[48px] rounded-md border border-dark/20 
                                                        focus:border-primary font-light bg-light px-4 py-5
                                                        text-base placeholder:text-dark/60 outline-none
                                                        dark:bg-dark dark:focus:border-green-300 focus:border-[1px]
                                                        dark:placeholder:text-light/60 dark:border-light/20'
                                            />
                                            <input
                                                type='email'
                                                name='email'
                                                required
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                placeholder='Email'
                                                className='flex h-[48px] rounded-md border border-dark/20 
                                                        focus:border-primary font-light bg-light px-4 py-5
                                                        text-base placeholder:text-dark/60 outline-none
                                                        dark:bg-dark dark:focus:border-green-300 focus:border-[1px]
                                                        dark:placeholder:text-light/60 dark:border-light/20'
                                            />
                                            <input
                                                type='tel'
                                                name='phone'
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                placeholder='Phone'
                                                className='flex h-[48px] rounded-md border border-dark/20 
                                                        focus:border-primary font-light bg-light px-4 py-5
                                                        text-base placeholder:text-dark/60 outline-none
                                                        dark:bg-dark dark:focus:border-green-300 focus:border-[1px]
                                                        dark:placeholder:text-light/60 dark:border-light/20'
                                            />
                                            <input
                                                type='text'
                                                name='subject'
                                                value={formData.subject}
                                                onChange={handleInputChange}
                                                placeholder='Subject'
                                                className='flex h-[48px] rounded-md border border-dark/20 
                                                        focus:border-primary font-light bg-light px-4 py-5
                                                        text-base placeholder:text-dark/60 outline-none
                                                        dark:bg-dark dark:focus:border-green-300 focus:border-[1px]
                                                        dark:placeholder:text-light/60 dark:border-light/20'
                                            />
                                        </div>

                                        <textarea
                                            name='projectDescription'
                                            value={formData.projectDescription}
                                            onChange={handleInputChange}
                                            placeholder='Type your message here.'
                                            rows='4'
                                            className=' h-[200px] flex min-h-[80px] rounded-md border border-white/20
                                                        dark:bg-dark dark:placeholder:text-light/60
                                                        bg-light px-4 py-5 text-base placeholder:text-dark/60 
                                                        focus-visible:outline-none focus-visible:ring-1
                                                        focus-visible:ring-primary   focus-visible:ring-offset-0
                                                        dark:focus-visible:ring-green-300 focus:border-2
                                                        disabled:cursor-not-allowed disabled:opacity-50'
                                        />
                                        <ValidationError 
                                            prefix="Message" 
                                            field="projectDescription"
                                            errors={state.errors}
                                        />
                                        <button type='submit' disabled={state.submitting}
                                            className=' max-w-40 bg-primary/75 dark:bg-green-300 text-dark font-semibold 
                                                            p-2 rounded-full hover:bg-green-300 dark:hover:bg-primary'>
                                            Send Message
                                        </button>
                                    </form>
                                </div>
                                <div className='flex flex-1 items-center justify-end order-2 
                                                xl:order-none mb-8 xl:mb-0 xl:mt-4 md:my-8 xs:my-20 
                                                xl:px-4 md:justify-start 2xl:justify-center md:order-1'>
                                    <div className='flex flex-col gap-4 overflow-x-auto'>
                                        {info.map((item, index) => (
                                            <div key={index} className='flex gap-4 items-center justify-start xs:text-sm'>
                                                <div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-slate-300
                                                                xs:h-[52px] xs:w-[52px] dark:bg-[#27272c] text-primary
                                                                2xl:w-[72px] 2xl:h-[72px]
                                                                dark:text-green-300 rounded-md flex items-center justify-center'>
                                                    {item.icon}
                                                </div>
                                                <div>
                                                    <p className='text-dark/50 dark:text-light/50 text-wrap'>{item.title}</p>
                                                    {item.link ? (
                                                        <a
                                                            href={`${item.link}`}
                                                            target="_blank"
                                                            className='text-dark dark:text-light'
                                                        >
                                                            {item.description}
                                                        </a>
                                                    ) : (
                                                        <p className='text-dark dark:text-light text-wrap'>{item.description}</p>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.section>
                </Layout>
                {popupVisible && (
                    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
                        <div className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center'>
                            <p className='mb-4'>Thanks for reaching out! We&apos;ll get back to you soon.</p>
                            <button onClick={closePopup} className='bg-primary text-white px-4 py-2 rounded-md'>
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </main>
        </>
    );
};

export default Contact;
