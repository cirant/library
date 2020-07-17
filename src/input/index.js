import React from 'react'
import PropTypes from 'prop-types'
import inputStyles from './_input.scss'
import InputCore from './core'
import Icon from '../icons'

const Input = ({ label, assistText, error, success, ...props }) => {
  const { maxLength } = props

  let validateStyle = []

  if (error === true) {
    validateStyle = validateStyle.concat(inputStyles.error)
  } else if (success === true) {
    validateStyle = validateStyle.concat(inputStyles.success)
  }

  if (props.disabled) {
    validateStyle = validateStyle.concat(inputStyles.disabled)
  }

  const getHelperText = (element) => {
    switch (element.type) {
      case 'success':
        return (
          <div className={inputStyles.successText}>
            <Icon data-testid="successIcon" name='check' size={1} /> <span>{element.text}</span>
          </div>
        )
      case 'error':
        return (
          <div className={inputStyles.errorText}>
            <Icon data-testid="errorIcon" name='cross' size={1} /> <span>{element.text}</span>
          </div>
        )
      default:
        return (
          <div>
            {' '}
            <i className={inputStyles.empty} /> {element.text}
          </div>
        )
    }
  }

  return (
    <div className={[inputStyles.inputContainer, validateStyle].join(' ')}>
      {label && <span className={inputStyles.inputLabel}> {label} </span>}

      <InputCore {...props} />

      <div className={[inputStyles.inputHelper].join(' ')}>
        <div>
          {Array.isArray(assistText) && assistText.length > 0
            ? assistText.map((el, i) => (
              <div key={`${el.text}-${i}`}>{getHelperText(el)}</div>
            ))
            : assistText}
        </div>
        {maxLength && (
          <div>{`${Number(maxLength) - props.value.length}/${maxLength}`}</div>
        )}
      </div>
    </div>
  )
}

Input.defaultProps = {
  onChange: /* istanbul ignore next */ () => null,
  type: 'text'
}

Input.propTypes = {
  label: PropTypes.string,
  assistText: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string,
        type: PropTypes.oneOf(['success', 'assist', 'error'])
      })
    ),
    PropTypes.string
  ]),
  maxLength: PropTypes.string,
  type: PropTypes.oneOf(['text', 'password']),
  error: PropTypes.bool,
  success: PropTypes.bool,
  suffix: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  prefix: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  variant: PropTypes.string,
  disabled: PropTypes.bool
}

export default Input
