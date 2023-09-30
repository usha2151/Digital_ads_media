import React from 'react';
import hero from "../images/Home/hero_2.jpg";
import { logo } from '../images';

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
                In eu libero ligula. Fusce eget metus lorem, ac viverra leo.
                Nullam convallis, arcu vel pellentesque sodales, nisi est
                varius diam, ac ultrices sem ante quis sem. Proin ultricies
                volutpat sapien.
              </p>
             
            </div>
          </div>
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <div className="widget3">
              <h5 className="text-lg">ADDRESS LIST</h5>
              <ul className="mt-4">
                <li>
                  <a href="#" className="text-sm">
                  <i className="fab fa-facebook-f mr-2 text-sky"></i>
                  S-1 , 2nd Floor, Plot No.A-84, Sector 4, Noida, Gautam Buddha Nagar, Uttar Pradesh, 201301
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm">
                  <i className="fab fa-linkedin-in me-2 text-sky"></i>
                  0120 4252536
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm">
                  <i className="fab fa-twitter me-2 text-sky"></i>
                  contact@uprisemedia.in
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-1 md:col-span-1 lg:col-span-1 md:mx-auto">
            <div className="widget3">
              <h5 className="text-lg">SOCIAL LINKS</h5>
              <ul className="mt-4">
                <li>
                  <a href="#" className="text-sm">
                  <i className="fab fa-facebook-f mr-2 text-sky"></i>
                    facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm">
                  <i className="fab fa-linkedin-in me-2 text-sky"></i>
                    linkdin
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm">
                  <i className="fab fa-twitter me-2 text-sky"></i>
                    twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm">
                  <i className="fab fa-twitter me-2 text-sky"></i>
                    instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-1 md:col-span-1 lg:col-span-1 ">
            <div className="widget4">
              <h5 className="text-lg">Other Links</h5>
              <ul className="mt-4">
                <li>
                  <a href="#" className="text-sm">
                    themeforest
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm">
                    graphicriver
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm">
                    codecanyon
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm">
                    videohive
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm">
                    redpen
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm">
                    codepen
                  </a>
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
