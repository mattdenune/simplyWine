import React, { Component } from 'react'

class WineInfo extends Component {
    constructor(props) {
        super(props)
    
    
    }
    
    
    render() {
        console.log(this.props.freshWines)

        return(
            <div>
                {this.props.freshWines.map((wine, index) => (
                    <div key={index} className='wine-description'>
                        <div className='description-image'>
                            <img src={wine.image} alt="wine-label"/>
                        </div>
                        <div className='description-info'>
                            <h3>Name: {wine.name}</h3>
                            <p>Winery: {wine.winery}</p>
                            <p>Year Produced: {wine.vintage}</p>
                            <p>Grapes: {wine.varietal}</p>
                            <p>Avg Price: {wine.price}</p>
                            <p>Score: {wine.snoothrank}</p>
                        </div>
                    </div>
                ))}
            </div>
        )
    }


}

export default WineInfo;