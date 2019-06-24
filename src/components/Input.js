// import Editor from 'react-medium-editor'
// import toMarkdown from 'to-markdown'
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import 'medium-editor/dist/css/medium-editor.css'
import 'medium-editor/dist/css/themes/default.css'
import guessLetter from '../actions/guessLetter'
import isWinner from '../actions/isWinner'

class Input extends PureComponent {
constructor(props) {
    super()

    const guess = props

    this.state = guess
  }

  updateGuess(event) {
    if (event.keyCode === 13) {
      this.saveGuess()
    }
  }

  saveGuess() {
    const { word } = this.props
    var myRE = /^[a-z]+$/i;
    const guess = this.refs.guess.value.toLowerCase()

    if (guess === word) return this.props.isWinner()
    if (guess.match(myRE)) this.props.save(guess)
    this.refs.guess.value = null
  }

  render() {
    return(
      <div className="editor">
        <input
          type="text"
          ref="guess"
          className="guess"
          placeholder="Make a guess"
          defaultValue={this.state.guess}
          onChange={this.updateGuess.bind(this)}
          onKeyDown={this.updateGuess.bind(this)}/>

          <div className="actions">
            <button className="primary" type="submit" onClick={this.saveGuess.bind(this)}>Guess</button>
          </div>
      </div>
    )
  }
}

const mapStateToProps = ( { guesses, word } ) => {
  return {
    guesses,
    word
  }
}
const mapDispatchToProps = { save: guessLetter, isWinner }

export default connect(mapStateToProps, mapDispatchToProps)(Input)
