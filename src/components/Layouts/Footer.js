import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const FooterLinks = [
    {
        title: "About Us",
        link: "/#about",
        desc: "Our journey in revolutionizing tech solutions"
    },
    {
        title: "Our Products",
        link: "/#products",
        desc: "Innovative tools like AlgoPandas"
    },
    {
        title: "Case Studies",
        link: "/#works",
        desc: "Success stories of our implementations"
    },
    {
        title: "Join Our Team",
        link: "/#career",
        desc: "Build the future with us"
    }
];

const helpLinks = [
    {
        title: "24/7 Support",
        link: "/#support",
        desc: "Always here to help you"
    },
    {
        title: "Implementation",
        link: "/#implementation",
        desc: "Our seamless deployment process"
    },
    {
        title: "Terms & Conditions",
        link: "/#terms",
        desc: "Our service agreements"
    },
    {
        title: "Privacy Policy",
        link: "/#privacy",
        desc: "Your data security matters"
    }
];

const Footer = () => {
  return (
    <footer className='bg-gray-100 dark:bg-black dark:text-white duration-300'>
        <div className='container mx-auto px-4'>
            <div className='grid md:grid-cols-3 gap-8 py-12'>
                {/* Company Info */}
                <div className='space-y-6'>
                    <h1 className='text-2xl font-bold flex items-center gap-2'>
                        <span className='bg-gradient-to-r text-primary bg-clip-text'>
                            Suryank Technologies
                        </span>
                    </h1>
                    <p className='text-gray-600 dark:text-gray-300'>
                        Pioneering intelligent software solutions that empower businesses. 
                        Our flagship product AlgoPandas revolutionizes algorithmic trading 
                        with precision-engineered tools for modern traders.
                    </p>
                    <div className='flex items-center gap-4'>
                        <a href="#" className='hover:text-blue-500 transition-colors'>
                            <FaInstagram className='text-xl'/>
                        </a>
                        <a href="#" className='hover:text-blue-500 transition-colors'>
                            <FaFacebook className='text-xl'/>
                        </a>
                        <a href="https://www.linkedin.com/company/suryanktechnologies" 
                           className='hover:text-blue-500 transition-colors'>
                            <FaLinkedin className='text-xl'/>
                        </a>
                        <a href="#" className='hover:text-blue-500 transition-colors'>
                            <FaTwitter className='text-xl'/>
                        </a>
                    </div>
                </div>

                {/* Links Section */}
                <div className='grid grid-cols-2 gap-8'>
                    <div className='space-y-4'>
                        <h2 className='text-lg font-semibold'>Explore</h2>
                        <ul className='space-y-3'>
                            {FooterLinks.map((item) => (
                                <li key={item.title}>
                                    <a href={item.link} 
                                       className='flex flex-col group'>
                                        <span className='text-gray-700 dark:text-gray-300 group-hover:text-blue-500 transition-colors font-medium'>
                                            {item.title}
                                        </span>
                                        <span className='text-sm text-gray-500 dark:text-gray-400'>
                                            {item.desc}
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    <div className='space-y-4'>
                        <h2 className='text-lg font-semibold'>Resources</h2>
                        <ul className='space-y-3'>
                            {helpLinks.map((item) => (
                                <li key={item.title}>
                                    <a href={item.link} 
                                       className='flex flex-col group'>
                                        <span className='text-gray-700 dark:text-gray-300 group-hover:text-blue-500 transition-colors font-medium'>
                                            {item.title}
                                        </span>
                                        <span className='text-sm text-gray-500 dark:text-gray-400'>
                                            {item.desc}
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Contact Section */}
                <div className='space-y-4'>
                    <h2 className='text-lg font-semibold'>Get in Touch</h2>
                    <ul className='space-y-4'>
                        <li className='flex items-start gap-3'>
                            <span className='mt-1'>📞</span>
                            <div>
                                <p className='font-medium'>+91 9229342165</p>
                                <p className='text-sm text-gray-500 dark:text-gray-400'>Mon-Fri, 9AM-6PM</p>
                            </div>
                        </li>
                        <li className='flex items-start gap-3'>
                            <span className='mt-1'>📧</span>
                            <div>
                                <p className='font-medium'>info@suryanktechnologies.in</p>
                                <p className='text-sm text-gray-500 dark:text-gray-400'>Response within 24 hours</p>
                            </div>
                        </li>
                        <li className='flex items-start gap-3'>
                            <span className='mt-1'>🏢</span>
                            <div>
                                <p className='font-medium'>House No 3, Sukhdeo Nagar</p>
                                <p className='text-sm text-gray-500 dark:text-gray-400'>Hehal, Ranchi, Jharkhand 834005</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Copyright Section */}
            <div className='border-t border-gray-200 dark:border-gray-700 py-6'>
                <div className='flex flex-col md:flex-row justify-between items-center'>
                    <p className='text-gray-500 dark:text-gray-400 text-sm'>
                        © {new Date().getFullYear()} Suryank Technologies PVT LTD. All rights reserved.
                    </p>
                    <div className='flex gap-4 mt-4 md:mt-0'>
                        <a href="#" className='text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 text-sm'>
                            Privacy Policy
                        </a>
                        <a href="#" className='text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 text-sm'>
                            Terms of Service
                        </a>
                        <a href="#" className='text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 text-sm'>
                            Cookies
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer