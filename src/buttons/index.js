import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../icons'
import styles from './_buttons.scss'

const Button = ({
  children,
  color,
  variant,
  disabled,
  prefix,
  suffix,
  ...props
}) => {
  const btnVariant = variant !== '' ? `-${variant}` : ''
  const btnStyles = [styles.btn, styles[`btn-${color}${btnVariant}`] || '']

  return (
    <button
      {...props}
      className={btnStyles.concat(props.className).join(' ')}
      disabled={disabled}
    >
      {prefix && <Icon className={styles.prefix} name={prefix} />}
      {variant !== 'text' ? (
        children
      ) : !prefix && !suffix ? (
        <span>{children}</span>
      ) : (
        children
      )}
      {suffix && <Icon className={styles.suffix} name={suffix} />}
    </button>
  )
}

Button.defaultProps = {
  variant: '',
  color: 'primary',
  disabled: false,
  onClick: /* istanbul ignore next */ () => null
}

Button.propTypes = {
  prefix: PropTypes.string,
  suffix: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary']),
  variant: PropTypes.oneOf(['', 'outline', 'text']),
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool
}

export default Button
