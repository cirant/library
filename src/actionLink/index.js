import React from 'react'
import styles from './_actionLink.scss'
import PropTypes from 'prop-types'
import Icon from '../icons'
import IconListModel from '../icons/models/icon-list.model'

const ActionLink = ({ icon,label,onClick, ...props }) => {

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

ActionLink.defaultProps = {
  icon: 'line-unlock',
  label: '',
}

ActionLink.propTypes = {
  label: PropTypes.string,
  icon:  PropTypes.oneOf(IconListModel.iconList).isRequired,
  onClick: PropTypes.func,
}

export default ActionLink
