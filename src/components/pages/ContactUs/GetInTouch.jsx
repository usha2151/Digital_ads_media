import React from 'react'

const GetInTouch = () => {
  return (
    <div className='container mx-auto px-6 lg:px-16 py-16'>
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
      <div>
      <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.547169166641!2d77.61255727413689!3d12.936800115642159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae144ca9530715%3A0x5e1e3893edb97d3c!2s1st%20A%20Main%20Rd%2C%207th%20Block%2C%20Koramangala%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1696432798277!5m2!1sen!2sin"
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
        <ul className="list-none mb-4">
  <li className="flex mb-2 gap-6">
    <span className="mr-2 text-h2 border border-[3px] rounded-lg text-blue px-4 border-sky"><i className="fa-solid fa-phone"></i></span>
    <div>
    <p className='text-sky text-h5 font-bold mt-2'>Call Us: +91 8368958328</p>
    <p className='text-gray font-poppins'>Office Time : 09:30 to 06:45 </p>
    </div>
  </li>
  <li className="flex mb-2 gap-6">
    <span className="mr-2 text-h2 border border-[3px] rounded-lg text-blue px-4 border-sky"><i className="fa-solid fa-envelope-open-text"></i></span>
    <div>
    <p className='text-sky text-h5 font-bold mt-2'>Email:</p>
    <p className='text-gray font-poppins'>contact@digitaladsmedia.in </p>
    </div>
  </li>
  <li className="flex mb-2 gap-6">
    <span className="mr-2 text-h2 border border-[3px] rounded-lg text-blue px-6 py-2 border-sky"><i className="fa-solid fa-location-dot"></i></span>
    <div>
    <p className='text-sky text-h5 font-bold mt-2'>Address:</p>
    <p className='text-gray font-poppins'>1 st A Main Rd, 7th Block,Koramangala,Bengaluru,Karnataka 560095</p>
    </div>
  </li>
  
  <li className="flex mt-12">
    <span className="mr-2 text-h5 text-sky font-bold font-poppins">Follow Us</span>
   <div className='flex gap-2 ml-auto'>
    <p className='bg-blue rounded-md px-2 text-white text-h5'><i className="fa-brands fa-facebook"></i></p>
    <p className='bg-blue rounded-md px-2 text-white text-h5'><i className="fa-brands fa-twitter"></i></p>
    <p className='bg-blue rounded-md px-2 text-white text-h5'><i className="fa-brands fa-instagram"></i></p>
    <p className='bg-blue rounded-md px-2 text-white text-h5'><i className="fa-brands fa-linkedin"></i></p>
   </div>
  </li>
</ul>

        </div>
      </div>
    </div>
  )
}

export default GetInTouch
