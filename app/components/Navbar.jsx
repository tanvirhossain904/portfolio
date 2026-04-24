'use client';

import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = ({ isDarkMode, setIsDarkMode }) => {

    const [isScroll, setIsScroll] = useState(false);

    const sideMenuRef = useRef();

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)';
    }
    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)';
    }

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])


    return (
        <>
            {/* <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
                <Image src={assets.header_bg_color} alt="header background" className='w-full' />
            </div> */}

            <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
                <Image src={assets.header_bg_color} alt="header background" className='w-full' />
            </div>

            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 dark:bg-darkTheme dark:text-white ${isScroll ? 'bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:bg-opacity-50 dark:shadow-white/20' : 'dark:shadow-sm'}`}>
                <a href="#top">
                    <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='logo' className='w-28 cursor-pointer mr-14' />
                </a>
                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 dark:bg-darkHover dark:text-white dark:border dark:border-white/30 ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50 dark:shadow-white/10"}`}>
                    <li><a className='font-Ovo dark:text-white dark:hover:text-gray-200 transition' href="#top">Home</a> </li>
                    <li><a className='font-Ovo dark:text-white dark:hover:text-gray-200 transition' href="#about">About</a> </li>
                    <li><a className='font-Ovo dark:text-white dark:hover:text-gray-200 transition' href="#services">Services</a> </li>
                    <li><a className='font-Ovo dark:text-white dark:hover:text-gray-200 transition' href="#work">Work</a> </li>
                    <li><a className='font-Ovo dark:text-white dark:hover:text-gray-200 transition' href="#contact">Contact me</a> </li>

                </ul>

                <div className='flex items-center gap-4'>
                    <button onClick={toggleTheme} className='p-2 rounded hover:bg-gray-200 dark:hover:bg-darkHover/50'>
                        <Image src={assets.moon_icon} className='w-6 dark:hidden' alt="Toggle theme" />
                        <Image src={assets.sun_icon} className='w-6 hidden dark:block' alt="Toggle theme" />
                    </button>

                    <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50 dark:text-white dark:hover:bg-darkHover/30'>Contact 
                    <Image src={assets.arrow_icon} className='w-3 dark:hidden' alt="Contact" /><Image src={assets.arrow_icon_dark} className='w-3 hidden dark:block' alt="Contact" /></a>

                    <button className='block md:hidden ml-3 p-2 rounded hover:bg-gray-200 dark:hover:bg-darkHover/50' onClick={openMenu}>
                        <Image src={assets.menu_black} className='w-6 dark:hidden' alt="" />
                        <Image src={assets.menu_white} className='w-6 hidden dark:block' alt="" />
                    </button>
                </div>

                {/* - - - Mobile menu - - - */}

                <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white'>

                    <div className='absolute top-6 right-6' onClick={closeMenu}>
                        <Image src={assets.close_black} alt='close menu' className='w-5 cursor-pointer dark:hidden' />
                        <Image src={assets.close_white} alt='close menu' className='w-5 cursor-pointer hidden dark:block' />
                    </div>

                    <li><a className='font-Ovo dark:text-white dark:hover:text-gray-200 transition' onClick={closeMenu} href="#top">Home</a> </li>
                    <li><a className='font-Ovo dark:text-white dark:hover:text-gray-200 transition' onClick={closeMenu} href="#about">About</a> </li>
                    <li><a className='font-Ovo dark:text-white dark:hover:text-gray-200 transition' onClick={closeMenu} href="#services">Services</a> </li>
                    <li><a className='font-Ovo dark:text-white dark:hover:text-gray-200 transition' onClick={closeMenu} href="#work">Work</a> </li>
                    <li><a className='font-Ovo dark:text-white dark:hover:text-gray-200 transition' onClick={closeMenu} href="#contact">Contact me</a> </li> 
                </ul>

            </nav>
        </>
    )
}

export default Navbar
