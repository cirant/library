import React from 'react'
import styles from './_voucher.scss'
import Card from '../card'
import Stamp from '../stamp'
import PropTypes from 'prop-types'

const Voucher = ({ children, stampdirection, ...props }) => {

  let cardContainer = [styles.cardContainer, styles.card  ]
  let svgContainer = [styles.stamp]

  if(stampdirection == 'top'){
    svgContainer = [svgContainer,styles.top];

  }else if(stampdirection == 'bottom'){
    svgContainer = [svgContainer,styles.bottom];
  }

  const containerClass = [styles.voucherContainer]

  return (
    <div {...props} className={containerClass.join(' ')}>
      <Card border className={cardContainer.join(' ')} >
        <div data-placement={stampdirection} className={svgContainer.join(' ')}>
          <Stamp></Stamp>
        </div>
        {children}
      </Card>
    </div>
  )
}

Voucher.defaultProps = {
  /** Some description here */
  stampdirection: 'bottom',
};

Voucher.prototype = {
  /** Some description here */
  stampdirection: PropTypes.string,
};

export default Voucher
