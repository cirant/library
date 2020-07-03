import React, { createRef, useEffect } from 'react'
import styles from './_voucherdataresume.scss'

import PropTypes from 'prop-types'
import {currencyFormat,numberFormat} from '../../utils/numberUtils';

const VoucherDataResume = ({ children,label,content,number,currency,flex, ...props }) => {

  const refContainer = createRef();

  useEffect(() => {
    if(flex){
      refContainer.current.style.flex= flex;
    }
  },[]);

  if(content !== undefined || number !== undefined){
    if(currency){
      content = currencyFormat(number);
    }else if(number){
      content = numberFormat(number);
    }
  }

  return (
    <div {...props} ref={refContainer} className={styles.dataResumeContainer}>
      <p className="note">{label}</p>
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
