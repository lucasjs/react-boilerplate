import React, { Component, useState } from 'react'
import { hot } from 'react-hot-loader/root'
import styles from './App.css'
import Button from 'components/Button'

const App = () => {
  const [name] = useState('Lucas')

  return (
    <div className={styles.App}>
      <h1 className={styles.title}> Hello, {name}!</h1>
      <Button
        handleClick={() => null}
      >
        Click me
      </Button>
    </div>
  )
}

export default hot(App)
