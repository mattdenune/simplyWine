import React, { Component } from 'react'
import RedWheel from '../Images/red-wheel-1.JPG'


class WineStyleRed extends Component {

    render() {
        return(
            <div className='wine-style-red'>
                <img className='red-wine-wheel-image' src={RedWheel} alt="#"/>
            </div>
        )
    }

}

export default WineStyleRed;