import React, { useState } from 'react'
import PropTypes from 'prop-types'
import inputStyles from './_phone.scss'
import InputCore from '../core'
import { Icon } from '../../'
import countries from './_contiesList'

const InputPhone = ({
  label,
  assistText,
  error,
  success,
  onCodeChange,
  code,
  ...props
}) => {
  const [open, setOpen] = useState(false)
  let validateStyle = []

  if (error === true) {
    validateStyle = validateStyle.concat(inputStyles.error)
  } else if (success === true) {
    validateStyle = validateStyle.concat(inputStyles.success)
  }

  if (props.disabled) {
    validateStyle = validateStyle.concat(inputStyles.disabled)
  }

  const handlerOpen = () => {
    if (open || props.disabled) return

    setOpen(true)

    const globalClick = () => {
      setOpen(false)
      setTimeout(() => document.removeEventListener('click', globalClick), 10)
    }

    document.addEventListener('click', globalClick)
  }

  const getHelperText = (element) => {
    switch (element.type) {
      case 'success':
        return (
          <div className={inputStyles.successText}>
            <Icon data-testid='successIcon' name='check' size={1} />
            <span>{element.text}</span>
          </div>
        )
      case 'error':
        return (
          <div className={inputStyles.errorText}>
            <Icon data-testid='errorIcon' name='cross' size={1} />
            <span>{element.text}</span>
          </div>
        )
      default:
        return <div> {element.text}</div>
    }
  }

  return (
    <div className={[inputStyles.inputContainer, validateStyle].join(' ')}>
      {label && <span className={inputStyles.inputLabel}> {label} </span>}

      <div className={inputStyles.inputPhoneRow}>
        <div className={inputStyles.countryCode} onClick={handlerOpen}>
          {`+${code}`}
          <Icon name={open ? 'arrow-up' : 'arrow-down'} size={1} />
        </div>

        <InputCore {...props} prefix='' suffix='' variant='text' onlyNumber />

        {open && (
          <div className={inputStyles.suggestion}>
            {countries.map((el) => (
              <div
                role='region'
                key={el.CODE}
                className={inputStyles.area}
                onClick={() => onCodeChange(el.CODE)}
              >
                <div className={inputStyles.code}>+{el.CODE}</div> {el.AREA}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className={[inputStyles.inputHelper].join(' ')}>
        <div>
          {Array.isArray(assistText) && assistText.length > 0
            ? assistText.map((el, i) => (
                <div key={`${el.text}-${i}`}>{getHelperText(el)}</div>
              ))
            : assistText}
        </div>
      </div>
    </div>
  )
}

InputPhone.defaultProps = {
  code: 56
}

InputPhone.propTypes = {
  label: PropTypes.string,
  code: (props) => {
    if (props.code === undefined)
      return new Error(
        'Failed prop type: The prop `code` is marked as required in `InputPhone`, but its value is `undefined`'
      )

    const validCodes = countries.map((c) => c.CODE)
    if (!validCodes.find((arr) => props.code === arr))
      return new Error(`Invalid \`code\` value it must be valid code area.
       code ${props.code} isn't into [${validCodes.join(', ')}]
      `)
  },
  value: (props) => {
    if (props.value === undefined)
      return new Error(
        'Failed prop type: The prop `value` is marked as required in `InputPhone`, but its value is `undefined`'
      )

    if (isNaN(props.value))
      return new Error(
        'Invalid prop `value` it must be either `string` or `number`'
      )
  },
  assistText: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string,
        type: PropTypes.oneOf(['success', 'assist', 'error'])
      })
    ),
    PropTypes.string
  ]),
  error: PropTypes.bool,
  success: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  onCodeChange: PropTypes.func.isRequired
}

export default InputPhone
