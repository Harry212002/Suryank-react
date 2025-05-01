import React,{ useState } from 'react'
import contact from '../../assests/contact.png';
import Navbar from '../Layouts/Navbar';
import Footer from '../Layouts/Footer';
import GoogleMap from '../Layouts/GoogleMap';
import emailjs from "emailjs-com";

const Contact = () => {
    const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    jobTitle: "",
    company: "",
    referral: "",
    contactBy: "Email",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (formData.contactBy === "Email") {
      emailjs
        .send(
          "service_jll9m8s",
          "template_yip2yhl",
          formData,
          "k5045BXZNP00weGJK"
        )
        .then(
          (result) => {
            alert("Email sent successfully!");
          },
          (error) => {
            alert("Failed to send email. Please try again.");
          }
        );
    } else {
      alert("Phone option selected — integrate SMS API here (e.g., Twilio)");
    }
  };
  return (

    <>
    <Navbar/>
    <div
      className="min-h-[60vh] bg-cover bg-center relative flex items-center justify-center"
      style={{
        backgroundImage: `url(${contact})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg md:text-xl">
          We look forward to helping your business grow!
        </p>
      </div>
    </div>

    <div className="bg-gray-100 dark:bg-gray-950 dark:text-white duration-300 px-6 py-16 md:px-20">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <form onSubmit={sendEmail}>
           <div className="space-y-4">
               <div className="grid md:grid-cols-2 gap-4">
                   <input type="text" name="firstName" placeholder="First name" onChange={handleChange} className="bg-transparent border p-3 w-full" />
                   <input type="text" name="lastName" placeholder="Last name" onChange={handleChange} className="bg-transparent border p-3 w-full" />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                    <input type="email" name="email" placeholder="Email" onChange={handleChange} className="bg-transparent border p-3 w-full" />
                    <input type="tel" name="phone" placeholder="Phone" onChange={handleChange} className="bg-transparent border p-3 w-full" />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                    <input type="text" name="jobTitle" placeholder="Job Title" onChange={handleChange} className="bg-transparent border p-3 w-full" />
                    <input type="text" name="company" placeholder="Company Name" onChange={handleChange} className="bg-transparent border p-3 w-full" />
             </div>
             <input type="text" name="referral" placeholder="How did you hear about us?" onChange={handleChange} className="bg-transparent border p-3 w-full" />
             <select name="contactBy" onChange={handleChange} className="bg-transparent border p-3 w-full text-black">
                    <option value="Email" className="text-black">Email</option>
                    <option value="Phone" className="text-black">Phone</option>
             </select>
             <textarea name="message" placeholder="Your message" rows="5" onChange={handleChange} className="bg-transparent border p-3 w-full"></textarea>
             <button type="submit" className="btn-primary">
               Submit
             </button>
           </div>
         </form>
        {/* Contact Info */}
        <div className='space-y-4'>                    
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="flex items-start gap-4 mt-8 md:mt-0">
            <span className="text-2xl">📞</span>
            <div>
              <h3 className="font-semibold text-lg">Phone</h3>
              <p className="text-sm">Incident Response</p>
              <a href="tel:+91 9229342165" className="text-blue-400 underline">tel:+91 9229342165</a>
            </div>
          </div>

          <div className="flex items-start gap-4 mt-8 md:mt-0">
            <span className="text-2xl">📧</span>
            <div>
              <h3 className="font-semibold text-lg">Email</h3>
              <p className="text-sm">Email Us Below:</p>
              <a href="mailto:info@suryanktechnologies.in" className="text-blue-400 underline">info@suryanktechnologies.in</a>
            </div>
          </div>

          <div className="flex items-start gap-4 mt-8 md:mt-0">
            <span className="text-2xl">📍</span>
            <div>
              <h3 className="font-semibold text-lg">Office</h3>
              <p className="text-sm">House No 3</p>
              <p className="text-sm">5Sukhdeo Nagar</p>
              <p className="text-sm">Hehal, Ranchi, Jharkhand</p>
              <p className="text-sm">India, 834005</p>
            </div>
          </div>
        </div>
        <GoogleMap/>
      </div>
    </div>

    </div>
    <Footer/>
    </>
  )
}

export default Contact
