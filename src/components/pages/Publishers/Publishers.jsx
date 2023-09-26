import React from 'react'
import hero2 from "../../images/Home/hero_2.jpg";
import Navbar from '../../Common/Navbar';

const Publishers = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <div
        className="bg-cover bg-center h-96 relative"
        style={{
          backgroundImage: `url(${hero2})`,
        }}
      >
        <Navbar />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-start justify-center text-white">
        <div className="container mx-auto px-20">
          <p className="text-h1 font-poppins font-bold">Publishers</p>
          <p className="text-h5 font-400">Join as a publisher with Uprise Media now….</p>

          {/* Buttons */}
          <div className="mt-6">
            <button className="px-6 py-4 bg-sky font-bold hover:bg-blue text-white mr-4">
              Contact Us 
            </button>
            <button className="px-6 py-4 bg-sky hover:bg-blue font-bold text-white">
              Login In
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Publishers
