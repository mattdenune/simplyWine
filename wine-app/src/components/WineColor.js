import React, { Component } from 'react';
import Red from '../Images/red-glass.JPG';
import White from '../Images/white-glass.JPG';
import { Link } from 'react-router-dom';

class WineColor extends Component {


    render() {
        return(
                <div className='wine-color'>
                    <div className='color-choice-prompt'>
                        <h3>Please choose a color:</h3>
                    </div>
                    <div className='wine-glasses'>
                        <Link to='/winestylered'><img src={Red} alt="#" className='red-wine-glass' onClick={() => this.props.changeColor('red')} /></Link>
                        <Link to='/winestylewhite'><img src={White} alt="#" className='white-wine-glass' onClick={() => this.props.changeColor('white')} /></Link>
                    </div>
                </div>
        )
    }

}


export default WineColor;