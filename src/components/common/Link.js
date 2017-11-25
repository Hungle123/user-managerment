import React from 'react'
import PropTypes from 'prop-types'

const Link = ({ children, onClick, className }) => {
  return (
    <a
      href="/"
      onClick={e => {
        e.preventDefault()
        onClick()
      }}
      className={className}
    >
      {children}
    </a>
  )
}

Link.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired
}

Link.defaultProps = {
  children: null,
  onClick: null,
  className: ''
}

export default Link
