import React from 'react';
import PropTypes from 'prop-types';
import Card from '../';
import Switch from '../../switch';
import IconCard from '../../icons/iconCards';
import styles from './_cardSwitch.scss';

const CardSwitch = ({
  title,
  footerTitle,
  footerText,
  status,
  cardname,
  onClick,
  className,
  ...props }) => {
  return <Card className={[styles.cardSwitch, className].join(' ').trim()} {...props}>
    <div className={styles.title}>
      {cardname && <IconCard role="logocard" variant={cardname} />} {title}
    </div>
    <div className={styles.footerContainer}>
      <div className={styles.cardBody}>
        {footerTitle && <strong>{footerTitle}</strong>}
        {footerText}
      </div>
      <div className={styles.switchSide}>
        <Switch role="switch" status={status} onClick={onClick} />
      </div>
    </div>
  </Card>
}

CardSwitch.defaultProps = {
  status: false
};

CardSwitch.propTypes = {
  title: PropTypes.string,
  footerTitle: PropTypes.string,
  footerText: PropTypes.string,
  status: PropTypes.bool,
  cardname: PropTypes.string,
  onClick: PropTypes.func
};

export default CardSwitch;