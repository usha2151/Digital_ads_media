import React from 'react'
import { BestAdviser, OurAdviser } from '../../images'
const Adviser = () => {
  return (
    <>
    <div className='container mx-auto px-16'>
      <div className='grid grid-cols-2 gap-4' style={{marginTop:'80px'}}>
        <div>
        <div className="flex items-center justify-start mt-5">
      <p className="px-2 text-sky font-bold text-h6">OUR SKILL</p>
      <div className="w-16 h-0.5 bg-blue ml-2"></div> {/* Right Line */}
    </div> 
    <p className='text-h3 font-bold mt-3'>Trust That You're Working The Best Advertiser</p>
    <p className='text-gray-100 w-3/4 font-medium mt-4 leading-7'>
We’re pride of ourselves on transforming our clients for the better, helping them to grow & making them more resilient to pressure of consistent changes in the business. Invess Accounting Services offer a broad spectrum</p>  
      <div className='flex gap-8 mt-5'>
        <button className='bg-blue text-white p-4 w-48 rounded-md'>Our Mission</button>
        <button className='bg-blue text-white p-4 w-48 rounded-md'>Our Vision</button>
        <button className='bg-blue text-white p-4 w-48 rounded-md'>Our Values</button>
      </div>
      <div className='mt-5'>
        <p className='text-gray-100 w-3/4 leading-7'>To be a partner in your business growth by applying our digital marketing expertise and custom promotion strategy built on tools and technologies, creating value for your brand.</p>
        <div className='flex mt-5'>
  <div className='justify-start'>
    <p className='font-bold text-sky text-h3'>1,700<span className='text-h5 text-blue'>+</span></p>
    <p className='text-h4 text-gray-100 font-bold'>Our Publishers</p>
  </div>
  <div className='justify-end flex items-center'>
    <div className="w-1 h-16 bg-blue mr-4"></div> {/* Right Line */}
    <img src={BestAdviser} alt="Best Adviser" />
  </div>
</div>

      </div>
      
        </div>
        <div>
       <img src={OurAdviser}></img>
        </div>

      </div>
      </div>
    </>
  )
}

export default Adviser
