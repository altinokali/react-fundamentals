import React from 'react'
import PropTypes from 'prop-types'
import props from 'prop-types';

export default function Navbar(props) {
  return (
    <div>
    <h2>{props.name}</h2>
    </div>
  )
}

Navbar.propTypes = {
  name : PropTypes.string.isRequired
}
Navbar.defaultProps = {
  title : "Default App"
}
