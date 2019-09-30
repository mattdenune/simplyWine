import React, {Component} from 'react'
import { Link } from 'react-router-dom';

class Header extends Component {


    render() {
        return (
            <nav>
                <h1>Simply Wine</h1>
                <h3>helping you choose the right wine for you</h3>
                <ul>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='winecolor'>Choose Again</Link></li>
                </ul>

            </nav>
        )
    }

}

export default Header;