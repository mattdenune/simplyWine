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

                    <div className='wine-one'>
                        <Link to='/wineinfo'><div className='wine-one-button' onClick={() => { this.props.mildReds()}}>
                            <h3 className='test'>MILD-MANNERED REDS</h3>
                            <p><strong>Body:</strong> LIGHT to MEDIUM</p>
                            <p><strong>Texture:</strong> LOW TANNIN; GENTLE</p>
                            <p><strong>Flavor Intensity:</strong> LIGHT TO MEDIUM; SUBTLE, REFRESHING</p>
                        </div></Link>
                        <div className='wine-one-description'>
                            <p>
                                Mild-Mannered Reds: These wines have aromas and flavors that are not intense, and they have a gentle character; most of them are fairly smooth and not very fruity.
                        </p>
                        </div>
                    </div>

                    <div className='wine-two'>
                        <Link to='/wineinfo'><div className='wine-two-button' onClick={() => { this.props.fruityReds() }}>
                            <h3>Soft, Fruity Reds</h3>
                            <p><strong>Body:</strong> LIGHT to MEDIUM</p>
                            <p><strong>Texture:</strong> LOW to MEDIUM TANNIN; Soft</p>
                            <p><strong>Flavor Intensity:</strong> MEDIUM to HIGH; REFRESHING</p>
                        </div></Link>
                        <div className='wine-two-description'>
                            <p>
                                Soft and Fruity Reds: These young, ready-to-drink, light- or medium-bodied wines express fruity aromas and flavors and don't have much tannin.
                        </p>
                        </div>
                    </div>

                    <div className='wine-three'>
                        <Link to='/wineinfo'><div className='wine-three-button' onClick={() => { this.props.spicyReds() }}>
                            <h3>Fresh, Spicy Reds</h3>
                            <p><strong>Body:</strong> MEDIUM; SOME FULL</p>
                            <p><strong>Texture:</strong> MEDIUM TANNIN; FIRM</p>
                            <p><strong>Flavor Intensity:</strong> MEDIUM to HIGH; VIBRANT</p>
                        </div></Link>
                        <div className='wine-three-description'>
                            <p>
                                Fresh, Spicy Reds: Fairly intense in spicy aromatics, these wines also have substantial structure and a certain edginess of personality.
                        </p>
                        </div>
                    </div>   

                    <div className='wine-four'> 
                        <Link to='/wineinfo'><div className='wine-four-button' onClick={() => { this.props.powerfulReds() }}>
                            <h3>Powerful Reds</h3>
                            <p><strong>Body:</strong> Full</p>
                            <p><strong>Texture:</strong> High Tannin; Sturdy</p>
                            <p><strong>Flavor Intensity:</strong> Medium to High; Concentrated</p>
                        </div></Link>
                        <div className='wine-four-description'>
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