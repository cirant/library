import React from 'react'
import styles from './_columncardaction.scss'
import Button from '../../../buttons'
import PropTypes from 'prop-types'

const ColumnCardContentActions = ({ buttons, children, ...props }) => {

  const cardActionContainer = [styles.columnCardActionsContainer]

  return (
    <div {...props} className={cardActionContainer.concat(props.className).join(' ')}>
      {
        buttons && buttons.map((button, index) => {
          return (
            <div  className={styles.columnCardActionItem} key={`card-action-column-item-${index}`}>
              <Button className={styles.buttonAction} {...button}> {button.label} </Button>
            </div>
          )
        })
      }
      {children}
    </div>
  )

}

ColumnCardContentActions.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.shape({
    prefix: PropTypes.string,
    suffix: PropTypes.string,
    color: PropTypes.oneOf(['primary', 'secondary']),
    variant: PropTypes.oneOf(['', 'outline', 'text']),
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool
  })),
  children: PropTypes.node
}


export default ColumnCardContentActions
