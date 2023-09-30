import React from 'react'
import hero from "../../images/Home/hero_3.jpg";
import Navbar from '../../Common/Navbar';
import { ServiceCard } from '../../constants/data';
import ServicesType from './ServicesType';
import { Link } from 'react-router-dom';

const OurServices = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <div
        className="bg-cover bg-center h-[450px] relative"
        style={{
          backgroundImage: `url(${hero})`,
        }}
      >
        <Navbar />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <p className="lg:text-h1 text-h3 font-poppins font-bold">Our Service</p>
          <p className="text-h6 font-bold text-center lg:px-16 text-whte lg:w-1/2">Welcome to our suite of services designed to boost your online presence and help your business thrive. At Digital Ads Media, we offer solutions that meet your digital marketing and development needs.</p>

          {/* Buttons */}
          <div className="mt-6">
          <Link to="https://digitaladsmedia07.offer18.com/m"><button className="px-4 py-3 md:px-6 md:py-4 bg-sky font-bold hover:bg-blue text-white mr-2 md:mr-4">
            <i class="fa-regular fa-circle-right mr-2"></i>Affilate Sign Up
            </button>
            </Link>
            <Link to="https://digitaladsmedia07.offer18.com/m"> <button className="px-4 py-3 md:px-6 md:py-4 bg-sky font-bold hover:bg-blue text-white">
            <i class="fa-regular fa-circle-right mr-2"></i>Affilate Login In
            </button>
            </Link>
          </div>
        </div>
      </div>

{/* services card */}
<div className='bg-dimblue pt-1 pb-24 lg:pt-0 lg:pb-0 lg:p-0 h-3/4 lg:h-96'>
<div className='container mx-auto'>

<div className='grid grid-cols-1 gap-4 lg:gap-2  lg:grid-cols-6'>
  {ServiceCard.map((data,index)=>
    <div key={index} className='bg-white text-center mx-auto mt-4 w-80 lg:w-40 xl:w-48 p-2 lg:p-8 rounded-lg md:relative lg:-mt-24'>
<span className='font-bold text-h3 text-sky  rounded-md w-16 py-2 mx-auto'>{data.icon}</span>
<p className='font-bold text-h6 mt-2 md:mt-4'>{data.service}</p>
</div>
  )}
</div>
</div>
</div>

{/* types of services */}

<ServicesType />

    </div>
  )
}

export default OurServices
