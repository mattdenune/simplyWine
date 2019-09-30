import React, { Component } from 'react'
import RedWheel from '../Images/red-wheel.png'


class WineStyleRed extends Component {

    render() {
        return(
            <div>
                <img className='red-wine-wheel' src={RedWheel} alt="#"/>
            </div>
        )
    }

}

export default WineStyleRed;