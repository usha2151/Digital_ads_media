import React from 'react';
import hero1 from '../../images/Home/hero_2.jpg'; // Update with your image path
import hero2 from '../../images/Home/hero_3.jpg'; // Update with your image path


const VerticalBackground = () => {
  return (
    <>
    <div className='bg-white py-10 hidden lg:block'>
    <div className="h-screen relative">
      <div className="w-2/3 h-[550px] absolute top-0 left-0">
        <img
          src={hero1}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="w-full h-full absolute top-0 left-0 bg-sky opacity-80"></div> 
      </div>
      <div className="w-1/3 h-full absolute top-0 right-0 bg-white"></div>

      {/* Add the grid layout */}
      <div className="absolute top-0 left-0 w-full h-full grid lg:grid-cols-2 grid-cols-1 gap-6">
        {/* Column 1 */}
        
        <div className="bg-transparent p-4">
           <div className="flex items-center ml-20 justify-start mt-5">
               <p className="text-white font-bold text-h6">OUR SERVICES</p>
                 <div className="w-16 h-0.5 bg-white ml-2"></div> {/* Right Line */}
             </div> 
            <p className='text-white text-h4 font-poppins font-medium ml-20'>Power of Digital Marketing</p>
            <ul className="list-none mb-4 mt-4 ml-20">
  <li className="flex mb-2 gap-6">
    <span className="mr-2 text-h2 bg-opacity-20 bg-white text-white px-4 h-full mt-4" ><i className="fa-solid fa-users"></i></span>
    <div>
    <p className='text-white text-h5 font-bold font-poppins mt-2'>Unlimited Leads</p>
    <p className='text-white font-poppins text-[14px] mt-2'>Digital marketing can give you unlimited leads and you can use this to increase your business growth.</p>
    </div>
  </li>
  <li className="flex mb-2 gap-6">
    <span className="mr-2 text-h2 bg-opacity-20 bg-white text-white text-white px-4 h-full mt-4"><i className="fa-solid fa-cart-shopping"></i></span>
    <div>
    <p className='text-white text-h5 font-bold font-poppins mt-2'>Unlimited Sales</p>
    <p className='text-white font-poppins text-[14px] mt-2'>You Can increase your sales through digital marketing.By using digital marketing , you can sell your products in all over the world.</p>
    </div>
  </li>
  <li className="flex mb-2 gap-6">
    <span className="mr-2 text-h2 bg-opacity-20 bg-white text-white text-white px-6 h-full mt-4"><i className="fa-solid fa-money-bill-trend-up"></i></span>
    <div>
    <p className='text-white text-h5 font-poppins font-bold mt-2'>Selected Customer</p>
    <p className='text-white text-[14px] mt-2 font-poppins '>Digital marketing give you the power to select your own customer according to their behaviour. That can help you to categorize your sales.</p>
    </div>
  </li>
</ul>

        </div>

        {/* Column 2 */}
        <div className="bg-transparent py-4 relative ">
            
            <div className='flex w-68 justify-end -top-1 absolute left-[42.89%]'>
            <p className='bg-blue py-8 px-10'><i className="fa-solid fa-users text-h1 text-white"></i></p>
            <p className='text-h4 bg-white px-2 pt-4'>Let’s Get To Work Together</p>
            </div>
            <img src={hero2} className='h-[92%] mt-16' alt="work" />
            </div>

        {/* Add more columns as needed */}
      </div>
    </div>
    </div>

    <div className="relative mb-12 lg:hidden block">
      <div
        className="bg-cover bg-center h-screen relative"
        style={{
          backgroundImage: `url(${hero1})`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-sky opacity-70"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-start justify-center text-white">
        <div className="container mx-auto px-6 md:px-20">
        <div className="bg-transparent">
           <div className="flex items-center justify-start mt-4">
               <p className="text-white font-bold text-h6">OUR SERVICES</p>
                 <div className="w-16 h-0.5 bg-white ml-2"></div> {/* Right Line */}
             </div> 
            <p className='text-white text-h5 md:text-h4 font-poppins font-medium'>Power of Digital Marketing</p>
            <ul className="list-none mb-4 mt-4 ">
  <li className="flex mb-2 gap-6">
    <span className="mr-2 text-h2 bg-opacity-20 bg-white text-white px-4 h-full mt-4" ><i className="fa-solid fa-users"></i></span>
    <div>
    <p className='text-white text-[18px] font-bold font-poppins mt-2'>Unlimited Leads</p>
    <p className='text-white text-[12px] mt-2 font-poppins leading-4'>Digital marketing can give you unlimited leads and you can use this to increase your business growth.</p>
    </div>
  </li>
  <li className="flex mb-2 gap-6">
    <span className="mr-2 text-h2 bg-opacity-20 bg-white text-white text-white px-4 h-full mt-4"><i className="fa-solid fa-cart-shopping"></i></span>
    <div>
    <p className='text-white text-[18px] font-bold font-poppins mt-2'>Unlimited Sales</p>
    <p className='text-white text-[12px] mt-2 font-poppins leading-4'>You Can increase your sales through digital marketing.By using digital marketing , you can sell your products in all over the world.</p>
    </div>
  </li>
  <li className="flex mb-2 gap-6">
    <span className=" text-h2 bg-opacity-20 bg-white text-white text-white px-6 h-full mt-4"><i className="fa-solid fa-money-bill-trend-up"></i></span>
    <div>
    <p className='text-white text-[18px] font-poppins font-bold mt-2'>Selected Customer</p>
    <p className='text-white text-[12px] mt-2 font-poppins leading-4 '>Digital marketing give you the power to select your own customer according to their behaviour. That can help you to categorize your sales.</p>
    </div>
  </li>
</ul>
</div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default VerticalBackground;
