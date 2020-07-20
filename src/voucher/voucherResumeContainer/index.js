import React from 'react'
import styles from './_voucherresumecontainer.scss'
import VoucherDataResume from '../voucherDataResume'
import PropTypes from 'prop-types'

const VoucherResumeContainer = ({ items, ...props }) => {
  return (
    <React.Fragment>
      {items.map((row, index) => {
        return (
          <div
            {...props}
            className={styles.voucherResumeContainer}
            key={`item-${index}`}
          >
            {row.map((column, i) => {
              return <VoucherDataResume key={`row-${i}`} {...column} />
            })}
          </div>
        )
      })}
    </React.Fragment>
  )
}

export default VoucherResumeContainer

VoucherResumeContainer.defaultProps = {
  items: []
}

VoucherResumeContainer.prototype = {
  items: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string,
        prefixType: PropTypes.string,
        contentType: PropTypes.string
      })
    )
  )
}
