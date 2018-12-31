import React from 'react'

import icons from './icons'

const Icon = ({ icon, alt }) => (
  <img
    src={icons[icon]}
    className={`icon icon-${icon}`}
    alt={alt}
  />
)

export default Icon
