import React from 'react'
import { homepage2nd } from '../../images'
import { Link } from 'react-router-dom'

const AboutAdvertiser = () => {
  return (
    <div className='container mx-auto px-6 lg:px-16 py-16'>
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
      <div>
        <img src={homepage2nd} alt="Publisher_ab" className='lg:h-[770px] md:h-[480px] h-[350px] w-full'/>
      </div>
      <div>
        <div className='flex gap-4'>
            <p className='text-sky font-poppins'>About Advertiser</p>
            <p className='w-20 h-[1px] bg-sky mt-[12px]'></p>
        </div>
        <p className='text-h4 font-poppins font-bold mb-4'>About Our Advertiser:</p>
        <p className='mb-4 text-justify'>Welcome to the advertising powerhouse! At Digil ads Media, we are excited to partner with you on your journey to elevate your brand and reach new heights in the digital realm.</p>
        <p className='font-bold text-h5 mb-4'>Why Advertise With Us?</p>
        <div className='ml-4'>
        <ul className="list-none mb-4">
  <li className="flex mb-2">
    <span className="mr-2">🚀</span>
    <p className='text-justify'>Strategic Reach: With our expertise in digital marketing, we ensure your ads reach the right audience at the right time, maximizing your ROI.</p>
  </li>
  <li className="flex mb-2">
    <span className="mr-2">📈</span>
    <p className='text-justify'>Data-Driven Insights: We provide in-depth analytics and data-driven insights to help you make informed decisions and optimize your ad campaigns.</p>
  </li>
  <li className="flex mb-2">
    <span className="mr-2">🔍</span>
    <p className='text-justify'>Search Engine Marketing (SEM): Boost your visibility with paid search advertising on major search engines.</p>
  </li>
  <li className="flex mb-2">
    <span className="mr-2">📲</span>
    <p className='text-justify'>Mobile Advertising: Reach consumers on the go with mobile-optimized ad campaigns.</p>
  </li>
  <li className="flex mb-2">
    <span className="mr-2">🎥</span>
    <p className='text-justify'>Video Advertising: Harness the power of video to engage and inform your audience.</p>
  </li>
  <li className="flex">
    <span className="mr-2">📊</span>
    <p className='text-justify'>Programmatic Advertising: Automate your ad buying process for more efficient and effective campaigns.</p>
  </li>
</ul>
        <p className='text-h5 font-bold font-poppins mb-2'>Get Started Today</p>
        <p>Take the first step towards a successful advertising journey with us. We can't wait to see your brand shine! 🌟🚀</p>
        <div className="mt-6">
            <Link to="/contact_us"><button className="md:px-6 px-4 py-4 bg-sky font-bold hover:bg-blue text-white mr-4">
              Contact Us 
            </button>
            </Link>
            <Link to="/contact_us"><button className="md:px-6 px-4 py-4 bg-sky hover:bg-blue font-bold text-white">
            Advertise With Us
            </button>
            </Link>
            </div>
        </div>
      </div>
    </div>
    </div>

  )
}

export default AboutAdvertiser
