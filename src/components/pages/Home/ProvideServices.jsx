import React from 'react'
import { ServiceProvider } from '../../constants/data';


const ProvideServices = () => {
  return (
    <div className='container mx-auto px-6 md:px-16'>
    <div className='text-center'>
    <div className="flex items-center justify-center mt-5">
      <div className="w-16 h-0.5 bg-blue mr-2"></div> {/* Left Line */}
      <p className="px-2 text-sky font-bold text-h6">WHAT WE DO</p>
      <div className="w-16 h-0.5 bg-blue ml-2"></div> {/* Right Line */}
    </div>

    <p className='md:text-h3 text-h4 font-bold font-poppins mt-5'>Services We Use To Provide</p>

    <div className='mt-5'>
        <div className='grid gap-12 mx-auto lg:grid-cols-3 grid-cols-1 md:grid-cols-2 '>
            {ServiceProvider.map((data,index)=>
                <div className=' h-auto bg-white p-4 shadow-xl' key={index}>
                    <div className='font-bold text-h3 text-sky hover:bg-sky hover:text-white rounded-md w-16 py-2 mx-auto'>{data.icon}</div>
                <p className='text-h5 fw-bolder'>{data.serviceType}</p>
                <p className='mt-2 p-2 text-gray-100'>{data.description}</p>

            </div>
            )}
            

        </div>
    </div>
    </div>
    </div>
  )
}

export default ProvideServices
