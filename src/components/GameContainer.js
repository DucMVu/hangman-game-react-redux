import React, {Component} from 'react'
import {connect} from 'react-redux'
import NewGame from './NewGame'
import Input from './Input'
import GameProgress from './GameProgress'

class GameContainer extends Component {
  gameStatus() {
    const {isWinner, word} = this.props

    switch(isWinner) {
      case null:
        return (
          <div className="gameProgress">
            <Input />
            <GameProgress />
          </div>
        )

      case false:
        let googleSearch = 'https://www.google.com/search?q=' + word
        return (
          <div className="">
            <h5 className="purple-text">The answer is {word}. Whaattt? Check its meaning <a href={googleSearch} target="_blank" rel='noreferrer noopener'>here</a>.</h5>
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
        <h1 className="red-text">Hangman-react-redux-game</h1>
        <br />
        <h5 className="orange-text"><b>Game rules:</b> Type a letter and hit Enter/Return key. Hit 6 wrong guesses, your game is over. Good luck!</h5>
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
    isWinner: state.isWinner,
    word: state.word
  }
}
export default connect(mapStateToProps)(GameContainer)