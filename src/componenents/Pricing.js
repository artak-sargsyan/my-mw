import React from 'react'
import './PricingStyles.css'
import {Link} from 'react-router-dom'


function Pricing() {
  return (
    <div className='pricing'>
        <div className='card-container'>
           <div className='card'>
                <h3>-Հիմնական-</h3>
                <span className='bar'></span>
                <p className='btc'>25․000դրամ</p>
                <p> - 3 Օր անվճար -</p>
                <p> - Դասաժամի Ընտրություն- </p>
                <p>-Անհատական Դասընթաց - </p>
                <p>-Անհատական Մոտեցում - </p>
                <Link to='/contact' className='btn'>ԱՄՐԱԳՐԵԼ</Link>
           </div>
           <div className='card'>
                <h3>-Պրոֆեսիոնալ-</h3>
                <span className='bar'></span>
                <p className='btc'>50․000դրամ</p>
                <p> - 7 Օր անվճար -</p>
                <p> - Դասաժամի Ընտրություն- </p>
                <p>-Անհատական Դասընթաց - </p>
                <p>-Անհատական Մոտեցում - </p>
                <Link to='/contact' className='btn'>ԱՄՐԱԳՐԵԼ</Link>
           </div>
           <div className='card'>
                <h3>-VIP-</h3>
                <span className='bar'></span>
                <p className='btc'>100․000դրամ</p>
                <p> - 30 Օր անվճար -</p>
                <p> - Դասաժամի Ընտրություն- </p>
                <p>-Անհատական Դասընթաց - </p>
                <p>-Անհատական Մոտեցում - </p>
                <p> - Անսահմանապակ Դասընթացներ- </p>
                <Link to='/contact' className='btn'>ԱՄՐԱԳՐԵԼ</Link>
           </div>

        </div>

    </div>
  )
}

export default Pricing