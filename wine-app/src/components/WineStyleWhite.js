import React, { Component } from 'react'
import WhiteWheel from '../Images/white-wheel-1.JPG'

class WineStyleWhite extends Component {

    render() {
        return (
            <div className='wine-style-white'>
                <img className='white-wine-wheel-image' src={WhiteWheel} alt="#"/>
            </div>
        )
    }

}

export default WineStyleWhite;