import React from 'react'
import styles from './_voucherdataresume.scss'
import PropTypes from 'prop-types'
import {currencyFormat,numberFormat} from '../../utils/numberUtils';

const VoucherDataResume = ({ children,label,content,number,currency, ...props }) => {

  if(content !== undefined || number !== undefined){
    if(currency){
      content = currencyFormat(number);
    }else if(number){
      content = numberFormat(number);
    }
  }

  return (
    <div {...props} className={styles.dataResumeContainer}>
      <p>{label}</p>
     <h2>{content}</h2>
    </div>
  )
}

VoucherDataResume.defaultProps = {
  stampPosition: 'bottom',
};

VoucherDataResume.prototype = {
  stampPosition: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default VoucherDataResume
