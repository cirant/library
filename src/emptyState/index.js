import React from 'react'
import PropTypes from 'prop-types'
import styles from './_emptyState.scss'
import image from './assets/nube.svg'
import Button from '../buttons'

const EmptyState = ({ title, description, button, ...props }) => {
  return (
    <div className={styles.component} {...props}>
      <img src={image} alt="imagen doesn't found" />
      {title && <p>{title}</p>}
      {description && <div className={styles.description}>{description}</div>}
      <div className={styles.buttonSection}>
        {button && (
          <Button color='secondary' variant='outline' onClick={button.action}>
            {' '}
            {button.text}{' '}
          </Button>
        )}
      </div>
    </div>
  )
}

EmptyState.defaultProps = {}

EmptyState.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  button: PropTypes.shape({
    text: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired
  })
}

export default EmptyState
