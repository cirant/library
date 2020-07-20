import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Icon, Card } from '../../'
import headerStyle from './_headerProfileItem.scss'

export const HeaderProfileItem = ({ name, date, menu, ...props }) => {
  const [open, setOpen] = useState(false)
  const options = { day: 'numeric', year: 'numeric', month: 'short' }
  const circlerContent = name
    .split(' ')
    .reduce((acc, text) => acc.concat(text[0]), [])
    .join('')
    .toUpperCase()

  const handlerOpen = () => {
    if (props && props.onClick) props.onClick()

    if (open || menu.length === 0) return

    setOpen(true)

    const globalClick = () => {
      setOpen(false)
      setTimeout(() => document.removeEventListener('click', globalClick), 10)
    }

    document.addEventListener('click', globalClick)
  }

  return (
    <div
      role='profileBox'
      className={`${headerStyle.profileItemContainer}`}
      {...props}
      onClick={handlerOpen}
    >
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

      {open && (
        <Card border className={headerStyle.manuDropdown}>
          {menu.map((el, i) => (
            <div
              key={`header-option${i}`}
              onClick={el.action}
              className={headerStyle.manuDropdownItem}
            >
              {el.text}
            </div>
          ))}
        </Card>
      )}
    </div>
  )
}

HeaderProfileItem.defaultProps = {
  name: '',
  menu: [],
  date: new Date()
}

HeaderProfileItem.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date),
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      action: PropTypes.func.isRequired
    })
  )
}

export default HeaderProfileItem
