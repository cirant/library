import React, { createRef } from 'react'
import styles from './_voucherdata.scss'


const VoucherData = ({ children, items, ...props }) => {

  const containerClass = [styles.voucherDataContainer]

  console.log('hereeee')
  console.log(items.length)

  const refContainer = createRef()

  return (
    <div className={styles.voucherDataContainer}>
      {
        items.map((section, key) => {
          return (
            <div className={styles.voucherDataSection}>
              <div className={styles.titleSection} key={key}>
                <h4>{section.title}</h4>
              </div>
              <div className={styles.contentSection}>
                {
                  section.items.map((sectionContent, key) => {
                    return (
                      <div className={styles.itemSection} key={key}>
                        <div className={styles.itemPrefix}>
                          <p style={{ flex: 1 }}>{sectionContent.label}</p>
                        </div>
                        <div className={styles.itemSuffix}>
                          <p>{sectionContent.content}</p>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          )
        })
      }
    </div>
  )


}


export default VoucherData
