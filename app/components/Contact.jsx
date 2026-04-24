import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Contact = () => {

  const [result, setResult] = useState("");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <motion.div 
      id='contact' 
      className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.h4 variants={itemVariants} className='text-center mb-2 text-lg font-Ovo'>Connect with me</motion.h4>
      <motion.h2 variants={itemVariants} className='text-center text-5xl font-Ovo'>Get in touch</motion.h2>

      <motion.p variants={itemVariants} className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        I'd love to hear from you! If you have any questions, comments, or feedback, please use the form below.
      </motion.p>

      <motion.form 
        onSubmit={onSubmit} 
        className='max-w-2xl mx-auto'
        variants={itemVariants}
      >
        <motion.div 
          className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8'
          variants={containerVariants}
        >

          <motion.input 
            type="text" 
            placeholder='Enter your name' 
            required
            className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkTheme dark:border-white/30 dark:text-white dark:placeholder-gray-500' 
            name='name'
            variants={itemVariants}
            whileFocus={{ scale: 1.02, borderColor: '#000000' }}
          />

          <motion.input 
            type="email" 
            placeholder='Enter your email' 
            required
            className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkTheme dark:border-white/30 dark:text-white dark:placeholder-gray-500' 
            name='email'
            variants={itemVariants}
            whileFocus={{ scale: 1.02, borderColor: '#000000' }}
          />

        </motion.div>
        <motion.textarea 
          rows='6' 
          placeholder='Enter your message' 
          required
          className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkTheme dark:border-white/30 dark:text-white dark:placeholder-gray-500 mb-6' 
          name='message'
          variants={itemVariants}
          whileFocus={{ scale: 1.01, borderColor: '#000000' }}
        ></motion.textarea>

        <motion.button 
          type='submit'
          className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-darkHover dark:border-[0.5px] dark:border-white/30 dark:text-white dark:hover:bg-darkHover/80'
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        > 
          Submit now <Image src={assets.right_arrow_white} alt='' className='w-4' />
        </motion.button>

        <motion.p variants={itemVariants} className='mt-4'>{result}</motion.p>

      </motion.form>
    </motion.div>
  )
}

export default Contact
