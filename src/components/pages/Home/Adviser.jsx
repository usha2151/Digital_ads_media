import React, { useState } from 'react'
import { BestAdviser, OurAdviser, OurAdviserAdviser } from '../../images'
const Adviser = () => {
    const [selectedTab, setSelectedTab] = useState('mission'); // Default tab

    const tabContent = {
      mission: {
        title: 'Our Mission',
        description:
          'To be a partner in your business growth by applying our digital marketing expertise and custom promotion strategy built on tools and technologies, creating value for your brand.',
      },
      vision: {
        title: 'Our Vision',
        description: 'Uprise Media will be the first choice digital marketing partner providing 360 degree marketing services to businesses throughout the region. We will become an integral part of our client’s success,',
      },
      values: {
        title: 'Our Values',
        description: 'Our values are the guiding principles upon which Uprise Media was founded and how we strive to conduct our business on a daily basis.',
      },
    };
  
    const handleTabClick = (tab) => {
      setSelectedTab(tab);
    };
  return (
    <>
      <div className='grid grid-cols-2 container mx-auto' style={{marginTop:'80px'}}>
        <div>
        <div className="flex items-center justify-start mt-5">
      <p className="px-2 text-sky font-bold text-h6">OUR SKILL</p>
      <div className="w-16 h-0.5 bg-blue ml-2"></div> {/* Right Line */}
    </div> 
    <p className='text-h3 font-bold mt-3'>Trust That You're Working The Best Advertiser</p>
    <p className='text-gray-100 w-3/4 font-medium mt-4 leading-7'>
We’re pride of ourselves on transforming our clients for the better, helping them to grow & making them more resilient to pressure of consistent changes in the business. Invess Accounting Services offer a broad spectrum</p>  
      <div className='flex gap-8 mt-5'>
      <button
          className={`bg-blue text-white p-4 w-48 rounded-md ${
            selectedTab === 'mission' ? 'bg-blue' : ''
          }`}
          onClick={() => handleTabClick('mission')}
        >
          Our Mission
        </button>
        <button
          className={`bg-blue text-white p-4 w-48 rounded-md ${
            selectedTab === 'vision' ? 'bg-blue' : ''
          }`}
          onClick={() => handleTabClick('vision')}
        >
          Our Vision
        </button>
        <button
          className={`bg-blue text-white p-4 w-48 rounded-md ${
            selectedTab === 'values' ? 'bg-blue' : ''
          }`}
          onClick={() => handleTabClick('values')}
        >
          Our Values
        </button>
      </div>
      <div className='mt-5'>
        <p className='text-gray-100 w-3/4 leading-7'>{tabContent[selectedTab].description}</p>
        <div className='flex mt-5'>
          <div className='justify-start'>
            <p className='font-bold text-sky text-h3'>
              1,700<span className='text-h5 text-blue'>+</span>
            </p>
            <p className='text-h4 text-gray-100 font-bold'>Our Publishers</p>
          </div>
          <div className='justify-end flex items-center'>
            <div className='w-1 h-16 bg-blue mr-4'></div> {/* Right Line */}
            <img src={BestAdviser} alt='Best Adviser' />
          </div>
        </div>
      </div>
      
        </div>
        <div>
       <img src={OurAdviser}></img>
        </div>

      </div>
    </>
  )
}

export default Adviser
