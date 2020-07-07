import React from 'react'
import styles from './_voucherfooter.scss'
import { ArrayUtils } from '../../utils/'
import Bullets from '../../bullets'
import PropTypes from 'prop-types'


const VoucherFooter = ({ children, items, breakColumn, ...props }) => {

  const containerClass = [styles.voucherColumnDataContainer]
  let newItems
  if (breakColumn) {
    newItems = ArrayUtils.listToMatrix(items.bullets, breakColumn)
  }

  return (
    <React.Fragment>
      <div {...props} className={containerClass.join(' ')}>
        <h4>{items.title}</h4>
        <div className={styles.voucherFooterContentContainer}>
          {
            breakColumn && (
              <React.Fragment>
                {
                  newItems.map((newItem, index) => (
                    <div className={styles.voucherFooterSection} key={`newitem-${index}`}>
                      <Bullets typeList={items.typeList} items={newItem} />
                    </div>
                  ))
                }
              </React.Fragment>
            )
          }
          {
            breakColumn == null && (
              <div className={styles.voucherFooterSection}>

                <Bullets typeList={items.typeList} items={items.bullets} />

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
  title: 'Default text',
  typeList: 'unorder',
}

VoucherFooter.prototype = {
  breakColumn: PropTypes.number,
  title: PropTypes.number,
  typeList: PropTypes.string,
  bullets: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    prefixType: PropTypes.string,
    contentType: PropTypes.string,
  })),
}

