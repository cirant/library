import React, { createRef, useState } from 'react'
import styles from './_tooltip.scss'
import Tippy from '@tippyjs/react'
import PropTypes from 'prop-types'

const Tooltip2 = ({ children, content, placement, eventListener, ...props }) => {

  const refBoxTooltip = createRef()
  const refContainerTooltip = createRef()
  const refContainerTippy = createRef()

  const [visible, setVisible] = useState(false)

  const setOpacity = (event) => {

    if (eventListener === 'hover') {
      if (event === 'leave') {
        refBoxTooltip.current.style.opacity = 0
      }
      if (event === 'enter') {
        refBoxTooltip.current.style.opacity = 1
      }
    }

    if (eventListener === 'mouseClick') {
      console.log('click')
      if (visible) {
        refBoxTooltip.current.style.opacity = 0
        setVisible(false)
      } else {
        refBoxTooltip.current.style.opacity = 1
        setVisible(true)
      }
    }

  }

  return (
    <div
      {...props}
      className={styles.containerTooltip} ref={refContainerTooltip}
      onClick={() => eventListener === 'mouseClick' ? setOpacity('mouseClick') : false}
      onMouseEnter={(e) => eventListener === 'hover' ? setOpacity('enter', e) : false}
      onMouseLeave={() => eventListener === 'hover' ? setOpacity('leave') : false}>
      <Tippy
        offset={[0, 15]}
        arrow={true} appendTo="parent"
        placement={placement} visible={true}
        animation={false}
        render={attrs => (
          <div
            data-testid="test-box"
            ref={refBoxTooltip}
            className={styles.box}
            tabIndex="-1" {...attrs}>
            <div
              data-testid="test-box-content"
              ref={refContainerTippy}
              className={styles.content}>
              <p> {content}</p>
            </div>
            {<div data-testid="test-box-arrow" id="arrow" className={styles.arrow}> </div>}
            {/*<div id="arrow" data-popper-arrow className={styles.arrowd}></div>*/}
          </div>
        )}>
        <span>{children}</span>
      </Tippy>
    </div>
  )

}

export default Tooltip2

Tooltip2.defaultProps = {
  content: 'Text for tooltip',
  placement: 'top',
  eventListener: 'hover',
}

Tooltip2.propTypes = {
  placement: PropTypes.oneOf(['top','bottom','right','right-end','left']).isRequired,
  eventListener: PropTypes.oneOf(['mouseClick','hover']).isRequired,
  content: PropTypes.string.isRequired
}


