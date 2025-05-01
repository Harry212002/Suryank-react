import React, { useEffect } from "react";
import "aos/dist/aos.css";
import { FaRobot, FaPlug, FaChartLine, FaClock, FaCogs, FaQuestionCircle } from "react-icons/fa";
import Navbar from "../Layouts/Navbar";
import Footer from "../Layouts/Footer";


const ProductPage = () => {


  const features = [
    {
      icon: <FaRobot className="w-8 h-8" />,
      title: "No-Code Automation",
      desc: "Automate trading without any coding knowledge.",
    },
    {
      icon: <FaPlug className="w-8 h-8" />,
      title: "Plug & Play",
      desc: "Start trading immediately with ready-to-use solutions.",
    },
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: "Demo Trial",
      desc: "Test strategies risk-free before going live.",
    },
    {
      icon: <FaCogs className="w-8 h-8" />,
      title: "Custom Strategies",
      desc: "Build or choose strategies tailored to your needs.",
    },
    {
      icon: <FaClock className="w-8 h-8" />,
      title: "Fast Setup",
      desc: "Get started in minutes—no technical skills required.",
    },
  ];

  const steps = [
    {
      title: "Sign Up",
      desc: "Create your AlgoPandas account in seconds.",
    },
    {
      title: "Choose a Strategy",
      desc: "Select pre-built strategies or customize your own.",
    },
    {
      title: "Automate",
      desc: "Set your parameters and let AlgoPandas trade for you.",
    },
    {
      title: "Monitor & Optimize",
      desc: "Track performance and refine strategies for better results.",
    },
  ];

  const faqs = [
    {
      question: "What is AlgoPandas?",
      answer: "A no-code platform that automates trading strategies without programming.",
    },
    {
      question: "Do I need coding skills?",
      answer: "No! AlgoPandas is designed for traders of all skill levels.",
    },
    {
      question: "Is there a free trial?",
      answer: "Yes, you can test strategies with our demo mode.",
    },
    {
      question: "Which brokers are supported?",
      answer: "We integrate with major brokers like Zerodha, Upstox, and more.",
    },
  ];

  return (
    
    <div className="bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
    <Navbar/>
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br bg-white dark:bg-black dark:text-white">
        <div className="max-w-7xl mx-auto text-center" data-aos="fade-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-primary">
            AlgoPandas
          </h1>
          <p className="text-xl sm:text-2xl max-w-3xl mx-auto mb-8">
            Simplify Algorithmic Trading
          </p>
          <p className="text-lg sm:text-xl opacity-90 mb-10">
            No-Code, Plug & Play Trading Solutions for Real Traders
          </p>
          <a href="https://www.algopandas.com/" target="_blank" rel="noopener noreferrer">
            <button className="btn-primary py-3 px-8 ">
               Start Free Trial
            </button>
         </a>
          
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-950 dark:text-white duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 dark:text-white">
                The Problem
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  <span className="text-red-500 font-bold">✖</span> Too much code
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  <span className="text-red-500 font-bold">✖</span> Too many roadblocks
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  <span className="text-red-500 font-bold">✖</span> Too little time
                </p>
              </div>
            </div>
            <div data-aos="fade-left">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 dark:text-white">
                The Solution
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                AlgoPandas makes algo trading simple, accessible, and no-code. No more wasted time on complex coding and technical barriers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black dark:text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-primary" data-aos="fade-down">
            Key Features
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-sm hover:shadow-md transition-all"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-12 h-12 mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white mx-auto">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-center mb-2 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black dark:text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-primary" data-aos="fade-down">
            How It Works
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl z-10">
                  {index + 1}
                </div>
                <div className="bg-white dark:bg-gray-800 p-8 pt-16 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 h-full">
                  <h3 className="text-xl font-bold mb-3 text-center dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-950 dark:text-white duration-300">
        <div className="max-w-4xl mx-auto text-center" data-aos="zoom-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-primary">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of traders who have simplified their trading with AlgoPandas.
          </p>

          <a href="https://www.algopandas.com/" target="_blank" rel="noopener noreferrer">
            <button className=" py-3 px-8 btn-primary">
                  Start Automating Today
            </button>
          </a>
          
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950 dark:text-white duration-300">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-primary" data-aos="fade-down">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-start">
                  <FaQuestionCircle className="text-blue-500 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold mb-2 dark:text-white">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default ProductPage;