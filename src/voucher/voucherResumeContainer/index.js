import React from 'react'
import styles from './_voucherresumecontainer.scss'
import VoucherDataResume from '../voucherDataResume'
import PropTypes from 'prop-types'

const VoucherResumeContainer = ({  items, ...props }) => {

  return (
    <React.Fragment>
      {
        items.map(row => {
          return (
            <div {...props} className={styles.voucherResumeContainer}>
              {row.map(column => {
                return (
                  <VoucherDataResume
                    {...column}
                    />
                )
            })}
            </div>
          );
        })
      }
    </React.Fragment>


  )
}

export default VoucherResumeContainer

VoucherResumeContainer.defaultProps = {
  items: [],
}

VoucherResumeContainer.prototype = {
  items: PropTypes.array,
}

