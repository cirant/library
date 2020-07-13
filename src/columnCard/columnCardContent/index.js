import React from 'react'
import styles from '../columnCardContent/_columncardcontent.scss'

const ColumnCardContent = ({ title, content, children, ...props }) => {

  let columnCardContentStyle = [styles.columnCardContentContainer]

  return (
    <div {...props} className={columnCardContentStyle.concat(props.className).join(' ')}>
      {
        title &&
        (
          <div className={styles.columnCardContentHeaderTitle}><p>{title}</p></div>
        )
      }
      {
        content &&
        (
          <div className={styles.columnCardContent}><p className='note'>{content}</p></div>
        )
      }
      {
        children
      }
    </div>
  )
}


export default ColumnCardContent;
