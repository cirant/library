import React from 'react'
import styles from './_bullet.scss'
import Icon from '../../icons'
import PropTypes from 'prop-types'

const BulletElement = ({ count, text, typeList, prefixType, contentType, icon, type, variant, active, number, index, ...props }) => {

  let numberList = count + 1

  let styleContainer = [styles.bulletElement]
  let stylePrefixContainer = [styles.prefixContainer]
  let styleBoxCircle = [styles.boxCircle]
  let styleTextContainer = [styles.textContainer]

  const setStyles = (typeParam, typeListParam, prefixParam, contentParam) => {
    const styleTypeContainer = [styles[`${typeParam}`]]
    if (type !== undefined) {
      styleContainer = styleContainer.concat(styleTypeContainer)
      if (typeList !== undefined) {
        styleBoxCircle = styleBoxCircle.concat(styleTypeContainer)
      }
    } else if (prefixType !== undefined || contentType !== undefined) {
      const stylePrefix = [styles[`${prefixParam}`]]
      const styleContent = [styles[`${contentParam}`]]
      styleBoxCircle = [styles.boxCircle, styles[`${prefixParam}`]]
      if (prefixType !== undefined) {
        if (typeListParam === 'unorder') {
        } else {
          stylePrefixContainer = stylePrefixContainer.concat(stylePrefix)
        }
      }
      if (contentType !== undefined) {
        styleTextContainer = styleTextContainer.concat(styleContent)
      }
    }
  }

  setStyles(type, typeList, prefixType, contentType)

  const defaultPrefix = (
    (typeList === 'order') ?
      <div className={stylePrefixContainer.join(' ')}>{numberList}.</div> : (typeList === 'unorder') ?
      <div className={stylePrefixContainer.join(' ')}>
        <div className={styleBoxCircle.join(' ')}></div>
      </div> : (typeList === 'icons') ?
        <div className={stylePrefixContainer.join(' ')}><Icon size="1" onClick={() => console.log('test')} name={icon}/>
        </div> : ''
  )

  return (
    <React.Fragment>
      <div data-testid={`test-bullet-${typeList}`} className={styleContainer.join(' ')}>
        {defaultPrefix}
        <p className={styleTextContainer.join(' ')}>{text}</p>
      </div>
    </React.Fragment>
  )
}

export default BulletElement


BulletElement.propTypes = {
  text: PropTypes.string.isRequired,
  prefixType: function(props) {
    if ((props['type'] !== undefined) && (props['prefixType'] !== undefined)) {
      return new Error('If prefixType prop it is defined not define type')
    }
  },
  type: function(props) {
    if ((props['prefixType'] !== undefined) && (props['type'] !== undefined)) {
      return new Error('If prefixType2 prop it is defined not define type')
    }
    if ((props['contentType'] !== undefined) && (props['type'] !== undefined)) {
      return new Error('If contentType prop it is defined not define type')
    }
  }
}
