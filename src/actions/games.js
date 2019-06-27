export const GAME_OVER = 'GAME_OVER'

export const gameOver = () => {
  return {
    type: GAME_OVER
  }
}

// *************************

export const GUESS_LETTER = 'GUESS_LETTER'

export const guessLetter = guess => {
  return {
    type: GUESS_LETTER,
    payload: guess,
  }
}

// *************************

export const IS_WINNER = 'IS_WINNER'

export const isWinner = () => {
  return {
    type: IS_WINNER
  }
}

// *************************

export const NEW_GAME = 'NEW_GAME'

export const newGame = () => {
  return {
    type: NEW_GAME
  }
}