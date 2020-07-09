import React from 'react'
import styles from '../cardContent/_cardcontent.scss'

const CardContent = ({ title, animated, children, ...props }) => {

  let cardContentStyle = [styles.cardContentContainer]

  return (
    <div {...props} className={cardContentStyle.concat(props.className).join(' ')}>
      {title && <div className={styles.cardHeaderTitle}><h6>{title}</h6></div>}
      {children}
    </div>
  )
}


export default CardContent
