import React from 'react'
import Heroimg from '../../assests/team.jpg';

const Hero = () => {
  return (
    <>
      <main className='bg-white dark:bg-black dark:text-white '>
      {/* <main className='bg-white dark:bg-gray-950 dark:text-white duration-300 '> */}
          <div className='container min-h-[620px] flex mt-10 sm:mt-0 pb-8'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 place-items-center'>
                {/* image setion */}
                <div data-aos="zoom-in" className='order-1 sm:order-2 relative'>
                    <img src={Heroimg} alt="hero" className='rounded-lg'/>
                </div>

                {/* text content section */}
                <div className='space-y-5 order-2 sm:order-1 xl:pr-32 '>
                    <h1 data-aos="fade-up" className='text-4xl sm:text-5xl  font-extrabold'>
                        Empowering Traders Through{" "} <span className='text-primary'>Intelligent Software Solutions</span>
                    </h1>
                    <p data-aos="fade-up" data-aos-delay="300">
                        At Suryank Technologies, we transform bold ideas into cutting-edge software. 
                        Through our flagship division, <strong>Algo Pandas</strong>, we empower Indian and Forex traders 
                        with innovative algorithmic trading tools. From development to execution, 
                        we focus on precision, growth, and intelligent automation — helping you stay ahead 
                        in the fast-paced world of trading.
                    </p>
                    <button data-aos="fade-up" data-aos-delay="500" className='btn-primary'>Get Started</button>
                </div>
                
            </div>
        </div>
      </main>  
    </>
  )
}

export default Hero
