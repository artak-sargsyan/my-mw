import React from 'react'
import './TrainingStyles.css'
import {Link} from 'react-router-dom'
import Mice from '../assets/training_2.png'
import Meeting from '../assets/training_1.jpg'

function Training() {
  return (
    <div className='training'>
        <div className='leght'>
            <h1>Թրեյնինգ</h1>
            <p> Թրեյնինգային ծրագրերը
                հաջողությամբ ավարտած մասնակիցները 
                ստանում են երկլեզու  (հայերեն, անգլերեն) 
                վկայական:</p>
            <Link to='/pricing'><button className='btn'>ԱՄՐԱԳՐՈՒՄ</button></Link>
         </div>
         <div className='right'>
            <div className='img-container'>
                <div className='image-stack top'>
                    <img src={Mice} className='img' alt='picture'/>
                </div>
                <div className='image-stack bottom '>
                    <img src={Meeting} className='img' alt='picture'/>
                </div>
            </div>
         </div>

    </div>
  )
}

export default Training