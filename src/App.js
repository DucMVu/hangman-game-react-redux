import React, { Component } from 'react';
import GameContainer from './components/GameContainer';
import { connect } from 'react-redux'
import newGame from './actions/newGame'
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.newGame()
  }
  render() {
    return (
      <div className="App">
        <GameContainer />
      </div>
    );
  }
}

export default connect(null, { newGame })(App)
