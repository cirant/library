import React from 'react'
import PropTypes from 'prop-types'
import styles from './_taglink.scss'

const TagLink = ({ label,onClick, ...props }) => {

  return (
    <div className={styles.tagLink} onClick={onClick}>
      <p>{label}</p>
    </div>
  )
}


export default TagLink
