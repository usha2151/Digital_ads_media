import React from 'react'
import { CustomerTrust } from '../../images'


const Custome_Relationship = () => {
  return (
    <div className='container mx-auto px-6 md:px-16'>
    
    <div className='grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 lg:gap-0' style={{marginTop:'110px'}}>
        <div className='mx-auto'>
            <img src={CustomerTrust} className='md:h-[500px] h-[340px] w-[300px] md:w-[480px]'></img>
        </div>
        <div className='m-auto'>
            <p className='text-blue font-bold mt-4 text-center md:text-start'>ABOUT Us</p>
            <h2 className='mt-5 xl:text-h2 md:text-h4 text-h4 md:text-start px-8 md:px-0 leading-10 md:leading-8 mb-0 lg:mb-4 text-center font-bold '>We Believe To Gain Trust</h2>
            <p className='leading-6  text-gray-100 text-justify px-8 md:px-0 mt-4 xl:mt-0'>In a digital world overflowing with options, choosing the right partner can make or break your success. At Digital Ads Media, we're not just another agency; we're the catalyst for your digital triumph.<br/><br/> With a winning blend of experience, innovation, and unwavering commitment to your goals, we don't just meet expectations; we redefine them. Trust us to transform your vision into reality, to amplify your brand's voice, and to navigate the complex terrain of the digital landscape with precision.<br/><br/><span className='block md:hidden lg:block'> Together, we'll create not just campaigns, but legacies, turning clicks into customers, and ideas into empires. Choose us because mediocrity is not an option, and excellence is our standard.</span></p>
        </div>
        </div> 
        
        

    </div>
  )
}

export default Custome_Relationship
