import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../icons';
import InputCore from '../core';
import Label from '../_commons/label';
import styles from './_counter.scss';

const InputCounter = ({ onChange, ...props }) => (
  <div>
    <Label label={props.label} disabled={props.disabled} />
    <div className={[
      styles.container,
      props.disabled === true ? styles.disabled : ''
    ].join(' ').trim()}>
      <Icon name="minus" size={4} className={styles.minusIcon} onClick={() => onChange(Number(props.value) - 1)} />
      <InputCore {...props} onChange={({ target: { value } }) => onChange(value)} onlyNumber prefix="" suffix="" />
      <Icon name="plus" size={4} className={styles.plusIcon} onClick={() => onChange(Number(props.value) + 1)} />
    </div>
  </div>
)

InputCounter.defaultProps = {
  label: 'un label',
};

InputCounter.propTypes = {
  label: PropTypes.string,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

export default InputCounter;