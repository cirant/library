import React from 'react';
import PropTypes from 'prop-types';
import SidebarElement from './sidebarElement';
import styles from './_sidebar.scss';

const Sidebar = ({ items }) => {
  return <div className={[styles.sidebar].join(' ')}>
    {
      items.map((element, index) => <SidebarElement key={index} {...element} />)
    }
  </div>;
}

Sidebar.propTypes = {
  items: PropTypes.array.isRequired,
};

export default Sidebar;