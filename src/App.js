import React, {Component} from 'react';
import GameContainer from './components/GameContainer'
import {connect} from 'react-redux'
import {newGame} from './actions/games'
import './App.css'

class App extends Component {
  componentDidMount() {
    this.props.newGame()
  }
  
  render() {
    return (
      <div className="App">
        <audio autoPlay={true} loop={true}>
          <source src="http://soundimage.org/wp-content/uploads/2016/07/Fantasy_Game_Background_Looping.mp3" />     
        </audio>
        <GameContainer />
      </div>
    );
  }
}

export default connect(null, {newGame})(App)