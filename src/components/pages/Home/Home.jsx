import React from 'react'
import Our_services from './Our_services'
import Hero from './Hero'
import Custome_Relationship from './Custome_Relationship'
import Article from './Article'
import Adviser from './Adviser'
import ProvideServices from './ProvideServices'

const Home = () => {
  return (
    <>   
      <Hero />
      <Custome_Relationship />
      {/* service provide component import  */}
      <div className='container mx-auto' style={{marginTop:'80px'}}>
          <ProvideServices />
        </div>
      <Article />
      <Adviser />
      <Our_services />
    </>
  )
}

export default Home
