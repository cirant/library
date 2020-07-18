import React from 'react'
import styles from './_cardbank.scss'
import Card from '../index'
import IconCard from '../../icons/iconCards'
import Button from '../../buttons'
import PropTypes from 'prop-types'
import CardActions from '../cardAction'

const CardBank = ({ cardType, cardNumber, buttons, title, children, ...props }) => {

  let cardStyle = [styles.card]
  cardStyle = cardStyle.concat(styles.border)

  let cardHeader = styles.header

  if (cardType) {
    if (cardType == 'default') {
      cardHeader = [cardHeader, styles.default]
    }
    if (cardType == 'debit') {
      cardHeader = [cardHeader, styles.debit]
    }
    if (cardType == 'gold') {
      cardHeader = [cardHeader, styles.gold]
    }
    if (cardType == 'international') {
      cardHeader = [cardHeader, styles.international]
    }
  }

  if (props.onClick && !border) {
    cardStyle = cardStyle.concat(styles.animated)
  }

  if (props.selected) {
    cardStyle = cardStyle.concat(styles.selected)
  }

  const getButtons = () => {
    return (
      <React.Fragment>
        {
          buttons.map((item, index) => {
              return <Button
                key={`button-${index}`}
                style={{flex:1,justifyContent:'center'}}
                prefix={item.prefix}
                onClick={item.onClick}
                variant='text'>{item.label}
              </Button>
          })
        }
      </React.Fragment>
    )
  }




  return (
    <Card {...props} className={cardStyle.concat(props.className).join(' ')} {...props}>
      <div className={cardHeader.join(' ')}>
        <div className={styles.prefix}>
          <div>
            <p className={styles.title}>{title}</p>
          </div>
          {
            (cardType != 'default' && cardType) &&
            (
              <div className={styles.titleNumberCard}>
                <p>{cardNumber}</p>
              </div>
            )
          }
        </div>
        {
          (cardType != 'default' && cardType) &&
          (
            <div className={styles.cardIconSuffix}>
              <IconCard role="logocard" variant={'mastercard'}/>
            </div>
          )
        }
        <div>

        </div>
      </div>
      <div className={styles.content}>
        {children}
      </div>
      {
        buttons &&
        (
          <div className={styles.actions}>
            {
              getButtons()
            }
          </div>
        )
      }
    </Card>
  )
}

CardBank.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.shape({
    prefix: PropTypes.string,
    suffix: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool
  })),
  children: PropTypes.node,
}

CardBank.defaultProps = {
  cardType: 'default',
}

export default CardBank


