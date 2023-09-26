import React from 'react'
import Navbar from '../../Common/Navbar';
import { Publisher_bg } from '../../images';
import AboutPublisher from './AboutPublisher';

const Publishers = () => {
  return (
    <>
    <div className="relative">
      <div
        className="bg-cover bg-center h-[480px] relative"
        style={{
          backgroundImage: `url(${Publisher_bg})`,
        }}
      >
        <Navbar />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-70"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-start justify-center text-white">
        <div className="container mx-auto px-20">
          <p className="text-h1 font-poppins font-bold">Publishers</p>
          <p className="text-h5 font-400 font-poppins">Join the Digital Revolution as a Publisher with Us!</p>

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
    <AboutPublisher />
    </>
  )
}

export default Publishers
