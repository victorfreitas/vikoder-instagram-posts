import React from 'react'
import PropTypes from 'prop-types'

const Title = ({ text }) => (
  <h1 className="bd-title">
    <span className="text-primary">
      {text}
    </span>
  </h1>
)

Title.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Title
