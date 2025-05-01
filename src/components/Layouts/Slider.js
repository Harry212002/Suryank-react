import React, { useRef, useEffect, useState } from 'react';
import {
  FaGlobe,
  FaServer,
  FaBrain,
  FaCloud,
  FaToolbox,
  FaQuestionCircle
} from "react-icons/fa";

const items = [
    {
        title:"IT Outsourcing",
        logo:<FaGlobe size={30} />,
        content:[
            "At Suryank Technologies, our IT Outsourcing Services are designed to act as a seamless extension of your organization. We provide a robust suite of managed services that includes proactive patch management, real-time system health monitoring, next-generation antivirus solutions, and regular system optimization. Our team of certified professionals is available around the clock to offer unlimited support and strategic consulting to help your business scale securely and efficiently.",
            "We follow a flexible and transparent pricing model—billed per device or user per month—which ensures scalability and predictability in IT expenses. Whether you are a startup looking to establish IT foundations or an enterprise seeking to optimize costs and efficiency, our outsourcing model ensures reduced downtime, increased security, and a dedicated team to manage your IT needs."

        ]
    },
    {
        title:"IT Support",
        logo:<FaToolbox size={30}/>,
        content:[
            "Suryank Technologies provides dependable and fast-response IT Support Services tailored for businesses of all sizes. Our support network spans across India and international locations, ensuring that wherever you operate, expert assistance is just a call away. From day-to-day troubleshooting and remote assistance to onsite visits and infrastructure maintenance, our technicians are trained to deliver results with minimal disruption to your operations.",
            "We offer both break-fix support and proactive support models, including hourly billing, retainer plans, and on-demand solutions. Our focus is on rapid resolution, proactive maintenance, and minimizing business downtime—ensuring your technology supports your goals, not hinders them."

        ]
    },
    {
        title:"Managed IT Services",
        logo:<FaServer size={30}/>,
        content:[
            "Our Managed IT Services take the stress out of maintaining complex IT environments. With Suryank Technologies, you gain a strategic technology partner committed to aligning IT with your business goals. We manage your entire infrastructure—from workstations and servers to cloud and network environments—offering services such as endpoint protection, routine backups, system performance monitoring, and IT strategy development.",
            "We assign a dedicated account manager and a specialized technical team to every client, providing you with continuity, accountability, and consistent service quality. We operate with transparency, regular reporting, and an emphasis on optimizing your IT investment to improve productivity, reduce risks, and support long-term growth."

        ]
    },
    {
        title:"IT Consulting",
        logo:<FaBrain size={30}/>,
        content:[
            "With a team of highly skilled consultants, Suryank Technologies offers end-to-end IT consulting services for companies looking to modernize, scale, or transform their technology landscape. Our consultants bring deep experience in designing custom IT strategies, cloud migration plans, cybersecurity frameworks, infrastructure upgrades, and digital transformation initiatives.",
            "We specialize in helping organizations meet and maintain regulatory compliance (such as HIPAA, PCI DSS, ISO, and SOC2), improve business continuity, and adopt modern, cost-effective technologies. Whether you need one-time strategic advice or ongoing project-based support, we offer flexible engagement models including retainer, time-based, or fixed-price consulting."

        ]
    },
    {
        title:"Managed Cloud Hosting",
        logo:<FaCloud size={30}/>,
        content:[
            "Suryank Technologies delivers secure, scalable, and fully managed cloud hosting solutions for businesses seeking high availability and reliability. Unlike many providers that rely on third-party platforms, we utilize our own infrastructure located in secure Tier III data centers—ensuring complete control, security, and performance. We design cloud environments tailored to your specific needs—whether it's a private cloud for sensitive data, a public cloud for cost efficiency, or a hybrid cloud for flexibility.",
            "Our hosting services include regular data backups, disaster recovery, cybersecurity integration, and 24/7 technical support. We help you migrate with zero downtime and continue to optimize your infrastructure for speed, resilience, and compliance."

        ]
    },
    {
        title:"Get the Answers You Need",
        logo:<FaQuestionCircle size={30}/>,
        content:[
            "ITECS Frequently Asked Questions Have questions about our IT services, security solutions, or managed support plans? Our comprehensive FAQ covers everything from endpoint protection to cloud hosting, pricing, and service coverage.",
            "Explore our FAQ to learn how ITECS can be your strategic IT partner, delivering tailored solutions that adapt to your evolving business needs."

        ]
    }

];



function Slider() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 dark:text-white p-4 md:p-8">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12 p-10 text-primary" data-aos="fade-up">
        How Our IT Services Work
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-black dark:text-white  rounded-lg p-6 transition-all duration-300 
                      hover:hover:shadow-lg hover:-translate-y-1
                      border  hover:border-purple-500"
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 text-primary rounded-full flex items-center justify-center mr-4" >
                {item.logo}
              </div>
              <h2 className="text-xl font-bold">
                {item.title}
              </h2>
            </div>
            
            <div className="space-y-3">
              {item.content.map((paragraph, pIndex) => (
                <p 
                  key={pIndex} 
                  className="text-sm md:text-base leading-relaxed  dark:bg-gray-950 text-gray-600  dark:text-gray-400"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;