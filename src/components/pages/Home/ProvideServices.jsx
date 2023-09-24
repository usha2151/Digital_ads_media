import React from 'react'
import { ServiceProvider } from '../../constants/data'
const ProvideServices = () => {
  return (
    <>
    <div className='text-center'>
          <div className="flex items-center justify-center mt-5">
      <div className="w-10 h-2 bg-blue-500 mr-2"></div> {/* Left Line */}
      <p className="mx-2">WHAT WE DO</p>
      <div className="w-10 h-2 bg-blue-500 ml-2"></div> {/* Right Line */}
    </div>

    <p className='text-h3'>Services We Use To Provide</p>

    <div>
        <div className='flex gap-4 mx-auto flex-wrap'>
            {ServiceProvider.map((data,index)=>
                <div className='w-48 h-auto bg-sky p-4 shadow-xl' key={index}>
                <p className='text-h5 fw-bolder'>{data.serviceType}</p>
                <p className='mt-2 p-2'>{data.description}</p>

            </div>
            )}
            

        </div>
    </div>
    </div>
    </>
  )
}

export default ProvideServices
