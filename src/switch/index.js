import React from 'react'
import styles from './_switch.scss'
import PropTypes from 'prop-types'

const Switch = ({ status, disabled, ...props }) => {
  let switchClass = [styles.switchBar]
  const containerClass = [
    styles.switchContainer,
    disabled ? styles.disabled : null
  ]

  if (status) {
    switchClass = switchClass.concat(styles.active)
  }

  return (
    <div
      data-status={status ? 'on' : 'off'}
      className={containerClass.join(' ')}
      {...props}
    >
      <div className={switchClass.join(' ')}>
        <div className={styles.circle} />
      </div>
    </div>
  )
}

Switch.defaultProps = {
  status: false,
  disabled: false
}

Switch.propTypes = {
  status: PropTypes.bool,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
}

export default Switch
