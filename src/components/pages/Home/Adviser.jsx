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
    <div className='container mx-auto px-6 md:px-16 mb-32 lg:mb-0'>
      <div className='grid lg:grid-cols-2 grid-cols-1 gap-4' style={{marginTop:'80px'}}>
        <div>
        <div className="flex items-center justify-start mt-5">
      <p className="px-2 text-sky font-bold text-h6">OUR SKILL</p>
      <div className="w-16 h-0.5 bg-blue ml-2"></div> {/* Right Line */}
    </div> 
    <p className='md:text-h3 text-h5 font-poppins font-bold mt-3'>Trust That You're Working The Best Advertiser</p>
    <p className='text-gray-100 lg:w-3/4 font-medium text-justify mt-4 leading-7'>
We’re pride of ourselves on transforming our clients for the better, helping them to grow & making them more resilient to pressure of consistent changes in the business. Invess Accounting Services offer a broad spectrum</p>  
      <div className='flex gap-4 md:gap-8 mt-5'>
      <button
          className={`text-black p-4 w-48 rounded-md ${
            selectedTab === 'mission' ? 'bg-blue text-white' : 'hover:bg-gray text-black border-b-4 border-blue'
          }`}
          onClick={() => handleTabClick('mission')}
        >
          Our Mission
        </button>
        <button
          className={`hover:bg-gray text-black border-b-4 border-blue p-4 w-48 rounded-md ${
            selectedTab === 'vision' ? 'bg-blue text-white' : ''
          }`}
          onClick={() => handleTabClick('vision')}
        >
          Our Vision
        </button>
        <button
          className={`hover:bg-gray hover:text-black border-b-4 border-blue p-4 w-48 rounded-md ${
            selectedTab === 'values' ? 'bg-blue text-white' : ''
          }`}
          onClick={() => handleTabClick('values')}
        >
          Our Values
        </button>
      </div>
      <div className='mt-5'>
        <p className='text-gray-100 lg:w-3/4 font-medium text-justify leading-7'>{tabContent[selectedTab].description}</p>
      </div>
      
        </div>
        <div>
          <div className="relative container">
  <img src={BestAdviser} alt="Bottom Image" className="md:w-96 w-56 h-[200px] md:h-[420px]" />
  <img src={BestAdviser} alt="Top Image" className="absolute md:top-40 top-28 left-24 md:left-40 md:w-96 w-52 h-[200px]  md:h-[350px] shadow border-white border-8 md:border-[20px]" />
</div>

       {/* <img src={OurAdviser}></img> */}
        </div>

      </div>
      </div>
    </>
  )
}

export default Adviser
