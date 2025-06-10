import React from 'react'
import Banner2Png from "../../assets/images/intro.jpeg"
import { motion } from 'framer-motion'
import { FadeRight, FadeUp } from '../../utility/animation.jsx'

const Hero3 = () => {
    return (
        <>
            <section>
                <div className="grid grid-cols-1 lg:grid-cols-2 space-y-6 lg:space-y-0 py-10 md:py-24 p-3 lg:px-20 px-8">
                    {/* Banner Image */}
                    <div className='flex justify-center items-center'>                        
                        <motion.iframe 
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
                            src="https://www.youtube.com/embed/xLQtE9lGg54?si=-muIwk5v8Oa5JifY" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowfullscreen
                            className='w-[70%] h-full rounded-3xl'
                        >                        
                        </motion.iframe>
                    </div>    
                    <div className='flex flex-col justify-center'>
                        <div className='md:text-left space-y-4'>
                            <motion.h1
                                variants={FadeRight(0.5)}
                                initial="hidden"
                                whileInView="visible"
                                // viewport={{ once: true }}
                                className='text-3xl lg:text-5xl font-bold font-averia text-center text-primary border-b border-b-primary'>
                                Elegant commercial arcade
                            </motion.h1>
                            <motion.div 
                                variants={FadeUp(1)}
                                initial="hidden"
                                whileInView="visible"
                                // viewport={{ once: true }}
                                className='text-gray-500 indent-12 space-y-1 text-justify md:text-justify lg:text-start'
                            >
                                <p>
                                    Each home is a testament to extraordinary design and meticulous craftsmanship, promising a haven of grace and indulgence. From the majestic entryways to the sumptuous interiors, no element has been overlooked in crafting residences that radiate sophistication and luxury. With a diverse range of styles and dimensions, these homes cater to the most refined sensibilities, offering a lifestyle that seamlessly marries contemporary convenience with enduring elegance. Discover the zenith of residential excellence in every facet of your exclusive haven.
                                </p>
                            </motion.div>
                        </div>
                    </div>                
                </div>
            </section>
        </>
    )
}

export default Hero3
