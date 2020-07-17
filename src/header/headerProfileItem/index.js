import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from '../../'
import headerStyle from './_headerProfileItem.scss'

export const HeaderProfileItem = ({ name, date, ...props }) => {
  const options = { day: 'numeric', year: 'numeric', month: 'short' }
  const circlerContent = name
    .split(' ')
    .reduce((acc, text) => acc.concat(text[0]), [])
    .join('')
    .toUpperCase()
  return (
    <div className={`${headerStyle.profileItemContainer}`} {...props}>
      <div>
        <div className={headerStyle.circleAvatar}>{circlerContent}</div>
      </div>
      <div className={headerStyle.profileBox}>
        <span className={headerStyle.profileBoxUsername}>{name}</span>
        <p className={headerStyle.date}>
          <small>
            Último acceso {date.toLocaleDateString('es-ES', options)} -{' '}
            {`${date.getHours()}:${date.getMinutes()}`} hrs{' '}
          </small>
        </p>
      </div>
      <Icon name='arrow-right' className='px-1' />
    </div>
  )
}

HeaderProfileItem.defaultProps = {
  date: new Date()
}

HeaderProfileItem.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date)
}

export default HeaderProfileItem
