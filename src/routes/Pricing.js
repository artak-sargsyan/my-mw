import React from 'react'
import Navbar from '../componenents/Navbar'
import Footer from '../componenents/Footer'
import HeroImage from '../componenents/HeroImage'
import PricingCard from '../componenents/Pricing'

const Pricing = () => {
  return (
    <div>
        <Navbar/>
        <HeroImage  heading='ԱՌԱՋԱՐԿՆԵՐ ' text='Ընտրիր քո փաթեթը․' />
        <PricingCard/>
        <Footer/>
    </div>
  )
}

export default Pricing