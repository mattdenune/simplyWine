import React, { Component } from 'react'
import Matt from '../Images/Matt.png'

class About extends Component {


    render() {
        return(
            <div className='about'>
                <img src={Matt}  alt="Matt" className='matt-image' />
                <p>
                Matthew Denune is a former wine professional reborn into Software Engineering.  His passion for wine shines through this project as he hopes this app will help the consumer find their way through the fog of choosing the right wine to enjoy.
                </p>
            </div>
        )
    }   
}

export default About;