import React from 'react';
import PropTypes from 'prop-types';
import styles from './_message.scss';
import { Icon, Button } from '../';

const Message = ({ title, action, type, className, description }) => {
  const messageClasses = [styles.message, styles[type], className];

  const getIcon = () => {
    switch (type) {
      case 'success':
        return 'check';
      case 'info':
        return 'information';
      case 'error':
        return 'cross';
      case 'warning':
        return 'alert';
    }
  }
  return <div className={messageClasses.join(' ').trim()} role="message">
    <Icon name={getIcon()} className={styles.prefix} />
    <div className={styles.textContainer}>
      {
        title && <div> {title} </div>
      }
      {
        description && <p> {description} </p>
      }
    </div>

    <div className={styles.actionContainer}>
      {action}
    </div>
  </div>
}

Message.defaultProps = {
  type: 'info'
};

Message.propTypes = {
  type: PropTypes.oneOf(['error', 'success', 'info', 'warning']).isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  action: PropTypes.element
}


export default Message;