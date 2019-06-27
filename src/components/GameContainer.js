import React, {Component} from 'react'
import {connect} from 'react-redux'
import NewGame from './NewGame'
import Input from './Input'
import GameProgress from './GameProgress'

class GameContainer extends Component {
  gameStatus() {
    const {isWinner} = this.props

    switch(isWinner) {
      case null:
        return (
          <div className="gameProgress">
            <Input />
            <GameProgress />
          </div>
        )

      case false:
        return (
          <div className="gameOver">
            <p>You have made 6 incorrect guesses. Try again?</p>
          </div>
        )

      case true:
        return (
          <div className="winner">
            <p>You're good. Try again?</p>
          </div>
        )
        
      default:
        return null
    }
  }

  render() {
    return(
      <div className="center container">
        <h1 className="blue-text">Hangman-react-redux-game</h1>
        <div className="">
          {this.gameStatus()}
          <NewGame />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isWinner: state.isWinner
  }
}
export default connect(mapStateToProps)(GameContainer)