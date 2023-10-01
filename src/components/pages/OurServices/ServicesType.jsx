import React from 'react'
import { Affliate_Marketting, Social_media, Search_Engine, Our_Strategy } from '../../images'
import brand_marking from "../../images/services/brand marketing.jpg";
import robot from "../../images/services/aichatbots.jpg";
import { Link } from 'react-router-dom';


const ServicesType = () => {
  return (
    <>
      <div className='container mx-auto'>
        {/* first row start */}
       <div className='grid grid-cols-1 lg:grid-cols-2 pt-8 pb-16'>
        <div className='relative -mt-16 lg:-mt-20'>
            <img src={Affliate_Marketting} className='w-80 lg:w-3/4 mx-auto shadow-2xl' alt='affliate'></img>
        </div>
        <div className='mx-4 lg:mx-0'>
            <p className='text-blue font-bold mt-6 lg:mt-0'>Our Service</p>
            <p className='font-bold text-h5 mt-4'>🚀 Affiliate Marketing 🤝</p>
            <p className='text-gray lg:w-3/4 mt-4 leading-7'>Harness the power of partnerships with our affiliate marketing services. Increase your revenue by collaborating with affiliates who promote your products or services, ensuring a win-win for all parties involved.</p>
          <div className='w-3/4 h-0.5 bg-gray mt-4'></div>
          <Link to="/contact_us"><button className='hover:bg-blue hover:text-white border-2 border-black p-6 mt-5'>Contact Us</button></Link>
        </div>
       </div>
       {/* first row end */}

       {/* second row start */}
       <div className='grid grid-cols-1 lg:grid-cols-2 pt-8 py-16 bg-dimblue'>
       <div className='order-2 lg:order-1 mx-4 lg:mx-24'>
            <p className='text-white font-bold mt-8 lg:mt-0'>Our Service</p>
            <p className='font-bold text-h5 mt-4 text-white'>🚀 SEO: Your Ticket to the Top</p>
            <p className='text-white lg:w-3/4 mt-4 leading-7'>Get noticed by your target audience with our SEO expertise. We optimize your website to rank higher in search engine results, driving organic traffic and enhancing your online visibility.</p>
          <div className='w-3/4 h-0.5 bg-gray mt-4'></div>
          <Link to="/contact_us"><button className='hover:bg-white hover:text-blue border-2 border-white p-6 mt-5 text-white'>Contact Us</button></Link>
        </div>
        <div className='relative -mt-20 lg:order-2'>
            <img  src={Search_Engine}  className='w-80 lg:w-3/4 mx-auto shadow-2xl' alt='search engin'></img>
        </div>
        
       </div>
       {/* second row end */}

       {/* third row start */}
       <div className='grid grid-cols-1 lg:grid-cols-2 lg:py-8 lg:pb-8 pb-16 pt-10'>
        <div className='relative -mt-20'>
            <img src={Our_Strategy} className='w-80 lg:w-3/4 h-56 lg:h-96 mx-auto shadow-2xl' alt='strategy'></img>
        </div>
        <div className='mx-4 lg:mx-0'>
            <p className='text-blue font-bold mt-8 lg:mt-0'>Our Service</p>
            <p className='font-bold text-h5 mt-4'>💥 Performance Marketing: ROI Unleashed</p>
            <p className='text-gray lg:w-3/4 mt-4 leading-7'>Achieve measurable results with our performance marketing strategies. We tailor campaigns to deliver maximum ROI, ensuring that every dollar you invest yields substantial returns.</p>
          <div className='w-3/4 h-0.5 bg-white lg:mt-4'></div>
          <Link to="/contact_us"><button className='hover:bg-blue hover:text-white border-2 border-black p-6 mt-5 text-black lg:mb-6'>Contact Us</button></Link>
        </div>
       </div>
       {/* third row end */}

       {/* fourth row start */}
       <div className='grid grid-cols-1 lg:grid-cols-2 py-8 pb-16 bg-dimblue'>
        <div className='order-2 lg:order-1 mx-4 lg:mx-24'>
            <p className='text-white font-bold mt-8 lg:mt-0'>Our Service</p>
            <p className='font-bold text-h5 mt-4 text-white'>🤖 AI Chatbots: Your 24/7 Digital Assistant</p>
            <p className='text-white lg:w-3/4 mt-4 leading-7'>Enhance customer engagement and support with AI-powered chatbots. Our chatbots provide instant responses, 24/7 availability, and personalized interactions to delight your customers.</p>
          <div className='w-3/4 h-0.5 bg-white mt-4'></div>
          <Link to="/contact_us"><button className='hover:bg-white hover:text-blue border-2 border-white p-6 mt-5 text-white'>Contact Us</button></Link>
        </div>
        <div className='relative -mt-20 lg:order-2'>
            <img src={robot} className='w-80 lg:w-3/4 h-80 mx-auto shadow-2xl' alt='robot'></img>
        </div>
       </div>
       {/* fourth row end */}

       {/* fifth row start */}
       <div className='grid grid-cols-1 lg:grid-cols-2 py-8 pb-8'>
        <div className='relative -mt-20'>
            <img src={Social_media} className='w-80 lg:w-3/4 mx-auto shadow-2xl' alt='social'></img>
        </div>
        <div className='mx-4 lg:mx-0'>
            <p className='text-blue font-bold mt-8 lg:mt-0'>Our Service</p>
            <p className='font-bold text-h5 mt-4'>🌐 Web and App Development: Dreams to Reality</p>
            <p className='text-gray lg:w-3/4 mt-4 leading-7'>Turn your ideas into reality with our web and app development services. Our skilled developers create user-friendly, responsive, and feature-rich websites and applications that align with your goals.</p>
          <div className='w-3/4 h-0.5 bg-gray mt-4'></div>
          <Link to="/contact_us"><button className='hover:bg-blue hover:text-white border-2 border-black p-6 mt-5 lg:mb-6'>Contact Us</button></Link>
        </div>
       </div>

       {/* fifth row end */}
       <div className='grid grid-cols-1 lg:grid-cols-2 py-8 pb-16 bg-dimblue'>
        <div className='order-2 lg:order-1 mx-4 lg:mx-24'>
            <p className='text-white font-bold mt-8 lg:mt-0'>Our Service</p>
            <p className='font-bold text-h5 mt-4 text-white'>🎨 Brand Marketing: We Craft Legends</p>
            <p className='text-white lg:w-3/4 mt-4 leading-7'>Build a strong brand identity and captivate your audience with our brand marketing solutions. We craft compelling brand stories and strategies that resonate with your target market, driving brand loyalty and recognition.</p>
          <div className='w-3/4 h-0.5 bg-white mt-4'></div>
          <Link to="/contact_us"><button className='hover:bg-white hover:text-blue border-2 border-white p-6 mt-5 text-white'>Contact Us</button></Link>
        </div>
        <div className='relative -mt-20 lg:order-2'>
            <img src={brand_marking} className='w-80 lg:w-3/4 h-80 mx-auto shadow-2xl' alt='brand'></img>
        </div>
       </div>
      </div>
    </>
  )
}

export default ServicesType
