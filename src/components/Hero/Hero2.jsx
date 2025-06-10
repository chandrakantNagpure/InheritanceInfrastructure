// eslint-disable-next-line no-unused-vars
import React from 'react'
import Banner2Png from "../../assets/images/intro.jpeg"
import { motion } from 'framer-motion'
import { FadeRight, FadeUp } from '../../utility/animation.jsx'

const Hero2 = () => {
    return (
        <>
            <section className='bg-secondary/5'>
                <div className="grid grid-cols-1 lg:grid-cols-2 space-y-6 lg:space-y-0 py-10 md:py-24 p-3 lg:px-20 px-8">
                    <div className='flex flex-col justify-center'>
                        <div className='md:text-left space-y-4'>
                            <motion.h1
                                variants={FadeRight(0.5)}
                                initial="hidden"
                                whileInView="visible"
                                // viewport={{ once: true }}
                                className='text-3xl lg:text-5xl font-bold font-averia text-center text-primary border-b border-b-primary'>
                                A Roaring Project
                            </motion.h1>
                            <motion.div 
                                variants={FadeUp(1)}
                                initial="hidden"
                                whileInView="visible"
                                // viewport={{ once: true }}
                                className='text-gray-500 indent-12 space-y-1 text-justify md:text-justify lg:text-start'
                            >
                                <p>
                                    MB Infra is a distinguished real estate firm guided by a team of seasoned directors with over 22 years of valuable experience in the industry. Our illustrious journey has witnessed the successful sale of approximately 25 lakhs square feet of plotable land, as well as the construction of approximately 3,50,000 square feet of residential and commercial developments.We specialize in crafting exceptional commercial and residential buildings, driven by our commitment to excellence, innovation, and an unwavering dedication to delivering the finest real estate solutions. With a rich history of achievement and a relentless pursuit of excellence, MB INFRA is your trusted partner in building the future.Above all, we take great pride in having fulfilled the dreams of over 1800+ families & counting by providing them with their dream homes.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                    {/* Banner Image */}
                    <div className='flex justify-center items-center'>
                        <motion.img
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
                            // viewport={{ once: true }}
                            src={Banner2Png} alt="" className='w-[350px] md:max-w-[500px] h-[90%] object-cover drop-shadow rounded-3xl' />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero2
