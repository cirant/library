import React from 'react'
import PropTypes from 'prop-types'
import styles from './_cardaction.scss'
import Button from '../../buttons'

const CardActions = ({ buttons, children, ...props }) => {

  let cardActionContainer = [styles.cardActionsContainer]

  return (
    <div {...props} className={cardActionContainer.concat(props.className).join(' ')}>
      {
        buttons && buttons.map((button, index) => {
          return (
            <div className={styles.cardActionItem} key={`card-action-item-${index}`}>
              <Button style={{ width: '90%', justifyContent: 'center' }} {...button}> {button.label} </Button>
            </div>
          )
        })
      }
      {children}
    </div>
  )

}

CardActions.defaultProps = {

}

CardActions.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.shape({
    prefix: PropTypes.string,
    suffix: PropTypes.string,
    color: PropTypes.oneOf(['primary', 'secondary']),
    variant: PropTypes.oneOf(['', 'outline', 'text']),
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool
  })),
  children: PropTypes.node,
}

export default CardActions
