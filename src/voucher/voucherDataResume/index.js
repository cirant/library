import React, { createRef, useEffect } from 'react'
import styles from './_voucherdataresume.scss'
import PropTypes from 'prop-types'
import { NumberUtils } from '../../utils/'

const VoucherDataResume = ({
  label,
  content,
  number,
  currency,
  flex,
  ...props
}) => {
  const refContainer = createRef()

  useEffect(() => {
    /* istanbul ignore else */
    if (flex) {
      refContainer.current.style.flex = flex
    }
  }, [])

  const contentFormant = () => {
    /* istanbul ignore else */
    if (content !== '' || number !== undefined) {
      if (currency) {
        return NumberUtils.currencyFormat(number)
      } else if (number) {
        return NumberUtils.numberFormat(number)
      }
    }
    return content
  }

  return (
    <div {...props} ref={refContainer} className={styles.dataResumeContainer}>
      {label && <p className='note'>{label}</p>}
      <h2>{contentFormant()}</h2>
    </div>
  )
}

VoucherDataResume.defaultProps = {
  label: '',
  content: '',
  flex: 1
}

VoucherDataResume.prototype = {
  label: PropTypes.string,
  content: PropTypes.string,
  flex: PropTypes.number,
  number: PropTypes.number,
  currency: PropTypes.bool
}

export default VoucherDataResume
