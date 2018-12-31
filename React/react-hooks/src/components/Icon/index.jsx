import React from 'react'

import icons from './icons'

const Icon = ({ icon, color, alt }) => (
  <img
    src={icons[icon]}
    className={`icon icon-${icon}`}
    alt={alt}
  />
)

export default Icon
