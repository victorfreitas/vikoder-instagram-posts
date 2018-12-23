/**
 * (React Hooks v16.7.0-alpha.2) useState and useEffect
 * @author vikoder
 */
import React, { useState, useEffect } from 'react'
import axios from 'axios'

import './style.css'
import Posts from '../Posts'

const App = () => {
  const [posts, setPosts] = useState([])

  const fetchPosts = async () => {
    const { REACT_APP_API_POSTS } = process.env
    const { data } = await axios(REACT_APP_API_POSTS)

    setPosts(data)
  }

  /*
   * useEffect function must return a cleanup function or nothing.
   * Promises and useEffect(async () => ...) are not supported,
   * but you can call an async function inside an effect.
   * Use an empty array in second parameter, don't dispatch on update
   */
  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <div className="App">
      <div className="App-header">
        <Posts posts={posts} />
      </div>
    </div>
  )
}

export default App
