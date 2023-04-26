import React from 'react'
import HeroPic from '../componenents/HeroPic'
import Navbar from '../componenents/Navbar'
import Footer from '../componenents/Footer'
import Form from '../componenents/Form'

const Contact = () => {
  return (
    <div>
        <Navbar/>
        <HeroPic heading='Հետադարձ Կապ' text='հեռ․ +37455725250' />
        <Form/>
        <Footer/>
    </div>
  )
}

export default Contact