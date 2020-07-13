import React from 'react';
import styles from './_columncard.scss';

const ColumnCard = ({ border, animated, children, ...props }) => {

  let cardStyles = [styles.card];
  cardStyles = border ? cardStyles.concat(styles.border) : cardStyles.concat(styles['elevation-1']);

  if (props.onClick && !border) {
    cardStyles = cardStyles.concat(styles.animated);
  }

  if (props.selected) {
    cardStyles = cardStyles.concat(styles.selected);
  }

  return <div {...props} className={cardStyles.concat(props.className).join(' ')}>
    {children}
    <div className={styles.imageContainer}></div>
  </div>
}


export default ColumnCard;
