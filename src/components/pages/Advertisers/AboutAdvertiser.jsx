import React from 'react'
import { Publisher_ab } from '../../images'

const AboutAdvertiser = () => {
  return (
    <div className='container mx-auto px-16 py-16'>
    <div className='grid grid-cols-2 gap-6'>
      <div>
        <img src={Publisher_ab} alt="Publisher_ab" className='h-[1100px] w-full'/>
      </div>
      <div>
        <div className='flex gap-4'>
            <p className='text-sky font-poppins'>About Advertiser</p>
            <p className='w-20 h-[1px] bg-sky mt-[12px]'></p>
        </div>
        <p className='text-h4 font-poppins font-bold mb-4'>About Our Advertiser:</p>
        <p className='mb-4'>Welcome to the advertising powerhouse! At Digil ads Media, we are excited to partner with you on your journey to elevate your brand and reach new heights in the digital realm.</p>
        <p className='font-bold text-h5 mb-4'>Why Advertise With Us?</p>
        <div className='ml-4'>
        <ul class="list-none mb-4">
  <li class="flex mb-2">
    <span class="mr-2">🚀</span>
    Strategic Reach: With our expertise in digital marketing, we ensure your ads reach the right audience at the right time, maximizing your ROI.
  </li>
  <li class="flex mb-2">
    <span class="mr-2">📈</span>
    Data-Driven Insights: We provide in-depth analytics and data-driven insights to help you make informed decisions and optimize your ad campaigns.
  </li>
  <li class="flex mb-2">
    <span class="mr-2">🎯</span>
    Precise Targeting: Our advanced targeting options ensure that your message resonates with your ideal customers, increasing your chances of conversion.
  </li>
  <li class="flex mb-2">
    <span class="mr-2">💡</span>
    Creative Excellence: We collaborate with talented creatives to design eye-catching ad campaigns that capture attention and leave a lasting impression.
  </li>
  <li class="flex mb-2">
    <span class="mr-2">💡</span>
    Collaborative Community: Join a supportive community of like-minded creators and collaborate on exciting projects.
  </li><li class="flex mb-2">
    <span class="mr-2">🌐</span>
    Global Exposure: Expand your brand's reach beyond borders and tap into new markets with our global advertising solutions.
  </li>
  <li class="flex mb-2">
    <span class="mr-2">🤝</span>
    Partnership Approach: We see our advertisers as partners, and your success is our top priority. We work closely with you to meet your unique goals.
    Our Advertising Services
  </li>
  <li class="flex mb-2">
    <span class="mr-2">📣</span>
    Display Advertising: Make a visual impact with banner ads and rich media across websites and apps.
  </li>
  <li class="flex mb-2">
    <span class="mr-2">🔍</span>
    Search Engine Marketing (SEM): Boost your visibility with paid search advertising on major search engines.
  </li>
  <li class="flex mb-2">
    <span class="mr-2">📲</span>
    Mobile Advertising: Reach consumers on the go with mobile-optimized ad campaigns.
  </li>
  <li class="flex mb-2">
    <span class="mr-2">💬</span>
    Social Media Advertising: Connect with your audience on popular social platforms like Facebook, Instagram, Twitter, and LinkedIn.
  </li>
  <li class="flex mb-2">
    <span class="mr-2">🎥</span>
    Video Advertising: Harness the power of video to engage and inform your audience.
  </li>
  <li class="flex">
    <span class="mr-2">📊</span>
    Programmatic Advertising: Automate your ad buying process for more efficient and effective campaigns.
  </li>
</ul>
        <p className='text-h5 font-bold font-poppins mb-2'>Get Started Today</p>
        <p>Take the first step towards a successful advertising journey with us. We can't wait to see your brand shine! 🌟🚀</p>
        <div className="mt-6">
            <button className="px-6 py-4 bg-sky font-bold hover:bg-blue text-white mr-4">
              Contact Us 
            </button>
            <button className="px-6 py-4 bg-sky hover:bg-blue font-bold text-white">
            Advertise With Us
            </button>
            </div>
        </div>
      </div>
    </div>
    </div>

  )
}

export default AboutAdvertiser
