import React from 'react'
import { Link } from 'react-router-dom'
import { FaCameraRetro, FaChartBar, FaCloud, FaCode, FaLaptopCode, FaMobileAlt } from 'react-icons/fa'

const skillsData=[
    {
        name:"App Development",
        icon:<FaCameraRetro className='text-4xl text-primary'/>,
        link:"#",
        description:"We create fast, user-friendly mobile apps for Android and iOS. From design to deployment, we build custom solutions that meet your business needs—whether native, cross-platform, or web-based.",
        aosDelay:"0"
    },
    {
        name: "Custom Software Development",
        icon: <FaCode className='text-4xl text-primary' />,
        link: "#",
        description: "We build tailor-made software solutions to meet your unique business needs, ensuring flexibility, scalability, and top-notch performance.",
         aosDelay:"300"
    },
    {
        name: "Cloud Services",
        icon: <FaCloud className='text-4xl text-primary' />,
        link: "#",
        description: "We offer secure and scalable cloud solutions for data storage, computing, and app hosting to streamline operations and enhance accessibility.",
         aosDelay:"500"
    },
    {
        name: "Data Analytics",
        icon: <FaChartBar className='text-4xl text-primary' />,
        link: "#",
        description: "Turn your data into actionable insights with our analytics services. We help you make smarter decisions through reporting, dashboards, and forecasting.",
         aosDelay:"700"
    },
    {
       name: "Mobile & App Development",
       icon: <FaMobileAlt className='text-4xl text-primary' />,
       link: "#",
       description: "We design and develop fast, intuitive mobile apps for Android and iOS, delivering seamless user experiences across devices.",
        aosDelay:"1000"
    },
    {
       name: "IT Consulting",
       icon: <FaLaptopCode className='text-4xl text-primary' />,
       link: "#",
       description: "We provide expert IT consulting to help you plan, implement, and optimize technology strategies that align with your business goals.",
        aosDelay:"1300"
    }


]
const Services = () => {
  return (
    <>
        <div className='bg-gray-100 dark:bg-gray-950 dark:text-white duration-300 py-12 sm:grid sm:place-items-center mt-5'>
            <div className='container'>
                {/* Header section */}
                <div data-aos="fade-up" className='pb-12 text-center space-y-3'>
                    <h1  className='text-3xl font-extrabold text-violet-950 dark:text-primary'>Explore Our Services</h1>
                    <p>We are self-service data analytics software that lets you create visually.</p>
                </div>
                {/* card section */}
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
                    {skillsData.map((skills)=>(
                        <div data-aos="fade-up" data-aos-delay={skills.aosDelay} id={skills.name} className='card space-y-3 sm:space-y-4 p-4 border border-gray-300 dark:border-gray-700 rounded-lg shadow-md'>
                           <div>{skills.icon}</div>
                           <h1 className='text-lg font-semibold'>{skills.name}</h1>
                           <p className='text-gray-600 dark:text-gray-400'>{skills.description}</p>
                        </div>
                    ))}
                </div>
                {/* Button section */}
                {/* <div  data-aos="fade-up" data-aos-delay="900" data-aos-offset="0"  className='text-center mt-4 sm:mt-8'>
                    <Link to="/service">
                    <button className='btn-primary'>Learn More</button></Link>
                </div> */}
                {/* <Link to="/service" className='text-center mt-4 sm:mt-8'>
                    <button className="btn-primary">Get Started Today</button>
                </Link> */}
            </div>            
        </div>
    </>
  )
}

export default Services