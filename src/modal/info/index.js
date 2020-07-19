import React from 'react'
import PropTypes from 'prop-types'
import styles from './_info.scss'

const ModalInfo = ({ image, title, description, buttons, ...props }) => {
  return (
    <div className={styles.modalInfo} {...props}>
      {image}
      {title && <h4>{title}</h4>}
      {description && <p>{description}</p>}
      <div className={styles.buttonSection}>
        {buttons &&
          buttons.map((btn, i) => <div key={`button-${i}`}>{btn}</div>)}
      </div>
    </div>
  )
}

ModalInfo.defaultProps = {}

ModalInfo.propTypes = {
  image: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
  buttons: PropTypes.arrayOf(PropTypes.node)
}

export default ModalInfo
