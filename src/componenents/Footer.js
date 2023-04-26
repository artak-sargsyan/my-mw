import React from 'react'
import './FooterStyles.css'
import {Link} from 'react-router-dom'
import {FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
           <div className='left'>

              <div className='location'>
                   <FaSearchLocation size={20} style={{color: '#ffffff', marginRight: '2rem'}}/> 
               
                    <div >
                        <p> 17 Խաղաղ-Դոն փ.</p>
                        <h4> Երևան, ՀՀ</h4>
                    </div>
              </div> 

                    <div className='phone'>
                        <h4> <FaPhone size={20} style={{color: '#ffffff', marginRight: '2rem'}}/> +37455725250</h4>
                    </div>

                    <div className='email'>
                        <h4> <FaMailBulk size={20} style={{color: '#ffffff', marginRight: '2rem'}}/> anush.lini@gmail.com </h4>
                    </div>
           </div>
                        <div className='right'>
                                <h4> Մեր Մասին</h4>
                                <p>Յուրաքանչյուր ազգի պարտականությունը մարդկության հանդեպ նախ և 
                                առաջ դրսևորվում է սեփական ազգի կենսունակության պահպանման և
                                սեփական մշակույթի զարգացման ձևով: <br/> Գարեգին Նժդեհի</p>
                                
                                <div className='social'>
                                  <a href='https://www.facebook.com/' target="_blank">  <FaFacebook size={30} style={{color: '#ffffff', marginRight: '2rem'}}/></a>
                                  <a href='https://twitter.com/?lang=en'  target="_blank"> <FaTwitter size={30} style={{color: '#ffffff', marginRight: '2rem'}}/></a>
                                  <a href='https://www.linkedin.com/'  target="_blank"> <FaLinkedin  size={30} style={{color: '#ffffff', marginRight: '2rem'}}/></a>
                                </div>
                        </div>
                   
           
        </div>
    </div>
  )
}

export default Footer
              