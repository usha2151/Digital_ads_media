import React from 'react';
import hero from "../images/Home/hero_2.jpg";
import { logo } from '../images';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative text-white pt-16">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center h-[auto]"
        style={{ backgroundImage: `url(${hero})` }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-90"></div>

      {/* Footer Content */}
      <div className="container mx-auto px-6 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8">
          <div className="sm:col-span-3 md:col-span-1 lg:col-span-1">
            <div className="widget1">
              <div className="logo">
              <img src={logo} alt="" className="h-10 px-4 ml-8 w-20"/>
            <p className="text-h6 font-bold font-poppins w-full">
      <span className="custom-text"></span>
    </p>
              </div>
              <p className="text-sm mt-6">
                In a digital world overflowing with options, choosing the right partner can make or break your success. At Digital Ads Media, we're not just another agency; we're the catalyst for your digital triumph.
              </p>
             
            </div>
          </div>
          <div className="col-span-1 md:col-span-1 lg:col-span-1 lg:mt-8">
            <div className="widget3">
              <h5 className="text-lg">ADDRESS LIST</h5>
              <ul className="mt-4">
                <li>
                  <Link to="#" className="text-sm">
                  <i class="fa-solid fa-location-dot text-sky mr-2"></i>
                  Noida, Gautam Buddha Nagar, Uttar Pradesh, 201301
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-sm">
                  <i class="fa-solid fa-phone text-sky mr-2"></i>
                  0120 4252536
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-sm">
                  <i class="fa-regular fa-envelope text-sky mr-2"></i>
                  contact@digitaladsmedia.in
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-1 md:col-span-1 lg:col-span-1 md:mx-auto lg:mt-8">
            <div className="widget3">
              <h5 className="text-lg">SOCIAL LINKS</h5>
              <ul className="mt-4">
                <li>
                  <Link to="#" className="text-sm hover:text-sky">
                  <i className="fab fa-facebook-f mr-2 text-sky mr-2"></i>
                    facebook
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-sm hover:text-sky">
                  <i className="fab fa-linkedin-in me-2 text-sky mr-2"></i>
                    linkdin
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-sm hover:text-sky">
                  <i className="fab fa-twitter me-2 text-sky mr-2"></i>
                    twitter
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-sm hover:text-sky">
                  <i class="fa-brands fa-instagram text-sky mr-2"></i>
                    instagram
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-1 md:col-span-1 lg:col-span-1 lg:mt-8">
            <div className="widget4">
              <h5 className="text-lg">Quick Links</h5>
              <ul className="mt-4">
                <li>
                  <Link to="/services" className="text-sm hover:text-sky">
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link to="/publisher" className="text-sm hover:text-sky">
                    Publishers
                  </Link>
                </li>
                <li>
                  <Link to="/advertisers" className="text-sm hover:text-sky">
                    Advertise
                  </Link>
                </li>
                <li>
                  <Link to="/about_us" className="text-sm hover:text-sky">
                    About Us 
                  </Link>
                </li>
                <li>
                  <Link to="/contact_us" className="text-sm hover:text-sky">
                  Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>          
        </div>     
      </div>
      {/* Copyright */}
      <div className='bg-black relative'>
        <div className="container mx-auto">
          <div className="text-center mt-12 py-2">
            <p className="text-sm text-white">
              &copy; Copyright All rights reserved 2023.
            </p>
          </div>
        </div>
        </div>    
    </footer>
  );
}

export default Footer;
