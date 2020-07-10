import React from 'react';
import styles from './_label.scss';

const Label = ({ label, disabled }) => <span className={[
  styles.inputLabel,
  disabled === true ? styles.disabled : ''
].join(' ').trim()}> {label} </span>

export default Label;