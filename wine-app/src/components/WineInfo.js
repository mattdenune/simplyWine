import React, { Component } from 'react';

class WineInfo extends Component {

    
    
    render() {

        return(
            <div>
                {this.props.freshWines.map((wine, index) => (
                    <div key={index} className='wine-description'>
                        <div className='description-image'>
                            <img src={wine.image} alt="wine-label"/>
                        </div>
                        <div className='description-info'>
                            <h3>{wine.name}</h3>
                            <p><b>Winery:</b> {wine.winery}</p>
                            <p><b>Year Produced:</b> {wine.vintage}</p>
                            <p><b>Grapes:</b> {wine.varietal}</p>
                            <p><b>Avg Price:</b> ${Math.floor(wine.price)}</p>
                            <p><b>Score:</b> {wine.snoothrank}</p>
                        </div>
                    </div>
                ))}
            </div>
        )
    }


}

export default WineInfo;