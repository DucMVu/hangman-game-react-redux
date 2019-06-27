import {GUESS_LETTER, NEW_GAME, GAME_OVER, IS_WINNER} from '../actions/games'

const guesses = (state = [], action) => {
  switch(action.type) {
    case NEW_GAME:
      return state = []
    case GUESS_LETTER:
      return [...state, action.payload]
    case GAME_OVER:
      return state
    case IS_WINNER:
      return state
    default:
      return state
  }
}

export default guesses