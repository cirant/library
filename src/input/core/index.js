import React from 'react';
import PropTypes from 'prop-types';
import inputStyles from './_core.scss';

const InputCore = ({ prefix, suffix, variant, onlyNumber, ...props }) => {

  let inputStyle = [inputStyles.input];

  if (prefix) {
    inputStyle = inputStyle.concat(inputStyles.hasPrefix);
  }

  if (suffix) {
    inputStyle = inputStyle.concat(inputStyles.hasSuffix);
  }

  const onProcess = (_val) => {
    if (onlyNumber === true && isNaN(_val.target.value.trim())) {
      return;
    }
    props.onChange(_val);
  }

  return <div className={inputStyle.join(' ')}>
    {
      prefix && <div className={inputStyles.prefixContainer}>{prefix}</div>
    }

    {
      variant && variant === 'textarea' ?
        <textarea {...props} ></textarea> :
        <input {...props} onChange={onProcess} />
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
  onlyNumber: PropTypes.bool,
  variant: PropTypes.string,
  disabled: PropTypes.bool
};

export default InputCore;