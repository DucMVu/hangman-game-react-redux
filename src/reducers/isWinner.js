import {IS_WINNER, GAME_OVER} from '../actions/games'

const isWinner = (state = null, action) => {
  switch(action.type) {
    case IS_WINNER:
      return true
    case GAME_OVER:
      return false
    default:
      return null
  }
}

export default isWinner