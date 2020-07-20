import React from 'react'
import PropTypes from 'prop-types'
import styles from './_taglink.scss'

const TagLink = ({ label,onClick, ...props }) => {

  return (
    <div data-testid='test-taglink' className={[styles.tagLink, props.className].join(' ')} onClick={onClick}>
      <p>{label}</p>
    </div>
  )
}

TagLink.defaultProps = {
  onClick: /* istanbul ignore next */ () => null,
  label: '',
}

TagLink.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string,
}

export default TagLink
