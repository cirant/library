import React from 'react'
import styles from './_tooltip.scss'

const TooltipExample = ({ children, position, content }) => {

  let styleTooltip
  styleTooltip = [styles[`tooltip-${position}`] || ''];

  return (
    <div className={styles.tooltipContainer}>
      <div className={styleTooltip}>
        <div className={styles.content}>
          <p>{content}</p>
        </div>
      </div>
      {children}
    </div>
  )
}

export default TooltipExample
