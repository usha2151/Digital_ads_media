import React from 'react'
import hero from "../../images/Home/hero_3.jpg";
import Navbar from '../../Common/Navbar';
import { ServiceCard } from '../../constants/data';
import ServicesType from './ServicesType';
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
        <p className="text-h1 font-poppins font-bold">Our Service</p>
          <p className="text-h6 font-bold text-gray">We Use to offer many useful services that can add some value in your life or business.</p>

          {/* Buttons */}
          <div className="mt-6">
            <button className="px-6 py-4 bg-sky font-bold hover:bg-blue text-white mr-4">
            <i class="fa-regular fa-circle-right mr-2"></i>Affilate Sign Up
            </button>
            <button className="px-6 py-4 bg-sky font-bold hover:bg-blue text-white">
            <i class="fa-regular fa-circle-right mr-2"></i>Affilate Login In
            </button>
          </div>
        </div>
      </div>

{/* services card */}
<div className='bg-dimblue h-96'>
<div className='container mx-auto'>

<div className='grid grid-cols-1 md:grid-cols-5'>
  {ServiceCard.map((data,index)=>
    <div key={index} className='bg-white text-center mx-auto w-56 p-8 rounded-lg md:relative md:-mt-24'>
<span className='font-bold text-h3 text-sky  rounded-md w-16 py-2 mx-auto'>{data.icon}</span>
<p className='font-bold text-h6  mt-4'>{data.service}</p>
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
