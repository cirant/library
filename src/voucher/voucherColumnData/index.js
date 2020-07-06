import React from 'react'
import styles from './_vouchercolumndata.scss'
import { listToMatrix } from '../../utils/arrayUtils'
import PropTypes from 'prop-types'


const VoucherColumnData = ({ items, ...props }) => {

  const containerClass = [styles.voucherColumnDataContainer]

  const newItems = listToMatrix(items, 2)

  return (
    <React.Fragment>
      {
        newItems.map((items, index) => {
          return (
            <div className={containerClass.join(' ')}>
              <div className={styles.voucherColumnDataSection}>
                {index == 0 && <div className={styles.borderSectionTop}></div>}
                {
                  items.map(item => {
                    return (
                      <div className={styles.itemColumn}>
                        <p className="note">{item.title}</p>
                        <p className={styles.itemColumnContent}>{item.content}</p>
                      </div>
                    )
                  })
                }
                <div className={styles.borderSectionBottom}></div>
              </div>
            </div>
          )

        })
      }
    </React.Fragment>
  )


}


export default VoucherColumnData

VoucherColumnData.defaultProps = {
  items: []
}

VoucherColumnData.prototype = {
  items: PropTypes.array
}

