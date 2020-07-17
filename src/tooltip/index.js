import React, { createRef, useEffect, useRef, useState } from 'react'
import styles from './_tooltip.scss'
import Tippy from '@tippyjs/react'
import PropTypes from 'prop-types'
import IconListModel from '../icons/models/icon-list.model'

const Tooltip = ({ children, content, placement, interactive, eventListener, ...props }) => {

  const refBoxTooltip = createRef()
  const refContainerTippy = createRef()

  const tooltipDefaultWidth = 256

  const [placements, setPlacements] = useState(placement)
  const [tooltipWidth, setTooltipWidth] = useState(256)

  const previousPosition = placement

  const node = useRef()

  const [visible, setVisible] = useState(false)

  const handleClick = e => {
    if (node.current.contains(e.target)) {
      if (!visible) {
        setVisible(true)
      }
      return
    }
    if (visible) setVisible(false)
  }

  const setResponsivePosition = () => {
    const myWidth = window.screen.width
    if (myWidth < 599) {
      setPlacements('top')
      setTooltipWidth(myWidth * 0.9)
    } else {
      setTooltipWidth(tooltipDefaultWidth)
      setPlacements(previousPosition)
    }
  }

  useEffect(() => {

    window.addEventListener('resize', setResponsivePosition)

    return () => {
      window.removeEventListener('resize', setResponsivePosition)
    }

  }, [window])

  useEffect(() => {

    setResponsivePosition()

    return () => {
    }

  }, [])

  useEffect(() => {
    document.addEventListener('mousedown', handleClick)
    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [visible])

  const setOpacity = (event) => {

    if (eventListener === 'hover') {
      if (event === 'leave') {
        setVisible(false)
        refBoxTooltip.current.style.opacity = 0
      }
      if (event === 'enter') {
        setVisible(true)
        refBoxTooltip.current.style.opacity = 1
      }
    }

  }

  return (
    <div
      {...props}
      data-testid="test-container" visible={visible.toString()} className={styles.containerTooltip} ref={node}
      onClick={() => eventListener === 'mouseClick' ? setOpacity('mouseClick') : false}
      onMouseEnter={(e) => eventListener === 'hover' ? setOpacity('enter', e) : false}
      onMouseLeave={() => eventListener === 'hover' ? setOpacity('leave') : false}>
      <Tippy
        offset={[0, 20]}
        arrow={true}
        appendTo="parent"
        theme={'light'}
        placement={placements} visible={true}
        animation={false}
        interactive={interactive}
        touch={true}
        render={attrs => (
          <div
            data-testid="test-box"
            style={
              {
                opacity: visible ? 1 : 0,
                minWidth: tooltipWidth
              }
            }
            ref={refBoxTooltip}
            className={styles.box}
            tabIndex="-1" {...attrs}>
            <div
              data-testid="test-box-content"
              ref={refContainerTippy}
              style={
                {
                  maxWidth: tooltipWidth
                }
              }
              className={styles.content}>
              {content}
            </div>
            {<div data-testid="test-box-arrow" id="arrow" className={styles.arrow}></div>}
          </div>
        )}>
        <span>{children}</span>
      </Tippy>
    </div>
  )

}

export default Tooltip

Tooltip.defaultProps = {
  content: 'Text for tooltip',
  placement: 'top',
  interactive: false,
  eventListener: 'hover'
}

Tooltip.propTypes = {
  placement: PropTypes.oneOf(IconListModel.placementList),
  eventListener: PropTypes.oneOf(['mouseClick', 'hover']),
  content: PropTypes.node,
  interactive: PropTypes.bool
}
