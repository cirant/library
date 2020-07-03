import React, { useState } from 'react';
import PropTypes from 'prop-types';
import inputStyles from './_select.scss';
import { Icon } from '../../';

const InputSelect = ({
  label,
  assistText,
  options,
  current,
  onSelected,
  ...props }) => {

  const [optionOpen, setOptionOpen] = useState(false);

  let inputStyle = [inputStyles.input, inputStyles.hasSuffix];
  let validateStyle = [];

  if (props.disabled) {
    validateStyle = validateStyle.concat(inputStyles.disabled)
  }

  const handlerOpen = () => {

    if (optionOpen || props.disabled) return;

    setOptionOpen(true);

    const globalClick = () => {
      setOptionOpen(false);
      setTimeout(() => document.removeEventListener('click', globalClick), 10)
    };

    document.addEventListener('click', globalClick)
  }

  const getRow = (el, key) => {
    try {
      const action = key === 'selected' ? null : () => onSelected(el.value);
      const isDisabled = el.disabled && el.disabled === true ? inputStyles.disabled : '';
      return (<div key={key} className={[inputStyles.optionRow, isDisabled].join(' ').trim()} onClick={action}>
        {
          el.prefix && <div className={inputStyles.prefixContainer}> <Icon size={1} name={el.prefix} /></div>
        }
        {el.text}
      </div>);
    } catch (e) {
      return <div role="empty" className={inputStyles.optionRow}></div>
    }
  };

  return <div role="select" className={[inputStyles.inputContainer, validateStyle].join(' ')}>
    {optionOpen}

    {
      label && <span className={inputStyles.inputLabel}> {label} </span>
    }

    <div className={inputStyle.join(' ')}>
      <div role="dropdown" className={inputStyles.currentElement} onClick={handlerOpen}>
        {
          getRow(options.find(ob => ob.value === current), 'selected')
        }
      </div>

      <div className={inputStyles.suffixContainer}> <Icon size={1} name={optionOpen ? "arrow-up" : "arrow-down"} /> </div>
    </div>
    <div className={inputStyles.bellowContainer}>

      {
        optionOpen && <div className={inputStyles.optionContainer}>
          {options.filter(el => el.disabled !== true).map(getRow)}
        </div>
      }

      <div className={[inputStyles.inputHelper].join(' ')}>
        {assistText}
      </div>

    </div>


  </div>
}

InputSelect.defaultProps = {
  onSelected: /* istanbul ignore next */ () => null,
  current: '',
  disabled: false,
  options: []
};

InputSelect.propTypes = {
  onSelected: PropTypes.func,
  label: PropTypes.string,
  current: PropTypes.string,
  assistText: PropTypes.string,
  disabled: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      prefix: PropTypes.string,
      text: PropTypes.string,
      value: PropTypes.string.isRequired,
      disabled: PropTypes.bool
    })
  ).isRequired
};

export default InputSelect;