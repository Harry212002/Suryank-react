import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaQuoteLeft, FaHandshake, FaChartLine, FaLightbulb, FaGraduationCap } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../Layouts/Navbar";
import Footer from "../Layouts/Footer";
import Truewealth from '../../assests/truewealth.png';
import Gainxx from '../../assests/Gain x.png';
import crypto from '../../assests/crypto hub city.png';
import { Link } from "react-router-dom";

// Updated client data with descriptions
const clientLogos = [
  { 
    name: "TrueWealth", 
    logo: Truewealth,
    description: "Specializes in algorithmic trading with high-frequency strategies, combining finance expertise and tech innovation to deliver superior returns.",
    // icon: <FaChartLine className="text-blue-500" />
  },
  { 
    name: "CryptoHub City", 
    logo: crypto,
    description: "Provides algo trading software for automated strategies, enabling traders to capitalize on market opportunities with speed and precision.",
    // icon: <FaLightbulb className="text-purple-500" />
  },
  { 
    name: "Gainx", 
    logo: Gainxx,
    description: "A premier trading education institute offering courses and workshops to empower traders with practical knowledge and skills.",
    // icon: <FaGraduationCap className="text-green-500" />
  },
];

// Updated testimonials to match client expertise
const testimonials = [
  {
    name: "Alex Carter",
    role: "CEO, TrueWealth",
    quote: "Their solutions transformed our trading infrastructure with zero downtime. Highly recommended!",
    rating: 5,
  },
  {
    name: "Raj Patel",
    role: "Director, CryptoHub City",
    quote: "The no-code approach saved us months of development time. Incredibly efficient!",
    rating: 5,
  },
  {
    name: "Sarah Lin",
    role: "Head Instructor, Gainx",
    quote: "Their tools have become a cornerstone of our advanced trading curriculum.",
    rating: 4.5,
  },
];

const stats = [
  { value: "100%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support Availability" },
  { value: "50+", label: "Successful Deployments" },
  { value: "3x", label: "Faster Implementation" },
];

const ClientsPage = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
    <Navbar/>
      {/* Hero Section (unchanged) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br bg-white dark:bg-black dark:text-white">
        <div className="max-w-7xl mx-auto text-center" data-aos="fade-up">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-primary">Our Esteemed Clients</h1>
          <p className="text-xl sm:text-2xl max-w-3xl mx-auto">
            Trusted by <span className="font-bold text-primary">innovative companies</span> worldwide to deliver high-impact solutions.
          </p>
        </div>
      </section>

      {/* Client Showcase with Descriptions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black dark:text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-primary" data-aos="fade-down">
            Strategic Partnerships
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {clientLogos.map((client, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex justify-center mb-4">
                  {/* <div className="w-16 h-16 rounded-full bg-blue-50 dark:bg-gray-700 flex items-center justify-center">
                    {client.icon}
                  </div> */}
                </div>
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-fit mx-auto mb-4 object-contain"
                />
                <h3 className="text-xl font-bold text-center mb-3 dark:text-white">
                  {client.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  {client.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-950 dark:text-white duration-300">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-primary" data-aos="fade-down">
            What Our Clients Say
          </h2>
          <Slider {...sliderSettings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-4">
                <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl">
                  <FaQuoteLeft className="text-blue-500 text-3xl mb-4" />
                  <p className="text-gray-700 dark:text-gray-300 italic mb-6">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold dark:text-white">{testimonial.name}</h4>
                      <p className="text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-black dark:text-white duration-300">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 dark:text-white" data-aos="fade-down">
            By The Numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <p className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">{stat.value}</p>
                <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br bg-white dark:bg-gray-950 dark:text-white duration-300">
        <div className="max-w-4xl mx-auto text-center" data-aos="zoom-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-primary">Ready to Join Our Client Network?</h2>
          <p className="text-xl mb-8 opacity-90">
            Partner with us to drive innovation and growth in your business.
          </p>

          <Link to="/contact"><button className="btn-primary">
            Get in Touch
          </button></Link>
          
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default ClientsPage;