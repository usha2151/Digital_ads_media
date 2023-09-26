import React from 'react'
import { Affliate_Marketting, Mobile_Marketting, Social_media, Search_Engine, Our_Strategy } from '../../images'
const ServicesType = () => {
  return (
    <>
      <div className=''>
        {/* first row start */}
       <div className='grid grid-cols-1 md:grid-cols-2 p-8'>
        <div className='relative -mt-20'>
            <img src={Affliate_Marketting} className='w-3/4 mx-auto shadow-2xl'></img>
        </div>
        <div>
            <p className='text-blue font-bold'>Our Service</p>
            <p className='font-bold text-h5 mt-4'>Affiliate Marketing</p>
            <p className='text-gray w-3/4 mt-4 leading-7'>Looking towards working on a performance based model? We will help you get the right exposure to few of the best Affiliate Networks and publishers all across India.</p>
          <div className='w-3/4 h-0.5 bg-gray mt-4'></div>
          <button className='hover:bg-blue hover:text-white border-solid border-black p-6 mt-5'>Contact Us</button>
        </div>
       </div>
       {/* first row end */}

       {/* second row start */}
       <div className='grid grid-cols-1 md:grid-cols-2 p-8 bg-dimblue'>
       <div>
            <p className='text-white font-bold'>Our Service</p>
            <p className='font-bold text-h5 mt-4 text-white'>Strategy & Consulting</p>
            <p className='text-white w-3/4 mt-4 leading-7'>While you are the best judge for your own business but some questions are so important that they deserve an extra dose of creativity.We are here to help you.</p>
          <div className='w-3/4 h-0.5 bg-gray mt-4'></div>
          <button className='hover:bg-white hover:text-blue border-solid border-white p-6 mt-5'>Contact Us</button>
        </div>
        <div className='relative -mt-20'>
            <img src={Our_Strategy} className='w-3/4 mx-auto shadow-2xl'></img>
        </div>
        
       </div>
       {/* second row end */}

       {/* third row start */}
       <div className='grid grid-cols-1 md:grid-cols-2 p-8'>
        <div className='relative -mt-20'>
            <img src={Mobile_Marketting} className='w-3/4 mx-auto shadow-2xl'></img>
        </div>
        <div>
            <p className='text-blue font-bold'>Our Service</p>
            <p className='font-bold text-h5 mt-4'>Mobile Marketing</p>
            <p className='text-gray w-3/4 mt-4 leading-7'>Usually considered as a component of multi-channel campaign, with increasing wide spread use of smartphones. You should use this greate opertunity.</p>
          <div className='w-3/4 h-0.5 bg-white mt-4'></div>
          <button className='hover:bg-blue hover:text-white border-solid border-black p-6 mt-5 text-white'>Contact Us</button>
        </div>
       </div>
       {/* third row end */}

       {/* fourth row start */}
       <div className='grid grid-cols-1 md:grid-cols-2 p-8 bg-dimblue'>
        <div>
            <p className='text-white font-bold'>Our Service</p>
            <p className='font-bold text-h5 mt-4 text-white'>Search Engine Marketing</p>
            <p className='text-white w-3/4 mt-4 leading-7'>Looking towards working on a performance based model? We will help you get the right exposure to few of the best Affiliate Networks and publishers all across India.</p>
          <div className='w-3/4 h-0.5 bg-white mt-4'></div>
          <button className='hover:bg-white hover:text-blue border-solid border-white p-6 mt-5 text-white'>Contact Us</button>
        </div>
        <div className='relative -mt-20'>
            <img src={Search_Engine} className='w-3/4 mx-auto shadow-2xl'></img>
        </div>
       </div>
       {/* fourth row end */}

       {/* fifth row start */}
       <div className='grid grid-cols-1 md:grid-cols-2 p-8'>
        <div className='relative -mt-20'>
            <img src={Social_media} className='w-3/4 mx-auto shadow-2xl'></img>
        </div>
        <div>
            <p className='text-blue font-bold'>Our Service</p>
            <p className='font-bold text-h5 mt-4'>Social Media Marketing</p>
            <p className='text-gray w-3/4 mt-4 leading-7'>Looking towards working on a performance based model? We will help you get the right exposure to few of the best Affiliate Networks and publishers all across India.</p>
          <div className='w-3/4 h-0.5 bg-gray mt-4'></div>
          <button className='hover:bg-blue hover:text-white border-solid border-black p-6 mt-5'>Contact Us</button>
        </div>
       </div>
       {/* fifth row end */}

      </div>
    </>
  )
}

export default ServicesType
