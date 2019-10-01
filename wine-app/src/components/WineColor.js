import React, { Component } from 'react'
import Red from '../Images/red-glass.JPG'
import White from '../Images/white-glass.JPG'
import { Link } from 'react-router-dom';
import winestylered from './WineStyleRed';

class WineColor extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
                <div className='wine-color'>
                    <Link to='/winestylered'><img src={Red} alt="#" className='red-wine-glass' onClick={() => this.props.changeColor('red')} /></Link>
                <Link to='/winestylewhite'><img src={White} alt="#" className='white-wine-glass' onClick={() => this.props.changeColor('white')} /></Link>
                </div>
        )
    }

}


export default WineColor;