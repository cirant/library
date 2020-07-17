import React from 'react'
import PropTypes from 'prop-types'
import styles from './_checkbox.scss'

const Checkbox = ({ variant, checked, onChange, disabled, ...props }) => {
  const color = disabled ? '#9C9A9F' : checked ? '#007DB7' : '#646569'
  const disabledClass = disabled ? styles.disabled : ''
  const checkedClass = checked ? styles.checked : styles.unchecked

  return (
    <label
      className={[styles.checkbox]
        .concat(disabledClass)
        .concat(checkedClass)
        .join(' ')}
    >
      <input
        data-testid='checkbox'
        disabled={disabled}
        type='checkbox'
        checked={checked}
        onChange={
          onChange
            ? ({ target }) => onChange(target.checked)
            : /* istanbul ignore next */ null
        }
        {...props}
      />
      {variant ? (
        <svg width='24px' height='24px' viewBox='0 0 24 24'>
          {checked ? (
            <g
              data-testid='checked-variant-active'
              stroke='none'
              strokeWidth='1'
              fill='none'
              fillRule='evenodd'
            >
              <g transform='translate(-2031.000000, -2448.000000)' fill={color}>
                <path
                  d='M2052.33333,2448 L2033.66667,2448 C2032.2,2448 2031,2449.2 2031,2450.66667 L2031,2469.33333 C2031,2470.8 2032.2,2472 2033.66667,2472 L2052.33333,2472 C2053.8,2472 2055,2470.8 2055,2469.33333 L2055,2450.66667 C2055,2449.2 2053.8,2448 2052.33333,2448 Z M2048.14286,2461 L2037.85714,2461 C2037.38571,2461 2037,2460.55 2037,2460 C2037,2459.45 2037.38571,2459 2037.85714,2459 L2048.14286,2459 C2048.61429,2459 2049,2459.45 2049,2460 C2049,2460.55 2048.61429,2461 2048.14286,2461 Z'
                  id='color_checkbox'
                />
              </g>
            </g>
          ) : (
            <g
              data-testid='checked-variant-inactive'
              stroke='none'
              strokeWidth='1'
              fill='none'
              fillRule='evenodd'
            >
              <g transform='translate(-2079.000000, -2448.000000)' fill={color}>
                <path
                  d='M2100,2470 L2082,2470 C2081.45,2470 2081,2469.55 2081,2469 L2081,2451 C2081,2450.45 2081.45,2450 2082,2450 L2100,2450 C2100.55,2450 2101,2450.45 2101,2451 L2101,2469 C2101,2469.55 2100.55,2470 2100,2470 Z M2101,2448 L2081,2448 C2079.9,2448 2079,2448.9 2079,2450 L2079,2470 C2079,2471.1 2079.9,2472 2081,2472 L2101,2472 C2102.1,2472 2103,2471.1 2103,2470 L2103,2450 C2103,2448.9 2102.1,2448 2101,2448 Z'
                  id='checkbox_disabled'
                />
              </g>
            </g>
          )}
        </svg>
      ) : (
        <svg width='24px' height='24px' viewBox='0 0 24 24'>
          {checked ? (
            <g
              data-testid='checked-active'
              stroke='none'
              strokeWidth='1'
              fill='none'
              fillRule='evenodd'
            >
              <g transform='translate(-1993.000000, -2448.000000)' fill={color}>
                <path
                  d='M2014.33333,2448 L1995.66667,2448 C1994.2,2448 1993,2449.2 1993,2450.66667 L1993,2469.33333 C1993,2470.8 1994.2,2472 1995.66667,2472 L2014.33333,2472 C2015.8,2472 2017,2470.8 2017,2469.33333 L2017,2450.66667 C2017,2449.2 2015.8,2448 2014.33333,2448 Z M2003.43221,2465.6338 C2002.95822,2466.12207 2002.19256,2466.12207 2001.71857,2465.6338 L1997.35549,2461.13928 C1996.8815,2460.65102 1996.8815,2459.86228 1997.35549,2459.37402 C1997.82947,2458.88576 1998.59514,2458.88576 1999.06912,2459.37402 L2002.56931,2462.97966 L2010.93088,2454.3662 C2011.40486,2453.87793 2012.17053,2453.87793 2012.64451,2454.3662 C2013.1185,2454.85446 2013.1185,2455.64319 2012.64451,2456.13146 L2003.43221,2465.6338 Z'
                  id='color_checkbox'
                />
              </g>
            </g>
          ) : (
            <g
              data-testid='checked-inactive'
              stroke='none'
              strokeWidth='1'
              fill='none'
              fillRule='evenodd'
            >
              <g transform='translate(-2079.000000, -2448.000000)' fill={color}>
                <path
                  d='M2100,2470 L2082,2470 C2081.45,2470 2081,2469.55 2081,2469 L2081,2451 C2081,2450.45 2081.45,2450 2082,2450 L2100,2450 C2100.55,2450 2101,2450.45 2101,2451 L2101,2469 C2101,2469.55 2100.55,2470 2100,2470 Z M2101,2448 L2081,2448 C2079.9,2448 2079,2448.9 2079,2450 L2079,2470 C2079,2471.1 2079.9,2472 2081,2472 L2101,2472 C2102.1,2472 2103,2471.1 2103,2470 L2103,2450 C2103,2448.9 2102.1,2448 2101,2448 Z'
                  id='checkbox_disabled'
                />
              </g>
            </g>
          )}
        </svg>
      )}
    </label>
  )
}

Checkbox.defaultProps = {
  disabled: false,
  checked: false,
  onChange: /* istanbul ignore next */ () => null
}

Checkbox.propTypes = {
  disabled: PropTypes.bool,
  variant: PropTypes.bool,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func
}

export default Checkbox
