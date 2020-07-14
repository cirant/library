import React from 'react'
import styles from './_columncard.scss'
import PropTypes from 'prop-types'

const ColumnCard = ({ border, animated, children, ...props }) => {

  let cardStyles = [styles.columnCard]
  cardStyles = border ? cardStyles.concat(styles.border) : cardStyles.concat(styles['elevation-1'])

  if (props.onClick && !border) {
    cardStyles = cardStyles.concat(styles.animated)
  }

  if (props.selected) {
    cardStyles = cardStyles.concat(styles.selected)
  }

  return (
    <div {...props} className={cardStyles.concat(props.className).join(' ')}>
      {children}
    </div>
  )

}

ColumnCard.propTypes = {
  border: PropTypes.bool,
  children: PropTypes.node
}

export default ColumnCard
