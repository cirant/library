import React from 'react'
import styles from './_cardheader.scss'
import PropTypes from 'prop-types'

const CardHeader = ({ imgUrl, children, ...props }) => {

  let cardHeaderStyle = [styles.cardHeaderContainer]

  return (
    <div {...props} className={cardHeaderStyle.concat(props.className).join(' ')}>
      {children}
    </div>
  )
}


export default CardHeader

CardHeader.propTypes = {
  imgUrl: PropTypes.string,
  children: PropTypes.node,
}
