import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ type, name, onClick, className, children }) => {
  return (
    <button type={type} name={name} onClick={onClick} className={className}>
      {children}
    </button>
  )
}

Button.propType = {
  type: PropTypes.string,
  name: PropTypes.string,
  handleClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.string
}

Button.defaultProps = {
  type: 'button',
  name: '',
  handleClick: null,
  className: '',
  children: ''
}
export default Button
