import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Title from './Title'
import NewGameButton from './newGameButton'
import Input from './Input'
import GameProgress from './GameProgress'

class GameContainer extends PureComponent {
  gameStatus(props) {
    const { isWinner } = this.props

    if (isWinner === null) return (
      <div className="gameProgress">
        <Input />
        <GameProgress />
      </div>
    )

    if (!isWinner) return (
      <div className="gameOver">
        <p>'Oh, no. Want to try again?'</p>
      </div>
    )

    if (isWinner) return (
      <div className="winner">
        <p>'Yay!!! You won!!'</p>
      </div>
    )
  }


  render() {
    return(
      <div className="game wrapper">
        <header>
          <Title content="Hangman" />
        </header>
        <main>
          { this.gameStatus() }
          <br/>
          <NewGameButton />
        </main>
      </div>
    )
  }
}

const mapStateToProps = ( { isWinner } ) => {
  return {
    isWinner
  }
}
export default connect(mapStateToProps)(GameContainer)
