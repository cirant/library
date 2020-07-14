import React from 'react'
import styles from './_vouchercolumndata.scss'
import PropTypes from 'prop-types'
import ArrayUtils from '../../utils/arrayUtils'


const VoucherColumnData = ({ items, ...props }) => {

  const containerClass = [styles.voucherColumnDataContainer]

  const newItems = ArrayUtils.listToMatrix(items, 2)

  return (
    <React.Fragment>
      {
        newItems.map((items, index) => {
          return (
            <div {...props} className={containerClass.join(' ')} key={`items-${index}`}>
              <div className={styles.voucherColumnDataSection}>
                {index == 0 && <div className={styles.borderSectionTop}></div>}
                {
                  items.map((item, i) => {
                    return (
                      <div className={styles.itemColumn} key={`item-${i}`}>
                        <p className="note" style={{fontWeight:500}}>{item.title}</p>
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
  items: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
  }))
}

