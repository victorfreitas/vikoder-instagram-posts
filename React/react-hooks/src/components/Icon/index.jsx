import React from 'react'

const Icon = ({ icon, color, alt }) => (
  <img
    src={`https:icon.now.sh/${icon}/${color}`}
    className={`icon icon-${icon}`}
    alt={alt}
  />
)

export default Icon
