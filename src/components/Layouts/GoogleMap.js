import React from 'react'
const GoogleMap = () => {
  return (
    <div className="w-full h-[300px]">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.123602384557!2d85.2970906!3d23.3833117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e0c2807fa697%3A0xf8febb19401e2ce3!2s254%2F3%2C%20Sukhdeo%20Nagar%2C%20Ranchi%2C%20Jharkhand%20834001!5e1!3m2!1sen!2sin!4v1714489817901!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default GoogleMap;