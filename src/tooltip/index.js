import React from 'react';
import styles from './_tooltip.scss';

const Tooltip = ({ children }) => {
  return <div className={styles.tooltipContainer}>
    <div className={styles.tooltip}> log </div>
    {children}
  </div>
}

export default Tooltip;