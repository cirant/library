import React from 'react'
import styles from './_actionLink.scss'
import PropTypes from 'prop-types'
import Icon from '../../icons'

const ActionLink = ({ items,icon,label, prefix, ...props }) => {

  return (
    <div {...props} className={styles.actionLink}>
      <div className={styles.iconContainer}>
        <Icon name={icon} className={styles.iconSize} size="6" />
      </div>
      <div className={styles.label}>
      <p className='note'>{label}</p>
      </div>

    </div>
  )
}

export default ActionLink
