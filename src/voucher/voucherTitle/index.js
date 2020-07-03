import React, { createRef, useEffect } from 'react'
import styles from './_vouchertitle.scss'
import Button from '../../buttons'
import VoucherDataResume from '../voucherDataResume'


const VoucherTitle = ({ children, title,items,action,flex, ...props }) => {

  const containerClass = [styles.voucherTitle]

  const refContainer = createRef();


  return (
    <div {...props} className={containerClass.join(' ')}>
      <div className={styles.prefix}>
        <h4>{title}</h4>
      </div>
      <div className={styles.suffix}>
        {
          items.map(row => {
            return (
              <div {...props} className={styles.rowitem}>
                {row.map(rowitem => {
                  return (
                    <div style={rowitem.flex ? {flex:rowitem.flex}: {flex:1}} ref={refContainer} className={styles.item}>
                      <Button onClick={rowitem.action} variant="text" ariant="text" color="primary"
                              prefix={rowitem.icon}>{rowitem.label}</Button>
                    </div>
                  )
                })}
              </div>
            );
          })
        }

      </div>
    </div>
  )
}


export default VoucherTitle
