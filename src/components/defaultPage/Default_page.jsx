import React, { useState, useEffect } from 'react';
import hero1 from "../images/Home/hero_1.jpg";
import Navbar from '../Common/Navbar';
import { Link } from 'react-router-dom';

const images = [
    hero1,
]; // Replace with your image URLs

const Default_page = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % images.length
      );
    }, 10000); // Change image every 10 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  const heroStyle = {
    backgroundImage: `url(${images[currentImageIndex]})`,
  };

  return (
    <section
      className="relative h-screen bg-cover bg-center bg-no-repeat font-poppins mb-8"
      style={heroStyle}
    >
         <Navbar />
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
      <div className="container mx-auto px-8 md:px-20">
        <p className=" text-h4 lg:text-h1 font-bold font-poppins text-white mb-4">
        404 - Page Not Found
        </p>
        <p className='text-white text-justify'>Sorry, the page you are looking for does not exist.</p>
       <Link to="/"> <button className="bg-blue text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">
          Back To Home
        </button></Link>
       </div>
      </div>
    </section>
  );
}

export default Default_page;
