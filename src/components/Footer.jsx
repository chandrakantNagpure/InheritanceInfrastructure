// eslint-disable-next-line no-unused-vars
import React from 'react'

const Footer = () => {
    return (
        <>
            {/* <section className="bg-primary opacity-60 pt-1 pb-2"> */}
                
                {/* <p className='w-[90%] mx-auto text-center mt-2 text-base text-white'> */}
                    {/* © Copyright 2024 by Electo Systems */}
                    {/* Designed & Developed By <span className='text-xl font-averia'>Electo Systems</span> */}
                {/* </p> */}
            {/* </section> */}



            <footer className="bg-gray-800 text-white py-8">
                <div className="w-[90%] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-[50%_25%_25%] gap-8 text-left md:text-left">
                        {/* Address Section */}
                        <div>
                            <h2 className="text-xl font-normal mb-2 border-b-2 border-yellow-500 inline-block pb-1">Contact Us</h2>
                            <p>Plot No. 25, Sadan Housing Society, Anu Jyoti Apartment, Old Sneh Nagar, Near Santaji College,</p>
                            <p>Nagpur, Maharashtra- 440015, India.</p>
                            <p>Email: properties@inheritanceinfra.in, inheritanceinfra@gmail.com</p>
                            <p>Phone: (+91) 7887860121</p>
                        </div>

                        {/* Social Media Links */}
                        <div>
                            <h2 className="text-xl font-normal mb-2 border-b-2 border-yellow-500 inline-block pb-1">Follow Us</h2>
                            <p className='mb-2'>Follow us on social media and get latest updates about properties in Nagpur.</p>
                            <div className="flex justify-start md:justify-start gap-4">
                                <a href="https://www.facebook.com/share/15xvGkL6zi/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-facebook text-2xl hover:text-gray-400"></i>
                                </a>
                                {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-twitter text-2xl hover:text-gray-400"></i>
                                </a> */}
                                <a href="https://youtube.com/@inheritanceinfrastructure?si=E32slGS6LWVSEqra" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-youtube text-2xl hover:text-gray-400"></i>
                                </a>
                                <a href="https://www.instagram.com/inheritanceinfrastructure?utm_source=qr&igsh=MW1iZDNnYmhoODJlcA==" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-instagram text-2xl hover:text-gray-400"></i>
                                </a>
                            </div>
                        </div>

                        {/* Navigation Links */}
                        <div>
                            <h2 className="text-xl font-normal mb-2 border-b-2 border-yellow-500 inline-block pb-1">Quick Links</h2>
                            <ul className="space-y-2">
                                <li><a href="/" className="hover:text-gray-400">Home</a></li>
                                <li><a href="/about" className="hover:text-gray-400">About</a></li>
                                <li><a href="/contact" className="hover:text-gray-400">Contact</a></li>
                            </ul>
                        </div>
                        
                    </div>

                    {/* Bottom Footer */}
                    <div className="border-t border-yellow-500 mt-6 pt-4 text-center">
                        <p>&copy; {new Date().getFullYear()} Inheritance Infrastructure. All Rights Reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
