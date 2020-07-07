import React from 'react'
import styles from './_badgentofication.scss'
import PropTypes from 'prop-types'
import IconListModel from '../icons/models/icon-list.model'

const BadgeNotification = ({ label, prefix, ...props }) => {

  const containerClass = [styles.badgeNotificationContainer]

  return (
    <div {...props} className={containerClass.join(' ')}>
      999
    </div>
  )
}

export default BadgeNotification

BadgeNotification.defaultProps = {
  label: '',
  prefix: 'line-file'
}

BadgeNotification.propTypes = {
  prefix: PropTypes.oneOf(IconListModel.iconList).isRequired,
  label: PropTypes.string.isRequired
}
