import React from 'react'
import { CustomerTrust } from '../../images'
import ProvideServices from './ProvideServices'
const Custome_Relationship = () => {
  return (
    <>
    
    <div className='grid grid-cols-1 lg:grid-cols-2'>
        <div className='mx-auto'>
            <img src={CustomerTrust}></img>
        </div>
        <div className='m-auto'>
            <p>ABOUT Us</p>
            <h2 className='mt-5 text-h2 fw-bold '>We Believe To Gain Trust</h2>
            <span className='leading-8'>A solid customer relationship is based on trust and commitment. We promise to deliver you our services based on your brand’s objectives and indulge in regular follow-ups to ensure a smooth workflow.  By trusting us, you are showing your faith in our commitment to give you the best digital marketing solutions for your businesses requirements.</span>
        </div>
        </div> 
        {/* service provide component import  */}
        <div className='mt-5'>
          <ProvideServices />
        </div>
    </>
  )
}

export default Custome_Relationship
