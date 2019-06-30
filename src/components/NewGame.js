import React, {Component} from 'react'
import {connect} from 'react-redux'
import {newGame} from '../actions/games'

class NewGame extends Component {

  reset() {
    this.props.newGame()
  }

  render() {
    return (
      <button className="waves-effect waves-light btn-small pink" onClick={() => this.reset()}>New Game</button>
    )
  }
}


export default connect(null, {newGame})(NewGame)
