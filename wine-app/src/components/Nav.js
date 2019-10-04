import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {


    render() {
        return (
            <nav>
                <h1>Simply Wine</h1>
                <h3>helping you find your wine</h3>
                <ul>
                    <li><Link to='/about'>about</Link></li>
                    <li><Link to='/winecolor'>choose again</Link></li>
                </ul>
            </nav>
        )
    }

}

export default Nav;