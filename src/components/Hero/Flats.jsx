import React from 'react'
import Rubyw from "../../assets/images/ruby_wing_flat.png";
import Emeraldw from "../../assets/images/emerald_wing_flat.png";
import Pearlw from "../../assets/images/pearl_wing_flat.png";
import Topazw from "../../assets/images/topaz_wing_flat.png";
import { delay, motion } from "framer-motion";
import { FadeRight, FadeUp } from '../../utility/animation';
import { BiSolidArrowToRight } from 'react-icons/bi';

const MenusData = [
    {
        id: 1,
        title: "RUBY",
        link: "/",
        img: Rubyw,
        delay: 0.3,
        textdelay: 0.5,
        btndelay: 0.7,
    },
    {
        id: 2,
        title: "EMERALD",
        link: "/",
        img: Emeraldw,
        delay: 1,
        textdelay: 1.2,
        btndelay: 1.4,
    },
    {
        id: 3,
        title: "PEARL",
        link: "/",
        img: Pearlw,
        delay: 1.7,
        textdelay: 1.9,
        btndelay: 2.1,
    },
    {
        id: 4,
        title: "TOPAZ",
        link: "/",
        img: Topazw,
        delay: 2.4,
        textdelay: 2.6,
        btndelay: 2.8,
    },
]

const Flats = () => {
    return (
        <>
            <section className='bg-secondary/5'>
                <div className="pt-12 pb-20 p-3 lg:px-20 px-10">
                    <motion.h1
                        initial={{ opacity: 0, x: -200 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className='text-3xl text-primary border-b border-b-primary font-averia font-bold text-left'>
                        Isometric View of Flats
                    </motion.h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10'>
                        {MenusData.map((menu) => (
                            <motion.div
                                variants={FadeUp(menu.delay)}
                                initial="hidden"
                                whileInView={"visible"}
                                whileHover={{ scale: 1.2 }}
                                className='bg-primary/80 rounded-3xl px-4 py-2 shadow-[0_0_22px_0_rgba(0,0,0,0.15)]'>
                                <img src={menu.img} alt=""
                                    className='w-full h-[200px] mt-3 mb-4 scale-110'
                                />
                                <motion.div 
                                variants={FadeUp(menu.textdelay)} 
                                initial="hidden" 
                                whileInView={"visible"}
                                className="text-lg font-averia font-semibold text-center text-secondary place-items-baseline">
                                    <h1>Wing : {menu.title}</h1>
                                </motion.div>
                                {/* Button Section */}
                                <motion.div 
                                variants={FadeRight(menu.btndelay)} 
                                initial="hidden"
                                whileInView={"visible"}
                                className='flex justify-center'>
                                    <button className='details-btn flex items-center gap-2 mt-2 mb-2'>
                                        More Details
                                        <BiSolidArrowToRight />
                                    </button>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Flats
