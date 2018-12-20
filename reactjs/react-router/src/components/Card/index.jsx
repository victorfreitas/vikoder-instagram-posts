import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ item }) => (
  <div className="card" style={{ width: '18rem' }}>
    <img className="card-img-top" src={item.url} alt={item.title} />
    <div className="card-body">
      <h5 className="card-title">
        {item.title}
      </h5>
    </div>
  </div>
)

Card.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
}

export default Card
