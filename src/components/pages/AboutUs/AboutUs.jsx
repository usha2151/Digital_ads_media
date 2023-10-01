import React from 'react'
import Navbar from '../../Common/Navbar';
import { advertisers_bg } from '../../images';
import Custome_Relationship from '../Home/Custome_Relationship';
import Adviser from '../Home/Adviser';
import WorkProcess from './WorkProcess';
const AboutUs = () => {
  return (
    <div className='mb-14'>
    <div className="relative">
      <div
        className="bg-cover bg-center h-96 relative"
        style={{
          backgroundImage: `url(${advertisers_bg})`,
        }}
      >
        <Navbar />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-70"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-start justify-center text-white">
        <div className="container mx-auto px-6 lg:px-20">
          <p className="text-h1 font-poppins font-bold mt-32">About Us</p>
          <div className="flex gap-16">
    <span className="mr-2 text-[20px] text-white font-poppins">Follow Us On</span>
   <div className='flex gap-2'>
    <p className='bg-blue rounded-md px-2 text-white text-h5'><i className="fa-brands fa-facebook"></i></p>
    <p className='bg-blue rounded-md px-2 text-white text-h5'><i className="fa-brands fa-twitter"></i></p>
    <p className='bg-blue rounded-md px-2 text-white text-h5'><i className="fa-brands fa-instagram"></i></p>
    <p className='bg-blue rounded-md px-2 text-white text-h5'><i className="fa-brands fa-linkedin"></i></p>
   </div>
  </div>      
          </div>
        </div>
      </div>
    </div>
    <Custome_Relationship />
   <WorkProcess />
    <Adviser />
    </div>

  )
}

export default AboutUs
