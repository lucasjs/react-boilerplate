import React from 'react'
import PropTypes from 'prop-types'
import styles from './Button.css'

const Button = ({
  children,
  handleClick
}) => {
  return (
    <button
      className={styles.button}
      onClick={() => handleClick()}
    >
      {children}
    </button>
  )
}

Button.defaultProps = {
  handleClick: null
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  handleClick: PropTypes.func
}

export default Button
