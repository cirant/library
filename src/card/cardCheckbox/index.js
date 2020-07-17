import React from 'react'
import PropTypes from 'prop-types'
import Card from '../'
import Checkbox from '../../Checkbox'
import IconCard from '../../icons/iconCards'
import styles from './_cardCheckbox.scss'

const CardCheckbox = ({
  title,
  footerTitle,
  footerText,
  checked,
  cardname,
  onChange,
  className,
  ...props
}) => {
  return (
    <Card
      className={[styles.cardSwitch, className].join(' ').trim()}
      {...props}
    >
      <Checkbox role='checkbox' checked={checked} onChange={onChange} />
      <div className={styles.container}>
        <div className={styles.title}>
          {cardname && <IconCard role='logocard' variant={cardname} />} {title}
        </div>
        <div className={styles.cardBody}>
          {footerTitle && <strong>{footerTitle}</strong>}
          {footerText}
        </div>
      </div>
    </Card>
  )
}

CardCheckbox.defaultProps = {
  checked: false
}

CardCheckbox.propTypes = {
  title: PropTypes.string,
  footerTitle: PropTypes.string,
  footerText: PropTypes.string,
  checked: PropTypes.bool,
  cardname: PropTypes.string,
  onClick: PropTypes.func
}

export default CardCheckbox
