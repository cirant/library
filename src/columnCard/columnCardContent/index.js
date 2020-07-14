import React from 'react'
import styles from '../columnCardContent/_columncardcontent.scss'
import PropTypes from 'prop-types'

const ColumnCardContent = ({ title, content, children, ...props }) => {

  const columnCardContentStyle = [styles.columnCardContentContainer]

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
      {children}
    </div>
  )
}

ColumnCardContent.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  children: PropTypes.node,
}

export default ColumnCardContent;
