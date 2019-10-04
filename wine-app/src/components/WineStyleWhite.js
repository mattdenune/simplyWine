import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class WineStyleWhite extends Component {

    render() {
        return (
            <div className='wine-style'>
                <div className='wine-style-choice-white'>
                    <h1>Choose your wine style:</h1>
                    
                    <div className='wine-one'>
                        <Link to='/wineinfo'><div className='wine-one-button' onClick={() => { this.props.freshWhite()}}>
                            <h3>FRESH, UNOAKED WHITES</h3>
                            <p><strong>Body:</strong> LIGHT to MEDIUM</p>
                            <p><strong>Texture:</strong> CRISP, REFRESHING</p>
                            <p><strong>Flavor Intensity:</strong> LIGHT to MEDIUM; MILD</p>
                        </div></Link>
                        <div className='wine-one-description'>
                            <p>
                                Generally the lightest and least complex of all dry whites, but also the most refreshing, these wines are crisp, and their aromatic intensity ranges from neutral to mild; they adapt easily to food.
                            </p>
                        </div>
                    </div>

                    <div className='wine-two'>
                        <Link to='/wineinfo'><div className='wine-two-button' onClick={() => { this.props.earthyWhite() }}>
                            <h3>EARTHY WHITES</h3>
                            <p><strong>Body:</strong> MEDIUM to FULL</p>
                            <p><strong>Texture:</strong> FIRM; SUBSTANTIAL</p>
                            <p><strong>Flavor Intensity:</strong> MEDIUM; MINERALITY</p>
                        </div></Link>
                        <div className='wine-two-description'>
                            <p>
                                These wines are fuller-bodied and more substantial unoaked wines but less flavorful than aromatic whites. They have fairly sublte flavors, often of an earth or minerally nature, as well as broad, substantial structure.
                            </p>
                        </div>
                    </div>

                    <div className='wine-three'>
                        <Link to='/wineinfo'><div className='wine-three-button' onClick={() => { this.props.aromaticWhite() }}>
                            <h3>AROMATIC WHITES</h3>
                            <p><strong>Body:</strong> LIGHT to MEDIUM; SOME FULL</p>
                            <p><strong>Texture:</strong> CRISP; SOME FULL</p>
                            <p><strong>Flavor Intensity:</strong> HIGH; COMPLEX</p>
                        </div></Link>
                        <div className='wine-three-description'>
                            <p>
                                These wines have lots of flavor, but it is flavor that comes from their grapes rather than from oak; they vary in weight from faily light to rich, and in sweetness from bone dry to medium sweet; they are some of the most food friendly wines around.
                            </p>
                        </div>
                    </div>    

                    <div className='wine-four'>
                        <Link to='/wineinfo'><div className='wine-four-button' onClick={() => { this.props.richWhite() }}>
                            <h3>RICH, OAKY WHITES</h3>
                            <p><strong>Body:</strong> FULL</p>
                            <p><strong>Texture:</strong> SOFT; RICH</p>
                            <p><strong>Flavor Intensity:</strong> HIGH; OAKY</p>
                        </div></Link>
                        <div className='wine-four-description'>
                            <p>
                                These are some of the richest white wines you can find, apart from sweet desert wines; smoky/toasty oak character is a common cord for these wines.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        )
    }

}

export default WineStyleWhite;