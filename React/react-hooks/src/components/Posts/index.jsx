import React from 'react'
import PropTypes from 'prop-types'

const Posts = ({ posts }) => (
  <ul>
    {posts.map(post => (
      <li key={post.id.toString()}>
        {post.title}
      </li>
    ))}
  </ul>
)

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired).isRequired,
}

export default Posts
