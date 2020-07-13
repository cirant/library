import React from 'react'
import styles from './_cardaction.scss'
import Button from '../../../buttons'

const ColumnCardContentActions = ({ buttons, children, ...props }) => {

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

export default ColumnCardContentActions
