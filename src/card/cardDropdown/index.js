import React from 'react';
import Card from '../';
import Icon from '../../icons'
import styles from './_cardDropdown.scss'

const CardDropdown = ({
  opened,
  onClick,
  children,
  className,
  title,
  dark,
  description,
  ...props }) => {

  return (
    <Card className={[
      styles.card,
      className,
    ].join(' ').trim()} {...props}>
      <div role="dropdown" className={[
        styles.dropdown,
        dark === true ? styles.dark : ''
      ].join(' ').trim()}>
        <div className={styles.textContainer}>
          <p>{title}</p>
          <div className={styles.note}>{description}</div>
        </div>
        <Icon role="action" size={3} name={opened ? "arrow-up" : "arrow-down"} onClick={props.disabled !== true ? onClick : null} className={styles.action} />
      </div>
      {
        opened && (
          <div className={styles.cardContent}>
            {children}
          </div>
        )
      }
    </Card>
  )
}

CardDropdown.defaultProps = {
  opened: false,
};

export default CardDropdown;