import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from '../../'

import headerItemStyles from './_headerItem.scss'

const HeaderItem = ({ icon, children, bold, ...props }) => {
  return (
    <div
      className={[
        headerItemStyles.headerItem,
        bold ? headerItemStyles.bold : null
      ]
        .join(' ')
        .trim()}
      {...props}
    >
      {icon && <Icon name={icon} />}
      {children}
    </div>
  )
}

HeaderItem.defaultProps = {}

HeaderItem.propTypes = {
  icon: PropTypes.string,
  bold: PropTypes.bool
}

export default HeaderItem
