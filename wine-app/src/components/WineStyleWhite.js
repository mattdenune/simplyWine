import React, { Component } from 'react';
import WhiteWheel from '../Images/white-wheel-1.JPG';
import { Link } from 'react-router-dom';

class WineStyleWhite extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='wine-style-white'>
                {/* <img className='white-wine-wheel-image' src={WhiteWheel} alt="#"/> */}
                <div className='white-style-choice'>
                    <Link to='/wineinfo'><div onClick={() => { this.props.freshWhite()}}>
                        <h3>Fresh, Unoaked Whites</h3>
                        <p><strong>Body:</strong> LIGHT to MEDIUM</p>
                        <p><strong>Texture:</strong> CRISP, REFRESHING</p>
                        <p><strong>Flavor Intensity:</strong> LIGHT to MEDIUM; MILD</p>
                    </div></Link>
                    
                    <Link to='/wineinfo'><div onClick={() => { this.props.earthyWhite() }}>
                        <h3>Earthy Whites</h3>
                        <p><strong>Body:</strong> Medium to Full</p>
                        <p><strong>Texture:</strong> PLACEHOLDER</p>
                        <p><strong>Flavor Intensity:</strong> Medium; Minerally</p>
                    </div></Link>
                    
                    <Link to='/wineinfo'><div onClick={() => { this.props.aromaticWhite() }}>
                        <h3>Aromatic Whites</h3>
                        <p><strong>Body:</strong> Light to Medium; Some Full</p>
                        <p><strong>Texture:</strong> Crisp; Some Soft</p>
                        <p><strong>Flavor Intensity:</strong> High; Complex</p>
                    </div></Link>
                    <Link to='/wineinfo'><div onClick={() => { this.props.richWhite() }}>
                        <h3>Rich, Oaky Whites</h3>
                        <p><strong>Body:</strong> Full</p>
                        <p><strong>Texture:</strong> Soft, Rich</p>
                        <p><strong>Flavor Intensity:</strong> High; Oaky</p>
                    </div></Link>

                </div>
                <div className='white-style-description'>
                    <div>
                        <p>
                            Fresh, Unoaked Whites: Generally the lightest and least complex of all dry whites, but also the most refreshing, these wines are crisp, and their aromatic intensity ranges from neutral to mild; they adapt easily to food.
                        </p>
                    </div>
                    <div>
                        <p>
                            Earthy Whites: These wines are fuller-bodied and more substantial unoaked wines but less flavorful than aeromatic whites. They have fairly sublte flavors, often of an earth or minerally nature, as well as broad, substantial structure.
                        </p>
                    </div>
                    <div>
                        <p>
                            Aeromatic Whites: These wines have lots of flavor, but it is flavor that comes from their grapes rather than from oak; they vary in weight from faily light to rich, and in sweetness from bone dry to medium sweet; they are some of the most food friendly wines around.
                        </p>
                    </div>
                    <div>
                        <p>
                            Rich, Oaky Whites: These are some of the richest white wines you can find, apart from sweet desert wines; smoky/toasty oak character is a common cord for these wines.
                        </p>
                    </div>
                </div>
            </div>
        )
    }

}

export default WineStyleWhite;