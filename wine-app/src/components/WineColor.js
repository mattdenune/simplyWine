import React, { Component } from 'react'
import Red from '../Images/red-glass.JPG'
import White from '../Images/white-glass.JPG'

class WineColor extends Component {

    render() {
        return(
                <div className='wine-color'>
                    <img src={Red} alt="#" className='red-wine-glass' />
                    <img src={White} alt="#" className='white-wine-glass'/>
                </div>
        )
    }

}


export default WineColor;