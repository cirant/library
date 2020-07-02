import React from 'react'
import styles from './_contentAction.scss'
import Icon from '../icons'
import PropTypes from 'prop-types'
import IconListModel from '../icons/models/icon-list.model'

const ContentAction = ({ label, icon, disabled, onClick, ...props }) => {

  let containerClass = [styles.contentAction]

  if (disabled) {
    containerClass = [containerClass, styles.disabled]
  }

  return (
    <div {...props} data-testid='test-container-content-action' onClick={disabled ? null : onClick} className={containerClass.join(' ')}>
      <div>
        <Icon size="2" name={icon}/>
      </div>
      <div className={styles.label}>{<a>{label}</a>}</div>
    </div>
  )
}

export default ContentAction

ContentAction.defaultProps = {
  label: '',
};

ContentAction.propTypes = {
  icon: PropTypes.oneOf(IconListModel.iconList).isRequired,
  : PropTypes.string.isRequired,
  disabled: PropTypes.bool
};
