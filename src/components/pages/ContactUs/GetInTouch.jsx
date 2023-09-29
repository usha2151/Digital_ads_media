import React from 'react'

const GetInTouch = () => {
  return (
    <div className='container mx-auto px-6 lg:px-16 py-16'>
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
      <div>
      <iframe
                src="https://www.google.com/maps/embed?pb=!1.771070944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5335fabc2a66677f%3A0x8f85bd068d1afb8a!2s30%20N%20Gould%20St%2C%20Sheridan%2C%20WY%2082801%2C%20USA!5e0!3m2!1sen!2sin!4v1684734636299!5m2!1sen!2sin"
                width="104%"
                allowFullScreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                className="lg:h-full h-[400px] border-none rounded "
                style={{marginLeft:"-11px"}}
              ></iframe>
      </div>
      <div>
        <div className='flex gap-4'>
            <p className='text-sky font-poppins'>CONTACT US</p>
            <p className='w-20 h-[1px] bg-sky mt-[12px]'></p>
        </div>
        <p className='text-h4 lg:text-h3 font-poppins font-bold mb-4'>Needs Help? Let’s Get in Touch</p>
        <p className='mb-4 text-justify'>If you want to contact our team for support, please feel free to reach us. Your feedback will help us to inprove our services.</p>
        <ul class="list-none mb-4">
  <li class="flex mb-2 gap-6">
    <span class="mr-2 text-h2 border border-[3px] rounded-lg text-blue px-4 border-sky"><i class="fa-solid fa-phone"></i></span>
    <div>
    <p className='text-sky text-h5 font-bold mt-2'>Call Us: 0120 4252536</p>
    <p className='text-gray font-poppins'>Office Time : 09:30 to 06:45 </p>
    </div>
  </li>
  <li class="flex mb-2 gap-6">
    <span class="mr-2 text-h2 border border-[3px] rounded-lg text-blue px-4 border-sky"><i class="fa-solid fa-envelope-open-text"></i></span>
    <div>
    <p className='text-sky text-h5 font-bold mt-2'>Email:</p>
    <p className='text-gray font-poppins'>contact@digitaladsmedia.in </p>
    </div>
  </li>
  <li class="flex mb-2 gap-6">
    <span class="mr-2 text-h2 border border-[3px] rounded-lg text-blue px-6 py-2 border-sky"><i class="fa-solid fa-location-dot"></i></span>
    <div>
    <p className='text-sky text-h5 font-bold mt-2'>Address:</p>
    <p className='text-gray font-poppins'>S-1 , 2nd Floor, Plot No.A-84, Sector 4, Noida, Gautam Buddha Nagar, Uttar Pradesh, 201301</p>
    </div>
  </li>
  
  <li class="flex mt-12">
    <span class="mr-2 text-h5 text-sky font-bold font-poppins">Follow Us</span>
   <div className='flex gap-2 ml-auto'>
    <p className='bg-blue rounded-md px-2 text-white text-h5'><i class="fa-brands fa-facebook"></i></p>
    <p className='bg-blue rounded-md px-2 text-white text-h5'><i class="fa-brands fa-twitter"></i></p>
    <p className='bg-blue rounded-md px-2 text-white text-h5'><i class="fa-brands fa-instagram"></i></p>
    <p className='bg-blue rounded-md px-2 text-white text-h5'><i class="fa-brands fa-linkedin"></i></p>
   </div>
  </li>
</ul>

        </div>
      </div>
    </div>
  )
}

export default GetInTouch
