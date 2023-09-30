import React from 'react'
import { Marketing, Google_Product, Error_404 } from "../../images"
import Navbar from '../../Common/Navbar'

const Artical_blog = () => {
  return (
    <>
    <div className='bg-black'>
    <Navbar  />
    </div>
    <div className='container px-16 lg:px-12 mt-24 mb-12'>
      
      <div class="grid grid-cols-12 gap-16">
         <div class="md:col-span-9 col-span-12">
         <img src={Marketing} alt="marketing" className='h-[450px] w-full'/>
         <p className='text-h3 font-medium font-poppins'>What Are Soft 404s and How to Fix Them</p>
         <div className='flex gap-4 border-b border-t border-gray py-4 item-center'>
             <p className='flex gap-2'> 
                <i class="fa-regular fa-user text-black mt-1"></i>
                <p>Digitaladsmedia -</p>
             </p>
             <p className='flex gap-2'> 
               <i class="fa-regular fa-clock mt-1"></i>
                <p>January 18, 2023 -</p>
             </p>
             <p className='flex gap-2'> 
               <i class="fa-regular fa-folder mt-1"></i>
                <p>uncategorized -</p>
             </p>
             <p className='flex gap-2'> 
              <i class="fa-regular fa-comment mt-1"></i>
                <p>0 comments</p>
             </p>
         </div>
         <p className='text-justify text-[14px] mt-6 '>You’re likely already familiar with 404 errors that display a “page not found” message to visitors. While these pages serve a purpose, they can be harmful to your website if misused.</p>
         <p className='text-justify text-[14px] mt-4'>You’re likely already familiar with 404 errors that display a “page not found” message to visitors. While these pages serve a purpose, they can be harmful to your website if misused.</p>
         <p className='text-justify text-[14px] mt-4'>You’re likely already familiar with 404 errors that display a “page not found” message to visitors. While these pages serve a purpose, they can be harmful to your website if misused.</p>
          
         <div className='border-t border-b border-gray mt-6 py-6'>
             <div className="flex items-center justify-start gap-2 mt-5 mb-4">
               <i class="fa-solid fa-chevron-right text-sky"></i>
               <p className="text-black font-bold text-h6">YOU MIGHT ALSO LIKE</p>
             </div> 
             <div className="grid grid-cols-3 gap-4 mb-4">
                 <div className='shadow'>
                    <img src={Marketing} alt="marketing" className='w-full h-56 object-cover'/>
                    <p className='font-bold text-[16px] text-center mt-4'>Account-Based Marketing:<br /> Past, Present, and Future</p>
                    <p className='flex gap-2 justify-center mb-4'> 
                       <i class="fa-regular fa-clock mt-1"></i>
                       <p>January 18, 2023</p>
                      </p>
                 </div>
                 <div className='shadow'>
                    <img src={Google_Product} alt="marketing" className='w-full h-56 object-cover'/>
                    <p className='font-bold text-[16px] text-center mt-4'>Account-Based Marketing:<br /> Past, Present, and Future</p>
                    <p className='flex gap-2 justify-center mb-4'> 
                       <i class="fa-regular fa-clock mt-1"></i>
                       <p>January 18, 2023</p>
                      </p>
                 </div>
                 <div className='shadow'>
                    <img src={Error_404} alt="marketing" className='w-full h-56 object-cover'/>
                    <p className='font-bold text-[16px] text-center mt-4'>Account-Based Marketing:<br /> Past, Present, and Future</p>
                    <p className='flex gap-2 justify-center mb-4'> 
                       <i class="fa-regular fa-clock mt-1"></i>
                       <p>January 18, 2023</p>
                      </p>
                 </div>
             </div>
         </div>
     
         <p className='text-black font-bold text-h5 mt-6'>Leave a Reply</p>
  <div>
  <div class="mt-4">
    <label for="textarea" class="block mb-2">Textarea</label>
    <textarea id="textarea" class="w-full p-2 border border-gray rounded" rows="4" placeholder='Your comment here...'></textarea>
  </div>

  
  <div class=" grid grid-cols-3 gap-8 mt-4">
    <div className=''>
    <input type="text" id="input1" placeholder='Name(required)' class="w-full p-2 border border-gray rounded mb-4" />
    </div>
    <div className=''>
    <input type="text" id="input2" placeholder='Email(required)' class="w-full p-2 border border-gray rounded mb-4" />
    </div>
 
    <div className=''>
    <input type="text" id="input3" placeholder='Website' class="w-full p-2 border border-gray rounded" />
    </div>
  </div>

  
  <div class="py-2">
    <label class="flex items-center mb-2">
      <input type="checkbox" class="mr-2" />
      Save my name, email, and website in this browser for the next time I comment.
    </label>
  </div>

  
  <div class=" p-4 flex justify-end items-end">
    <button class="px-8 py-3 bg-blue font-poppins text-white hover:bg-sky ">
      Post Comment
    </button>
  </div>
</div>




        </div>

       <div class="md:col-span-3 col-span-12">
        <div class="flex">
         <input type="text" class="w-full px-4 py-2 border border-black outline-none " placeholder="Search..." />
           <button type="button" class="px-4 py-2 bg-sky text-white border border-black hover:bg-blue" >
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