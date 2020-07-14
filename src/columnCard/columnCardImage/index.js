import React from 'react'
import styles from './_columncardimage.scss'
import PropTypes from 'prop-types'

const ColumnCardImage = ({ imgUrl, ...props }) => {

  const containerStyles = [styles.columnCardImageContainer]

  return (
    <div {...props}
         data-testid={'data-test-column-card-image'}
         style={{ backgroundImage: `url(${imgUrl})` }}
         className={containerStyles.concat(props.className).join(' ')}>
    </div>
  )

}

ColumnCardImage.propTypes = {
  imgUrl: PropTypes.string,
}

export default ColumnCardImage
