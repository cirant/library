import React from 'react';
import PropTypes from 'prop-types';
import inputStyles from './_input.scss';
import InputCore from './core';

const Input = ({
  label,
  assistText,
  error,
  success,
  ...props }) => {

  const { maxLength } = props;

  let validateStyle = [];

  if (error === true) {
    validateStyle = validateStyle.concat(inputStyles.error);
  } else if (success === true) {
    validateStyle = validateStyle.concat(inputStyles.success);
  }

  if (props.disabled) {
    validateStyle = validateStyle.concat(inputStyles.disabled)
  }

  const getHelperText = (element) => {
    switch (element.type) {
      case 'success':
        return <div>{successSvg} <span className={inputStyles.successText}>{element.text}</span></div>
      case 'error':
        return <div>{errorSvg} <span className={inputStyles.errorText}>{element.text}</span></div>
      default:
        return <div> {element.text}</div>
    }
  }

  return <div className={[inputStyles.inputContainer, validateStyle].join(' ')}>
    {
      label && <span className={inputStyles.inputLabel}> {label} </span>
    }

    <InputCore {...props} />

    <div className={[inputStyles.inputHelper].join(' ')}>
      <div>
        {
          Array.isArray(assistText) && assistText.length > 0 ? assistText.map((el, i) => <div key={`${el.text}-${i}`}>
            {getHelperText(el)}
          </div>) : assistText
        }
      </div>
      {
        maxLength && <div>{`${Number(maxLength) - props.value.length}/${maxLength}`}</div>
      }
    </div>

  </div>
}

Input.defaultProps = {
  onChange: /* istanbul ignore next */ () => null,
  type: 'text',
};

Input.propTypes = {
  label: PropTypes.string,
  assistText: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string,
      type: PropTypes.oneOf(['success', 'assist', 'error'])
    })),
    PropTypes.string
  ]),
  maxLength: PropTypes.string,
  type: PropTypes.oneOf(['text', 'password']),
  error: PropTypes.bool,
  success: PropTypes.bool,
  suffix: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  prefix: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  variant: PropTypes.string,
  disabled: PropTypes.bool
};

const errorSvg = <svg width="10px" height="10px" data-testid="errorIcon">
  <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
    <g transform="translate(-1186.000000, -1849.000000)" fill="#1F1E1E">
      <g transform="translate(1183.000000, 1754.000000)">
        <g transform="translate(0.000000, 92.000000)">
          <path d="M12.2,3.80666667 C11.94,3.54666667 11.52,3.54666667 11.26,3.80666667 L8,7.06 L4.74,3.8 C4.48,3.54 4.06,3.54 3.8,3.8 C3.54,4.06 3.54,4.48 3.8,4.74 L7.06,8 L3.8,11.26 C3.54,11.52 3.54,11.94 3.8,12.2 C4.06,12.46 4.48,12.46 4.74,12.2 L8,8.94 L11.26,12.2 C11.52,12.46 11.94,12.46 12.2,12.2 C12.46,11.94 12.46,11.52 12.2,11.26 L8.94,8 L12.2,4.74 C12.4533333,4.48666667 12.4533333,4.06 12.2,3.80666667 Z" id="color-icono"></path>
        </g>
      </g>
    </g>
  </g>
</svg>;

const successSvg = <svg width="12px" height="9px" data-testid="successIcon" >
  <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
    <g transform="translate(-1100.000000, -1816.000000)" fill="#1F1E1E">
      <g transform="translate(1098.000000, 1720.000000)">
        <g transform="translate(0.000000, 92.000000)">
          <path d="M6,10.8 L3.66666667,8.46666667 C3.40666667,8.20666667 2.99333333,8.20666667 2.73333333,8.46666667 C2.47333333,8.72666667 2.47333333,9.14 2.73333333,9.4 L5.52666667,12.1933333 C5.78666667,12.4533333 6.20666667,12.4533333 6.46666667,12.1933333 L13.5333333,5.13333333 C13.7933333,4.87333333 13.7933333,4.46 13.5333333,4.2 C13.2733333,3.94 12.86,3.94 12.6,4.2 L6,10.8 Z" id="color-icono"></path>
        </g>
      </g>
    </g>
  </g>
</svg>;


export default Input;