import word from './word'
import guesses from './guesses'
import isWinner from './isWinner'
import {combineReducers} from 'redux'

const reducers = combineReducers({
  word,
  guesses,
  isWinner,
})

export default reducers