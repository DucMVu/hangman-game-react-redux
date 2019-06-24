import { NEW_GAME } from '../actions/newGame'
import wordBank from '../fixtures/words'

export default (state = wordBank, { type, payload } = {}) => {
  switch(type) {
    case NEW_GAME :
      return wordBank[Math.floor(Math.random() * wordBank.length)];
    default :
      return state
  }
}
