import React from 'react'
import PropTypes from 'prop-types'
import styles from './_publicFooter.scss'

const PublicFooter = ({ children, logo, ...props }) => {
  return (
    <React.Fragment>
      <div
        className={[styles.publicFooter, styles.footerDesktop]
          .concat(props.className)
          .join(' ')}
      >
        {children}
      </div>
    </React.Fragment>
  )
}

PublicFooter.defaultProps = {}

PublicFooter.propTypes = {
  logo: PropTypes.element
}

export default PublicFooter
