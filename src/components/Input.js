import React, {Component} from 'react'
import {connect} from 'react-redux'
import {guessLetter, isWinner} from '../actions/games'
import '../App.css'

class Input extends Component {
  saveGuess = event => {
    event.preventDefault()
    const {word} = this.props
    var myRE = /^[a-z]+$/i
    const guess = this.refs.guess.value.toUpperCase()
    if (guess === word) return this.props.isWinner()
    if (guess.match(myRE)) this.props.guessLetter(guess)
    this.refs.guess.value = null
  }

  render() {
    return (
      <div className="center container">
        <form action="" className="container" onSubmit={this.saveGuess}>
          <input
              type="text"
              ref="guess"
              className="center"
              placeholder="GUESS ONE LETTER"
              style={{"borderBottom": "2px solid grey"}}
          />
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    guesses: state.guesses,
    word: state.word
  }
}

const mapDispatchToProps = {guessLetter, isWinner}

export default connect(mapStateToProps, mapDispatchToProps)(Input)