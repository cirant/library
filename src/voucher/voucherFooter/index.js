import React, { createRef } from 'react'
import styles from './_voucherfooter.scss'
import { listToMatrix } from '../../utils/arrayUtils'
import Bullets from '../../bullets'
import PropTypes from 'prop-types'


const VoucherFooter = ({ children, items, breakColumn, ...props }) => {

  const containerClass = [styles.voucherColumnDataContainer]

  let newItems
  if (breakColumn) {
    newItems = listToMatrix(items.bullets, breakColumn)
  }

  return (
    <React.Fragment>
      <div {...props} className={containerClass.join(' ')}>
        <h4>{items.title}</h4>
        <div className={styles.voucherFooterContentContainer}>
          {
            breakColumn && (
              <React.Fragment>
                <div className={styles.voucherFooterSection}>

                  <Bullets typeList={items.typeList} items={newItems[0]}/>

                </div>
                <div className={styles.voucherFooterSection}>

                  <Bullets typeList={items.typeList} items={newItems[1]}/>

                </div>
              </React.Fragment>
            )
          }
          {
            breakColumn == null && (
              <div className={styles.voucherFooterSection}>

                <Bullets typeList={items.typeList} items={items.bullets}/>

              </div>
            )
          }
        </div>
      </div>
    </React.Fragment>
  )


}

export default VoucherFooter

VoucherFooter.defaultProps = {
  items: [],
}

VoucherFooter.prototype = {
  items: PropTypes.array,
  breakColumn: PropTypes.number,
}

