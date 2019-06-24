import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import gameOver from '../actions/gameOver'
import isWinner from '../actions/isWinner'

export class GameProgress extends PureComponent {
  static propTypes = {
    guesses: PropTypes.array.isRequired,
  }

  showProgress() {
    const { guesses, word } = this.props
    const gameStarted = (typeof word === 'string' || word instanceof String)

    if (gameStarted) {
      const wordArr = word.split('')
      return this.progress = wordArr.map(function(letter){
        if (guesses.includes(letter) === false) return letter = '_'
        return letter
      }).join(' ')
    }
  }

  wrongGuessCount() {
    const { guesses, word } = this.props
    return guesses.reduce(function(total, guess) {
       if (word.indexOf(guess) === -1) return total + 1
       return total
    }, 0)
  }

  isWinner() {
    const { word } = this.props
    const gameStarted = (typeof word === 'string' || word instanceof String)
    if (gameStarted) return !this.showProgress().includes('_')
  }

  componentDidUpdate(){
    if (this.wrongGuessCount() >= 6) return this.props.gameOver()
    if (this.isWinner()) return this.props.isWinner()
  }
  
  render() {
    const { guesses } = this.props
    return(
      <div>
      <p> {this.showProgress()} </p>
      <p>  {guesses.join(", ")} </p>
      </div>
    )
  }
}

const mapStateToProps = ( { guesses, word }) => {
  return {
    guesses,
    word,
  }
}

export default connect(mapStateToProps, { gameOver, isWinner })(GameProgress)
