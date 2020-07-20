import React from 'react'
import styles from './_notificationbadge.scss'
import PropTypes from 'prop-types'

const NotificationBadge = ({ content, ...props }) => {
  const containerClass = [styles.notificationBadgeContainer]

  return (
    <div {...props} className={containerClass.join(' ')}>
      {content}
    </div>
  )
}

export default NotificationBadge

NotificationBadge.defaultProps = {
  content: 0
}

NotificationBadge.propTypes = {
  content: PropTypes.number
}
