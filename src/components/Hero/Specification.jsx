import React from 'react'
import { motion } from "framer-motion";
import { FadeRight } from '../../utility/animation';

const Specification = () => {
    return (
        <>
            <section className="bg-secondary/5">
                <div className="pt-12 pb-12 p-3 lg:px-20 px-10">
                    <motion.h1
                        initial={{ opacity: 0, x: -200 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className='text-4xl text-primary font-averia font-bold text-center'>
                        Specification
                    </motion.h1>
                    <motion.h1
                        initial={{ opacity: 0, x: -200 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className='mt-4 text-lg text-secondary border-b border-b-primary font-averia font-bold text-center uppercase'>
                        The inside story of your paradise
                    </motion.h1>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mt-3'>
                        <motion.div  
                        initial={{ opacity: 0, x: -200 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 1 }}
                        >
                            <h1 className='text-secondary font-bold text-lg'>STRUCTURE</h1>
                            <p className='pb-2'>Earthquake Resistance R.C.C. Frame Structure.</p>

                            <h1 className='text-secondary font-bold text-lg'>WALLS</h1>
                            <p>External walls upto 150mm thick.</p>
                            <p className='pb-2'>Internal walls upto 115mm thick.</p>

                            <h1 className='text-secondary font-bold text-lg'>PLASTER</h1>
                            <p>All internal walls to be plastered with 12mm fanti plaster.</p>
                            <p className="pb-2">External walls with double coat plaster.</p>

                            <h1 className='text-secondary font-bold text-lg'>FLOORING</h1>
                            <p>2'x4' vitrified / 32" x 32" vitrified tiles for all floors or equivalent specification.</p>
                            <p>Toilet wall tiles upto 7' height.</p>
                            <p className="pb-2">Flooring tile of anti-skid type for all floor of toilets.</p>
                            
                            <h1 className='text-secondary font-bold text-lg'>WINDOWS</h1>
                            <p className="pb-2">Powder coated Aluminium sliding windows with MS safety grills.</p>
                            
                            <h1 className='text-secondary font-bold text-lg'>DOORS</h1>
                            <p>Secure OR equivalent quality door for main door.</p>
                            <p>Flushed door with both side laminated for all internal doors.</p>
                            <p className="pb-2">PVC or sintex door for toilets.</p>
                            
                            <h1 className='text-secondary font-bold text-lg'>PAINTING</h1>
                            <p>Internal wall of all the rooms to be putty finished & painted in plastic emulsion.</p>
                            <p className="pb-2">All External walls to be painted in weather proof / Apex paint.</p>
                        </motion.div>
                        <motion.div 
                        initial={{ opacity: 0, x: -200 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 2 }}
                        >
                            <h1 className='text-secondary font-bold text-lg'>KITCHEN</h1>
                            <p>Modular kitchen with granite counter having stainless steel sink.</p>
                            <p className="pb-2">Glazed ceramic tiles upto lintle level, power point for fridge, oven, chimney & water purifier.</p>

                            <h1 className="text-secondary font-bold text-lg">ELECTRICAL</h1>
                            <p>Wires - Polycabs, KEI, Anchor or equivalent ISI mark quality wires would be provided.</p>
                            <p className="pb-2">Switches - Anchor Roma, Grate white or equivalent ISI mark quality would be provided.</p>
                            
                            <h1 className="text-secondary font-bold text-lg">SOLAR PANEL</h1>
                            <p className="pb-2">Solar panel for common area, water pumps and lift will be provided.</p>
                            
                            <h1 className="text-secondary font-bold text-lg">LIFT</h1>
                            <p className="pb-2">Automatic branded lifts with power backup will be provided.</p>
                            
                            <h1 className="text-secondary font-bold text-lg">WATER SUPPLY</h1>
                            <p className="pb-2">Overhead water tank with corporation water supply 24x7.</p>
                            
                            <h1 className="text-secondary font-bold text-lg">PARKING</h1>
                            <p className="pb-2">Alloted car parking for each flat.</p>
                            
                            <h1 className="text-secondary font-bold text-lg">PLUMBING & SANITARY</h1>
                            <p className="pb-2">Plumbing, Sanitary & C.P. fitting would be provided like Jaguar, Cera or equivalent.</p>
                            
                            <div className='bg-secondary p-2 rounded-lg leading-3'>
                                <span className='font-bold text-white/90'>NOTE : </span>
                                <span className='text-xs text-white/85'>Expenses towards the electric meter connection, meter deposit, water meter connection & deed expenses including registration fees, stamp duty, lawyer fees and GST shall be payable extra by the flat owners.</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Specification
