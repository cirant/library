import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Icon from '../icons';
import styles from './_kebabMenu.scss';
import IconListModel from '../icons/models/icon-list.model'

const KebabMenu = ({ options }) => {
  const [open, setOptionOpen] = useState(false);

  const handlerOpen = () => {
    if (open) return;

    setOptionOpen(true);

    const globalClick = () => {
      setOptionOpen(false);
      setTimeout(() => document.removeEventListener('click', globalClick), 10)
    };

    document.addEventListener('click', globalClick)

  }

  return <div className={styles.menuContainer} onClick={handlerOpen} role="menu">
    <Icon name="menu-kebab" size="3" />
    <ul className={styles.dropdownMenu}>
      {
        open && options.map((opt, i) => <li key={`key-${i}`} className={styles.option} onClick={opt.action}>
          {
            opt.icon && <Icon name={opt.icon} size={2} />
          }
          {opt.text}
        </li>)
      }
    </ul>
  </div>
}

KebabMenu.defaultProps = {
  options: []
};

KebabMenu.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.oneOf(IconListModel.iconList),
    text: PropTypes.string,
    action: PropTypes.func
  })),
};

export default KebabMenu;
