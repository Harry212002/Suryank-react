import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FaHospital,
  FaUniversity,
  FaShoppingBag,
  FaMoneyBillWave,
  FaIndustry,
  FaChartLine,
  FaHotel,
  FaOilCan,
  FaLaptop,
  FaCloud
} from 'react-icons/fa';

const industries = [
  {
    title: "Healthcare",
    icon: <FaHospital size={40} className="text-blue-500" />,
    description: "Compliant IT solutions for hospitals, clinics, and medical research facilities. HIPAA-ready infrastructure and secure patient data management.",
    stats: "98% uptime for critical systems"
  },
  {
    title: "Education",
    icon: <FaUniversity size={40} className="text-purple-500" />,
    description: "Technology solutions for schools, universities, and e-learning platforms. Scalable infrastructure for remote learning environments.",
    stats: "200+ educational institutions supported"
  },
  {
    title: "Retail & E-commerce",
    icon: <FaShoppingBag size={40} className="text-red-500" />,
    description: "Omnichannel retail solutions with PCI-compliant payment systems. Inventory management and customer analytics platforms.",
    stats: "30% average efficiency improvement"
  },
  {
    title: "Financial Services & Trading",
    icon: <FaMoneyBillWave size={40} className="text-green-500" />,
    description: "Specialized in algorithmic trading tools for Indian and Forex markets, supporting traders with automation, backtesting, and analytics.",
    stats: "99.99% transaction reliability"
  },
  {
    title: "Information Technology & Consulting",
    icon: <FaLaptop size={40} className="text-blue-500" />,
    description: "Custom software development and IT solutions, including managed IT services, support, cloud hosting, and consulting for digital transformation and infrastructure optimization.",
    stats: "25% reduction in downtime"
  },
  {
    title: "Professional Services",
    icon: <FaChartLine size={40} className="text-indigo-500" />,
    description: "CRM and business intelligence tools for law firms, consultancies, and marketing agencies. Client portal development and workflow automation.",
    stats: "40% faster client onboarding"
  },
  {
    title: "Hospitality",
    icon: <FaHotel size={40} className="text-pink-500" />,
    description: "Property management systems and guest experience platforms. Integrated booking engines and loyalty programs.",
    stats: "20% increase in direct bookings"
  },
  {
    title: "Cloud Infrastructure & Hosting",
    icon: <FaCloud size={40} className="text-blue-300" />,
    description: "Cloud services hosted in Tier III data centers for secure scaling.",
    stats: "Tier III cloud services, 15% cost reduction."
  }
];

const IndustriesWeServe = () => {

  return (
    <div className="py-16 px-4 bg-white dark:bg-black dark:text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-down">
          <h2 className="text-base font-semibold  uppercase">
            Our Expertise
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-primary sm:text-4xl">
            Industries We Serve
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="pt-12 pb-8 px-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg relative"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Icon container with fixed size and centered icon */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-16 h-16 rounded-full bg-white dark:bg-gray-700 shadow-md flex items-center justify-center p-3">
                  <div className="flex items-center justify-center w-full h-full">
                    {industry.icon}
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  {industry.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {industry.description}
                </p>
                <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                  {industry.stats}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustriesWeServe;