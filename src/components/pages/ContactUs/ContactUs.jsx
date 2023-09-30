import React from 'react'
import { advertisers_ab } from '../../images';
import Navbar from '../../Common/Navbar';
import GetInTouch from './GetInTouch';

const ContactUs = () => {
  return (
    <>
    <div className="relative">
      <div
        className="bg-cover bg-center h-screen relative"
        style={{
          backgroundImage: `url(${advertisers_ab})`,
        }}
      >
        <Navbar />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-70"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-start justify-center text-white">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div>
            <p className="text-h3 lg:text-h1 font-poppins font-bold mt-6 lg:mt-72">Contact Us</p>
            <p className="text-[18px] lg:text-h5 mb-6 lg:mb-0  font-poppins">Get In Touch With Uprise Media</p>
            </div>
            <div >
      <form className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="input1" className="block text-gray-600 font-semibold">First Name</label>
            <input
              type="text"
              id="input1"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter First Name"
            />
          </div>
          <div>
            <label htmlFor="input2" className="block text-gray-600 font-semibold">Last Name</label>
            <input
              type="text"
              id="input2"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter Last Name"
            />
          </div>
        </div>
        <div>
          <label htmlFor="input2" className="block text-gray-600 font-semibold">Your Topics</label>
          <input
            type="text"
            id="input2"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter Topic"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="input1" className="block text-gray-600 font-semibold">Phone Number</label>
            <input
              type="text"
              id="input1"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter Number"
            />
          </div>
          <div>
            <label htmlFor="input2" className="block text-gray-600 font-semibold">Email Address </label>
            <input
              type="text"
              id="input2"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter Address"
            />
          </div>
        </div>
        <div>
          <label htmlFor="textarea1" className="block text-gray-600 font-semibold">Message</label>
          <textarea
            id="textarea1"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter Your message..."
            rows="4" // Set the number of rows for the text area
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-blue text-white font-semibold py-2 px-4 font-poppins rounded-lg hover:bg-blue-600"
          >
            Send Messages
          </button>
        </div>
      </form>
    </div>
          </div>
            </div>
          </div>
        </div>
      </div>
      <GetInTouch />
    </>
  )
}

export default ContactUs
