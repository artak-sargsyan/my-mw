import React from 'react'
import HeroImage from '../componenents/HeroImage'
import Navbar from '../componenents/Navbar'
import Footer from '../componenents/Footer'
import TrainingSaction from  '../componenents/Training'

const Training = () => {
  return (
    <div>
        <Navbar/>
        <HeroImage heading='ԴԱՍԸՆԹԱՑ' text='Նախնական պատրաստություն և Վերապատրաստում'/>

        <TrainingSaction/>
        <Footer/>
        
    </div>
  )
}
export default Training