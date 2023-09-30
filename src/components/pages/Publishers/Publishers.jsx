import React from 'react'
import Navbar from '../../Common/Navbar';
import { Publisher_bg } from '../../images';
import AboutPublisher from './AboutPublisher';
import { Link } from 'react-router-dom';

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
        <div className="container mx-auto px-6 md:px-20">
          <p className="md:text-h1 text-h4 font-poppins font-bold">Publishers</p>
          <p className="md:text-h5 text-[16px] font-400 font-poppins">Join the Digital Revolution as a Publisher with Us!</p>

          {/* Buttons */}
          <div className="mt-6">
           <Link to="/contact_us"> <button className="px-6 py-4 bg-sky font-bold hover:bg-blue text-white mr-4">
              Contact Us 
            </button>
            </Link>
            <Link to="https://digitaladsmedia07.offer18.com/m"><button className="px-6 py-4 bg-sky hover:bg-blue font-bold text-white">
              Login In
            </button>
            </Link>
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
