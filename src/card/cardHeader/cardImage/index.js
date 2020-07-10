import React from 'react'
import styles from './_cardimage.scss'

const CardImage = ({ imgUrl, alt, children, ...props }) => {

  let cardImage = [styles.imgCard]

  return (
    <img
      {...props}
      src={imgUrl}
      className={cardImage.concat(props.className).join(' ')}
      role="presentation"
      alt={alt}
    />
  )
}

export default CardImage
