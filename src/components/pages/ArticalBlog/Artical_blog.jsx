import React from 'react'
import { Marketing, Google_Product, Error_404 } from "../../images"
import Navbar from '../../Common/Navbar'
import { Link } from 'react-router-dom'

const Artical_blog = () => {
  return (
    <>

<div className="relative">
      <div
        className="bg-cover bg-center h-[480px] relative"
        style={{
          backgroundImage: `url(${Marketing})`,
        }}
      >
        <Navbar />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-70"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-start justify-center text-white">
        <div className="container mx-auto px-6 md:px-20">

          
          <p className="md:text-h1 text-h4 font-poppins font-bold">Blog</p>
          <p className="md:text-h6 text-[16px] font-400 font-poppins">Blogging has become a popular means of expressing ideas, sharing knowledge,<br></br> and engaging with audiences online. </p>

          {/* Buttons */}
          <div className="mt-6">
          <Link to="/contact_us">  <button className="px-6 py-4 bg-sky font-bold hover:bg-blue text-white mr-4">
              Contact Us 
            </button>
            </Link>
            <Link to="https://digitaladsmedia07.offer18.com/m"><button className="px-6 py-4 bg-sky hover:bg-blue font-bold text-white">
              Login In
            </button>
            </Link>
            </div>


          </div>
        </div>
      </div>
    </div>

    <div className='container px-16 lg:px-12 mt-24 mb-12'>
      
      <div className="grid grid-cols-12 gap-16">
         <div className="md:col-span-9 col-span-12">
         <img src={Marketing} alt="marketing" className='h-[450px] w-full'/>
         <p className='text-h3 font-medium font-poppins'>What Are Soft 404s and How to Fix Them</p>
         <div className='flex gap-4 border-b border-t border-gray py-4 item-center'>
             <p className='flex gap-2'> 
                <i className="fa-regular fa-user text-black mt-1"></i>
                <p>Digitaladsmedia -</p>
             </p>
             <p className='flex gap-2'> 
               <i className="fa-regular fa-clock mt-1"></i>
                <p>January 18, 2023 -</p>
             </p>
             <p className='flex gap-2'> 
               <i className="fa-regular fa-folder mt-1"></i>
                <p>uncategorized -</p>
             </p>
             <p className='flex gap-2'> 
              <i className="fa-regular fa-comment mt-1"></i>
                <p>0 comments</p>
             </p>
         </div>
         <p className='text-justify text-[14px] mt-6 '>You’re likely already familiar with 404 errors that display a “page not found” message to visitors. While these pages serve a purpose, they can be harmful to your website if misused.</p>
         <p className='text-justify text-[14px] mt-4'>You’re likely already familiar with 404 errors that display a “page not found” message to visitors. While these pages serve a purpose, they can be harmful to your website if misused.</p>
         <p className='text-justify text-[14px] mt-4'>You’re likely already familiar with 404 errors that display a “page not found” message to visitors. While these pages serve a purpose, they can be harmful to your website if misused.</p>
          
         <div className='border-t border-b border-gray mt-6 py-6'>
             <div className="flex items-center justify-start gap-2 mt-5 mb-4">
               <i className="fa-solid fa-chevron-right text-sky"></i>
               <p className="text-black font-bold text-h6">YOU MIGHT ALSO LIKE</p>
             </div> 
             <div className="grid grid-cols-3 gap-4 mb-4">
                 <div className='shadow'>
                    <img src={Marketing} alt="marketing" className='w-full h-56 object-cover'/>
                    <p className='font-bold text-[16px] text-center mt-4'>Account-Based Marketing:<br /> Past, Present, and Future</p>
                    <p className='flex gap-2 justify-center mb-4'> 
                       <i className="fa-regular fa-clock mt-1"></i>
                       <p>January 18, 2023</p>
                      </p>
                 </div>
                 <div className='shadow'>
                    <img src={Google_Product} alt="google_marketing" className='w-full h-56 object-cover'/>
                    <p className='font-bold text-[16px] text-center mt-4'>Account-Based Marketing:<br /> Past, Present, and Future</p>
                    <p className='flex gap-2 justify-center mb-4'> 
                       <i className="fa-regular fa-clock mt-1"></i>
                       <p>January 18, 2023</p>
                      </p>
                 </div>
                 <div className='shadow'>
                    <img src={Error_404} alt="acount-marketing" className='w-full h-56 object-cover'/>
                    <p className='font-bold text-[16px] text-center mt-4'>Account-Based Marketing:<br /> Past, Present, and Future</p>
                    <p className='flex gap-2 justify-center mb-4'> 
                       <i className="fa-regular fa-clock mt-1"></i>
                       <p>January 18, 2023</p>
                      </p>
                 </div>
             </div>
         </div>
     
         <p className='text-black font-bold text-h5 mt-6'>Leave a Reply</p>
  <div>
  <div className="mt-4">
    <label for="textarea" className="block mb-2">Textarea</label>
    <textarea id="textarea" className="w-full p-2 border border-gray rounded" rows="4" placeholder='Your comment here...'></textarea>
  </div>

  
  <div className=" grid grid-cols-3 gap-8 mt-4">
    <div className=''>
    <input type="text" id="input1" placeholder='Name(required)' className="w-full p-2 border border-gray rounded mb-4" />
    </div>
    <div className=''>
    <input type="text" id="input2" placeholder='Email(required)' className="w-full p-2 border border-gray rounded mb-4" />
    </div>
 
    <div className=''>
    <input type="text" id="input3" placeholder='Website' className="w-full p-2 border border-gray rounded" />
    </div>
  </div>

  
  <div className="py-2">
    <label className="flex items-center mb-2">
      <input type="checkbox" className="mr-2" />
      Save my name, email, and website in this browser for the next time I comment.
    </label>
  </div>

  
  <div className=" p-4 flex justify-end items-end">
    <button className="px-8 py-3 bg-blue font-poppins text-white hover:bg-sky ">
      Post Comment
    </button>
  </div>
</div>




        </div>

       <div className="md:col-span-3 col-span-12">
        <div className="flex">
         <input type="text" className="w-full px-4 py-2 border border-black outline-none " placeholder="Search..." />
           <button type="button" className="px-4 py-2 bg-sky text-white border border-black hover:bg-blue" >
             Search
           </button>
        </div>
        <p className='text-black font-bold text-h5 mt-6'>Leave a Reply</p>
           <p className='text-justify text-[14px] mt-4 text-black'>
              Account-Based Marketing: Past, Present, and Future<br/> 
              What Google’s Product Review Update Means for Your Ecommerce Site<br/>
              What Are Soft 404s and How to Fix Them<br/>
T             he Ultimate Guide to Improving Your Website Performance<br/>
         </p>
         <p className='text-black font-bold text-h5 mt-6'>Recent Comments</p>
         <p className='text-black text-end text-h6 mt-4'>Recent Comments</p>
         <p className='text-black font-bold text-h4 mt-8'>Archives</p>
         <p className='text-black text-h6 mt-4'>January 2022</p>
         <p className='text-black font-bold text-h4 mt-8'>Categories</p>
         <p className='text-black text-h6 mt-4'>Uncategorized</p>
         
    </div>
     </div>
    </div>
    </>
  )
}

export default Artical_blog
