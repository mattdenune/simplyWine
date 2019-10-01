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
import WineStyleWhite from './components/WineStyleWhite';
import WineInfo from './components/WineInfo';



class App extends Component {
  constructor(props) {
    super(props)

    this.state ={
      color: "",
      wines: [], 
    }
  }


  changeColor = async (color) => {
      // this.setState({
      //   color: color
      // })
    const results = await axios.get(`http://api.snooth.com/wines/?akey=y8nbvqhqtphx0uwgi4o6k059ar3v08a5tnfz3ryvjeff9qm4&q=wine&xp=20&n=50&color=${color}`)
    console.log(results.data)
    this.setState({
      wines: results.data.wines
    })
  }
  
// GOOD CODE
  grapeVarietal = (array) => {
    //this is going to map my results and filter by varital key.
    const wines = this.state.wines.filter(wine => (
     
      wine.varietal === 'Grillo' || wine.varietal === 'Sauvignon Blanc'
    ))
    console.log(wines)
    
  }

  // grapeVarietal = (array) => {
  //   //this is going to map my results and filter by varital key.
  //   const wines = this.state.wines.filter(wine => (
  //     array.map(grape => (
  //       `wine.varietal === "${grape}"`
  //     )).join(' || ')
  //     // console.log(wineParameters)
  //     // wine.varietal === 'Grillo' || wine.varietal === 'Sauvignon Blanc'
  //   ))
  //   console.log(wines)
  // }
  

  

    render() {
      console.log(this.state.wines)
      return (
        <div className="App">
          <Header />
          <main>
            <Switch>
              <Route exact path='/about' component={About} />
              <Route exact path='/winecolor' render={() => <WineColor changeColor={this.changeColor} />} />
              <Route exact path='/winestylered' component={WineStyleRed}/>
              <Route exact path='/winestylewhite' render={() => <WineStyleWhite grapeVarietal={this.grapeVarietal} />} />
              <Route exact path='/wineinfo' component={WineInfo} />
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

