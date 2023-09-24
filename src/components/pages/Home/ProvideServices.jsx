import React from 'react'
import { ServiceProvider } from '../../constants/data'
const ProvideServices = () => {
  return (
    <>
    <div className='text-center container mx-auto w-4/5'>
    <div className="flex items-center justify-center mt-5">
      <div className="w-16 h-0.5 bg-blue mr-2"></div> {/* Left Line */}
      <p className="px-2 text-sky font-bold text-h6">WHAT WE DO</p>
      <div className="w-16 h-0.5 bg-blue ml-2"></div> {/* Right Line */}
    </div>

    <p className='text-h3 mt-5'>Services We Use To Provide</p>

    <div className='mt-5'>
        <div className='flex gap-5 mx-auto flex-wrap'>
            {ServiceProvider.map((data,index)=>
                <div className='w-48 h-auto bg-white p-4 shadow-xl' key={index}>
                    <div>{data.icon}</div>
                <p className='text-h5 fw-bolder'>{data.serviceType}</p>
                <p className='mt-2 p-2 text-gray-100'>{data.description}</p>

            </div>
            )}
            

        </div>
    </div>
    </div>
    </>
  )
}

export default ProvideServices
