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
      wineResults: []
    }
  }


  changeColor = async (color) => {
      // this.setState({
      //   color: color
      // })
    const results = await axios.get(`http://api.snooth.com/wines/?akey=y8nbvqhqtphx0uwgi4o6k059ar3v08a5tnfz3ryvjeff9qm4&q=wine&xp=20&n=100&color=${color}`)
    console.log(results.data)
    this.setState({
      wines: results.data.wines
    })
  }
  

  freshWhite = (array) => {
    //this is going to map my results and filter by varital key.
    const freshWines = this.state.wines.filter(wine => (
      wine.varietal === 'Muscadet' || wine.varietal === 'Pinot Grigio' || wine.varietal === "Melon De Bourgogne"
    ))
    this.setState({
      wineResults: freshWines
    })
    console.log(freshWines)
  }

  earthyWhite = (array) => {
    //this is going to map my results and filter by varital key.
    const earthyWines = this.state.wines.filter(wine => (
      wine.varietal === 'Vouvray' || wine.varietal === 'Semillon'
    ))
    this.setState({
      wineResults: earthyWines
    })
    console.log(earthyWines)
  }

  aromaticWhite = (array) => {
    //this is going to map my results and filter by varital key.
    const aromaticWines = this.state.wines.filter(wine => (
      wine.varietal === 'Riesling' || wine.varietal === 'Sauvignon Blanc'
    ))
    this.setState({
      wineResults: aromaticWines
    })
    console.log(aromaticWines)
  }

  richWhite = (array) => {
    //this is going to map my results and filter by varital key.
    const richWines = this.state.wines.filter(wine => (
      wine.varietal === 'Chardonnay' 
    ))
    this.setState({
      wineResults: richWines
    })
    console.log(richWines)
  }

  mildRed = (array) => {
    //this is going to map my results and filter by varital key.
    const mildReds = this.state.wines.filter(wine => (
      wine.varietal === 'Tempranillo' || wine.varietal === 'Merlot' || wine.varietal === "Melon De Bourgogne"
    ))
    this.setState({
      wineResults: mildReds
    })
    console.log(mildReds)
  }

  fruityRed = (array) => {
    //this is going to map my results and filter by varital key.
    const fruityReds = this.state.wines.filter(wine => (
      wine.varietal === 'Pinot Noir' || wine.varietal === 'Dolcetto' || wine.varietal === "Melon De Bourgogne"
    ))
    this.setState({
      wineResults: fruityReds
    })
    console.log(fruityReds)
  }

  spicyRed = (array) => {
    //this is going to map my results and filter by varital key.
    const spicyReds = this.state.wines.filter(wine => (
      wine.varietal === 'Barbera' || wine.varietal === 'Malbec' || wine.varietal === "Melon De Bourgogne"
    ))
    this.setState({
      wineResults: spicyReds
    })
    console.log(spicyReds)
  }

  powerfulRed = (array) => {
    //this is going to map my results and filter by varital key.
    const powerfulReds = this.state.wines.filter(wine => (
      wine.varietal === 'Nebbiolo' || wine.varietal === 'Cabernet Sauvignon' || wine.varietal === "Melon De Bourgogne"
    ))
    this.setState({
      wineResults: powerfulReds
    })
    console.log(powerfulReds)
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
      // console.log(this.grapeVarietal)
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
              <Route exact path='/winestylered' render={() => <WineStyleRed mildReds={this.mildRed} fruityReds={this.fruityRed} spicyReds={this.spicyRed} powerfulReds={this.powerfulRed} />}/>
              <Route exact path='/winestylewhite' render={() => <WineStyleWhite freshWhite={this.freshWhite} earthyWhite={this.earthyWhite} aromaticWhite = {this.aromaticWhite} richWhite = {this.richWhite}/>} />
              <Route exact path='/wineinfo' render={() => <WineInfo freshWines={this.state.wineResults}/>} />
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

