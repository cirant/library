import React from 'react'
import styles from './_actionLinkGrid.scss'
import PropTypes from 'prop-types'
import Icon from '../icons'
import IconListModel from '../icons/models/icon-list.model'

const ActionLinkGrid = ({ items, ...props }) => {
  const containerClass = [styles.titleContainer]

  return (
    <div {...props} className={containerClass.join(' ')}>
      {prefix && <Icon className={styles.suffix} name={prefix} size='3' />}{' '}
      <div data-testid='title-section-label'>{label}</div>
    </div>
  )
}

export default ActionLinkGrid
