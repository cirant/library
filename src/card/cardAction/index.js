import React from 'react';
import PropTypes from 'prop-types';
import styles from './_cardaction.scss';
import Button from '../../buttons'

const CardActions= ({ buttons,children, ...props }) => {

  console.log(buttons);

  let cardActionStyle = [styles.cardActionsContainer];

  return <div {...props} className={cardActionStyle.concat(props.className).join(' ')}>
    {
      buttons && buttons.map( (button) => {
        console.log(button);
        return (
        <div className={styles.cardActionItem}>
          <Button style={{width:'90%',justifyContent:'center'}} {...button}> {button.children} </Button>
        </div>
        )
      })
    }
    {children}
  </div>
}

CardActions.defaultProps = {
  border: false,
  selected: false,
};

CardActions.propTypes = {
  onClick: PropTypes.func,
  border: PropTypes.bool,
  selected: PropTypes.bool,
};

export default CardActions;
