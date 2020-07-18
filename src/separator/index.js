import React from 'react'
import PropTypes from 'prop-types'
import styles from './_separator.scss'

const Separator = ({ vertical }) => {
  const direction = vertical ? 'vertical' : 'horizontal'
  let separatorClases = [styles.separator]

  separatorClases = separatorClases.concat(styles[direction])
  return <hr className={separatorClases.join(' ')} data-direction={direction} />
}

Separator.defaultProps = {
  vertical: false
}

Separator.propTypes = {
  vertical: PropTypes.bool
}

export default Separator
