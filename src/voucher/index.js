import React from 'react'
import styles from './_voucher.scss'
import Card from '../card'
import Stamp from '../stamp'
import PropTypes from 'prop-types'
import VoucherDataResume from './voucherDataResume'

const Voucher = ({ children, stampPosition, ...props }) => {

  let cardContainer = [styles.cardContainer, styles.card]
  let svgContainer = [styles.stamp]

  if(stampPosition == 'top'){
    svgContainer = [svgContainer,styles.top];

  }else if(stampPosition == 'bottom'){
    svgContainer = [svgContainer,styles.bottom];
  }

  const getComponent = (key) =>{
    return children.filter( (comp) => {
      return comp.key === key;
    });
  }

  const containerClass = [styles.voucherContainer]

  return (
    <div {...props} className={containerClass.join(' ')}>
      <Card border className={cardContainer.join(' ')} >
        <div id="svg" data-placement={stampPosition} className={svgContainer.join(' ')}>
          <Stamp></Stamp>
        </div>
        {children}
      </Card>
    </div>
  )
}

Voucher.defaultProps = {
  stampPosition: 'bottom',
};

Voucher.prototype = {
  stampPosition: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default Voucher
