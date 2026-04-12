import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Header = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  }

  return (
    <motion.div
      className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 pt-20'
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div>
        <motion.div variants={itemVariants}>
          <Image src={assets.profile_img} alt="" className='rounded-full w-32' />
        </motion.div>
      </div>
      <motion.h3 variants={itemVariants} className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo dark:text-white'>
        Hi, I'm Tanvir Hossain <Image src={assets.hand_icon} alt="" className='w-6' /> </motion.h3>

      <motion.h1 variants={itemVariants} className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo dark:text-white'>
        fullstack web developer based in Bangladesh.
      </motion.h1>

      <motion.p variants={itemVariants} className='max-w-2xl mx-auto font-Ovo dark:text-gray-300'>
        I build responsive and user-friendly web applications using the MERN stack, focusing on clean code and practical solutions.
      </motion.p>

      <motion.div variants={itemVariants} className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <a href="#contact"
          className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 hover:bg-gray-800 duration-500 dark:bg-transparent dark:border-white dark:text-white dark:hover:bg-white/10'>

          Contact me <Image src={assets.right_arrow_white} alt="" className='w-4' /></a>

       <a href="/Tanvir_Hossain-Resume.pdf" download 
    className='px-10 py-3 border border-gray-500 rounded-full flex items-center gap-2 bg-white text-black hover:bg-lightHover duration-500 dark:bg-white dark:border-white dark:text-black dark:hover:bg-gray-200'>
        my resume <Image src={assets.download_icon} alt="" className='w-4'/>
    </a>

      </motion.div>
    </motion.div>
  )
}

export default Header
