import React from 'react'
import { Link } from "react-router-dom";
import { MenuLinks } from './Navbar'
import { FaUserCircle } from 'react-icons/fa'

const ResponsiveMenu = ({showMenu}) => {
  return (
    <div className={`${
          showMenu ? "left-0" : "left-[-100%]"} 
          fixed bottom-0 top-0 w-[75%] transition-all duration-300
          shadow-md pt-16 px-8 bg-white text-black
          dark:bg-gray-900 dark:text-white z-50`}>


        <div className='card'>
            <div className='flex items-center justify-start gap-3'>
                <FaUserCircle size={50}/>
                <div>
                    <h1>Hello User</h1>
                    <h1 className='text-sm text-slate-500'>Premium User</h1>
                </div>
             </div>

            {/* Menu Section */}
            <nav className='mt-12'>
                <ul className='space-y-4 text-xl'>
                    {MenuLinks.map(({id,name,link})=>{
                            return(
                                <li key={id}>
                                    <Link to={link}>{name}</Link>
                                </li>
                            )
                    })}
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default ResponsiveMenu



// IT Outsourcing
// At Suryank Technologies, our IT Outsourcing Services are designed to act as a seamless extension of your organization. We provide a robust suite of managed services that includes proactive patch management, real-time system health monitoring, next-generation antivirus solutions, and regular system optimization. Our team of certified professionals is available around the clock to offer unlimited support and strategic consulting to help your business scale securely and efficiently.

// We follow a flexible and transparent pricing model—billed per device or user per month—which ensures scalability and predictability in IT expenses. Whether you are a startup looking to establish IT foundations or an enterprise seeking to optimize costs and efficiency, our outsourcing model ensures reduced downtime, increased security, and a dedicated team to manage your IT needs.

// IT Support
// Suryank Technologies provides dependable and fast-response IT Support Services tailored for businesses of all sizes. Our support network spans across India and international locations, ensuring that wherever you operate, expert assistance is just a call away. From day-to-day troubleshooting and remote assistance to onsite visits and infrastructure maintenance, our technicians are trained to deliver results with minimal disruption to your operations.

// We offer both break-fix support and proactive support models, including hourly billing, retainer plans, and on-demand solutions. Our focus is on rapid resolution, proactive maintenance, and minimizing business downtime—ensuring your technology supports your goals, not hinders them.

// Managed IT Services
// Our Managed IT Services take the stress out of maintaining complex IT environments. With Suryank Technologies, you gain a strategic technology partner committed to aligning IT with your business goals. We manage your entire infrastructure—from workstations and servers to cloud and network environments—offering services such as endpoint protection, routine backups, system performance monitoring, and IT strategy development.

// We assign a dedicated account manager and a specialized technical team to every client, providing you with continuity, accountability, and consistent service quality. We operate with transparency, regular reporting, and an emphasis on optimizing your IT investment to improve productivity, reduce risks, and support long-term growth.

// IT Consulting
// With a team of highly skilled consultants, Suryank Technologies offers end-to-end IT consulting services for companies looking to modernize, scale, or transform their technology landscape. Our consultants bring deep experience in designing custom IT strategies, cloud migration plans, cybersecurity frameworks, infrastructure upgrades, and digital transformation initiatives.

// We specialize in helping organizations meet and maintain regulatory compliance (such as HIPAA, PCI DSS, ISO, and SOC2), improve business continuity, and adopt modern, cost-effective technologies. Whether you need one-time strategic advice or ongoing project-based support, we offer flexible engagement models including retainer, time-based, or fixed-price consulting.

// Managed Cloud Hosting
// Suryank Technologies delivers secure, scalable, and fully managed cloud hosting solutions for businesses seeking high availability and reliability. Unlike many providers that rely on third-party platforms, we utilize our own infrastructure located in secure Tier III data centers—ensuring complete control, security, and performance.

// We design cloud environments tailored to your specific needs—whether it's a private cloud for sensitive data, a public cloud for cost efficiency, or a hybrid cloud for flexibility. Our hosting services include regular data backups, disaster recovery, cybersecurity integration, and 24/7 technical support. We help you migrate with zero downtime and continue to optimize your infrastructure for speed, resilience, and compliance.

// Managed Cybersecurity (MSSP)
// In today's threat landscape, cybersecurity cannot be an afterthought. As a Managed Security Services Provider (MSSP), Suryank Technologies offers advanced cybersecurity services designed to protect your systems, data, and customers. Our Security Operations Center (SOC) provides 24/7 monitoring, threat detection, incident response, vulnerability scanning, and security auditing.

// We also specialize in compliance services for PCI DSS, HIPAA, and other industry standards—helping you pass audits, avoid penalties, and maintain trust. Each client is assigned a dedicated cybersecurity manager who ensures all services are aligned with your specific risk profile and regulatory environment. With us, you get more than tools—you get a trusted partner in securing your digital assets.

