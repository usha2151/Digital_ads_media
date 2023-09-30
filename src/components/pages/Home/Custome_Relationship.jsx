import React from 'react'
import { CustomerTrust } from '../../images'


const Custome_Relationship = () => {
  return (
    <>
    
    <div className='grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 lg:gap-0 container mx-auto' style={{marginTop:'110px'}}>
        <div className='mx-auto'>
            <img src={CustomerTrust} className='md:h-[500px] h-[340px] w-[300px] md:w-[450px]'></img>
        </div>
        <div className='m-auto'>
            <p className='text-blue font-bold mt-4 text-center md:text-start'>ABOUT Us</p>
            <h2 className='mt-5 xl:text-h2 md:text-h4 text-h3 md:text-start px-8 md:px-0 leading-10 md:leading-8 text-center font-bold '>We Believe To Gain Trust</h2>
            <p className='leading-6  text-gray-100 text-justify px-8 md:px-0 mt-4 xl:mt-0'>A solid customer relationship is based on trust and commitment. We promise to deliver you our services based on your brand’s objectives and indulge in regular follow-ups to ensure a smooth workflow.  By trusting us, you are showing your faith in our commitment to give you the best digital marketing solutions for your businesses requirements.</p>
        </div>
        </div> 
        
        

    </>
  )
}

export default Custome_Relationship
