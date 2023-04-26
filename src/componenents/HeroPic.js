import React, { Component } from 'react'
import './HeroPicStyles.css'

export class HeroPic extends Component {
  render() {
    return (
      <div className='hero-pic'>
        <div className='heading'>
            <h1>{this.props.heading}</h1>
            <p>{this.props.text}</p>
        </div>
      </div>
    )
  }
}

export default HeroPic