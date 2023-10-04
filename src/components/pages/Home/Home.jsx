import React from 'react'
import OurServices from './OurServices'
import Hero from './Hero'
import CustomeRelationship from './CustomeRelationship'
import Article from './Article'
import Adviser from './Adviser'
import ProvideServices from './ProvideServices'

const Home = () => {
  return (
    <>   
      <Hero />
      <CustomeRelationship />
      {/* service provide component import  */}
      <div className='container mx-auto' style={{marginTop:'80px'}}>
          <ProvideServices />
        </div>
      <Article />
      <Adviser />
      <OurServices />
    </>
  )
}

export default Home
