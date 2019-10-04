import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
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

    this.state = {
      color: "",
      wines: [],
      wineResults: []
    }
  }


  changeColor = async (color) => {
    // this.setState({
    //   color: color
    // })
    const results = await axios.get(`http://api.snooth.com/wines/?akey=y8nbvqhqtphx0uwgi4o6k059ar3v08a5tnfz3ryvjeff9qm4&q=wine&xp=20&n=100&color=${color}`)
    this.setState({
      wines: results.data.wines
    })
  }


  freshWhite = (array) => {
    //this is going to map my results and filter by varital key.
    const freshWines = this.state.wines.filter(wine => (
      wine.varietal === 'Gavi' || wine.varietal === 'Pinot Grigio' || wine.varietal === "Melon De Bourgogne" || wine.varietal === 'Muller-Thurgau' || wine.varietal === 'Orvieto' || wine.varietal === 'Pinot Bianco' || wine.varietal === 'Soave' || wine.varietal === 'Trebbiano' || wine.varietal === 'Verdelho' || wine.varietal === 'Chenin Blanc'
    ))
    this.setState({
      wineResults: freshWines
    })
  }

  earthyWhite = (array) => {
    //this is going to map my results and filter by varital key.
    const earthyWines = this.state.wines.filter(wine => (
      wine.varietal === 'Vouvray' || wine.varietal === 'Semillon' || wine.varietal === 'Sylvaner' || wine.varietal === 'Verdicchio' || wine.varietal === 'Xarel-lo' || wine.varietal === 'Roussanne' || wine.varietal === 'Chasselas'
    ))
    this.setState({
      wineResults: earthyWines
    })
  }

  aromaticWhite = (array) => {
    //this is going to map my results and filter by varital key.
    const aromaticWines = this.state.wines.filter(wine => (
      wine.varietal === 'Riesling' || wine.varietal === 'Sauvignon Blanc' || wine.varietal === 'Gruner Veltliner' || wine.varietal === 'Muscat' || wine.varietal === 'Pinot Gris' || wine.varietal === 'Gewurztraminer' || wine.varietal === 'Torrontes' || wine.varietal === 'Falanghina' || wine.varietal === 'Fiano' || wine.varietal === 'Vermentino' || wine.varietal === 'Albarino'
    ))
    this.setState({
      wineResults: aromaticWines
    })
  }

  richWhite = (array) => {
    //this is going to map my results and filter by varital key.
    const richWines = this.state.wines.filter(wine => (
      wine.varietal === 'Chardonnay'
    ))
    this.setState({
      wineResults: richWines
    })
  }

  mildRed = (array) => {
    //this is going to map my results and filter by varital key.
    const mildReds = this.state.wines.filter(wine => (
      wine.varietal === 'Tempranillo' || wine.varietal === 'Merlot' || wine.varietal === 'Sangiovese'
    ))
    this.setState({
      wineResults: mildReds
    })
  }

  fruityRed = (array) => {
    //this is going to map my results and filter by varital key.
    const fruityReds = this.state.wines.filter(wine => (
      wine.varietal === 'Pinot Noir' || wine.varietal === 'Dolcetto' || wine.varietal === 'Shiraz' || wine.varietal === 'Zinfandel' || wine.varietal === 'Gamay' || wine.varietal === 'Montepulciano' || wine.varietal === 'Primitivo' || wine.varietal === "Nero d'Avola" || wine.varietal === 'Bardolino' || wine.varietal === 'Valpolicella'
    ))
    this.setState({
      wineResults: fruityReds
    })
  }

  spicyRed = (array) => {
    //this is going to map my results and filter by varital key.
    const spicyReds = this.state.wines.filter(wine => (
      wine.varietal === 'Barbera' || wine.varietal === 'Malbec' || wine.varietal === 'Syrah' || wine.varietal === 'Cabernet Franc' || wine.varietal === "Montepulciano d'Abruzzo" || wine.varietal === 'Lagrein' || wine.varietal === 'Teroldego' || wine.varietal === 'Blaufrankisch' || wine.varietal === 'Carmenere' || wine.varietal === 'Pinotage' || wine.varietal === 'Monastrell'
    ))
    this.setState({
      wineResults: spicyReds
    })
  }

  powerfulRed = (array) => {
    //this is going to map my results and filter by varital key.
    const powerfulReds = this.state.wines.filter(wine => (
      wine.varietal === 'Nebbiolo' || wine.varietal === 'Cabernet Sauvignon' || wine.varietal === 'Aglianico' || wine.varietal === 'Grenache'
    ))
    this.setState({
      wineResults: powerfulReds
    })
  }


  render() {
    return (
      <div className="App">
        <head>
          <link href="https://fonts.googleapis.com/css?family=Elsie+Swash+Caps|KoHo|Oldenburg|Rhodium+Libre|Trykker&display=swap" rel="stylesheet"></link>
        </head>
        <Header />
        <main>
          <Switch>
            <Route exact path='/about' component={About} />
            <Route exact path='/winecolor' render={() => <WineColor changeColor={this.changeColor} />} />
            <Route exact path='/winestylered' render={() => {
              if (this.state.wines.length) {
                return <WineStyleRed
                  mildReds={this.mildRed}
                  fruityReds={this.fruityRed}
                  spicyReds={this.spicyRed}
                  powerfulReds={this.powerfulRed}
                />
              }
              else {
                return  <div className="loading">
                          <h4 className='loading-words'>Loading</h4>
                        </div> 

              }
            }
            } />
            <Route exact path='/winestylewhite' render={() => {
              if (this.state.wines.length) {
                return <WineStyleWhite 
                freshWhite={this.freshWhite} 
                earthyWhite={this.earthyWhite} 
                aromaticWhite={this.aromaticWhite} 
                richWhite={this.richWhite} 
                />
                } else {
                return  <div className="loading">
                          <h4 className='loading-words'>Loading</h4>
                        </div> 
                }
                } 
                }/>
            <Route exact path='/wineinfo' render={() => <WineInfo freshWines={this.state.wineResults} />} />
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}

export default () => (
  <Router>
    <App />
  </Router>
)

