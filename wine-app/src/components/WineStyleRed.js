import React, { Component } from 'react';
import RedWheel from '../Images/red-wheel-1.JPG';
import { Link } from 'react-router-dom';


class WineStyleRed extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className='wine-style'>
                {/* <img className='red-wine-wheel-image' src={RedWheel} alt="#"/> */}
                <div className='wine-style-choice-red'>
                    <h1>Choose your wine style:</h1>
                    <div className='wine-one'>
                        
                        <Link to='/wineinfo'><div className='wine-one-button' onClick={() => { this.props.mildReds()}}>
                            <h3>MILD-MANNERED REDS</h3>
                            <p><strong>Body:</strong> LIGHT to MEDIUM</p>
                            <p><strong>Texture:</strong> LOW TANNIN; GENTLE</p>
                            <p><strong>Flavor Intensity:</strong> LIGHT TO MEDIUM; SUBTLE, REFRESHING</p>
                        </div></Link>
                        <div className='wine-one-description'>
                            <p>
                                These wines have aromas and flavors that are not intense, and they have a gentle character; most of them are fairly smooth and not very fruity.
                            </p>
                        </div>
                    </div>

                    <div className='wine-two'>
                        <Link to='/wineinfo'><div className='wine-two-button' onClick={() => { this.props.fruityReds() }}>
                            <h3>SOFT, FRUITY REDS</h3>
                            <p><strong>Body:</strong> LIGHT to MEDIUM</p>
                            <p><strong>Texture:</strong> LOW to MEDIUM TANNIN; Soft</p>
                            <p><strong>Flavor Intensity:</strong> MEDIUM to HIGH; REFRESHING</p>
                        </div></Link>
                        <div className='wine-two-description'>
                            <p>
                                These young, ready-to-drink, light- or medium-bodied wines express fruity aromas and flavors and don't have much tannin.
                            </p>
                        </div>
                    </div>

                    <div className='wine-three'>
                        <Link to='/wineinfo'><div className='wine-three-button' onClick={() => { this.props.spicyReds() }}>
                            <h3>FRESH, SPICY REDS</h3>
                            <p><strong>Body:</strong> MEDIUM; SOME FULL</p>
                            <p><strong>Texture:</strong> MEDIUM TANNIN; FIRM</p>
                            <p><strong>Flavor Intensity:</strong> MEDIUM to HIGH; VIBRANT</p>
                        </div></Link>
                        <div className='wine-three-description'>
                            <p>
                                Fairly intense in spicy aromatics, these wines also have substantial structure and a certain edginess of personality.
                            </p>
                        </div>
                    </div>   

                    <div className='wine-four'> 
                        <Link to='/wineinfo'><div className='wine-four-button' onClick={() => { this.props.powerfulReds() }}>
                            <h3>POWERFUL REDS</h3>
                            <p><strong>Body:</strong> FULL</p>
                            <p><strong>Texture:</strong> HIGH TANNIN; STURDY</p>
                            <p><strong>Flavor Intensity:</strong> MEDIUM to HIGH; STURDY</p>
                        </div></Link>
                        <div className='wine-four-description'>
                            <p>
                                Full-bodied with concentrated aromas and flavors, as well as considerable tannic structure; some of them need bottle age to reach their oprimum expression.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        )
    }

}

export default WineStyleRed;