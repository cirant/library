import React, { createRef } from 'react'
import styles from './_vouchertitle.scss'
import Button from '../../buttons'
import PropTypes from 'prop-types'

const VoucherTitle = ({ title, items, flex, ...props }) => {

  const containerClass = [styles.voucherTitle]

  const refContainer = createRef()

  return (
    <div {...props} className={containerClass.join(' ')}>
      <div  className={styles.prefix}>
        <h4 data-testid='test-title'>{title}</h4>
      </div>
      <div className={styles.suffix}>
        {
          items.map((row,index) => {
            return (
              <div key={`row-${index}`} {...props} className={styles.rowitem}>
                {
                  row.map((rowitem,i) => {
                    return (
                      <div key={`rowitem-${i}`} style={rowitem.flex ? { flex: rowitem.flex } : { flex: 1 }} ref={refContainer}
                           className={styles.item}>
                        <Button onClick={rowitem.action} variant="text" ariant="text" color="primary"
                                prefix={rowitem.icon}>{rowitem.label}</Button>
                      </div>
                    )
                  })
                }
              </div>
            )
          })
        }

      </div>
    </div>
  )
}

export default VoucherTitle

VoucherTitle.defaultProps = {
  items: [],
  title: ''
}

VoucherTitle.prototype = {
  items: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({
    flex: PropTypes.number,
    action: PropTypes.func,
    icon: PropTypes.string,
    label: PropTypes.string,
  }))),
  title: PropTypes.string,
  flex: PropTypes.number
}
