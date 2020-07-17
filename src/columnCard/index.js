import React from 'react'
import styles from './_columncard.scss'
import PropTypes from 'prop-types'
import Card from '../card'

const ColumnCard = ({ children, className, ...props }) => {
  return (
    <Card
      className={[styles.columnCard, className].join(' ').trim()}
      {...props}
    >
      {children}
    </Card>
  )
}

ColumnCard.propTypes = {
  border: PropTypes.bool,
  children: PropTypes.node,
  animated: PropTypes.bool
}

export default ColumnCard
