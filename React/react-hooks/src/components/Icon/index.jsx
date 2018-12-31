import React from 'react'
import PropTypes from 'prop-types'

import icons from './icons'

const Icon = ({ icon, alt }) => (
  <img
    src={icons[icon]}
    className={`icon icon-${icon}`}
    alt={alt}
  />
)

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}

export default Icon
