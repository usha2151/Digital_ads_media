import React from 'react'
import { About } from '../../images'
const WorkProcess = () => {
  return (
    <>
      <div className='container mx-auto px-6 lg:px-16 mt-8 lg:mt-32'>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div className='order-last lg:order-first'>
            <div className="flex items-center">
            <p className='text-sky font-thin'>WORK PROCESS</p>
      <div className="w-16 h-0.5 bg-sky ml-2"></div> {/* Right Line */}
    </div>
                <p className='md:text-h3 text-h4 font-bold'>About Our Services</p>
                <div className='flex gap-5 mt-5'>
                <span className='font-bold text-h3 text-white bg-dimblue  rounded-md h-[70px] px-6 mx-auto mt-2' ><i class="fa-solid fa-star"></i></span>
                <div>
                    <p className='font-bold text-h5'>Meeting</p>
                    <p className='text-gray w-3/4 mt-2 text-justify'>At first we understand all the requrements before execution. So that we can get more accurate result.</p>
                </div>
                </div>

                <div className='flex gap-5 mt-5'>
                <span className='font-bold text-h3 text-white bg-dimblue  rounded-md h-[70px] px-6 mx-auto mt-2'><i class="fa-solid fa-code"></i></span>
                <div>
                    <p className='font-bold text-h5'>Planning</p>
                    <p className='text-gray w-3/4 mt-2 text-justify'>Planning is always done keeping the end goal .We also prepared an alternative plan to make sure our success.</p>
                </div>
                </div>

                <div className='flex gap-5 mt-5'>
                <span className='font-bold text-h3 text-white bg-dimblue  rounded-md h-[70px] px-6 mx-auto mt-2'><i class="fa-solid fa-star"></i></span>
                <div>
                    <p className='font-bold text-h5'>Executions</p>
                    <p className='text-gray w-3/4 mt-2 text-justify'>After successful planning, we use to execute our plan according to our clients requerment.</p>
                </div>
                </div>

                <div className='flex gap-5 mt-5'>
                <span className='font-bold text-h3 text-white bg-dimblue  rounded-md h-[70px] px-6 mx-auto mt-2'><i class="fa-solid fa-chart-simple"></i></span>
                <div>
                    <p className='font-bold text-h5'>Results</p>
                    <p className='text-gray w-3/4 mt-2 text-justify'>After all those steps you can expect fantastic result of our campaign. You can see the changes on your business.</p>
                </div>
                </div>
            </div>
            <div className='order-first lg:order-last'>
                <img src={About} className='mb-8 md:mt-0'></img>
            </div>

        </div>
      </div>
    </>
  )
}

export default WorkProcess
