import React, { useEffect } from 'react';
import {Link} from 'react-router-dom'
import 'aos/dist/aos.css';
import { FaQuoteLeft, FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import truwealth from '../../assests/truwealth.png';
import Gainx from '../../assests/Gainx.png';
import Cryptohub from '../../assests/Cryptohub.png';

// Sample client logos (replace with your actual client logos)
const clientLogos = [
  truwealth,
  Gainx,
  Cryptohub,
];




const testimonials = [
  {
    name: "xyz",
    role: "CEO, TrueWealth",
    quote: "Their solutions transformed our trading infrastructure with zero downtime. Highly recommended!",
    rating: 5,
  },
  {
    name: "xyz",
    role: "Director, CryptoHub City",
    quote: "The no-code approach saved us months of development time. Incredibly efficient!",
    rating: 5,
  },
  {
    name: "xyz",
    role: "Head Instructor, Gainx",
    quote: "Their tools have become a cornerstone of our advanced trading curriculum.",
    rating: 4.5,
  },
];

const renderStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  for (let i = 1; i <= 5; i++) {
    if (i <= fullStars) {
      stars.push(<FaStar key={i} className="text-yellow-400" />);
    } else if (i === fullStars + 1 && hasHalfStar) {
      stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-yellow-400" />);
    }
  }
  return stars;
};

const Testimonials = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-down">
          <h2 className="text-base font-semibold tracking-wider text-white uppercase">
            Trusted By Industry Leaders
          </h2>
          <h1 className="mt-2 text-3xl font-extrabold text-primary sm:text-4xl">
            What Our Clients Say
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 mx-auto">
            Don’t just take our word for it—hear from our satisfied customers
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="mb-16" data-aos="fade-up">
          <Slider {...sliderSettings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-4">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow h-full">
                  <FaQuoteLeft className="text-gray-300 dark:text-gray-600 text-3xl mb-4" />
                  <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center">
                    {/* <img
                      src={testimonial.logo}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    /> */}
                    
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {testimonial.role}
                      </p>
                      <div className="flex mt-1">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Client Logos Section */}
        <div className="mt-12" data-aos="fade-up">
          <h3 className="text-center text-xl font-semibold text-gray-700 dark:text-gray-300 mb-8">
            Trusted by top companies worldwide
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {clientLogos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Client Logo ${index + 1}`}
                className="h-12 opacity-70 hover:opacity-100  hover:grayscale-0 rounded-md"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div
          className="mt-16 bg-white dark:bg-black dark:text-white rounded-xl p-8 text-center shadow-xl"
          data-aos="fade-up"
        >
          <h3 className="text-2xl font-bold dark:bg-black dark:text-white mb-4">
            Ready to experience our services?
          </h3>
          <p className="dark:bg-black dark:text-white mb-6 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who trust us with their IT needs.
          </p>
          {/* <button className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg shadow-md transition-transform hover:scale-105">
            Get Started Today
          </button> */}
          <Link to="/contact">
                <button className="btn-primary">Get Started Today</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;