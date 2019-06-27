import React, {Component} from 'react'
import {connect} from 'react-redux'
import {guessLetter, isWinner} from '../actions/games'

class Input extends Component {
  saveGuess(event) {
    event.preventDefault()
    const {word} = this.props
    var myRE = /^[a-z]+$/i
    const guess = this.refs.guess.value.toUpperCase()
    if (guess === word) return this.props.isWinner()
    if (guess.match(myRE)) this.props.save(guess)
    this.refs.guess.value = null
  }

  render() {
    return (
      <div className="center container">
        <form action="" onSubmit={this.saveGuess.bind(this)}>
          <input
              type="text"
              ref="guess"
              className="center"
              placeholder="Guess a letter"
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
const mapDispatchToProps = {save: guessLetter, isWinner}

export default connect(mapStateToProps, mapDispatchToProps)(Input)