import React from 'react'
import styles from './_vouchercontainer.scss'
import PropTypes from 'prop-types'
import {currencyFormat,numberFormat} from '../../utils/numberUtils';

const VoucherContainer = ({ children, ...props }) => {



  return (
    <div {...props} className={styles.dataResumeContainer}>
      <p>{label}</p>
     <h2>{content}</h2>
    </div>
  )
}

export default VoucherContainer
