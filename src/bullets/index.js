import React from 'react';
import PropTypes from 'prop-types';
import styles from './_bullets.scss';
import BulletElement from './Bullet'

const Bullets = ({ items, typeList }) => {

  const typeOfBullet = typeList ? typeList : '';

  return <div className={[styles.bullets].join(' ')}>
    {
       (typeOfBullet === 'order') ? items.map((element, index) => <BulletElement key={index} count={index} typeList={typeOfBullet} {...element} />) :
       (typeOfBullet === 'unorder')? items.map((element, index) => <BulletElement key={index} {...element} typeList={typeOfBullet}/>):
         (typeOfBullet === 'unorder') ? items.map((element, index) => <BulletElement key={index} {...element} />): ''
    }
  </div>;
}

Bullets.propTypes = {
  items: PropTypes.array.isRequired,
};

export default Bullets;
