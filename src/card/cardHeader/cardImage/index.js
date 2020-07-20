import React from 'react'
import styles from './_cardimage.scss'
import PropTypes from 'prop-types'

const CardImage = ({ imgUrl, alt, ...props }) => {
  const cardImage = [styles.imgCard]

  return (
    <img
      {...props}
      src={imgUrl}
      className={cardImage.concat(props.className).join(' ')}
      role='presentation'
      alt={alt}
    />
  )
}

CardImage.defaultProps = {
  imgUrl: '',
  alt: ''
}

CardImage.propTypes = {
  imgUrl: PropTypes.string,
  alt: PropTypes.string
}

export default CardImage
