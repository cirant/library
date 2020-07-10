import React from 'react'
import styles from './_cardheader.scss'

const CardHeader = ({ imgUrl, option, children, ...props }) => {

  let cardHeaderStyle = [styles.cardHeaderContainer]

  return (
    <div {...props} className={cardHeaderStyle.concat(props.className).join(' ')}>
      {children}
    </div>
  )
}


export default CardHeader
