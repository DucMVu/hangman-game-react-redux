import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import newGame from '../actions/newGame'

class NewGameButton extends PureComponent {

  reset() {
    this.props.newGame()
  }

  render() {
    return(
      <button className="primary" onClick={this.reset.bind(this)}>New Game</button>
    )
  }
}


export default connect(null, { newGame })(NewGameButton)
