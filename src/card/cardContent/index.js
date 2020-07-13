import React from 'react';
import PropTypes from 'prop-types';
import styles from './_card.scss';

const Card = ({ border, animated, children, ...props }) => {


  let cardStules = [styles.card];
  cardStules = border ? cardStules.concat(styles.border) : cardStules.concat(styles['elevation-1']);

  if (props.onClick && !border) {
    cardStules = cardStules.concat(styles.animated);
  }

  if (props.selected) {
    cardStules = cardStules.concat(styles.selected);
  }

  return <div {...props} className={cardStules.concat(props.className).join(' ')}>
    {children}
  </div>
}

Card.defaultProps = {
  border: false,
  selected: false,
};

Card.propTypes = {
  onClick: PropTypes.func,
  border: PropTypes.bool,
  selected: PropTypes.bool,
};

export default Card;