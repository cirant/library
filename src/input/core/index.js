import React from 'react';
import PropTypes from 'prop-types';
import inputStyles from './_core.scss';

const InputCore = ({ prefix, suffix, variant, ...props }) => {

  let inputStyle = [inputStyles.input];

  if (prefix) {
    inputStyle = inputStyle.concat(inputStyles.hasPrefix);
  }

  if (suffix) {
    inputStyle = inputStyle.concat(inputStyles.hasSuffix);
  }

  return <div className={inputStyle.join(' ')}>
    {
      prefix && <div className={inputStyles.prefixContainer}>{prefix}</div>
    }

    {
      variant && variant === 'textarea' ?
        <textarea {...props} ></textarea> :
        <input {...props} />
    }

    {
      suffix && <div className={inputStyles.suffixContainer}>{suffix}</div>
    }
  </div>
}

InputCore.propTypes = {
  maxLength: PropTypes.string,
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

export default InputCore;