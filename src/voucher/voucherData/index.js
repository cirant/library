import React from 'react'
import styles from './_voucherdata.scss'
import PropTypes from 'prop-types'

const VoucherData = ({ items, ...props }) => {
  return (
    <div {...props} className={styles.voucherDataContainer}>
      {items.map((section, index) => {
        return (
          <div
            role='voucherSection'
            className={styles.voucherDataSection}
            key={`section-${index}`}
          >
            <div className={styles.titleSection}>
              <h5>{section.title}</h5>
            </div>
            <div className={styles.contentSection}>
              {section.items.map((sectionContent, i) => {
                return (
                  <div
                    role='voucherSectionItem'
                    className={styles.itemSection}
                    key={`sectioncontent-${i}`}
                  >
                    <div className={styles.itemPrefix}>
                      <p style={{ flex: 1 }}>{sectionContent.label}</p>
                    </div>
                    <div className={styles.itemSuffix}>
                      <p>{sectionContent.content}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default VoucherData

VoucherData.defaultProps = {
  items: []
}

VoucherData.prototype = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      content: PropTypes.string,
      flex: PropTypes.number,
      number: PropTypes.number,
      currency: PropTypes.bool
    })
  )
}
