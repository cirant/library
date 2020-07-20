import React from 'react'
import PropTypes from 'prop-types'
import styles from './_radio.scss'

const Radio = ({ checked, onChange, disabled, ...props }) => {
  const disabledClass = disabled ? styles.disabled : ''
  const checkedClass = checked ? styles.checked : styles.unchecked

  return (
    <label
      className={[styles.radioContainer, disabledClass]
        .concat(checkedClass)
        .join(' ')}
    >
      <input
        data-testid='radio'
        disabled={disabled}
        type='radio'
        checked={checked}
        onChange={
          onChange
            ? ({ target }) => onChange(target.checked)
            : /* istanbul ignore next */ null
        }
        {...props}
      />
      <div className={[styles.radio, checkedClass, disabledClass].join(' ')} />
    </label>
  )
}

Radio.defaultProps = {
  disabled: false,
  checked: false,
  onChange: /* istanbul ignore next */ () => null
}

Radio.propTypes = {
  disabled: PropTypes.bool,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func
}

export default Radio
