import React from 'react'
import { Marketing } from '../../images'
const Article = () => {
  return (
    <>
      <div className="max-w-md rounded overflow-hidden shadow-lg">
      <img
        src={Marketing}
        alt="Nature"
        className="w-full h-48 object-cover"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Account-Based Marketing: Past, Present, and Future
</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="px-6 py-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Read More
        </button>
      </div>
      <div className="w-full h-2 bg-blue-500 absolute bottom-0 left-0"></div>
    </div>
    </>
  )
}

export default Article
