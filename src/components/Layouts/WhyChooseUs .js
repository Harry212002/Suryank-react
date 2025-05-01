import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import {
  FaUsers,
  FaHeadset,
  FaHandHoldingUsd,
  FaRocket,
  FaUserFriends
} from 'react-icons/fa';

const usps = [
  {
    title: "Expert Team",
    icon: <FaUsers className="w-8 h-8" />,
    description: "Certified professionals with 10+ years average industry experience delivering cutting-edge solutions.",
    stat: "150+ technical certifications"
  },
  {
    title: "24/7 Support",
    icon: <FaHeadset className="w-8 h-8" />,
    description: "Round-the-clock monitoring and support with guaranteed response times for critical issues.",
    stat: "98% client satisfaction rate"
  },
  {
    title: "Cost-effective Solutions",
    icon: <FaHandHoldingUsd className="w-8 h-8" />,
    description: "Optimized solutions that reduce your IT spend without compromising quality or performance.",
    stat: "30% average cost savings"
  },
  {
    title: "Agile Methodology",
    icon: <FaRocket className="w-8 h-8" />,
    description: "Flexible, iterative approach that delivers measurable results faster with continuous improvements.",
    stat: "2x faster implementation"
  },
  {
    title: "Client-centric Approach",
    icon: <FaUserFriends className="w-8 h-8" />,
    description: "Custom solutions tailored to your specific business needs with dedicated account management.",
    stat: "95% client retention rate"
  }
];

const WhyChooseUs = () => {


  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-950 dark:text-white duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-down">
          <h2 className="text-base font-semibold tracking-wider uppercase">
            Our Differentiators
          </h2>
          <h1 className="mt-2 text-3xl font-extrabold text-primary sm:text-4xl">
            Why Choose Us
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 mx-auto">
            We go beyond standard IT services to deliver exceptional value
          </p>
        </div>

        {/* USP Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {usps.map((usp, index) => (
            <div
              key={index}
              className="group relative bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              
              {/* Icon Container */}
              <div 
                className="w-16 h-16 mb-4 mx-auto rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white"
                data-aos="zoom-in"
                data-aos-delay={index * 100 + 200}
              >
                {usp.icon}
              </div>
              
              {/* Content */}
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {usp.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  {usp.description}
                </p>
                <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                  {usp.stat}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div 
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
          data-aos="fade-up"
        >
          <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-xl text-center">
            <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">4.9★</p>
            <p className="text-gray-600 dark:text-gray-300">Client Satisfaction</p>
          </div>
          <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-xl text-center">
            <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">100%</p>
            <p className="text-gray-600 dark:text-gray-300">Data Encryption</p>
          </div>
          <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-xl text-center">
            <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">99.5%</p>
            <p className="text-gray-600 dark:text-gray-300">Uptime Guarantee</p>
          </div>
          <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-xl text-center">
            <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">24/7</p>
            <p className="text-gray-600 dark:text-gray-300">Support Availability</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;