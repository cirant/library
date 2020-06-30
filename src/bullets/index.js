import React from 'react'
import PropTypes from 'prop-types'
import styles from './_bullets.scss'
import BulletElement from './Bullet'

const Bullets = ({ items, typeList }) => {

  const typeOfBullet = typeList ? typeList : ''
  const itemsBullets = items ? items : [];

  return (
    <div className={[styles.bullets].join(' ')}>
      {
        (typeOfBullet === 'order') ? itemsBullets.map((element, index) => <BulletElement key={index} count={index} typeList={typeOfBullet} {...element} />) :
          (typeOfBullet === 'unorder') ? itemsBullets.map((element, index) => <BulletElement  key={index} {...element} typeList={typeOfBullet}/>) :
            (typeOfBullet === 'icons') ? itemsBullets.map((element, index) => <BulletElement key={index} {...element} typeList={typeOfBullet}/>) : ''
      }
    </div>
  )
}



Bullets.propTypes = {
  typeList: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired
}

export default Bullets
