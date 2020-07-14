import React from 'react'
import styles from './_cardbank.scss'

const CardBank = ({ border, animated, cardType, title, children, ...props }) => {

  let cardStyle = [styles.card]
  cardStyle = cardStyle.concat(styles.border)

  let cardHeader = styles.header;

  if (cardType) {
    if (cardType == 'default') {

    }
  } else {
    cardHeader = [cardHeader, styles.default]
  }

  if (props.onClick && !border) {
    cardStyle = cardStyle.concat(styles.animated)
  }

  if (props.selected) {
    cardStyle = cardStyle.concat(styles.selected)
  }

  return (
    <div {...props} className={cardStyle.concat(props.className).join(' ')}>
      <div className={cardHeader.join(' ')}>
        <div className={styles.prefix}>
          <div>
            <p className={styles.title}>{title}</p>
          </div>
          {
            cardType &&
            (
              <div>

              </div>
            )
          }
        </div>
        <div>

        </div>
      </div>
      {children}
    </div>
  )
}

export default CardBank
