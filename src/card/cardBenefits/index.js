import React from 'react'
import PropTypes from 'prop-types'
import cardStyles from './_cardBenefits.scss'

const CardBenefits = ({
  topText,
  title,
  description,
  image,
  style,
  logo,
  className,
  ...props
}) => {
  return (
    <figure
      role='card'
      {...props}
      className={[cardStyles.figure, className].join(' ').trim()}
      style={{
        ...style,
        backgroundImage: `url(${image})`
      }}
    >
      <div className={cardStyles.topContent}>
        {logo && (
          <div role='logo' className={cardStyles.logoContainer}>
            {logo}
          </div>
        )}
      </div>
      <figcaption className={cardStyles.content}>
        <p>{topText}</p>
        <h1>{title}</h1>
        <p>{description}</p>
      </figcaption>
    </figure>
  )
}

CardBenefits.propTypes = {
  topText: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  logo: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
}

export default CardBenefits
