import React from 'react'
import styles from './_voucherresumecontainer.scss'
import VoucherDataResume from '../voucherDataResume'
const VoucherResumeContainer = ({ children, items, ...props }) => {


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
