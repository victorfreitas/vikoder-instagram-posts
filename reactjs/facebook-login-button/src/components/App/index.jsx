import React from 'react'

import styles from './App.module.css'
import Title from '../Title'
import Facebook from '../Facebook'

const App = () => (
  <div className={styles.container}>
    <header className={styles.header}>
      <Title />
      <Facebook />
    </header>
  </div>
)

export default App
