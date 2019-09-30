import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import './App.css';
import axios from 'axios';
import Header from './components/Header'
import About from './components/About';
import WineColor from './components/WineColor';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import WineStyleRed from './components/WineStyleRed';


class App extends Component {
  constructor(props) {
    super(props)

    this.state ={
      
    }
  }


  async componentDidMount() {
    try{
      const results = await axios.get(`http://api.snooth.com/wines/?akey=y8nbvqhqtphx0uwgi4o6k059ar3v08a5tnfz3ryvjeff9qm4&q=wine&xp=20&n=50&color=white`)
      console.log(results.data)
    
    }catch(err) {
    console.log(err)
  }
  } 

    render() {
      return (
        <div className="App">
          <Header />
          <WineStyleRed/>
          <main>
            <Switch>
              <Route exact path='/about' component={About} />
              <Route exact path='/winecolor' component={WineColor} />
              <Route component={NotFound} />
              
            </Switch>
          </main>
          <Footer/>
        </div>
      );
  }
}

export default () => (
  <Router>
    <App />
  </Router>
)

