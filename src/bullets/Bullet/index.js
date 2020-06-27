import React from 'react';
import PropTypes from 'prop-types';
import styles from './_sidebarElement.scss';
import { Icon } from '../../';

const SidebarElement = ({ text, icon, sublevel, level, notification, active, open, ...props }) => {
  const defaultIcon = (!icon && level === 3) ? <Icon name="arrow-right" size="1" /> : icon;
  let containerClasses = [styles.sidebarElement, styles['level-' + level]];

  if (active === true) {
    containerClasses = containerClasses.concat(styles.active);
  }

  return <React.Fragment>
    <div role="component" data-status={active ? 'active' : ''} className={containerClasses.join(' ')} {...props}>
      <div className={[styles.textContainer].join(' ')}>
        {defaultIcon}
        {text}
      </div>
      {
        (notification === true) && <span role="notification" className={[styles.notification].join(' ')}></span>
      }
    </div>
    {
      open && sublevel.map((child, index) => <SidebarElement key={index} level={level + 1} {...child} />)
    }
  </React.Fragment>
}

SidebarElement.defaultProps = {
  level: 1,
  open: false,
  sublevel: []
}

SidebarElement.propTypes = {
  text: PropTypes.string.isRequired,
  open: PropTypes.bool,
  icon: PropTypes.element,
  sublevel: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    icon: PropTypes.element,
    level: PropTypes.number,
    sublevel: PropTypes.array,
    notification: PropTypes.bool,
    active: PropTypes.bool
  })),
  level: PropTypes.number,
  notification: PropTypes.bool,
  active: PropTypes.bool
};

export default SidebarElement;