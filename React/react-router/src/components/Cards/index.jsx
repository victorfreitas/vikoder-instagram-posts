import React from 'react'
import PropTypes from 'prop-types'

import Card from '../Card'

const Cards = ({ items }) => (
  items.map(item => (
    <Card key={item.id.toString()} item={item} />
  ))
)

Cards.propTypes = {
  items: PropTypes.array.isRequired,
}

export default Cards
