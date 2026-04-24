import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    }

    return (
        <motion.div 
            className='mt-20'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={containerVariants}
        >
            <motion.div className='text-center' variants={containerVariants}>
                <motion.div variants={itemVariants}>
                    <Image src={assets.logo} alt='' className='w-36 mx-auto mb-2 dark:hidden' />
                    <Image src={assets.logo_dark} alt='' className='w-36 mx-auto mb-2 hidden dark:block' />
                </motion.div>

                <motion.div variants={itemVariants} className='w-max flex items-center gap-2 mx-auto dark:text-gray-300'>
                    <Image src={assets.mail_icon} alt='' className='w-6 dark:hidden' />
                    <Image src={assets.mail_icon_dark} alt='' className='w-6 hidden dark:block' />
                    contact@tanvirH.com
                </motion.div>
            </motion.div>

            <motion.div 
                className='text-center sm:flex items-center justify-between border-t border-gray-400 dark:border-gray-600 mx-[10%] mt-12 py-6 dark:text-gray-300'
                variants={containerVariants}
            >
                <motion.p variants={itemVariants}>© 2026 Tanvir Hossain. All rights reserved.</motion.p>
                <motion.ul
                    className='flex items-center gap-10 justify-center mt-4 sm:mt-0'
                    variants={containerVariants}
                >
                    <motion.li variants={itemVariants} whileHover={{ y: -2 }}>
                        <a target='_blank' rel='noopener noreferrer' href="https://github.com/tanvirhossain904">GitHub</a>
                    </motion.li>
                    <motion.li variants={itemVariants} whileHover={{ y: -2 }}>
                        <a target='_blank' rel='noopener noreferrer' href="https://www.linkedin.com/in/tanvirwebdev/">LinkedIn</a>
                    </motion.li>
                    <motion.li variants={itemVariants} whileHover={{ y: -2 }}>
                        <a target='_blank' rel='noopener noreferrer' href="#">Facebook</a>
                    </motion.li>
                </motion.ul>
            </motion.div>
        </motion.div>
    )
}

export default Footer
