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
                <div className='wine-style-choice'>

                    <div className='wine-one'>
                        <Link to='/wineinfo'><div className='wine-one-button' onClick={() => { this.props.mildReds()}}>
                            <h3>MILD-MANNERED REDS</h3>
                            <p><strong>Body:</strong> LIGHT to MEDIUM</p>
                            <p><strong>Texture:</strong> LOW TANNIN; GENTLE</p>
                            <p><strong>Flavor Intensity:</strong> LIGHT TO MEDIUM; SUBTLE, REFRESHING</p>
                        </div></Link>
                        <div className='mild-description'>
                            <p>
                                Mild-Mannered Reds: These wines have aromas and flavors that are not intense, and they have a gentle character; most of them are fairly smooth and not very fruity.
                        </p>
                        </div>
                    </div>

                    <div className='wine-two'>
                        <Link to='/wineinfo'><div className='fruity-button' onClick={() => { this.props.fruityReds() }}>
                            <h3>Soft, Fruity Reds</h3>
                            <p><strong>Body:</strong> Light to Medium</p>
                            <p><strong>Texture:</strong> Low to Medium Tannin; Soft</p>
                            <p><strong>Flavor Intensity:</strong> Medium to High; Refreshing</p>
                        </div></Link>
                        <div className='fruity-description'>
                            <p>
                                Soft and Fruity Reds: These young, ready-to-drink, light- or medium-bodied wines express fruity aromas and flavors and don't have much tannin.
                        </p>
                        </div>
                    </div>

                    <div className='wine-three'>
                        <Link to='/wineinfo'><div className='spicy-button' onClick={() => { this.props.spicyReds() }}>
                            <h3>Fresh, Spicy Reds</h3>
                            <p><strong>Body:</strong> Medium; Some Full</p>
                            <p><strong>Texture:</strong> Medium Tannin; Firm</p>
                            <p><strong>Flavor Intensity:</strong> Medium to High; Vibrant</p>
                        </div></Link>
                        <div className='spicy-description'>
                            <p>
                                Fresh, Spicy Reds: Fairly intense in spicy aromatics, these wines also have substantial structure and a certain edginess of personality.
                        </p>
                        </div>
                    </div>   

                    <div className='wine-four'> 
                        <Link to='/wineinfo'><div className='powerful-button' onClick={() => { this.props.powerfulReds() }}>
                            <h3>Powerful Reds</h3>
                            <p><strong>Body:</strong> Full</p>
                            <p><strong>Texture:</strong> High Tannin; Sturdy</p>
                            <p><strong>Flavor Intensity:</strong> Medium to High; Concentrated</p>
                        </div></Link>
                        <div className='powerful-description'>
                            <p>
                                Powerful Reds: Full-bodied with concentrated aromas and flavors, as well as considerable tannic structure; some of them need bottle age to reach their oprimum expression.
                        </p>
                        </div>
                    </div>

                </div>
            </div>
        )
    }

}

export default WineStyleRed;