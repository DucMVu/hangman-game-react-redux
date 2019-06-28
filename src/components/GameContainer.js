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
          <div className="">
            <img src="https://media.giphy.com/media/3oFzmdjJGyIfkokhHO/giphy.gif" height="400px" alt="bad guess"/>
          </div>
        )

      case true:
        return (
          <div className="">
            <img src="https://media.giphy.com/media/ZU9QbQtuI4Xcc/giphy.gif" height="400px" alt="good guess"/>
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
        <br />
        <h5 className="brown-text"><b>Game rules:</b> Type a letter and hit Enter/Return key. If you're right, keep doing well. If you're wrong, you still have a chance but in total 6 at most. Happy playing!</h5>
        <br />
        {this.gameStatus()}
        <br />
        <NewGame />
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