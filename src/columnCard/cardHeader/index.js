import React from 'react'
import styles from './_cardheader.scss'
import PropTypes from 'prop-types'

const CardHeader = ({ children, ...props }) => {

  let cardHeaderStyle = [styles.cardHeaderContainer]

  return (
    <div {...props} className={cardHeaderStyle.concat(props.className).join(' ')}>
      {children}
    </div>
  )
}


export default CardHeader

CardHeader.propTypes = {
  children: PropTypes.node,
}

