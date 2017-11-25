import React from 'react'
import PropTypes from 'prop-types'

const Title = ({ className, children }) => {
  return <h1 className={className}>{children}</h1>
}

Title.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string
}

Title.defaultProps = {
  className: '',
  children: ''
}

export default Title
