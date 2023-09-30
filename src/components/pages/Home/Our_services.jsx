import React from 'react';
import hero1 from '../../images/Home/hero_2.jpg'; // Update with your image path
import hero2 from '../../images/Home/hero_3.jpg'; // Update with your image path


const VerticalBackground = () => {
  return (
    <div className='bg-white py-10 hidden lg:block'>
    <div className="h-screen relative">
      <div className="w-2/3 h-[auto] absolute top-0 left-0">
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
            <p className='text-white font-bold text-center'>OUR SERVICES DIGITAL MARKETING</p>
        </div>

        {/* Column 2 */}
        <div className="bg-transparent py-4 relative ">
            
            <div className='flex w-68 justify-end absolute z-20 left-[42.89%]'>
            <p className='bg-blue py-8 px-10'><i class="fa-solid fa-users text-h1 text-white"></i></p>
            <p className='text-h4 bg-white px-2 pt-4'>Let’s Get To Work Together</p>
            </div>
            <img src={hero2} className='h-[92%] mt-16' alt="" />
            </div>

        {/* Add more columns as needed */}
      </div>
    </div>
    </div>
  );
}

export default VerticalBackground;
