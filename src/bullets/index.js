import React from 'react'
import PropTypes from 'prop-types'
import BulletElement from './Bullet'


const Bullets = ({ items, typeList }) => {

  const typeOfBullet = typeList ? typeList : ''
  const itemsBullets = items ? items : []

  const getTypeOfList = (typeOfBullet,element,index) => {
    if(typeOfBullet === 'order'){
      return <BulletElement key={index} count={index} typeList={typeOfBullet} {...element} />;
    }else if(typeOfBullet === 'unorder' || 'icons'){
      return <BulletElement key={index} {...element} typeList={typeOfBullet}/>
    }
  }

  return (
    <div>
      {
        itemsBullets.map(
          (element, index) => {
            return (getTypeOfList(typeOfBullet,element,index))
          })
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
