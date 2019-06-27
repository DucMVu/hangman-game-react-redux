import {NEW_GAME} from '../actions/games'

const words = require('an-array-of-english-words')

export default (state = words, action) => {
  switch(action.type) {
    case NEW_GAME:
      return words[Math.floor(Math.random() * words.length)].toUpperCase()
    default:
      return state
  }
}