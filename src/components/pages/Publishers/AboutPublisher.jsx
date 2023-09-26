import React from 'react'
import { Publisher_ab } from '../../images';


const AboutPublisher = () => {
  return (
    <div className='container mx-auto px-16 py-16'>
    <div className='grid grid-cols-2 gap-6'>
      <div>
        <img src={Publisher_ab} alt="Publisher_ab" className='h-[848px] w-full'/>
      </div>
      <div>
        <div className='flex gap-4'>
            <p className='text-sky font-poppins'>About Publisher</p>
            <p className='w-20 h-[1px] bg-sky mt-[12px]'></p>
        </div>
        <p className='text-h4 font-poppins font-bold mb-4'>About Our Publisher Service:</p>
        <p className='mb-4'>Are you a content creator, influencer, or digital wizard looking to make your mark in the online world? Join our thriving community of publishers and unlock a world of opportunities with Digintal ads media.</p>
        <p className='font-bold text-h5 mb-4'>Why Join Us as a Publisher?</p>
        <div className='ml-4'>
        <ul class="list-none mb-4">
  <li class="flex mb-2">
    <span class="mr-2">✨</span>
    Diverse Opportunities: As a publisher with us, you'll gain access to a wide range of opportunities to showcase your talents and content.
  </li>
  <li class="flex mb-2">
    <span class="mr-2">🚀</span>
    Monetization: We offer lucrative monetization strategies to help you turn your passion into profit.
  </li>
  <li class="flex mb-2">
    <span class="mr-2">🌐</span>
    Global Reach: Reach a worldwide audience and expand your online presence beyond borders.
  </li>
  <li class="flex mb-2">
    <span class="mr-2">📈</span>
    Performance Metrics: Get real-time insights into your content's performance and audience engagement.
  </li>
  <li class="flex mb-2">
    <span class="mr-2">💡</span>
    Collaborative Community: Join a supportive community of like-minded creators and collaborate on exciting projects.
  </li><li class="flex mb-2">
    <span class="mr-2">🤑</span>
    Competitive Compensation: We believe your hard work deserves fair compensation, and we offer competitive rates.
  </li>
  <li class="flex mb-2">
    <span class="mr-2">📢</span>
    Marketing Support: Benefit from our marketing expertise to promote your content effectively.
  </li>
  <li class="flex">
    <span class="mr-2">🔒</span>
    Security: We prioritize the security and privacy of your content and data.
  </li>
</ul>
        <p className='text-h5 font-bold font-poppins mb-2'>How to Get Started ?</p>
        <p>Becoming a publisher with Digital Ads Media is easy! Simply <br /><p className='bg-sky text-center  py-2 font-bold font-poppins text-white w-36 mt-4'>Registration</p> <br/>and start your journey towards digital success today.</p>
        <p>Join us and become a driving force in the digital revolution! 🌟📢🌐</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default AboutPublisher