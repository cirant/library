import React from 'react'
import styles from './_cardheader.scss'

const CardHeader = ({ imgUrl, option, imgSrcSet, children, ...props }) => {

  let cardHeaderStyle = [styles.cardHeaderContainer]

  return (
    <div {...props} className={cardHeaderStyle.concat(props.className).join(' ')}>
      <img src={imgUrl} className={styles.imgCard} role="presentation" />
    </div>
  )
}


export default CardHeader
