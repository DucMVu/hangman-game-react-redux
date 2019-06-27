import React, {Component} from 'react'
import {connect} from 'react-redux'
import {newGame} from '../actions/games'

class NewGame extends Component {

  reset() {
    this.props.newGame()
  }

  render() {
    return (
      <a className="waves-effect waves-light btn-large" onClick={() => this.reset()}>New Game</a>
    )
  }
}


export default connect(null, {newGame})(NewGame)
