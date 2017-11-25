import React from 'react'
import PropTypes from 'prop-types'

const Input = props => {
  return (
    <input
      type={props.type}
      name={props.name}
      className={props.className}
      onChange={props.onChange}
      value={props.value}
      required={props.required}
      placeholder={props.placeholder}
      pattern={props.pattern}
      min={props.min}
      ref={props.refInput}
      defaultValue={props.defaultValue}
    />
  )
}

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  required: PropTypes.string,
  placeholder: PropTypes.string,
  pattern: PropTypes.string,
  min: PropTypes.string,
  refInput: PropTypes.func,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

Input.dafaultProps = {
  type: '',
  name: '',
  className: '',
  onChange: null,
  value: '',
  required: '',
  placeholder: '',
  pattern: '',
  min: '',
  refInput: null,
  defaultValue: ''
}

export default Input
