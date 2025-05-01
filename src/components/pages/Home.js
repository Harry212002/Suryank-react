import React from 'react'
import Navbar from '../Layouts/Navbar'
import Hero from '../Layouts/Hero'
import Services from '../Layouts/Services'
import Footer from '../Layouts/Footer'
import IndustriesWeServe from '../Layouts/IndustriesWeServe'
import WhyChooseUs from '../Layouts/WhyChooseUs '
import Testimonials from '../Layouts/Testimonials '
// import Landinge from '../Layouts/Landing'

const Home = () => {
  return (
    <>
        <Navbar/>
        <Hero/>        
        <Services/>
        <IndustriesWeServe/>
        <WhyChooseUs/>
        <Testimonials/>
        <Footer/>       
    </>
  )
}

export default Home