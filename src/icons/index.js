import React from 'react'
import PropTypes from 'prop-types'
import icons from '../scss/_coopeuch-icon.scss'

const Icon = ({ name, size, className, ...props }) => {
  const icon = icons[`icon-${name}`]
  const sizeWith = size > 0 && size <= 8 ? size : '1'
  const sizeSelected = icons[`size-${size}`] || icons[`size-1`]
  let renderStyles = ['coopeuch-icon']

  if (className) {
    renderStyles = [...renderStyles].concat(className)
  }
  /* istanbul ignore if */
  if (icon) {
    renderStyles = [...renderStyles].concat(icon)
  }
  /* istanbul ignore if */
  if (sizeSelected) {
    renderStyles = [...renderStyles].concat(sizeSelected)
  }

  return (
    <i {...props} className={renderStyles.join(' ')} data-size={sizeWith} />
  )
}

Icon.defaultProps = {
  name: 'alarm',
  size: 2
}

Icon.propTypes = {
  name: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string
}

export default Icon
