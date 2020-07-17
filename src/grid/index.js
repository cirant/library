import React from 'react'
import PropTypes from 'prop-types'
import gridStyles from '../scss/_grid.scss'

const Grid = ({
  variant = 'div',
  col,
  row,
  children,
  sm,
  md,
  lg,
  xl,
  ...props
}) => {
  let styles = row ? [gridStyles.row] : [gridStyles.col]

  if (col) {
    styles = styles.concat(gridStyles[`col-${col}`])
  }

  if (sm) {
    styles = styles.concat(gridStyles[`col-sm-${sm}`])
  }

  if (md) {
    styles = styles.concat(gridStyles[`col-md-${md}`])
  }

  if (lg) {
    styles = styles.concat(gridStyles[`col-lg-${lg}`])
  }

  if (xl) {
    styles = styles.concat(gridStyles[`col-xl-${xl}`])
  }

  return React.createElement(
    variant,
    { ...props, className: styles.concat(props.className || '').join(' ') },
    children
  )
}

Grid.defaultProps = {
  variant: 'div',
  onClick: () => null
}

Grid.propTypes = {
  variant: PropTypes.string,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
  onClick: PropTypes.func,
  row: PropTypes.bool
}

export default Grid
