import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

export class Guesses extends Component {
  static propTypes = {
    guesses: PropTypes.array.isRequired,
  }

  render() {
    const {guesses} = this.props

    return(
      <div>
        <p>{guesses.join(", ")}</p>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    guesses: state.guesses
  }
}

export default connect(mapStateToProps)(Guesses)