import React from 'react';
import { Link } from 'react-router-dom';
import service from '../../assests/service.jpg';
import Footer from '../Layouts/Footer';
import Navbar from '../Layouts/Navbar';
import Services from '../Layouts/Services';
import Landinge from '../Layouts/Landing';
import Slider from '../Layouts/Slider';
const Service = () => {
  return (
   
    <>
   {/* <Navbar/> */}
   <Navbar/>
   {/* <Landinge/> */}
    <div  className="bg-white dark:bg-gray-950 dark:text-white min-h-screen font-sans duration-300">
      

      {/* Hero Section */}
      <section data-aos="fade-up" data-aos-delay="300" className="px-6 md:px-20 py-24 text-center relative bg-white dark:bg-gray-950 dark:text-white">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
          Delivering <br/> <span className='text-primary'>Managed IT Services and IT Support</span><br/> with Excellence
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-10">
          Since its inception, Suryank Technologies has been providing reliable and comprehensive IT support and managed IT services to businesses across India and beyond. Our dedicated team of experts is committed to delivering innovative solutions, ensuring seamless IT operations and outstanding computer support services.
        </p>

        {/* Floating Chat Box */}
        {/* <div className="absolute right-6 bottom-6 bg-white dark:bg-gray-800 dark:text-white text-black px-4 py-2 rounded-lg shadow-lg max-w-xs text-left">
          <p className="text-sm">Hi there, have a question? Text us here.</p>
        </div> */}
      </section>

      <section data-aos="fade-right" data-aos-delay="300" className="px-6 md:px-20 py-20 bg-white dark:bg-black dark:text-white duration-300">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 max-w-7xl mx-auto">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              IT Support & Managed IT Services (MSP)
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              Whether you need proactive or on-demand support, we provide new and innovative
              solutions for onsite and remote situations.
            </p>
            <button data-aos="fade-up" data-aos-delay="300" className="btn-primary">
              Learn More
            </button>
          </div>

          {/* Image */}
          <div data-aos="fade-left" className="flex justify-center bg-transparent">
            <img
              src={service}
              alt="3D Cube Illustration"
              className="max-w-sm w-full rounded-md"
            />
          </div>
        </div>
      </section>
    </div>
    <Services/>
    <Slider/>
    <Footer/>
    </>
  );
};

export default Service;
