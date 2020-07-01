import React from 'react'
import styles from './_bullet.scss'
import Icon from '../../icons'
import PropTypes from 'prop-types'

const BulletElement = ({ count,disabled, text, typeList, prefixType, contentType, icon, type, index, ...props }) => {

  const numberList = count + 1

  let styleContainer = [styles.bulletElement]
  let stylePrefixContainer = [styles.prefixContainer]
  let styleBoxCircle = [styles.boxCircle]
  let styleTextContainer = [styles.textContainer]

  const setStyles = (typeParam, typeListParam, prefixParam, contentParam) => {
    if(disabled !== undefined && disabled === true){
      styleContainer = styleContainer.concat(styles.disabled);
      return;
    }
    const styleTypeContainer = [styles[`${typeParam}`]]
    if (type !== undefined && type !== '') {
      styleContainer = styleContainer.concat(styleTypeContainer)
      if (typeList !== undefined) {
        styleBoxCircle = styleBoxCircle.concat(styleTypeContainer)
        return;
      }
    } else if (prefixType !== undefined || contentType !== undefined) {
      const stylePrefix = [styles[`${prefixParam}`]]
      const styleContent = [styles[`${contentParam}`]]
      styleBoxCircle = [styles.boxCircle, styles[`${prefixParam}`]]
      if (prefixType !== undefined) {
        if (typeListParam !== 'unorder') {
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
    (typeList === 'order') ? <div data-testid="test-prefix-bullet-order" className={stylePrefixContainer.join(' ')}>{numberList}.</div> : (typeList === 'unorder') ?
      <div data-testid="test-prefix-bullet-unorder" className={stylePrefixContainer.join(' ')}><div data-testid="test-prefix-bullet" className={styleBoxCircle.join(' ')}> </div>
      </div> : (typeList === 'icons') ? <div data-testid="test-prefix-bullet-icons" className={stylePrefixContainer.join(' ')}><Icon size="1" name={icon}/>
        </div> : ''
  )

  return (
    <div data-testid={`test-bullet-${typeList}`} className={styleContainer.join(' ')}>
        {defaultPrefix}
        <p data-testid='test-bullet-content' className={styleTextContainer.join(' ')}>{text}</p>
    </div>
  )
}

export default BulletElement

BulletElement.defaultProps = {
  icon: 'check'
}

BulletElement.propTypes = {
  disable: PropTypes.bool,
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
