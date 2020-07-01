import React from 'react'
import PropTypes from 'prop-types'
import BulletElement from './Bullet'

const Bullets = ({ items, typeList }) => {

  const typeOfBullet = typeList ? typeList : ''
  const itemsBullets = items ? items : [];

  return (
    <div>
      {
        (typeOfBullet === 'order') ? itemsBullets.map((element, index) => <BulletElement key={index} count={index} typeList={typeOfBullet} {...element} />) :
          (typeOfBullet === 'unorder') ? itemsBullets.map((element, index) => <BulletElement  key={index} {...element} typeList={typeOfBullet}/>) :
            (typeOfBullet === 'icons') ? itemsBullets.map((element, index) => <BulletElement key={index} {...element} typeList={typeOfBullet}/>) : ''
      }
    </div>
  )
}


Bullets.defaults = {
  typeList: 'order',
  items: [{}]
}

Bullets.propTypes = {
  /**
   * type of bullet list
   */
  typeList: PropTypes.string.isRequired,
  /**
   *  other contetn
   */
  items: PropTypes.array.isRequired
}

export default Bullets
