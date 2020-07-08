import React from 'react'
import PropTypes from 'prop-types'
import BulletElement from './Bullet'


const Bullets = ({ items, typeList }) => {

  const typeOfBullet = typeList ? typeList : ''

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
        items.map(
          (element, index) => {
            return (getTypeOfList(typeOfBullet,element,index))
          })
      }
    </div>
  )
}


Bullets.defaults = {
  typeList: 'order',
  items: []
}

Bullets.propTypes = {
  typeList: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired
}

export default Bullets
