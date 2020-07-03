import React, { createRef } from 'react'
import styles from './_voucherdata.scss'


const VoucherData = ({ children, items, ...props }) => {

  const containerClass = [styles.voucherDataContainer]

  const refContainer = createRef()

  return (
    <div className={containerClass.join(' ')}>
      <div className={styles.voucherDataSection}>
        <div className={styles.titleSection}>
          <h4>Label titulo de sección</h4>
        </div>
        <div className={styles.contentSection}>
          <div className={styles.itemSection}>
            <div className={styles.itemPrefix}>
              <p style={{flex:1}}>Deudas:</p>
            </div>
            <div className={styles.itemSuffix}>
              <p >300.000</p>
            </div>
          </div>
          <div className={styles.itemSection}>
            <div className={styles.itemPrefix}>
              <p style={{flex:1}}>Label Titulo:</p>
            </div>
            <div className={styles.itemSuffix}>
              <p >Label contenido</p>
            </div>
          </div>
          <div className={styles.itemSection}>
            <div className={styles.itemPrefix}>
              <p style={{flex:1}}>Label Titulo:</p>
            </div>
            <div className={styles.itemSuffix}>
              <p >Label contenido</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.voucherDataSection}>
        <div className={styles.titleSection}>
          <h4>Label titulo de sección</h4>
        </div>
        <div className={styles.contentSection}>
          <div className={styles.itemSection}>
            <div className={styles.itemPrefix}>
              <p style={{flex:1}}>Deudas:</p>
            </div>
            <div className={styles.itemSuffix}>
              <p >300.000</p>
            </div>
          </div>
          <div className={styles.itemSection}>
            <div className={styles.itemPrefix}>
              <p style={{flex:1}}>Label Titulo:</p>
            </div>
            <div className={styles.itemSuffix}>
              <p >Label contenido</p>
            </div>
          </div>
          <div className={styles.itemSection}>
            <div className={styles.itemPrefix}>
              <p style={{flex:1}}>Label Titulo:</p>
            </div>
            <div className={styles.itemSuffix}>
              <p >Label contenido</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )

  {
    /* return (
       items.map(row => {
         return (
           <div {...props} className={styles.rowitem}>
             {row.map(rowitem => {
               return (
                 <div style={rowitem.flex ? { flex: rowitem.flex } : { flex: 1 }} ref={refContainer}
                      className={styles.item}>
                   <Button onClick={rowitem.action} variant="text" ariant="text" color="primary"
                           prefix={rowitem.icon}>{rowitem.label}</Button>
                 </div>
               )
             })}
           </div>
         )
       })

     )
   */
  }

}


export default VoucherData
