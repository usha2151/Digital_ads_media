import React from 'react'
import { Featured } from '../../constants/data'
import { Link } from 'react-router-dom'

const Article = () => {
  return (
    <>
    <div style={{marginTop:'80px'}} className='container mx-auto px-6 md:px-16'>
        <div className="flex items-center justify-center mt-5">
      <div className="w-16 h-0.5 bg-blue mr-2"></div> {/* Left Line */}
      <p className="md:px-2 text-sky font-bold text-h6 md:text-h5">Our New Blogs</p>
      <div className="w-16 h-0.5 bg-blue ml-2"></div> {/* Right Line */}
    </div>
    <p className='md:text-h2 text-h4 font-poppins font-bold text-center mb-5'>Our Featureed Artical</p>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {Featured.map((data,index)=> 
      <div key={index} className="max-w-md rounded overflow-hidden shadow-lg p-5">
      <img
        src={data.featuredImage}
        alt="Nature"
        className="w-full h-64 object-cover"
      />
      <div className="px-6 pt-4">
        <div className="font-bold text-[20px] w-full mb-2">{data.title}
</div>
       
      </div>
     <Link to="/artical_blog"><div className="px-6 py-4">
        <button className="bg-blue hover:bg-black text-white rounded-md py-2 px-4">
          {data.button}
        </button>
      </div>
      </Link>
      <div className="w-full h-2 bg-blue-500 absolute bottom-0 left-0"></div>
    </div>
    )}
    </div>
    </div>
    </>
    
  )
}

export default Article
