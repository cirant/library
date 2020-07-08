import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../icons';
import InputCore from '../core';
import Label from '../_commons/label';
import styles from './_security.scss';

const InputSecurity = ({
  security,
  onSecurityClick,
  strength,
  ...props
}) => {

  const suffix = security === true ? 'eye-open' : 'eye-close';
  const inputType = security === false ? 'text' : 'password';
  const levels = {
    none: 'Ninguna',
    low: 'Bajo',
    middle: 'Medio',
    high: 'Alto'
  }
  let progressBar = [
    styles.progressBar,
    styles[strength]
  ].join(' ').trim();

  return <div>
    {props.label && <Label label={props.label} />}
    <InputCore {...props}
      type={inputType}
      prefix={<Icon name="line-lock" />}
      suffix={<Icon onClick={onSecurityClick} name={suffix} role="show" className={styles.pointer} />} />
    <div role="progressBar" className={progressBar}> </div>
    <div className={styles.inputHelper}>{`Nivel de seguridad: ${levels[strength] || ''}.`}</div>
  </div>
}

InputSecurity.defaultProps = {
  security: true,
  strength: 'none'
};

InputSecurity.propTypes = {
  label: PropTypes.string,
  strength: PropTypes.oneOf([
    'none',
    'low',
    'middle',
    'high'
  ]),
  security: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSecurityClick: PropTypes.func.isRequired,
};

export default InputSecurity;