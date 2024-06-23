import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { useRouter } from 'next/router';
import { DribbbleIcon, GithubIcon, LinkedInIcon, MoonIcon, PinterestIcon, SunIcon, TwitterIcon } from './Icons';
import { motion } from 'framer-motion';
import useThemeSwitch from './hooks/useThemeSwitch';

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${isMounted && router.asPath === href ? 'w-full' : 'w-0'} dark:bg-light`}>
        &nbsp;
      </span>
    </Link>
  );
};

const MobileCustomLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
      {title}
      <span className={`h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'} dark:bg-dark`}>
        &nbsp;
      </span>
    </button>
  );
};

const Navbar = () => {
  const [mode, setMode] = useThemeSwitch();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null); // Add a ref for the close button

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && !buttonRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8'>
      <button
        ref={buttonRef} // Assign ref to the button
        className='flex-col justify-center items-center hidden lg:flex'
        onClick={handleClick}
      >
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`} />
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`} />
      </button>

      <div className='flex w-full justify-between items-center lg:hidden'>
        <nav>
          <CustomLink href="/" title={"Home"} className='mr-4' />
          <CustomLink href="/about" title={"About"} className='mx-4' />
          <CustomLink href="/projects" title={"Projects"} className='mx-4' />
          <CustomLink href="/contact" title={"Contact"} className='ml-4' />
        </nav>

        <nav className='flex items-center justify-center flex-wrap'>
          <motion.a href="https://x.com" target={"_blank"} whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }} className='w-6 mr-3'>
            <TwitterIcon />
          </motion.a>

          <motion.a href="https://github.com/s-g-69" target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className='w-6 mx-3'>
            <GithubIcon />
          </motion.a>

          <motion.a href="https://www.linkedin.com/in/sahil-gupta-5b4a42284/" target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className='w-6 mx-3'>
            <LinkedInIcon />
          </motion.a>

          <motion.a href="https://pinterest.com" target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className='w-6 mx-3 bg-light rounded-full'>
            <PinterestIcon />
          </motion.a>

          <motion.a href="https://dribbble.com" target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className='w-6 m-3'>
            <DribbbleIcon />
          </motion.a>

          <button onClick={() => setMode(mode === "light" ? "dark" : "light")} className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}>
            {mode === "dark" ? <SunIcon className={"fill-dark"} /> : <MoonIcon className={"fill-dark"} />}
          </button>
        </nav>
      </div>

      {isOpen && (
        <motion.div
          ref={menuRef}
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className='min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32'
        >
          <nav className='flex flex-col items-center justify-center'>
            <MobileCustomLink href="/" title={"Home"} toggle={handleClick} />
            <MobileCustomLink href="/about" title={"About"} toggle={handleClick} />
            <MobileCustomLink href="/projects" title={"Projects"} toggle={handleClick} />
            <MobileCustomLink href="/contact" title={"Contact"} toggle={handleClick} />
          </nav>

          <nav className='flex items-center justify-center flex-wrap mt-2'>
            <motion.a href="https://x.com" target={"_blank"} whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }} className='w-6 mr-3 sm:mx-1'>
              <TwitterIcon />
            </motion.a>

            <motion.a href="https://github.com/s-g-69" target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className='w-6 mx-3 bg-light rounded-full dark:bg-dark sm:mx-1'>
              <GithubIcon />
            </motion.a>

            <motion.a href="https://www.linkedin.com/in/sahil-gupta-5b4a42284/" target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className='w-6 mx-3 sm:mx-1'>
              <LinkedInIcon />
            </motion.a>

            <motion.a href="https://pinterest.com" target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className='w-6 mx-3 bg-light rounded-full sm:mx-1'>
              <PinterestIcon />
            </motion.a>

            <motion.a href="https://dribbble.com" target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className='w-6 m-3 sm:mx-1'>
              <DribbbleIcon />
            </motion.a>

            <button onClick={() => setMode(mode === "light" ? "dark" : "light")} className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}>
              {mode === "dark" ? <SunIcon className={"fill-dark"} /> : <MoonIcon className={"fill-dark"} />}
            </button>
          </nav>
        </motion.div>
      )}

      <div className='absolute left-[50%] top-4 translate-x-[-50%]'>
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
